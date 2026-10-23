# labelRegeneratorV2

Zdroj: labelRegeneratorV2.user.js; referencia: 769b84c6bc6fdde85ace956714a25b983e879ab1.
SHA-256: `b78ae4ea5c6b2a961d6fbc0d37669242a8092fcda389667b1ac749a4d3b143e4`. Riadkov: 389.

AST inventár: obsahuje aj vnorené/anonýmne funkcie a lokálne premenné. Zoznam premenných nie je zoznam editovateľných nastavení. Volania sú klasifikované podľa názvu; dynamické aliasy môžu vyžadovať ručné dohľadanie. Historické @require hlavičky v načítanom JS nie sú ďalším automaticky spusteným @require reťazcom.

## Metadata

```json
{
  "name": [
    "labelRegeneratorV2"
  ],
  "namespace": [
    "https://moduly.faxcopy.sk/"
  ],
  "author": [
    "mato e."
  ],
  "version": [
    "2.0.21"
  ],
  "description": [
    "Uprava print stitku, overlay zony, konfigurator layoutu a klavesa L pre otvorenie, tlac a zatvorenie stitku."
  ],
  "updateURL": [
    "https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/main/labelRegeneratorV2.user.js"
  ],
  "downloadURL": [
    "https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/main/labelRegeneratorV2.user.js"
  ],
  "require": [
    "https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js",
    "https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js"
  ],
  "match": [
    "https://moduly.faxcopy.sk/vyrobne_prikazy/detail/printLabel/*",
    "https://moduly.faxcopy.sk/vyrobne_prikazy/detail/index/*"
  ],
  "grant": [
    "none"
  ],
  "run-at": [
    "document-end"
  ]
}
```

## Funkcie a signatúry

- [L17–388](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L17) `<anonymous@17>()`; scope `root`.
- [L29–31](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L29) `isPrintLabelPage()`; scope `<anonymous@17>`.
- [L33–35](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L33) `isDetailPage()`; scope `<anonymous@17>`.
- [L37–50](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L37) `patchDelayedPrintTimeout()`; scope `<anonymous@17>`.
- [L41–48](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L41) `window.setTimeout(callback, delay)`; scope `<anonymous@17>/patchDelayedPrintTimeout`.
- [L52–68](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L52) `patchPrintAutoClose()`; scope `<anonymous@17>`.
- [L56–66](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L56) `window.print()`; scope `<anonymous@17>/patchPrintAutoClose`.
- [L58–64](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L58) `<anonymous@58>()`; scope `<anonymous@17>/patchPrintAutoClose/window.print`.
- [L70–86](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L70) `bindEnterPrintFromOverrideInputs()`; scope `<anonymous@17>`.
- [L73–83](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L73) `<anonymous@73>(event)`; scope `<anonymous@17>/bindEnterPrintFromOverrideInputs`.
- [L88–106](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L88) `ensureNonPrintCleanupStyles()`; scope `<anonymous@17>`.
- [L108–125](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L108) `removeLabelEditorUiOutsidePrint()`; scope `<anonymous@17>`.
- [L117–119](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L117) `<anonymous@117>(selector)`; scope `<anonymous@17>/removeLabelEditorUiOutsidePrint`.
- [L118–118](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L118) `<anonymous@118>(node)`; scope `<anonymous@17>/removeLabelEditorUiOutsidePrint/<anonymous@117>`.
- [L121–124](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L121) `<anonymous@121>(input)`; scope `<anonymous@17>/removeLabelEditorUiOutsidePrint`.
- [L127–140](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L127) `keepEditorUiOutOfDetailPage()`; scope `<anonymous@17>`.
- [L142–205](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L142) `ensureExportImportStyles()`; scope `<anonymous@17>`.
- [L207–221](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L207) `readConfigExport()`; scope `<anonymous@17>`.
- [L209–212](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L209) `<anonymous@209>(key)`; scope `<anonymous@17>/readConfigExport`.
- [L223–239](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L223) `normalizeImportPayload(rawText)`; scope `<anonymous@17>`.
- [L241–246](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L241) `setStatus(card, text, isError)`; scope `<anonymous@17>`.
- [L248–254](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L248) `async copyText(text)`; scope `<anonymous@17>`.
- [L256–270](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L256) `async handleExport(card)`; scope `<anonymous@17>`.
- [L272–286](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L272) `handleImport(card)`; scope `<anonymous@17>`.
- [L276–280](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L276) `<anonymous@276>(key)`; scope `<anonymous@17>/handleImport`.
- [L282–282](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L282) `<anonymous@282>()`; scope `<anonymous@17>/handleImport`.
- [L288–322](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L288) `buildExportImportCard()`; scope `<anonymous@17>`.
- [L318–318](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L318) `<anonymous@318>()`; scope `<anonymous@17>/buildExportImportCard`.
- [L319–319](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L319) `<anonymous@319>()`; scope `<anonymous@17>/buildExportImportCard`.
- [L324–341](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L324) `ensureExportImportPanel()`; scope `<anonymous@17>`.
- [L343–365](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L343) `scheduleEnsureExportImportPanel()`; scope `<anonymous@17>`.
- [L349–352](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L349) `<anonymous@349>()`; scope `<anonymous@17>/scheduleEnsureExportImportPanel`.
- [L353–356](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L353) `<anonymous@353>()`; scope `<anonymous@17>/scheduleEnsureExportImportPanel`.
- [L357–360](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L357) `<anonymous@357>()`; scope `<anonymous@17>/scheduleEnsureExportImportPanel`.
- [L361–364](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L361) `<anonymous@361>()`; scope `<anonymous@17>/scheduleEnsureExportImportPanel`.
- [L368–377](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L368) `window.labelRegeneratorImportEditorConfig(payload)`; scope `<anonymous@17>`.
- [L371–375](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L371) `<anonymous@371>(key)`; scope `<anonymous@17>/window.labelRegeneratorImportEditorConfig`.

## Premenné a pôvodné inicializátory

Dlhé inicializátory sú tu skrátené na 300 znakov; úplné znenie je v inventory.json a v zdroji.

- [L22](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L22) `const CONFIG_KEYS = [ 'labelRegeneratorLayoutConfigV201' ]`; scope `<anonymous@17>`.
- [L25](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L25) `const EXPORT_TYPE = 'labelRegeneratorV2.editorConfig'`; scope `<anonymous@17>`.
- [L26](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L26) `const L_PRINT_DELAY_OVERRIDE_MS = 1000`; scope `<anonymous@17>`.
- [L27](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L27) `const AUTO_CLOSE_AFTER_PRINT_MS = 1200`; scope `<anonymous@17>`.
- [L40](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L40) `const originalSetTimeout = window.setTimeout.bind(window)`; scope `<anonymous@17>/patchDelayedPrintTimeout`.
- [L42](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L42) `const args = Array.prototype.slice.call(arguments, 2)`; scope `<anonymous@17>/patchDelayedPrintTimeout/window.setTimeout`.
- [L43](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L43) `let nextDelay = delay`; scope `<anonymous@17>/patchDelayedPrintTimeout/window.setTimeout`.
- [L55](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L55) `const originalPrint = window.print.bind(window)`; scope `<anonymous@17>/patchPrintAutoClose`.
- [L57](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L57) `const result = originalPrint()`; scope `<anonymous@17>/patchPrintAutoClose/window.print`.
- [L75](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L75) `const target = event.target`; scope `<anonymous@17>/bindEnterPrintFromOverrideInputs/<anonymous@73>`.
- [L92](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L92) `const style = document.createElement('style')`; scope `<anonymous@17>/ensureNonPrintCleanupStyles`.
- [L122](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L122) `const wrapper = input.closest('.lr-detached-field, .lr-override-field') || input`; scope `<anonymous@17>/removeLabelEditorUiOutsidePrint/<anonymous@121>`.
- [L137](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L137) `const observer = new MutationObserver(removeLabelEditorUiOutsidePrint)`; scope `<anonymous@17>/keepEditorUiOutOfDetailPage`.
- [L146](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L146) `const style = document.createElement('style')`; scope `<anonymous@17>/ensureExportImportStyles`.
- [L208](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L208) `const keys = {}`; scope `<anonymous@17>/readConfigExport`.
- [L210](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L210) `const value = localStorage.getItem(key)`; scope `<anonymous@17>/readConfigExport/<anonymous@209>`.
- [L224](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L224) `const parsed = JSON.parse(String(rawText || '').trim())`; scope `<anonymous@17>/normalizeImportPayload`.
- [L242](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L242) `const status = card.querySelector('.lr-export-import-status')`; scope `<anonymous@17>/setStatus`.
- [L257](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L257) `const textarea = card.querySelector('.lr-export-import-text')`; scope `<anonymous@17>/handleExport`.
- [L258](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L258) `const payload = readConfigExport()`; scope `<anonymous@17>/handleExport`.
- [L259](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L259) `const text = JSON.stringify(payload, null, 2)`; scope `<anonymous@17>/handleExport`.
- [L265](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L265) `const copied = await copyText(text)`; scope `<anonymous@17>/handleExport`.
- [L273](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L273) `const textarea = card.querySelector('.lr-export-import-text')`; scope `<anonymous@17>/handleImport`.
- [L275](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L275) `const importedKeys = normalizeImportPayload(textarea.value)`; scope `<anonymous@17>/handleImport`.
- [L289](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L289) `const card = document.createElement('section')`; scope `<anonymous@17>/buildExportImportCard`.
- [L293](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L293) `const actions = document.createElement('div')`; scope `<anonymous@17>/buildExportImportCard`.
- [L296](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L296) `const exportButton = document.createElement('button')`; scope `<anonymous@17>/buildExportImportCard`.
- [L300](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L300) `const importButton = document.createElement('button')`; scope `<anonymous@17>/buildExportImportCard`.
- [L308](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L308) `const textarea = document.createElement('textarea')`; scope `<anonymous@17>/buildExportImportCard`.
- [L313](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L313) `const status = document.createElement('div')`; scope `<anonymous@17>/buildExportImportCard`.
- [L331](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L331) `const panel = document.getElementById('lr-config-panel')`; scope `<anonymous@17>/ensureExportImportPanel`.
- [L334](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L334) `const topbar = panel.querySelector('.lr-panel-topbar')`; scope `<anonymous@17>/ensureExportImportPanel`.
- [L335](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L335) `const card = buildExportImportCard()`; scope `<anonymous@17>/ensureExportImportPanel`.
- [L369](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L369) `const text = typeof payload === 'string' ? payload : JSON.stringify(payload)`; scope `<anonymous@17>/window.labelRegeneratorImportEditorConfig`.
- [L370](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L370) `const importedKeys = normalizeImportPayload(text)`; scope `<anonymous@17>/window.labelRegeneratorImportEditorConfig`.

## storage

- [L17](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L17) `function () { 'use strict'; window.labelRegeneratorV2Version = '2.0.21'; const CONFIG_KEYS = [ 'labelRegeneratorLayoutConfigV201' ]; const EXPORT_TYPE = 'labelRegeneratorV2.editorConfig'; const L_PRINT_DELAY_OVERRIDE_MS = 1000; const AUTO_CLOSE_AFTER_PRINT_MS = 1200; function isPrintLabelPage() { re`; scope `root`.
- [L210](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L210) `localStorage.getItem(key)`; scope `<anonymous@17>/readConfigExport/<anonymous@209>`.
- [L278](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L278) `localStorage.setItem(key, importedKeys[key])`; scope `<anonymous@17>/handleImport/<anonymous@276>`.
- [L373](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L373) `localStorage.setItem(key, importedKeys[key])`; scope `<anonymous@17>/window.labelRegeneratorImportEditorConfig/<anonymous@371>`.

## events

- [L17](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L17) `function () { 'use strict'; window.labelRegeneratorV2Version = '2.0.21'; const CONFIG_KEYS = [ 'labelRegeneratorLayoutConfigV201' ]; const EXPORT_TYPE = 'labelRegeneratorV2.editorConfig'; const L_PRINT_DELAY_OVERRIDE_MS = 1000; const AUTO_CLOSE_AFTER_PRINT_MS = 1200; function isPrintLabelPage() { re`; scope `root`.
- [L73](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L73) `document.addEventListener('keydown', (event) => { if (event.key !== 'Enter') return; const target = event.target; if (!(target instanceof HTMLInputElement)) return; if (!target.matches('#lr-detached-overrides input[data-override-zone]')) return; event.preventDefault(); event.stopImmediatePropagation`; scope `<anonymous@17>/bindEnterPrintFromOverrideInputs`.
- [L318](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L318) `exportButton.addEventListener('click', () => handleExport(card))`; scope `<anonymous@17>/buildExportImportCard`.
- [L319](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L319) `importButton.addEventListener('click', () => handleImport(card))`; scope `<anonymous@17>/buildExportImportCard`.
- [L379](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L379) `window.addEventListener('labelRegeneratorReady', scheduleEnsureExportImportPanel)`; scope `<anonymous@17>`.
- [L380](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L380) `window.addEventListener('resize', scheduleEnsureExportImportPanel)`; scope `<anonymous@17>`.
- [L381](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L381) `window.addEventListener('scroll', scheduleEnsureExportImportPanel, true)`; scope `<anonymous@17>`.
- [L384](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L384) `document.addEventListener('DOMContentLoaded', scheduleEnsureExportImportPanel)`; scope `<anonymous@17>`.

## lifecycle

- [L17](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L17) `function () { 'use strict'; window.labelRegeneratorV2Version = '2.0.21'; const CONFIG_KEYS = [ 'labelRegeneratorLayoutConfigV201' ]; const EXPORT_TYPE = 'labelRegeneratorV2.editorConfig'; const L_PRINT_DELAY_OVERRIDE_MS = 1000; const AUTO_CLOSE_AFTER_PRINT_MS = 1200; function isPrintLabelPage() { re`; scope `root`.
- [L40](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L40) `window.setTimeout.bind(window)`; scope `<anonymous@17>/patchDelayedPrintTimeout`.
- [L58](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L58) `setTimeout(() => { try { if (!window.closed) window.close(); } catch (error) { // Browser may block closing non-popup tabs; ignore. } }, AUTO_CLOSE_AFTER_PRINT_MS)`; scope `<anonymous@17>/patchPrintAutoClose/window.print`.
- [L130](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L130) `requestAnimationFrame(removeLabelEditorUiOutsidePrint)`; scope `<anonymous@17>/keepEditorUiOutOfDetailPage`.
- [L131](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L131) `setTimeout(removeLabelEditorUiOutsidePrint, 80)`; scope `<anonymous@17>/keepEditorUiOutOfDetailPage`.
- [L132](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L132) `setTimeout(removeLabelEditorUiOutsidePrint, 250)`; scope `<anonymous@17>/keepEditorUiOutOfDetailPage`.
- [L133](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L133) `setTimeout(removeLabelEditorUiOutsidePrint, 800)`; scope `<anonymous@17>/keepEditorUiOutOfDetailPage`.
- [L134](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L134) `setTimeout(removeLabelEditorUiOutsidePrint, 1600)`; scope `<anonymous@17>/keepEditorUiOutOfDetailPage`.
- [L137](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L137) `MutationObserver(removeLabelEditorUiOutsidePrint)`; scope `<anonymous@17>/keepEditorUiOutOfDetailPage`.
- [L138](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L138) `observer.observe(document.body, { childList: true, subtree: true })`; scope `<anonymous@17>/keepEditorUiOutOfDetailPage`.
- [L282](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L282) `setTimeout(() => location.reload(), 250)`; scope `<anonymous@17>/handleImport`.
- [L349](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L349) `requestAnimationFrame(() => { keepEditorUiOutOfDetailPage(); ensureExportImportPanel(); })`; scope `<anonymous@17>/scheduleEnsureExportImportPanel`.
- [L353](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L353) `setTimeout(() => { keepEditorUiOutOfDetailPage(); ensureExportImportPanel(); }, 150)`; scope `<anonymous@17>/scheduleEnsureExportImportPanel`.
- [L357](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L357) `setTimeout(() => { keepEditorUiOutOfDetailPage(); ensureExportImportPanel(); }, 600)`; scope `<anonymous@17>/scheduleEnsureExportImportPanel`.
- [L361](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L361) `setTimeout(() => { keepEditorUiOutOfDetailPage(); ensureExportImportPanel(); }, 1500)`; scope `<anonymous@17>/scheduleEnsureExportImportPanel`.

## io

- [L17](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L17) `function () { 'use strict'; window.labelRegeneratorV2Version = '2.0.21'; const CONFIG_KEYS = [ 'labelRegeneratorLayoutConfigV201' ]; const EXPORT_TYPE = 'labelRegeneratorV2.editorConfig'; const L_PRINT_DELAY_OVERRIDE_MS = 1000; const AUTO_CLOSE_AFTER_PRINT_MS = 1200; function isPrintLabelPage() { re`; scope `root`.
- [L82](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L82) `window.print()`; scope `<anonymous@17>/bindEnterPrintFromOverrideInputs/<anonymous@73>`.
- [L250](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L250) `navigator.clipboard.writeText(text)`; scope `<anonymous@17>/copyText`.

## dom-read

- [L17](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L17) `function () { 'use strict'; window.labelRegeneratorV2Version = '2.0.21'; const CONFIG_KEYS = [ 'labelRegeneratorLayoutConfigV201' ]; const EXPORT_TYPE = 'labelRegeneratorV2.editorConfig'; const L_PRINT_DELAY_OVERRIDE_MS = 1000; const AUTO_CLOSE_AFTER_PRINT_MS = 1200; function isPrintLabelPage() { re`; scope `root`.
- [L77](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L77) `target.matches('#lr-detached-overrides input[data-override-zone]')`; scope `<anonymous@17>/bindEnterPrintFromOverrideInputs/<anonymous@73>`.
- [L90](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L90) `document.getElementById('lr-non-print-cleanup-style-v220')`; scope `<anonymous@17>/ensureNonPrintCleanupStyles`.
- [L118](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L118) `document.querySelectorAll(selector).forEach((node) => node.remove())`; scope `<anonymous@17>/removeLabelEditorUiOutsidePrint/<anonymous@117>`.
- [L118](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L118) `document.querySelectorAll(selector)`; scope `<anonymous@17>/removeLabelEditorUiOutsidePrint/<anonymous@117>`.
- [L121](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L121) `document.querySelectorAll('input[data-override-zone]').forEach((input) => { const wrapper = input.closest('.lr-detached-field, .lr-override-field') || input; wrapper.remove(); })`; scope `<anonymous@17>/removeLabelEditorUiOutsidePrint`.
- [L121](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L121) `document.querySelectorAll('input[data-override-zone]')`; scope `<anonymous@17>/removeLabelEditorUiOutsidePrint`.
- [L122](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L122) `input.closest('.lr-detached-field, .lr-override-field')`; scope `<anonymous@17>/removeLabelEditorUiOutsidePrint/<anonymous@121>`.
- [L144](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L144) `document.getElementById('lr-export-import-style-v220')`; scope `<anonymous@17>/ensureExportImportStyles`.
- [L242](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L242) `card.querySelector('.lr-export-import-status')`; scope `<anonymous@17>/setStatus`.
- [L257](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L257) `card.querySelector('.lr-export-import-text')`; scope `<anonymous@17>/handleExport`.
- [L273](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L273) `card.querySelector('.lr-export-import-text')`; scope `<anonymous@17>/handleImport`.
- [L331](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L331) `document.getElementById('lr-config-panel')`; scope `<anonymous@17>/ensureExportImportPanel`.
- [L332](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L332) `panel.querySelector('[data-lr-export-import="true"]')`; scope `<anonymous@17>/ensureExportImportPanel`.
- [L334](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L334) `panel.querySelector('.lr-panel-topbar')`; scope `<anonymous@17>/ensureExportImportPanel`.

## dom-write

- [L17](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L17) `function () { 'use strict'; window.labelRegeneratorV2Version = '2.0.21'; const CONFIG_KEYS = [ 'labelRegeneratorLayoutConfigV201' ]; const EXPORT_TYPE = 'labelRegeneratorV2.editorConfig'; const L_PRINT_DELAY_OVERRIDE_MS = 1000; const AUTO_CLOSE_AFTER_PRINT_MS = 1200; function isPrintLabelPage() { re`; scope `root`.
- [L105](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L105) `document.head.appendChild(style)`; scope `<anonymous@17>/ensureNonPrintCleanupStyles`.
- [L118](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L118) `node.remove()`; scope `<anonymous@17>/removeLabelEditorUiOutsidePrint/<anonymous@117>/<anonymous@118>`.
- [L123](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L123) `wrapper.remove()`; scope `<anonymous@17>/removeLabelEditorUiOutsidePrint/<anonymous@121>`.
- [L204](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L204) `document.head.appendChild(style)`; scope `<anonymous@17>/ensureExportImportStyles`.
- [L304](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L304) `actions.appendChild(exportButton)`; scope `<anonymous@17>/buildExportImportCard`.
- [L305](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L305) `actions.appendChild(importButton)`; scope `<anonymous@17>/buildExportImportCard`.
- [L306](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L306) `card.appendChild(actions)`; scope `<anonymous@17>/buildExportImportCard`.
- [L311](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L311) `card.appendChild(textarea)`; scope `<anonymous@17>/buildExportImportCard`.
- [L316](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L316) `card.appendChild(status)`; scope `<anonymous@17>/buildExportImportCard`.
- [L337](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L337) `panel.insertBefore(card, topbar.nextSibling)`; scope `<anonymous@17>/ensureExportImportPanel`.
- [L339](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L339) `panel.appendChild(card)`; scope `<anonymous@17>/ensureExportImportPanel`.

## logs

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## Zápisy do globálov, DOM a ostatných vlastností

- [L20](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L20) `window.labelRegeneratorV2Version = '2.0.21'`.
- [L41](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L41) `window.setTimeout = function (callback, delay) { const args = Array.prototype.slice.call(arguments, 2); let nextDelay = delay; if (delay === 3000 && typeof callback === 'function' && String(callback).includes('triggerDelayedPrintWhenReady')) { nextDelay = L_PRINT_DELAY_OVERRIDE_MS; } return original`.
- [L49](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L49) `window.__lrDelayPatchV221 = true`.
- [L56](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L56) `window.print = function () { const result = originalPrint(); setTimeout(() => { try { if (!window.closed) window.close(); } catch (error) { // Browser may block closing non-popup tabs; ignore. } }, AUTO_CLOSE_AFTER_PRINT_MS); return result; }`.
- [L67](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L67) `window.__lrPrintAutoClosePatchV221 = true`.
- [L85](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L85) `window.__lrEnterPrintPatchV221 = true`.
- [L93](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L93) `style.id = 'lr-non-print-cleanup-style-v220'`.
- [L94](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L94) `style.textContent = ' #lr-detached-overrides, #lr-config-panel, #lr-config-toggle, .lr-override-card, input[data-override-zone] { display: none !important; visibility: hidden !important; pointer-events: none !important; } '`.
- [L139](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L139) `document.body.dataset.lrNonPrintObserver = '1'`.
- [L147](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L147) `style.id = 'lr-export-import-style-v220'`.
- [L148](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L148) `style.textContent = ' #lr-config-panel .lr-export-import-card { border: 1px solid #c9c9c9 !important; background: #f4f4f4 !important; border-radius: 0 !important; padding: 10px !important; margin: 8px 0 !important; box-sizing: border-box !important; } #lr-config-panel .lr-export-import-actions { dis`.
- [L244](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L244) `status.textContent = text`.
- [L245](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L245) `status.style.color = isError ? '#a00000' : '#555'`.
- [L290](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L290) `card.className = 'lr-export-import-card'`.
- [L294](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L294) `actions.className = 'lr-export-import-actions'`.
- [L298](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L298) `exportButton.textContent = 'Export'`.
- [L302](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L302) `importButton.textContent = 'Import'`.
- [L309](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L309) `textarea.className = 'lr-export-import-text'`.
- [L314](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L314) `status.className = 'lr-export-import-status'`.
- [L315](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L315) `status.textContent = 'Nastavenia su lokalne v tomto prehliadaci.'`.
- [L367](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L367) `window.labelRegeneratorExportEditorConfig = readConfigExport`.
- [L368](https://github.com/denkz0ne/moduly-FC-userscripts/blob/769b84c6bc6fdde85ace956714a25b983e879ab1/labelRegeneratorV2.user.js#L368) `window.labelRegeneratorImportEditorConfig = (payload) => { const text = typeof payload === 'string' ? payload : JSON.stringify(payload); const importedKeys = normalizeImportPayload(text); CONFIG_KEYS.forEach((key) => { if (Object.prototype.hasOwnProperty.call(importedKeys, key)) { localStorage.setIt`.
