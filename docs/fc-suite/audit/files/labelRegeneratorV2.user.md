# labelRegeneratorV2

Zdroj: labelRegeneratorV2.user.js; referencia: 75087f8c4cbd34190e69318038bda6ef36eee0f2.
SHA-256: `36f64fdc36303b4f0d4bab37affb704a86fadf5c4da96c2e97e7ec744faefc7d`. Riadkov: 158.

AST inventár: obsahuje aj vnorené/anonýmne funkcie a lokálne premenné. Zoznam premenných nie je zoznam editovateľných nastavení. Volania sú klasifikované podľa názvu; dynamické aliasy môžu vyžadovať ručné dohľadanie. Historické @require hlavičky v načítanom JS nie sú ďalším automaticky spusteným @require reťazcom.

## Metadata

```json
{
  "name": [
    "labelRegeneratorV2"
  ],
  "namespace": [
    "https://moduly.faxcopy.sk/"
  ],
  "author": [
    "mato e."
  ],
  "version": [
    "2.0.27"
  ],
  "description": [
    "Uprava print stitku, overlay zony, konfigurator layoutu a klavesa L pre otvorenie, tlac a zatvorenie stitku."
  ],
  "updateURL": [
    "https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/main/labelRegeneratorV2.user.js"
  ],
  "downloadURL": [
    "https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/main/labelRegeneratorV2.user.js"
  ],
  "match": [
    "https://moduly.faxcopy.sk/vyrobne_prikazy/detail/printLabel/*",
    "https://moduly.faxcopy.sk/vyrobne_prikazy/detail/index/*"
  ],
  "grant": [
    "none"
  ],
  "require": [
    "https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js",
    "https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js",
    "https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js",
    "https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/b88007236d583fb7fa692ec59fc0c671dad52c9b/labelRegeneratorV2.user.js",
    "https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/main/labelInstantPrint.beta.js"
  ],
  "run-at": [
    "document-end"
  ]
}
```

## Funkcie a signatúry

- [L21–157](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelRegeneratorV2.user.js#L21) `<anonymous@21>()`; scope `root`.
- [L26–28](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelRegeneratorV2.user.js#L26) `isPrintLabelPage()`; scope `<anonymous@21>`.
- [L30–32](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelRegeneratorV2.user.js#L30) `isDetailPage()`; scope `<anonymous@21>`.
- [L34–36](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelRegeneratorV2.user.js#L34) `isPrintPopupWindow()`; scope `<anonymous@21>`.
- [L38–42](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelRegeneratorV2.user.js#L38) `isTypingTarget(target)`; scope `<anonymous@21>`.
- [L44–59](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelRegeneratorV2.user.js#L44) `ensurePopupPanelStyles()`; scope `<anonymous@21>`.
- [L61–66](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelRegeneratorV2.user.js#L61) `setPopupPanelHidden(hidden)`; scope `<anonymous@21>`.
- [L68–71](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelRegeneratorV2.user.js#L68) `togglePopupPanel()`; scope `<anonymous@21>`.
- [L73–78](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelRegeneratorV2.user.js#L73) `initializePopupPanelState()`; scope `<anonymous@21>`.
- [L80–93](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelRegeneratorV2.user.js#L80) `bindPopupPanelKeyboardToggle()`; scope `<anonymous@21>`.
- [L83–90](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelRegeneratorV2.user.js#L83) `<anonymous@83>(event)`; scope `<anonymous@21>/bindPopupPanelKeyboardToggle`.
- [L95–108](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelRegeneratorV2.user.js#L95) `preventLWorkflowAutoPrint()`; scope `<anonymous@21>`.
- [L99–105](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelRegeneratorV2.user.js#L99) `window.setTimeout(callback, delay)`; scope `<anonymous@21>/preventLWorkflowAutoPrint`.
- [L102–102](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelRegeneratorV2.user.js#L102) `<anonymous@102>()`; scope `<anonymous@21>/preventLWorkflowAutoPrint/window.setTimeout`.
- [L110–123](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelRegeneratorV2.user.js#L110) `bindManualPrintShortcutInLabelWindow()`; scope `<anonymous@21>`.
- [L113–120](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelRegeneratorV2.user.js#L113) `<anonymous@113>(event)`; scope `<anonymous@21>/bindManualPrintShortcutInLabelWindow`.
- [L125–148](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelRegeneratorV2.user.js#L125) `schedulePopupPanelSetup()`; scope `<anonymous@21>`.
- [L130–135](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelRegeneratorV2.user.js#L130) `<anonymous@130>()`; scope `<anonymous@21>/schedulePopupPanelSetup`.
- [L136–141](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelRegeneratorV2.user.js#L136) `<anonymous@136>()`; scope `<anonymous@21>/schedulePopupPanelSetup`.
- [L142–147](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelRegeneratorV2.user.js#L142) `<anonymous@142>()`; scope `<anonymous@21>/schedulePopupPanelSetup`.

## Premenné a pôvodné inicializátory

Dlhé inicializátory sú tu skrátené na 300 znakov; úplné znenie je v inventory.json a v zdroji.

- [L40](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelRegeneratorV2.user.js#L40) `const tagName = target.tagName`; scope `<anonymous@21>/isTypingTarget`.
- [L48](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelRegeneratorV2.user.js#L48) `const style = document.createElement('style')`; scope `<anonymous@21>/ensurePopupPanelStyles`.
- [L76](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelRegeneratorV2.user.js#L76) `const stored = localStorage.getItem('labelRegeneratorPopupPanelHidden')`; scope `<anonymous@21>/initializePopupPanelState`.
- [L98](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelRegeneratorV2.user.js#L98) `const originalSetTimeout = window.setTimeout.bind(window)`; scope `<anonymous@21>/preventLWorkflowAutoPrint`.
- [L100](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelRegeneratorV2.user.js#L100) `const args = Array.prototype.slice.call(arguments, 2)`; scope `<anonymous@21>/preventLWorkflowAutoPrint/window.setTimeout`.
- [L114](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelRegeneratorV2.user.js#L114) `const key = event.key.toLowerCase()`; scope `<anonymous@21>/bindManualPrintShortcutInLabelWindow/<anonymous@113>`.

## storage

- [L21](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelRegeneratorV2.user.js#L21) `function () { 'use strict'; window.labelRegeneratorV2Version = '2.0.27'; function isPrintLabelPage() { return /\/vyrobne_prikazy\/detail\/printLabel\//.test(location.pathname); } function isDetailPage() { return /\/vyrobne_prikazy\/detail\/index\//.test(location.pathname); } function isPrintPopupWin`; scope `root`.
- [L65](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelRegeneratorV2.user.js#L65) `localStorage.setItem('labelRegeneratorPopupPanelHidden', hidden ? '1' : '0')`; scope `<anonymous@21>/setPopupPanelHidden`.
- [L76](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelRegeneratorV2.user.js#L76) `localStorage.getItem('labelRegeneratorPopupPanelHidden')`; scope `<anonymous@21>/initializePopupPanelState`.

## events

- [L21](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelRegeneratorV2.user.js#L21) `function () { 'use strict'; window.labelRegeneratorV2Version = '2.0.27'; function isPrintLabelPage() { return /\/vyrobne_prikazy\/detail\/printLabel\//.test(location.pathname); } function isDetailPage() { return /\/vyrobne_prikazy\/detail\/index\//.test(location.pathname); } function isPrintPopupWin`; scope `root`.
- [L83](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelRegeneratorV2.user.js#L83) `window.addEventListener('keydown', (event) => { if (event.key.toLowerCase() !== 'e') return; if (event.ctrlKey || event.metaKey || event.altKey || isTypingTarget(event.target)) return; event.preventDefault(); event.stopImmediatePropagation(); togglePopupPanel(); }, true)`; scope `<anonymous@21>/bindPopupPanelKeyboardToggle`.
- [L113](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelRegeneratorV2.user.js#L113) `window.addEventListener('keydown', (event) => { const key = event.key.toLowerCase(); if (key !== 'p' || !(event.ctrlKey || event.metaKey)) return; event.preventDefault(); event.stopImmediatePropagation(); window.print(); }, true)`; scope `<anonymous@21>/bindManualPrintShortcutInLabelWindow`.
- [L150](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelRegeneratorV2.user.js#L150) `window.addEventListener('labelRegeneratorReady', schedulePopupPanelSetup)`; scope `<anonymous@21>`.
- [L153](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelRegeneratorV2.user.js#L153) `document.addEventListener('DOMContentLoaded', schedulePopupPanelSetup)`; scope `<anonymous@21>`.

## lifecycle

- [L21](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelRegeneratorV2.user.js#L21) `function () { 'use strict'; window.labelRegeneratorV2Version = '2.0.27'; function isPrintLabelPage() { return /\/vyrobne_prikazy\/detail\/printLabel\//.test(location.pathname); } function isDetailPage() { return /\/vyrobne_prikazy\/detail\/index\//.test(location.pathname); } function isPrintPopupWin`; scope `root`.
- [L98](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelRegeneratorV2.user.js#L98) `window.setTimeout.bind(window)`; scope `<anonymous@21>/preventLWorkflowAutoPrint`.
- [L130](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelRegeneratorV2.user.js#L130) `requestAnimationFrame(() => { preventLWorkflowAutoPrint(); initializePopupPanelState(); bindPopupPanelKeyboardToggle(); bindManualPrintShortcutInLabelWindow(); })`; scope `<anonymous@21>/schedulePopupPanelSetup`.
- [L136](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelRegeneratorV2.user.js#L136) `setTimeout(() => { preventLWorkflowAutoPrint(); initializePopupPanelState(); bindPopupPanelKeyboardToggle(); bindManualPrintShortcutInLabelWindow(); }, 150)`; scope `<anonymous@21>/schedulePopupPanelSetup`.
- [L142](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelRegeneratorV2.user.js#L142) `setTimeout(() => { preventLWorkflowAutoPrint(); initializePopupPanelState(); bindPopupPanelKeyboardToggle(); bindManualPrintShortcutInLabelWindow(); }, 700)`; scope `<anonymous@21>/schedulePopupPanelSetup`.

## io

- [L119](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelRegeneratorV2.user.js#L119) `window.print()`; scope `<anonymous@21>/bindManualPrintShortcutInLabelWindow/<anonymous@113>`.

## dom-read

- [L21](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelRegeneratorV2.user.js#L21) `function () { 'use strict'; window.labelRegeneratorV2Version = '2.0.27'; function isPrintLabelPage() { return /\/vyrobne_prikazy\/detail\/printLabel\//.test(location.pathname); } function isDetailPage() { return /\/vyrobne_prikazy\/detail\/index\//.test(location.pathname); } function isPrintPopupWin`; scope `root`.
- [L46](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelRegeneratorV2.user.js#L46) `document.getElementById('lr-popup-panel-toggle-style-v225')`; scope `<anonymous@21>/ensurePopupPanelStyles`.

## dom-write

- [L21](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelRegeneratorV2.user.js#L21) `function () { 'use strict'; window.labelRegeneratorV2Version = '2.0.27'; function isPrintLabelPage() { return /\/vyrobne_prikazy\/detail\/printLabel\//.test(location.pathname); } function isDetailPage() { return /\/vyrobne_prikazy\/detail\/index\//.test(location.pathname); } function isPrintPopupWin`; scope `root`.
- [L58](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelRegeneratorV2.user.js#L58) `document.head.appendChild(style)`; scope `<anonymous@21>/ensurePopupPanelStyles`.

## logs

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## Zápisy do globálov, DOM a ostatných vlastností

- [L24](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelRegeneratorV2.user.js#L24) `window.labelRegeneratorV2Version = '2.0.27'`.
- [L49](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelRegeneratorV2.user.js#L49) `style.id = 'lr-popup-panel-toggle-style-v225'`.
- [L50](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelRegeneratorV2.user.js#L50) `style.textContent = ' html.lr-popup-panel-hidden #lr-config-panel, html.lr-popup-panel-hidden #lr-config-toggle { display: none !important; visibility: hidden !important; pointer-events: none !important; } '`.
- [L92](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelRegeneratorV2.user.js#L92) `window.__lrPopupPanelKeyboardV225 = true`.
- [L99](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelRegeneratorV2.user.js#L99) `window.setTimeout = function (callback, delay) { const args = Array.prototype.slice.call(arguments, 2); if (typeof callback === 'function' && String(callback).includes('triggerDelayedPrintWhenReady')) { return originalSetTimeout(() => {}, 0); } return originalSetTimeout(callback, delay, ...args); }`.
- [L107](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelRegeneratorV2.user.js#L107) `window.__lrManualLPopupPatchV225 = true`.
- [L122](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelRegeneratorV2.user.js#L122) `window.__lrCtrlPManualPrintV225 = true`.
