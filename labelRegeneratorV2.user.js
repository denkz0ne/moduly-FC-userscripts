// ==UserScript==
// @name         labelRegeneratorV2
// @namespace    https://moduly.faxcopy.sk/
// @author       mato e.
// @version      2.0.14
// @description  Uprava print stitku, overlay zony, konfigurator layoutu a klavesa L pre otvorenie, tlac a zatvorenie stitku.
// @updateURL    https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/main/labelRegeneratorV2.user.js
// @downloadURL  https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/main/labelRegeneratorV2.user.js
// @require      https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js
// @require      https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/c2be6875f4fcc6ea5404897b0eea4a8550a5c15f/labelRegeneratorV2.user.js
// @match        https://moduly.faxcopy.sk/vyrobne_prikazy/detail/printLabel/*
// @match        https://moduly.faxcopy.sk/vyrobne_prikazy/detail/index/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function () {
    'use strict';

    window.labelRegeneratorV2Version = '2.0.14';

    const POSITIONS = {
        TM_top: 'top1',
        TM_bottom: 'top2',
        TM_testoLeft: 'bottomLeft',
        TM_testoRight: 'bottomRight'
    };

    const LABELS = {
        TM_top: 'pravy horny 1',
        TM_bottom: 'pravy horny 2',
        TM_testoLeft: 'lavy dolny',
        TM_testoRight: 'pravy dolny'
    };

    function ensureDetachedStyles() {
        if (document.getElementById('lr-detached-overrides-style')) return;
        const style = document.createElement('style');
        style.id = 'lr-detached-overrides-style';
        style.textContent = `
            #lr-detached-overrides {
                position: fixed;
                inset: 0 auto auto 0;
                z-index: 2147483645;
                pointer-events: none;
            }

            #lr-detached-overrides .lr-override-field {
                position: fixed;
                margin: 0;
                padding: 0;
                pointer-events: auto;
            }

            #lr-detached-overrides .lr-override-field label {
                display: none !important;
            }

            #lr-detached-overrides input[data-override-zone] {
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

            #lr-detached-overrides input[data-override-zone]::placeholder {
                color: rgba(0, 0, 0, 0.38);
            }

            #lr-detached-overrides input[data-override-zone]:focus {
                border-color: rgba(0, 0, 0, 0.55);
                background: #fff;
            }

            #lr-config-panel .lr-override-card {
                display: none !important;
            }

            @media print {
                #lr-detached-overrides { display: none !important; }
            }
        `;
        document.head.appendChild(style);
    }

    function zoneValue(zone) {
        const aliases = zone === 'TM_testoLeft' ? ['TM_testoLeft', 'testoleft']
            : zone === 'TM_testoRight' ? ['TM_testoRight', 'testoright']
                : [zone];
        for (const key of aliases) {
            const value = window[key];
            if (value != null && String(value).trim()) return String(value).trim();
        }
        for (const key of aliases) {
            const stored = localStorage.getItem(key);
            if (stored != null && String(stored).trim()) return String(stored).trim();
        }
        return LABELS[zone] || '';
    }

    function getOrCreateDetachedRoot() {
        let root = document.getElementById('lr-detached-overrides');
        if (!root) {
            root = document.createElement('div');
            root.id = 'lr-detached-overrides';
            document.body.appendChild(root);
        }
        return root;
    }

    function getSourceInput(zone) {
        return document.querySelector(`.lr-override-card input[data-override-zone="${zone}"]`)
            || document.querySelector(`#lr-detached-overrides input[data-override-zone="${zone}"]`);
    }

    function createDetachedField(zone) {
        const field = document.createElement('div');
        field.className = 'lr-override-field';
        field.dataset.overridePosition = POSITIONS[zone];

        const input = document.createElement('input');
        input.type = 'text';
        input.autocomplete = 'off';
        input.spellcheck = false;
        input.placeholder = zoneValue(zone);
        input.dataset.overrideZone = zone;

        const sourceInput = getSourceInput(zone);
        if (sourceInput) input.value = sourceInput.value || '';

        input.addEventListener('input', () => {
            const source = document.querySelector(`.lr-override-card input[data-override-zone="${zone}"]`);
            if (source && source !== input) {
                source.value = input.value;
                source.dispatchEvent(new Event('input', { bubbles: true }));
            }
        });

        field.appendChild(input);
        return field;
    }

    function ensureDetachedInputs() {
        ensureDetachedStyles();
        const root = getOrCreateDetachedRoot();

        Object.keys(POSITIONS).forEach((zone) => {
            let input = root.querySelector(`input[data-override-zone="${zone}"]`);
            if (!input) {
                root.appendChild(createDetachedField(zone));
                input = root.querySelector(`input[data-override-zone="${zone}"]`);
            }
            if (input && !input.value) input.placeholder = zoneValue(zone);
        });
    }

    function hideOriginalOverrideCard() {
        document.querySelectorAll('#lr-config-panel .lr-override-card').forEach((card) => {
            card.style.display = 'none';
        });
    }

    function positionDetachedInputs() {
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

        root.querySelectorAll('.lr-override-field[data-override-position]').forEach((field) => {
            const pos = positions[field.dataset.overridePosition];
            const input = field.querySelector('input[data-override-zone]');
            if (!pos || !input) return;

            field.style.left = `${pos.left}px`;
            field.style.top = `${pos.top}px`;
            input.style.width = `${pos.width}px`;
            input.style.height = `${Math.max(18, pos.height)}px`;
        });
    }

    function refreshDetachedInputs() {
        ensureDetachedInputs();
        hideOriginalOverrideCard();
        positionDetachedInputs();
    }

    function scheduleDetachedInputs() {
        refreshDetachedInputs();
        requestAnimationFrame(refreshDetachedInputs);
        setTimeout(refreshDetachedInputs, 80);
        setTimeout(refreshDetachedInputs, 250);
        setTimeout(refreshDetachedInputs, 800);
    }

    window.addEventListener('labelRegeneratorReady', scheduleDetachedInputs);
    window.addEventListener('resize', scheduleDetachedInputs);
    window.addEventListener('scroll', scheduleDetachedInputs, true);

    const originalRefresh = window.labelRegeneratorRefresh;
    if (typeof originalRefresh === 'function') {
        window.labelRegeneratorRefresh = function () {
            const result = originalRefresh.apply(this, arguments);
            scheduleDetachedInputs();
            return result;
        };
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', scheduleDetachedInputs);
    } else {
        scheduleDetachedInputs();
    }
})();
