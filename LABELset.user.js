// ==UserScript==
// @name         Label Layout
// @namespace    https://moduly.faxcopy.sk/
// @author       mato e.
// @version      1.2.3
// @description  Úprava VP do čierneho rámčeka a doplnenie 60x40 vľavo aj vpravo vedľa seba, obsah textov je globalne nastaviteľný + štýlový font
// @updateURL    https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/LABELset.user.js
// @downloadURL  https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/LABELset.user.js
// @match        https://moduly.faxcopy.sk/vyrobne_prikazy/detail/printLabel/*
// @grant        GM_addStyle
// @require      https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap
// @run-at       document-end
// ==/UserScript==

(function () {
    'use strict';

    // 🔤 Aplikačný globálny štýl pre Patrick Hand
    GM_addStyle(`
        .patrick-hand {
            font-family: 'Patrick Hand', cursive !important;
        }
    `);

    window.TM_testoLeft = sessionStorage.getItem('TM_testoLeft') || "";
    window.TM_testoRight = sessionStorage.getItem('TM_testoRight') || "";

    window.addEventListener('unload', () => {
        sessionStorage.removeItem('TM_testoLeft');
        sessionStorage.removeItem('TM_testoRight');
    });

    const predajnaText = document.querySelector("#predajna .rotate");
    if (predajnaText) {
        predajnaText.style.fontSize = "27pt";
    }

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
        const testoRight = testoLeft.cloneNode(true);

        testoLeft.textContent = window.TM_testoLeft || "";
        testoRight.textContent = window.TM_testoRight || "";

        testoLeft.classList.add("patrick-hand");
        testoRight.classList.add("patrick-hand");

        testoLeft.style.color = "#000";
        testoLeft.style.padding = "0 1mm";
        testoLeft.style.margin = "0px";
        testoLeft.style.fontSize = "19pt";
        testoLeft.style.display = "inline-block";

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
        label.style.height = "58mm";
        label.style.border = "1mm solid black";
    }
})();
