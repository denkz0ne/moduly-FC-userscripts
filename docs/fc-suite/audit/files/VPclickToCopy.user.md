# VPclickToCopy

Zdroj: VPclickToCopy.user.js; referencia: 75087f8c4cbd34190e69318038bda6ef36eee0f2.
SHA-256: `f558e9ff9ae259ae3e5f7f6781d2394896073f3c10e773b6c3bf20d89ee5fcd4`. Riadkov: 68.

AST inventár: obsahuje aj vnorené/anonýmne funkcie a lokálne premenné. Zoznam premenných nie je zoznam editovateľných nastavení. Volania sú klasifikované podľa názvu; dynamické aliasy môžu vyžadovať ručné dohľadanie. Historické @require hlavičky v načítanom JS nie sú ďalším automaticky spusteným @require reťazcom.

## Metadata

```json
{
  "name": [
    "VPclickToCopy"
  ],
  "namespace": [
    "http://your-namespace.example"
  ],
  "version": [
    "1.0"
  ],
  "description": [
    "Klikni na strong.red, skopíruje text, zmení farbu a vráti späť"
  ],
  "updateURL": [
    "https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/VPclickToCopy.user.js"
  ],
  "downloadURL": [
    "https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/VPclickToCopy.user.js"
  ],
  "match": [
    "https://moduly.faxcopy.sk/vyrobne_prikazy/detail/index/*"
  ],
  "grant": [
    "none"
  ],
  "run-at": [
    "document-idle"
  ]
}
```

## Funkcie a signatúry

- [L14–67](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPclickToCopy.user.js#L14) `<anonymous@14>()`; scope `root`.
- [L17–46](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPclickToCopy.user.js#L17) `setupClickToCopy(strong)`; scope `<anonymous@14>`.
- [L37–45](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPclickToCopy.user.js#L37) `<anonymous@37>()`; scope `<anonymous@14>/setupClickToCopy`.
- [L39–43](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPclickToCopy.user.js#L39) `<anonymous@39>()`; scope `<anonymous@14>/setupClickToCopy/<anonymous@37>`.
- [L42–42](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPclickToCopy.user.js#L42) `<anonymous@42>()`; scope `<anonymous@14>/setupClickToCopy/<anonymous@37>/<anonymous@39>`.
- [L44–44](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPclickToCopy.user.js#L44) `<anonymous@44>(err)`; scope `<anonymous@14>/setupClickToCopy/<anonymous@37>`.
- [L48–57](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPclickToCopy.user.js#L48) `<anonymous@48>(mutations, obs)`; scope `<anonymous@14>`.

## Premenné a pôvodné inicializátory

Dlhé inicializátory sú tu skrátené na 300 znakov; úplné znenie je v inventory.json a v zdroji.

- [L48](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPclickToCopy.user.js#L48) `const observer = new MutationObserver((mutations, obs) => { let xpath = '//*[@id="vpVpDetail"]/div[1]/strong[1]'; let elem = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue; if (elem) { console.log("[UserScript] Element náj­dený!"); setupClickToCop`; scope `<anonymous@14>`.
- [L49](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPclickToCopy.user.js#L49) `let xpath = '//*[@id="vpVpDetail"]/div[1]/strong[1]'`; scope `<anonymous@14>/<anonymous@48>`.
- [L50](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPclickToCopy.user.js#L50) `let elem = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue`; scope `<anonymous@14>/<anonymous@48>`.
- [L61](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPclickToCopy.user.js#L61) `let elemStart = document.evaluate('//*[@id="vpVpDetail"]/div[1]/strong[1]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue`; scope `<anonymous@14>`.

## storage

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## events

- [L14](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPclickToCopy.user.js#L14) `function(){ 'use strict'; function setupClickToCopy(strong) { if (strong.dataset.copySetupDone) return; strong.dataset.copySetupDone = "true"; console.log("[UserScript] Nastavujem click-to-copy na:", strong.textContent.trim()); // Úvodné nastavenie strong.style.background = "#2a3b2e"; strong.style.c`; scope `root`.
- [L37](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPclickToCopy.user.js#L37) `strong.addEventListener("click", () => { navigator.clipboard.writeText(strong.textContent.trim()) .then(() => { console.log("[UserScript] Skopírované!"); strong.style.background = "green"; setTimeout(() => { strong.style.background = "#2a3b2e" }, 1000); }) .catch(err => console.error("[UserScript] K`; scope `<anonymous@14>/setupClickToCopy`.

## lifecycle

- [L14](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPclickToCopy.user.js#L14) `function(){ 'use strict'; function setupClickToCopy(strong) { if (strong.dataset.copySetupDone) return; strong.dataset.copySetupDone = "true"; console.log("[UserScript] Nastavujem click-to-copy na:", strong.textContent.trim()); // Úvodné nastavenie strong.style.background = "#2a3b2e"; strong.style.c`; scope `root`.
- [L38](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPclickToCopy.user.js#L38) `navigator.clipboard.writeText(strong.textContent.trim()) .then(() => { console.log("[UserScript] Skopírované!"); strong.style.background = "green"; setTimeout(() => { strong.style.background = "#2a3b2e" }, 1000); }) .catch(err => console.error("[UserScript] Kopírovanie zlyhalo:", err))`; scope `<anonymous@14>/setupClickToCopy/<anonymous@37>`.
- [L42](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPclickToCopy.user.js#L42) `setTimeout(() => { strong.style.background = "#2a3b2e" }, 1000)`; scope `<anonymous@14>/setupClickToCopy/<anonymous@37>/<anonymous@39>`.
- [L48](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPclickToCopy.user.js#L48) `MutationObserver((mutations, obs) => { let xpath = '//*[@id="vpVpDetail"]/div[1]/strong[1]'; let elem = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue; if (elem) { console.log("[UserScript] Element náj­dený!"); setupClickToCopy(elem); obs.disconne`; scope `<anonymous@14>`.
- [L55](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPclickToCopy.user.js#L55) `obs.disconnect()`; scope `<anonymous@14>/<anonymous@48>`.
- [L59](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPclickToCopy.user.js#L59) `observer.observe(document, { childList: true, subtree: true })`; scope `<anonymous@14>`.
- [L65](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPclickToCopy.user.js#L65) `observer.disconnect()`; scope `<anonymous@14>`.

## io

- [L14](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPclickToCopy.user.js#L14) `function(){ 'use strict'; function setupClickToCopy(strong) { if (strong.dataset.copySetupDone) return; strong.dataset.copySetupDone = "true"; console.log("[UserScript] Nastavujem click-to-copy na:", strong.textContent.trim()); // Úvodné nastavenie strong.style.background = "#2a3b2e"; strong.style.c`; scope `root`.
- [L38](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPclickToCopy.user.js#L38) `navigator.clipboard.writeText(strong.textContent.trim()) .then(() => { console.log("[UserScript] Skopírované!"); strong.style.background = "green"; setTimeout(() => { strong.style.background = "#2a3b2e" }, 1000); }) .catch(err => console.error("[UserScript] Kopírovanie zlyhalo:", err))`; scope `<anonymous@14>/setupClickToCopy/<anonymous@37>`.
- [L38](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPclickToCopy.user.js#L38) `navigator.clipboard.writeText(strong.textContent.trim()) .then(() => { console.log("[UserScript] Skopírované!"); strong.style.background = "green"; setTimeout(() => { strong.style.background = "#2a3b2e" }, 1000); })`; scope `<anonymous@14>/setupClickToCopy/<anonymous@37>`.
- [L38](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPclickToCopy.user.js#L38) `navigator.clipboard.writeText(strong.textContent.trim())`; scope `<anonymous@14>/setupClickToCopy/<anonymous@37>`.

## dom-read

- [L14](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPclickToCopy.user.js#L14) `function(){ 'use strict'; function setupClickToCopy(strong) { if (strong.dataset.copySetupDone) return; strong.dataset.copySetupDone = "true"; console.log("[UserScript] Nastavujem click-to-copy na:", strong.textContent.trim()); // Úvodné nastavenie strong.style.background = "#2a3b2e"; strong.style.c`; scope `root`.
- [L50](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPclickToCopy.user.js#L50) `document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null)`; scope `<anonymous@14>/<anonymous@48>`.
- [L61](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPclickToCopy.user.js#L61) `document.evaluate('//*[@id="vpVpDetail"]/div[1]/strong[1]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null)`; scope `<anonymous@14>`.

## dom-write

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## logs

- [L14](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPclickToCopy.user.js#L14) `function(){ 'use strict'; function setupClickToCopy(strong) { if (strong.dataset.copySetupDone) return; strong.dataset.copySetupDone = "true"; console.log("[UserScript] Nastavujem click-to-copy na:", strong.textContent.trim()); // Úvodné nastavenie strong.style.background = "#2a3b2e"; strong.style.c`; scope `root`.
- [L21](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPclickToCopy.user.js#L21) `console.log("[UserScript] Nastavujem click-to-copy na:", strong.textContent.trim())`; scope `<anonymous@14>/setupClickToCopy`.
- [L38](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPclickToCopy.user.js#L38) `navigator.clipboard.writeText(strong.textContent.trim()) .then(() => { console.log("[UserScript] Skopírované!"); strong.style.background = "green"; setTimeout(() => { strong.style.background = "#2a3b2e" }, 1000); }) .catch(err => console.error("[UserScript] Kopírovanie zlyhalo:", err))`; scope `<anonymous@14>/setupClickToCopy/<anonymous@37>`.
- [L40](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPclickToCopy.user.js#L40) `console.log("[UserScript] Skopírované!")`; scope `<anonymous@14>/setupClickToCopy/<anonymous@37>/<anonymous@39>`.
- [L44](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPclickToCopy.user.js#L44) `console.error("[UserScript] Kopírovanie zlyhalo:", err)`; scope `<anonymous@14>/setupClickToCopy/<anonymous@37>/<anonymous@44>`.
- [L53](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPclickToCopy.user.js#L53) `console.log("[UserScript] Element náj­dený!")`; scope `<anonymous@14>/<anonymous@48>`.
- [L63](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPclickToCopy.user.js#L63) `console.log("[UserScript] Element existuje pri štarte!")`; scope `<anonymous@14>`.

## Zápisy do globálov, DOM a ostatných vlastností

- [L24](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPclickToCopy.user.js#L24) `strong.style.background = "#2a3b2e"`.
- [L25](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPclickToCopy.user.js#L25) `strong.style.color = "white"`.
- [L26](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPclickToCopy.user.js#L26) `strong.style.borderRadius = "5px"`.
- [L27](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPclickToCopy.user.js#L27) `strong.style.margin = "4px 4px"`.
- [L28](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPclickToCopy.user.js#L28) `strong.style.padding = "2px 4px"`.
- [L29](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPclickToCopy.user.js#L29) `strong.style.display = "inline-block"`.
- [L30](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPclickToCopy.user.js#L30) `strong.style.visibility = "visible"`.
- [L31](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPclickToCopy.user.js#L31) `strong.style.minWidth = "30px"`.
- [L32](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPclickToCopy.user.js#L32) `strong.style.minHeight = "16px"`.
- [L33](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPclickToCopy.user.js#L33) `strong.style.cursor = "pointer"`.
- [L35](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPclickToCopy.user.js#L35) `strong.style.fontSize = "16px"`.
- [L41](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPclickToCopy.user.js#L41) `strong.style.background = "green"`.
- [L42](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPclickToCopy.user.js#L42) `strong.style.background = "#2a3b2e"`.
