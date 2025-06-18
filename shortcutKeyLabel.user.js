// ==UserScript==
// @name         Better Label generator (L)
// @namespace    https://moduly.faxcopy.sk/
// @version      2.1.2
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
        return match ? `${match[1]}x${match[2]}` : null;
    }

    function findDimensionInRows() {
        const trs = document.querySelectorAll("tr[title='ceny bez DPH']");
        for (const tr of trs) {
            const txt = tr.innerText;
            const dim = extractDimensionFromText(txt);
            if (dim) return dim;
        }
        return null;
    }

    function detectPriecka() {
        const rows = document.querySelectorAll("tr.detail-price-tr .detail-price-in-order tr");
        for (const tr of rows) {
            const txt = tr.innerText.toLowerCase();
            if (txt.includes('priecka')) return '+';
        }
        return '-';
    }

    function showLabel(text) {
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
        const dim = findDimensionInRows();
        if (!dim) {
            console.warn('FO rozmer nenájdený.');
            sessionStorage.removeItem('TM_testoLeft');
            return;
        }
        const pr = detectPriecka();
        const tm = pr === '+' ? `${dim}+` : dim;
        sessionStorage.setItem('TM_testoLeft', tm);
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

    // UI aj načítanie labelu hneď po load
    window.addEventListener('load', updateSession);
    window.addEventListener('keydown', e => {
        if (e.key.toLowerCase() === 'l' && !e.repeat) pressLAction();
    });

})();
