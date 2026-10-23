# service-catalog/detectors/detector_fotoobrazy.js

Zdroj: service-catalog/detectors/detector_fotoobrazy.js; referencia: 75087f8c4cbd34190e69318038bda6ef36eee0f2.
SHA-256: `ede3258cbfc9e6c97acf82f69fc2ccb8c1bbfb50099f25bb2afa1188bfb48a99`. Riadkov: 138.

AST inventár: obsahuje aj vnorené/anonýmne funkcie a lokálne premenné. Zoznam premenných nie je zoznam editovateľných nastavení. Volania sú klasifikované podľa názvu; dynamické aliasy môžu vyžadovať ručné dohľadanie. Historické @require hlavičky v načítanom JS nie sú ďalším automaticky spusteným @require reťazcom.

## Metadata

```json
{}
```

## Funkcie a signatúry

- [L1–137](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_fotoobrazy.js#L1) `<anonymous@1>()`; scope `root`.
- [L7–15](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_fotoobrazy.js#L7) `splitDigits(digits)`; scope `<anonymous@1>`.
- [L17–22](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_fotoobrazy.js#L17) `hasStiffenerSelected(detailInfo)`; scope `<anonymous@1>`.
- [L24–37](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_fotoobrazy.js#L24) `getZdRows(root)`; scope `<anonymous@1>`.
- [L28–36](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_fotoobrazy.js#L28) `<anonymous@28>(row)`; scope `<anonymous@1>/getZdRows`.
- [L33–33](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_fotoobrazy.js#L33) `<anonymous@33>(el)`; scope `<anonymous@1>/getZdRows/<anonymous@28>`.
- [L39–43](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_fotoobrazy.js#L39) `getZdValue(root, labels)`; scope `<anonymous@1>`.
- [L41–41](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_fotoobrazy.js#L41) `<anonymous@41>(item)`; scope `<anonymous@1>/getZdValue`.
- [L41–41](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_fotoobrazy.js#L41) `<anonymous@41>(key)`; scope `<anonymous@1>/getZdValue/<anonymous@41>`.
- [L45–54](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_fotoobrazy.js#L45) `parseClockFromDetail(code, detailInfo)`; scope `<anonymous@1>`.
- [L56–59](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_fotoobrazy.js#L56) `detectExpressToken()`; scope `<anonymous@1>`.
- [L58–58](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_fotoobrazy.js#L58) `<anonymous@58>(badge)`; scope `<anonymous@1>/detectExpressToken`.
- [L61–63](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_fotoobrazy.js#L61) `joinBadges()`; scope `<anonymous@1>`.
- [L65–67](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_fotoobrazy.js#L65) `addStiffenerMark(displayAlias)`; scope `<anonymous@1>`.
- [L69–93](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_fotoobrazy.js#L69) `parseCode(code)`; scope `<anonymous@1>`.
- [L99–101](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_fotoobrazy.js#L99) `match(internalCode)`; scope `<anonymous@1>`.
- [L102–135](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_fotoobrazy.js#L102) `detect(context)`; scope `<anonymous@1>`.

## Premenné a pôvodné inicializátory

Dlhé inicializátory sú tu skrátené na 300 znakov; úplné znenie je v inventory.json a v zdroji.

- [L4](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_fotoobrazy.js#L4) `const api = window.MaterialDetectorNextAPI`; scope `<anonymous@1>`.
- [L8](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_fotoobrazy.js#L8) `const raw = String(digits || '').trim()`; scope `<anonymous@1>/splitDigits`.
- [L10](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_fotoobrazy.js#L10) `const splitAt = raw.length === 5 ? 3 : raw.length / 2`; scope `<anonymous@1>/splitDigits`.
- [L11](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_fotoobrazy.js#L11) `const left = String(Number(raw.slice(0, splitAt)))`; scope `<anonymous@1>/splitDigits`.
- [L12](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_fotoobrazy.js#L12) `const right = String(Number(raw.slice(splitAt)))`; scope `<anonymous@1>/splitDigits`.
- [L18](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_fotoobrazy.js#L18) `const root = detailInfo || document`; scope `<anonymous@1>/hasStiffenerSelected`.
- [L19](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_fotoobrazy.js#L19) `const select = root.querySelector && root.querySelector('select[name="FO_STIFFENER"]')`; scope `<anonymous@1>/hasStiffenerSelected`.
- [L25](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_fotoobrazy.js#L25) `const scope = (root && root.querySelector && root.querySelector('#VPZDParams')) || document.querySelector('#zd-form-container #VPZDParams')`; scope `<anonymous@1>/getZdRows`.
- [L29](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_fotoobrazy.js#L29) `const cells = row.querySelectorAll(':scope > div')`; scope `<anonymous@1>/getZdRows/<anonymous@28>`.
- [L31](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_fotoobrazy.js#L31) `const label = api.clean(cells[0].textContent || '')`; scope `<anonymous@1>/getZdRows/<anonymous@28>`.
- [L32](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_fotoobrazy.js#L32) `const values = Array.from(cells[1].querySelectorAll('.whitespace-pre-line')) .map(el => api.clean(el.textContent || '')) .filter(Boolean)`; scope `<anonymous@1>/getZdRows/<anonymous@28>`.
- [L40](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_fotoobrazy.js#L40) `const keys = labels.map(api.normalizeKey)`; scope `<anonymous@1>/getZdValue`.
- [L41](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_fotoobrazy.js#L41) `const row = getZdRows(root).find(item => keys.some(key => item.key.includes(key)))`; scope `<anonymous@1>/getZdValue`.
- [L46](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_fotoobrazy.js#L46) `const format = getZdValue(detailInfo, ['format platna'])`; scope `<anonymous@1>/parseClockFromDetail`.
- [L47](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_fotoobrazy.js#L47) `const match = String(format || '').replace(',', '.').match(/(\d+(?:\.\d+)?)\s*x\s*(\d+(?:\.\d+)?)/i)`; scope `<anonymous@1>/parseClockFromDetail`.
- [L49](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_fotoobrazy.js#L49) `const left = String(Number(match[1])).replace('.', ',')`; scope `<anonymous@1>/parseClockFromDetail`.
- [L50](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_fotoobrazy.js#L50) `const right = String(Number(match[2])).replace('.', ',')`; scope `<anonymous@1>/parseClockFromDetail`.
- [L51](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_fotoobrazy.js#L51) `const displaySize = left + ' ' + right`; scope `<anonymous@1>/parseClockFromDetail`.
- [L52](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_fotoobrazy.js#L52) `const sizeAlias = (left + 'x' + right + '_cm').replace(',', '.')`; scope `<anonymous@1>/parseClockFromDetail`.
- [L57](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_fotoobrazy.js#L57) `const badges = Array.from(document.querySelectorAll('.badge'))`; scope `<anonymous@1>/detectExpressToken`.
- [L70](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_fotoobrazy.js#L70) `const lower = String(code || '').toLowerCase()`; scope `<anonymous@1>/parseCode`.
- [L78](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_fotoobrazy.js#L78) `const split = splitDigits(lower.replace(/^48fh/, ''))`; scope `<anonymous@1>/parseCode`.
- [L82](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_fotoobrazy.js#L82) `const match = lower.match(/^48r(p?)(\d{4,6})$/)`; scope `<anonymous@1>/parseCode`.
- [L84](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_fotoobrazy.js#L84) `const premium = !!match[1]`; scope `<anonymous@1>/parseCode`.
- [L85](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_fotoobrazy.js#L85) `const split = splitDigits(match[2])`; scope `<anonymous@1>/parseCode`.
- [L103](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_fotoobrazy.js#L103) `let parsed = parseCode(context.internalCode)`; scope `<anonymous@1>/detect`.
- [L108](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_fotoobrazy.js#L108) `const canvas = parsed.kind === 'regular' && api.hasCanvasSelected(context.detailInfo)`; scope `<anonymous@1>/detect`.
- [L109](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_fotoobrazy.js#L109) `const giftPack = api.hasGiftPack(context.detailInfo)`; scope `<anonymous@1>/detect`.
- [L110](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_fotoobrazy.js#L110) `const express = detectExpressToken()`; scope `<anonymous@1>/detect`.
- [L111](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_fotoobrazy.js#L111) `const stiffener = !!parsed.sizeAlias && hasStiffenerSelected(context.detailInfo)`; scope `<anonymous@1>/detect`.
- [L112](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_fotoobrazy.js#L112) `const displayAlias = stiffener ? addStiffenerMark(parsed.displayAlias) : parsed.displayAlias`; scope `<anonymous@1>/detect`.
- [L113](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_fotoobrazy.js#L113) `const left = '${displayAlias}${canvas ? ' C' : ''}'.trim()`; scope `<anonymous@1>/detect`.
- [L114](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_fotoobrazy.js#L114) `const top = joinBadges(giftPack ? 'DBAL' : '', express)`; scope `<anonymous@1>/detect`.

## storage

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## events

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## lifecycle

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## io

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## dom-read

- [L1](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_fotoobrazy.js#L1) `function () { 'use strict'; const api = window.MaterialDetectorNextAPI; if (!api) return; function splitDigits(digits) { const raw = String(digits || '').trim(); if (!/^\d{4,6}$/.test(raw)) return null; const splitAt = raw.length === 5 ? 3 : raw.length / 2; const left = String(Number(raw.slice(0, sp`; scope `root`.
- [L19](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_fotoobrazy.js#L19) `root.querySelector('select[name="FO_STIFFENER"]')`; scope `<anonymous@1>/hasStiffenerSelected`.
- [L25](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_fotoobrazy.js#L25) `root.querySelector('#VPZDParams')`; scope `<anonymous@1>/getZdRows`.
- [L26](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_fotoobrazy.js#L26) `document.querySelector('#zd-form-container #VPZDParams')`; scope `<anonymous@1>/getZdRows`.
- [L28](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_fotoobrazy.js#L28) `Array.from(scope.querySelectorAll(':scope > div.flex')).map(row => { const cells = row.querySelectorAll(':scope > div'); if (cells.length < 2) return null; const label = api.clean(cells[0].textContent || ''); const values = Array.from(cells[1].querySelectorAll('.whitespace-pre-line')) .map(el => api`; scope `<anonymous@1>/getZdRows`.
- [L28](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_fotoobrazy.js#L28) `Array.from(scope.querySelectorAll(':scope > div.flex')).map(row => { const cells = row.querySelectorAll(':scope > div'); if (cells.length < 2) return null; const label = api.clean(cells[0].textContent || ''); const values = Array.from(cells[1].querySelectorAll('.whitespace-pre-line')) .map(el => api`; scope `<anonymous@1>/getZdRows`.
- [L28](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_fotoobrazy.js#L28) `scope.querySelectorAll(':scope > div.flex')`; scope `<anonymous@1>/getZdRows`.
- [L29](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_fotoobrazy.js#L29) `row.querySelectorAll(':scope > div')`; scope `<anonymous@1>/getZdRows/<anonymous@28>`.
- [L32](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_fotoobrazy.js#L32) `Array.from(cells[1].querySelectorAll('.whitespace-pre-line')) .map(el => api.clean(el.textContent || '')) .filter(Boolean)`; scope `<anonymous@1>/getZdRows/<anonymous@28>`.
- [L32](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_fotoobrazy.js#L32) `Array.from(cells[1].querySelectorAll('.whitespace-pre-line')) .map(el => api.clean(el.textContent || ''))`; scope `<anonymous@1>/getZdRows/<anonymous@28>`.
- [L32](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_fotoobrazy.js#L32) `cells[1].querySelectorAll('.whitespace-pre-line')`; scope `<anonymous@1>/getZdRows/<anonymous@28>`.
- [L57](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_fotoobrazy.js#L57) `document.querySelectorAll('.badge')`; scope `<anonymous@1>/detectExpressToken`.

## dom-write

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## logs

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## Zápisy do globálov, DOM a ostatných vlastností
