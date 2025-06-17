// ==UserScript==
// @name         Cislo VP + kopirovanie na kliknuti
// @namespace    http://your-namespace.example
// @version      1.0
// @description  Klikni na strong.red, skopíruje text, zmení farbu a vráti späť
// @match        https://moduly.faxcopy.sk/vyrobne_prikazy/detail/index/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function(){
    'use strict';

    function setupClickToCopy(strong) {
        if (strong.dataset.copySetupDone) return;
        strong.dataset.copySetupDone = "true";

        console.log("[UserScript] Nastavujem click-to-copy na:", strong.textContent.trim());

        // Úvodné nastavenie
        strong.style.background = "#2a3b2e";
        strong.style.color = "white";
        strong.style.borderRadius = "5px";
        strong.style.margin = "4px 4px";
        strong.style.padding = "2px 4px";
        strong.style.display = "inline-block";
        strong.style.visibility = "visible";
        strong.style.minWidth = "30px";
        strong.style.minHeight = "16px";
        strong.style.cursor = "pointer";
        strong.title = "Klikni a skopíruj číslo";
        strong.style.fontSize = "16px";

        strong.addEventListener("click", () => {
            navigator.clipboard.writeText(strong.textContent.trim())
                .then(() => {
                    console.log("[UserScript] Skopírované!");
                    strong.style.background = "green";
                    setTimeout(() => { strong.style.background = "#2a3b2e" }, 1000);
                })
                .catch(err => console.error("[UserScript] Kopírovanie zlyhalo:", err));
        });
    }

    const observer = new MutationObserver((mutations, obs) => {
        let xpath = '//*[@id="vpVpDetail"]/div[1]/strong[1]';
        let elem = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

        if (elem) {
            console.log("[UserScript] Element náj­dený!");
            setupClickToCopy(elem);
            obs.disconnect();
        }
    });

    observer.observe(document, { childList: true, subtree: true });

    let elemStart = document.evaluate('//*[@id="vpVpDetail"]/div[1]/strong[1]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    if (elemStart) {
        console.log("[UserScript] Element existuje pri štarte!");
        setupClickToCopy(elemStart);
        observer.disconnect();
    }
})();
