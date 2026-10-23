# detectors/detector_41tv.js

Zdroj: detectors/detector_41tv.js; referencia: 75087f8c4cbd34190e69318038bda6ef36eee0f2.
SHA-256: `bcc152b9367f8e7328800fd3b9e354a3776b8a1a72f032cae5d9da7638e47a53`. Riadkov: 93.

AST inventár: obsahuje aj vnorené/anonýmne funkcie a lokálne premenné. Zoznam premenných nie je zoznam editovateľných nastavení. Volania sú klasifikované podľa názvu; dynamické aliasy môžu vyžadovať ručné dohľadanie. Historické @require hlavičky v načítanom JS nie sú ďalším automaticky spusteným @require reťazcom.

## Metadata

```json
{}
```

## Funkcie a signatúry

- [L1–93](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_41tv.js#L1) `<anonymous@1>()`; scope `root`.
- [L7–10](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_41tv.js#L7) `detectExpressToken()`; scope `<anonymous@1>`.
- [L9–9](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_41tv.js#L9) `<anonymous@9>(badge)`; scope `<anonymous@1>/detectExpressToken`.
- [L12–24](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_41tv.js#L12) `parseDetails(params)`; scope `<anonymous@1>`.
- [L26–32](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_41tv.js#L26) `hasFoldingSelected(foldingText)`; scope `<anonymous@1>`.
- [L34–41](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_41tv.js#L34) `buildAlias(details)`; scope `<anonymous@1>`.
- [L60–62](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_41tv.js#L60) `match(internalCode)`; scope `<anonymous@1>`.
- [L63–91](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_41tv.js#L63) `detect()`; scope `<anonymous@1>`.

## Premenné a pôvodné inicializátory

Dlhé inicializátory sú tu skrátené na 300 znakov; úplné znenie je v inventory.json a v zdroji.

- [L4](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_41tv.js#L4) `const api = window.MaterialDetectorAPI`; scope `<anonymous@1>`.
- [L8](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_41tv.js#L8) `const badges = Array.from(document.querySelectorAll('.badge'))`; scope `<anonymous@1>/detectExpressToken`.
- [L13](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_41tv.js#L13) `const printType = api.getParamValueByLabelContains(params, ['druh tlace'])`; scope `<anonymous@1>/parseDetails`.
- [L14](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_41tv.js#L14) `const material = api.getParamValueByLabelContains(params, ['tlacove medium', 'tlacove medium pre', 'medium pre', 'material'])`; scope `<anonymous@1>/parseDetails`.
- [L15](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_41tv.js#L15) `const materialAlias = api.resolveMaterialAlias(material) || material`; scope `<anonymous@1>/parseDetails`.
- [L16](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_41tv.js#L16) `const quantityText = api.getParamValueByLabelContains(params, ['pocet kusov', 'pocet rovnakych vytlackov'])`; scope `<anonymous@1>/parseDetails`.
- [L17](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_41tv.js#L17) `const folding = api.getParamValueByLabelContains(params, ['skladanie'])`; scope `<anonymous@1>/parseDetails`.
- [L18](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_41tv.js#L18) `const quantity = (String(quantityText || '').match(/\d+/) || [null])[0] || ''`; scope `<anonymous@1>/parseDetails`.
- [L19](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_41tv.js#L19) `const normalizedPrintType = api.normalizeKey(printType)`; scope `<anonymous@1>/parseDetails`.
- [L20](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_41tv.js#L20) `let colorCode = ''`; scope `<anonymous@1>/parseDetails`.
- [L27](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_41tv.js#L27) `const normalized = api.normalizeKey(foldingText)`; scope `<anonymous@1>/hasFoldingSelected`.
- [L35](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_41tv.js#L35) `let result = (details.materialAlias || details.material || '41tv').trim()`; scope `<anonymous@1>/buildAlias`.
- [L38](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_41tv.js#L38) `const qty = parseInt(details.quantity, 10)`; scope `<anonymous@1>/buildAlias`.
- [L64](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_41tv.js#L64) `const params = api.parseZdParams()`; scope `<anonymous@1>/detect`.
- [L65](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_41tv.js#L65) `const details = parseDetails(params)`; scope `<anonymous@1>/detect`.
- [L66](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_41tv.js#L66) `const express = detectExpressToken()`; scope `<anonymous@1>/detect`.
- [L67](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_41tv.js#L67) `const left = buildAlias(details)`; scope `<anonymous@1>/detect`.
- [L68](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_41tv.js#L68) `const sizeAlias = api.detectUniversalSizeAlias()`; scope `<anonymous@1>/detect`.

## storage

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## events

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## lifecycle

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## io

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## dom-read

- [L1](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_41tv.js#L1) `function () { 'use strict'; const api = window.MaterialDetectorAPI; if (!api) return; function detectExpressToken() { const badges = Array.from(document.querySelectorAll('.badge')); return badges.some(badge => api.clean(badge.textContent).toUpperCase() === 'EXPR') ? 'EXPR' : ''; } function parseDeta`; scope `root`.
- [L8](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_41tv.js#L8) `document.querySelectorAll('.badge')`; scope `<anonymous@1>/detectExpressToken`.

## dom-write

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## logs

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## Zápisy do globálov, DOM a ostatných vlastností
