// ==UserScript==
// @name         labelRegeneratorV2
// @namespace    https://moduly.faxcopy.sk/
// @author       mato e.
// @version      2.0.15
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

    window.labelRegeneratorV2Version = '2.0.15';

    const ZONES = [
        { key: 'TM_top', aliases: [], pos: 'top1', label: 'pravy horny 1' },
        { key: 'TM_bottom', aliases: [], pos: 'top2', label: 'pravy horny 2' },
        { key: 'TM_testoLeft', aliases: ['testoleft'], pos: 'bottomLeft', label: 'lavy dolny' },
        { key: 'TM_testoRight', aliases: ['testoright'], pos: 'bottomRight', label: 'pravy dolny' }
    ];

    const overrides = Object.create(null);
    const baselines = Object.create(null);
    let mmPxCache = null;
    let refreshing = false;

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

    function refreshAll() {
        removeLegacyInputs();
        ensureInputs();
        updatePlaceholders();
        applyOverrideValues();
        positionInputs();
        stabilizeOrderNumberBlock();
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
