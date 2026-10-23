# labelInstantPrint.beta.js

Zdroj: labelInstantPrint.beta.js; referencia: 75087f8c4cbd34190e69318038bda6ef36eee0f2.
SHA-256: `b2c90628a8d50e01b6ce5da3112d8ceecebc60616b1bc6223e09be3c036d615b`. Riadkov: 241.

AST inventár: obsahuje aj vnorené/anonýmne funkcie a lokálne premenné. Zoznam premenných nie je zoznam editovateľných nastavení. Volania sú klasifikované podľa názvu; dynamické aliasy môžu vyžadovať ručné dohľadanie. Historické @require hlavičky v načítanom JS nie sú ďalším automaticky spusteným @require reťazcom.

## Metadata

```json
{}
```

## Funkcie a signatúry

- [L1–240](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelInstantPrint.beta.js#L1) `<anonymous@1>()`; scope `root`.
- [L12–14](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelInstantPrint.beta.js#L12) `isDetailPage()`; scope `<anonymous@1>`.
- [L16–20](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelInstantPrint.beta.js#L16) `isTypingTarget(target)`; scope `<anonymous@1>`.
- [L22–28](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelInstantPrint.beta.js#L22) `getVpNumber()`; scope `<anonymous@1>`.
- [L30–66](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelInstantPrint.beta.js#L30) `ensureToastStyle()`; scope `<anonymous@1>`.
- [L68–85](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelInstantPrint.beta.js#L68) `showToast(message, isError)`; scope `<anonymous@1>`.
- [L82–84](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelInstantPrint.beta.js#L82) `<anonymous@82>()`; scope `<anonymous@1>/showToast`.
- [L87–97](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelInstantPrint.beta.js#L87) `persistPrintZone(zoneKey, aliases, value)`; scope `<anonymous@1>`.
- [L89–96](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelInstantPrint.beta.js#L89) `<anonymous@89>(key)`; scope `<anonymous@1>/persistPrintZone`.
- [L99–107](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelInstantPrint.beta.js#L99) `syncLabelValuesFromDetailPage()`; scope `<anonymous@1>`.
- [L109–118](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelInstantPrint.beta.js#L109) `cleanupActiveJob()`; scope `<anonymous@1>`.
- [L120–139](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelInstantPrint.beta.js#L120) `createHiddenFrame(url)`; scope `<anonymous@1>`.
- [L141–152](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelInstantPrint.beta.js#L141) `tryPrintFrame(frame)`; scope `<anonymous@1>`.
- [L154–187](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelInstantPrint.beta.js#L154) `waitForFrameReadyAndPrint(frame)`; scope `<anonymous@1>`.
- [L157–174](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelInstantPrint.beta.js#L157) `<anonymous@157>()`; scope `<anonymous@1>/waitForFrameReadyAndPrint`.
- [L176–186](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelInstantPrint.beta.js#L176) `<anonymous@176>()`; scope `<anonymous@1>/waitForFrameReadyAndPrint`.
- [L189–212](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelInstantPrint.beta.js#L189) `startInstantPrint()`; scope `<anonymous@1>`.
- [L214–227](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelInstantPrint.beta.js#L214) `bindInstantPrintShortcut()`; scope `<anonymous@1>`.
- [L217–224](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelInstantPrint.beta.js#L217) `<anonymous@217>(event)`; scope `<anonymous@1>/bindInstantPrintShortcut`.

## Premenné a pôvodné inicializátory

Dlhé inicializátory sú tu skrátené na 300 znakov; úplné znenie je v inventory.json a v zdroji.

- [L4](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelInstantPrint.beta.js#L4) `const MODULE_VERSION = '0.1.0-beta'`; scope `<anonymous@1>`.
- [L5](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelInstantPrint.beta.js#L5) `const FRAME_ID = 'lr-instant-print-frame'`; scope `<anonymous@1>`.
- [L6](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelInstantPrint.beta.js#L6) `const TOAST_ID = 'lr-instant-print-toast'`; scope `<anonymous@1>`.
- [L7](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelInstantPrint.beta.js#L7) `const READY_TIMEOUT_MS = 10000`; scope `<anonymous@1>`.
- [L8](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelInstantPrint.beta.js#L8) `const CLEANUP_AFTER_PRINT_MS = 2500`; scope `<anonymous@1>`.
- [L10](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelInstantPrint.beta.js#L10) `let activeJob = null`; scope `<anonymous@1>`.
- [L18](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelInstantPrint.beta.js#L18) `const tagName = target.tagName`; scope `<anonymous@1>/isTypingTarget`.
- [L23](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelInstantPrint.beta.js#L23) `const strong = document.querySelector('strong.red')`; scope `<anonymous@1>/getVpNumber`.
- [L26](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelInstantPrint.beta.js#L26) `const match = location.pathname.match(/\/detail\/index\/(\d+)/)`; scope `<anonymous@1>/getVpNumber`.
- [L33](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelInstantPrint.beta.js#L33) `const style = document.createElement('style')`; scope `<anonymous@1>/ensureToastStyle`.
- [L70](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelInstantPrint.beta.js#L70) `let toast = document.getElementById(TOAST_ID)`; scope `<anonymous@1>/showToast`.
- [L88](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelInstantPrint.beta.js#L88) `const normalized = value == null ? '' : String(value).trim()`; scope `<anonymous@1>/persistPrintZone`.
- [L100](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelInstantPrint.beta.js#L100) `const leftBadge = document.querySelector('#shortcut-info-label')`; scope `<anonymous@1>/syncLabelValuesFromDetailPage`.
- [L101](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelInstantPrint.beta.js#L101) `const rightBadge = document.querySelector('#shortcut-info-date')`; scope `<anonymous@1>/syncLabelValuesFromDetailPage`.
- [L102](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelInstantPrint.beta.js#L102) `const leftValue = leftBadge ? (leftBadge.textContent || '').trim() : localStorage.getItem('TM_testoLeft') || ''`; scope `<anonymous@1>/syncLabelValuesFromDetailPage`.
- [L103](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelInstantPrint.beta.js#L103) `const rightValue = rightBadge ? (rightBadge.textContent || '').trim() : localStorage.getItem('TM_testoRight') || ''`; scope `<anonymous@1>/syncLabelValuesFromDetailPage`.
- [L121](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelInstantPrint.beta.js#L121) `const oldFrame = document.getElementById(FRAME_ID)`; scope `<anonymous@1>/createHiddenFrame`.
- [L124](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelInstantPrint.beta.js#L124) `const frame = document.createElement('iframe')`; scope `<anonymous@1>/createHiddenFrame`.
- [L142](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelInstantPrint.beta.js#L142) `const printWindow = frame.contentWindow`; scope `<anonymous@1>/tryPrintFrame`.
- [L155](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelInstantPrint.beta.js#L155) `const startedAt = Date.now()`; scope `<anonymous@1>/waitForFrameReadyAndPrint`.
- [L161](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelInstantPrint.beta.js#L161) `const printWindow = frame.contentWindow`; scope `<anonymous@1>/waitForFrameReadyAndPrint/<anonymous@157>`.
- [L162](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelInstantPrint.beta.js#L162) `const ready = Boolean(printWindow && printWindow.__labelRegeneratorReady)`; scope `<anonymous@1>/waitForFrameReadyAndPrint/<anonymous@157>`.
- [L163](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelInstantPrint.beta.js#L163) `const timedOut = Date.now() - startedAt > READY_TIMEOUT_MS`; scope `<anonymous@1>/waitForFrameReadyAndPrint/<anonymous@157>`.
- [L192](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelInstantPrint.beta.js#L192) `const vpNumber = getVpNumber()`; scope `<anonymous@1>/startInstantPrint`.
- [L201](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelInstantPrint.beta.js#L201) `const url = 'https://moduly.faxcopy.sk/vyrobne_prikazy/detail/printLabel/${vpNumber}'`; scope `<anonymous@1>/startInstantPrint`.
- [L202](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelInstantPrint.beta.js#L202) `const frame = createHiddenFrame(url)`; scope `<anonymous@1>/startInstantPrint`.

## storage

- [L1](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelInstantPrint.beta.js#L1) `function () { 'use strict'; const MODULE_VERSION = '0.1.0-beta'; const FRAME_ID = 'lr-instant-print-frame'; const TOAST_ID = 'lr-instant-print-toast'; const READY_TIMEOUT_MS = 10000; const CLEANUP_AFTER_PRINT_MS = 2500; let activeJob = null; function isDetailPage() { return /\/vyrobne_prikazy\/detai`; scope `root`.
- [L92](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelInstantPrint.beta.js#L92) `localStorage.setItem(key, normalized)`; scope `<anonymous@1>/persistPrintZone/<anonymous@89>`.
- [L94](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelInstantPrint.beta.js#L94) `localStorage.removeItem(key)`; scope `<anonymous@1>/persistPrintZone/<anonymous@89>`.
- [L102](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelInstantPrint.beta.js#L102) `localStorage.getItem('TM_testoLeft')`; scope `<anonymous@1>/syncLabelValuesFromDetailPage`.
- [L103](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelInstantPrint.beta.js#L103) `localStorage.getItem('TM_testoRight')`; scope `<anonymous@1>/syncLabelValuesFromDetailPage`.

## events

- [L1](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelInstantPrint.beta.js#L1) `function () { 'use strict'; const MODULE_VERSION = '0.1.0-beta'; const FRAME_ID = 'lr-instant-print-frame'; const TOAST_ID = 'lr-instant-print-toast'; const READY_TIMEOUT_MS = 10000; const CLEANUP_AFTER_PRINT_MS = 2500; let activeJob = null; function isDetailPage() { return /\/vyrobne_prikazy\/detai`; scope `root`.
- [L217](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelInstantPrint.beta.js#L217) `window.addEventListener('keydown', (event) => { if (event.key.toLowerCase() !== 'k') return; if (event.repeat || event.ctrlKey || event.metaKey || event.altKey || isTypingTarget(event.target)) return; event.preventDefault(); event.stopImmediatePropagation(); startInstantPrint(); }, true)`; scope `<anonymous@1>/bindInstantPrintShortcut`.
- [L236](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelInstantPrint.beta.js#L236) `document.addEventListener('DOMContentLoaded', bindInstantPrintShortcut)`; scope `<anonymous@1>`.

## lifecycle

- [L1](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelInstantPrint.beta.js#L1) `function () { 'use strict'; const MODULE_VERSION = '0.1.0-beta'; const FRAME_ID = 'lr-instant-print-frame'; const TOAST_ID = 'lr-instant-print-toast'; const READY_TIMEOUT_MS = 10000; const CLEANUP_AFTER_PRINT_MS = 2500; let activeJob = null; function isDetailPage() { return /\/vyrobne_prikazy\/detai`; scope `root`.
- [L81](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelInstantPrint.beta.js#L81) `clearTimeout(toast._lrTimer)`; scope `<anonymous@1>/showToast`.
- [L82](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelInstantPrint.beta.js#L82) `setTimeout(() => { toast.classList.remove('is-visible'); }, isError ? 4500 : 2200)`; scope `<anonymous@1>/showToast`.
- [L111](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelInstantPrint.beta.js#L111) `clearInterval(activeJob.readyTimer)`; scope `<anonymous@1>/cleanupActiveJob`.
- [L112](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelInstantPrint.beta.js#L112) `clearTimeout(activeJob.timeoutTimer)`; scope `<anonymous@1>/cleanupActiveJob`.
- [L113](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelInstantPrint.beta.js#L113) `clearTimeout(activeJob.cleanupTimer)`; scope `<anonymous@1>/cleanupActiveJob`.
- [L150](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelInstantPrint.beta.js#L150) `setTimeout(cleanupActiveJob, CLEANUP_AFTER_PRINT_MS)`; scope `<anonymous@1>/tryPrintFrame`.
- [L157](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelInstantPrint.beta.js#L157) `setInterval(() => { if (!activeJob) return; try { const printWindow = frame.contentWindow; const ready = Boolean(printWindow && printWindow.__labelRegeneratorReady); const timedOut = Date.now() - startedAt > READY_TIMEOUT_MS; if (!ready && !timedOut) return; clearInterval(activeJob.readyTimer); acti`; scope `<anonymous@1>/waitForFrameReadyAndPrint`.
- [L167](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelInstantPrint.beta.js#L167) `clearInterval(activeJob.readyTimer)`; scope `<anonymous@1>/waitForFrameReadyAndPrint/<anonymous@157>`.
- [L176](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelInstantPrint.beta.js#L176) `setTimeout(() => { if (!activeJob || !activeJob.readyTimer) return; clearInterval(activeJob.readyTimer); activeJob.readyTimer = null; try { tryPrintFrame(frame); } catch (error) { cleanupActiveJob(); showToast('Instant tlac zlyhala.', true); } }, READY_TIMEOUT_MS + 800)`; scope `<anonymous@1>/waitForFrameReadyAndPrint`.
- [L178](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelInstantPrint.beta.js#L178) `clearInterval(activeJob.readyTimer)`; scope `<anonymous@1>/waitForFrameReadyAndPrint/<anonymous@176>`.

## io

- [L146](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelInstantPrint.beta.js#L146) `printWindow.print()`; scope `<anonymous@1>/tryPrintFrame`.

## dom-read

- [L1](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelInstantPrint.beta.js#L1) `function () { 'use strict'; const MODULE_VERSION = '0.1.0-beta'; const FRAME_ID = 'lr-instant-print-frame'; const TOAST_ID = 'lr-instant-print-toast'; const READY_TIMEOUT_MS = 10000; const CLEANUP_AFTER_PRINT_MS = 2500; let activeJob = null; function isDetailPage() { return /\/vyrobne_prikazy\/detai`; scope `root`.
- [L23](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelInstantPrint.beta.js#L23) `document.querySelector('strong.red')`; scope `<anonymous@1>/getVpNumber`.
- [L31](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelInstantPrint.beta.js#L31) `document.getElementById('lr-instant-print-toast-style')`; scope `<anonymous@1>/ensureToastStyle`.
- [L70](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelInstantPrint.beta.js#L70) `document.getElementById(TOAST_ID)`; scope `<anonymous@1>/showToast`.
- [L100](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelInstantPrint.beta.js#L100) `document.querySelector('#shortcut-info-label')`; scope `<anonymous@1>/syncLabelValuesFromDetailPage`.
- [L101](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelInstantPrint.beta.js#L101) `document.querySelector('#shortcut-info-date')`; scope `<anonymous@1>/syncLabelValuesFromDetailPage`.
- [L121](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelInstantPrint.beta.js#L121) `document.getElementById(FRAME_ID)`; scope `<anonymous@1>/createHiddenFrame`.

## dom-write

- [L1](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelInstantPrint.beta.js#L1) `function () { 'use strict'; const MODULE_VERSION = '0.1.0-beta'; const FRAME_ID = 'lr-instant-print-frame'; const TOAST_ID = 'lr-instant-print-toast'; const READY_TIMEOUT_MS = 10000; const CLEANUP_AFTER_PRINT_MS = 2500; let activeJob = null; function isDetailPage() { return /\/vyrobne_prikazy\/detai`; scope `root`.
- [L65](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelInstantPrint.beta.js#L65) `document.head.appendChild(style)`; scope `<anonymous@1>/ensureToastStyle`.
- [L74](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelInstantPrint.beta.js#L74) `document.body.appendChild(toast)`; scope `<anonymous@1>/showToast`.
- [L83](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelInstantPrint.beta.js#L83) `toast.classList.remove('is-visible')`; scope `<anonymous@1>/showToast/<anonymous@82>`.
- [L115](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelInstantPrint.beta.js#L115) `activeJob.frame.remove()`; scope `<anonymous@1>/cleanupActiveJob`.
- [L122](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelInstantPrint.beta.js#L122) `oldFrame.remove()`; scope `<anonymous@1>/createHiddenFrame`.
- [L127](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelInstantPrint.beta.js#L127) `frame.setAttribute('aria-hidden', 'true')`; scope `<anonymous@1>/createHiddenFrame`.
- [L137](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelInstantPrint.beta.js#L137) `document.body.appendChild(frame)`; scope `<anonymous@1>/createHiddenFrame`.

## logs

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## Zápisy do globálov, DOM a ostatných vlastností

- [L34](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelInstantPrint.beta.js#L34) `style.id = 'lr-instant-print-toast-style'`.
- [L35](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelInstantPrint.beta.js#L35) `style.textContent = ' #${TOAST_ID} { position: fixed; right: 18px; bottom: 18px; z-index: 2147483647; min-width: 210px; max-width: 360px; box-sizing: border-box; border: 1px solid #bdbdbd; background: #111; color: #fff; padding: 10px 12px; font: 700 12px/1.35 Arial, sans-serif; box-shadow: 0 8px 24p`.
- [L73](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelInstantPrint.beta.js#L73) `toast.id = TOAST_ID`.
- [L77](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelInstantPrint.beta.js#L77) `toast.textContent = message`.
- [L125](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelInstantPrint.beta.js#L125) `frame.id = FRAME_ID`.
- [L128](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelInstantPrint.beta.js#L128) `frame.style.position = 'fixed'`.
- [L129](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelInstantPrint.beta.js#L129) `frame.style.right = '0'`.
- [L130](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelInstantPrint.beta.js#L130) `frame.style.bottom = '0'`.
- [L131](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelInstantPrint.beta.js#L131) `frame.style.width = '1px'`.
- [L132](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelInstantPrint.beta.js#L132) `frame.style.height = '1px'`.
- [L133](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelInstantPrint.beta.js#L133) `frame.style.opacity = '0'`.
- [L134](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelInstantPrint.beta.js#L134) `frame.style.border = '0'`.
- [L135](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelInstantPrint.beta.js#L135) `frame.style.pointerEvents = 'none'`.
- [L136](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelInstantPrint.beta.js#L136) `frame.style.zIndex = '-1'`.
- [L226](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelInstantPrint.beta.js#L226) `window.__labelInstantPrintBetaKBound = true`.
- [L229](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/labelInstantPrint.beta.js#L229) `window.labelInstantPrintBeta = { version: MODULE_VERSION, print: startInstantPrint, cleanup: cleanupActiveJob }`.
