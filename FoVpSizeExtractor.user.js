// ==UserScript==
// @name         FoVpSizeExtractor
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  Vyparsuje cislo VP, rozmer fotoobrazu a zisti ci ma priecku. Zapise do globalnej premennej FoVpSize a do sessionStorage TM_testoLeft. 🔍🖼️🔧
// @author       GPT
// @match        *://*/vyrobne_prikazy/*
// @grant        none
// @updateURL    https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/main/FoVpSizeExtractor.user.js
// @downloadURL  https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/main/FoVpSizeExtractor.user.js
// ==/UserScript==

(function () {
    'use strict';

    window.addEventListener('load', () => {
        const vpElem = document.querySelector('strong.red');
        const cisloVP = vpElem ? vpElem.textContent.trim() : '????';

        const productRows = document.querySelectorAll('tr[title="ceny bez DPH"]');
        let vystupy = [];

        productRows.forEach(row => {
            const columns = row.querySelectorAll('td');
            if (columns.length > 2) {
                const itemName = columns[2].textContent.trim();
                const rozmerMatch = itemName.match(/(\d{2,4}x\d{2,4})/);
                const rozmerFO = rozmerMatch ? rozmerMatch[1].replace('x', '') : '????'; // napr. 2520

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
                vystupy.push(vysledok);
            }
        });

        if (vystupy.length > 0) {
            window.FoVpSize = vystupy[0];
            console.log('📦 FoVpSize:', window.FoVpSize);

            // Tu vytiahneme z FoVpSize rozmer + priecku na ulozenie do sessionStorage pod TM_testoLeft
            const parts = window.FoVpSize.split(',');
            // parts[1] je rozmer (napr. 2520), parts[2] priecka (+ alebo -)
            let tmHodnota = parts[1] || '';
            if(parts[2] === '+') {
                tmHodnota += '+';
            }

            sessionStorage.setItem('TM_testoLeft', tmHodnota);
            console.log('🚀 sessionStorage TM_testoLeft nastavené na:', tmHodnota);
        } else {
            console.warn('⚠️ Nenašli sa žiadne produkty na spracovanie.');
            sessionStorage.removeItem('TM_testoLeft'); // keď nič nie je, nech to nemaže starú hodnotu
        }
    });
})();
