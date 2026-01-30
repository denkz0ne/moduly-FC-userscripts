// ==UserScript==
// @name         VP Searchbar
// @namespace    https://moduly.faxcopy.sk/
// @author       mato e.
// @version      1.2.1
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

        // 🔢 input na VP
        const vpInput = document.createElement('input');
        vpInput.type = 'text';
        vpInput.id = 'vp-quick-access';
        vpInput.placeholder = 'VP číslo...';
        vpInput.autocomplete = 'off';
        vpInput.spellcheck = false;
        vpInput.style.marginRight = '6px';
        vpInput.style.padding = originalInput.style.padding || '5px';
        vpInput.style.border = originalInput.style.border || '1px solid #ccc';
        vpInput.style.borderRadius = originalInput.style.borderRadius || '4px';
        vpInput.style.height = originalInput.offsetHeight + 'px';
        vpInput.style.boxSizing = 'border-box';
        vpInput.style.width = '110px';

        // 🏷️ tlačidlo – tlač štítku
        const labelBtn = document.createElement('button');
        labelBtn.type = 'button';
        labelBtn.title = 'Vytlačiť štítok';
        labelBtn.innerHTML = '🏷️';
        labelBtn.style.height = originalInput.offsetHeight + 'px';
        labelBtn.style.marginRight = '10px';
        labelBtn.style.cursor = 'pointer';
        labelBtn.style.border = originalInput.style.border || '1px solid #ccc';
        labelBtn.style.borderRadius = originalInput.style.borderRadius || '4px';
        labelBtn.style.background = '#fff';

        // vloženie pred pôvodný search
        wrapper.insertBefore(labelBtn, originalInput);
        wrapper.insertBefore(vpInput, labelBtn);

        // ⏎ Enter → detail VP
        vpInput.addEventListener('keydown', e => {
            if (e.key === 'Enter') {
                const vpNumber = vpInput.value.trim();
                if (/^\d+$/.test(vpNumber)) {
                    window.open(
                        `https://moduly.faxcopy.sk/vyrobne_prikazy/detail/index/${vpNumber}`,
                        '_blank'
                    );
                } else {
                    alert('Zadaj platné číslo VP');
                }
            }
        });

        // 🏷️ klik → tlač štítku
        labelBtn.addEventListener('click', () => {
            const vpNumber = vpInput.value.trim();
            if (/^\d+$/.test(vpNumber)) {
                window.open(
                    `https://moduly.faxcopy.sk/vyrobne_prikazy/detail/printLabel/${vpNumber}`,
                    '_blank'
                );
            } else {
                alert('Zadaj platné číslo VP');
            }
        });
    }

    window.addEventListener('load', () => {
        createVPInput();
    });
})();

    window.addEventListener('load', () => {
        createVPInput();
    });
})();
