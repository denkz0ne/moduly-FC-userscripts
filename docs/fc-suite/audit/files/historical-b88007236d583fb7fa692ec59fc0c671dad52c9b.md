# labelRegeneratorV2

Zdroj: labelRegeneratorV2.user.js; referencia: b88007236d583fb7fa692ec59fc0c671dad52c9b.
SHA-256: `bba1e78833eddc0002e47c0b03b1758c2ac4b80257bbe8708a961b2dd4a0fd97`. Riadkov: 71.

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
    "2.0.22"
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
  "require": [
    "https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js",
    "https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js",
    "https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js"
  ],
  "match": [
    "https://moduly.faxcopy.sk/vyrobne_prikazy/detail/printLabel/*",
    "https://moduly.faxcopy.sk/vyrobne_prikazy/detail/index/*"
  ],
  "grant": [
    "none"
  ],
  "run-at": [
    "document-end"
  ]
}
```

## Funkcie a signatúry

- [L18–70](https://github.com/denkz0ne/moduly-FC-userscripts/blob/b88007236d583fb7fa692ec59fc0c671dad52c9b/labelRegeneratorV2.user.js#L18) `<anonymous@18>()`; scope `root`.
- [L23–25](https://github.com/denkz0ne/moduly-FC-userscripts/blob/b88007236d583fb7fa692ec59fc0c671dad52c9b/labelRegeneratorV2.user.js#L23) `isDetailPage()`; scope `<anonymous@18>`.
- [L27–29](https://github.com/denkz0ne/moduly-FC-userscripts/blob/b88007236d583fb7fa692ec59fc0c671dad52c9b/labelRegeneratorV2.user.js#L27) `isPrintLabelUrl(url)`; scope `<anonymous@18>`.
- [L31–49](https://github.com/denkz0ne/moduly-FC-userscripts/blob/b88007236d583fb7fa692ec59fc0c671dad52c9b/labelRegeneratorV2.user.js#L31) `getPopupFeatures()`; scope `<anonymous@18>`.
- [L51–63](https://github.com/denkz0ne/moduly-FC-userscripts/blob/b88007236d583fb7fa692ec59fc0c671dad52c9b/labelRegeneratorV2.user.js#L51) `patchPrintLabelPopupOpen()`; scope `<anonymous@18>`.
- [L55–60](https://github.com/denkz0ne/moduly-FC-userscripts/blob/b88007236d583fb7fa692ec59fc0c671dad52c9b/labelRegeneratorV2.user.js#L55) `window.open(url, target, features)`; scope `<anonymous@18>/patchPrintLabelPopupOpen`.

## Premenné a pôvodné inicializátory

Dlhé inicializátory sú tu skrátené na 300 znakov; úplné znenie je v inventory.json a v zdroji.

- [L32](https://github.com/denkz0ne/moduly-FC-userscripts/blob/b88007236d583fb7fa692ec59fc0c671dad52c9b/labelRegeneratorV2.user.js#L32) `const width = 720`; scope `<anonymous@18>/getPopupFeatures`.
- [L33](https://github.com/denkz0ne/moduly-FC-userscripts/blob/b88007236d583fb7fa692ec59fc0c671dad52c9b/labelRegeneratorV2.user.js#L33) `const height = 520`; scope `<anonymous@18>/getPopupFeatures`.
- [L34](https://github.com/denkz0ne/moduly-FC-userscripts/blob/b88007236d583fb7fa692ec59fc0c671dad52c9b/labelRegeneratorV2.user.js#L34) `const left = Math.max(0, Math.round((window.screen.availWidth - width) / 2))`; scope `<anonymous@18>/getPopupFeatures`.
- [L35](https://github.com/denkz0ne/moduly-FC-userscripts/blob/b88007236d583fb7fa692ec59fc0c671dad52c9b/labelRegeneratorV2.user.js#L35) `const top = Math.max(0, Math.round((window.screen.availHeight - height) / 2))`; scope `<anonymous@18>/getPopupFeatures`.
- [L54](https://github.com/denkz0ne/moduly-FC-userscripts/blob/b88007236d583fb7fa692ec59fc0c671dad52c9b/labelRegeneratorV2.user.js#L54) `const originalOpen = window.open.bind(window)`; scope `<anonymous@18>/patchPrintLabelPopupOpen`.

## storage

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## events

- [L18](https://github.com/denkz0ne/moduly-FC-userscripts/blob/b88007236d583fb7fa692ec59fc0c671dad52c9b/labelRegeneratorV2.user.js#L18) `function () { 'use strict'; window.labelRegeneratorV2Version = '2.0.22'; function isDetailPage() { return /\/vyrobne_prikazy\/detail\/index\//.test(location.pathname); } function isPrintLabelUrl(url) { return /\/vyrobne_prikazy\/detail\/printLabel\//.test(String(url || '')); } function getPopupFeatu`; scope `root`.
- [L68](https://github.com/denkz0ne/moduly-FC-userscripts/blob/b88007236d583fb7fa692ec59fc0c671dad52c9b/labelRegeneratorV2.user.js#L68) `document.addEventListener('DOMContentLoaded', patchPrintLabelPopupOpen)`; scope `<anonymous@18>`.

## lifecycle

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## io

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## dom-read

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## dom-write

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## logs

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## Zápisy do globálov, DOM a ostatných vlastností

- [L21](https://github.com/denkz0ne/moduly-FC-userscripts/blob/b88007236d583fb7fa692ec59fc0c671dad52c9b/labelRegeneratorV2.user.js#L21) `window.labelRegeneratorV2Version = '2.0.22'`.
- [L55](https://github.com/denkz0ne/moduly-FC-userscripts/blob/b88007236d583fb7fa692ec59fc0c671dad52c9b/labelRegeneratorV2.user.js#L55) `window.open = function (url, target, features) { if (isPrintLabelUrl(url)) { return originalOpen(url, 'labelRegeneratorPrintPopup', getPopupFeatures()); } return originalOpen(url, target, features); }`.
- [L62](https://github.com/denkz0ne/moduly-FC-userscripts/blob/b88007236d583fb7fa692ec59fc0c671dad52c9b/labelRegeneratorV2.user.js#L62) `window.__lrPopupOpenPatchV222 = true`.
