// ==UserScript==
// @name         labelRegeneratorV2
// @namespace    https://moduly.faxcopy.sk/
// @author       mato e.
// @version      2.0.10
// @description  Uprava print stitku, overlay zony, konfigurator layoutu a klavesa L pre otvorenie, tlac a zatvorenie stitku.
// @updateURL    https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/labelRegeneratorV2.user.js
// @downloadURL  https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/labelRegeneratorV2.user.js
// @require      https://github.com/denkz0ne/moduly-FC-userscripts/raw/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js
// @require      https://github.com/denkz0ne/moduly-FC-userscripts/raw/c2be6875f4fcc6ea5404897b0eea4a8550a5c15f/labelRegeneratorV2.user.js
// @match        https://moduly.faxcopy.sk/vyrobne_prikazy/detail/printLabel/*
// @match        https://moduly.faxcopy.sk/vyrobne_prikazy/detail/index/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function () {
    'use strict';

    window.labelRegeneratorV2Version = '2.0.10';

    function renameOverrideLabels() {
        const pairs = [
            ['TM_top', 'pravy horny 1'],
            ['TM_bottom', 'pravy horny 2']
        ];

        pairs.forEach(([zone, labelText]) => {
            const input = document.querySelector(`input[data-override-zone="${zone}"]`);
            const label = input && input.parentElement ? input.parentElement.querySelector('label') : null;
            if (label) label.textContent = labelText;
        });
    }

    function scheduleRename() {
        renameOverrideLabels();
        requestAnimationFrame(renameOverrideLabels);
        setTimeout(renameOverrideLabels, 80);
        setTimeout(renameOverrideLabels, 250);
        setTimeout(renameOverrideLabels, 800);
    }

    window.addEventListener('labelRegeneratorReady', scheduleRename);

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', scheduleRename);
    } else {
        scheduleRename();
    }
})();
