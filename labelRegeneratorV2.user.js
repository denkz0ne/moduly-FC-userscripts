// ==UserScript==
// @name         labelRegeneratorV2
// @namespace    https://moduly.faxcopy.sk/
// @author       mato e.
// @version      2.0.12
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

    window.labelRegeneratorV2Version = '2.0.12';

    const POSITIONS = {
        TM_top: 'top1',
        TM_bottom: 'top2',
        TM_testoLeft: 'bottomLeft',
        TM_testoRight: 'bottomRight'
    };

    const FALLBACK_LABELS = {
        TM_top: 'pravy horny 1',
        TM_bottom: 'pravy horny 2',
        TM_testoLeft: 'lavy dolny',
        TM_testoRight: 'pravy dolny'
    };

    function ensureFloatingStyles() {
        if (document.getElementById('lr-floating-overrides-style')) return;
        const style = document.createElement('style');
        style.id = 'lr-floating-overrides-style';
        style.textContent = `
            #lr-floating-overrides {
                position: fixed;
                inset: 0 auto auto 0;
                z-index: 2147483645;
                pointer-events: none;
            }

            #lr-floating-overrides .lr-override-field {
                position: fixed;
                margin: 0;
                padding: 0;
                pointer-events: auto;
            }

            #lr-floating-overrides .lr-override-field label {
                display: none !important;
            }

            #lr-floating-overrides input[data-override-zone] {
                width: 28mm;
                height: 5.2mm;
                box-sizing: border-box;
                border: 1px solid rgba(0, 0, 0, 0.12);
                border-radius: 3px;
                padding: 0.6mm 1mm;
                background: rgba(255, 255, 255, 0.92);
                color: #111;
                font: 400 4mm/1 'Roboto Condensed', Arial, sans-serif;
                outline: none;
            }

            #lr-floating-overrides input[data-override-zone]::placeholder {
                color: rgba(0, 0, 0, 0.42);
            }

            #lr-floating-overrides input[data-override-zone]:focus {
                border-color: rgba(0, 0, 0, 0.45);
                background: #fff;
            }

            @media print {
                #lr-floating-overrides { display: none !important; }
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
        return FALLBACK_LABELS[zone] || '';
    }

    function getOrCreateFloatRoot() {
        let root = document.getElementById('lr-floating-overrides');
        if (!root) {
            root = document.createElement('div');
            root.id = 'lr-floating-overrides';
            document.body.appendChild(root);
        }
        return root;
    }

    function moveOverrideInputs() {
        const sourceCard = document.querySelector('.lr-override-card');
        if (!sourceCard) return false;

        ensureFloatingStyles();
        const root = getOrCreateFloatRoot();

        sourceCard.querySelectorAll('.lr-override-field').forEach((field) => {
            const input = field.querySelector('input[data-override-zone]');
            if (!input) return;
            const zone = input.dataset.overrideZone;
            const position = POSITIONS[zone];
            if (!position) return;

            field.dataset.overridePosition = position;
            input.placeholder = zoneValue(zone);
            root.appendChild(field);
        });

        sourceCard.remove();
        return true;
    }

    function positionOverrideInputs() {
        const label = document.querySelector('#label');
        const root = document.getElementById('lr-floating-overrides');
        if (!label || !root) return;

        const rect = label.getBoundingClientRect();
        const scaleX = rect.width / 62;
        const scaleY = rect.height / 45;
        const mmX = (mm) => rect.left + (mm * scaleX);
        const mmY = (mm) => rect.top + (mm * scaleY);

        const positions = {
            top1: { left: mmX(40.5), top: mmY(0.4), width: 20.5 * scaleX, height: 5.2 * scaleY },
            top2: { left: mmX(40.5), top: mmY(6.8), width: 20.5 * scaleX, height: 5.2 * scaleY },
            bottomLeft: { left: mmX(1), top: mmY(35.4), width: 41 * scaleX, height: 5.2 * scaleY },
            bottomRight: { left: mmX(43), top: mmY(35.4), width: 18 * scaleX, height: 5.2 * scaleY }
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

    function refreshFloatingOverrides() {
        moveOverrideInputs();
        positionOverrideInputs();
    }

    function scheduleFloatingOverrides() {
        refreshFloatingOverrides();
        requestAnimationFrame(refreshFloatingOverrides);
        setTimeout(refreshFloatingOverrides, 80);
        setTimeout(refreshFloatingOverrides, 250);
        setTimeout(refreshFloatingOverrides, 800);
    }

    window.addEventListener('labelRegeneratorReady', scheduleFloatingOverrides);
    window.addEventListener('resize', scheduleFloatingOverrides);
    window.addEventListener('scroll', scheduleFloatingOverrides, true);

    const originalRefresh = window.labelRegeneratorRefresh;
    if (typeof originalRefresh === 'function') {
        window.labelRegeneratorRefresh = function () {
            const result = originalRefresh.apply(this, arguments);
            scheduleFloatingOverrides();
            return result;
        };
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', scheduleFloatingOverrides);
    } else {
        scheduleFloatingOverrides();
    }
})();
