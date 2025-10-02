// ==UserScript==
// @name         Better Label generator (L)
// @namespace    https://moduly.faxcopy.sk/
// @author       mato e.
// @version      2.6.1
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

    function extractDimensionFromText(text) {
        const match = text.match(/(\d{2,3})\s*[x×]\s*(\d{2,3})/i);
        return match ? `${match[1]} ${match[2]}` : null;
    }

    function findDimensionInRows() {
        const trs = document.querySelectorAll("tr[title='ceny bez DPH']");
        for (const tr of trs) {
            const txt = tr.innerText;
            const dim = extractDimensionFromText(txt);
            if (dim) return {dim, text: txt};
        }
        return null;
    }

    function detectPriecka() {
        const rows = document.querySelectorAll("tr.detail-price-tr .detail-price-in-order tr");
        for (const tr of rows) {
            if (tr.innerText.toLowerCase().includes('priecka')) return '+';
        }
        return '';
    }

    function detectFoText() {
        // 1️⃣ hľadáme text zo všetkých riadkov tabuľky
        const tableRows = document.querySelectorAll("div > table tr");
        let hexaDetected = false;
        let premiumDetected = false;

        tableRows.forEach(tr => {
            const txt = tr.textContent || '';
            if (/HEXA|HEXAGÓN/i.test(txt)) hexaDetected = true;
            if (/PREMIUM/i.test(txt)) premiumDetected = true;
        });

        // 2️⃣ PREMIUM z h1/h2 alebo .product-name
        const premiumEl = document.querySelector('.product-name') || document.querySelector('h1') || document.querySelector('h2');
        const premiumText = premiumEl ? premiumEl.textContent : '';
        if (/PREMIUM/i.test(premiumText)) premiumDetected = true;

        // 3️⃣ HEXA má prioritu → vrátime "HEXA"
        if (hexaDetected) return 'HEX';

        // 4️⃣ rozmery z tr[title='ceny bez DPH']
        const row = findDimensionInRows();
        if (!row) return '';

        let result = row.dim || '';

        // priecka
        const pr = detectPriecka();
        if (pr) result += pr;

        // PREMIUM
        if (premiumDetected) result += '  PREM'; // dve medzery pred P

        return result;
    }

    function showLabel(text) {
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

    function updateSession() {
        const tm = detectFoText();
        if (!tm) {
            console.warn('FO rozmer nenájdený.');
            sessionStorage.removeItem('TM_testoLeft');
            window.TM_testoLeft = '';
            return;
        }

        sessionStorage.setItem('TM_testoLeft', tm);
        window.TM_testoLeft = tm;
        console.log('✅ TM_testoLeft =', tm);
        showLabel(tm);
    }

    function pressLAction() {
        if (['INPUT','SELECT','TEXTAREA'].includes(document.activeElement.tagName)) return;
        if (getVpNumber()) {
            updateSession();
            const url = `https://moduly.faxcopy.sk/vyrobne_prikazy/detail/printLabel/${getVpNumber()}`;
            const w = window.open(url, '_blank');
            if (!w) return console.warn('Popup blokátor :)');
            w.onload = () => {
                w.print();
                setTimeout(() => w.close(), 1200);
            };
        }
    }

    window.addEventListener('load', updateSession);
    window.addEventListener('keydown', e => {
        if (e.key.toLowerCase() === 'l' && !e.repeat) pressLAction();
    });

})();
