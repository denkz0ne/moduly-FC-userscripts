// ==UserScript==
// @name         setTitleForIndustrialQueue
// @namespace    http://tvoj-namespace.example
// @version      1.4
// @description  Nastavuje title na (total) skratka, aj pri oneskorenom načítaní
// @updateURL    https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/setTitleForIndustrialQueue.user.js
// @downloadURL  https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/setTitleForIndustrialQueue.user.js
// @match        https://moduly.faxcopy.sk/vyrobne_prikazy/industrialQueue/detail/*
// @match        https://moduly.faxcopy.sk/vyrobne_prikazy/detail/index/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';

    function findSkratkaAndTotalRecords() {
        let skratka = '';
        let totalRecords = '';
        const elems = [...document.querySelectorAll('p, div, span, strong, td')];
        for (const el of elems) {
            if (!skratka && el.textContent?.includes('Skratka:')) {
                const m = el.textContent.trim().match(/Skratka:\s*([^\s]+)/);
                if (m && m[1]) skratka = m[1].trim();
            }
            if (!totalRecords && el.textContent?.startsWith('Záznamy')) {
                const m = el.textContent.trim().match(/Záznamy.*z celkovo\s+(\d+)/);
                if (m && m[1]) totalRecords = m[1];
            }
            if (skratka && totalRecords) break;
        }
        return { skratka, totalRecords };
    }

    function setTitle(skratka, totalRecords) {
        if (totalRecords && skratka) {
            document.title = `(${totalRecords}) ${skratka}`;
        } else if (skratka) {
            document.title = skratka;
        }
    }

    function tryToSetTitle(maxAttempts = 50, interval = 100) {
        let attempts = 0;
        const timer = setInterval(() => {
            attempts++;
            const { skratka, totalRecords } = findSkratkaAndTotalRecords();

            if (skratka && totalRecords) {
                setTitle(skratka, totalRecords);
                clearInterval(timer);
                console.log('[UserScript] Title nastavený');
            }
            if (attempts >= maxAttempts) {
                clearInterval(timer);
                console.warn('[UserScript] Title sa nepodarilo nastaviť');
            }
        }, interval);
    }

    function setTitleForVPDetail() {
        const strong = document.querySelector('strong.red');
        if (strong && strong.textContent) {
            document.title = `VP ${strong.textContent.trim()}`;

            console.log(`[UserScript] VP detail - nastavený title na: VP ${strong.textContent.trim()}`);

            return true;
        }
        return false;
    }

    window.addEventListener('load', () => {
        const url = window.location.href;

        if (url.includes('/industrialQueue/detail/')) {
            tryToSetTitle();
        } else if (url.includes('/vyrobne_prikazy/detail/index/')) {
            setTitleForVPDetail();
        }
    });
})();
