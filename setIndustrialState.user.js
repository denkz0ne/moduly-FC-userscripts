// ==UserScript==
// @name         setIndustrialState
// @namespace    faxcopy-userscripts
// @version      2.1
// @description  Rychla zmena stavu VP na Rozrobena a otvorenie prislusenstva bez refreshu.
// @updateURL    https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/setIndustrialState.user.js
// @downloadURL  https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/setIndustrialState.user.js
// @match        https://moduly.faxcopy.sk/vyrobne_prikazy/detail/index/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function () {
    'use strict';

    const PANEL_ID = 'fc-userscripts-action-panel';
    const STATE_VALUE_IN_PROGRESS = '1';
    const STATE_LABEL_IN_PROGRESS = 'rozrobena';
    const STATUS_TEXT_ID = 'set-industrial-state-status';
    const BUTTON_ROZROBENA_ID = 'setIndustrialStateQuickButton';
    const BUTTON_ACCESSORY_ID = 'setIndustrialStateAccessoryButton';

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

    function ensureActionPanel() {
        if (window.FCUserscripts && typeof window.FCUserscripts.ensureActionPanel === 'function') {
            return window.FCUserscripts.ensureActionPanel();
        }

        let panel = document.getElementById(PANEL_ID);
        if (panel) return panel;

        panel = document.createElement('div');
        panel.id = PANEL_ID;
        Object.assign(panel.style, {
            position: 'fixed',
            right: '20px',
            bottom: '20px',
            zIndex: '999997',
            width: '118px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch',
            gap: '6px'
        });
        document.body.appendChild(panel);
        return panel;
    }

    function styleActionButton(button, options = {}) {
        if (window.FCUserscripts && typeof window.FCUserscripts.styleActionButton === 'function') {
            window.FCUserscripts.styleActionButton(button, options);
            return button;
        }

        const background = options.background || '#4a5568';
        const borderColor = options.borderColor || background;
        Object.assign(button.style, {
            position: 'static',
            display: 'block',
            width: '100%',
            boxSizing: 'border-box',
            margin: '0',
            padding: '10px 12px',
            textAlign: 'center',
            lineHeight: '16px',
            fontWeight: '700',
            color: '#fff',
            background,
            border: `1px solid ${borderColor}`,
            borderRadius: '6px',
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(0,0,0,0.18)',
            textDecoration: 'none'
        });
        return button;
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

    function ensureStatusNode() {
        const panel = ensureActionPanel();
        let node = getStatusNode();
        if (node) return node;

        node = document.createElement('div');
        node.id = STATUS_TEXT_ID;
        Object.assign(node.style, {
            fontSize: '11px',
            lineHeight: '1.35',
            color: '#e2e8f0',
            background: '#1f2937',
            border: '1px solid #111827',
            borderRadius: '6px',
            padding: '8px 10px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.18)'
        });
        node.textContent = 'Pripravene';
        panel.appendChild(node);
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
        node.style.background = theme.background;
        node.style.borderColor = theme.border;
        node.style.color = theme.color;
    }

    function setBusy(nextBusy) {
        isBusy = nextBusy;
        [BUTTON_ROZROBENA_ID, BUTTON_ACCESSORY_ID].forEach(id => {
            const button = document.getElementById(id);
            if (!button) return;
            button.style.pointerEvents = nextBusy ? 'none' : '';
            button.style.opacity = nextBusy ? '0.7' : '1';
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
        const panel = ensureActionPanel();
        let button = document.getElementById(id);

        if (!button) {
            button = document.createElement('a');
            button.id = id;
            button.href = 'javascript:void(0)';
            button.textContent = text;
            button.title = title;
            button.addEventListener('click', handler);
        }

        styleActionButton(button, options);

        if (button.parentNode !== panel) {
            panel.appendChild(button);
        }

        return button;
    }

    function canBoot() {
        return !!(getSettingsForm() && getStateSelect());
    }

    function renderButtons() {
        if (!canBoot()) return false;

        ensureButton(
            BUTTON_ROZROBENA_ID,
            'Rozrobena',
            'Zmeni stav VP na Rozrobena bez potvrdzovacieho dialogu',
            { background: '#2e7d32', borderColor: '#1b5e20' },
            runQuickRozrobena
        );

        ensureButton(
            BUTTON_ACCESSORY_ID,
            'Prislusenstvo',
            'Otvori prislusenstvo a na pozadi zmeni stav na Rozrobena',
            { background: '#1565c0', borderColor: '#0d47a1' },
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
