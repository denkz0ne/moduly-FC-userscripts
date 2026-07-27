// ==UserScript==
// @name         setIndustrialState
// @namespace    faxcopy-userscripts
// @version      2.15
// @description  Rychla zmena stavu VP na Rozrobena, background spracovanie VP a auto-flow pre prislusenstvo.
// @updateURL    https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/setIndustrialState.user.js
// @downloadURL  https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/setIndustrialState.user.js
// @match        https://moduly.faxcopy.sk/vyrobne_prikazy/detail/index/*
// @match        https://admin.faxcopy.sk/*
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
    const ZERO_OUT_DONE_MESSAGE = 'fc-accessory-zero-out-done';
    const ACCESSORY_POPUP_SELECTOR = '.fixed.inset-0.bg-backdrop, .zd-popup-content, [role="dialog"], .modal';
    const TUBE_BUTTONS_ID = 'fc-accessory-tube-actions';
    const TUBE_OPTIONS = [
        { code: 'he00798769', shortcut: 'fg078', label: 'T75' },
        { code: 'he00798637', shortcut: 'fg077', label: 'T63' },
        { code: 'he00798454', shortcut: 'fg076', label: 'T45' },
        { code: 'tubus122', shortcut: 'fg335', label: 'T120' }
    ];

    let stateBusy = false;
    let autoConfirmUntil = 0;
    let autoCloseAccessoryAfterZeroOut = false;
    let tubeScanPromise = null;
    let tubeInventory = new Map();
    let tubeScanTimer = 0;
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

    function getAccessoryRow(target) {
        return target && target.closest ? target.closest('tr') : null;
    }

    function getAccessoryGlobalActionsHost() {
        const containers = Array.from(document.querySelectorAll('div.flex.items-center.col-span-1'));
        return containers.find(node => normalizeText(node.textContent).includes('globalne akcie')) || null;
    }

    function getAccessoryMainSection() {
        const heading = Array.from(document.querySelectorAll('h3')).find(node => {
            return normalizeText(node.textContent).includes('aktualne priradene prislusenstvo');
        });

        if (!heading) return null;

        return heading.closest('div.rounded-b') || heading.closest('div');
    }

    function getAccessoryPopupRoot() {
        const host = getAccessoryGlobalActionsHost();
        if (host) {
            const popup = host.closest(ACCESSORY_POPUP_SELECTOR);
            if (popup) return popup;
        }

        const section = getAccessoryMainSection();
        if (section) {
            const popup = section.closest(ACCESSORY_POPUP_SELECTOR);
            if (popup) return popup;
        }

        return document.querySelector(ACCESSORY_POPUP_SELECTOR) || null;
    }

    function getAccessoryPaginationContainer(section) {
        if (!section) return null;

        return Array.from(section.querySelectorAll('div')).find(node => {
            return normalizeText(node.textContent).includes('zobrazenych') && normalizeText(node.textContent).includes('zaznamov');
        }) || null;
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

    function flashNode(node, color) {
        if (!node) return;

        node.style.transition = 'box-shadow 180ms ease, transform 140ms ease, opacity 180ms ease';
        node.style.boxShadow = `0 0 0 2px ${color}`;
        node.style.transform = 'scale(1.04)';
        node.style.opacity = '0.92';

        window.setTimeout(() => {
            node.style.boxShadow = '';
            node.style.transform = '';
            node.style.opacity = '';
        }, 700);
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
        const text = normalizeText([
            clickable.textContent,
            clickable.innerText,
            clickable.title,
            clickable.getAttribute('aria-label')
        ].filter(Boolean).join(' '));

        return (
            text.includes('vynulovat nenaskladnene') ||
            text.includes('realne vynulovat') ||
            text === 'vynulovat' ||
            text.includes(' vynulovat ')
        );
    }

    function isZeroOutConfirmMessage(message) {
        const text = normalizeText(message);
        return (
            text.includes('vynulovat') ||
            text.includes('nenaskladnene') ||
            text.includes('realne vynulovat')
        );
    }

    function armAutoAccessoryConfirm() {
        autoConfirmUntil = Date.now() + AUTO_CONFIRM_WINDOW_MS;
        autoCloseAccessoryAfterZeroOut = true;
    }

    function shouldAutoConfirmNow() {
        return Date.now() <= autoConfirmUntil;
    }

    function isPositiveConfirmAction(target) {
        const clickable = target && target.closest ? target.closest('button, a, [role="button"]') : null;
        if (!clickable) return false;

        const text = normalizeText([
            clickable.textContent,
            clickable.innerText,
            clickable.title,
            clickable.getAttribute('aria-label')
        ].filter(Boolean).join(' '));

        return text === 'ano' || text === 'áno' || text.includes('potvrdit');
    }

    function isAccessorySaveButton(target) {
        const clickable = target && target.closest ? target.closest('button, a, [role="button"]') : null;
        if (!clickable) return false;

        const text = normalizeText([
            clickable.textContent,
            clickable.innerText,
            clickable.title,
            clickable.getAttribute('aria-label')
        ].filter(Boolean).join(' '));

        return text.includes('ulozit zmeny');
    }

    function isAccessoryConvertButton(target) {
        const clickable = target && target.closest ? target.closest('button, a, [role="button"]') : null;
        if (!clickable) return false;

        const text = normalizeText([
            clickable.textContent,
            clickable.innerText,
            clickable.title,
            clickable.getAttribute('aria-label')
        ].filter(Boolean).join(' '));

        return text.includes('preklopit do poctu');
    }

    function findAccessorySaveButton(row) {
        if (!row) return null;

        return Array.from(row.querySelectorAll('button, a, [role="button"]')).find(node => {
            return isAccessorySaveButton(node);
        }) || null;
    }

    function findAccessoryQuantityInput(row) {
        if (!row) return null;
        return row.querySelector("input[type='number']");
    }

    function parseAccessoryRowCode(row) {
        if (!row) return '';

        const firstCell = row.querySelector('td');
        const text = normalizeText(firstCell ? firstCell.textContent : row.textContent);
        const parts = text.split('/').map(part => normalizeText(part));
        return parts[2] || '';
    }

    function parseAccessoryRowShortcut(row) {
        if (!row) return '';

        const cells = row.querySelectorAll('td');
        if (!cells || cells.length < 3) return '';
        return normalizeText(cells[2].textContent);
    }

    function isTubeRow(row, code) {
        const normalizedCode = normalizeText(code);
        return parseAccessoryRowCode(row) === normalizedCode;
    }

    function flashAccessorySaveFeedback(row, saveButton) {
        if (row) {
            row.style.transition = 'background-color 180ms ease, box-shadow 180ms ease';
            row.style.backgroundColor = 'rgba(31, 95, 209, 0.06)';
            row.style.boxShadow = 'inset 0 0 0 1px rgba(31, 95, 209, 0.18)';

            window.setTimeout(() => {
                row.style.backgroundColor = '';
                row.style.boxShadow = '';
            }, 700);
        }

        if (saveButton) {
            saveButton.style.transition = 'transform 140ms ease, box-shadow 180ms ease, opacity 180ms ease';
            saveButton.style.boxShadow = '0 0 0 2px rgba(31, 95, 209, 0.18)';
            saveButton.style.transform = 'scale(1.06)';
            saveButton.style.opacity = '0.88';

            window.setTimeout(() => {
                saveButton.style.boxShadow = '';
                saveButton.style.transform = '';
                saveButton.style.opacity = '';
            }, 700);
        }
    }

    function triggerAccessorySave(row, reason) {
        const saveButton = findAccessorySaveButton(row);
        if (!saveButton) return false;

        log(`trigger accessory save: ${reason}`);
        flashAccessorySaveFeedback(row, saveButton);
        saveButton.click();
        return true;
    }

    function getTubeButtonsNode() {
        return document.getElementById(TUBE_BUTTONS_ID);
    }

    function styleTubeButton(button) {
        Object.assign(button.style, {
            marginLeft: '8px',
            minWidth: '44px',
            height: '30px',
            padding: '0 10px',
            borderRadius: '6px',
            border: '1px solid #c7d2e0',
            background: '#ffffff',
            color: '#2f3b4c',
            fontSize: '12px',
            fontWeight: '700',
            cursor: 'pointer',
            opacity: '1'
        });
    }

    function setTubeButtonState(button, enabled) {
        button.disabled = !enabled;
        button.style.opacity = enabled ? '1' : '0.35';
        button.style.cursor = enabled ? 'pointer' : 'default';
    }

    function ensureTubeButtons() {
        const host = getAccessoryGlobalActionsHost();
        if (!host) return null;

        let wrapper = getTubeButtonsNode();
        if (!wrapper) {
            wrapper = document.createElement('span');
            wrapper.id = TUBE_BUTTONS_ID;
            Object.assign(wrapper.style, {
                display: 'inline-flex',
                alignItems: 'center',
                marginLeft: '10px'
            });

            TUBE_OPTIONS.forEach(option => {
                const button = document.createElement('button');
                button.type = 'button';
                button.textContent = option.label;
                button.dataset.tubeCode = option.code;
                button.dataset.tubeLabel = option.label;
                styleTubeButton(button);
                setTubeButtonState(button, false);
                button.addEventListener('click', () => {
                    applyTubeSelection(option.code, option.label);
                });
                wrapper.appendChild(button);
            });
        }

        if (wrapper.parentNode !== host) {
            host.appendChild(wrapper);
        }

        return wrapper;
    }

    function updateTubeButtonsAvailability() {
        const wrapper = ensureTubeButtons();
        if (!wrapper) return;

        Array.from(wrapper.querySelectorAll('button')).forEach(button => {
            setTubeButtonState(button, tubeInventory.has(button.dataset.tubeCode || ''));
        });
    }

    function wait(ms) {
        return new Promise(resolve => window.setTimeout(resolve, ms));
    }

    function getTubeCandidateRows() {
        const popup = getAccessoryPopupRoot();
        const section = getAccessoryMainSection();
        const scope = section || popup || document;
        const rows = Array.from(scope.querySelectorAll('tbody tr'));

        return rows.filter(row => {
            const cells = row.querySelectorAll('td');
            if (!cells || cells.length < 4) return false;

            const rowText = normalizeText(row.textContent);
            if (!rowText) return false;

            const code = parseAccessoryRowCode(row);
            const shortcut = parseAccessoryRowShortcut(row);
            if (!code && !shortcut) return false;

            return row.querySelector('button[title="Uložiť zmeny"], button[title="Vynulovať"], button[title="Vymazať"]');
        });
    }

    function collectTubeRowsFromSection() {
        const rows = getTubeCandidateRows();

        rows.forEach(row => {
            const code = parseAccessoryRowCode(row);
            const shortcut = parseAccessoryRowShortcut(row);
            const match = TUBE_OPTIONS.find(option => {
                const normalizedCode = normalizeText(option.code);
                const normalizedShortcut = normalizeText(option.shortcut);
                return normalizedCode === code
                    || normalizedShortcut === shortcut
                    || code.includes(normalizedCode)
                    || shortcut.includes(normalizedShortcut);
            });
            if (!match) return;

            tubeInventory.set(match.code, { label: match.label, row });
        });
    }

    async function scanTubeInventory() {
        const popup = getAccessoryPopupRoot();
        if (!popup) return;

        setStatus('Hladam tubusy v prislusenstve...', 'busy');
        tubeInventory = new Map();
        collectTubeRowsFromSection();
        updateTubeButtonsAvailability();
        if (tubeInventory.size) {
            setStatus('Tubus buttony pripravene', 'success');
        } else {
            setStatus('Tubusy v aktualnom zobrazeni nenasiel', 'idle');
        }
    }

    function ensureTubeInventoryScanned() {
        if (tubeScanPromise) return tubeScanPromise;

        tubeScanPromise = scanTubeInventory().finally(() => {
            tubeScanPromise = null;
        });

        return tubeScanPromise;
    }

    function scheduleTubeInventoryScan() {
        window.clearTimeout(tubeScanTimer);
        tubeScanTimer = window.setTimeout(() => {
            ensureTubeInventoryScanned();
        }, 120);
    }

    async function setAccessoryRowQuantity(row, quantity, reason) {
        const input = findAccessoryQuantityInput(row);
        if (!input) return false;

        if (Number(input.value || 0) === Number(quantity)) {
            return true;
        }

        input.value = String(quantity);
        input.dispatchEvent(new Event('input', { bubbles: true }));
        input.dispatchEvent(new Event('change', { bubbles: true }));
        input.blur();
        await wait(80);
        return triggerAccessorySave(row, reason);
    }

    async function applyTubeSelection(code, label) {
        await ensureTubeInventoryScanned();

        if (!tubeInventory.has(code)) {
            setStatus(`Tubus ${label} nie je v prislusenstve`, 'error');
            updateTubeButtonsAvailability();
            return;
        }

        setStatus(`Nastavujem tubus ${label}...`, 'busy');

        const actions = TUBE_OPTIONS
            .filter(option => tubeInventory.has(option.code))
            .map(option => ({
                code: option.code,
                label: option.label,
                quantity: option.code === code ? 1 : 0
            }));

        for (const action of actions) {
            const row = tubeInventory.get(action.code)?.row || null;
            if (!row) continue;

            await setAccessoryRowQuantity(row, action.quantity, `tube-${action.label}`);
            await wait(220);
        }

        const button = ensureTubeButtons() ? getTubeButtonsNode().querySelector(`button[data-tube-code="${code}"]`) : null;
        flashNode(button, 'rgba(22, 101, 52, 0.20)');
        setStatus(`Tubus ${label} nastaveny`, 'success');
    }

    function findPositiveConfirmButton() {
        const candidates = Array.from(document.querySelectorAll('button, a, [role="button"]'));
        return candidates.find(node => {
            const popup = node.closest(ACCESSORY_POPUP_SELECTOR);
            return popup && isPositiveConfirmAction(node);
        }) || null;
    }

    function maybeConfirmZeroOutDialog() {
        if (!shouldAutoConfirmNow()) return false;

        const confirmButton = findPositiveConfirmButton();
        if (!confirmButton) return false;

        log('auto-click confirm zero out');
        confirmButton.click();
        return true;
    }

    function closeAccessoryPanel() {
        const accTable = getAccessoryContainer();
        if (accTable) {
            accTable.innerHTML = '';
        }

        const closeButton = document.querySelector('.zd-popup-content button');
        if (closeButton) {
            closeButton.click();
        }

        document.querySelectorAll(ACCESSORY_POPUP_SELECTOR).forEach(node => {
            if (node && node.remove) node.remove();
        });

        document.querySelectorAll('#accTable .ui-dialog-content, #accTable .ui-dialog, #accTable [data-modal], #accTable .modal').forEach(node => {
            if (node && node.remove) node.remove();
        });
    }

    function notifyParentZeroOutDone() {
        try {
            window.parent.postMessage({ type: ZERO_OUT_DONE_MESSAGE }, '*');
        } catch (error) {
            log('parent postMessage failed', error);
        }
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
            window.setTimeout(() => {
                maybeConfirmZeroOutDialog();
            }, 25);
            window.setTimeout(() => {
                maybeConfirmZeroOutDialog();
            }, 150);
        }, true);
    }

    function installZeroOutDialogWatcher() {
        if (window.__fcZeroOutDialogWatcherInstalled) return;
        window.__fcZeroOutDialogWatcherInstalled = true;

        const observer = new MutationObserver(() => {
            maybeConfirmZeroOutDialog();
        });

        if (document.body) {
            observer.observe(document.body, { childList: true, subtree: true });
        }
    }

    function installAccessoryInlineSaveWatcher() {
        if (window.__fcAccessoryInlineSaveWatcherInstalled) return;
        window.__fcAccessoryInlineSaveWatcherInstalled = true;

        document.addEventListener('keydown', event => {
            const target = event.target;
            if (!(target instanceof HTMLInputElement)) return;
            if (event.key !== 'Enter') return;
            if (target.type !== 'number') return;

            const row = getAccessoryRow(target);
            if (!row) return;

            event.preventDefault();
            event.stopPropagation();
            if (typeof event.stopImmediatePropagation === 'function') {
                event.stopImmediatePropagation();
            }

            target.blur();
            target.dispatchEvent(new Event('input', { bubbles: true }));
            target.dispatchEvent(new Event('change', { bubbles: true }));

            window.setTimeout(() => {
                triggerAccessorySave(row, 'enter');
            }, 90);
        }, true);

        document.addEventListener('click', event => {
            const target = event.target;
            if (!isAccessoryConvertButton(target)) return;

            const row = getAccessoryRow(target);
            if (!row) return;

            window.setTimeout(() => {
                triggerAccessorySave(row, 'convert');
            }, 40);

            window.setTimeout(() => {
                triggerAccessorySave(row, 'convert-fallback');
            }, 180);
        }, true);
    }

    function installTubeButtonsWatcher() {
        if (window.__fcTubeButtonsWatcherInstalled) return;
        window.__fcTubeButtonsWatcherInstalled = true;

        ensureTubeButtons();
        updateTubeButtonsAvailability();
        scheduleTubeInventoryScan();

        const observer = new MutationObserver(() => {
            ensureTubeButtons();
            updateTubeButtonsAvailability();
            scheduleTubeInventoryScan();
        });

        if (document.body) {
            observer.observe(document.body, { childList: true, subtree: true });
        }
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
                        notifyParentZeroOutDone();
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

    function installParentZeroOutMessageListener() {
        if (window.__fcParentZeroOutListenerInstalled) return;
        window.__fcParentZeroOutListenerInstalled = true;

        window.addEventListener('message', event => {
            const data = event && event.data;
            if (!data || data.type !== ZERO_OUT_DONE_MESSAGE) return;

            closeAccessoryPanel();
            setStatus('Prislusenstvo vynulovane a okno zavrete', 'success');
        });
    }

    function initAdminAccessoryContext() {
        installAutoConfirmOverride();
        installAccessoryInlineSaveWatcher();
        installTubeButtonsWatcher();
        installZeroOutClickWatcher();
        installZeroOutDialogWatcher();
        installZeroOutRequestWatcher();
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

    function initModulyDetailContext() {
        installParentZeroOutMessageListener();
        installAutoConfirmOverride();
        installAccessoryInlineSaveWatcher();
        installTubeButtonsWatcher();
        installZeroOutClickWatcher();
        installZeroOutDialogWatcher();
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

    function init() {
        if (window.location.hostname === 'admin.faxcopy.sk') {
            initAdminAccessoryContext();
            return;
        }

        initModulyDetailContext();
    }

    init();
})();
