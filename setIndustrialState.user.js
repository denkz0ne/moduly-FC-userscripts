// ==UserScript==
// @name         setIndustrialState
// @namespace    faxcopy-userscripts
// @version      2.7
// @description  Rychla zmena stavu VP na Rozrobena, background spracovanie VP a auto-flow pre prislusenstvo.
// @updateURL    https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/setIndustrialState.user.js
// @downloadURL  https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/setIndustrialState.user.js
// @match        https://moduly.faxcopy.sk/vyrobne_prikazy/detail/index/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function () {
    'use strict';

    const STATE_VALUE_IN_PROGRESS = '1';
    const STATE_LABEL_IN_PROGRESS = 'rozrobena';
    const BUTTON_ROZROBENA_ID = 'setIndustrialStateQuickButton';
    const BUTTON_ACCESSORY_ID = 'setIndustrialStateAccessoryButton';
    const ACTIONS_ID = 'setIndustrialStateInlineActions';
    const STATUS_TEXT_ID = 'set-industrial-state-status';
    const FRONTS_CONTAINER_ID = 'vf-ed-hf';
    const PROCESSING_FLAG = 'data-fc-processing-bound';
    const ACCESSORY_CONTAINER_ID = 'accTable';
    const AUTO_CONFIRM_WINDOW_MS = 3000;
    const ZERO_OUT_URL_FRAGMENT = '/admin/accessory/zeroOutOfStock';

    let stateBusy = false;
    let autoConfirmUntil = 0;
    let autoCloseAccessoryAfterZeroOut = false;
    const nativeConfirm = window.confirm ? window.confirm.bind(window) : null;

    function log(...args) {
        console.log('[setIndustrialState]', ...args);
    }

    function normalizeText(value) {
        return String(value || '')
            .replace(/\s+/g, ' ')
            .trim()
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '');
    }

    function getVpId() {
        const match = window.location.pathname.match(/\/index\/(\d+)/);
        return match ? match[1] : '';
    }

    function getSettingsForm() {
        return document.getElementById('frm-settings');
    }

    function getStateSelect() {
        return document.getElementById('frm-new_state');
    }

    function getStateLabel() {
        return document.getElementById('new_state_label');
    }

    function getAccessoryTrigger() {
        return document.querySelector("a[onclick*='openAccessoryTable']");
    }

    function getStatusNode() {
        return document.getElementById(STATUS_TEXT_ID);
    }

    function getInlineActionsHost() {
        return document.querySelector('#frm-settings .actual');
    }

    function getInlineActionsNode() {
        return document.getElementById(ACTIONS_ID);
    }

    function getFrontsContainer() {
        return document.getElementById(FRONTS_CONTAINER_ID);
    }

    function getAccessoryContainer() {
        return document.getElementById(ACCESSORY_CONTAINER_ID);
    }

    function styleInlineLink(link) {
        Object.assign(link.style, {
            color: '#1f5fd1',
            fontWeight: '700',
            fontSize: '15px',
            lineHeight: '1.1',
            textDecoration: 'none',
            cursor: 'pointer',
            display: 'inline-block',
            marginLeft: '0',
            padding: '1px 10px 2px',
            borderRadius: '4px',
            border: '1px solid #8bb3ff',
            background: 'transparent',
            boxShadow: 'none'
        });
        link.onmouseenter = null;
        link.onmouseleave = null;
        return link;
    }

    function ensureInlineActionsNode() {
        const host = getInlineActionsHost();
        if (!host) {
            throw new Error('Inline host pre akcie sa nenasiel.');
        }

        let actions = getInlineActionsNode();
        if (actions) return actions;

        actions = document.createElement('span');
        actions.id = ACTIONS_ID;
        Object.assign(actions.style, {
            marginLeft: '0',
            marginTop: '6px',
            fontSize: 'inherit',
            whiteSpace: 'nowrap',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
        });

        host.appendChild(actions);
        return actions;
    }

    function ensureStatusNode() {
        let node = getStatusNode();
        if (node) return node;

        const actions = ensureInlineActionsNode();
        node = document.createElement('span');
        node.id = STATUS_TEXT_ID;
        Object.assign(node.style, {
            fontSize: '11px',
            lineHeight: '1.35',
            marginLeft: '10px',
            color: '#6b7280'
        });
        node.textContent = '';
        actions.appendChild(node);
        return node;
    }

    function setStatus(text, tone) {
        const node = ensureStatusNode();
        node.textContent = text || '';

        const colors = {
            idle: '#6b7280',
            busy: '#1d4ed8',
            success: '#166534',
            error: '#991b1b'
        };

        node.style.color = colors[tone] || colors.idle;
    }

    function setStateBusy(nextBusy) {
        stateBusy = nextBusy;
        [BUTTON_ROZROBENA_ID, BUTTON_ACCESSORY_ID].forEach(id => {
            const button = document.getElementById(id);
            if (!button) return;
            button.style.pointerEvents = nextBusy ? 'none' : '';
            button.style.opacity = nextBusy ? '0.6' : '1';
        });
    }

    function isAlreadyRozrobena() {
        const select = getStateSelect();
        if (select && String(select.value) === STATE_VALUE_IN_PROGRESS) {
            return true;
        }

        const label = getStateLabel();
        return normalizeText(label && label.textContent).includes(STATE_LABEL_IN_PROGRESS);
    }

    function updateInlineActionsVisibility() {
        const actions = getInlineActionsNode();
        if (!actions) return;
        actions.style.display = isAlreadyRozrobena() ? 'none' : 'inline-flex';
    }

    function updateUiToRozrobena() {
        const label = getStateLabel();
        if (label) {
            label.textContent = 'Rozrobená';
        }

        const select = getStateSelect();
        if (select) {
            select.value = STATE_VALUE_IN_PROGRESS;
        }

        updateInlineActionsVisibility();
    }

    function buildSettingsPayload() {
        const form = getSettingsForm();
        if (!form) {
            throw new Error('Formular #frm-settings sa nenašiel.');
        }

        const formData = new FormData(form);
        formData.set('new_state', STATE_VALUE_IN_PROGRESS);
        formData.set('save', 'Potvrdiť');

        return new URLSearchParams(formData);
    }

    async function submitRozrobenaInBackground() {
        const body = buildSettingsPayload();
        const response = await fetch(window.location.href, {
            method: 'POST',
            credentials: 'same-origin',
            redirect: 'follow',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            },
            body: body.toString()
        });

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        updateUiToRozrobena();
        return response;
    }

    function openAccessoryPanel() {
        const trigger = getAccessoryTrigger();
        if (!trigger) {
            throw new Error('Tlacitko Príslušenstvo sa nenašlo.');
        }

        trigger.click();
    }

    async function runQuickRozrobena() {
        if (stateBusy) return;

        if (isAlreadyRozrobena()) {
            updateInlineActionsVisibility();
            return;
        }

        setStateBusy(true);
        setStatus('Prepinam stav na Rozrobena...', 'busy');

        try {
            await submitRozrobenaInBackground();
            setStatus('Stav zmeneny na Rozrobena', 'success');
        } catch (error) {
            console.error(error);
            setStatus(`Chyba pri zmene stavu: ${error.message}`, 'error');
        } finally {
            setStateBusy(false);
        }
    }

    async function runAccessoryFlow() {
        if (stateBusy) return;

        setStateBusy(true);
        setStatus('Otvaram príslušenstvo...', 'busy');

        try {
            openAccessoryPanel();
            if (isAlreadyRozrobena()) {
                setStatus('Príslušenstvo otvorene', 'success');
            } else {
                setStatus('Príslušenstvo otvorene, menim stav...', 'busy');
                await submitRozrobenaInBackground();
                setStatus('Príslušenstvo otvorene, stav je Rozrobena', 'success');
            }
        } catch (error) {
            console.error(error);
            setStatus(`Chyba: ${error.message}`, 'error');
        } finally {
            setStateBusy(false);
        }
    }

    function ensureButton(id, text, title, handler) {
        const actions = ensureInlineActionsNode();
        let button = document.getElementById(id);

        if (!button) {
            button = document.createElement('a');
            button.id = id;
            button.href = 'javascript:void(0)';
            button.textContent = text;
            button.title = title;
            button.addEventListener('click', handler);
        }

        styleInlineLink(button);

        if (button.parentNode !== actions) {
            actions.appendChild(button);
        }

        return button;
    }

    async function refreshFrontsSection() {
        const vpId = getVpId();
        const container = getFrontsContainer();
        if (!vpId || !container) return;

        const response = await fetch(`/vyrobne_prikazy/ajaxData/getFronts/${vpId}`, {
            method: 'POST',
            credentials: 'same-origin'
        });

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        container.innerHTML = await response.text();
        bindProcessingLinks();
    }

    function markProcessingLinkBusy(link, busy) {
        link.style.pointerEvents = busy ? 'none' : '';
        link.style.opacity = busy ? '0.45' : '1';
    }

    function styleProcessingLink(link) {
        Object.assign(link.style, {
            width: '16px',
            height: '16px',
            overflow: 'hidden',
            transform: 'scale(1.45)',
            transformOrigin: 'center',
            display: 'inline-block',
            padding: '0',
            margin: '0 8px',
            cursor: 'pointer',
            backgroundRepeat: 'no-repeat'
        });
    }

    async function processQueueItem(link) {
        const href = link.getAttribute('href');
        if (!href) return;

        markProcessingLinkBusy(link, true);
        setStatus('Spracovavam VP...', 'busy');

        try {
            const response = await fetch(href, {
                method: 'GET',
                credentials: 'same-origin',
                redirect: 'follow'
            });

            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }

            await refreshFrontsSection();
            setStatus('VP spracovana', 'success');
        } catch (error) {
            console.error(error);
            markProcessingLinkBusy(link, false);
            setStatus(`Chyba pri spracovani: ${error.message}`, 'error');
        }
    }

    function bindProcessingLinks() {
        document.querySelectorAll("a.action.silk.accept[href*='/vyrobne_prikazy/detail/acceptVP/']").forEach(link => {
            styleProcessingLink(link);
            if (link.getAttribute(PROCESSING_FLAG) === '1') return;

            link.setAttribute(PROCESSING_FLAG, '1');
            link.addEventListener('click', event => {
                event.preventDefault();
                event.stopPropagation();
                processQueueItem(link);
            });
        });
    }

    function isZeroOutAccessoryAction(target) {
        const clickable = target && target.closest ? target.closest('button, a, [role="button"]') : null;
        if (!clickable) return false;
        const text = normalizeText(clickable.textContent || clickable.innerText || clickable.title || clickable.getAttribute('aria-label') || '');
        return text.includes('vynulovat') && text.includes('prislusen');
    }

    function isZeroOutConfirmMessage(message) {
        const text = normalizeText(message);
        return text.includes('vynulovat') && text.includes('prislusen');
    }

    function armAutoAccessoryConfirm() {
        autoConfirmUntil = Date.now() + AUTO_CONFIRM_WINDOW_MS;
        autoCloseAccessoryAfterZeroOut = true;
    }

    function shouldAutoConfirmNow() {
        return Date.now() <= autoConfirmUntil;
    }

    function closeAccessoryPanel() {
        const accTable = getAccessoryContainer();
        if (accTable) {
            accTable.innerHTML = '';
        }

        document.querySelectorAll('#accTable .ui-dialog-content, #accTable .ui-dialog, #accTable [data-modal], #accTable .modal').forEach(node => {
            if (node && node.remove) node.remove();
        });
    }

    function installAutoConfirmOverride() {
        if (typeof nativeConfirm !== 'function') return;

        window.confirm = function (message) {
            if (shouldAutoConfirmNow() && isZeroOutConfirmMessage(message)) {
                log('auto-confirm zero out accessory');
                setStatus('Vynulovavam prislusenstvo...', 'busy');
                return true;
            }

            return nativeConfirm(message);
        };
    }

    function installZeroOutClickWatcher() {
        document.addEventListener('click', event => {
            if (!isZeroOutAccessoryAction(event.target)) return;
            armAutoAccessoryConfirm();
        }, true);
    }

    function installZeroOutRequestWatcher() {
        if (window.__fcZeroOutWatcherInstalled) return;
        window.__fcZeroOutWatcherInstalled = true;

        const originalOpen = XMLHttpRequest.prototype.open;
        const originalSend = XMLHttpRequest.prototype.send;

        XMLHttpRequest.prototype.open = function (method, url, ...rest) {
            this.__fcMethod = method;
            this.__fcUrl = typeof url === 'string' ? url : '';
            return originalOpen.call(this, method, url, ...rest);
        };

        XMLHttpRequest.prototype.send = function (body) {
            const url = this.__fcUrl || '';
            const method = String(this.__fcMethod || '').toUpperCase();

            if (method === 'POST' && url.includes(ZERO_OUT_URL_FRAGMENT)) {
                this.addEventListener('loadend', () => {
                    if (this.status >= 200 && this.status < 300) {
                        setStatus('Prislusenstvo vynulovane, zatvaram okno...', 'success');
                        autoConfirmUntil = 0;
                        if (autoCloseAccessoryAfterZeroOut) {
                            window.setTimeout(() => {
                                closeAccessoryPanel();
                                autoCloseAccessoryAfterZeroOut = false;
                                setStatus('Prislusenstvo vynulovane a okno zavrete', 'success');
                            }, 500);
                        }
                    } else {
                        autoCloseAccessoryAfterZeroOut = false;
                        setStatus(`Chyba pri vynulovani: HTTP ${this.status}`, 'error');
                    }
                }, { once: true });
            }

            return originalSend.call(this, body);
        };
    }

    function canBoot() {
        return !!(getSettingsForm() && getStateSelect());
    }

    function renderButtons() {
        if (!canBoot()) return false;

        ensureButton(
            BUTTON_ROZROBENA_ID,
            'Rozrobená',
            'Zmeni stav VP na Rozrobena bez potvrdzovacieho dialogu',
            runQuickRozrobena
        );

        ensureButton(
            BUTTON_ACCESSORY_ID,
            'Príslušenstvo',
            'Otvori prislusenstvo a na pozadi zmeni stav na Rozrobena',
            runAccessoryFlow
        );

        ensureStatusNode();
        updateInlineActionsVisibility();
        return true;
    }

    function init() {
        installAutoConfirmOverride();
        installZeroOutClickWatcher();
        installZeroOutRequestWatcher();
        bindProcessingLinks();

        if (renderButtons()) {
            log('ready');
        }

        let tries = 0;
        const interval = setInterval(() => {
            tries += 1;
            renderButtons();
            bindProcessingLinks();
            if (tries > 60) {
                clearInterval(interval);
            }
        }, 500);

        const observer = new MutationObserver(() => {
            renderButtons();
            bindProcessingLinks();
        });

        if (document.body) {
            observer.observe(document.body, { childList: true, subtree: true });
        }
    }

    init();
})();
