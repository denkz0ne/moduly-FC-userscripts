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

    function findSearchInput() {
        return document.querySelector(
            'input[type="search"], input[name="search"], input[name="q"], #search-box'
        );
    }

    function enhanceSearchBar(originalInput) {
        if (!originalInput) return;
        if (document.getElementById('vp-quick-access')) return;

        const wrapper = originalInput.parentNode;

        // 🔢 VP input
        const vpInput = document.createElement('input');
        vpInput.type = 'text';
        vpInput.id = 'vp-quick-access';
        vpInput.placeholder = 'VP číslo…';
        vpInput.autocomplete = 'off';
        vpInput.spellcheck = false;
        vpInput.style.marginRight = '6px';
        vpInput.style.padding = getComputedStyle(originalInput).padding;
        vpInput.style.border = getComputedStyle(originalInput).border;
        vpInput.style.borderRadius = getComputedStyle(originalInput).borderRadius;
        vpInput.style.height = originalInput.offsetHeight + 'px';
        vpInput.style.boxSizing = 'border-box';
        vpInput.style.width = '110px';

        // 🏷️ ikonka tlače štítku (rovnaký vizuál ako v tabuľke)
        const labelLink = document.createElement('a');
        labelLink.href = '#';
        labelLink.title = 'Vytačiť Štítok';
        labelLink.style.marginRight = '10px';
        labelLink.style.display = 'inline-flex';
        labelLink.style.alignItems = 'center';

        const img = document.createElement('img');
        img.src = '/assets/img/adminity/img/icons/04/16/39.png';
        img.alt = '';
        img.style.cursor = 'pointer';

        labelLink.appendChild(img);

        // vloženie pred pôvodný search
        wrapper.insertBefore(labelLink, originalInput);
        wrapper.insertBefore(vpInput, labelLink);

        // ⏎ Enter → detail VP
        vpInput.addEventListener('keydown', e => {
            if (e.key === 'Enter') {
                const vp = vpInput.value.trim();
                if (/^\d+$/.test(vp)) {
                    window.open(
                        `/vyrobne_prikazy/detail/index/${vp}`,
                        '_blank'
                    );
                } else {
                    alert('Zadaj platné číslo VP');
                }
            }
        });

        // 🏷️ klik na ikonku → tlač štítku
        labelLink.addEventListener('click', e => {
            e.preventDefault();

            const vp = vpInput.value.trim();
            if (/^\d+$/.test(vp)) {
                window.open(
                    `/vyrobne_prikazy/detail/printLabel/${vp}`,
                    '_blank'
                );
            } else {
                alert('Zadaj platné číslo VP');
            }
        });

        console.log('🏷️ VP search + ikonka tlače štítku pridané');
    }

    function observeForSearch() {
        const observer = new MutationObserver(() => {
            const input = findSearchInput();
            if (input) {
                enhanceSearchBar(input);
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    window.addEventListener('load', () => {
        const input = findSearchInput();
        if (input) {
            enhanceSearchBar(input);
        } else {
            observeForSearch();
        }
    });
})();
