// ==UserScript==
// @name         VP Searchbar
// @namespace    https://moduly.faxcopy.sk/
// @author       mato e.
// @version      1.1
// @description  Pridá input pre číslo VP nalavo od pôvodného vyhľadávania
// @match        https://moduly.faxcopy.sk/*
// @updateURL    https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/VPsearchbar.user.js
// @downloadURL  https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/VPsearchbar.user.js
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function () {
    'use strict';

    function createVPInput() {
        const originalInput = document.querySelector('#search-box');
        if (!originalInput) return;

        const wrapper = originalInput.parentNode;

        // Vytvor nový input
        const vpInput = document.createElement('input');
        vpInput.type = 'text';
        vpInput.id = 'vp-quick-access';
        vpInput.placeholder = 'VP číslo...';
        vpInput.autocomplete = 'off';         // vypni ukladanie histórie
        vpInput.spellcheck = false;           // žiadne červené vlnky
        vpInput.style.marginRight = '10px';
        vpInput.style.padding = originalInput.style.padding || '5px';
        vpInput.style.border = originalInput.style.border || '1px solid #ccc';
        vpInput.style.borderRadius = originalInput.style.borderRadius || '4px';
        vpInput.style.height = originalInput.offsetHeight + 'px';
        vpInput.style.boxSizing = 'border-box';

        // Pridaj input pred pôvodný
        wrapper.insertBefore(vpInput, originalInput);

        // Enter event
        vpInput.addEventListener('keydown', function (e) {
            if (e.key === 'Enter') {
                const vpNumber = vpInput.value.trim();
                if (/^\d+$/.test(vpNumber)) {
                    const url = `https://moduly.faxcopy.sk/vyrobne_prikazy/detail/index/${vpNumber}`;
                    window.open(url, '_blank');
                } else {
                    alert('Zadaj platné číslo VP (iba čísla)');
                }
            }
        });
    }

    window.addEventListener('load', () => {
        createVPInput();
    });
})();
