// ==UserScript==
// @name         Label Layout
// @namespace    https://moduly.faxcopy.sk/
// @author       mato e.
// @version      1.2.6
// @description  Úprava VP do čierneho rámčeka a doplnenie rozmeru FO vľavo / obsah textov je globalne nastaviteľný
// @updateURL    https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/LABELset.user.js
// @downloadURL  https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/LABELset.user.js
// @match        https://moduly.faxcopy.sk/vyrobne_prikazy/detail/printLabel/*
// @run-at       document-end
// ==/UserScript==

(function() {

    // Načítaj hodnoty z sessionStorage (fallback na prázdny string)
    window.TM_testoLeft = sessionStorage.getItem('TM_testoLeft') || "";
    window.TM_testoRight = sessionStorage.getItem('TM_testoRight') || "";

    // Po zavretí alebo reload stránku vymaž hodnoty zo sessionStorage
    window.addEventListener('unload', () => {
        sessionStorage.removeItem('TM_testoLeft');
        sessionStorage.removeItem('TM_testoRight');
    });

    // Zväčšíme len text v predajni, NIE celý div
    const predajnaText = document.querySelector("#predajna .rotate");
    if (predajnaText) {
        predajnaText.style.fontSize = "27pt";
    }

    // Nájdi rodiča, kde máš "VP <span>2740706</span>"
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

    const clear = document.querySelector("#label .clear");

    if (clear) {
        const wrapper60 = document.createElement("div");

        wrapper60.style.display = "flex";
        wrapper60.style.justifyContent = "space-between";
        wrapper60.style.alignItems = "center";
        wrapper60.style.width = "100%";
        wrapper60.style.marginBottom = "2mm";

        const testoLeft = document.createElement("div");
        const testoRight = document.createElement("div");

        // Texty z globálnych premenných
        testoLeft.textContent = window.TM_testoLeft || "";
        testoRight.textContent = window.TM_testoRight || "";

        // Rovnaký štýl pre oba
        const commonStyle = `
            color: #000;
            padding: 0 1mm;
            margin: 0px;
            font-size: 23pt;
            display: inline-block;
            font-family: 'Segoe Script';
            transform: translateY(-1mm) scaleX(0.7);
            margin-top: -3mm;
            font-weight: bold;
            transform-origin: left;
        `;

        testoLeft.style.cssText = commonStyle;
        testoRight.style.cssText = commonStyle;

        wrapper60.prepend(testoLeft);
        wrapper60.append(testoRight);

        clear.before(wrapper60);
    }

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
        label.style.height = "57mm";
        label.style.border = "0mm solid black";
    }

})();
