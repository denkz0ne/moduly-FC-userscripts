# service-catalog/detectors/detector_common_size.js

Zdroj: service-catalog/detectors/detector_common_size.js; referencia: 75087f8c4cbd34190e69318038bda6ef36eee0f2.
SHA-256: `c57f732fd902769798d797748fe0a88323c76b665d9e2e1b1648f644f6475031`. Riadkov: 46.

AST inventár: obsahuje aj vnorené/anonýmne funkcie a lokálne premenné. Zoznam premenných nie je zoznam editovateľných nastavení. Volania sú klasifikované podľa názvu; dynamické aliasy môžu vyžadovať ručné dohľadanie. Historické @require hlavičky v načítanom JS nie sú ďalším automaticky spusteným @require reťazcom.

## Metadata

```json
{}
```

## Funkcie a signatúry

- [L1–45](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_common_size.js#L1) `<anonymous@1>()`; scope `root`.
- [L7–10](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_common_size.js#L7) `detectExpressToken()`; scope `<anonymous@1>`.
- [L9–9](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_common_size.js#L9) `<anonymous@9>(badge)`; scope `<anonymous@1>/detectExpressToken`.
- [L15–17](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_common_size.js#L15) `match(internalCode, context)`; scope `<anonymous@1>`.
- [L18–43](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_common_size.js#L18) `detect(context)`; scope `<anonymous@1>`.

## Premenné a pôvodné inicializátory

Dlhé inicializátory sú tu skrátené na 300 znakov; úplné znenie je v inventory.json a v zdroji.

- [L4](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_common_size.js#L4) `const api = window.MaterialDetectorNextAPI`; scope `<anonymous@1>`.
- [L8](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_common_size.js#L8) `const badges = Array.from(document.querySelectorAll('.badge'))`; scope `<anonymous@1>/detectExpressToken`.
- [L19](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_common_size.js#L19) `const sizeAlias = api.detectUniversalSizeAlias(context)`; scope `<anonymous@1>/detect`.
- [L21](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_common_size.js#L21) `const express = detectExpressToken()`; scope `<anonymous@1>/detect`.
- [L22](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_common_size.js#L22) `const left = api.stripSizeUnitSuffix(sizeAlias).replace('x', ' ')`; scope `<anonymous@1>/detect`.

## storage

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## events

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## lifecycle

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## io

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## dom-read

- [L1](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_common_size.js#L1) `function () { 'use strict'; const api = window.MaterialDetectorNextAPI; if (!api) return; function detectExpressToken() { const badges = Array.from(document.querySelectorAll('.badge')); return badges.some(badge => api.clean(badge.textContent).toUpperCase() === 'EXPR') ? 'EXPR' : ''; } api.registerDe`; scope `root`.
- [L8](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_common_size.js#L8) `document.querySelectorAll('.badge')`; scope `<anonymous@1>/detectExpressToken`.

## dom-write

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## logs

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## Zápisy do globálov, DOM a ostatných vlastností
