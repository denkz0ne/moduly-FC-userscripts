// ==UserScript==
// @name         workflowFO
// @namespace    http://your-namespace.example
// @version      1.0
// @description  L pre tlac stitku, inject rozmeru a datumu expedicie do stitku. plati len pre obrazy.
// @updateURL    https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/workflowFO.user.js
// @downloadURL  https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/workflowFO.user.js
// @match        https://moduly.faxcopy.sk/vyrobne_prikazy/detail/*
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    // Funkcia na ziskanie VP
    function getVpNumber() {
        const strong = document.querySelector('strong.red');
        return strong ? strong.textContent.trim() : null;
    }

    // Funkcia na zistenie, ci sme na fotoobraze + detekcia
    function getFotoObrazText() {
        // Má stránka fotoobraz?
        const foto = document.querySelector('.foto-obraz'); // hypoteticky
        if (!foto) return '';

        // Hľadaj rozmer (60x40, 90x60...)
        const rozmer = foto.textContent.match(/\b(\d{2})x(\d{2})\b/);
        if (!rozmer) return '';

        // Má Spevňovaciu priečku?
        const maPriecku = foto.textContent.indexOf('Spevňovacia priečka') !== -1;

        // Zostavíme text
        return rozmer[1] + rozmer[2] + (maPriecku ? "+" : "");
    }


    // Úprava labelu
    (function(){
        // Zväčšíme text v predajni
        const predajnaText = document.querySelector("#predajna .rotate");
        if (predajnaText) predajnaText.style.fontSize = "27pt";

        // Úprava VP
        const wrapper = document.querySelector("#data > div");

        if (wrapper) {
            const vpText = wrapper.querySelector("span");

            if (vpText && vpText.previousSibling && vpText.previousSibling.textContent.trim() === "VP") {
                const newSpan = document.createElement("span");

                newSpan.innerHTML = "VP: " + vpText.textContent.trim();

                newSpan.style.color = "#ffffff";
                newSpan.style.background = "#000";
                newSpan.style.padding = "1px 4px";
                newSpan.style.margin = "2px 0";
                newSpan.style.borderRadius = "6px";
                newSpan.style.fontSize = "13pt";
                newSpan.style.display = "inline-block";
                newSpan.style.verticalAlign = "middle";

                wrapper.innerHTML = wrapper.innerHTML.replace(/VP.*<\/span>/, '');
                wrapper.prepend(newSpan);
            }
        }
    })();

    // Doplnenie 60x40 vľavo aj vpravo
    (function(){
        const clear = document.querySelector("#label .clear");

        if (clear) {
            const wrapper60 = document.createElement("div");

            wrapper60.style.display = "flex";
            wrapper60.style.justifyContent = "space-between";
            wrapper60.style.alignItems = "center";
            wrapper60.style.width = "100%";
            wrapper60.style.marginBottom = "2mm";

            // Ľavý blok
            const testoLeft = document.createElement("div");

            testoLeft.textContent = getFotoObrazText();

            testoLeft.style.color = "#000";
            testoLeft.style.padding = "0 1mm";
            testoLeft.style.margin = "0px";
            testoLeft.style.fontSize = "18pt";
            testoLeft.style.display = "inline-block";

            // Pravý blok
            const testoRight = testoLeft.cloneNode(true);
            testoRight.textContent = "";

            wrapper60.prepend(testoLeft);
            wrapper60.append(testoRight);

            clear.before(wrapper60);
        }
    })();

    // Nastavíme margin-bottom 1mm
    const block = document.querySelector("#data > div");
    if (block) block.style.marginBottom = "1mm";

    // Nastavíme height 16mm pre .obj
    const obj = document.querySelector(".obj");
    if (obj) obj.style.height = "16mm";

    // Nastavíme height 58mm pre #label
    const label = document.querySelector("#label");
    if (label) {
        label.style.height = "58mm";
        label.style.border = "1mm solid black";
    }

    // L shortcut
    window.addEventListener('keydown', function(e) {
        if (e.target.tagName === 'INPUT' ||
            e.target.tagName === 'TEXTAREA' ||
            e.target.tagName === 'SELECT') {
            return;
        }
        if (e.key.toLowerCase() === 'l' && !e.repeat) {
            const vpNumber = getVpNumber();
            if (!vpNumber) {
                console.warn('🚀 Číslo VP (strong.red) sa nenašlo!');
                return;
            }
            const url = `https://moduly.faxcopy.sk/vyrobne_prikazy/detail/printLabel/${vpNumber}`;

            const newWindow = window.open(url, '_blank');

            if (!newWindow) {
                console.warn('🚀 Pop-up blokátor zabránil otvoreniu nového okna!');
                return;
            }
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
