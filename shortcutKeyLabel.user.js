// ==UserScript==
// @name         shortcutKeyLabel
// @namespace    http://tvoj-namespace.example
// @version      1.0
// @description  Stlač L => otvorí, vytlačí a zavrie štitok, pokiaľ nie si v inpute, selecte, textarea.
// @updateURL    https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/shortcutKeyLabel.user.js
// @downloadURL  https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/shortcutKeyLabel.user.js
// @match        https://moduly.faxcopy.sk/vyrobne_prikazy/detail/index/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';

    // Funkcia pre ziskanie VP
    function getVpNumber() {
        const strong = document.querySelector('strong.red');
        return strong ? strong.textContent.trim() : null;
    }

    // Funkcia na kontrolu fotoobrazu
    function checkFotoObraz() {
        // Hľadaáme text "Fotoobraz na plátne so skrytým rámom"
        if (document.body.textContent.indexOf("Fotoobraz na plátne so skrytým rámom") !== -1) {
            // Máme fotoobraz
            let rozmerFO = '';
            // Hľadaáme rozmer
            const match = document.body.textContent.match(/48r[p]?(\d{2}\d{2})/);
            if (match) {
                rozmerFO = match[1]; // xxYY
            }
            // Kontrola Spevňovacia priečka
            if (document.body.textContent.indexOf("Spevňovacia priečka ") !== -1) {
                rozmerFO += "+"; // pridáme plus
            }
            console.log('🎨 rozmerFO =', rozmerFO);
            return rozmerFO;
        }
        return '';
    }

    // Zavoláme pri načítaní dokumentu
    const rozmerFO = checkFotoObraz();

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
