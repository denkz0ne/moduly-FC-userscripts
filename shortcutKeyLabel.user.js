// ==UserScript==
// @name         shortcutKeyLabel
// @namespace    http://tvoj-namespace.example
// @version      2.0
// @description  Stlač L => otvorí, vytlačí a zavrie štitok, pokiaľ nie si v inpute, selecte, textarea.
// @updateURL    https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/shortcutKeyLabel.user.js
// @downloadURL  https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/shortcutKeyLabel.user.js
// @match        https://moduly.faxcopy.sk/vyrobne_prikazy/detail/index/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';

    function getVpNumber() {
        const strong = document.querySelector('strong.red');
        return strong ? strong.textContent.trim() : null;
    }

    // Funkcia, čo vyparsuje rozmer a priecku z tabuľky produktov (podľa originálneho FoVpSizeExtractor)
    function extractFoVpSize() {
        const vpElem = document.querySelector('strong.red');
        const cisloVP = vpElem ? vpElem.textContent.trim() : '????';

        const productRows = document.querySelectorAll('tr[title="ceny bez DPH"]');
        if (!productRows.length) {
            console.warn('⚠️ Nenašli sa produkty na vyparsovanie FO rozmeru.');
            return null;
        }

        // Spracujeme prvý riadok (alebo uprav podľa potreby)
        const row = productRows[0];
        const columns = row.querySelectorAll('td');
        if (columns.length <= 2) {
            console.warn('⚠️ Riadok nemá dostatok stĺpcov na vyparsovanie.');
            return null;
        }

        const itemName = columns[2].textContent.trim();
        const rozmerMatch = itemName.match(/(\d{2,4}x\d{2,4})/);
        let rozmerFO = rozmerMatch ? rozmerMatch[1].replace('x', '') : '????';

        // Skontrolujeme priecku v detailnom riadku
        let priecka = '-';
        const detailRow = row.nextElementSibling;
        if (detailRow && detailRow.classList.contains('detail-price-tr')) {
            const detailTable = detailRow.querySelector('.detail-price-in-order');
            if (detailTable) {
                const materialRows = detailTable.querySelectorAll('tr');
                materialRows.forEach(tr => {
                    const td = tr.querySelector('td');
                    if (td && td.textContent.toLowerCase().includes('priecka')) {
                        priecka = '+';
                    }
                });
            }
        }

        const vysledok = `${cisloVP},${rozmerFO},${priecka}`;
        window.FoVpSize = vysledok;
        console.log('📦 FoVpSize:', vysledok);

        let tmHodnota = rozmerFO;
        if(priecka === '+') tmHodnota += '+';

        sessionStorage.setItem('TM_testoLeft', tmHodnota);
        console.log('🚀 sessionStorage TM_testoLeft nastavené na:', tmHodnota);

        return vysledok;
    }

    // Hlavný handler na stlačenie L
    function handleLpress() {
        const vpNumber = getVpNumber();
        if (!vpNumber) {
            console.warn('🚀 Číslo VP (strong.red) sa nenašlo!');
            return;
        }

        // Vyparsujeme rozmer + priecku a uložíme do sessionStorage
        const sizeInfo = extractFoVpSize();
        if (!sizeInfo) {
            console.warn('⚠️ Nepodarilo sa vyparsovať FO rozmer/priecku, nebudem otvárať print.');
            return;
        }

        const url = `https://moduly.faxcopy.sk/vyrobne_prikazy/detail/printLabel/${vpNumber}`;
        const newWindow = window.open(url, '_blank');
        if (!newWindow) {
            console.warn('🚀 Pop-up blokátor zabránil otvoreniu nového okna!');
            return;
        }

        newWindow.onload = () => {
            console.log('🚀 Okno načítané, spúšťam tlač');
            newWindow.print();
            setTimeout(() => {
                console.log('🚀 Zatváram okno po 2 sekundách');
                newWindow.close();
            }, 2000);
        };
    }

    // Počúvame na klávesy, nech nerušíme formuláre
    window.addEventListener('keydown', (e) => {
        if (['INPUT','TEXTAREA','SELECT'].includes(e.target.tagName)) return;
        if (e.key.toLowerCase() === 'l' && !e.repeat) {
            handleLpress();
        }
    });
})();

