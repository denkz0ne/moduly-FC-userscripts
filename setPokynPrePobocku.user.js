// ==UserScript==
// @name         setPokynPrePobocku
// @namespace    http://your-namespace.example
// @version      1.0
// @description  Nastav form Pokyn pre pobocku na Vybavujucu pobocku
// @updateURL    https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/setPokynPrePobocku.user.js
// @downloadURL  https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/setPokynPrePobocku.user.js
// @match        https://moduly.faxcopy.sk/vyrobne_prikazy/detail/index/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function(){
    'use strict';

    console.log("[UserScript] Začiatok skriptu.");

    // 2. select
    let secondSelect = document.evaluate('/html/body/div[9]/div/div[2]/div/div/div[2]/div[2]/strong/strong/form/div[2]/div/select', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

    if (secondSelect) {
        console.log("[UserScript] 2. select nájdený.");

        if (secondSelect.options.length > 1) {
            console.log("[UserScript] Má viac ako 1 možnosť.");

            secondSelect.value = secondSelect.options[1].value;
            secondSelect.dispatchEvent(new Event('change', { bubbles: true }))
            console.log("[UserScript] 2. select nastavený na 2. možnosť.");

        } else {
            console.warn("[UserScript] 2. select má len jednu možnosť.");
        }
    } else {
        console.warn("[UserScript] 2. select nenájdený.");
    }


    // 1. select (Pridelenie)

    let textElem = document.evaluate('/html/body/div[9]/div/div[2]/div/div/div[1]/div[2]/div[2]/p[5]/strong', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

    if (textElem) {
        console.log("[UserScript] Textový element s pridelením nájdený.");

        let text = textElem.textContent.trim();
        console.log("[UserScript] Text z elementu :", text);

        let firstSelect = document.evaluate('/html/body/div[9]/div/div[2]/div/div/div[2]/div[2]/strong/strong/form/div[4]/div/select', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

        if (firstSelect) {
            console.log("[UserScript] 1. select nájdený.");

            let option = Array.from(firstSelect.options).find(o => o.text.trim() === text);
            if (option) {
                firstSelect.value = option.value;
                firstSelect.dispatchEvent(new Event('change', { bubbles: true }))
                console.log("[UserScript] Úspešne nastavená hodnota 1. selectu.");
            } else {
                console.warn("[UserScript] Nenájdená option s textom :", text);
            }
        } else {
            console.warn("[UserScript] 1. select nenájdený.");
        }
    } else {
        console.warn("[UserScript] Textový element nenájdený.");
    }


    // p[5]/strong (ďalší)

    let p5Elem = document.evaluate('/html/body/div[9]/div/div[2]/div/div/div[1]/div[2]/div[3]/p[5]/strong', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

    if (p5Elem) {
        console.log("[UserScript] p[5]/strong element nájdený.");
        console.log("[UserScript] Text v p[5]/strong :", p5Elem.textContent.trim());
    } else {
        console.warn("[UserScript] p[5]/strong element nenájdený.");
    }


    console.log("[UserScript] Koniec skriptu.");
})();
