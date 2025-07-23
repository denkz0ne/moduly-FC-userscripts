// ==UserScript==
// @name         setTitleForIndustrialQueue
// @namespace    http://tvoj-namespace.example
// @version      1.3
// @description  Nastavuje title na (total) skratka, aj pri oneskorenom načítaní + refreshuje stránku len keď je tab v pozadí
// @updateURL    https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/setTitleForIndustrialQueue.user.js
// @downloadURL  https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/setTitleForIndustrialQueue.user.js
// @match        https://moduly.faxcopy.sk/vyrobne_prikazy/industrialQueue/detail/*
// @match        https://moduly.faxcopy.sk/vyrobne_prikazy/detail/index/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    function findSkratkaAndTotalRecords() {
        let skratka = '';
        let totalRecords = '';

        // Skusime najst skratku tak ako predtym (z elementov p, div, span, strong, td)
        const elems = [...document.querySelectorAll('p, div, span, strong, td')];
        for (const el of elems) {
            if (!skratka && el.textContent?.includes('Skratka:')) {
                const m = el.textContent.trim().match(/Skratka:\s*([^\s]+)/);
                if (m && m[1]) skratka = m[1].trim();
            }
            if (skratka) break; // Ak už máme skratku, netreba ďalej hľadať
        }

        // Teraz si vyťaháme počet z toho divu s id=vp_list_info
        const infoDiv = document.getElementById('vp_list_info');
        if (infoDiv && infoDiv.textContent) {
            const m = infoDiv.textContent.trim().match(/Záznamy.*z celkovo\s+(\d+)/);
            if (m && m[1]) totalRecords = m[1];
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

    // Refresh len ked tab nie je aktivny, raz za 30 sekúnd
    function setupBackgroundRefresh() {
        setInterval(() => {
            if (document.hidden) {
                console.log('[UserScript] Tab je na pozadí, reloadujem stránku...');
                location.reload();
            }
        }, 30000); // každých 30 sekúnd
    }

    window.addEventListener('load', () => {
        const url = window.location.href;

        if (url.includes('/industrialQueue/detail/')) {
            tryToSetTitle();
            setupBackgroundRefresh();
        } else if (url.includes('/vyrobne_prikazy/detail/index/')) {
            setTitleForVPDetail();
        }
    });
})();
