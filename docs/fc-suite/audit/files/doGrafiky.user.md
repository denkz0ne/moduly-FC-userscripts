# Do grafiky

Zdroj: doGrafiky.user.js; referencia: 75087f8c4cbd34190e69318038bda6ef36eee0f2.
SHA-256: `3770329f348a5a4c6858db8c76ff58dd879d7eaa8f4870fa89d8d47a9d8f0b15`. Riadkov: 197.

AST inventár: obsahuje aj vnorené/anonýmne funkcie a lokálne premenné. Zoznam premenných nie je zoznam editovateľných nastavení. Volania sú klasifikované podľa názvu; dynamické aliasy môžu vyžadovať ručné dohľadanie. Historické @require hlavičky v načítanom JS nie sú ďalším automaticky spusteným @require reťazcom.

## Metadata

```json
{
  "name": [
    "Do grafiky"
  ],
  "namespace": [
    "faxcopy-userscripts"
  ],
  "author": [
    "mato e."
  ],
  "version": [
    "3.7"
  ],
  "description": [
    "DO GRAFIKY -> oznaci ZaPoGRAF a zaradi VP do CG_Grafik - Grafika bez modalov a klikania"
  ],
  "updateURL": [
    "https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/doGrafiky.user.js"
  ],
  "downloadURL": [
    "https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/doGrafiky.user.js"
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

- [L14–196](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/doGrafiky.user.js#L14) `<anonymous@14>()`; scope `root`.
- [L23–30](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/doGrafiky.user.js#L23) `getVpId()`; scope `<anonymous@14>`.
- [L32–34](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/doGrafiky.user.js#L32) `buildSerializedVp(vpId)`; scope `<anonymous@14>`.
- [L36–38](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/doGrafiky.user.js#L36) `sleep(ms)`; scope `<anonymous@14>`.
- [L37–37](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/doGrafiky.user.js#L37) `<anonymous@37>(resolve)`; scope `<anonymous@14>/sleep`.
- [L40–66](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/doGrafiky.user.js#L40) `showToast(message, type = 'success')`; scope `<anonymous@14>`.
- [L63–65](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/doGrafiky.user.js#L63) `<anonymous@63>()`; scope `<anonymous@14>/showToast`.
- [L68–90](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/doGrafiky.user.js#L68) `async postForm(url, params, ajax = false)`; scope `<anonymous@14>`.
- [L92–98](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/doGrafiky.user.js#L92) `async setGrafikaTag(vpId)`; scope `<anonymous@14>`.
- [L100–110](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/doGrafiky.user.js#L100) `async assignToGrafikaQueue(vpId)`; scope `<anonymous@14>`.
- [L112–120](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/doGrafiky.user.js#L112) `setButtonState(button, label, busy)`; scope `<anonymous@14>`.
- [L122–172](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/doGrafiky.user.js#L122) `createButton(vfButton)`; scope `<anonymous@14>`.
- [L143–168](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/doGrafiky.user.js#L143) `async <anonymous@143>(event)`; scope `<anonymous@14>/createButton`.
- [L174–193](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/doGrafiky.user.js#L174) `init()`; scope `<anonymous@14>`.
- [L177–192](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/doGrafiky.user.js#L177) `<anonymous@177>()`; scope `<anonymous@14>/init`.
- [L181–181](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/doGrafiky.user.js#L181) `<anonymous@181>(button)`; scope `<anonymous@14>/init/<anonymous@177>`.

## Premenné a pôvodné inicializátory

Dlhé inicializátory sú tu skrátené na 300 znakov; úplné znenie je v inventory.json a v zdroji.

- [L17](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/doGrafiky.user.js#L17) `const GRAFIKA_VF_ID = '301'`; scope `<anonymous@14>`.
- [L18](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/doGrafiky.user.js#L18) `const ZAPOGRAF_TAG_ID = '602'`; scope `<anonymous@14>`.
- [L19](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/doGrafiky.user.js#L19) `const BUTTON_ID = 'doGrafikyBtn'`; scope `<anonymous@14>`.
- [L20](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/doGrafiky.user.js#L20) `const GRAFIKA_RIGHT_OFFSET = '235px'`; scope `<anonymous@14>`.
- [L21](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/doGrafiky.user.js#L21) `const DEFAULT_LABEL = ' do GRAFIKY'`; scope `<anonymous@14>`.
- [L24](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/doGrafiky.user.js#L24) `const match = window.location.pathname.match(/\/detail\/index\/(\d+)/)`; scope `<anonymous@14>/getVpId`.
- [L41](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/doGrafiky.user.js#L41) `const existingToast = document.getElementById('doGrafikyToast')`; scope `<anonymous@14>/showToast`.
- [L46](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/doGrafiky.user.js#L46) `const toast = document.createElement('div')`; scope `<anonymous@14>/showToast`.
- [L69](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/doGrafiky.user.js#L69) `const headers = { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' }`; scope `<anonymous@14>/postForm`.
- [L77](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/doGrafiky.user.js#L77) `const response = await fetch(url, { method: 'POST', credentials: 'include', headers, body: new URLSearchParams(params).toString(), redirect: 'follow' })`; scope `<anonymous@14>/postForm`.
- [L113](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/doGrafiky.user.js#L113) `const textNode = button.querySelector('.do-grafiky-label')`; scope `<anonymous@14>/setButtonState`.
- [L127](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/doGrafiky.user.js#L127) `const button = document.createElement('a')`; scope `<anonymous@14>/createButton`.
- [L149](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/doGrafiky.user.js#L149) `const vpId = getVpId()`; scope `<anonymous@14>/createButton/<anonymous@143>`.
- [L175](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/doGrafiky.user.js#L175) `let tries = 0`; scope `<anonymous@14>/init`.
- [L177](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/doGrafiky.user.js#L177) `const interval = setInterval(() => { tries += 1; const vfButton = [...document.querySelectorAll('a.datatable-add.button.green.small')] .find((button) => (button.getAttribute('onclick') || '').includes('showVpSingleForm(')); if (vfButton) { clearInterval(interval); createButton(vfButton); return; } i`; scope `<anonymous@14>/init`.
- [L180](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/doGrafiky.user.js#L180) `const vfButton = [...document.querySelectorAll('a.datatable-add.button.green.small')] .find((button) => (button.getAttribute('onclick') || '').includes('showVpSingleForm('))`; scope `<anonymous@14>/init/<anonymous@177>`.

## storage

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## events

- [L14](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/doGrafiky.user.js#L14) `function () { 'use strict'; const GRAFIKA_VF_ID = '301'; const ZAPOGRAF_TAG_ID = '602'; const BUTTON_ID = 'doGrafikyBtn'; const GRAFIKA_RIGHT_OFFSET = '235px'; const DEFAULT_LABEL = ' do GRAFIKY'; function getVpId() { const match = window.location.pathname.match(/\/detail\/index\/(\d+)/); if (!match`; scope `root`.
- [L143](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/doGrafiky.user.js#L143) `button.addEventListener('click', async (event) => { event.preventDefault(); event.stopPropagation(); event.stopImmediatePropagation(); try { const vpId = getVpId(); setButtonState(button, 'SPRACOVAVAM...', true); console.log('[DO GRAFIKY] Startujem request-based flow pre VP', vpId); await setGrafika`; scope `<anonymous@14>/createButton`.
- [L195](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/doGrafiky.user.js#L195) `window.addEventListener('load', init)`; scope `<anonymous@14>`.

## lifecycle

- [L14](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/doGrafiky.user.js#L14) `function () { 'use strict'; const GRAFIKA_VF_ID = '301'; const ZAPOGRAF_TAG_ID = '602'; const BUTTON_ID = 'doGrafikyBtn'; const GRAFIKA_RIGHT_OFFSET = '235px'; const DEFAULT_LABEL = ' do GRAFIKY'; function getVpId() { const match = window.location.pathname.match(/\/detail\/index\/(\d+)/); if (!match`; scope `root`.
- [L37](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/doGrafiky.user.js#L37) `setTimeout(resolve, ms)`; scope `<anonymous@14>/sleep/<anonymous@37>`.
- [L63](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/doGrafiky.user.js#L63) `setTimeout(() => { toast.remove(); }, 3500)`; scope `<anonymous@14>/showToast`.
- [L177](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/doGrafiky.user.js#L177) `setInterval(() => { tries += 1; const vfButton = [...document.querySelectorAll('a.datatable-add.button.green.small')] .find((button) => (button.getAttribute('onclick') || '').includes('showVpSingleForm(')); if (vfButton) { clearInterval(interval); createButton(vfButton); return; } if (tries > 30) { `; scope `<anonymous@14>/init`.
- [L184](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/doGrafiky.user.js#L184) `clearInterval(interval)`; scope `<anonymous@14>/init/<anonymous@177>`.
- [L190](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/doGrafiky.user.js#L190) `clearInterval(interval)`; scope `<anonymous@14>/init/<anonymous@177>`.

## io

- [L14](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/doGrafiky.user.js#L14) `function () { 'use strict'; const GRAFIKA_VF_ID = '301'; const ZAPOGRAF_TAG_ID = '602'; const BUTTON_ID = 'doGrafikyBtn'; const GRAFIKA_RIGHT_OFFSET = '235px'; const DEFAULT_LABEL = ' do GRAFIKY'; function getVpId() { const match = window.location.pathname.match(/\/detail\/index\/(\d+)/); if (!match`; scope `root`.
- [L77](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/doGrafiky.user.js#L77) `fetch(url, { method: 'POST', credentials: 'include', headers, body: new URLSearchParams(params).toString(), redirect: 'follow' })`; scope `<anonymous@14>/postForm`.

## dom-read

- [L14](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/doGrafiky.user.js#L14) `function () { 'use strict'; const GRAFIKA_VF_ID = '301'; const ZAPOGRAF_TAG_ID = '602'; const BUTTON_ID = 'doGrafikyBtn'; const GRAFIKA_RIGHT_OFFSET = '235px'; const DEFAULT_LABEL = ' do GRAFIKY'; function getVpId() { const match = window.location.pathname.match(/\/detail\/index\/(\d+)/); if (!match`; scope `root`.
- [L41](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/doGrafiky.user.js#L41) `document.getElementById('doGrafikyToast')`; scope `<anonymous@14>/showToast`.
- [L113](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/doGrafiky.user.js#L113) `button.querySelector('.do-grafiky-label')`; scope `<anonymous@14>/setButtonState`.
- [L123](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/doGrafiky.user.js#L123) `document.getElementById(BUTTON_ID)`; scope `<anonymous@14>/createButton`.
- [L180](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/doGrafiky.user.js#L180) `[...document.querySelectorAll('a.datatable-add.button.green.small')] .find((button) => (button.getAttribute('onclick') || '').includes('showVpSingleForm('))`; scope `<anonymous@14>/init/<anonymous@177>`.
- [L180](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/doGrafiky.user.js#L180) `document.querySelectorAll('a.datatable-add.button.green.small')`; scope `<anonymous@14>/init/<anonymous@177>`.

## dom-write

- [L14](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/doGrafiky.user.js#L14) `function () { 'use strict'; const GRAFIKA_VF_ID = '301'; const ZAPOGRAF_TAG_ID = '602'; const BUTTON_ID = 'doGrafikyBtn'; const GRAFIKA_RIGHT_OFFSET = '235px'; const DEFAULT_LABEL = ' do GRAFIKY'; function getVpId() { const match = window.location.pathname.match(/\/detail\/index\/(\d+)/); if (!match`; scope `root`.
- [L43](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/doGrafiky.user.js#L43) `existingToast.remove()`; scope `<anonymous@14>/showToast`.
- [L61](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/doGrafiky.user.js#L61) `document.body.appendChild(toast)`; scope `<anonymous@14>/showToast`.
- [L64](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/doGrafiky.user.js#L64) `toast.remove()`; scope `<anonymous@14>/showToast/<anonymous@63>`.
- [L170](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/doGrafiky.user.js#L170) `vfButton.parentNode.insertBefore(button, vfButton)`; scope `<anonymous@14>/createButton`.

## logs

- [L14](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/doGrafiky.user.js#L14) `function () { 'use strict'; const GRAFIKA_VF_ID = '301'; const ZAPOGRAF_TAG_ID = '602'; const BUTTON_ID = 'doGrafikyBtn'; const GRAFIKA_RIGHT_OFFSET = '235px'; const DEFAULT_LABEL = ' do GRAFIKY'; function getVpId() { const match = window.location.pathname.match(/\/detail\/index\/(\d+)/); if (!match`; scope `root`.
- [L152](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/doGrafiky.user.js#L152) `console.log('[DO GRAFIKY] Startujem request-based flow pre VP', vpId)`; scope `<anonymous@14>/createButton/<anonymous@143>`.
- [L159](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/doGrafiky.user.js#L159) `console.log('[DO GRAFIKY] VP uspesne zaradene do grafiky.')`; scope `<anonymous@14>/createButton/<anonymous@143>`.
- [L164](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/doGrafiky.user.js#L164) `console.error('[DO GRAFIKY] Chyba:', error)`; scope `<anonymous@14>/createButton/<anonymous@143>`.
- [L171](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/doGrafiky.user.js#L171) `console.log('[DO GRAFIKY] Button pridany do povodneho radu akcii bez zasahu do layoutu webu.')`; scope `<anonymous@14>/createButton`.

## Zápisy do globálov, DOM a ostatných vlastností

- [L47](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/doGrafiky.user.js#L47) `toast.id = 'doGrafikyToast'`.
- [L48](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/doGrafiky.user.js#L48) `toast.textContent = message`.
- [L49](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/doGrafiky.user.js#L49) `toast.style.position = 'fixed'`.
- [L50](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/doGrafiky.user.js#L50) `toast.style.top = '20px'`.
- [L51](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/doGrafiky.user.js#L51) `toast.style.right = '20px'`.
- [L52](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/doGrafiky.user.js#L52) `toast.style.zIndex = '99999'`.
- [L53](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/doGrafiky.user.js#L53) `toast.style.padding = '12px 16px'`.
- [L54](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/doGrafiky.user.js#L54) `toast.style.borderRadius = '8px'`.
- [L55](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/doGrafiky.user.js#L55) `toast.style.color = '#fff'`.
- [L56](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/doGrafiky.user.js#L56) `toast.style.fontSize = '14px'`.
- [L57](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/doGrafiky.user.js#L57) `toast.style.fontWeight = '600'`.
- [L58](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/doGrafiky.user.js#L58) `toast.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.25)'`.
- [L59](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/doGrafiky.user.js#L59) `toast.style.background = type === 'success' ? '#2e7d32' : '#c62828'`.
- [L115](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/doGrafiky.user.js#L115) `textNode.textContent = label`.
- [L118](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/doGrafiky.user.js#L118) `button.style.pointerEvents = busy ? 'none' : 'auto'`.
- [L119](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/doGrafiky.user.js#L119) `button.style.opacity = busy ? '0.6' : '1'`.
- [L128](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/doGrafiky.user.js#L128) `button.id = BUTTON_ID`.
- [L130](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/doGrafiky.user.js#L130) `button.className = vfButton.className`.
- [L131](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/doGrafiky.user.js#L131) `button.innerHTML = '<img src="/assets/img/icons/checkbox-white.png" alt=""><span class="do-grafiky-label">${DEFAULT_LABEL}</span>'`.
- [L133](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/doGrafiky.user.js#L133) `button.style.right = GRAFIKA_RIGHT_OFFSET`.
- [L134](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/doGrafiky.user.js#L134) `button.style.background = '#7b1fa2'`.
- [L135](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/doGrafiky.user.js#L135) `button.style.borderColor = '#6a1b9a'`.
- [L136](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/doGrafiky.user.js#L136) `button.style.cursor = 'pointer'`.
- [L137](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/doGrafiky.user.js#L137) `button.style.whiteSpace = 'nowrap'`.
- [L138](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/doGrafiky.user.js#L138) `button.style.width = 'auto'`.
- [L139](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/doGrafiky.user.js#L139) `button.style.minWidth = '118px'`.
- [L140](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/doGrafiky.user.js#L140) `button.style.textAlign = 'center'`.
- [L141](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/doGrafiky.user.js#L141) `button.style.boxSizing = 'border-box'`.
