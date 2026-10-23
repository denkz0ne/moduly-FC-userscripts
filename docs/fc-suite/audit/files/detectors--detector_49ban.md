# detectors/detector_49ban.js

Zdroj: detectors/detector_49ban.js; referencia: 75087f8c4cbd34190e69318038bda6ef36eee0f2.
SHA-256: `b9db304f993b5653d4f1b16538537a484b769aaf6f383e0ba1a544e11ffdb446`. Riadkov: 206.

AST inventár: obsahuje aj vnorené/anonýmne funkcie a lokálne premenné. Zoznam premenných nie je zoznam editovateľných nastavení. Volania sú klasifikované podľa názvu; dynamické aliasy môžu vyžadovať ručné dohľadanie. Historické @require hlavičky v načítanom JS nie sú ďalším automaticky spusteným @require reťazcom.

## Metadata

```json
{}
```

## Funkcie a signatúry

- [L1–206](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_49ban.js#L1) `<anonymous@1>()`; scope `root`.
- [L7–10](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_49ban.js#L7) `detectExpressToken()`; scope `<anonymous@1>`.
- [L9–9](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_49ban.js#L9) `<anonymous@9>(badge)`; scope `<anonymous@1>/detectExpressToken`.
- [L12–14](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_49ban.js#L12) `getZdRoot()`; scope `<anonymous@1>`.
- [L16–30](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_49ban.js#L16) `getRows()`; scope `<anonymous@1>`.
- [L19–29](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_49ban.js#L19) `<anonymous@19>(row)`; scope `<anonymous@1>/getRows`.
- [L25–25](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_49ban.js#L25) `<anonymous@25>(el)`; scope `<anonymous@1>/getRows/<anonymous@19>`.
- [L32–35](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_49ban.js#L32) `rowsByLabel(rows, labels)`; scope `<anonymous@1>`.
- [L34–34](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_49ban.js#L34) `<anonymous@34>(row)`; scope `<anonymous@1>/rowsByLabel`.
- [L34–34](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_49ban.js#L34) `<anonymous@34>(label)`; scope `<anonymous@1>/rowsByLabel/<anonymous@34>`.
- [L37–40](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_49ban.js#L37) `firstValue(rows, labels)`; scope `<anonymous@1>`.
- [L38–38](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_49ban.js#L38) `<anonymous@38>(item)`; scope `<anonymous@1>/firstValue`.
- [L42–44](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_49ban.js#L42) `allValues(rows, labels)`; scope `<anonymous@1>`.
- [L43–43](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_49ban.js#L43) `<anonymous@43>(row)`; scope `<anonymous@1>/allValues`.
- [L46–50](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_49ban.js#L46) `exactValue(rows, labels)`; scope `<anonymous@1>`.
- [L48–48](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_49ban.js#L48) `<anonymous@48>(item)`; scope `<anonymous@1>/exactValue`.
- [L52–55](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_49ban.js#L52) `extractNumber(value)`; scope `<anonymous@1>`.
- [L57–61](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_49ban.js#L57) `parseQuantity(rows)`; scope `<anonymous@1>`.
- [L63–83](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_49ban.js#L63) `parseDimensions(rows)`; scope `<anonymous@1>`.
- [L64–64](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_49ban.js#L64) `<anonymous@64>(item)`; scope `<anonymous@1>/parseDimensions`.
- [L68–73](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_49ban.js#L68) `<anonymous@68>(block)`; scope `<anonymous@1>/parseDimensions`.
- [L85–98](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_49ban.js#L85) `parseRope(rows)`; scope `<anonymous@1>`.
- [L89–89](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_49ban.js#L89) `<anonymous@89>(value)`; scope `<anonymous@1>/parseRope`.
- [L90–90](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_49ban.js#L90) `<anonymous@90>(value)`; scope `<anonymous@1>/parseRope`.
- [L92–92](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_49ban.js#L92) `<anonymous@92>(value)`; scope `<anonymous@1>/parseRope`.
- [L100–102](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_49ban.js#L100) `buildAlias(ropeMark)`; scope `<anonymous@1>`.
- [L104–107](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_49ban.js#L104) `buildLeft(alias, quantity)`; scope `<anonymous@1>`.
- [L109–141](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_49ban.js#L109) `parseDetails()`; scope `<anonymous@1>`.
- [L166–175](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_49ban.js#L166) `match(internalCode, context)`; scope `<anonymous@1>`.
- [L176–204](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_49ban.js#L176) `detect()`; scope `<anonymous@1>`.

## Premenné a pôvodné inicializátory

Dlhé inicializátory sú tu skrátené na 300 znakov; úplné znenie je v inventory.json a v zdroji.

- [L4](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_49ban.js#L4) `const api = window.MaterialDetectorAPI`; scope `<anonymous@1>`.
- [L8](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_49ban.js#L8) `const badges = Array.from(document.querySelectorAll('.badge'))`; scope `<anonymous@1>/detectExpressToken`.
- [L17](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_49ban.js#L17) `const root = getZdRoot()`; scope `<anonymous@1>/getRows`.
- [L20](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_49ban.js#L20) `const cells = row.querySelectorAll(':scope > div')`; scope `<anonymous@1>/getRows/<anonymous@19>`.
- [L22](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_49ban.js#L22) `const rawLabel = api.clean(cells[0].textContent || '')`; scope `<anonymous@1>/getRows/<anonymous@19>`.
- [L23](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_49ban.js#L23) `const blocks = Array.from(cells[1].querySelectorAll('.p-2.border'))`; scope `<anonymous@1>/getRows/<anonymous@19>`.
- [L24](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_49ban.js#L24) `const values = Array.from(cells[1].querySelectorAll('.whitespace-pre-line')) .map(el => api.clean(el.textContent || '')) .filter(Boolean)`; scope `<anonymous@1>/getRows/<anonymous@19>`.
- [L27](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_49ban.js#L27) `const value = values.length ? values.join(' | ') : api.clean(cells[1].textContent || '')`; scope `<anonymous@1>/getRows/<anonymous@19>`.
- [L33](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_49ban.js#L33) `const normalized = labels.map(api.normalizeKey)`; scope `<anonymous@1>/rowsByLabel`.
- [L38](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_49ban.js#L38) `const row = rowsByLabel(rows, labels).find(item => item.value)`; scope `<anonymous@1>/firstValue`.
- [L47](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_49ban.js#L47) `const normalized = labels.map(api.normalizeKey)`; scope `<anonymous@1>/exactValue`.
- [L48](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_49ban.js#L48) `const row = rows.find(item => normalized.includes(item.key) && item.value)`; scope `<anonymous@1>/exactValue`.
- [L53](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_49ban.js#L53) `const match = String(value || '').replace(',', '.').match(/(\d+(?:\.\d+)?)/)`; scope `<anonymous@1>/extractNumber`.
- [L58](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_49ban.js#L58) `const raw = firstValue(rows, ['pocet kusov bannerov', 'pocet kusov'])`; scope `<anonymous@1>/parseQuantity`.
- [L59](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_49ban.js#L59) `const match = String(raw || '').match(/\d+/)`; scope `<anonymous@1>/parseQuantity`.
- [L64](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_49ban.js#L64) `const row = rowsByLabel(rows, ['rozmery']).find(item => item.blocks.length || item.values.length) || null`; scope `<anonymous@1>/parseDimensions`.
- [L66](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_49ban.js#L66) `let widthRaw = ''`; scope `<anonymous@1>/parseDimensions`.
- [L67](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_49ban.js#L67) `let heightRaw = ''`; scope `<anonymous@1>/parseDimensions`.
- [L69](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_49ban.js#L69) `const label = api.normalizeKey(block.querySelector('em')?.textContent || '')`; scope `<anonymous@1>/parseDimensions/<anonymous@68>`.
- [L70](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_49ban.js#L70) `const value = api.clean(block.querySelector('.whitespace-pre-line')?.textContent || block.textContent || '')`; scope `<anonymous@1>/parseDimensions/<anonymous@68>`.
- [L78](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_49ban.js#L78) `const widthCm = extractNumber(widthRaw)`; scope `<anonymous@1>/parseDimensions`.
- [L79](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_49ban.js#L79) `const heightCm = extractNumber(heightRaw)`; scope `<anonymous@1>/parseDimensions`.
- [L80](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_49ban.js#L80) `const sizeAlias = widthCm && heightCm ? api.parseSizeAlias('${widthCm}x${heightCm} cm') : ''`; scope `<anonymous@1>/parseDimensions`.
- [L81](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_49ban.js#L81) `const size = api.stripSizeUnitSuffix(sizeAlias)`; scope `<anonymous@1>/parseDimensions`.
- [L86](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_49ban.js#L86) `const values = allValues(rows, ['napinacie lano'])`; scope `<anonymous@1>/parseRope`.
- [L87](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_49ban.js#L87) `const raw = values.join(' | ')`; scope `<anonymous@1>/parseRope`.
- [L88](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_49ban.js#L88) `const normalizedValues = values.map(api.normalizeKey)`; scope `<anonymous@1>/parseRope`.
- [L89](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_49ban.js#L89) `const enabled = normalizedValues.some(value => value.includes('chcem') && value.includes('lano'))`; scope `<anonymous@1>/parseRope`.
- [L90](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_49ban.js#L90) `const disabled = normalizedValues.some(value => value.includes('bez'))`; scope `<anonymous@1>/parseRope`.
- [L92](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_49ban.js#L92) `const numericRaw = values.find(value => /\d/.test(value)) || ''`; scope `<anonymous@1>/parseRope`.
- [L93](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_49ban.js#L93) `const meters = (String(numericRaw).replace(',', '.').match(/(\d+(?:\.\d+)?)\s*m\b/i) || [])[1] || (String(numericRaw).replace(',', '.').match(/\b(\d+(?:\.\d+)?)\b/) || [])[1] || ''`; scope `<anonymous@1>/parseRope`.
- [L96](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_49ban.js#L96) `const cleanMeters = meters ? String(Number(meters)).replace('.', ',') : ''`; scope `<anonymous@1>/parseRope`.
- [L105](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_49ban.js#L105) `const qty = parseInt(quantity, 10)`; scope `<anonymous@1>/buildLeft`.
- [L110](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_49ban.js#L110) `const rows = getRows()`; scope `<anonymous@1>/parseDetails`.
- [L111](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_49ban.js#L111) `const dimensions = parseDimensions(rows)`; scope `<anonymous@1>/parseDetails`.
- [L112](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_49ban.js#L112) `const rope = parseRope(rows)`; scope `<anonymous@1>/parseDetails`.
- [L113](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_49ban.js#L113) `const quantity = parseQuantity(rows)`; scope `<anonymous@1>/parseDetails`.
- [L114](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_49ban.js#L114) `const eyeletValues = allValues(rows, ['ockovanie'])`; scope `<anonymous@1>/parseDetails`.
- [L115](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_49ban.js#L115) `const gluingValues = allValues(rows, ['lepenie'])`; scope `<anonymous@1>/parseDetails`.
- [L116](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_49ban.js#L116) `const details = { type: exactValue(rows, ['typ']), bannerType: exactValue(rows, ['typ']), material: firstValue(rows, ['material banneru']), graphicDesign: firstValue(rows, ['graficky navrh']), uploadFiles: firstValue(rows, ['subory', 'nahrajte subor', 'nahrat subor']), eyelet: eyeletValues[0] || '',`; scope `<anonymous@1>/parseDetails`.
- [L167](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_49ban.js#L167) `const code = String(internalCode || '').toLowerCase()`; scope `<anonymous@1>/match`.
- [L169](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_49ban.js#L169) `const text = api.normalizeKey((context && context.productText) || '')`; scope `<anonymous@1>/match`.
- [L177](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_49ban.js#L177) `const details = parseDetails()`; scope `<anonymous@1>/detect`.
- [L178](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_49ban.js#L178) `const express = detectExpressToken()`; scope `<anonymous@1>/detect`.
- [L179](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_49ban.js#L179) `const alias = details.alias || 'ban'`; scope `<anonymous@1>/detect`.
- [L180](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_49ban.js#L180) `const left = buildLeft(alias, details.quantity)`; scope `<anonymous@1>/detect`.
- [L181](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_49ban.js#L181) `const quantity = details.quantity ? '${details.quantity}ks' : '1ks'`; scope `<anonymous@1>/detect`.

## storage

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## events

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## lifecycle

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## io

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## dom-read

- [L1](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_49ban.js#L1) `function () { 'use strict'; const api = window.MaterialDetectorAPI; if (!api) return; function detectExpressToken() { const badges = Array.from(document.querySelectorAll('.badge')); return badges.some(badge => api.clean(badge.textContent).toUpperCase() === 'EXPR') ? 'EXPR' : ''; } function getZdRoot`; scope `root`.
- [L8](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_49ban.js#L8) `document.querySelectorAll('.badge')`; scope `<anonymous@1>/detectExpressToken`.
- [L13](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_49ban.js#L13) `document.querySelector('#zd-form-container #VPZDParams')`; scope `<anonymous@1>/getZdRoot`.
- [L19](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_49ban.js#L19) `Array.from(root.querySelectorAll(':scope > div.flex')).map(row => { const cells = row.querySelectorAll(':scope > div'); if (cells.length < 2) return null; const rawLabel = api.clean(cells[0].textContent || ''); const blocks = Array.from(cells[1].querySelectorAll('.p-2.border')); const values = Array`; scope `<anonymous@1>/getRows`.
- [L19](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_49ban.js#L19) `Array.from(root.querySelectorAll(':scope > div.flex')).map(row => { const cells = row.querySelectorAll(':scope > div'); if (cells.length < 2) return null; const rawLabel = api.clean(cells[0].textContent || ''); const blocks = Array.from(cells[1].querySelectorAll('.p-2.border')); const values = Array`; scope `<anonymous@1>/getRows`.
- [L19](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_49ban.js#L19) `root.querySelectorAll(':scope > div.flex')`; scope `<anonymous@1>/getRows`.
- [L20](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_49ban.js#L20) `row.querySelectorAll(':scope > div')`; scope `<anonymous@1>/getRows/<anonymous@19>`.
- [L23](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_49ban.js#L23) `cells[1].querySelectorAll('.p-2.border')`; scope `<anonymous@1>/getRows/<anonymous@19>`.
- [L24](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_49ban.js#L24) `Array.from(cells[1].querySelectorAll('.whitespace-pre-line')) .map(el => api.clean(el.textContent || '')) .filter(Boolean)`; scope `<anonymous@1>/getRows/<anonymous@19>`.
- [L24](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_49ban.js#L24) `Array.from(cells[1].querySelectorAll('.whitespace-pre-line')) .map(el => api.clean(el.textContent || ''))`; scope `<anonymous@1>/getRows/<anonymous@19>`.
- [L24](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_49ban.js#L24) `cells[1].querySelectorAll('.whitespace-pre-line')`; scope `<anonymous@1>/getRows/<anonymous@19>`.
- [L69](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_49ban.js#L69) `block.querySelector('em')`; scope `<anonymous@1>/parseDimensions/<anonymous@68>`.
- [L70](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_49ban.js#L70) `block.querySelector('.whitespace-pre-line')`; scope `<anonymous@1>/parseDimensions/<anonymous@68>`.

## dom-write

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## logs

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## Zápisy do globálov, DOM a ostatných vlastností
