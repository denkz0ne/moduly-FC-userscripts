// ==UserScript==
// @name         Prefix stiahnutých súborov VP číslom
// @namespace    http://tvoj-namespace.example
// @version      1.0
// @description  Pridá VP číslo z strong.red na začiatok názvu stiahnutých PDF súborov
// @match        https://moduly.faxcopy.sk/vyrobne_prikazy/detail/index/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';

    function getVpNumber() {
        const strong = document.querySelector('strong.red');
        return strong ? strong.textContent.trim() : null;
    }

    function prefixDownloadLinks() {
        const vp = getVpNumber();
        if (!vp) {
            console.warn('⚠️ VP číslo sa nenašlo, nebudú upravené linky na stiahnutie.');
            return;
        }

        const links = document.querySelectorAll('a[href$=".pdf"]'); // uprav podľa potreby
        if (links.length === 0) {
            console.warn('⚠️ Žiadne PDF linky na stránke.');
            return;
        }

        links.forEach(link => {
            try {
                const url = new URL(link.href);
                const originalFileName = url.pathname.split('/').pop();

                if (!originalFileName.startsWith(vp + '_')) {
                    const newFileName = vp + '_' + originalFileName;
                    const pathParts = url.pathname.split('/');
                    pathParts[pathParts.length - 1] = newFileName;
                    url.pathname = pathParts.join('/');

                    link.href = url.toString();
                    link.setAttribute('download', newFileName);

                    console.log(`🔧 Upravený link: ${link.href}`);
                }
            } catch (e) {
                console.warn('⚠️ Chyba pri spracovaní linku:', link.href, e);
            }
        });
    }

    window.addEventListener('load', prefixDownloadLinks);
})();
