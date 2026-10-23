# VP Searchbar

Zdroj: VPsearchbar.user.js; referencia: 75087f8c4cbd34190e69318038bda6ef36eee0f2.
SHA-256: `1f62537b6b492cea05d911ff64f0478f3917976a24ab96fba596c8cdbd3ab7db`. Riadkov: 245.

AST inventár: obsahuje aj vnorené/anonýmne funkcie a lokálne premenné. Zoznam premenných nie je zoznam editovateľných nastavení. Volania sú klasifikované podľa názvu; dynamické aliasy môžu vyžadovať ručné dohľadanie. Historické @require hlavičky v načítanom JS nie sú ďalším automaticky spusteným @require reťazcom.

## Metadata

```json
{
  "name": [
    "VP Searchbar"
  ],
  "namespace": [
    "https://moduly.faxcopy.sk/"
  ],
  "author": [
    "mato e."
  ],
  "version": [
    "1.2.4"
  ],
  "description": [
    "Pridá input pre číslo VP nalavo od pôvodného vyhľadávania"
  ],
  "updateURL": [
    "https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/VPsearchbar.user.js"
  ],
  "downloadURL": [
    "https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/VPsearchbar.user.js"
  ],
  "match": [
    "https://moduly.faxcopy.sk/*"
  ],
  "grant": [
    "GM_openInTab"
  ],
  "run-at": [
    "document-idle"
  ]
}
```

## Funkcie a signatúry

- [L15–244](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPsearchbar.user.js#L15) `<anonymous@15>()`; scope `root`.
- [L18–22](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPsearchbar.user.js#L18) `findSearchInput()`; scope `<anonymous@15>`.
- [L24–95](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPsearchbar.user.js#L24) `enhanceSearchBar(originalInput)`; scope `<anonymous@15>`.
- [L65–77](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPsearchbar.user.js#L65) `<anonymous@65>(e)`; scope `<anonymous@15>/enhanceSearchBar`.
- [L80–92](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPsearchbar.user.js#L80) `<anonymous@80>(e)`; scope `<anonymous@15>/enhanceSearchBar`.
- [L97–123](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPsearchbar.user.js#L97) `injectVpLinkStyles()`; scope `<anonymous@15>`.
- [L125–144](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPsearchbar.user.js#L125) `createVpDetailLink(vpId)`; scope `<anonymous@15>`.
- [L146–166](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPsearchbar.user.js#L146) `linkVpIdsInQueueLog()`; scope `<anonymous@15>`.
- [L152–165](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPsearchbar.user.js#L152) `<anonymous@152>(cell)`; scope `<anonymous@15>/linkVpIdsInQueueLog`.
- [L168–177](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPsearchbar.user.js#L168) `observeQueueLog()`; scope `<anonymous@15>`.
- [L179–187](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPsearchbar.user.js#L179) `isVpListBackgroundLink(link)`; scope `<anonymous@15>`.
- [L189–202](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPsearchbar.user.js#L189) `openInBackgroundTab(url)`; scope `<anonymous@15>`.
- [L204–216](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPsearchbar.user.js#L204) `enableVpListBackgroundLinks()`; scope `<anonymous@15>`.
- [L205–215](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPsearchbar.user.js#L205) `<anonymous@205>(event)`; scope `<anonymous@15>/enableVpListBackgroundLinks`.
- [L218–231](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPsearchbar.user.js#L218) `observeForSearch()`; scope `<anonymous@15>`.
- [L219–225](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPsearchbar.user.js#L219) `<anonymous@219>()`; scope `<anonymous@15>/observeForSearch`.
- [L233–243](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPsearchbar.user.js#L233) `<anonymous@233>()`; scope `<anonymous@15>`.

## Premenné a pôvodné inicializátory

Dlhé inicializátory sú tu skrátené na 300 znakov; úplné znenie je v inventory.json a v zdroji.

- [L28](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPsearchbar.user.js#L28) `const wrapper = originalInput.parentNode`; scope `<anonymous@15>/enhanceSearchBar`.
- [L31](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPsearchbar.user.js#L31) `const vpInput = document.createElement('input')`; scope `<anonymous@15>/enhanceSearchBar`.
- [L46](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPsearchbar.user.js#L46) `const labelLink = document.createElement('a')`; scope `<anonymous@15>/enhanceSearchBar`.
- [L53](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPsearchbar.user.js#L53) `const img = document.createElement('img')`; scope `<anonymous@15>/enhanceSearchBar`.
- [L67](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPsearchbar.user.js#L67) `const vp = vpInput.value.trim()`; scope `<anonymous@15>/enhanceSearchBar/<anonymous@65>`.
- [L83](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPsearchbar.user.js#L83) `const vp = vpInput.value.trim()`; scope `<anonymous@15>/enhanceSearchBar/<anonymous@80>`.
- [L100](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPsearchbar.user.js#L100) `const style = document.createElement('style')`; scope `<anonymous@15>/injectVpLinkStyles`.
- [L126](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPsearchbar.user.js#L126) `const link = document.createElement('a')`; scope `<anonymous@15>/createVpDetailLink`.
- [L133](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPsearchbar.user.js#L133) `const number = document.createElement('span')`; scope `<anonymous@15>/createVpDetailLink`.
- [L136](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPsearchbar.user.js#L136) `const icon = document.createElement('span')`; scope `<anonymous@15>/createVpDetailLink`.
- [L147](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPsearchbar.user.js#L147) `const cells = document.querySelectorAll('#queue_log tbody td')`; scope `<anonymous@15>/linkVpIdsInQueueLog`.
- [L155](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPsearchbar.user.js#L155) `const text = cell.textContent`; scope `<anonymous@15>/linkVpIdsInQueueLog/<anonymous@152>`.
- [L156](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPsearchbar.user.js#L156) `const match = text.match(/^(.*?\bID\s*=\s*)(\d+)(.*)$/)`; scope `<anonymous@15>/linkVpIdsInQueueLog/<anonymous@152>`.
- [L169](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPsearchbar.user.js#L169) `const observer = new MutationObserver(linkVpIdsInQueueLog)`; scope `<anonymous@15>/observeQueueLog`.
- [L180](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPsearchbar.user.js#L180) `const cell = link.closest('td')`; scope `<anonymous@15>/isVpListBackgroundLink`.
- [L181](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPsearchbar.user.js#L181) `const row = link.closest('tr')`; scope `<anonymous@15>/isVpListBackgroundLink`.
- [L182](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPsearchbar.user.js#L182) `const table = link.closest('table')`; scope `<anonymous@15>/isVpListBackgroundLink`.
- [L190](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPsearchbar.user.js#L190) `const absoluteUrl = new URL(url, window.location.href).href`; scope `<anonymous@15>/openInBackgroundTab`.
- [L209](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPsearchbar.user.js#L209) `const link = event.target.closest('a[href]')`; scope `<anonymous@15>/enableVpListBackgroundLinks/<anonymous@205>`.
- [L219](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPsearchbar.user.js#L219) `const observer = new MutationObserver(() => { const input = findSearchInput(); if (input) { enhanceSearchBar(input); observer.disconnect(); } })`; scope `<anonymous@15>/observeForSearch`.
- [L220](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPsearchbar.user.js#L220) `const input = findSearchInput()`; scope `<anonymous@15>/observeForSearch/<anonymous@219>`.
- [L234](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPsearchbar.user.js#L234) `const input = findSearchInput()`; scope `<anonymous@15>/<anonymous@233>`.

## storage

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## events

- [L15](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPsearchbar.user.js#L15) `function () { 'use strict'; function findSearchInput() { return document.querySelector( 'input[type="search"], input[name="search"], input[name="q"], #search-box' ); } function enhanceSearchBar(originalInput) { if (!originalInput) return; if (document.getElementById('vp-quick-access')) return; const`; scope `root`.
- [L65](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPsearchbar.user.js#L65) `vpInput.addEventListener('keydown', e => { if (e.key === 'Enter') { const vp = vpInput.value.trim(); if (/^\d+$/.test(vp)) { window.open( '/vyrobne_prikazy/detail/index/${vp}', '_blank' ); } else { alert('Zadaj platné číslo VP'); } } })`; scope `<anonymous@15>/enhanceSearchBar`.
- [L80](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPsearchbar.user.js#L80) `labelLink.addEventListener('click', e => { e.preventDefault(); const vp = vpInput.value.trim(); if (/^\d+$/.test(vp)) { window.open( '/vyrobne_prikazy/detail/printLabel/${vp}', '_blank' ); } else { alert('Zadaj platné číslo VP'); } })`; scope `<anonymous@15>/enhanceSearchBar`.
- [L205](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPsearchbar.user.js#L205) `document.addEventListener('click', event => { if (event.defaultPrevented || event.button !== 0) return; if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return; const link = event.target.closest('a[href]'); if (!link || !isVpListBackgroundLink(link)) return; event.preventDefault`; scope `<anonymous@15>/enableVpListBackgroundLinks`.
- [L233](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPsearchbar.user.js#L233) `window.addEventListener('load', () => { const input = findSearchInput(); if (input) { enhanceSearchBar(input); } else { observeForSearch(); } observeQueueLog(); enableVpListBackgroundLinks(); })`; scope `<anonymous@15>`.

## lifecycle

- [L15](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPsearchbar.user.js#L15) `function () { 'use strict'; function findSearchInput() { return document.querySelector( 'input[type="search"], input[name="search"], input[name="q"], #search-box' ); } function enhanceSearchBar(originalInput) { if (!originalInput) return; if (document.getElementById('vp-quick-access')) return; const`; scope `root`.
- [L169](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPsearchbar.user.js#L169) `MutationObserver(linkVpIdsInQueueLog)`; scope `<anonymous@15>/observeQueueLog`.
- [L171](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPsearchbar.user.js#L171) `observer.observe(document.body, { childList: true, subtree: true })`; scope `<anonymous@15>/observeQueueLog`.
- [L219](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPsearchbar.user.js#L219) `MutationObserver(() => { const input = findSearchInput(); if (input) { enhanceSearchBar(input); observer.disconnect(); } })`; scope `<anonymous@15>/observeForSearch`.
- [L223](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPsearchbar.user.js#L223) `observer.disconnect()`; scope `<anonymous@15>/observeForSearch/<anonymous@219>`.
- [L227](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPsearchbar.user.js#L227) `observer.observe(document.body, { childList: true, subtree: true })`; scope `<anonymous@15>/observeForSearch`.

## io

- [L15](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPsearchbar.user.js#L15) `function () { 'use strict'; function findSearchInput() { return document.querySelector( 'input[type="search"], input[name="search"], input[name="q"], #search-box' ); } function enhanceSearchBar(originalInput) { if (!originalInput) return; if (document.getElementById('vp-quick-access')) return; const`; scope `root`.
- [L69](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPsearchbar.user.js#L69) `window.open('/vyrobne_prikazy/detail/index/${vp}', '_blank')`; scope `<anonymous@15>/enhanceSearchBar/<anonymous@65>`.
- [L85](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPsearchbar.user.js#L85) `window.open('/vyrobne_prikazy/detail/printLabel/${vp}', '_blank')`; scope `<anonymous@15>/enhanceSearchBar/<anonymous@80>`.
- [L193](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPsearchbar.user.js#L193) `GM_openInTab(absoluteUrl, { active: false, insert: true, setParent: true })`; scope `<anonymous@15>/openInBackgroundTab`.
- [L201](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPsearchbar.user.js#L201) `window.open(absoluteUrl, '_blank', 'noopener,noreferrer')`; scope `<anonymous@15>/openInBackgroundTab`.

## dom-read

- [L15](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPsearchbar.user.js#L15) `function () { 'use strict'; function findSearchInput() { return document.querySelector( 'input[type="search"], input[name="search"], input[name="q"], #search-box' ); } function enhanceSearchBar(originalInput) { if (!originalInput) return; if (document.getElementById('vp-quick-access')) return; const`; scope `root`.
- [L19](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPsearchbar.user.js#L19) `document.querySelector('input[type="search"], input[name="search"], input[name="q"], #search-box')`; scope `<anonymous@15>/findSearchInput`.
- [L26](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPsearchbar.user.js#L26) `document.getElementById('vp-quick-access')`; scope `<anonymous@15>/enhanceSearchBar`.
- [L98](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPsearchbar.user.js#L98) `document.getElementById('vp-detail-link-styles')`; scope `<anonymous@15>/injectVpLinkStyles`.
- [L147](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPsearchbar.user.js#L147) `document.querySelectorAll('#queue_log tbody td')`; scope `<anonymous@15>/linkVpIdsInQueueLog`.
- [L153](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPsearchbar.user.js#L153) `cell.querySelector('a.vp-detail-link')`; scope `<anonymous@15>/linkVpIdsInQueueLog/<anonymous@152>`.
- [L180](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPsearchbar.user.js#L180) `link.closest('td')`; scope `<anonymous@15>/isVpListBackgroundLink`.
- [L181](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPsearchbar.user.js#L181) `link.closest('tr')`; scope `<anonymous@15>/isVpListBackgroundLink`.
- [L182](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPsearchbar.user.js#L182) `link.closest('table')`; scope `<anonymous@15>/isVpListBackgroundLink`.
- [L209](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPsearchbar.user.js#L209) `event.target.closest('a[href]')`; scope `<anonymous@15>/enableVpListBackgroundLinks/<anonymous@205>`.

## dom-write

- [L15](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPsearchbar.user.js#L15) `function () { 'use strict'; function findSearchInput() { return document.querySelector( 'input[type="search"], input[name="search"], input[name="q"], #search-box' ); } function enhanceSearchBar(originalInput) { if (!originalInput) return; if (document.getElementById('vp-quick-access')) return; const`; scope `root`.
- [L58](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPsearchbar.user.js#L58) `labelLink.appendChild(img)`; scope `<anonymous@15>/enhanceSearchBar`.
- [L61](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPsearchbar.user.js#L61) `wrapper.insertBefore(labelLink, originalInput)`; scope `<anonymous@15>/enhanceSearchBar`.
- [L62](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPsearchbar.user.js#L62) `wrapper.insertBefore(vpInput, labelLink)`; scope `<anonymous@15>/enhanceSearchBar`.
- [L122](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPsearchbar.user.js#L122) `document.head.appendChild(style)`; scope `<anonymous@15>/injectVpLinkStyles`.
- [L138](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPsearchbar.user.js#L138) `icon.setAttribute('aria-hidden', 'true')`; scope `<anonymous@15>/createVpDetailLink`.
- [L140](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPsearchbar.user.js#L140) `link.appendChild(number)`; scope `<anonymous@15>/createVpDetailLink`.
- [L141](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPsearchbar.user.js#L141) `link.appendChild(icon)`; scope `<anonymous@15>/createVpDetailLink`.
- [L160](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPsearchbar.user.js#L160) `cell.appendChild(document.createTextNode(match[1]))`; scope `<anonymous@15>/linkVpIdsInQueueLog/<anonymous@152>`.
- [L161](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPsearchbar.user.js#L161) `cell.appendChild(createVpDetailLink(match[2]))`; scope `<anonymous@15>/linkVpIdsInQueueLog/<anonymous@152>`.
- [L163](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPsearchbar.user.js#L163) `cell.appendChild(document.createTextNode(match[3]))`; scope `<anonymous@15>/linkVpIdsInQueueLog/<anonymous@152>`.

## logs

- [L15](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPsearchbar.user.js#L15) `function () { 'use strict'; function findSearchInput() { return document.querySelector( 'input[type="search"], input[name="search"], input[name="q"], #search-box' ); } function enhanceSearchBar(originalInput) { if (!originalInput) return; if (document.getElementById('vp-quick-access')) return; const`; scope `root`.
- [L94](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPsearchbar.user.js#L94) `console.log('🏷️ VP search + ikonka tlače štítku pridané')`; scope `<anonymous@15>/enhanceSearchBar`.

## Zápisy do globálov, DOM a ostatných vlastností

- [L33](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPsearchbar.user.js#L33) `vpInput.id = 'vp-quick-access'`.
- [L37](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPsearchbar.user.js#L37) `vpInput.style.marginRight = '6px'`.
- [L38](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPsearchbar.user.js#L38) `vpInput.style.padding = getComputedStyle(originalInput).padding`.
- [L39](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPsearchbar.user.js#L39) `vpInput.style.border = getComputedStyle(originalInput).border`.
- [L40](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPsearchbar.user.js#L40) `vpInput.style.borderRadius = getComputedStyle(originalInput).borderRadius`.
- [L41](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPsearchbar.user.js#L41) `vpInput.style.height = originalInput.offsetHeight + 'px'`.
- [L42](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPsearchbar.user.js#L42) `vpInput.style.boxSizing = 'border-box'`.
- [L43](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPsearchbar.user.js#L43) `vpInput.style.width = '110px'`.
- [L49](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPsearchbar.user.js#L49) `labelLink.style.marginRight = '10px'`.
- [L50](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPsearchbar.user.js#L50) `labelLink.style.display = 'inline-flex'`.
- [L51](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPsearchbar.user.js#L51) `labelLink.style.alignItems = 'center'`.
- [L56](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPsearchbar.user.js#L56) `img.style.cursor = 'pointer'`.
- [L101](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPsearchbar.user.js#L101) `style.id = 'vp-detail-link-styles'`.
- [L102](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPsearchbar.user.js#L102) `style.textContent = ' #queue_log a.vp-detail-link { display: inline-flex; align-items: center; gap: 3px; font-weight: 600; text-decoration: none; } #queue_log a.vp-detail-link:hover { text-decoration: underline; } #queue_log .vp-detail-link-icon { display: inline-block; flex: 0 0 auto; margin-left: `.
- [L127](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPsearchbar.user.js#L127) `link.className = 'vp-detail-link'`.
- [L134](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPsearchbar.user.js#L134) `number.textContent = vpId`.
- [L137](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPsearchbar.user.js#L137) `icon.className = 'ui-icon ui-icon-extlink vp-detail-link-icon'`.
- [L159](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/VPsearchbar.user.js#L159) `cell.textContent = ''`.
