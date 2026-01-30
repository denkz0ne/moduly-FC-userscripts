// ==UserScript==
// @name         setTitleForIndustrialQueue
// @namespace    http://tvoj-namespace.example
// @version      1.3.1
// @description  Nastavuje title na (total) skratka, aj pri oneskorenom načítaní + refreshuje stránku len keď je tab v pozadí
// @updateURL    https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/setTitleForIndustrialQueue.user.js
// @downloadURL  https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/setTitleForIndustrialQueue.user.js
// @match        https://moduly.faxcopy.sk/vyrobne_prikazy/industrialQueue/detail/*
// @match        https://moduly.faxcopy.sk/vyrobne_prikazy/detail/index/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function () {
    'use strict';

    function findSkratkaAndTotalRecords() {
        let skratka = '';
        let totalRecords = '';

        const elems = [...document.querySelectorAll('p, div, span, strong, td')];
        for (const el of elems) {
            if (!skratka && el.textContent?.includes('Skratka:')) {
                const m = el.textContent.match(/Skratka:\s*([^\s]+)/);
                if (m) skratka = m[1];
            }
            if (skratka) break;
        }

        const infoDiv = document.getElementById('vp_list_info');
        if (infoDiv) {
            const m = infoDiv.textContent.match(/z celkovo\s+(\d+)/);
            if (m) totalRecords = m[1];
        }

        return { skratka, totalRecords };
    }

    function setTitle(skratka, totalRecords) {
        if (skratka && totalRecords) {
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
            }
            if (attempts >= maxAttempts) clearInterval(timer);
        }, interval);
    }

    function setTitleForVPDetail() {
        const strong = document.querySelector('strong.red');
        if (strong) {
            document.title = `VP ${strong.textContent.trim()}`;
        }
    }

    function setupBackgroundRefresh() {
        setInterval(() => {
            if (document.hidden) location.reload();
        }, 30000);
    }

    // 🏷️ pridanie tlače štítku – FUNGUJE AJ PRI AJAXE
    function addPrintLabelLink(root = document) {
        root.querySelectorAll('tr').forEach(tr => {
            const printer = tr.querySelector('a.action.silk.printer');
            if (!printer) return;

            if (tr.querySelector('a[data-print-label="1"]')) return;

            const vpLink = tr.querySelector('a[href*="/vyrobne_prikazy/detail/index/"]');
            if (!vpLink) return;

            const m = vpLink.getAttribute('href').match(/detail\/index\/(\d+)/);
            if (!m) return;

            const vpId = m[1];

            const labelLink = document.createElement('a');
            labelLink.href = `/vyrobne_prikazy/detail/printLabel/${vpId}`;
            labelLink.target = '_blank';
            labelLink.title = 'Vytačiť Štítok';
            labelLink.dataset.printLabel = '1';

            const img = document.createElement('img');
            img.src = '/assets/img/adminity/img/icons/04/16/39.png';
            img.alt = '';

            labelLink.appendChild(img);

            printer.after(labelLink);

            console.log(`🏷️ štítok pridaný pre VP ${vpId}`);
        });
    }

    function observeTableChanges() {
        const observer = new MutationObserver(mutations => {
            mutations.forEach(m => {
                m.addedNodes.forEach(node => {
                    if (node.nodeType === 1) {
                        addPrintLabelLink(node);
                    }
                });
            });
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    window.addEventListener('load', () => {
        const url = location.href;

        if (url.includes('/industrialQueue/detail/')) {
            tryToSetTitle();
            setupBackgroundRefresh();

            // prvý pokus
            addPrintLabelLink();

            // strážime AJAX
            observeTableChanges();
        }

        if (url.includes('/vyrobne_prikazy/detail/index/')) {
            setTitleForVPDetail();
        }
    });
})();
