# detectors/detector_67mf.js

Zdroj: detectors/detector_67mf.js; referencia: 75087f8c4cbd34190e69318038bda6ef36eee0f2.
SHA-256: `a16431b6aed0f03e1c25f07ad4664a424cc0bfabae6d3fdde04fcd9d09667a61`. Riadkov: 190.

AST inventár: obsahuje aj vnorené/anonýmne funkcie a lokálne premenné. Zoznam premenných nie je zoznam editovateľných nastavení. Volania sú klasifikované podľa názvu; dynamické aliasy môžu vyžadovať ručné dohľadanie. Historické @require hlavičky v načítanom JS nie sú ďalším automaticky spusteným @require reťazcom.

## Metadata

```json
{}
```

## Funkcie a signatúry

- [L1–190](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_67mf.js#L1) `<anonymous@1>()`; scope `root`.
- [L7–10](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_67mf.js#L7) `detectExpressToken()`; scope `<anonymous@1>`.
- [L9–9](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_67mf.js#L9) `<anonymous@9>(badge)`; scope `<anonymous@1>/detectExpressToken`.
- [L12–14](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_67mf.js#L12) `getZdRoot()`; scope `<anonymous@1>`.
- [L16–22](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_67mf.js#L16) `extractCode(valueCell)`; scope `<anonymous@1>`.
- [L19–19](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_67mf.js#L19) `<anonymous@19>(el)`; scope `<anonymous@1>/extractCode`.
- [L24–26](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_67mf.js#L24) `getParam(params, labels)`; scope `<anonymous@1>`.
- [L28–35](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_67mf.js#L28) `getExactParam(params, labels)`; scope `<anonymous@1>`.
- [L37–54](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_67mf.js#L37) `getParamRowMeta(labelPatterns)`; scope `<anonymous@1>`.
- [L46–46](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_67mf.js#L46) `<anonymous@46>(pattern)`; scope `<anonymous@1>/getParamRowMeta`.
- [L48–48](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_67mf.js#L48) `<anonymous@48>(el)`; scope `<anonymous@1>/getParamRowMeta`.
- [L56–59](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_67mf.js#L56) `extractNumber(value)`; scope `<anonymous@1>`.
- [L61–83](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_67mf.js#L61) `parseSizeFromParams(params)`; scope `<anonymous@1>`.
- [L85–89](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_67mf.js#L85) `parseQuantity(params)`; scope `<anonymous@1>`.
- [L91–95](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_67mf.js#L91) `parseCutCount(params)`; scope `<anonymous@1>`.
- [L97–100](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_67mf.js#L97) `buildLeft(quantity)`; scope `<anonymous@1>`.
- [L102–130](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_67mf.js#L102) `parseDetails(params)`; scope `<anonymous@1>`.
- [L155–159](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_67mf.js#L155) `match(internalCode, context)`; scope `<anonymous@1>`.
- [L160–188](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_67mf.js#L160) `detect()`; scope `<anonymous@1>`.

## Premenné a pôvodné inicializátory

Dlhé inicializátory sú tu skrátené na 300 znakov; úplné znenie je v inventory.json a v zdroji.

- [L4](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_67mf.js#L4) `const api = window.MaterialDetectorAPI`; scope `<anonymous@1>`.
- [L8](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_67mf.js#L8) `const badges = Array.from(document.querySelectorAll('.badge'))`; scope `<anonymous@1>/detectExpressToken`.
- [L18](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_67mf.js#L18) `const codeEl = Array.from(valueCell.querySelectorAll('.text-gray, [class*="text-gray"]')) .find(el => /#?FV\w+/i.test(el.textContent || ''))`; scope `<anonymous@1>/extractCode`.
- [L20](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_67mf.js#L20) `const match = (codeEl ? codeEl.textContent : valueCell.textContent || '').match(/#?\s*([A-Z]{1,4}\d{2,6})/i)`; scope `<anonymous@1>/extractCode`.
- [L30](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_67mf.js#L30) `const normalizedLabels = labels.map(api.normalizeKey)`; scope `<anonymous@1>/getExactParam`.
- [L31](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_67mf.js#L31) `const [key, item] = <bez inicializátora>`; scope `<anonymous@1>/getExactParam`.
- [L38](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_67mf.js#L38) `const root = getZdRoot()`; scope `<anonymous@1>/getParamRowMeta`.
- [L40](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_67mf.js#L40) `const patterns = labelPatterns.map(api.normalizeKey)`; scope `<anonymous@1>/getParamRowMeta`.
- [L41](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_67mf.js#L41) `const rows = Array.from(root.querySelectorAll(':scope > div.flex'))`; scope `<anonymous@1>/getParamRowMeta`.
- [L42](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_67mf.js#L42) `const row = <bez inicializátora>`; scope `<anonymous@1>/getParamRowMeta`.
- [L43](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_67mf.js#L43) `const cells = row.querySelectorAll(':scope > div')`; scope `<anonymous@1>/getParamRowMeta`.
- [L45](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_67mf.js#L45) `const label = api.normalizeKey(cells[0].textContent || '')`; scope `<anonymous@1>/getParamRowMeta`.
- [L47](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_67mf.js#L47) `const values = Array.from(cells[1].querySelectorAll('.whitespace-pre-line')) .map(el => api.clean(el.textContent || '')) .filter(Boolean)`; scope `<anonymous@1>/getParamRowMeta`.
- [L50](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_67mf.js#L50) `const value = values.length ? values.join(' | ') : api.clean(cells[1].textContent || '')`; scope `<anonymous@1>/getParamRowMeta`.
- [L57](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_67mf.js#L57) `const match = String(value || '').replace(',', '.').match(/(\d+(?:\.\d+)?)/)`; scope `<anonymous@1>/extractNumber`.
- [L62](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_67mf.js#L62) `const raw = getParam(params, ['vlastny rozmer folie', 'rozmer folie', 'rozmer'])`; scope `<anonymous@1>/parseSizeFromParams`.
- [L63](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_67mf.js#L63) `const values = String(raw || '').split('|').map(api.clean).filter(Boolean)`; scope `<anonymous@1>/parseSizeFromParams`.
- [L64](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_67mf.js#L64) `const widthRaw = values[0] || ''`; scope `<anonymous@1>/parseSizeFromParams`.
- [L65](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_67mf.js#L65) `const heightRaw = values[1] || ''`; scope `<anonymous@1>/parseSizeFromParams`.
- [L66](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_67mf.js#L66) `const widthMm = extractNumber(widthRaw)`; scope `<anonymous@1>/parseSizeFromParams`.
- [L67](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_67mf.js#L67) `const heightMm = extractNumber(heightRaw)`; scope `<anonymous@1>/parseSizeFromParams`.
- [L68](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_67mf.js#L68) `const sizeAlias = widthMm && heightMm ? api.parseSizeAlias('${widthMm}x${heightMm} mm') : api.detectUniversalSizeAlias()`; scope `<anonymous@1>/parseSizeFromParams`.
- [L69](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_67mf.js#L69) `const size = api.stripSizeUnitSuffix(sizeAlias)`; scope `<anonymous@1>/parseSizeFromParams`.
- [L70](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_67mf.js#L70) `const parts = size.match(/^(\d+(?:[,.]\d+)?)x(\d+(?:[,.]\d+)?)$/)`; scope `<anonymous@1>/parseSizeFromParams`.
- [L86](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_67mf.js#L86) `const raw = getExactParam(params, ['pocet kusov'])`; scope `<anonymous@1>/parseQuantity`.
- [L87](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_67mf.js#L87) `const match = String(raw || '').match(/\d+/)`; scope `<anonymous@1>/parseQuantity`.
- [L92](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_67mf.js#L92) `const raw = getParam(params, ['pocet rezov na format', 'pocet rezov'])`; scope `<anonymous@1>/parseCutCount`.
- [L93](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_67mf.js#L93) `const match = String(raw || '').match(/\d+/)`; scope `<anonymous@1>/parseCutCount`.
- [L98](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_67mf.js#L98) `const qty = parseInt(quantity, 10)`; scope `<anonymous@1>/buildLeft`.
- [L103](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_67mf.js#L103) `const sticker = getParamRowMeta(['typ nalepky'])`; scope `<anonymous@1>/parseDetails`.
- [L104](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_67mf.js#L104) `const magneticFoil = getParamRowMeta(['magneticka folia'])`; scope `<anonymous@1>/parseDetails`.
- [L105](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_67mf.js#L105) `const size = parseSizeFromParams(params)`; scope `<anonymous@1>/parseDetails`.
- [L106](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_67mf.js#L106) `const quantity = parseQuantity(params)`; scope `<anonymous@1>/parseDetails`.
- [L107](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_67mf.js#L107) `const cutCount = parseCutCount(params)`; scope `<anonymous@1>/parseDetails`.
- [L108](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_67mf.js#L108) `const details = { format: getParam(params, ['format folie']), foilFormat: getParam(params, ['format folie']), stickerType: sticker.value, stickerTypeCode: sticker.code, magneticFoil: magneticFoil.value, magneticFoilCode: magneticFoil.code, areaM2: getParam(params, ['vypocitane pole vlastny rozmer'])`; scope `<anonymous@1>/parseDetails`.
- [L156](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_67mf.js#L156) `const code = String(internalCode || '').toLowerCase()`; scope `<anonymous@1>/match`.
- [L157](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_67mf.js#L157) `const text = api.normalizeKey((context && context.productText) || '')`; scope `<anonymous@1>/match`.
- [L161](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_67mf.js#L161) `const params = api.parseZdParams()`; scope `<anonymous@1>/detect`.
- [L162](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_67mf.js#L162) `const details = parseDetails(params)`; scope `<anonymous@1>/detect`.
- [L163](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_67mf.js#L163) `const express = detectExpressToken()`; scope `<anonymous@1>/detect`.
- [L164](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_67mf.js#L164) `const left = buildLeft(details.quantity)`; scope `<anonymous@1>/detect`.
- [L165](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_67mf.js#L165) `const quantity = details.quantity ? '${details.quantity}ks' : '1ks'`; scope `<anonymous@1>/detect`.

## storage

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## events

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## lifecycle

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## io

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## dom-read

- [L1](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_67mf.js#L1) `function () { 'use strict'; const api = window.MaterialDetectorAPI; if (!api) return; function detectExpressToken() { const badges = Array.from(document.querySelectorAll('.badge')); return badges.some(badge => api.clean(badge.textContent).toUpperCase() === 'EXPR') ? 'EXPR' : ''; } function getZdRoot`; scope `root`.
- [L8](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_67mf.js#L8) `document.querySelectorAll('.badge')`; scope `<anonymous@1>/detectExpressToken`.
- [L13](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_67mf.js#L13) `document.querySelector('#zd-form-container #VPZDParams')`; scope `<anonymous@1>/getZdRoot`.
- [L18](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_67mf.js#L18) `Array.from(valueCell.querySelectorAll('.text-gray, [class*="text-gray"]')) .find(el => /#?FV\w+/i.test(el.textContent || ''))`; scope `<anonymous@1>/extractCode`.
- [L18](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_67mf.js#L18) `valueCell.querySelectorAll('.text-gray, [class*="text-gray"]')`; scope `<anonymous@1>/extractCode`.
- [L41](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_67mf.js#L41) `root.querySelectorAll(':scope > div.flex')`; scope `<anonymous@1>/getParamRowMeta`.
- [L43](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_67mf.js#L43) `row.querySelectorAll(':scope > div')`; scope `<anonymous@1>/getParamRowMeta`.
- [L47](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_67mf.js#L47) `Array.from(cells[1].querySelectorAll('.whitespace-pre-line')) .map(el => api.clean(el.textContent || '')) .filter(Boolean)`; scope `<anonymous@1>/getParamRowMeta`.
- [L47](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_67mf.js#L47) `Array.from(cells[1].querySelectorAll('.whitespace-pre-line')) .map(el => api.clean(el.textContent || ''))`; scope `<anonymous@1>/getParamRowMeta`.
- [L47](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_67mf.js#L47) `cells[1].querySelectorAll('.whitespace-pre-line')`; scope `<anonymous@1>/getParamRowMeta`.

## dom-write

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## logs

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## Zápisy do globálov, DOM a ostatných vlastností
