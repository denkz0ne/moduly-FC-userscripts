// ==UserScript==
// @name         labelRegeneratorV2
// @namespace    https://moduly.faxcopy.sk/
// @author       mato e.
// @version      2.0.8
// @description  Uprava print stitku, overlay zony, konfigurator layoutu a klavesa L pre otvorenie, tlac a zatvorenie stitku.
// @updateURL    https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/labelRegeneratorV2.user.js
// @downloadURL  https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/labelRegeneratorV2.user.js
// @require      https://github.com/denkz0ne/moduly-FC-userscripts/raw/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js
// @match        https://moduly.faxcopy.sk/vyrobne_prikazy/detail/printLabel/*
// @match        https://moduly.faxcopy.sk/vyrobne_prikazy/detail/index/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function () {
    'use strict';

    window.labelRegeneratorV2Version = '2.0.8';

    const OVERRIDE_ZONES = [
        { key: 'TM_top', aliases: [], label: 'lavy horny 1' },
        { key: 'TM_bottom', aliases: [], label: 'lavy horny 2' },
        { key: 'TM_testoLeft', aliases: ['testoleft'], label: 'lavy dolny' },
        { key: 'TM_testoRight', aliases: ['testoright'], label: 'pravy dolny' }
    ];

    const manualOverrides = Object.create(null);
    const baselineValues = Object.create(null);
    let mmPxCache = null;
    let overridesBuilt = false;
    let refreshing = false;

    function keysFor(definition) {
        return [definition.key].concat(definition.aliases || []);
    }

    function findOverrideZone(zoneName) {
        const normalized = String(zoneName || '').trim();
        return OVERRIDE_ZONES.find((definition) => definition.key === normalized || definition.aliases.includes(normalized)) || null;
    }

    function currentZoneValue(definition) {
        for (const key of keysFor(definition)) {
            const value = window[key];
            if (value != null && String(value).trim()) return String(value);
        }
        for (const key of keysFor(definition)) {
            const stored = localStorage.getItem(key);
            if (stored != null && String(stored).trim()) return String(stored);
        }
        return '';
    }

    function captureBaseline(definition) {
        const value = currentZoneValue(definition);
        keysFor(definition).forEach((key) => {
            baselineValues[key] = value;
        });
    }

    function restoreBaseline(definition) {
        keysFor(definition).forEach((key) => {
            window[key] = baselineValues[key] || '';
        });
    }

    function applyOverrideWindows() {
        OVERRIDE_ZONES.forEach((definition) => {
            const override = String(manualOverrides[definition.key] || '').trim();
            if (override) {
                keysFor(definition).forEach((key) => {
                    window[key] = override;
                });
            } else {
                restoreBaseline(definition);
            }
        });
    }

    function refreshAfterOverride() {
        if (refreshing) return;
        refreshing = true;
        try {
            applyOverrideWindows();
            if (typeof window.labelRegeneratorRefresh === 'function') {
                window.labelRegeneratorRefresh();
            }
            scheduleStabilize();
        } finally {
            refreshing = false;
        }
    }

    function injectOverrideStyles() {
        if (document.getElementById('label-regenerator-overrides-style')) return;
        const style = document.createElement('style');
        style.id = 'label-regenerator-overrides-style';
        style.textContent = `
            .lr-override-card {
                border: 1px solid rgba(0, 0, 0, 0.07);
                border-radius: 10px;
                padding: 10px;
                margin-bottom: 10px;
                background: #fff;
            }

            .lr-override-grid {
                display: grid;
                grid-template-columns: repeat(2, minmax(0, 1fr));
                gap: 7px;
            }

            .lr-override-field label {
                display: block;
                font: 700 10px/1.2 Arial, sans-serif;
                color: #555;
                margin-bottom: 4px;
                text-transform: uppercase;
                letter-spacing: 0.03em;
            }

            .lr-override-field input {
                width: 100%;
                box-sizing: border-box;
                border: 1px solid rgba(0, 0, 0, 0.14);
                border-radius: 8px;
                padding: 6px 7px;
                font: 12px/1.2 Arial, sans-serif;
                background: #fff;
                color: #111;
            }

            .lr-override-field input::placeholder {
                color: #aaa;
            }

            @media print {
                .lr-override-card { display: none !important; }
            }
        `;
        document.head.appendChild(style);
    }

    function buildOverrideInputs() {
        const panel = document.getElementById('lr-config-panel');
        if (!panel || overridesBuilt) return;

        injectOverrideStyles();
        OVERRIDE_ZONES.forEach(captureBaseline);

        const card = document.createElement('section');
        card.className = 'lr-override-card';
        card.dataset.lrOverrideCard = 'true';

        const grid = document.createElement('div');
        grid.className = 'lr-override-grid';

        OVERRIDE_ZONES.forEach((definition) => {
            const field = document.createElement('div');
            field.className = 'lr-override-field';

            const label = document.createElement('label');
            label.textContent = definition.label;
            field.appendChild(label);

            const input = document.createElement('input');
            input.type = 'text';
            input.autocomplete = 'off';
            input.spellcheck = false;
            input.placeholder = 'povodna hodnota';
            input.dataset.overrideZone = definition.key;
            input.value = '';
            input.addEventListener('input', () => {
                if (!manualOverrides[definition.key]) captureBaseline(definition);
                manualOverrides[definition.key] = input.value;
                refreshAfterOverride();
            });
            field.appendChild(input);
            grid.appendChild(field);
        });

        card.appendChild(grid);

        const topbar = panel.querySelector('.lr-panel-topbar');
        if (topbar && topbar.nextSibling) {
            panel.insertBefore(card, topbar.nextSibling);
        } else {
            panel.prepend(card);
        }

        overridesBuilt = true;
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

    function scheduleStabilize() {
        buildOverrideInputs();
        applyOverrideWindows();
        stabilizeOrderNumberBlock();
        requestAnimationFrame(() => {
            buildOverrideInputs();
            applyOverrideWindows();
            stabilizeOrderNumberBlock();
        });
        setTimeout(() => { buildOverrideInputs(); applyOverrideWindows(); stabilizeOrderNumberBlock(); }, 80);
        setTimeout(() => { buildOverrideInputs(); applyOverrideWindows(); stabilizeOrderNumberBlock(); }, 250);
        setTimeout(() => { buildOverrideInputs(); applyOverrideWindows(); stabilizeOrderNumberBlock(); }, 800);
    }

    const originalRefresh = window.labelRegeneratorRefresh;
    if (typeof originalRefresh === 'function') {
        window.labelRegeneratorRefresh = function () {
            if (!refreshing) applyOverrideWindows();
            const result = originalRefresh.apply(this, arguments);
            scheduleStabilize();
            return result;
        };
    }

    const originalSetZone = window.labelRegeneratorSetZone;
    if (typeof originalSetZone === 'function') {
        window.labelRegeneratorSetZone = function (zoneName, value) {
            const definition = findOverrideZone(zoneName);
            const result = originalSetZone.apply(this, arguments);
            if (definition) {
                keysFor(definition).forEach((key) => {
                    baselineValues[key] = value == null ? '' : String(value);
                });
                if (String(manualOverrides[definition.key] || '').trim()) refreshAfterOverride();
            }
            return result;
        };
    }

    window.addEventListener('labelRegeneratorReady', scheduleStabilize);
    window.addEventListener('resize', scheduleStabilize);

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', scheduleStabilize);
    } else {
        scheduleStabilize();
    }
})();
