// ==UserScript==
// @name         setIndustrialState
// @namespace    faxcopy-userscripts
// @version      2.3
// @description  Rychla zmena stavu VP na Rozrobena a otvorenie prislusenstva bez refreshu.
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

    let isBusy = false;

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

    function styleInlineLink(link) {
        Object.assign(link.style, {
            color: '#0f3ea8',
            fontWeight: '700',
            fontSize: '15px',
            textDecoration: 'none',
            cursor: 'pointer',
            display: 'inline-block',
            padding: '1px 6px',
            borderRadius: '4px',
            border: '1px solid #93c5fd',
            background: '#eff6ff',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.85)'
        });
        link.onmouseenter = () => {
            link.style.textDecoration = 'underline';
            link.style.background = '#dbeafe';
            link.style.borderColor = '#60a5fa';
        };
        link.onmouseleave = () => {
            link.style.textDecoration = 'none';
            link.style.background = '#eff6ff';
            link.style.borderColor = '#93c5fd';
        };
        return link;
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
            marginLeft: '8px',
            color: '#6b7280'
        });
        node.textContent = '';
        actions.appendChild(node);
        return node;
    }

    function setStatus(text, tone) {
        const node = ensureStatusNode();
        node.textContent = text;

        const themes = {
            idle: { background: '#1f2937', border: '#111827', color: '#e5e7eb' },
            busy: { background: '#1d4ed8', border: '#1e40af', color: '#eff6ff' },
            success: { background: '#166534', border: '#14532d', color: '#ecfdf5' },
            error: { background: '#991b1b', border: '#7f1d1d', color: '#fef2f2' }
        };

        const theme = themes[tone] || themes.idle;
        node.style.color = theme.color;
    }

    function setBusy(nextBusy) {
        isBusy = nextBusy;
        [BUTTON_ROZROBENA_ID, BUTTON_ACCESSORY_ID].forEach(id => {
            const button = document.getElementById(id);
            if (!button) return;
            button.style.pointerEvents = nextBusy ? 'none' : '';
            button.style.opacity = nextBusy ? '0.65' : '1';
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

    function updateUiToRozrobena() {
        const label = getStateLabel();
        if (label) {
            label.textContent = 'Rozrobena';
        }

        const select = getStateSelect();
        if (select) {
            select.value = STATE_VALUE_IN_PROGRESS;
        }
    }

    function buildSettingsPayload() {
        const form = getSettingsForm();
        if (!form) {
            throw new Error('Formular #frm-settings sa nenasiel.');
        }

        const formData = new FormData(form);
        formData.set('new_state', STATE_VALUE_IN_PROGRESS);
        formData.set('save', 'Potvrdit');

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
        if (isBusy) return;

        if (isAlreadyRozrobena()) {
            setStatus('VP uz je Rozrobena', 'idle');
            return;
        }

        setBusy(true);
        setStatus('Prepinam stav na Rozrobena...', 'busy');

        try {
            await submitRozrobenaInBackground();
            setStatus('Stav bol zmeneny na Rozrobena', 'success');
        } catch (error) {
            console.error(error);
            setStatus(`Chyba pri zmene stavu: ${error.message}`, 'error');
        } finally {
            setBusy(false);
        }
    }

    async function runAccessoryFlow() {
        if (isBusy) return;

        setBusy(true);
        setStatus('Otvaram prislusenstvo...', 'busy');

        try {
            openAccessoryPanel();
            if (isAlreadyRozrobena()) {
                setStatus('Prislusenstvo otvorene, stav uz bol Rozrobena', 'success');
            } else {
                setStatus('Prislusenstvo otvorene, menim stav na Rozrobena...', 'busy');
                await submitRozrobenaInBackground();
                setStatus('Prislusenstvo otvorene, stav je uz Rozrobena', 'success');
            }
        } catch (error) {
            console.error(error);
            setStatus(`Chyba: ${error.message}`, 'error');
        } finally {
            setBusy(false);
        }
    }

    function ensureButton(id, text, title, options, handler) {
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

    function ensureSeparator(id, text) {
        const actions = ensureInlineActionsNode();
        let node = document.getElementById(id);
        if (!node) {
            node = document.createElement('span');
            node.id = id;
            node.textContent = text;
            node.style.color = '#6b7280';
            actions.appendChild(node);
        }
        return node;
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
            marginLeft: '8px',
            fontSize: '15px',
            whiteSpace: 'nowrap',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px'
        });

        host.appendChild(actions);
        return actions;
    }

    function canBoot() {
        return !!(getSettingsForm() && getStateSelect());
    }

    function renderButtons() {
        if (!canBoot()) return false;

        ensureButton(
            BUTTON_ROZROBENA_ID,
            '[Rozrobena]',
            'Zmeni stav VP na Rozrobena bez potvrdzovacieho dialogu',
            {},
            runQuickRozrobena
        );

        ensureSeparator('setIndustrialStateSep', ' | ');

        ensureButton(
            BUTTON_ACCESSORY_ID,
            '[Prislusenstvo]',
            'Otvori prislusenstvo a na pozadi zmeni stav na Rozrobena',
            {},
            runAccessoryFlow
        );

        ensureStatusNode();
        return true;
    }

    function init() {
        if (renderButtons()) {
            log('ready');
            return;
        }

        let tries = 0;
        const interval = setInterval(() => {
            tries += 1;
            if (renderButtons() || tries > 60) {
                clearInterval(interval);
            }
        }, 500);

        const observer = new MutationObserver(() => {
            renderButtons();
        });

        if (document.body) {
            observer.observe(document.body, { childList: true, subtree: true });
        }
    }

    init();
})();
