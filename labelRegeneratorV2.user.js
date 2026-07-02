// ==UserScript==
// @name         labelRegeneratorV2
// @namespace    https://moduly.faxcopy.sk/
// @author       mato e.
// @version      2.0.22
// @description  Uprava print stitku, overlay zony, konfigurator layoutu a klavesa L pre otvorenie, tlac a zatvorenie stitku.
// @updateURL    https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/main/labelRegeneratorV2.user.js
// @downloadURL  https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/main/labelRegeneratorV2.user.js
// @require      https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js
// @require      https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js
// @require      https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js
// @match        https://moduly.faxcopy.sk/vyrobne_prikazy/detail/printLabel/*
// @match        https://moduly.faxcopy.sk/vyrobne_prikazy/detail/index/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function () {
    'use strict';

    window.labelRegeneratorV2Version = '2.0.22';

    function isDetailPage() {
        return /\/vyrobne_prikazy\/detail\/index\//.test(location.pathname);
    }

    function isPrintLabelUrl(url) {
        return /\/vyrobne_prikazy\/detail\/printLabel\//.test(String(url || ''));
    }

    function getPopupFeatures() {
        const width = 720;
        const height = 520;
        const left = Math.max(0, Math.round((window.screen.availWidth - width) / 2));
        const top = Math.max(0, Math.round((window.screen.availHeight - height) / 2));
        return [
            'popup=yes',
            `width=${width}`,
            `height=${height}`,
            `left=${left}`,
            `top=${top}`,
            'menubar=no',
            'toolbar=no',
            'location=no',
            'status=no',
            'resizable=yes',
            'scrollbars=yes'
        ].join(',');
    }

    function patchPrintLabelPopupOpen() {
        if (!isDetailPage() || window.__lrPopupOpenPatchV222) return;

        const originalOpen = window.open.bind(window);
        window.open = function (url, target, features) {
            if (isPrintLabelUrl(url)) {
                return originalOpen(url, 'labelRegeneratorPrintPopup', getPopupFeatures());
            }
            return originalOpen(url, target, features);
        };

        window.__lrPopupOpenPatchV222 = true;
    }

    patchPrintLabelPopupOpen();

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', patchPrintLabelPopupOpen);
    }
})();
