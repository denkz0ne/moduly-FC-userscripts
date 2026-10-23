# service-catalog/detectors/detector_49s.js

Zdroj: service-catalog/detectors/detector_49s.js; referencia: 75087f8c4cbd34190e69318038bda6ef36eee0f2.
SHA-256: `76a364a7a74265fc456edaad104335986c741e54efbbfa7440b13845864b3cf2`. Riadkov: 236.

AST inventár: obsahuje aj vnorené/anonýmne funkcie a lokálne premenné. Zoznam premenných nie je zoznam editovateľných nastavení. Volania sú klasifikované podľa názvu; dynamické aliasy môžu vyžadovať ručné dohľadanie. Historické @require hlavičky v načítanom JS nie sú ďalším automaticky spusteným @require reťazcom.

## Metadata

```json
{}
```

## Funkcie a signatúry

- [L1–235](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_49s.js#L1) `<anonymous@1>()`; scope `root`.
- [L7–10](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_49s.js#L7) `detectExpressToken()`; scope `<anonymous@1>`.
- [L9–9](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_49s.js#L9) `<anonymous@9>(badge)`; scope `<anonymous@1>/detectExpressToken`.
- [L12–14](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_49s.js#L12) `getZdRoot()`; scope `<anonymous@1>`.
- [L16–29](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_49s.js#L16) `getRows()`; scope `<anonymous@1>`.
- [L19–28](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_49s.js#L19) `<anonymous@19>(row)`; scope `<anonymous@1>/getRows`.
- [L24–24](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_49s.js#L24) `<anonymous@24>(el)`; scope `<anonymous@1>/getRows/<anonymous@19>`.
- [L31–34](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_49s.js#L31) `firstRow(rows, labels)`; scope `<anonymous@1>`.
- [L33–33](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_49s.js#L33) `<anonymous@33>(row)`; scope `<anonymous@1>/firstRow`.
- [L33–33](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_49s.js#L33) `<anonymous@33>(label)`; scope `<anonymous@1>/firstRow/<anonymous@33>`.
- [L36–39](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_49s.js#L36) `exactRow(rows, labels)`; scope `<anonymous@1>`.
- [L38–38](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_49s.js#L38) `<anonymous@38>(row)`; scope `<anonymous@1>/exactRow`.
- [L41–44](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_49s.js#L41) `allRows(rows, labels)`; scope `<anonymous@1>`.
- [L43–43](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_49s.js#L43) `<anonymous@43>(row)`; scope `<anonymous@1>/allRows`.
- [L43–43](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_49s.js#L43) `<anonymous@43>(label)`; scope `<anonymous@1>/allRows/<anonymous@43>`.
- [L46–52](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_49s.js#L46) `extractCode(valueCell)`; scope `<anonymous@1>`.
- [L49–49](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_49s.js#L49) `<anonymous@49>(el)`; scope `<anonymous@1>/extractCode`.
- [L54–57](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_49s.js#L54) `extractNumber(value)`; scope `<anonymous@1>`.
- [L59–61](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_49s.js#L59) `valueOf(row)`; scope `<anonymous@1>`.
- [L63–65](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_49s.js#L63) `codeOf(row)`; scope `<anonymous@1>`.
- [L67–71](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_49s.js#L67) `parseQuantity(rows)`; scope `<anonymous@1>`.
- [L73–77](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_49s.js#L73) `parseCutCount(rows)`; scope `<anonymous@1>`.
- [L79–106](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_49s.js#L79) `parseStickerSize(rows)`; scope `<anonymous@1>`.
- [L81–81](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_49s.js#L81) `<anonymous@81>(row)`; scope `<anonymous@1>/parseStickerSize`.
- [L81–81](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_49s.js#L81) `<anonymous@81>(value)`; scope `<anonymous@1>/parseStickerSize/<anonymous@81>`.
- [L82–82](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_49s.js#L82) `<anonymous@82>(row)`; scope `<anonymous@1>/parseStickerSize`.
- [L82–82](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_49s.js#L82) `<anonymous@82>(value)`; scope `<anonymous@1>/parseStickerSize/<anonymous@82>`.
- [L83–83](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_49s.js#L83) `<anonymous@83>(row)`; scope `<anonymous@1>/parseStickerSize`.
- [L83–83](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_49s.js#L83) `<anonymous@83>(value)`; scope `<anonymous@1>/parseStickerSize/<anonymous@83>`.
- [L108–112](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_49s.js#L108) `finishAlias(normalized, prefix)`; scope `<anonymous@1>`.
- [L114–120](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_49s.js#L114) `foilMaterialAlias(material, code)`; scope `<anonymous@1>`.
- [L122–129](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_49s.js#L122) `foilAlias(raw)`; scope `<anonymous@1>`.
- [L131–133](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_49s.js#L131) `cutMark(cutting)`; scope `<anonymous@1>`.
- [L135–139](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_49s.js#L135) `buildLeft(alias, quantity, marker)`; scope `<anonymous@1>`.
- [L141–174](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_49s.js#L141) `parseDetails()`; scope `<anonymous@1>`.
- [L144–144](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_49s.js#L144) `<anonymous@144>(row)`; scope `<anonymous@1>/parseDetails`.
- [L200–203](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_49s.js#L200) `match(internalCode)`; scope `<anonymous@1>`.
- [L204–233](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_49s.js#L204) `detect()`; scope `<anonymous@1>`.

## Premenné a pôvodné inicializátory

Dlhé inicializátory sú tu skrátené na 300 znakov; úplné znenie je v inventory.json a v zdroji.

- [L4](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_49s.js#L4) `const api = window.MaterialDetectorNextAPI`; scope `<anonymous@1>`.
- [L8](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_49s.js#L8) `const badges = Array.from(document.querySelectorAll('.badge'))`; scope `<anonymous@1>/detectExpressToken`.
- [L17](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_49s.js#L17) `const root = getZdRoot()`; scope `<anonymous@1>/getRows`.
- [L20](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_49s.js#L20) `const cells = row.querySelectorAll(':scope > div')`; scope `<anonymous@1>/getRows/<anonymous@19>`.
- [L22](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_49s.js#L22) `const rawLabel = api.clean(cells[0].textContent || '')`; scope `<anonymous@1>/getRows/<anonymous@19>`.
- [L23](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_49s.js#L23) `const values = Array.from(cells[1].querySelectorAll('.whitespace-pre-line')) .map(el => api.clean(el.textContent || '')) .filter(Boolean)`; scope `<anonymous@1>/getRows/<anonymous@19>`.
- [L26](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_49s.js#L26) `const value = values.length ? values.join(' | ') : api.clean(cells[1].textContent || '')`; scope `<anonymous@1>/getRows/<anonymous@19>`.
- [L32](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_49s.js#L32) `const normalized = labels.map(api.normalizeKey)`; scope `<anonymous@1>/firstRow`.
- [L37](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_49s.js#L37) `const normalized = labels.map(api.normalizeKey)`; scope `<anonymous@1>/exactRow`.
- [L42](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_49s.js#L42) `const normalized = labels.map(api.normalizeKey)`; scope `<anonymous@1>/allRows`.
- [L48](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_49s.js#L48) `const codeEl = Array.from(valueCell.querySelectorAll('.text-gray, [class*="text-gray"]')) .find(el => /#?FV\w+/i.test(el.textContent || ''))`; scope `<anonymous@1>/extractCode`.
- [L50](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_49s.js#L50) `const match = (codeEl ? codeEl.textContent : valueCell.textContent || '').match(/#?\s*([A-Z]{1,4}\d{2,6})/i)`; scope `<anonymous@1>/extractCode`.
- [L55](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_49s.js#L55) `const match = String(value || '').replace(',', '.').match(/(\d+(?:\.\d+)?)/)`; scope `<anonymous@1>/extractNumber`.
- [L68](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_49s.js#L68) `const row = exactRow(rows, ['pocet kusov'])`; scope `<anonymous@1>/parseQuantity`.
- [L69](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_49s.js#L69) `const match = String(valueOf(row)).match(/\d+/)`; scope `<anonymous@1>/parseQuantity`.
- [L74](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_49s.js#L74) `const row = firstRow(rows, ['pocet rezov na format', 'pocet rezov'])`; scope `<anonymous@1>/parseCutCount`.
- [L75](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_49s.js#L75) `const match = String(valueOf(row)).match(/\d+/)`; scope `<anonymous@1>/parseCutCount`.
- [L80](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_49s.js#L80) `const sizeRows = allRows(rows, ['rozmer samolepky'])`; scope `<anonymous@1>/parseStickerSize`.
- [L81](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_49s.js#L81) `const dimensionRow = sizeRows.find(row => row.values.some(value => /\bmm\b/i.test(value))) || null`; scope `<anonymous@1>/parseStickerSize`.
- [L82](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_49s.js#L82) `const modeRow = sizeRows.find(row => row.values.some(value => !/\b(mm|rol|m2)\b/i.test(value))) || null`; scope `<anonymous@1>/parseStickerSize`.
- [L83](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_49s.js#L83) `const rollRow = sizeRows.find(row => row.values.some(value => /\brol\b/i.test(value))) || null`; scope `<anonymous@1>/parseStickerSize`.
- [L84](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_49s.js#L84) `const values = dimensionRow ? dimensionRow.values : []`; scope `<anonymous@1>/parseStickerSize`.
- [L85](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_49s.js#L85) `const widthRaw = values[0] || ''`; scope `<anonymous@1>/parseStickerSize`.
- [L86](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_49s.js#L86) `const heightRaw = values[1] || ''`; scope `<anonymous@1>/parseStickerSize`.
- [L87](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_49s.js#L87) `const widthMm = extractNumber(widthRaw)`; scope `<anonymous@1>/parseStickerSize`.
- [L88](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_49s.js#L88) `const heightMm = extractNumber(heightRaw)`; scope `<anonymous@1>/parseStickerSize`.
- [L89](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_49s.js#L89) `const sizeAlias = widthMm && heightMm ? api.parseSizeAlias('${widthMm}x${heightMm} mm') : api.detectUniversalSizeAlias()`; scope `<anonymous@1>/parseStickerSize`.
- [L90](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_49s.js#L90) `const size = api.stripSizeUnitSuffix(sizeAlias)`; scope `<anonymous@1>/parseStickerSize`.
- [L91](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_49s.js#L91) `const parts = size.match(/^(\d+(?:[,.]\d+)?)x(\d+(?:[,.]\d+)?)$/)`; scope `<anonymous@1>/parseStickerSize`.
- [L115](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_49s.js#L115) `const normalized = api.normalizeKey('${material || ''} ${code || ''}')`; scope `<anonymous@1>/foilMaterialAlias`.
- [L123](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_49s.js#L123) `const normalized = api.normalizeKey(raw)`; scope `<anonymous@1>/foilAlias`.
- [L136](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_49s.js#L136) `const base = '${alias}${marker || ''}'`; scope `<anonymous@1>/buildLeft`.
- [L137](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_49s.js#L137) `const qty = parseInt(quantity, 10)`; scope `<anonymous@1>/buildLeft`.
- [L142](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_49s.js#L142) `const rows = getRows()`; scope `<anonymous@1>/parseDetails`.
- [L143](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_49s.js#L143) `const foilGroupRow = firstRow(rows, ['druhy folii'])`; scope `<anonymous@1>/parseDetails`.
- [L144](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_49s.js#L144) `const selectedFoilRow = rows.find(row => row.key.startsWith('druhy folii -')) || null`; scope `<anonymous@1>/parseDetails`.
- [L145](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_49s.js#L145) `const size = parseStickerSize(rows)`; scope `<anonymous@1>/parseDetails`.
- [L146](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_49s.js#L146) `const quantity = parseQuantity(rows)`; scope `<anonymous@1>/parseDetails`.
- [L147](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_49s.js#L147) `const cutCount = parseCutCount(rows)`; scope `<anonymous@1>/parseDetails`.
- [L148](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_49s.js#L148) `const foilType = valueOf(foilGroupRow)`; scope `<anonymous@1>/parseDetails`.
- [L149](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_49s.js#L149) `const foilMaterial = valueOf(selectedFoilRow)`; scope `<anonymous@1>/parseDetails`.
- [L150](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_49s.js#L150) `const foilMaterialCode = codeOf(selectedFoilRow)`; scope `<anonymous@1>/parseDetails`.
- [L151](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_49s.js#L151) `const cutting = valueOf(exactRow(rows, ['rezanie']))`; scope `<anonymous@1>/parseDetails`.
- [L152](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_49s.js#L152) `const aliasSource = [foilMaterial, foilType, selectedFoilRow && selectedFoilRow.label].filter(Boolean).join(' ')`; scope `<anonymous@1>/parseDetails`.
- [L153](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_49s.js#L153) `const alias = foilMaterialAlias(foilMaterial, foilMaterialCode) || foilAlias(aliasSource)`; scope `<anonymous@1>/parseDetails`.
- [L155](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_49s.js#L155) `const details = { stickerKind: valueOf(firstRow(rows, ['druh samolepiek'])), note: valueOf(exactRow(rows, ['poznamka'])), foilType, foilAlias: alias, foilMaterial, foilMaterialCode, printType: valueOf(exactRow(rows, ['tlac'])), printArea: valueOf(firstRow(rows, ['vypocitane pole tlac'])), uploadFile`; scope `<anonymous@1>/parseDetails`.
- [L201](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_49s.js#L201) `const code = String(internalCode || '').toLowerCase()`; scope `<anonymous@1>/match`.
- [L205](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_49s.js#L205) `const details = parseDetails()`; scope `<anonymous@1>/detect`.
- [L206](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_49s.js#L206) `const express = detectExpressToken()`; scope `<anonymous@1>/detect`.
- [L207](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_49s.js#L207) `const alias = details.foilAlias || 'samol'`; scope `<anonymous@1>/detect`.
- [L208](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_49s.js#L208) `const leftAlias = '${alias}${details.cutMark || ''}'`; scope `<anonymous@1>/detect`.
- [L209](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_49s.js#L209) `const left = buildLeft(alias, details.quantity, details.cutMark)`; scope `<anonymous@1>/detect`.
- [L210](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_49s.js#L210) `const quantity = details.quantity ? '${details.quantity}ks' : '1ks'`; scope `<anonymous@1>/detect`.

## storage

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## events

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## lifecycle

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## io

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## dom-read

- [L1](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_49s.js#L1) `function () { 'use strict'; const api = window.MaterialDetectorNextAPI; if (!api) return; function detectExpressToken() { const badges = Array.from(document.querySelectorAll('.badge')); return badges.some(badge => api.clean(badge.textContent).toUpperCase() === 'EXPR') ? 'EXPR' : ''; } function getZd`; scope `root`.
- [L8](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_49s.js#L8) `document.querySelectorAll('.badge')`; scope `<anonymous@1>/detectExpressToken`.
- [L13](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_49s.js#L13) `document.querySelector('#zd-form-container #VPZDParams')`; scope `<anonymous@1>/getZdRoot`.
- [L19](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_49s.js#L19) `Array.from(root.querySelectorAll(':scope > div.flex')).map(row => { const cells = row.querySelectorAll(':scope > div'); if (cells.length < 2) return null; const rawLabel = api.clean(cells[0].textContent || ''); const values = Array.from(cells[1].querySelectorAll('.whitespace-pre-line')) .map(el => a`; scope `<anonymous@1>/getRows`.
- [L19](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_49s.js#L19) `Array.from(root.querySelectorAll(':scope > div.flex')).map(row => { const cells = row.querySelectorAll(':scope > div'); if (cells.length < 2) return null; const rawLabel = api.clean(cells[0].textContent || ''); const values = Array.from(cells[1].querySelectorAll('.whitespace-pre-line')) .map(el => a`; scope `<anonymous@1>/getRows`.
- [L19](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_49s.js#L19) `root.querySelectorAll(':scope > div.flex')`; scope `<anonymous@1>/getRows`.
- [L20](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_49s.js#L20) `row.querySelectorAll(':scope > div')`; scope `<anonymous@1>/getRows/<anonymous@19>`.
- [L23](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_49s.js#L23) `Array.from(cells[1].querySelectorAll('.whitespace-pre-line')) .map(el => api.clean(el.textContent || '')) .filter(Boolean)`; scope `<anonymous@1>/getRows/<anonymous@19>`.
- [L23](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_49s.js#L23) `Array.from(cells[1].querySelectorAll('.whitespace-pre-line')) .map(el => api.clean(el.textContent || ''))`; scope `<anonymous@1>/getRows/<anonymous@19>`.
- [L23](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_49s.js#L23) `cells[1].querySelectorAll('.whitespace-pre-line')`; scope `<anonymous@1>/getRows/<anonymous@19>`.
- [L48](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_49s.js#L48) `Array.from(valueCell.querySelectorAll('.text-gray, [class*="text-gray"]')) .find(el => /#?FV\w+/i.test(el.textContent || ''))`; scope `<anonymous@1>/extractCode`.
- [L48](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/detectors/detector_49s.js#L48) `valueCell.querySelectorAll('.text-gray, [class*="text-gray"]')`; scope `<anonymous@1>/extractCode`.

## dom-write

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## logs

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## Zápisy do globálov, DOM a ostatných vlastností
