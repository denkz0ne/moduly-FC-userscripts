// ==UserScript==
// @name         LABELset
// @namespace    http://your-namespace.example
// @version      1.1
// @description  Zmena layoutu stitka s rozmerom a prieckou.
// @updateURL    https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/LABELset.user.js
// @downloadURL  https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/LABELset.user.js
// @match        https://moduly.faxcopy.sk/vyrobne_prikazy/detail/printLabel/*
// @run-at       document-end
// ==/UserScript==

(function () {

    // Zväčšíme len text v predajni
    const predajnaText = document.querySelector("#predajna .rotate");
    if (predajnaText) {
        predajnaText.style.fontSize = "27pt";
    }

    // Nájdi wrapper s "VP <span>2740706</span>"
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

    // Doplníme 60x40 vľavo aj vpravo vedľa seba
    const clear = document.querySelector("#label .clear");

    if (clear) {
        const wrapper60 = document.createElement("div");
        wrapper60.style.display = "flex";
        wrapper60.style.justifyContent = "space-between";
        wrapper60.style.alignItems = "center";
        wrapper60.style.width = "100%";
        wrapper60.style.marginBottom = "2mm";

        // 🔥 Vytvorenie ľavého bloku + FoVpSize extrakcia
        const testoLeft = document.createElement("div");

        let rozmeryZPriecky = "";

        if (window.FoVpSize) {
            const parts = window.FoVpSize.split(',');
            if (parts.length === 3) {
                const rozmer = parts[1];     // napr. 3020
                const priecka = parts[2];    // + alebo -
                rozmeryZPriecky = rozmer + (priecka === '+' ? '+' : '');
            }
        }

        testoLeft.textContent = rozmeryZPriecky || "";

        testoLeft.style.color = "#000";
        testoLeft.style.padding = "0 1mm";
        testoLeft.style.margin = "0px";
        testoLeft.style.fontSize = "18pt";
        testoLeft.style.display = "inline-block";

        // Pravý blok
        const testoRight = testoLeft.cloneNode(true);
        testoRight.textContent = ""; // môžeš dať niečo vlastné

        wrapper60.prepend(testoLeft);
        wrapper60.append(testoRight);

        clear.before(wrapper60);
    }

    // margin-bottom pre hlavný blok
    const block = document.querySelector("#data > div");
    if (block) {
        block.style.marginBottom = "1mm";
    }

    // výška pre .obj
    const obj = document.querySelector(".obj");
    if (obj) {
        obj.style.height = "16mm";
    }

    // výška a orámovanie pre #label
    const label = document.querySelector("#label");
    if (label) {
        label.style.height = "58mm";
        label.style.border = "1mm solid black";
    }

})();
