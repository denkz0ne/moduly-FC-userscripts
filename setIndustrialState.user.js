// ==UserScript==
// @name         setIndustrialState
// @namespace    faxcopy-userscripts
// @version      2.6
// @description  Rychla zmena stavu VP na Rozrobena a background spracovanie VP bez refreshu.
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

    let stateBusy = false;

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
            throw new Error('Formular #frm-settings sa nenasiel.');
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
            throw new Error('Tlacitko Prislusenstvo sa nenaslo.');
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
        setStatus('Otvaram prislusenstvo...', 'busy');

        try {
            openAccessoryPanel();
            if (isAlreadyRozrobena()) {
                setStatus('Prislusenstvo otvorene', 'success');
            } else {
                setStatus('Prislusenstvo otvorene, menim stav...', 'busy');
                await submitRozrobenaInBackground();
                setStatus('Prislusenstvo otvorene, stav je Rozrobena', 'success');
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
