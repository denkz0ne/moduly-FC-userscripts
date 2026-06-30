// ==UserScript==
// @name         labelRegeneratorV2
// @namespace    https://moduly.faxcopy.sk/
// @author       mato e.
// @version      2.0.7
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

    window.labelRegeneratorV2Version = '2.0.7';

    let mmPxCache = null;

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
        const fontSize = compressed
            ? Math.max(24, Math.min(37, finalHeight * 0.62))
            : 37;

        obj.style.setProperty('font-size', `${fontSize}px`, 'important');
        obj.dataset.lrAnchoredObj = compressed ? 'compressed' : 'normal';
    }

    function scheduleStabilize() {
        stabilizeOrderNumberBlock();
        requestAnimationFrame(stabilizeOrderNumberBlock);
        setTimeout(stabilizeOrderNumberBlock, 80);
        setTimeout(stabilizeOrderNumberBlock, 250);
        setTimeout(stabilizeOrderNumberBlock, 800);
    }

    const originalRefresh = window.labelRegeneratorRefresh;
    if (typeof originalRefresh === 'function') {
        window.labelRegeneratorRefresh = function () {
            const result = originalRefresh.apply(this, arguments);
            scheduleStabilize();
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
