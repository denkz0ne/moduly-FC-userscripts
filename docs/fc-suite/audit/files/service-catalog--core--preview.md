# service-catalog/core/preview.js

Zdroj: service-catalog/core/preview.js; referencia: 75087f8c4cbd34190e69318038bda6ef36eee0f2.
SHA-256: `baff41c452d2edb234bcb4248497d4a7d858138d881d1b7f113e08be9f342cbc`. Riadkov: 145.

AST inventár: obsahuje aj vnorené/anonýmne funkcie a lokálne premenné. Zoznam premenných nie je zoznam editovateľných nastavení. Volania sú klasifikované podľa názvu; dynamické aliasy môžu vyžadovať ručné dohľadanie. Historické @require hlavičky v načítanom JS nie sú ďalším automaticky spusteným @require reťazcom.

## Metadata

```json
{}
```

## Funkcie a signatúry

- [L1–144](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/preview.js#L1) `<anonymous@1>()`; scope `root`.
- [L6–33](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/preview.js#L6) `addStyles()`; scope `<anonymous@1>`.
- [L34–45](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/preview.js#L34) `ensureRoot()`; scope `<anonymous@1>`.
- [L46–57](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/preview.js#L46) `makeZone(label, value)`; scope `<anonymous@1>`.
- [L58–86](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/preview.js#L58) `makeRenameDebug(debug)`; scope `<anonymous@1>`.
- [L75–84](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/preview.js#L75) `<anonymous@75>(file)`; scope `<anonymous@1>/makeRenameDebug`.
- [L87–132](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/preview.js#L87) `render(detection)`; scope `<anonymous@1>`.
- [L133–142](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/preview.js#L133) `setVisible(nextVisible)`; scope `<anonymous@1>`.
- [L143–143](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/preview.js#L143) `isVisible()`; scope `<anonymous@1>`.

## Premenné a pôvodné inicializátory

Dlhé inicializátory sú tu skrátené na 300 znakov; úplné znenie je v inventory.json a v zdroji.

- [L3](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/preview.js#L3) `const ROOT_ID = 'material-detector-next-preview'`; scope `<anonymous@1>`.
- [L4](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/preview.js#L4) `const STYLE_ID = 'material-detector-next-preview-style'`; scope `<anonymous@1>`.
- [L5](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/preview.js#L5) `let visible = false`; scope `<anonymous@1>`.
- [L8](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/preview.js#L8) `const style = document.createElement('style')`; scope `<anonymous@1>/addStyles`.
- [L35](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/preview.js#L35) `let root = document.getElementById(ROOT_ID)`; scope `<anonymous@1>/ensureRoot`.
- [L47](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/preview.js#L47) `const cell = document.createElement('div')`; scope `<anonymous@1>/makeZone`.
- [L49](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/preview.js#L49) `const title = document.createElement('span')`; scope `<anonymous@1>/makeZone`.
- [L52](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/preview.js#L52) `const text = document.createElement('span')`; scope `<anonymous@1>/makeZone`.
- [L60](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/preview.js#L60) `const details = document.createElement('details')`; scope `<anonymous@1>/makeRenameDebug`.
- [L62](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/preview.js#L62) `const summary = document.createElement('summary')`; scope `<anonymous@1>/makeRenameDebug`.
- [L65](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/preview.js#L65) `const pattern = document.createElement('div')`; scope `<anonymous@1>/makeRenameDebug`.
- [L69](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/preview.js#L69) `const files = debug.files || []`; scope `<anonymous@1>/makeRenameDebug`.
- [L71](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/preview.js#L71) `const empty = document.createElement('div')`; scope `<anonymous@1>/makeRenameDebug`.
- [L76](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/preview.js#L76) `const row = document.createElement('div')`; scope `<anonymous@1>/makeRenameDebug/<anonymous@75>`.
- [L78](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/preview.js#L78) `const source = document.createElement('span')`; scope `<anonymous@1>/makeRenameDebug/<anonymous@75>`.
- [L80](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/preview.js#L80) `const output = document.createElement('strong')`; scope `<anonymous@1>/makeRenameDebug/<anonymous@75>`.
- [L89](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/preview.js#L89) `const root = ensureRoot()`; scope `<anonymous@1>/render`.
- [L90](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/preview.js#L90) `const zones = detection && detection.zones || {}`; scope `<anonymous@1>/render`.
- [L91](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/preview.js#L91) `const service = detection && detection.service`; scope `<anonymous@1>/render`.
- [L92](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/preview.js#L92) `const database = detection && detection.database`; scope `<anonymous@1>/render`.
- [L94](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/preview.js#L94) `const card = document.createElement('div')`; scope `<anonymous@1>/render`.
- [L96](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/preview.js#L96) `const head = document.createElement('div')`; scope `<anonymous@1>/render`.
- [L98](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/preview.js#L98) `const brand = document.createElement('span')`; scope `<anonymous@1>/render`.
- [L101](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/preview.js#L101) `const mode = document.createElement('span')`; scope `<anonymous@1>/render`.
- [L105](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/preview.js#L105) `const body = document.createElement('div')`; scope `<anonymous@1>/render`.
- [L107](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/preview.js#L107) `const serviceLine = document.createElement('div')`; scope `<anonymous@1>/render`.
- [L112](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/preview.js#L112) `const grid = document.createElement('div')`; scope `<anonymous@1>/render`.
- [L120](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/preview.js#L120) `const foot = document.createElement('div')`; scope `<anonymous@1>/render`.
- [L126](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/preview.js#L126) `const renameDebug = makeRenameDebug(detection && detection.result && detection.result.renameDebug)`; scope `<anonymous@1>/render`.
- [L135](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/preview.js#L135) `const root = document.getElementById(ROOT_ID)`; scope `<anonymous@1>/setVisible`.

## storage

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## events

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## lifecycle

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## io

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## dom-read

- [L1](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/preview.js#L1) `function () { 'use strict'; const ROOT_ID = 'material-detector-next-preview'; const STYLE_ID = 'material-detector-next-preview-style'; let visible = false; function addStyles() { if (document.getElementById(STYLE_ID)) return; const style = document.createElement('style'); style.id = STYLE_ID; style.`; scope `root`.
- [L7](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/preview.js#L7) `document.getElementById(STYLE_ID)`; scope `<anonymous@1>/addStyles`.
- [L35](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/preview.js#L35) `document.getElementById(ROOT_ID)`; scope `<anonymous@1>/ensureRoot`.
- [L135](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/preview.js#L135) `document.getElementById(ROOT_ID)`; scope `<anonymous@1>/setVisible`.

## dom-write

- [L1](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/preview.js#L1) `function () { 'use strict'; const ROOT_ID = 'material-detector-next-preview'; const STYLE_ID = 'material-detector-next-preview-style'; let visible = false; function addStyles() { if (document.getElementById(STYLE_ID)) return; const style = document.createElement('style'); style.id = STYLE_ID; style.`; scope `root`.
- [L32](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/preview.js#L32) `(document.head || document.documentElement).appendChild(style)`; scope `<anonymous@1>/addStyles`.
- [L39](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/preview.js#L39) `root.setAttribute('aria-label', 'Material Detector Next náhľad štítka')`; scope `<anonymous@1>/ensureRoot`.
- [L40](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/preview.js#L40) `root.setAttribute('aria-hidden', String(!visible))`; scope `<anonymous@1>/ensureRoot`.
- [L43](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/preview.js#L43) `(document.body || document.documentElement).appendChild(root)`; scope `<anonymous@1>/ensureRoot`.
- [L55](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/preview.js#L55) `cell.append(title, text)`; scope `<anonymous@1>/makeZone`.
- [L64](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/preview.js#L64) `details.appendChild(summary)`; scope `<anonymous@1>/makeRenameDebug`.
- [L68](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/preview.js#L68) `details.appendChild(pattern)`; scope `<anonymous@1>/makeRenameDebug`.
- [L73](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/preview.js#L73) `details.appendChild(empty)`; scope `<anonymous@1>/makeRenameDebug`.
- [L82](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/preview.js#L82) `row.append(source, output)`; scope `<anonymous@1>/makeRenameDebug/<anonymous@75>`.
- [L83](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/preview.js#L83) `details.appendChild(row)`; scope `<anonymous@1>/makeRenameDebug/<anonymous@75>`.
- [L93](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/preview.js#L93) `root.replaceChildren()`; scope `<anonymous@1>/render`.
- [L104](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/preview.js#L104) `head.append(brand, mode)`; scope `<anonymous@1>/render`.
- [L114](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/preview.js#L114) `grid.append(makeZone('Ľavé pole', zones.left), makeZone('Pravé pole', zones.right), makeZone('Horné pole', zones.top), makeZone('Dolné pole', zones.bottom))`; scope `<anonymous@1>/render`.
- [L125](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/preview.js#L125) `body.append(serviceLine, grid)`; scope `<anonymous@1>/render`.
- [L127](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/preview.js#L127) `body.appendChild(renameDebug)`; scope `<anonymous@1>/render`.
- [L128](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/preview.js#L128) `body.appendChild(foot)`; scope `<anonymous@1>/render`.
- [L129](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/preview.js#L129) `card.append(head, body)`; scope `<anonymous@1>/render`.
- [L130](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/preview.js#L130) `root.appendChild(card)`; scope `<anonymous@1>/render`.
- [L139](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/preview.js#L139) `root.setAttribute('aria-hidden', String(!visible))`; scope `<anonymous@1>/setVisible`.

## logs

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## Zápisy do globálov, DOM a ostatných vlastností

- [L9](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/preview.js#L9) `style.id = STYLE_ID`.
- [L10](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/preview.js#L10) `style.textContent = [ '#material-detector-next-preview{position:fixed;z-index:899;right:124px;top:94px;width:340px;max-width:calc(100vw - 150px);font:13px/1.4 Inter,system-ui,-apple-system,"Segoe UI",sans-serif;color:#182536}', '#material-detector-next-preview[hidden]{display:none!important}', '#mat`.
- [L38](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/preview.js#L38) `root.id = ROOT_ID`.
- [L42](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/preview.js#L42) `root.style.display = visible ? 'block' : 'none'`.
- [L48](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/preview.js#L48) `cell.className = 'mdn-zone'`.
- [L50](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/preview.js#L50) `title.className = 'mdn-zone-label'`.
- [L51](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/preview.js#L51) `title.textContent = label`.
- [L53](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/preview.js#L53) `text.className = 'mdn-zone-value'`.
- [L54](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/preview.js#L54) `text.textContent = value || '—'`.
- [L61](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/preview.js#L61) `details.className = 'mdn-rename'`.
- [L63](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/preview.js#L63) `summary.textContent = 'Rename script · iba debug (' + (debug.enabled ? 'nastavený ON' : 'vypnutý') + ')'`.
- [L66](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/preview.js#L66) `pattern.className = 'mdn-rename-pattern'`.
- [L67](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/preview.js#L67) `pattern.textContent = 'Šablóna: ' + (debug.pattern || '—')`.
- [L72](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/preview.js#L72) `empty.textContent = 'Na stránke sa nenašli odkazy na súbory.'`.
- [L77](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/preview.js#L77) `row.className = 'mdn-rename-file'`.
- [L79](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/preview.js#L79) `source.textContent = 'Pôvodný názov: ' + file.originalName`.
- [L81](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/preview.js#L81) `output.textContent = 'Návrh názvu: ' + file.proposedName`.
- [L95](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/preview.js#L95) `card.className = 'mdn-card'`.
- [L97](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/preview.js#L97) `head.className = 'mdn-head'`.
- [L99](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/preview.js#L99) `brand.className = 'mdn-brand'`.
- [L100](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/preview.js#L100) `brand.textContent = 'Material Detector Next'`.
- [L102](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/preview.js#L102) `mode.className = 'mdn-mode'`.
- [L103](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/preview.js#L103) `mode.textContent = 'NÁHĽAD'`.
- [L106](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/preview.js#L106) `body.className = 'mdn-body'`.
- [L108](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/preview.js#L108) `serviceLine.className = 'mdn-service'`.
- [L109](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/preview.js#L109) `serviceLine.textContent = service ? service.name + ' · DB v' + (database && database.database && database.database.dataVersion || '?') : 'Služba nie je v katalógu'`.
- [L113](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/preview.js#L113) `grid.className = 'mdn-zones'`.
- [L121](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/preview.js#L121) `foot.className = 'mdn-foot'`.
- [L122](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/preview.js#L122) `foot.textContent = detection && detection.result ? 'Detektor: ' + (detection.result.detector || service && service.id || '—') + ' · Výstup je iba náhľad.' : 'Náhľad je oddelený od pôvodného štítka. Otvor NEXT CFG na kontrolu návrhu.'`.
- [L138](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/preview.js#L138) `root.style.display = visible ? 'block' : 'none'`.
- [L143](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/preview.js#L143) `window.MaterialDetectorNextPreview = { render, setVisible, isVisible: () => visible }`.
