// ==UserScript==
// @name         labelRegeneratorV2
// @namespace    https://moduly.faxcopy.sk/
// @author       mato e.
// @version      2.0.25
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

    window.labelRegeneratorV2Version = '2.0.25';

    function isPrintLabelPage() {
        return /\/vyrobne_prikazy\/detail\/printLabel\//.test(location.pathname);
    }

    function isDetailPage() {
        return /\/vyrobne_prikazy\/detail\/index\//.test(location.pathname);
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
        if (document.getElementById('lr-popup-panel-toggle-style-v225')) return;

        const style = document.createElement('style');
        style.id = 'lr-popup-panel-toggle-style-v225';
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
        if (!isPrintPopupWindow() || window.__lrPopupPanelKeyboardV225) return;

        window.addEventListener('keydown', (event) => {
            if (event.key.toLowerCase() !== 'e') return;
            if (event.ctrlKey || event.metaKey || event.altKey || isTypingTarget(event.target)) return;

            event.preventDefault();
            event.stopImmediatePropagation();
            togglePopupPanel();
        }, true);

        window.__lrPopupPanelKeyboardV225 = true;
    }

    function preventLWorkflowAutoPrint() {
        if (!isDetailPage() || window.__lrManualLPopupPatchV225) return;

        const originalSetTimeout = window.setTimeout.bind(window);
        window.setTimeout = function (callback, delay) {
            const args = Array.prototype.slice.call(arguments, 2);
            if (typeof callback === 'function' && String(callback).includes('triggerDelayedPrintWhenReady')) {
                return originalSetTimeout(() => {}, 0);
            }
            return originalSetTimeout(callback, delay, ...args);
        };

        window.__lrManualLPopupPatchV225 = true;
    }

    function bindManualPrintShortcutInLabelWindow() {
        if (!isPrintLabelPage() || window.__lrCtrlPManualPrintV225) return;

        window.addEventListener('keydown', (event) => {
            const key = event.key.toLowerCase();
            if (key !== 'p' || !(event.ctrlKey || event.metaKey)) return;

            event.preventDefault();
            event.stopImmediatePropagation();
            window.print();
        }, true);

        window.__lrCtrlPManualPrintV225 = true;
    }

    function schedulePopupPanelSetup() {
        preventLWorkflowAutoPrint();
        initializePopupPanelState();
        bindPopupPanelKeyboardToggle();
        bindManualPrintShortcutInLabelWindow();
        requestAnimationFrame(() => {
            preventLWorkflowAutoPrint();
            initializePopupPanelState();
            bindPopupPanelKeyboardToggle();
            bindManualPrintShortcutInLabelWindow();
        });
        setTimeout(() => {
            preventLWorkflowAutoPrint();
            initializePopupPanelState();
            bindPopupPanelKeyboardToggle();
            bindManualPrintShortcutInLabelWindow();
        }, 150);
        setTimeout(() => {
            preventLWorkflowAutoPrint();
            initializePopupPanelState();
            bindPopupPanelKeyboardToggle();
            bindManualPrintShortcutInLabelWindow();
        }, 700);
    }

    window.addEventListener('labelRegeneratorReady', schedulePopupPanelSetup);

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', schedulePopupPanelSetup);
    } else {
        schedulePopupPanelSetup();
    }
})();
