// ==UserScript==
// @name         FoVpSizeExtractor
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Zistí rozmer a priečku z fotoobrazu a uloží do globálnej premennej FoVpSize
// @author       mato
// @match        *://*/vyrobne_prikazy/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    // Počkaj až sa stránka načíta
    window.addEventListener('load', () => {
        // Hlavná premenná
        window.FoVpSize = '';

        // Získame číslo VP z URL
        const url = window.location.href;
        const matchVP = url.match(/vyrobne_prikazy\/(\d+)/);
        const cisloVP = matchVP ? matchVP[1] : '????';

        // Nájdi všetky hlavné riadky produktov
        const productRows = document.querySelectorAll('tr[title="ceny bez DPH"]');

        productRows.forEach(row => {
            const columns = row.querySelectorAll('td');
            if (columns.length > 2) {
                const itemName = columns[2].textContent.trim();
                const rozmerMatch = itemName.match(/(\d{2,4}x\d{2,4})/);
                const rozmerFO = rozmerMatch ? rozmerMatch[1] : '???x???';

                // Checkni detail
                const detailRow = row.nextElementSibling;
                let priecka = '-'; // predvolene žiadna priečka

                if (detailRow && detailRow.classList.contains('detail-price-tr')) {
                    const detailTable = detailRow.querySelector('.detail-price-in-order');
                    if (detailTable) {
                        const materialRows = detailTable.querySelectorAll('tr');
                        materialRows.forEach(tr => {
                            const td = tr.querySelector('td');
                            if (td && td.textContent.includes('priecka')) {
                                priecka = '+'; // máme priečku!
                            }
                        });
                    }
                }

                // Zlož finálnu správu
                const output = `${cisloVP},${rozmerFO},${priecka}`;
                window.FoVpSize = output;

                // Vyhodíme to von
                console.log('📦 FoVpSize:', window.FoVpSize);
            }
        });
    });
})();
