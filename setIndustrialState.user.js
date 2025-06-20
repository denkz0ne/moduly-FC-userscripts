// ==UserScript==
// @name         setIndustrialState
// @namespace    http://tvoj-namespace.example
// @version      1.0
// @description  Rozsirenie plochy pre rozbalenie ponuky zmeny stavu VP.
// @updateURL    https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/setIndustrialState.user.js
// @downloadURL  https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/setIndustrialState.user.js
// @match        https://moduly.faxcopy.sk/vyrobne_prikazy/detail/index/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';

    const strongElem = document.evaluate('/html/body/div[9]/div/div[2]/div/div/div[2]/div[2]/div[2]/form/div[1]/strong',
        document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    if (!strongElem) return console.log('[UserScript] Strong element neexistuje');

    const div2 = document.evaluate('/html/body/div[9]/div/div[2]/div/div/div[2]/div[2]/div[2]/form/div[2]',
        document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    if (!div2) return console.log('[UserScript] Div[2] element neexistuje');

    strongElem.style.cursor = 'pointer';

    strongElem.addEventListener('click', () => {
        div2.style.display = (div2.style.display === 'block') ? 'none' : 'block';
        console.log('[UserScript] Klik na strong prepol display div[2] na:', div2.style.display);
    });
})();
