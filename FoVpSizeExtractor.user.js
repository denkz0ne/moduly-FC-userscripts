// ==UserScript==
// @name         FoVpSizeExtractor
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Vyparsuje cislo VP, rozmer fotoobrazu a zisti ci ma priecku. Zapise do globalnej premennej FoVpSize a vypise do konzoly. 🔍🖼️🔧
// @author       GPT
// @match        *://*/vyrobne_prikazy/*
// @grant        none
// @updateURL    https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/main/FoVpSizeExtractor.user.js
// @downloadURL  https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/main/FoVpSizeExtractor.user.js
// ==/UserScript==

(function () {
    'use strict';

    // 🕰️ Počkaj, kým sa všetko načíta
    window.addEventListener('load', () => {
        // 🔴 Získa číslo VP zo strong.red
        const vpElem = document.querySelector('strong.red');
        const cisloVP = vpElem ? vpElem.textContent.trim() : '????';

        // 🧩 Nájdi všetky hlavné riadky produktov
        const productRows = document.querySelectorAll('tr[title="ceny bez DPH"]');

        // Premenná do ktorej ukladáme výstup (napr. ak ich bude viac)
        let vystupy = [];

        productRows.forEach(row => {
            const columns = row.querySelectorAll('td');
            if (columns.length > 2) {
                const itemName = columns[2].textContent.trim();

                // 🎯 Získaj rozmer (napr. 40x30)
                const rozmerMatch = itemName.match(/(\d{2,4}x\d{2,4})/);
                const rozmerFO = rozmerMatch ? rozmerMatch[1] : '???x???';

                // 🔎 Hľadaj priečku
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

                // 🧾 Skladačka
                const vysledok = `${cisloVP},${rozmerFO},${priecka}`;
                vystupy.push(vysledok);
            }
        });

        // Ak máme aspoň 1 výstup, zapíš do globálu a logni
        if (vystupy.length > 0) {
            window.FoVpSize = vystupy[0]; // ak by ich bolo viac, môžeme meniť logiku
            console.log('📦 FoVpSize:', window.FoVpSize);
        } else {
            console.warn('⚠️ Nenašli sa žiadne produkty na spracovanie.');
        }
    });
})();
