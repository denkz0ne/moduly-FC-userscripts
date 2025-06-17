// ==UserScript==
// @name         Klavesove skratky
// @namespace    http://tvoj-namespace.example
// @version      1.3
// @description  Stlač L => otvorí, vytlačí a zavrie štitok, pokiaľ nie si v inpute, selecte, textarea. P otvori prislusenstvo.
// @match        https://moduly.faxcopy.sk/vyrobne_prikazy/detail/index/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';

    // Funkcia pre získanie VP čísla
    function getVpNumber() {
        const strong = document.querySelector('strong.red');
        return strong ? strong.textContent.trim() : null;
    }

    // Počúvame na stlačenie kláves
    window.addEventListener('keydown', function(e) {
        // Kontrola, či sme v inpute, textarea, selecte
        if (e.target.tagName === 'INPUT' ||
            e.target.tagName === 'TEXTAREA' ||
            e.target.tagName === 'SELECT') {
            return; // nič nerobíme, sme vo formulári
        }

        // Má to bežať len pri stlačení L
        if (e.key.toLowerCase() === 'l' && !e.repeat) {
            const vpNumber = getVpNumber();
            if (!vpNumber) {
                console.warn('🚀 Číslo VP (strong.red) sa nenašlo!');
                return;
            }
            const url = `https://moduly.faxcopy.sk/vyrobne_prikazy/detail/printLabel/${vpNumber}`;

            // Otvoríme nový tab
            const newWindow = window.open(url, '_blank');

            if (!newWindow) {
                console.warn('🚀 Pop-up blokátor zabránil otvoreniu nového okna!');
                return;
            }

            // Keď načíta, vytlačí a po chvíľke sám zavrie
            newWindow.onload = () => {
                console.log('🚀 Okno načítané, spúšťam tlač');
                newWindow.print();

                setTimeout(function(){
                    console.log('🚀 Zatváram okno po 2 sekundách');
                    newWindow.close();
                }, 1000);
            };
        }
    });

})();
