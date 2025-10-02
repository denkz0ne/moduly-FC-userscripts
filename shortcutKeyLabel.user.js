// ==UserScript==
// @name         Better Label generator (L)
// @namespace    https://moduly.faxcopy.sk/
// @author       mato e.
// @version      2.1.5
// @description  Stlač L => otvorí, vytlačí a zavrie štitok, pokiaľ nie si v inpute, selecte, textarea.
// @updateURL    https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/shortcutKeyLabel.user.js
// @downloadURL  https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/shortcutKeyLabel.user.js
// @match        https://moduly.faxcopy.sk/vyrobne_prikazy/detail/index/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function () {
    'use strict';

    function getVpNumber() {
        const strong = document.querySelector('strong.red');
        return strong ? strong.textContent.trim() : null;
    }

    // 1️⃣ Detekcia FO (rozmer, priecka, PREMIUM, HEXA)
    function detectFoText() {
        const trs = document.querySelectorAll("tr[title='ceny bez DPH']");
        let text = '';
        for (const tr of trs) {
            text = tr.innerText;
            if (text) break;
        }
        if (!text) return '';

        // HEXA / HEXAGÓN detekcia
        if (/HEXA|HEXAGÓN/i.test(text)) return 'HEXA';

        // ziskanie rozmeru typu 60x40, 90x60
        const match = text.match(/(\d{2,3})\s*[x×]\s*(\d{2,3})/i);
        let result = match ? match[1] + match[2] : '';

        // priecka
        const rows = document.querySelectorAll("tr.detail-price-tr .detail-price-in-order tr");
        for (const tr of rows) {
            if (tr.innerText.toLowerCase().includes('priecka')) {
                result += '+';
                break;
            }
        }

        // PREMIUM - dve medzery pred P
        if (/PREMIUM/i.test(text)) {
            result += '  P';
        }

        // ak nie je rozmer, ale je HEXA, vloží sa priamo
        if (!result && /HEXA|HEXAGÓN/i.test(text)) result = 'HEXA';

        return result;
    }

    // 2️⃣ Vytvorenie badge
    function createBadge(text) {
        if (!text) return;
        let el = document.querySelector('#shortcut-info-label');
        if (!el) {
            const h = document.querySelector('h1, h2');
            if (!h) return;
            el = document.createElement('span');
            el.id = 'shortcut-info-label';
            el.style.cssText = 'background:#fffa65;color:#000;padding:4px 8px;margin-left:12px;border-radius:4px;font-weight:bold;';
            h.append(el);
        }
        el.textContent = text;
    }

    // 3️⃣ Uloženie do globalnej premennej pre iný script
    function updateGlobalFo() {
        const foText = detectFoText();
        if (!foText) {
            console.warn('FO rozmer nenájdený.');
            window.TM_testoLeft = '';
            return;
        }
        createBadge(foText);  // badge sa vytvorí hneď
        window.TM_testoLeft = foText; // uložíme do global premennej
        console.log('✅ window.TM_testoLeft =', foText);
    }

    // L shortcut pre tlač štítku
    function pressLAction() {
        if (['INPUT','SELECT','TEXTAREA'].includes(document.activeElement.tagName)) return;
        const vpNumber = getVpNumber();
        if (!vpNumber) {
            console.warn('🚀 Číslo VP (strong.red) sa nenašlo!');
            return;
        }
        updateGlobalFo();
        const url = `https://moduly.faxcopy.sk/vyrobne_prikazy/detail/printLabel/${vpNumber}`;
        const w = window.open(url, '_blank');
        if (!w) return console.warn('🚀 Popup blokátor :)');
        w.onload = () => {
            w.print();
            setTimeout(() => w.close(), 1200);
        };
    }

    // inicializácia
    window.addEventListener('load', updateGlobalFo);
    window.addEventListener('keydown', e => {
        if (e.key.toLowerCase() === 'l' && !e.repeat) pressLAction();
    });

})();
