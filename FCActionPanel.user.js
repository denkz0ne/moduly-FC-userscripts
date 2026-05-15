// ==UserScript==
// @name         FC Action Panel
// @namespace    faxcopy-userscripts
// @author       mato e.
// @version      1.0
// @description  Spoločný kontajner pre tlačidlá a nástroje userscriptov na detaile VP
// @updateURL    https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/FCActionPanel.user.js
// @downloadURL  https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/FCActionPanel.user.js
// @match        https://moduly.faxcopy.sk/vyrobne_prikazy/detail/index/*
// @run-at       document-end
// ==/UserScript==

(function () {
    'use strict';

    const PANEL_ID = 'fc-userscripts-action-panel';

    function ensureActionPanel() {

        let panel = document.querySelector(`#${PANEL_ID}`);

        if (panel) {
            return panel;
        }

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

        const background = options.background || '#4a5568';
        const borderColor = options.borderColor || background;

        Object.assign(button.style, {
            position: 'static',
            right: 'auto',
            bottom: 'auto',
            display: 'block',
            width: '100%',
            minWidth: '0',
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

    function adoptKnownButtons() {

        const panel = ensureActionPanel();

        [
            {
                selector: '#doGrafikyBtn',
                background: '#7b1fa2',
                borderColor: '#6a1b9a'
            },
            {
                selector: '#m2CalcButton',
                background: '#00897b',
                borderColor: '#00695c'
            }
        ].forEach(config => {

            const button = document.querySelector(config.selector);

            if (!button) {
                return;
            }

            styleActionButton(button, config);

            if (button.parentNode !== panel) {
                panel.appendChild(button);
            }
        });
    }

    window.FCUserscripts = Object.assign(window.FCUserscripts || {}, {
        ensureActionPanel,
        styleActionButton,
        adoptKnownButtons
    });

    window.addEventListener('load', () => {

        adoptKnownButtons();

        let tries = 0;

        const interval = setInterval(() => {

            tries++;
            adoptKnownButtons();

            if (tries > 60) {
                clearInterval(interval);
            }

        }, 500);

        const observer = new MutationObserver(adoptKnownButtons);

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });

})();