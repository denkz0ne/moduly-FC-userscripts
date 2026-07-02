// ==UserScript==
// @name         labelRegeneratorV2
// @namespace    https://moduly.faxcopy.sk/
// @author       mato e.
// @version      2.0.18
// @description  Uprava print stitku, overlay zony, konfigurator layoutu a klavesa L pre otvorenie, tlac a zatvorenie stitku.
// @updateURL    https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/main/labelRegeneratorV2.user.js
// @downloadURL  https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/main/labelRegeneratorV2.user.js
// @require      https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js
// @match        https://moduly.faxcopy.sk/vyrobne_prikazy/detail/printLabel/*
// @match        https://moduly.faxcopy.sk/vyrobne_prikazy/detail/index/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function () {
    'use strict';

    window.labelRegeneratorV2Version = '2.0.18';

    const ZONES = [
        { key: 'TM_top', aliases: [], pos: 'top1', label: 'pravy horny 1' },
        { key: 'TM_bottom', aliases: [], pos: 'top2', label: 'pravy horny 2' },
        { key: 'TM_testoLeft', aliases: ['testoleft'], pos: 'bottomLeft', label: 'lavy dolny' },
        { key: 'TM_testoRight', aliases: ['testoright'], pos: 'bottomRight', label: 'pravy dolny' }
    ];

    const overrides = Object.create(null);
    const baselines = Object.create(null);
    const DELAYED_PRINT_MS = 3000;
    let mmPxCache = null;
    let refreshing = false;
    let panelControlBound = false;
    let visualSelectionBound = false;
    let keyboardOverrideBound = false;
    let delayedPrintState = null;

    function zoneKeys(zone) {
        return [zone.key].concat(zone.aliases || []);
    }

    function findZone(name) {
        const normalized = String(name || '').trim();
        return ZONES.find((zone) => zone.key === normalized || zone.aliases.includes(normalized)) || null;
    }

    function currentValue(zone) {
        for (const key of zoneKeys(zone)) {
            const value = window[key];
            if (value != null && String(value).trim()) return String(value).trim();
        }
        for (const key of zoneKeys(zone)) {
            const stored = localStorage.getItem(key);
            if (stored != null && String(stored).trim()) return String(stored).trim();
        }
        return '';
    }

    function captureBaseline(zone) {
        const value = currentValue(zone);
        zoneKeys(zone).forEach((key) => {
            baselines[key] = value;
        });
        return value;
    }

    function applyOverrideValues() {
        ZONES.forEach((zone) => {
            const override = String(overrides[zone.key] || '').trim();
            if (override) {
                zoneKeys(zone).forEach((key) => {
                    window[key] = override;
                });
                return;
            }

            zoneKeys(zone).forEach((key) => {
                window[key] = baselines[key] || currentValue(zone) || '';
            });
        });
    }

    function refreshLabel() {
        if (refreshing) return;
        refreshing = true;
        try {
            applyOverrideValues();
            if (typeof window.labelRegeneratorRefresh === 'function') window.labelRegeneratorRefresh();
            scheduleStabilize();
        } finally {
            refreshing = false;
        }
    }

    function ensureStyles() {
        if (document.getElementById('lr-detached-overrides-style')) return;
        const style = document.createElement('style');
        style.id = 'lr-detached-overrides-style';
        style.textContent = `
            #lr-config-panel .lr-override-card,
            .lr-override-card {
                display: none !important;
            }

            #lr-detached-overrides {
                position: fixed;
                inset: 0 auto auto 0;
                z-index: 2147483645;
                pointer-events: none;
            }

            #lr-detached-overrides .lr-detached-field {
                position: fixed;
                margin: 0;
                padding: 0;
                pointer-events: auto;
            }

            #lr-detached-overrides input {
                width: 32mm;
                height: 6mm;
                box-sizing: border-box;
                border: 1px solid rgba(255, 0, 0, 0.9);
                border-radius: 3px;
                padding: 0.7mm 1mm;
                background: rgba(255, 255, 255, 0.96);
                color: #111;
                font: 400 4mm/1 'Roboto Condensed', Arial, sans-serif;
                outline: none;
            }

            #lr-detached-overrides input::placeholder {
                color: rgba(0, 0, 0, 0.38);
            }

            #lr-detached-overrides input:focus {
                border-color: rgba(0, 0, 0, 0.55);
                background: #fff;
            }

            @media print {
                #lr-detached-overrides { display: none !important; }
            }
        `;
        document.head.appendChild(style);
    }

    function ensurePanelControlStyles() {
        if (document.getElementById('lr-panel-control-style-v217')) return;
        const style = document.createElement('style');
        style.id = 'lr-panel-control-style-v217';
        style.textContent = `
            #lr-config-toggle {
                display: none !important;
            }

            #label {
                transform: scale(1.45) !important;
                transform-origin: top left !important;
            }

            #label-regenerator-overlay {
                pointer-events: auto !important;
            }

            html.lr-edit-mode .lr-block {
                pointer-events: auto !important;
                cursor: pointer !important;
            }

            html:not(.lr-edit-mode) .lr-block {
                pointer-events: none !important;
            }

            html.lr-edit-mode .lr-block.is-selected {
                outline: 2px solid #111 !important;
                outline-offset: -2px !important;
            }

            #lr-config-panel {
                border-radius: 0 !important;
                border: 1px solid #b8b8b8 !important;
                background: #eeeeee !important;
                box-shadow: none !important;
                color: #222 !important;
                padding: 10px !important;
                font-family: Arial, sans-serif !important;
            }

            #lr-config-panel .lr-panel-header,
            #lr-config-panel .lr-panel-title,
            #lr-config-panel .lr-panel-actions,
            #lr-config-panel label[for],
            #lr-config-panel .lr-panel-topbar label {
                display: none !important;
            }

            #lr-config-panel .lr-panel-topbar {
                display: grid !important;
                grid-template-columns: 1fr 1fr !important;
                gap: 6px !important;
                align-items: stretch !important;
                margin: 0 0 8px !important;
            }

            #lr-config-panel .lr-panel-topbar > div:first-child,
            #lr-config-panel .lr-panel-topbar .lr-selected-chip {
                display: none !important;
            }

            #lr-config-panel .lr-btn,
            #lr-config-panel button {
                border-radius: 0 !important;
                border: 1px solid #bcbcbc !important;
                background: #f8f8f8 !important;
                color: #222 !important;
                box-shadow: none !important;
                padding: 8px 10px !important;
                font: 700 12px/1 Arial, sans-serif !important;
                letter-spacing: 0 !important;
            }

            #lr-config-panel button.lr-mode-edit.is-active,
            html.lr-edit-mode #lr-config-panel button.lr-mode-edit {
                background: #111 !important;
                border-color: #111 !important;
                color: #fff !important;
            }

            #lr-config-panel button.lr-mode-print.is-active,
            html:not(.lr-edit-mode) #lr-config-panel button.lr-mode-print {
                background: #d6d6d6 !important;
                border-color: #9f9f9f !important;
                color: #111 !important;
            }

            html.lr-edit-mode #lr-config-panel button.lr-mode-print,
            #lr-config-panel button.lr-mode-print:disabled {
                background: #dedede !important;
                border-color: #c8c8c8 !important;
                color: #888 !important;
                cursor: not-allowed !important;
                opacity: 1 !important;
            }

            #lr-config-panel .lr-global-card,
            #lr-config-panel .lr-block-card {
                border-radius: 0 !important;
                border: 1px solid #c9c9c9 !important;
                background: #f4f4f4 !important;
                box-shadow: none !important;
            }

            #lr-config-panel .lr-block-card h3,
            #lr-config-panel .lr-global-card h3,
            #lr-config-panel .lr-section-title {
                color: #333 !important;
                letter-spacing: 0.03em !important;
            }

            #lr-config-panel input,
            #lr-config-panel select {
                border-radius: 0 !important;
                border: 1px solid #bdbdbd !important;
                background: #fff !important;
                color: #111 !important;
                box-shadow: none !important;
            }

            #lr-config-panel .lr-select-block-btn.is-active {
                background: #333 !important;
                color: #fff !important;
            }

            @media print {
                #label {
                    transform: none !important;
                }

                #label-regenerator-overlay {
                    pointer-events: none !important;
                }

                #lr-config-panel { display: none !important; }
            }
        `;
        document.head.appendChild(style);
    }

    function getRoot() {
        let root = document.getElementById('lr-detached-overrides');
        if (!root) {
            root = document.createElement('div');
            root.id = 'lr-detached-overrides';
            document.body.appendChild(root);
        }
        return root;
    }

    function ensureInputs() {
        ensureStyles();
        const root = getRoot();

        ZONES.forEach((zone) => {
            let input = root.querySelector(`input[data-override-zone="${zone.key}"]`);
            if (input) return;

            const field = document.createElement('div');
            field.className = 'lr-detached-field';
            field.dataset.overridePosition = zone.pos;

            input = document.createElement('input');
            input.type = 'text';
            input.autocomplete = 'off';
            input.spellcheck = false;
            input.dataset.overrideZone = zone.key;
            input.placeholder = captureBaseline(zone) || zone.label;
            input.value = '';
            input.addEventListener('input', () => {
                if (!overrides[zone.key]) captureBaseline(zone);
                overrides[zone.key] = input.value;
                refreshLabel();
            });

            field.appendChild(input);
            root.appendChild(field);
        });
    }

    function updatePlaceholders() {
        const root = document.getElementById('lr-detached-overrides');
        if (!root) return;
        ZONES.forEach((zone) => {
            const input = root.querySelector(`input[data-override-zone="${zone.key}"]`);
            if (!input || input.value) return;
            input.placeholder = currentValue(zone) || zone.label;
            captureBaseline(zone);
        });
    }

    function positionInputs() {
        const label = document.querySelector('#label');
        const root = document.getElementById('lr-detached-overrides');
        if (!label || !root) return;

        const rect = label.getBoundingClientRect();
        const scaleX = rect.width / 62;
        const scaleY = rect.height / 45;
        const mmX = (mm) => rect.left + (mm * scaleX);
        const mmY = (mm) => rect.top + (mm * scaleY);
        const gapX = 4 * scaleX;
        const gapY = 5.5 * scaleY;

        const positions = {
            top1: { left: mmX(62) + gapX, top: mmY(0.4), width: 22 * scaleX, height: 5.6 * scaleY },
            top2: { left: mmX(62) + gapX, top: mmY(6.8), width: 22 * scaleX, height: 5.6 * scaleY },
            bottomLeft: { left: mmX(0), top: mmY(45) + gapY, width: 25 * scaleX, height: 5.6 * scaleY },
            bottomRight: { left: mmX(37), top: mmY(45) + gapY, width: 25 * scaleX, height: 5.6 * scaleY }
        };

        root.querySelectorAll('.lr-detached-field[data-override-position]').forEach((field) => {
            const pos = positions[field.dataset.overridePosition];
            const input = field.querySelector('input');
            if (!pos || !input) return;
            field.style.left = `${pos.left}px`;
            field.style.top = `${pos.top}px`;
            input.style.width = `${pos.width}px`;
            input.style.height = `${Math.max(18, pos.height)}px`;
        });
    }

    function removeLegacyInputs() {
        document.querySelectorAll('.lr-override-card').forEach((card) => card.remove());
        document.querySelectorAll('input[data-override-zone]').forEach((input) => {
            if (!input.closest('#lr-detached-overrides')) {
                const field = input.closest('.lr-override-field') || input;
                field.remove();
            }
        });
    }

    function mmToPx(mm) {
        if (!mmPxCache) {
            const probe = document.createElement('div');
            probe.style.position = 'absolute';
            probe.style.visibility = 'hidden';
            probe.style.width = '100mm';
            probe.style.height = '1mm';
            document.body.appendChild(probe);
            mmPxCache = probe.getBoundingClientRect().width / 100 || 3.78;
            probe.remove();
        }
        return mm * mmPxCache;
    }

    function getInfoBlock(data) {
        return Array.from(data.children).find((node) => node.tagName === 'DIV' && !node.classList.contains('clear')) || null;
    }

    function stabilizeOrderNumberBlock() {
        const data = document.querySelector('#label-regenerator-base #data, #data');
        if (!data) return;
        const info = getInfoBlock(data);
        const obj = data.querySelector('.obj');
        if (!info || !obj) return;

        data.style.position = 'relative';
        data.style.height = '46mm';
        data.style.marginBottom = '0';
        data.style.overflow = 'visible';
        info.style.marginBottom = '0.6mm';
        obj.style.position = 'absolute';
        obj.style.left = '0';
        obj.style.right = '0';
        obj.style.bottom = '0';
        obj.style.width = '60mm';
        obj.style.boxSizing = 'border-box';
        obj.style.display = 'flex';
        obj.style.alignItems = 'center';
        obj.style.justifyContent = 'center';
        obj.style.paddingTop = '0';
        obj.style.lineHeight = '1';

        const dataHeight = data.clientHeight || mmToPx(46);
        const infoBottom = info.offsetTop + info.offsetHeight;
        const gap = mmToPx(0.8);
        const defaultHeight = mmToPx(16);
        const minHeight = mmToPx(9.5);
        const availableHeight = Math.max(minHeight, dataHeight - infoBottom - gap);
        const finalHeight = Math.min(defaultHeight, availableHeight);
        obj.style.height = `${finalHeight}px`;
        obj.style.minHeight = '0';
        const compressed = finalHeight < defaultHeight - 1;
        const fontSize = compressed ? Math.max(24, Math.min(37, finalHeight * 0.62)) : 37;
        obj.style.setProperty('font-size', `${fontSize}px`, 'important');
        obj.dataset.lrAnchoredObj = compressed ? 'compressed' : 'normal';
    }

    function getPanelMode() {
        return document.documentElement.classList.contains('lr-edit-mode') ? 'edit' : 'view';
    }

    function getPanelControlButtons() {
        const panel = document.getElementById('lr-config-panel');
        if (!panel) return null;

        const buttons = Array.from(panel.querySelectorAll('button'));
        const printButton = buttons.find((button) => /^(print|view|tlacit|tlačiť)$/i.test(button.textContent.trim())) || null;
        const editButton = buttons.find((button) => /^edit$/i.test(button.textContent.trim())) || null;
        if (!printButton || !editButton) return null;

        printButton.textContent = 'Print';
        editButton.textContent = 'Edit';
        printButton.classList.add('lr-mode-print');
        editButton.classList.add('lr-mode-edit');
        return { panel, printButton, editButton };
    }

    function setPanelMode(mode) {
        const nextMode = mode === 'edit' ? 'edit' : 'view';
        if (typeof window.labelRegeneratorSetMode === 'function') {
            window.labelRegeneratorSetMode(nextMode);
        } else {
            document.documentElement.classList.toggle('lr-edit-mode', nextMode === 'edit');
        }
        syncPanelPrintEditState();
        scheduleStabilize();
    }

    function printCurrentLabel(allowFromEdit) {
        if (getPanelMode() === 'edit' && !allowFromEdit) return;
        setPanelMode('view');
        requestAnimationFrame(() => window.print());
    }

    function syncPanelPrintEditState() {
        ensurePanelControlStyles();
        const controls = getPanelControlButtons();
        if (!controls) return;

        const editMode = getPanelMode() === 'edit';
        controls.printButton.disabled = editMode;
        controls.printButton.setAttribute('aria-disabled', editMode ? 'true' : 'false');
        controls.printButton.classList.toggle('is-active', !editMode);
        controls.editButton.classList.toggle('is-active', editMode);
        controls.editButton.setAttribute('aria-pressed', editMode ? 'true' : 'false');
    }

    function bindPanelPrintEditControls() {
        ensurePanelControlStyles();
        const controls = getPanelControlButtons();
        if (!controls || panelControlBound) {
            syncPanelPrintEditState();
            return;
        }

        controls.printButton.addEventListener('click', (event) => {
            event.preventDefault();
            event.stopImmediatePropagation();
            printCurrentLabel(false);
        }, true);

        controls.editButton.addEventListener('click', (event) => {
            event.preventDefault();
            event.stopImmediatePropagation();
            setPanelMode(getPanelMode() === 'edit' ? 'view' : 'edit');
        }, true);

        panelControlBound = true;
        syncPanelPrintEditState();
    }

    function bindVisualBlockSelection() {
        ensurePanelControlStyles();
        if (visualSelectionBound) return;

        document.addEventListener('click', (event) => {
            if (getPanelMode() !== 'edit') return;
            if (event.target.closest('#lr-config-panel')) return;
            if (event.target.closest('#lr-detached-overrides')) return;

            const block = event.target.closest('.lr-block');
            if (!block) return;

            const zone = block.dataset.zone;
            if (!zone) return;

            event.preventDefault();
            event.stopImmediatePropagation();
            if (typeof window.labelRegeneratorSelectBlock === 'function') {
                window.labelRegeneratorSelectBlock(zone);
            }
            syncPanelPrintEditState();
            scheduleStabilize();
        }, true);

        visualSelectionBound = true;
    }

    function isPrintLabelPage() {
        return /\/vyrobne_prikazy\/detail\/printLabel\//.test(location.pathname);
    }

    function isDetailPage() {
        return /\/vyrobne_prikazy\/detail\/index\//.test(location.pathname);
    }

    function isTypingTarget(target) {
        if (!target) return false;
        const tagName = target.tagName;
        return tagName === 'INPUT' || tagName === 'SELECT' || tagName === 'TEXTAREA' || target.isContentEditable;
    }

    function getVpNumber() {
        const strong = document.querySelector('strong.red');
        return strong ? strong.textContent.trim() : null;
    }

    function persistPrintZone(zoneName, value) {
        const zone = findZone(zoneName);
        if (!zone) return;
        const normalized = value == null ? '' : String(value).trim();
        zoneKeys(zone).forEach((key) => {
            window[key] = normalized;
            if (normalized) {
                localStorage.setItem(key, normalized);
            } else {
                localStorage.removeItem(key);
            }
        });
    }

    function syncLabelValuesFromDetailPage() {
        const leftBadge = document.querySelector('#shortcut-info-label');
        const rightBadge = document.querySelector('#shortcut-info-date');
        const leftValue = leftBadge ? (leftBadge.textContent || '').trim() : localStorage.getItem('TM_testoLeft') || '';
        const rightValue = rightBadge ? (rightBadge.textContent || '').trim() : localStorage.getItem('TM_testoRight') || '';
        persistPrintZone('TM_testoLeft', leftValue);
        persistPrintZone('TM_testoRight', rightValue);
    }

    function clearDelayedPrintState() {
        if (!delayedPrintState) return;
        clearInterval(delayedPrintState.readyTimer);
        clearTimeout(delayedPrintState.delayTimer);
        if (delayedPrintState.cancelOnEsc) {
            window.removeEventListener('keydown', delayedPrintState.cancelOnEsc, true);
            try {
                delayedPrintState.printWindow.removeEventListener('keydown', delayedPrintState.cancelOnEsc, true);
            } catch (error) {
                // Ignore cross-window cleanup edge cases.
            }
        }
        delayedPrintState = null;
    }

    function cancelDelayedPrint() {
        if (!delayedPrintState) return;
        delayedPrintState.cancelled = true;
        clearDelayedPrintState();
    }

    function finishDelayedPrint(printWindow) {
        if (!delayedPrintState || delayedPrintState.cancelled || printWindow.closed) return;
        clearDelayedPrintState();
        printWindow.print();
        setTimeout(() => {
            if (!printWindow.closed) printWindow.close();
        }, 1200);
    }

    function triggerDelayedPrintWhenReady(printWindow) {
        if (!delayedPrintState || delayedPrintState.cancelled || printWindow.closed) return;

        delayedPrintState.readyTimer = setInterval(() => {
            if (!delayedPrintState || delayedPrintState.cancelled || printWindow.closed) {
                clearDelayedPrintState();
                return;
            }

            const timedOut = Date.now() - delayedPrintState.startedAt > 15000;
            const ready = !!printWindow.__labelRegeneratorReady;
            if (!ready && !timedOut) return;

            clearInterval(delayedPrintState.readyTimer);
            delayedPrintState.readyTimer = null;
            finishDelayedPrint(printWindow);
        }, 120);
    }

    function startCancellableDelayedPrint(printWindow) {
        cancelDelayedPrint();
        const cancelOnEsc = (event) => {
            if (event.key !== 'Escape') return;
            event.preventDefault();
            event.stopImmediatePropagation();
            cancelDelayedPrint();
        };

        delayedPrintState = {
            cancelled: false,
            printWindow,
            readyTimer: null,
            delayTimer: null,
            cancelOnEsc,
            startedAt: Date.now()
        };

        window.addEventListener('keydown', cancelOnEsc, true);
        try {
            printWindow.addEventListener('keydown', cancelOnEsc, true);
        } catch (error) {
            // Same-origin popup should allow this; ignore if browser blocks it.
        }

        delayedPrintState.delayTimer = setTimeout(() => {
            if (!delayedPrintState || delayedPrintState.cancelled || printWindow.closed) {
                clearDelayedPrintState();
                return;
            }
            triggerDelayedPrintWhenReady(printWindow);
        }, DELAYED_PRINT_MS);
    }

    function openPrintLabelWithDelay() {
        const vpNumber = getVpNumber();
        if (!vpNumber) return;

        syncLabelValuesFromDetailPage();
        const url = `https://moduly.faxcopy.sk/vyrobne_prikazy/detail/printLabel/${vpNumber}`;
        const popup = window.open(url, '_blank');
        if (!popup) return;

        startCancellableDelayedPrint(popup);
    }

    function bindKeyboardOverrides() {
        if (keyboardOverrideBound) return;

        window.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                cancelDelayedPrint();
                return;
            }

            if (isTypingTarget(event.target) || event.ctrlKey || event.metaKey || event.altKey) return;

            const key = event.key.toLowerCase();
            if (key === 'p' && isPrintLabelPage() && !event.repeat) {
                event.preventDefault();
                event.stopImmediatePropagation();
                printCurrentLabel(true);
                return;
            }

            if (key === 'l' && isDetailPage() && !event.repeat) {
                event.preventDefault();
                event.stopImmediatePropagation();
                openPrintLabelWithDelay();
            }
        }, true);

        keyboardOverrideBound = true;
    }

    function refreshAll() {
        removeLegacyInputs();
        ensureInputs();
        updatePlaceholders();
        applyOverrideValues();
        positionInputs();
        stabilizeOrderNumberBlock();
        bindPanelPrintEditControls();
        bindVisualBlockSelection();
        bindKeyboardOverrides();
        syncPanelPrintEditState();
    }

    function scheduleStabilize() {
        refreshAll();
        requestAnimationFrame(refreshAll);
        setTimeout(refreshAll, 80);
        setTimeout(refreshAll, 250);
        setTimeout(refreshAll, 800);
    }

    const originalRefresh = window.labelRegeneratorRefresh;
    if (typeof originalRefresh === 'function') {
        window.labelRegeneratorRefresh = function () {
            if (!refreshing) applyOverrideValues();
            const result = originalRefresh.apply(this, arguments);
            scheduleStabilize();
            return result;
        };
    }

    const originalSetZone = window.labelRegeneratorSetZone;
    if (typeof originalSetZone === 'function') {
        window.labelRegeneratorSetZone = function (zoneName, value) {
            const zone = findZone(zoneName);
            const result = originalSetZone.apply(this, arguments);
            if (zone) {
                zoneKeys(zone).forEach((key) => {
                    baselines[key] = value == null ? '' : String(value);
                });
                if (String(overrides[zone.key] || '').trim()) refreshLabel();
            }
            return result;
        };
    }

    window.addEventListener('labelRegeneratorReady', scheduleStabilize);
    window.addEventListener('resize', scheduleStabilize);
    window.addEventListener('scroll', scheduleStabilize, true);

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', scheduleStabilize);
    } else {
        scheduleStabilize();
    }
})();
