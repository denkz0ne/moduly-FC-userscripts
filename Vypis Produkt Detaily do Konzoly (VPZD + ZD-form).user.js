// ==UserScript==
// @name         Vypis Produkt Detaily do Konzoly (VPZD + ZD-form)
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Vytiahne všetky detaily produktu a vypíše do konzoly plain text (z VPZD aj ZD-form)
// author       ChatGPT-genZ
// @match        https://moduly.faxcopy.sk/vyrobne_prikazy/detail/index/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.addEventListener('load', () => {
        // Skúsime najprv VPZD
        let container = document.querySelector("#VPZDParams");

        // Ak nič, skúsime ZD-form
        if (!container) {
            console.log('🧐 #VPZDParams nenájdený, skúšam #zd-form-container');
            container = document.querySelector("#zd-form-container");

            if (!container) {
                console.log('❌ Ani #zd-form-container sme nenašli. Končím.');
                return;
            }
        } else {
            console.log('✅ Máme #VPZDParams');
        }

        const rows = container.querySelectorAll('div.flex.mb-2');

        console.log('🔥 DETAILY PRODUKTU 🔥');
        rows.forEach(row => {
            const paramNameElem = row.querySelector('div.w-3\\/12');
            const paramValueElem = row.querySelector('div.w-7\\/12');

            if (!paramNameElem || !paramValueElem) return;

            // Vyčistíme text, odstránime nadbytočné medzery a nové riadky
            const paramName = paramNameElem.textContent.trim().replace(/\s+/g, ' ');
            const paramValue = paramValueElem.textContent.trim().replace(/\s+/g, ' ');

            console.log(`${paramName}: ${paramValue}`);
        });
        console.log('✨ Hotovo! ✨');
    });
})();
