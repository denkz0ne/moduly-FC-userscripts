# service-catalog/core/page_context.js

Zdroj: service-catalog/core/page_context.js; referencia: 75087f8c4cbd34190e69318038bda6ef36eee0f2.
SHA-256: `24de7be49a2f3e40a3a355ba9400b7443441906db6e5f655f0b700ec54849791`. Riadkov: 71.

AST inventár: obsahuje aj vnorené/anonýmne funkcie a lokálne premenné. Zoznam premenných nie je zoznam editovateľných nastavení. Volania sú klasifikované podľa názvu; dynamické aliasy môžu vyžadovať ručné dohľadanie. Historické @require hlavičky v načítanom JS nie sú ďalším automaticky spusteným @require reťazcom.

## Metadata

```json
{}
```

## Funkcie a signatúry

- [L1–70](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/page_context.js#L1) `<anonymous@1>()`; scope `root`.
- [L8–10](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/page_context.js#L8) `allowedPage(locationObject = window.location)`; scope `<anonymous@1>`.
- [L12–25](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/page_context.js#L12) `collectRawRows()`; scope `<anonymous@1>`.
- [L15–24](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/page_context.js#L15) `<anonymous@15>(row)`; scope `<anonymous@1>/collectRawRows`.
- [L20–20](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/page_context.js#L20) `<anonymous@20>(node)`; scope `<anonymous@1>/collectRawRows/<anonymous@15>`.
- [L27–47](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/page_context.js#L27) `findServiceProduct()`; scope `<anonymous@1>`.
- [L49–67](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/page_context.js#L49) `collect()`; scope `<anonymous@1>`.

## Premenné a pôvodné inicializátory

Dlhé inicializátory sú tu skrátené na 300 znakov; úplné znenie je v inventory.json a v zdroji.

- [L4](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/page_context.js#L4) `const ALLOWED_HOST = 'moduly.faxcopy.sk'`; scope `<anonymous@1>`.
- [L5](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/page_context.js#L5) `const ALLOWED_PATH = /^\/vyrobne_prikazy\/detail\/index\/\d+\/?$/`; scope `<anonymous@1>`.
- [L6](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/page_context.js#L6) `const api = window.MaterialDetectorNextAPI`; scope `<anonymous@1>`.
- [L13](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/page_context.js#L13) `const root = document.querySelector('#zd-form-container #VPZDParams')`; scope `<anonymous@1>/collectRawRows`.
- [L16](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/page_context.js#L16) `const cells = row.querySelectorAll(':scope > div')`; scope `<anonymous@1>/collectRawRows/<anonymous@15>`.
- [L18](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/page_context.js#L18) `const label = api.clean(cells[0].textContent || '')`; scope `<anonymous@1>/collectRawRows/<anonymous@15>`.
- [L19](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/page_context.js#L19) `const chunks = Array.from(cells[1].querySelectorAll('.whitespace-pre-line')) .map(node => api.clean(node.textContent || '')) .filter(Boolean)`; scope `<anonymous@1>/collectRawRows/<anonymous@15>`.
- [L22](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/page_context.js#L22) `const value = chunks.length ? chunks.join(' | ') : api.clean(cells[1].textContent || '')`; scope `<anonymous@1>/collectRawRows/<anonymous@15>`.
- [L28](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/page_context.js#L28) `const productRoot = document.querySelector('#vpProducts')`; scope `<anonymous@1>/findServiceProduct`.
- [L33](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/page_context.js#L33) `const codePrefix = /^\s*([a-z0-9]+(?:\s*\/\s*[a-z0-9]+)*)\s*[-–—]\s*(.*)$/i`; scope `<anonymous@1>/findServiceProduct`.
- [L34](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/page_context.js#L34) `const row = <bez inicializátora>`; scope `<anonymous@1>/findServiceProduct`.
- [L35](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/page_context.js#L35) `const cell = <bez inicializátora>`; scope `<anonymous@1>/findServiceProduct`.
- [L36](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/page_context.js#L36) `const text = api.clean(cell.textContent || '')`; scope `<anonymous@1>/findServiceProduct`.
- [L37](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/page_context.js#L37) `const match = text.match(codePrefix)`; scope `<anonymous@1>/findServiceProduct`.
- [L51](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/page_context.js#L51) `const context = api.collectPageContext({ skipProductCode: true })`; scope `<anonymous@1>/collect`.
- [L52](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/page_context.js#L52) `const serviceProduct = findServiceProduct()`; scope `<anonymous@1>/collect`.
- [L53](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/page_context.js#L53) `const rawRows = collectRawRows()`; scope `<anonymous@1>/collect`.

## storage

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## events

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## lifecycle

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## io

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## dom-read

- [L1](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/page_context.js#L1) `function () { 'use strict'; const ALLOWED_HOST = 'moduly.faxcopy.sk'; const ALLOWED_PATH = /^\/vyrobne_prikazy\/detail\/index\/\d+\/?$/; const api = window.MaterialDetectorNextAPI; function allowedPage(locationObject = window.location) { return locationObject.hostname === ALLOWED_HOST && ALLOWED_PAT`; scope `root`.
- [L13](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/page_context.js#L13) `document.querySelector('#zd-form-container #VPZDParams')`; scope `<anonymous@1>/collectRawRows`.
- [L15](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/page_context.js#L15) `Array.from(root.querySelectorAll(':scope > div.flex')).map(row => { const cells = row.querySelectorAll(':scope > div'); if (cells.length < 2) return null; const label = api.clean(cells[0].textContent || ''); const chunks = Array.from(cells[1].querySelectorAll('.whitespace-pre-line')) .map(node => ap`; scope `<anonymous@1>/collectRawRows`.
- [L15](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/page_context.js#L15) `Array.from(root.querySelectorAll(':scope > div.flex')).map(row => { const cells = row.querySelectorAll(':scope > div'); if (cells.length < 2) return null; const label = api.clean(cells[0].textContent || ''); const chunks = Array.from(cells[1].querySelectorAll('.whitespace-pre-line')) .map(node => ap`; scope `<anonymous@1>/collectRawRows`.
- [L15](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/page_context.js#L15) `root.querySelectorAll(':scope > div.flex')`; scope `<anonymous@1>/collectRawRows`.
- [L16](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/page_context.js#L16) `row.querySelectorAll(':scope > div')`; scope `<anonymous@1>/collectRawRows/<anonymous@15>`.
- [L19](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/page_context.js#L19) `Array.from(cells[1].querySelectorAll('.whitespace-pre-line')) .map(node => api.clean(node.textContent || '')) .filter(Boolean)`; scope `<anonymous@1>/collectRawRows/<anonymous@15>`.
- [L19](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/page_context.js#L19) `Array.from(cells[1].querySelectorAll('.whitespace-pre-line')) .map(node => api.clean(node.textContent || ''))`; scope `<anonymous@1>/collectRawRows/<anonymous@15>`.
- [L19](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/page_context.js#L19) `cells[1].querySelectorAll('.whitespace-pre-line')`; scope `<anonymous@1>/collectRawRows/<anonymous@15>`.
- [L28](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/page_context.js#L28) `document.querySelector('#vpProducts')`; scope `<anonymous@1>/findServiceProduct`.
- [L34](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/page_context.js#L34) `productRoot.querySelectorAll('tr')`; scope `<anonymous@1>/findServiceProduct`.
- [L35](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/page_context.js#L35) `row.querySelectorAll('td, th')`; scope `<anonymous@1>/findServiceProduct`.

## dom-write

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## logs

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## Zápisy do globálov, DOM a ostatných vlastností

- [L69](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/page_context.js#L69) `window.MaterialDetectorNextPageContext = { allowedPage, collect, collectRawRows }`.
