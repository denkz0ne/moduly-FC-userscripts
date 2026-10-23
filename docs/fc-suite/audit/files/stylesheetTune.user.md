# stylesheetTune

Zdroj: stylesheetTune.user.js; referencia: 75087f8c4cbd34190e69318038bda6ef36eee0f2.
SHA-256: `fb85b0c1dc211bc202c09efdd56054ec3a1839209a293ab31b3abca00f0df1fd`. Riadkov: 106.

AST inventár: obsahuje aj vnorené/anonýmne funkcie a lokálne premenné. Zoznam premenných nie je zoznam editovateľných nastavení. Volania sú klasifikované podľa názvu; dynamické aliasy môžu vyžadovať ručné dohľadanie. Historické @require hlavičky v načítanom JS nie sú ďalším automaticky spusteným @require reťazcom.

## Metadata

```json
{
  "name": [
    "stylesheetTune"
  ],
  "namespace": [
    "http://tvoj-namespace.example"
  ],
  "version": [
    "1.4"
  ],
  "description": [
    "Prepis Stylebot CSS na Tampermonkey script + zväčšenie tlačidla accept a skrytie posuvníkov v celej tabuľke"
  ],
  "updateURL": [
    "https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/stylesheetTune.user.js"
  ],
  "downloadURL": [
    "https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/stylesheetTune.user.js"
  ],
  "match": [
    "https://moduly.faxcopy.sk/*"
  ],
  "grant": [
    "none"
  ],
  "run-at": [
    "document-start"
  ]
}
```

## Funkcie a signatúry

- [L14–105](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/stylesheetTune.user.js#L14) `<anonymous@14>()`; scope `root`.
- [L59–68](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/stylesheetTune.user.js#L59) `findVpPanels()`; scope `<anonymous@14>`.
- [L66–66](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/stylesheetTune.user.js#L66) `<anonymous@66>(header)`; scope `<anonymous@14>/findVpPanels`.
- [L70–76](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/stylesheetTune.user.js#L70) `alignVpPanelStarts({ cards, actionHeader })`; scope `<anonymous@14>`.
- [L71–71](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/stylesheetTune.user.js#L71) `<anonymous@71>(card)`; scope `<anonymous@14>/alignVpPanelStarts`.
- [L73–73](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/stylesheetTune.user.js#L73) `<anonymous@73>(card)`; scope `<anonymous@14>/alignVpPanelStarts`.
- [L75–75](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/stylesheetTune.user.js#L75) `<anonymous@75>(card)`; scope `<anonymous@14>/alignVpPanelStarts`.
- [L78–97](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/stylesheetTune.user.js#L78) `initializeVpPanelAlignment()`; scope `<anonymous@14>`.
- [L83–89](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/stylesheetTune.user.js#L83) `scheduleAlignment()`; scope `<anonymous@14>/initializeVpPanelAlignment`.
- [L85–88](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/stylesheetTune.user.js#L85) `<anonymous@85>()`; scope `<anonymous@14>/initializeVpPanelAlignment/scheduleAlignment`.
- [L100–102](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/stylesheetTune.user.js#L100) `<anonymous@100>()`; scope `<anonymous@14>`.

## Premenné a pôvodné inicializátory

Dlhé inicializátory sú tu skrátené na 300 znakov; úplné znenie je v inventory.json a v zdroji.

- [L17](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/stylesheetTune.user.js#L17) `const css = ' #dodacia_lehota_label {font-size: 13px;color: #000000;} form div strong {font-size: 12px;} span.badge.fs11 {font-size: 12px;} ul.table-toolbar li {padding-left: 10px;padding-right: 10px;} span.blue {font-size: 12px;} #frm-pokyn {font-size: 14px;line-height: 18px;} div.box.grid_6 tbody `; scope `<anonymous@14>`.
- [L55](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/stylesheetTune.user.js#L55) `const style = document.createElement('style')`; scope `<anonymous@14>`.
- [L59](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/stylesheetTune.user.js#L59) `const findVpPanels = () => { const summary = document.querySelector('#vp-detail #material-detector-summary-row'); const group = summary && summary.parentElement; if (!group) return null; const order = group.querySelector(':scope > .box.grid_6.detail'); const status = group.querySelector(':scope > .b`; scope `<anonymous@14>`.
- [L60](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/stylesheetTune.user.js#L60) `const summary = document.querySelector('#vp-detail #material-detector-summary-row')`; scope `<anonymous@14>/findVpPanels`.
- [L61](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/stylesheetTune.user.js#L61) `const group = summary && summary.parentElement`; scope `<anonymous@14>/findVpPanels`.
- [L63](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/stylesheetTune.user.js#L63) `const order = group.querySelector(':scope > .box.grid_6.detail')`; scope `<anonymous@14>/findVpPanels`.
- [L64](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/stylesheetTune.user.js#L64) `const status = group.querySelector(':scope > .box.grid_6.statuses')`; scope `<anonymous@14>/findVpPanels`.
- [L65](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/stylesheetTune.user.js#L65) `const actionHeader = Array.from(document.querySelectorAll('#vp-detail .box.grid_12.overview > .box-head')) .find(header => header.textContent.replace(/\s+/g, ' ').trim().toLocaleUpperCase('sk-SK') === 'AKCIA')`; scope `<anonymous@14>/findVpPanels`.
- [L70](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/stylesheetTune.user.js#L70) `const alignVpPanelStarts = ({ cards, actionHeader }) => { cards.forEach(card => card.style.removeProperty('margin-top')); const actionTop = actionHeader.getBoundingClientRect().top; const firstCardTop = Math.min(...cards.map(card => card.getBoundingClientRect().top)); const offset = Math.round((acti`; scope `<anonymous@14>`.
- [L72](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/stylesheetTune.user.js#L72) `const actionTop = actionHeader.getBoundingClientRect().top`; scope `<anonymous@14>/alignVpPanelStarts`.
- [L73](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/stylesheetTune.user.js#L73) `const firstCardTop = Math.min(...cards.map(card => card.getBoundingClientRect().top))`; scope `<anonymous@14>/alignVpPanelStarts`.
- [L74](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/stylesheetTune.user.js#L74) `const offset = Math.round((actionTop - firstCardTop) * 100) / 100`; scope `<anonymous@14>/alignVpPanelStarts`.
- [L78](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/stylesheetTune.user.js#L78) `const initializeVpPanelAlignment = () => { const panels = findVpPanels(); if (!panels) return false; let frame = 0; const scheduleAlignment = () => { if (frame) cancelAnimationFrame(frame); frame = requestAnimationFrame(() => { frame = 0; alignVpPanelStarts(panels); }); }; scheduleAlignment(); windo`; scope `<anonymous@14>`.
- [L79](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/stylesheetTune.user.js#L79) `const panels = findVpPanels()`; scope `<anonymous@14>/initializeVpPanelAlignment`.
- [L82](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/stylesheetTune.user.js#L82) `let frame = 0`; scope `<anonymous@14>/initializeVpPanelAlignment`.
- [L83](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/stylesheetTune.user.js#L83) `const scheduleAlignment = () => { if (frame) cancelAnimationFrame(frame); frame = requestAnimationFrame(() => { frame = 0; alignVpPanelStarts(panels); }); }`; scope `<anonymous@14>/initializeVpPanelAlignment`.
- [L94](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/stylesheetTune.user.js#L94) `const contentObserver = new MutationObserver(scheduleAlignment)`; scope `<anonymous@14>/initializeVpPanelAlignment`.
- [L100](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/stylesheetTune.user.js#L100) `const pageObserver = new MutationObserver(() => { if (initializeVpPanelAlignment()) pageObserver.disconnect(); })`; scope `<anonymous@14>`.

## storage

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## events

- [L14](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/stylesheetTune.user.js#L14) `function() { 'use strict'; const css = ' #dodacia_lehota_label {font-size: 13px;color: #000000;} form div strong {font-size: 12px;} span.badge.fs11 {font-size: 12px;} ul.table-toolbar li {padding-left: 10px;padding-right: 10px;} span.blue {font-size: 12px;} #frm-pokyn {font-size: 14px;line-height: 1`; scope `root`.
- [L92](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/stylesheetTune.user.js#L92) `window.addEventListener('resize', scheduleAlignment, { passive: true })`; scope `<anonymous@14>/initializeVpPanelAlignment`.
- [L93](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/stylesheetTune.user.js#L93) `window.addEventListener('load', scheduleAlignment, { once: true })`; scope `<anonymous@14>/initializeVpPanelAlignment`.

## lifecycle

- [L14](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/stylesheetTune.user.js#L14) `function() { 'use strict'; const css = ' #dodacia_lehota_label {font-size: 13px;color: #000000;} form div strong {font-size: 12px;} span.badge.fs11 {font-size: 12px;} ul.table-toolbar li {padding-left: 10px;padding-right: 10px;} span.blue {font-size: 12px;} #frm-pokyn {font-size: 14px;line-height: 1`; scope `root`.
- [L84](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/stylesheetTune.user.js#L84) `cancelAnimationFrame(frame)`; scope `<anonymous@14>/initializeVpPanelAlignment/scheduleAlignment`.
- [L85](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/stylesheetTune.user.js#L85) `requestAnimationFrame(() => { frame = 0; alignVpPanelStarts(panels); })`; scope `<anonymous@14>/initializeVpPanelAlignment/scheduleAlignment`.
- [L94](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/stylesheetTune.user.js#L94) `MutationObserver(scheduleAlignment)`; scope `<anonymous@14>/initializeVpPanelAlignment`.
- [L95](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/stylesheetTune.user.js#L95) `contentObserver.observe(document.getElementById('vp-detail'), { childList: true, characterData: true, subtree: true })`; scope `<anonymous@14>/initializeVpPanelAlignment`.
- [L100](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/stylesheetTune.user.js#L100) `MutationObserver(() => { if (initializeVpPanelAlignment()) pageObserver.disconnect(); })`; scope `<anonymous@14>`.
- [L101](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/stylesheetTune.user.js#L101) `pageObserver.disconnect()`; scope `<anonymous@14>/<anonymous@100>`.
- [L103](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/stylesheetTune.user.js#L103) `pageObserver.observe(document.documentElement, { childList: true, subtree: true })`; scope `<anonymous@14>`.

## io

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## dom-read

- [L14](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/stylesheetTune.user.js#L14) `function() { 'use strict'; const css = ' #dodacia_lehota_label {font-size: 13px;color: #000000;} form div strong {font-size: 12px;} span.badge.fs11 {font-size: 12px;} ul.table-toolbar li {padding-left: 10px;padding-right: 10px;} span.blue {font-size: 12px;} #frm-pokyn {font-size: 14px;line-height: 1`; scope `root`.
- [L60](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/stylesheetTune.user.js#L60) `document.querySelector('#vp-detail #material-detector-summary-row')`; scope `<anonymous@14>/findVpPanels`.
- [L63](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/stylesheetTune.user.js#L63) `group.querySelector(':scope > .box.grid_6.detail')`; scope `<anonymous@14>/findVpPanels`.
- [L64](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/stylesheetTune.user.js#L64) `group.querySelector(':scope > .box.grid_6.statuses')`; scope `<anonymous@14>/findVpPanels`.
- [L65](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/stylesheetTune.user.js#L65) `Array.from(document.querySelectorAll('#vp-detail .box.grid_12.overview > .box-head')) .find(header => header.textContent.replace(/\s+/g, ' ').trim().toLocaleUpperCase('sk-SK') === 'AKCIA')`; scope `<anonymous@14>/findVpPanels`.
- [L65](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/stylesheetTune.user.js#L65) `document.querySelectorAll('#vp-detail .box.grid_12.overview > .box-head')`; scope `<anonymous@14>/findVpPanels`.
- [L95](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/stylesheetTune.user.js#L95) `document.getElementById('vp-detail')`; scope `<anonymous@14>/initializeVpPanelAlignment`.

## dom-write

- [L14](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/stylesheetTune.user.js#L14) `function() { 'use strict'; const css = ' #dodacia_lehota_label {font-size: 13px;color: #000000;} form div strong {font-size: 12px;} span.badge.fs11 {font-size: 12px;} ul.table-toolbar li {padding-left: 10px;padding-right: 10px;} span.blue {font-size: 12px;} #frm-pokyn {font-size: 14px;line-height: 1`; scope `root`.
- [L57](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/stylesheetTune.user.js#L57) `document.head.appendChild(style)`; scope `<anonymous@14>`.

## logs

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## Zápisy do globálov, DOM a ostatných vlastností

- [L56](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/stylesheetTune.user.js#L56) `style.textContent = css`.
