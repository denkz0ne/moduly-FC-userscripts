# Material Detector Next

Zdroj: service-catalog/materialDetectorNext.user.js; referencia: 75087f8c4cbd34190e69318038bda6ef36eee0f2.
SHA-256: `f7d5b33a32b4bd1166b5ed63c56d144dd6ee4237c66f8fd78293b2131a8993df`. Riadkov: 151.

AST inventár: obsahuje aj vnorené/anonýmne funkcie a lokálne premenné. Zoznam premenných nie je zoznam editovateľných nastavení. Volania sú klasifikované podľa názvu; dynamické aliasy môžu vyžadovať ručné dohľadanie. Historické @require hlavičky v načítanom JS nie sú ďalším automaticky spusteným @require reťazcom.

## Metadata

```json
{
  "name": [
    "Material Detector Next"
  ],
  "namespace": [
    "https://moduly.faxcopy.sk/material-detector-next"
  ],
  "author": [
    "mato e."
  ],
  "version": [
    "0.1.6"
  ],
  "description": [
    "Nový katalóg služieb a kontrola detegovaných parametrov."
  ],
  "updateURL": [
    "https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/main/service-catalog/materialDetectorNext.user.js"
  ],
  "downloadURL": [
    "https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/main/service-catalog/materialDetectorNext.user.js"
  ],
  "match": [
    "https://moduly.faxcopy.sk/vyrobne_prikazy/detail/index/*"
  ],
  "grant": [
    "GM_xmlhttpRequest"
  ],
  "connect": [
    "raw.githubusercontent.com"
  ],
  "require": [
    "https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/main/service-catalog/core/detector_api.js",
    "https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/main/service-catalog/detectors/detector_fotoobrazy.js",
    "https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/main/service-catalog/detectors/detector_41tv.js",
    "https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/main/service-catalog/detectors/detector_42fotoweb.js",
    "https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/main/service-catalog/detectors/detector_67mf.js",
    "https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/main/service-catalog/detectors/detector_67spz.js",
    "https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/main/service-catalog/detectors/detector_68bs.js",
    "https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/main/service-catalog/detectors/detector_49ban.js",
    "https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/main/service-catalog/detectors/detector_49s.js",
    "https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/main/service-catalog/detectors/detector_common_size.js",
    "https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/main/service-catalog/core/page_context.js",
    "https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/main/service-catalog/core/database.js",
    "https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/main/service-catalog/core/extraction.js",
    "https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/main/service-catalog/core/proposals.js",
    "https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/main/service-catalog/core/consumer_api.js",
    "https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/main/service-catalog/config/config_panel.js"
  ],
  "run-at": [
    "document-end"
  ]
}
```

## Funkcie a signatúry

- [L32–150](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/materialDetectorNext.user.js#L32) `<anonymous@32>()`; scope `root`.
- [L40–43](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/materialDetectorNext.user.js#L40) `isAllowedPage()`; scope `<anonymous@32>`.
- [L45–52](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/materialDetectorNext.user.js#L45) `currentSignature(context)`; scope `<anonymous@32>`.
- [L54–83](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/materialDetectorNext.user.js#L54) `publishPublicState(detection)`; scope `<anonymous@32>`.
- [L85–96](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/materialDetectorNext.user.js#L85) `renderCurrent()`; scope `<anonymous@32>`.
- [L98–105](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/materialDetectorNext.user.js#L98) `scheduleRefresh()`; scope `<anonymous@32>`.
- [L101–104](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/materialDetectorNext.user.js#L101) `<anonymous@101>()`; scope `<anonymous@32>/scheduleRefresh`.
- [L107–113](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/materialDetectorNext.user.js#L107) `async refreshDatabase()`; scope `<anonymous@32>`.
- [L115–119](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/materialDetectorNext.user.js#L115) `startObserver()`; scope `<anonymous@32>`.
- [L121–136](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/materialDetectorNext.user.js#L121) `async init()`; scope `<anonymous@32>`.
- [L127–130](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/materialDetectorNext.user.js#L127) `<anonymous@127>()`; scope `<anonymous@32>/init`.
- [L141–144](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/materialDetectorNext.user.js#L141) `refreshPreview()`; scope `<anonymous@32>`.
- [L145–145](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/materialDetectorNext.user.js#L145) `getDatabaseState()`; scope `<anonymous@32>`.
- [L146–146](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/materialDetectorNext.user.js#L146) `getState()`; scope `<anonymous@32>`.
- [L149–149](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/materialDetectorNext.user.js#L149) `<anonymous@149>(error)`; scope `<anonymous@32>`.

## Premenné a pôvodné inicializátory

Dlhé inicializátory sú tu skrátené na 300 znakov; úplné znenie je v inventory.json a v zdroji.

- [L35](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/materialDetectorNext.user.js#L35) `const OUTPUT_MODE = 'preview'`; scope `<anonymous@32>`.
- [L36](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/materialDetectorNext.user.js#L36) `let databaseState = null`; scope `<anonymous@32>`.
- [L37](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/materialDetectorNext.user.js#L37) `let lastSignature = ''`; scope `<anonymous@32>`.
- [L38](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/materialDetectorNext.user.js#L38) `let scheduled = false`; scope `<anonymous@32>`.
- [L55](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/materialDetectorNext.user.js#L55) `const result = detection && detection.result || {}`; scope `<anonymous@32>/publishPublicState`.
- [L56](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/materialDetectorNext.user.js#L56) `const payload = { version: 1, outputMode: OUTPUT_MODE, vp: detection && detection.context && detection.context.vp || '', serviceId: detection && detection.service && detection.service.id || '', detectorId: result.detector || '', label: detection && detection.zones || { left: '', right: '', top: '', `; scope `<anonymous@32>/publishPublicState`.
- [L87](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/materialDetectorNext.user.js#L87) `const context = window.MaterialDetectorNextPageContext.collect()`; scope `<anonymous@32>/renderCurrent`.
- [L89](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/materialDetectorNext.user.js#L89) `const signature = currentSignature(context)`; scope `<anonymous@32>/renderCurrent`.
- [L92](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/materialDetectorNext.user.js#L92) `const detection = window.MaterialDetectorNextExtraction.detect(databaseState, context)`; scope `<anonymous@32>/renderCurrent`.
- [L110](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/materialDetectorNext.user.js#L110) `const result = renderCurrent()`; scope `<anonymous@32>/refreshDatabase`.
- [L117](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/materialDetectorNext.user.js#L117) `const observer = new MutationObserver(scheduleRefresh)`; scope `<anonymous@32>/startObserver`.

## storage

- [L32](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/materialDetectorNext.user.js#L32) `function () { 'use strict'; const OUTPUT_MODE = 'preview'; let databaseState = null; let lastSignature = ''; let scheduled = false; function isAllowedPage() { return window.MaterialDetectorNextPageContext && window.MaterialDetectorNextPageContext.allowedPage(); } function currentSignature(context) {`; scope `root`.
- [L78](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/materialDetectorNext.user.js#L78) `localStorage.setItem(window.MaterialDetectorNextClient.stateKey, JSON.stringify(payload))`; scope `<anonymous@32>/publishPublicState`.

## events

- [L32](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/materialDetectorNext.user.js#L32) `function () { 'use strict'; const OUTPUT_MODE = 'preview'; let databaseState = null; let lastSignature = ''; let scheduled = false; function isAllowedPage() { return window.MaterialDetectorNextPageContext && window.MaterialDetectorNextPageContext.allowedPage(); } function currentSignature(context) {`; scope `root`.
- [L82](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/materialDetectorNext.user.js#L82) `window.dispatchEvent(new CustomEvent(window.MaterialDetectorNextClient.eventName, { detail: payload }))`; scope `<anonymous@32>/publishPublicState`.
- [L82](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/materialDetectorNext.user.js#L82) `CustomEvent(window.MaterialDetectorNextClient.eventName, { detail: payload })`; scope `<anonymous@32>/publishPublicState`.
- [L94](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/materialDetectorNext.user.js#L94) `window.dispatchEvent(new CustomEvent('materialDetectorNext:updated', { detail: detection }))`; scope `<anonymous@32>/renderCurrent`.
- [L94](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/materialDetectorNext.user.js#L94) `CustomEvent('materialDetectorNext:updated', { detail: detection })`; scope `<anonymous@32>/renderCurrent`.
- [L111](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/materialDetectorNext.user.js#L111) `window.dispatchEvent(new CustomEvent('materialDetectorNext:databaseUpdated', { detail: databaseState }))`; scope `<anonymous@32>/refreshDatabase`.
- [L111](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/materialDetectorNext.user.js#L111) `CustomEvent('materialDetectorNext:databaseUpdated', { detail: databaseState })`; scope `<anonymous@32>/refreshDatabase`.
- [L127](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/materialDetectorNext.user.js#L127) `window.addEventListener('materialDetectorNext:configChanged', () => { lastSignature = ''; renderCurrent(); })`; scope `<anonymous@32>/init`.
- [L131](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/materialDetectorNext.user.js#L131) `window.addEventListener('materialDetectorNext:refreshDatabase', refreshDatabase)`; scope `<anonymous@32>/init`.

## lifecycle

- [L32](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/materialDetectorNext.user.js#L32) `function () { 'use strict'; const OUTPUT_MODE = 'preview'; let databaseState = null; let lastSignature = ''; let scheduled = false; function isAllowedPage() { return window.MaterialDetectorNextPageContext && window.MaterialDetectorNextPageContext.allowedPage(); } function currentSignature(context) {`; scope `root`.
- [L101](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/materialDetectorNext.user.js#L101) `setTimeout(() => { scheduled = false; renderCurrent(); }, 150)`; scope `<anonymous@32>/scheduleRefresh`.
- [L117](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/materialDetectorNext.user.js#L117) `MutationObserver(scheduleRefresh)`; scope `<anonymous@32>/startObserver`.
- [L118](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/materialDetectorNext.user.js#L118) `observer.observe(document.body, { childList: true, subtree: true, characterData: true, attributes: true })`; scope `<anonymous@32>/startObserver`.

## io

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## dom-read

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## dom-write

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## logs

- [L32](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/materialDetectorNext.user.js#L32) `function () { 'use strict'; const OUTPUT_MODE = 'preview'; let databaseState = null; let lastSignature = ''; let scheduled = false; function isAllowedPage() { return window.MaterialDetectorNextPageContext && window.MaterialDetectorNextPageContext.allowedPage(); } function currentSignature(context) {`; scope `root`.
- [L80](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/materialDetectorNext.user.js#L80) `console.warn('[materialDetectorNext] public state save failed', error)`; scope `<anonymous@32>/publishPublicState`.
- [L132](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/materialDetectorNext.user.js#L132) `console.info('[materialDetectorNext] initialized in ' + OUTPUT_MODE + ' mode', { serviceCount: databaseState.database && databaseState.database.services.length || 0, source: databaseState.source })`; scope `<anonymous@32>/init`.
- [L149](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/materialDetectorNext.user.js#L149) `console.error('[materialDetectorNext] initialization failed', error)`; scope `<anonymous@32>/<anonymous@149>`.

## Zápisy do globálov, DOM a ostatných vlastností

- [L138](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/materialDetectorNext.user.js#L138) `window.MaterialDetectorNext = { outputMode: OUTPUT_MODE, refresh: refreshDatabase, refreshPreview: () => { lastSignature = ''; return renderCurrent(); }, getDatabaseState: () => databaseState, getState: () => window.__materialDetectorNextState || null }`.
