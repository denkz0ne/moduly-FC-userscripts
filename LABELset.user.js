
// ==UserScript==
// @name         LABELset
// @namespace    http://your-namespace.example
// @version      1.0
// @description  Zmena layoutu stitka.
// @updateURL    https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/LABELset.user.js
// @downloadURL  https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/LABELset.user.js
// @match        https://moduly.faxcopy.sk/vyrobne_prikazy/detail/printLabel/*
// @run-at       document-end
// ==/UserScript==

(function() {

    // Zväčšíme len text v predajni, NIE celý div
    const predajnaText = document.querySelector("#predajna .rotate");
    if (predajnaText) {
        predajnaText.style.fontSize = "27pt";
    }

    // Nájdi rodiča, kde máš "VP <span>2740706</span>"
    const wrapper = document.querySelector("#data > div");

    if (wrapper) {
        // Nájdi tento konkrétny span
        const vpText = wrapper.querySelector("span");

        if (vpText && vpText.previousSibling && vpText.previousSibling.textContent.trim() === "VP") {
            // Vytvor nový wrapper
            const newSpan = document.createElement("span");

            newSpan.innerHTML = "VP: " + vpText.textContent.trim();

            // Nastav štýly
            newSpan.style.color = "#ffffff";
            newSpan.style.background = "#000";
            newSpan.style.padding = "1px 4px";
            newSpan.style.margin = "2px 0";
            newSpan.style.borderRadius = "6px";
            newSpan.style.fontSize = "13pt";
            newSpan.style.display = "inline-block";
            newSpan.style.verticalAlign = "middle";

            // Nahradíme
            wrapper.innerHTML = wrapper.innerHTML.replace(/VP.*<\/span>/, '');
            wrapper.prepend(newSpan);
        }
    }

    // Doplníme 60x40 vľavo aj vpravo vedľa seba
    const clear = document.querySelector("#label .clear");

    if (clear) {
        // Vytvoríme wrapper
        const wrapper60 = document.createElement("div");

        wrapper60.style.display = "flex";
        wrapper60.style.justifyContent = "space-between";
        wrapper60.style.alignItems = "center";
        wrapper60.style.width = "100%";
        wrapper60.style.marginBottom = "2mm";

        // Ľavý blok
        const testoLeft = document.createElement("div");

        testoLeft.textContent = "";
        testoLeft.style.color = "#000";
        testoLeft.style.padding = "0 1mm";
        testoLeft.style.margin = "0px";
        testoLeft.style.fontSize = "18pt";
        testoLeft.style.display = "inline-block";

        // Pravý blok
        const testoRight = testoLeft.cloneNode(true);
        testoRight.textContent = ""; // pokojne môžeš neskôr zmeniť

        wrapper60.prepend(testoLeft);
        wrapper60.append(testoRight);

        clear.before(wrapper60);
    }

    // Nastavíme margin-bottom 1mm pre celý blok (/html/body/div/div/div/div[2]/div )
    const block = document.querySelector("#data > div");
    if (block) {
        block.style.marginBottom = "1mm";
    }

    // Nastavíme height 16mm pre .obj
    const obj = document.querySelector(".obj");
    if (obj) {
        obj.style.height = "16mm";
    }

    // Nastavíme height 58mm pre #label
    const label = document.querySelector("#label");
    if (label) {
        label.style.height = "58mm";
        label.style.border = "1mm solid black";
    }
})();
