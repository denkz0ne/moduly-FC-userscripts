// ==UserScript==
// @name         LABELset s FoVpSize updaterom
// @namespace    http://your-namespace.example
// @version      1.2
// @description  Doplní rozmer FO a priečku do testoLeft z FoVpSize.
// @updateURL    https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/LABELset.user.js
// @downloadURL  https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/LABELset.user.js
// @match        https://moduly.faxcopy.sk/vyrobne_prikazy/detail/printLabel/*
// @run-at       document-end
// ==/UserScript==

(function () {
    // Pomocná funkcia na spracovanie FoVpSize stringu
    function spracujFoVpSize(str) {
        const parts = str.split(',');
        if (parts.length === 3) {
            const rozmer = parts[1];
            const priecka = parts[2];
            return {rozmer, priecka};
        }
        return null;
    }

    // --- VP text upravujeme --- //
    const wrapper = document.querySelector("#data > div");
    if (wrapper) {
        const vpText = wrapper.querySelector("strong.red"); // presne ako si spomínal
        if (vpText) {
            // pridaj štýly a vyčisti pôvodný obsah podľa tvojho kódu
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

            wrapper.innerHTML = wrapper.innerHTML.replace(/VP.*<\/strong>/, '');
            wrapper.prepend(newSpan);
        }
    }

    // --- Blok 60x40 vedľa seba s testoLeft a testoRight ---
    const clear = document.querySelector("#label .clear");
    if (clear) {
        const wrapper60 = document.createElement("div");
        wrapper60.style.display = "flex";
        wrapper60.style.justifyContent = "space-between";
        wrapper60.style.alignItems = "center";
        wrapper60.style.width = "100%";
        wrapper60.style.marginBottom = "2mm";

        const testoLeft = document.createElement("div");
        testoLeft.style.color = "#000";
        testoLeft.style.padding = "0 1mm";
        testoLeft.style.margin = "0px";
        testoLeft.style.fontSize = "18pt";
        testoLeft.style.display = "inline-block";

        const testoRight = testoLeft.cloneNode(true);
        testoRight.textContent = "";

        wrapper60.prepend(testoLeft);
        wrapper60.append(testoRight);
        clear.before(wrapper60);

        // Funkcia na aktualizáciu testoLeft podľa FoVpSize
        function updateFromFoVpSize() {
            // tu získaš FoVpSize z globalnej premennej, ak existuje
            if (window.FoVpSize) {
                const data = spracujFoVpSize(window.FoVpSize);
                if (data) {
                    testoLeft.textContent = data.rozmer + (data.priecka === '+' ? '+' : '');
                    console.log('FoVpSize loaded:', window.FoVpSize);
                    return true;
                }
            }
            return false;
        }

        // Ak sa FoVpSize nenachádza, zober ho priamo z textu VP + silneho elementu ako fallback
        if (!updateFromFoVpSize()) {
            const strongRed = document.querySelector("strong.red");
            if (strongRed) {
                // zober cislo VP z strong.red
                const cisloVP = strongRed.textContent.trim();

                // teraz nejakým spôsobom treba zistiť rozmer a priecku
                // keďže nemáme priamy prístup, pozrieme sa na nejaký iný element (tu si môžeš doplniť podľa svojej stránky)

                // pre demo: skúsime nastaviť rozmer na nejakú statickú hodnotu, alebo získať z datasetu, ak máš
                // Ak máš iný element s rozmerom, tak použi ho sem
                // Tu teda nastavujem rozmer na prázdne, lebo nemáme kde brať

                // testoLeft.textContent = rozmer + (priecka === '+' ? '+' : '');
            }
        }

        // Ak FoVpSize ešte nepríde, sledujeme zmeny v globalnej premennej cez poll (interval)
        let tries = 0;
        const maxTries = 30;
        const intervalId = setInterval(() => {
            if (updateFromFoVpSize() || tries++ > maxTries) {
                clearInterval(intervalId);
            }
        }, 200);
    }

    // --- Stylingy ---
    const block = document.querySelector("#data > div");
    if (block) {
        block.style.marginBottom = "1mm";
    }
    const obj = document.querySelector(".obj");
    if (obj) {
        obj.style.height = "16mm";
    }
    const label = document.querySelector("#label");
    if (label) {
        label.style.height = "58mm";
        label.style.border = "1mm solid black";
    }
})();
