// ==UserScript==
// @name         LABELset + shortcutKeyLabel v jednom
// @namespace    http://your-namespace.example
// @version      1.3
// @description  Uprava štítka s FoVpSize a klávesová skratka L na tlač štítka z VP.
// @updateURL    https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/LABELset.user.js
// @downloadURL  https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/LABELset.user.js
// @match        https://moduly.faxcopy.sk/vyrobne_prikazy/detail/printLabel/*
// @match        https://moduly.faxcopy.sk/vyrobne_prikazy/detail/index/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function () {
    'use strict';

    // ----- FUNKCIA na spracovanie FoVpSize -----
    function spracujFoVpSize(str) {
        const parts = str.split(',');
        if (parts.length === 3) {
            return { rozmer: parts[1], priecka: parts[2] };
        }
        return null;
    }

    // ----- FUNKCIA na update testoLeft podľa FoVpSize -----
    function updateTestoLeft(testoLeft, val) {
        const data = spracujFoVpSize(val);
        if (data) {
            testoLeft.textContent = data.rozmer + (data.priecka === '+' ? '+' : '');
            console.log('🖼️ FoVpSize aktualizované:', val);
        }
    }

    // ----- ČASŤ pre printLabel stránku -----
    if (location.pathname.includes('/printLabel/')) {
        // Zmena štýlu VP textu
        const wrapper = document.querySelector("#data > div");
        if (wrapper) {
            const vpText = wrapper.querySelector("strong.red");
            if (vpText) {
                const newSpan = document.createElement("span");
                newSpan.innerHTML = "VP: " + vpText.textContent.trim();
                Object.assign(newSpan.style, {
                    color: "#fff",
                    background: "#000",
                    padding: "1px 4px",
                    margin: "2px 0",
                    borderRadius: "6px",
                    fontSize: "13pt",
                    display: "inline-block",
                    verticalAlign: "middle"
                });
                wrapper.innerHTML = wrapper.innerHTML.replace(/VP.*<\/strong>/, '');
                wrapper.prepend(newSpan);
            }
        }

        // Vytvorenie wrappera s testoLeft a testoRight vedľa seba
        const clear = document.querySelector("#label .clear");
        if (clear) {
            const wrapper60 = document.createElement("div");
            Object.assign(wrapper60.style, {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                marginBottom: "2mm"
            });

            const testoLeft = document.createElement("div");
            Object.assign(testoLeft.style, {
                color: "#000",
                padding: "0 1mm",
                margin: "0",
                fontSize: "18pt",
                display: "inline-block"
            });

            const testoRight = testoLeft.cloneNode(true);
            testoRight.textContent = "";

            wrapper60.prepend(testoLeft);
            wrapper60.append(testoRight);
            clear.before(wrapper60);

            // Snažíme sa načítať hodnotu FoVpSize z window (ak existuje)
            function updateFromFoVpSize() {
                if (window.FoVpSize) {
                    updateTestoLeft(testoLeft, window.FoVpSize);
                    return true;
                }
                return false;
            }

            if (!updateFromFoVpSize()) {
                // fallback: pokus získať rozmer z elementov (prípadne doplniť podľa potreby)
            }

            // Polling na neskoršie nastavenie FoVpSize (max 30 pokusov)
            let tries = 0;
            const maxTries = 30;
            const intervalId = setInterval(() => {
                if (updateFromFoVpSize() || tries++ > maxTries) {
                    clearInterval(intervalId);
                }
            }, 200);
        }

        // Upravenie štýlov
        const block = document.querySelector("#data > div");
        if (block) block.style.marginBottom = "1mm";
        const obj = document.querySelector(".obj");
        if (obj) obj.style.height = "16mm";
        const label = document.querySelector("#label");
        if (label) {
            label.style.height = "58mm";
            label.style.border = "1mm solid black";
        }
    }

    // ----- ČASŤ pre index stránku (klávesová skratka L) -----
    if (location.pathname.includes('/index/')) {
        // Funkcia pre získanie čísla VP zo silného elementu
        function getVpNumber() {
            const strong = document.querySelector('strong.red');
            return strong ? strong.textContent.trim() : null;
        }

        // Funkcia na kontrolu, či ide o "Fotoobraz na plátne so skrytým rámom" a rozmer/priečku
        function checkFotoObraz() {
            if (document.body.textContent.includes("Fotoobraz na plátne so skrytým rámom")) {
                let rozmerFO = '';
                const match = document.body.textContent.match(/48r[p]?(\d{4})/);
                if (match) {
                    rozmerFO = match[1];
                }
                if (document.body.textContent.includes("Spevňovacia priečka ")) {
                    rozmerFO += "+";
                }
                console.log('🎨 rozmerFO =', rozmerFO);
                return rozmerFO;
            }
            return '';
        }

        // Voláme hneď pri načítaní stránky (ak treba)
        const rozmerFO = checkFotoObraz();

        // Event listener na stlačenie klávesy L
        window.addEventListener('keydown', function (e) {
            const tag = e.target.tagName;
            if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;

            if (e.key.toLowerCase() === 'l' && !e.repeat) {
                const vpNumber = getVpNumber();
                if (!vpNumber) {
                    console.warn('⚠️ Číslo VP (strong.red) sa nenašlo!');
                    return;
                }
                const url = `https://moduly.faxcopy.sk/vyrobne_prikazy/detail/printLabel/${vpNumber}`;

                const newWindow = window.open(url, '_blank');
                if (!newWindow) {
                    console.warn('🚫 Pop-up blokátor zablokoval okno!');
                    return;
                }

                newWindow.onload = () => {
                    console.log('🚀 Okno načítané, spúšťam tlač');
                    newWindow.print();
                    setTimeout(() => {
                        console.log('🚪 Zatváram okno po 1s');
                        newWindow.close();
                    }, 1000);
                };
            }
        });
    }
})();
