# M2 + A4 kalkulačka

Zdroj: AreaCalc.user.js; referencia: 75087f8c4cbd34190e69318038bda6ef36eee0f2.
SHA-256: `5db5d3c4ea352ee4fbd59a29f3d660df8e4221d51abc9356e55d9338c6ddd1ce`. Riadkov: 556.

AST inventár: obsahuje aj vnorené/anonýmne funkcie a lokálne premenné. Zoznam premenných nie je zoznam editovateľných nastavení. Volania sú klasifikované podľa názvu; dynamické aliasy môžu vyžadovať ručné dohľadanie. Historické @require hlavičky v načítanom JS nie sú ďalším automaticky spusteným @require reťazcom.

## Metadata

```json
{
  "name": [
    "M2 + A4 kalkulačka"
  ],
  "namespace": [
    "faxcopy-userscripts"
  ],
  "author": [
    "mato e."
  ],
  "version": [
    "1.11"
  ],
  "description": [
    "Kalkulačka m2 a A4 pre exporty, rozmery a zadané plochy"
  ],
  "updateURL": [
    "https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/AreaCalc.user.js"
  ],
  "downloadURL": [
    "https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/AreaCalc.user.js"
  ],
  "match": [
    "https://moduly.faxcopy.sk/vyrobne_prikazy/detail/index/*"
  ],
  "run-at": [
    "document-end"
  ]
}
```

## Funkcie a signatúry

- [L14–555](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L14) `<anonymous@14>()`; scope `root`.
- [L32–38](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L32) `normalizeNumber(v)`; scope `<anonymous@14>`.
- [L40–43](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L40) `isPositiveNumber(value)`; scope `<anonymous@14>`.
- [L45–58](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L45) `unitToMm(value, unit)`; scope `<anonymous@14>`.
- [L65–85](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L65) `extractQty(line)`; scope `<anonymous@14>`.
- [L90–133](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L90) `parsePdfExport(line)`; scope `<anonymous@14>`.
- [L135–161](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L135) `parseArea(line)`; scope `<anonymous@14>`.
- [L166–223](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L166) `parseFreeform(line)`; scope `<anonymous@14>`.
- [L228–230](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L228) `parseLine(line)`; scope `<anonymous@14>`.
- [L235–247](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L235) `calc(item)`; scope `<anonymous@14>`.
- [L252–280](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L252) `addPanelStyles()`; scope `<anonymous@14>`.
- [L282–290](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L282) `findActivitySection()`; scope `<anonymous@14>`.
- [L284–284](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L284) `<anonymous@284>(node)`; scope `<anonymous@14>/findActivitySection`.
- [L292–312](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L292) `mountPanel(panel)`; scope `<anonymous@14>`.
- [L296–298](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L296) `<anonymous@296>(name)`; scope `<anonymous@14>/mountPanel`.
- [L299–301](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L299) `<anonymous@299>(name)`; scope `<anonymous@14>/mountPanel`.
- [L314–321](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L314) `setPanelOpen(panel, open)`; scope `<anonymous@14>`.
- [L323–384](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L323) `createPanel()`; scope `<anonymous@14>`.
- [L326–326](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L326) `<anonymous@326>()`; scope `<anonymous@14>/createPanel`.
- [L362–362](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L362) `closePanel()`; scope `<anonymous@14>/createPanel`.
- [L364–367](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L364) `<anonymous@364>()`; scope `<anonymous@14>/createPanel`.
- [L368–372](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L368) `<anonymous@368>()`; scope `<anonymous@14>/createPanel`.
- [L370–370](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L370) `<anonymous@370>(value)`; scope `<anonymous@14>/createPanel/<anonymous@368>`.
- [L373–375](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L373) `<anonymous@373>(event)`; scope `<anonymous@14>/createPanel`.
- [L378–380](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L378) `<anonymous@378>()`; scope `<anonymous@14>/createPanel`.
- [L383–383](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L383) `<anonymous@383>()`; scope `<anonymous@14>/createPanel`.
- [L387–483](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L387) `renderResults(items, container)`; scope `<anonymous@14>`.
- [L408–428](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L408) `<anonymous@408>(item, index)`; scope `<anonymous@14>/renderResults`.
- [L436–472](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L436) `recalc()`; scope `<anonymous@14>/renderResults`.
- [L441–464](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L441) `<anonymous@441>(item, index)`; scope `<anonymous@14>/renderResults/recalc`.
- [L475–478](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L475) `<anonymous@475>(input)`; scope `<anonymous@14>/renderResults`.
- [L488–526](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L488) `createButton(togglePanel)`; scope `<anonymous@14>`.
- [L513–521](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L513) `<anonymous@513>(e)`; scope `<anonymous@14>/createButton`.
- [L531–550](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L531) `init()`; scope `<anonymous@14>`.
- [L537–545](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L537) `<anonymous@537>()`; scope `<anonymous@14>/init`.

## Premenné a pôvodné inicializátory

Dlhé inicializátory sú tu skrátené na 300 znakov; úplné znenie je v inventory.json a v zdroji.

- [L18](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L18) `const A4_AREA = 0.06237`; scope `<anonymous@14>`.
- [L20](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L20) `const PAPER_FORMATS = { A0: [841, 1189], A1: [594, 841], A2: [420, 594], A3: [297, 420], A4: [210, 297], A5: [148, 210] }`; scope `<anonymous@14>`.
- [L67](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L67) `const matches = [ ...line.matchAll( /(\d+(?:[\.,]\d+)?)\s*(x|ks|kus|pcs)\b/gi ) ]`; scope `<anonymous@14>/extractQty`.
- [L77](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L77) `const last = matches[matches.length - 1]`; scope `<anonymous@14>/extractQty`.
- [L92](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L92) `const parts = line.replace(/\r$/, '').split('\t')`; scope `<anonymous@14>/parsePdfExport`.
- [L98](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L98) `let widthIndex = 1`; scope `<anonymous@14>/parsePdfExport`.
- [L99](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L99) `let heightIndex = 2`; scope `<anonymous@14>/parsePdfExport`.
- [L120](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L120) `const width = normalizeNumber(parts[widthIndex])`; scope `<anonymous@14>/parsePdfExport`.
- [L121](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L121) `const height = normalizeNumber(parts[heightIndex])`; scope `<anonymous@14>/parsePdfExport`.
- [L137](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L137) `const match = line.match( /(\d+(?:[.,]\d+)?)\s*(mm(?:2|²)|cm(?:2|²)|sqm|m(?:2|²))(?![a-z])/i )`; scope `<anonymous@14>/parseArea`.
- [L145](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L145) `const value = normalizeNumber(match[1])`; scope `<anonymous@14>/parseArea`.
- [L146](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L146) `const unit = match[2].toLowerCase().replace('²', '2')`; scope `<anonymous@14>/parseArea`.
- [L147](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L147) `const areaM2 = unit.startsWith('mm') ? value / 1000000 : unit.startsWith('cm') ? value / 10000 : value`; scope `<anonymous@14>/parseArea`.
- [L168](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L168) `const clean = line .replace(/,/g, '.') .replace(/\s+/g, ' ') .trim()`; scope `<anonymous@14>/parseFreeform`.
- [L176](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L176) `const paperMatch = clean.match(/\b(A[0-5])\b/i)`; scope `<anonymous@14>/parseFreeform`.
- [L180](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L180) `const format = paperMatch[1].toUpperCase()`; scope `<anonymous@14>/parseFreeform`.
- [L181](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L181) `const size = PAPER_FORMATS[format]`; scope `<anonymous@14>/parseFreeform`.
- [L201](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L201) `const dimMatch = clean.match( /(\d+(?:[\.,]\d+)?)\s*(mm|cm|m)?\s*[x×*]\s*(\d+(?:[\.,]\d+)?)\s*(mm|cm|m)?/i )`; scope `<anonymous@14>/parseFreeform`.
- [L209](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L209) `const w = normalizeNumber(dimMatch[1])`; scope `<anonymous@14>/parseFreeform`.
- [L210](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L210) `const h = normalizeNumber(dimMatch[3])`; scope `<anonymous@14>/parseFreeform`.
- [L212](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L212) `const wu = dimMatch[2] || dimMatch[4] || 'cm'`; scope `<anonymous@14>/parseFreeform`.
- [L213](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L213) `const hu = dimMatch[4] || dimMatch[2] || 'cm'`; scope `<anonymous@14>/parseFreeform`.
- [L214](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L214) `const qtyText = clean.slice(0, dimMatch.index) + clean.slice(dimMatch.index + dimMatch[0].length)`; scope `<anonymous@14>/parseFreeform`.
- [L237](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L237) `const m2 = item.areaM2 != null ? item.areaM2 : (item.width * item.height) / 1000000`; scope `<anonymous@14>/calc`.
- [L241](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L241) `const a4 = m2 / A4_AREA`; scope `<anonymous@14>/calc`.
- [L254](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L254) `const style = document.createElement('style')`; scope `<anonymous@14>/addPanelStyles`.
- [L283](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L283) `const heading = Array.from(document.querySelectorAll('h1,h2,h3,h4,.box-head,.box-title,.box_header')) .find(node => String(node.textContent || '').replace(/\s+/g, ' ').trim().toLocaleUpperCase('sk') === 'AKTIVITY')`; scope `<anonymous@14>/findActivitySection`.
- [L293](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L293) `const section = findActivitySection()`; scope `<anonymous@14>/mountPanel`.
- [L315](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L315) `const isOpen = !!open`; scope `<anonymous@14>/setPanelOpen`.
- [L319](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L319) `const button = document.querySelector('#m2CalcButton')`; scope `<anonymous@14>/setPanelOpen`.
- [L325](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L325) `let panel = document.querySelector('#area-calc-panel')`; scope `<anonymous@14>/createPanel`.
- [L335](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L335) `const shell = document.createElement('div')`; scope `<anonymous@14>/createPanel`.
- [L362](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L362) `const closePanel = () => setPanelOpen(panel, false)`; scope `<anonymous@14>/createPanel`.
- [L369](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L369) `const lines = shell.querySelector('#m2CalcInput').value .split('\n').map(value => value.trim()).filter(Boolean)`; scope `<anonymous@14>/createPanel/<anonymous@368>`.
- [L378](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L378) `const observer = new MutationObserver(() => { if (mountPanel(panel)) observer.disconnect(); })`; scope `<anonymous@14>/createPanel`.
- [L390](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L390) `const error = document.createElement('div')`; scope `<anonymous@14>/renderResults`.
- [L399](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L399) `const table = document.createElement('table')`; scope `<anonymous@14>/renderResults`.
- [L406](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L406) `const tbody = table.querySelector('tbody')`; scope `<anonymous@14>/renderResults`.
- [L410](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L410) `const values = calc(item)`; scope `<anonymous@14>/renderResults/<anonymous@408>`.
- [L412](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L412) `const row = document.createElement('tr')`; scope `<anonymous@14>/renderResults/<anonymous@408>`.
- [L419](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L419) `const qtyInput = row.querySelector('.m2QtyInput')`; scope `<anonymous@14>/renderResults/<anonymous@408>`.
- [L432](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L432) `const summary = document.createElement('div')`; scope `<anonymous@14>/renderResults`.
- [L438](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L438) `let totalM2 = 0`; scope `<anonymous@14>/renderResults/recalc`.
- [L439](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L439) `let totalA4 = 0`; scope `<anonymous@14>/renderResults/recalc`.
- [L443](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L443) `const input = container.querySelector( '.m2QtyInput[data-index="${index}"]' )`; scope `<anonymous@14>/renderResults/recalc/<anonymous@441>`.
- [L452](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L452) `const values = calc(item)`; scope `<anonymous@14>/renderResults/recalc/<anonymous@441>`.
- [L494](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L494) `const panel = document.querySelector('#fc-userscripts-action-panel')`; scope `<anonymous@14>/createButton`.
- [L497](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L497) `const button = document.createElement('button')`; scope `<anonymous@14>/createButton`.
- [L533](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L533) `const togglePanel = createPanel()`; scope `<anonymous@14>/init`.
- [L535](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L535) `let tries = 0`; scope `<anonymous@14>/init`.
- [L537](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L537) `const interval = setInterval(() => { tries++; if (createButton(togglePanel) || tries > 30) { clearInterval(interval); } }, 500)`; scope `<anonymous@14>/init`.

## storage

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## events

- [L14](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L14) `function () { 'use strict'; const A4_AREA = 0.06237; const PAPER_FORMATS = { A0: [841, 1189], A1: [594, 841], A2: [420, 594], A3: [297, 420], A4: [210, 297], A5: [148, 210] }; // // HELPERS // function normalizeNumber(v) { return parseFloat( String(v) .replace(',', '.') .trim() ); } function isPosit`; scope `root`.
- [L363](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L363) `shell.querySelector('.area-calc-close').addEventListener('click', closePanel)`; scope `<anonymous@14>/createPanel`.
- [L364](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L364) `shell.querySelector('#m2CalcClear').addEventListener('click', () => { shell.querySelector('#m2CalcInput').value = ''; shell.querySelector('#m2CalcResults').replaceChildren(); })`; scope `<anonymous@14>/createPanel`.
- [L368](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L368) `shell.querySelector('#m2CalcRun').addEventListener('click', () => { const lines = shell.querySelector('#m2CalcInput').value .split('\n').map(value => value.trim()).filter(Boolean); renderResults(lines.map(parseLine).filter(Boolean), shell.querySelector('#m2CalcResults')); })`; scope `<anonymous@14>/createPanel`.
- [L373](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L373) `document.addEventListener('keydown', event => { if (event.key === 'Escape' && panel.dataset.open === 'true') closePanel(); })`; scope `<anonymous@14>/createPanel`.
- [L477](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L477) `input.addEventListener('input', recalc)`; scope `<anonymous@14>/renderResults/<anonymous@475>`.
- [L513](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L513) `button.addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation(); e.stopImmediatePropagation(); togglePanel(); }, true)`; scope `<anonymous@14>/createButton`.
- [L553](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L553) `window.addEventListener('load', init, { once: true })`; scope `<anonymous@14>`.

## lifecycle

- [L14](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L14) `function () { 'use strict'; const A4_AREA = 0.06237; const PAPER_FORMATS = { A0: [841, 1189], A1: [594, 841], A2: [420, 594], A3: [297, 420], A4: [210, 297], A5: [148, 210] }; // // HELPERS // function normalizeNumber(v) { return parseFloat( String(v) .replace(',', '.') .trim() ); } function isPosit`; scope `root`.
- [L378](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L378) `MutationObserver(() => { if (mountPanel(panel)) observer.disconnect(); })`; scope `<anonymous@14>/createPanel`.
- [L379](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L379) `observer.disconnect()`; scope `<anonymous@14>/createPanel/<anonymous@378>`.
- [L381](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L381) `observer.observe(document.body || document.documentElement, { childList: true, subtree: true })`; scope `<anonymous@14>/createPanel`.
- [L537](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L537) `setInterval(() => { tries++; if (createButton(togglePanel) || tries > 30) { clearInterval(interval); } }, 500)`; scope `<anonymous@14>/init`.
- [L542](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L542) `clearInterval(interval)`; scope `<anonymous@14>/init/<anonymous@537>`.

## io

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## dom-read

- [L14](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L14) `function () { 'use strict'; const A4_AREA = 0.06237; const PAPER_FORMATS = { A0: [841, 1189], A1: [594, 841], A2: [420, 594], A3: [297, 420], A4: [210, 297], A5: [148, 210] }; // // HELPERS // function normalizeNumber(v) { return parseFloat( String(v) .replace(',', '.') .trim() ); } function isPosit`; scope `root`.
- [L253](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L253) `document.getElementById('area-calc-panel-style')`; scope `<anonymous@14>/addPanelStyles`.
- [L283](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L283) `Array.from(document.querySelectorAll('h1,h2,h3,h4,.box-head,.box-title,.box_header')) .find(node => String(node.textContent || '').replace(/\s+/g, ' ').trim().toLocaleUpperCase('sk') === 'AKTIVITY')`; scope `<anonymous@14>/findActivitySection`.
- [L283](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L283) `document.querySelectorAll('h1,h2,h3,h4,.box-head,.box-title,.box_header')`; scope `<anonymous@14>/findActivitySection`.
- [L287](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L287) `heading.closest('.box')`; scope `<anonymous@14>/findActivitySection`.
- [L287](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L287) `heading.closest('[class*="grid_"]')`; scope `<anonymous@14>/findActivitySection`.
- [L288](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L288) `heading.closest('.box-head,.box-title,.box_header')`; scope `<anonymous@14>/findActivitySection`.
- [L319](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L319) `document.querySelector('#m2CalcButton')`; scope `<anonymous@14>/setPanelOpen`.
- [L325](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L325) `document.querySelector('#area-calc-panel')`; scope `<anonymous@14>/createPanel`.
- [L363](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L363) `shell.querySelector('.area-calc-close').addEventListener('click', closePanel)`; scope `<anonymous@14>/createPanel`.
- [L363](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L363) `shell.querySelector('.area-calc-close')`; scope `<anonymous@14>/createPanel`.
- [L364](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L364) `shell.querySelector('#m2CalcClear').addEventListener('click', () => { shell.querySelector('#m2CalcInput').value = ''; shell.querySelector('#m2CalcResults').replaceChildren(); })`; scope `<anonymous@14>/createPanel`.
- [L364](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L364) `shell.querySelector('#m2CalcClear')`; scope `<anonymous@14>/createPanel`.
- [L365](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L365) `shell.querySelector('#m2CalcInput')`; scope `<anonymous@14>/createPanel/<anonymous@364>`.
- [L366](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L366) `shell.querySelector('#m2CalcResults').replaceChildren()`; scope `<anonymous@14>/createPanel/<anonymous@364>`.
- [L366](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L366) `shell.querySelector('#m2CalcResults')`; scope `<anonymous@14>/createPanel/<anonymous@364>`.
- [L368](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L368) `shell.querySelector('#m2CalcRun').addEventListener('click', () => { const lines = shell.querySelector('#m2CalcInput').value .split('\n').map(value => value.trim()).filter(Boolean); renderResults(lines.map(parseLine).filter(Boolean), shell.querySelector('#m2CalcResults')); })`; scope `<anonymous@14>/createPanel`.
- [L368](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L368) `shell.querySelector('#m2CalcRun')`; scope `<anonymous@14>/createPanel`.
- [L369](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L369) `shell.querySelector('#m2CalcInput').value .split('\n').map(value => value.trim()).filter(Boolean)`; scope `<anonymous@14>/createPanel/<anonymous@368>`.
- [L369](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L369) `shell.querySelector('#m2CalcInput').value .split('\n').map(value => value.trim())`; scope `<anonymous@14>/createPanel/<anonymous@368>`.
- [L369](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L369) `shell.querySelector('#m2CalcInput').value .split('\n')`; scope `<anonymous@14>/createPanel/<anonymous@368>`.
- [L369](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L369) `shell.querySelector('#m2CalcInput')`; scope `<anonymous@14>/createPanel/<anonymous@368>`.
- [L371](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L371) `shell.querySelector('#m2CalcResults')`; scope `<anonymous@14>/createPanel/<anonymous@368>`.
- [L406](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L406) `table.querySelector('tbody')`; scope `<anonymous@14>/renderResults`.
- [L415](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L415) `row.querySelector('.calc-source')`; scope `<anonymous@14>/renderResults/<anonymous@408>`.
- [L416](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L416) `row.querySelector('.calc-size')`; scope `<anonymous@14>/renderResults/<anonymous@408>`.
- [L419](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L419) `row.querySelector('.m2QtyInput')`; scope `<anonymous@14>/renderResults/<anonymous@408>`.
- [L422](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L422) `row.querySelector('.m2Cell')`; scope `<anonymous@14>/renderResults/<anonymous@408>`.
- [L423](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L423) `row.querySelector('.m2Cell')`; scope `<anonymous@14>/renderResults/<anonymous@408>`.
- [L424](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L424) `row.querySelector('.a4Cell')`; scope `<anonymous@14>/renderResults/<anonymous@408>`.
- [L425](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L425) `row.querySelector('.a4Cell')`; scope `<anonymous@14>/renderResults/<anonymous@408>`.
- [L443](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L443) `container.querySelector('.m2QtyInput[data-index="${index}"]')`; scope `<anonymous@14>/renderResults/recalc/<anonymous@441>`.
- [L454](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L454) `container.querySelector('.m2Cell[data-index="${index}"]')`; scope `<anonymous@14>/renderResults/recalc/<anonymous@441>`.
- [L458](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L458) `container.querySelector('.a4Cell[data-index="${index}"]')`; scope `<anonymous@14>/renderResults/recalc/<anonymous@441>`.
- [L474](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L474) `table.querySelectorAll('.m2QtyInput') .forEach(input => { input.addEventListener('input', recalc); })`; scope `<anonymous@14>/renderResults`.
- [L474](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L474) `table.querySelectorAll('.m2QtyInput')`; scope `<anonymous@14>/renderResults`.
- [L490](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L490) `document.querySelector('#m2CalcButton')`; scope `<anonymous@14>/createButton`.
- [L494](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L494) `document.querySelector('#fc-userscripts-action-panel')`; scope `<anonymous@14>/createButton`.

## dom-write

- [L14](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L14) `function () { 'use strict'; const A4_AREA = 0.06237; const PAPER_FORMATS = { A0: [841, 1189], A1: [594, 841], A2: [420, 594], A3: [297, 420], A4: [210, 297], A5: [148, 210] }; // // HELPERS // function normalizeNumber(v) { return parseFloat( String(v) .replace(',', '.') .trim() ); } function isPosit`; scope `root`.
- [L279](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L279) `(document.head || document.documentElement).appendChild(style)`; scope `<anonymous@14>/addPanelStyles`.
- [L297](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L297) `panel.classList.remove(name)`; scope `<anonymous@14>/mountPanel/<anonymous@296>`.
- [L303](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L303) `section.box.parentNode.insertBefore(panel, section.box)`; scope `<anonymous@14>/mountPanel`.
- [L308](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L308) `section.heading.parentNode.insertBefore(panel, section.heading)`; scope `<anonymous@14>/mountPanel`.
- [L317](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L317) `panel.setAttribute('aria-hidden', String(!isOpen))`; scope `<anonymous@14>/setPanelOpen`.
- [L320](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L320) `button.setAttribute('aria-expanded', String(isOpen))`; scope `<anonymous@14>/setPanelOpen`.
- [L331](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L331) `panel.setAttribute('aria-label', 'Kalkulačka m² a A4')`; scope `<anonymous@14>/createPanel`.
- [L332](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L332) `panel.setAttribute('aria-hidden', 'true')`; scope `<anonymous@14>/createPanel`.
- [L360](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L360) `panel.appendChild(shell)`; scope `<anonymous@14>/createPanel`.
- [L366](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L366) `shell.querySelector('#m2CalcResults').replaceChildren()`; scope `<anonymous@14>/createPanel/<anonymous@364>`.
- [L393](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L393) `container.replaceChildren(error)`; scope `<anonymous@14>/renderResults`.
- [L397](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L397) `container.replaceChildren()`; scope `<anonymous@14>/renderResults`.
- [L427](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L427) `tbody.appendChild(row)`; scope `<anonymous@14>/renderResults/<anonymous@408>`.
- [L430](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L430) `container.appendChild(table)`; scope `<anonymous@14>/renderResults`.
- [L480](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L480) `container.appendChild(summary)`; scope `<anonymous@14>/renderResults`.
- [L502](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L502) `button.setAttribute('aria-expanded', 'false')`; scope `<anonymous@14>/createButton`.
- [L523](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L523) `panel.appendChild(button)`; scope `<anonymous@14>/createButton`.

## logs

- [L14](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L14) `function () { 'use strict'; const A4_AREA = 0.06237; const PAPER_FORMATS = { A0: [841, 1189], A1: [594, 841], A2: [420, 594], A3: [297, 420], A4: [210, 297], A5: [148, 210] }; // // HELPERS // function normalizeNumber(v) { return parseFloat( String(v) .replace(',', '.') .trim() ); } function isPosit`; scope `root`.
- [L547](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L547) `console.log('[CALC] kalkulačka m²/A4 pripravená')`; scope `<anonymous@14>/init`.

## Zápisy do globálov, DOM a ostatných vlastností

- [L255](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L255) `style.id = 'area-calc-panel-style'`.
- [L256](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L256) `style.textContent = ' #area-calc-panel{position:relative;z-index:2;display:grid;grid-template-rows:0fr;width:100%;max-width:100%;margin:0;overflow:hidden;background:#fff;color:#000;border:0 solid #bbb;border-radius:3px;box-shadow:none;font:11px/1.35 Tahoma,Calibri,"Trebuchet MS",sans-serif;opacity:0`.
- [L329](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L329) `panel.id = 'area-calc-panel'`.
- [L336](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L336) `shell.className = 'area-calc-shell'`.
- [L337](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L337) `shell.innerHTML = ' <div class="area-calc-head"> <div class="area-calc-title">Kalkulačka m² / A4</div> <button class="area-calc-close" type="button" aria-label="Zavrieť kalkulačku">×</button> </div> <div class="area-calc-content"> <textarea id="m2CalcInput" aria-label="Vstupy pre kalkulačku" placeho`.
- [L391](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L391) `error.className = 'area-calc-error'`.
- [L392](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L392) `error.textContent = 'Žiadne validné dáta'`.
- [L400](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L400) `table.className = 'area-calc-table'`.
- [L401](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L401) `table.innerHTML = ' <thead><tr><th>Vstup</th><th>Rozmer</th><th>Ks</th><th>m²</th><th>A4</th></tr></thead> <tbody></tbody> '`.
- [L414](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L414) `row.innerHTML = '<td class="calc-source"></td><td class="calc-size"></td><td><input class="m2QtyInput" type="number" min="1"></td><td class="m2Cell"></td><td class="a4Cell"></td>'`.
- [L415](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L415) `row.querySelector('.calc-source').textContent = item.path`.
- [L416](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L416) `row.querySelector('.calc-size').textContent = item.areaM2 != null ? '${item.areaM2.toFixed(2)} m² plocha' : '${Math.round(item.width)} × ${Math.round(item.height)} mm'`.
- [L423](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L423) `row.querySelector('.m2Cell').textContent = values.totalM2.toFixed(2)`.
- [L425](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L425) `row.querySelector('.a4Cell').textContent = Math.ceil(values.totalA4)`.
- [L434](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L434) `summary.className = 'area-calc-summary'`.
- [L466](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L466) `summary.textContent = ' CELKOM → ${totalM2.toFixed(2)} m² • ${Math.ceil(totalA4)} A4 '`.
- [L499](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L499) `button.id = 'm2CalcButton'`.
- [L500](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L500) `button.textContent = 'CALC'`.
- [L503](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/AreaCalc.user.js#L503) `button.className = 'fc-action-button'`.
