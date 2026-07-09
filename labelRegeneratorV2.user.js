// ==UserScript==
// @name         labelRegeneratorV2
// @namespace    https://moduly.faxcopy.sk/
// @author       mato e.
// @version      2.0.24
// @description  Uprava print stitku, overlay zony, konfigurator layoutu a klavesa L pre otvorenie, tlac a zatvorenie stitku.
// @updateURL    https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/main/labelRegeneratorV2.user.js
// @downloadURL  https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/main/labelRegeneratorV2.user.js
// @require      https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js
// @require      https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js
// @require      https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js
// @require      https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/b88007236d583fb7fa692ec59fc0c671dad52c9b/labelRegeneratorV2.user.js
// @require      https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/main/labelInstantPrint.beta.js
// @match        https://moduly.faxcopy.sk/vyrobne_prikazy/detail/printLabel/*
// @match        https://moduly.faxcopy.sk/vyrobne_prikazy/detail/index/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function () {
    'use strict';

    window.labelRegeneratorV2Version = '2.0.24';

    function isPrintLabelPage() {
        return /\/vyrobne_prikazy\/detail\/printLabel\//.test(location.pathname);
    }

    function isPrintPopupWindow() {
        return isPrintLabelPage() && window.name === 'labelRegeneratorPrintPopup';
    }

    function isTypingTarget(target) {
        if (!target) return false;
        const tagName = target.tagName;
        return tagName === 'INPUT' || tagName === 'TEXTAREA' || tagName === 'SELECT' || target.isContentEditable;
    }

    function ensurePopupPanelStyles() {
        if (!isPrintPopupWindow()) return;
        if (document.getElementById('lr-popup-panel-toggle-style-v223')) return;

        const style = document.createElement('style');
        style.id = 'lr-popup-panel-toggle-style-v223';
        style.textContent = `
            html.lr-popup-panel-hidden #lr-config-panel,
            html.lr-popup-panel-hidden #lr-config-toggle {
                display: none !important;
                visibility: hidden !important;
                pointer-events: none !important;
            }
        `;
        document.head.appendChild(style);
    }

    function setPopupPanelHidden(hidden) {
        if (!isPrintPopupWindow()) return;
        ensurePopupPanelStyles();
        document.documentElement.classList.toggle('lr-popup-panel-hidden', hidden);
        localStorage.setItem('labelRegeneratorPopupPanelHidden', hidden ? '1' : '0');
    }

    function togglePopupPanel() {
        if (!isPrintPopupWindow()) return;
        setPopupPanelHidden(!document.documentElement.classList.contains('lr-popup-panel-hidden'));
    }

    function initializePopupPanelState() {
        if (!isPrintPopupWindow()) return;
        ensurePopupPanelStyles();
        const stored = localStorage.getItem('labelRegeneratorPopupPanelHidden');
        setPopupPanelHidden(stored == null ? true : stored === '1');
    }

    function bindPopupPanelKeyboardToggle() {
        if (!isPrintPopupWindow() || window.__lrPopupPanelKeyboardV223) return;

        window.addEventListener('keydown', (event) => {
            if (event.key.toLowerCase() !== 'e') return;
            if (event.ctrlKey || event.metaKey || event.altKey || isTypingTarget(event.target)) return;

            event.preventDefault();
            event.stopImmediatePropagation();
            togglePopupPanel();
        }, true);

        window.__lrPopupPanelKeyboardV223 = true;
    }

    function schedulePopupPanelSetup() {
        initializePopupPanelState();
        bindPopupPanelKeyboardToggle();
        requestAnimationFrame(() => {
            initializePopupPanelState();
            bindPopupPanelKeyboardToggle();
        });
        setTimeout(() => {
            initializePopupPanelState();
            bindPopupPanelKeyboardToggle();
        }, 150);
        setTimeout(() => {
            initializePopupPanelState();
            bindPopupPanelKeyboardToggle();
        }, 700);
    }

    window.addEventListener('labelRegeneratorReady', schedulePopupPanelSetup);

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', schedulePopupPanelSetup);
    } else {
        schedulePopupPanelSetup();
    }
})();
