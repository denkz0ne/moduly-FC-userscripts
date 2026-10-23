# FaxCopy – interný prehliadač obrázkov

Zdroj: imported/image-viewer-1.2; referencia: dodané používateľom, screenshot 2026-10-23.
SHA-256: `fbebd05f8b3cd623a71ee980da4b7d020283a9efd9f21842a0d181e61aaf5070`. Riadkov: 332.

AST inventár: obsahuje aj vnorené/anonýmne funkcie a lokálne premenné. Zoznam premenných nie je zoznam editovateľných nastavení. Volania sú klasifikované podľa názvu; dynamické aliasy môžu vyžadovať ručné dohľadanie. Historické @require hlavičky v načítanom JS nie sú ďalším automaticky spusteným @require reťazcom.

## Metadata

```json
{
  "name": [
    "FaxCopy – interný prehliadač obrázkov"
  ],
  "namespace": [
    "mato-faxcopy-image-viewer"
  ],
  "version": [
    "1.2"
  ],
  "description": [
    "Obrázkové odkazy otvorí v internom prehliadači namiesto stiahnutia."
  ],
  "match": [
    "*://moduly.faxcopy.sk/*",
    "*://*.moduly.faxcopy.sk/*"
  ],
  "grant": [
    "GM_xmlhttpRequest"
  ],
  "connect": [
    "*"
  ],
  "run-at": [
    "document-start"
  ]
}
```

## Funkcie a signatúry

- [L13–332](../sources/image-viewer-1.2.js.txt) `<anonymous@13>()`; scope `root`.
- [L25–50](../sources/image-viewer-1.2.js.txt) `createButton(text)`; scope `<anonymous@13>`.
- [L41–43](../sources/image-viewer-1.2.js.txt) `<anonymous@41>()`; scope `<anonymous@13>/createButton`.
- [L45–47](../sources/image-viewer-1.2.js.txt) `<anonymous@45>()`; scope `<anonymous@13>/createButton`.
- [L52–81](../sources/image-viewer-1.2.js.txt) `getFilename(url, mimeType = '')`; scope `<anonymous@13>`.
- [L83–95](../sources/image-viewer-1.2.js.txt) `closeViewer()`; scope `<anonymous@13>`.
- [L97–287](../sources/image-viewer-1.2.js.txt) `openViewer(url)`; scope `<anonymous@13>`.
- [L183–186](../sources/image-viewer-1.2.js.txt) `updateZoom()`; scope `<anonymous@13>/openViewer`.
- [L188–191](../sources/image-viewer-1.2.js.txt) `<anonymous@188>()`; scope `<anonymous@13>/openViewer`.
- [L193–196](../sources/image-viewer-1.2.js.txt) `<anonymous@193>()`; scope `<anonymous@13>/openViewer`.
- [L198–201](../sources/image-viewer-1.2.js.txt) `<anonymous@198>()`; scope `<anonymous@13>/openViewer`.
- [L203–215](../sources/image-viewer-1.2.js.txt) `async <anonymous@203>()`; scope `<anonymous@13>/openViewer`.
- [L209–211](../sources/image-viewer-1.2.js.txt) `<anonymous@209>()`; scope `<anonymous@13>/openViewer/<anonymous@203>`.
- [L217–233](../sources/image-viewer-1.2.js.txt) `<anonymous@217>()`; scope `<anonymous@13>/openViewer`.
- [L239–250](../sources/image-viewer-1.2.js.txt) `<anonymous@239>(event)`; scope `<anonymous@13>/openViewer`.
- [L259–280](../sources/image-viewer-1.2.js.txt) `onload(response)`; scope `<anonymous@13>/openViewer`.
- [L270–274](../sources/image-viewer-1.2.js.txt) `<anonymous@270>()`; scope `<anonymous@13>/openViewer/onload`.
- [L276–279](../sources/image-viewer-1.2.js.txt) `<anonymous@276>()`; scope `<anonymous@13>/openViewer/onload`.
- [L282–285](../sources/image-viewer-1.2.js.txt) `onerror()`; scope `<anonymous@13>/openViewer`.
- [L291–323](../sources/image-viewer-1.2.js.txt) `<anonymous@291>(event)`; scope `<anonymous@13>`.
- [L327–331](../sources/image-viewer-1.2.js.txt) `<anonymous@327>(event)`; scope `<anonymous@13>`.

## Premenné a pôvodné inicializátory

Dlhé inicializátory sú tu skrátené na 300 znakov; úplné znenie je v inventory.json a v zdroji.

- [L16](../sources/image-viewer-1.2.js.txt) `const IMAGE_EXTENSIONS = /\.(?:avif|bmp|gif|jpe?g|png|svg|webp)(?:$|[?#])/i`; scope `<anonymous@13>`.
- [L19](../sources/image-viewer-1.2.js.txt) `let overlay = null`; scope `<anonymous@13>`.
- [L20](../sources/image-viewer-1.2.js.txt) `let objectUrl = null`; scope `<anonymous@13>`.
- [L21](../sources/image-viewer-1.2.js.txt) `let currentBlob = null`; scope `<anonymous@13>`.
- [L22](../sources/image-viewer-1.2.js.txt) `let currentUrl = ''`; scope `<anonymous@13>`.
- [L23](../sources/image-viewer-1.2.js.txt) `let zoom = 1`; scope `<anonymous@13>`.
- [L26](../sources/image-viewer-1.2.js.txt) `const button = document.createElement('button')`; scope `<anonymous@13>/createButton`.
- [L53](../sources/image-viewer-1.2.js.txt) `let filename = ''`; scope `<anonymous@13>/getFilename`.
- [L56](../sources/image-viewer-1.2.js.txt) `const parsedUrl = new URL(url)`; scope `<anonymous@13>/getFilename`.
- [L70](../sources/image-viewer-1.2.js.txt) `const extensions = { 'image/jpeg': 'jpg', 'image/png': 'png', 'image/gif': 'gif', 'image/webp': 'webp', 'image/avif': 'avif', 'image/svg+xml': 'svg', 'image/bmp': 'bmp' }`; scope `<anonymous@13>/getFilename`.
- [L115](../sources/image-viewer-1.2.js.txt) `const toolbar = document.createElement('div')`; scope `<anonymous@13>/openViewer`.
- [L127](../sources/image-viewer-1.2.js.txt) `const info = document.createElement('div')`; scope `<anonymous@13>/openViewer`.
- [L139](../sources/image-viewer-1.2.js.txt) `const zoomOutButton = createButton('−')`; scope `<anonymous@13>/openViewer`.
- [L140](../sources/image-viewer-1.2.js.txt) `const zoomResetButton = createButton('100 %')`; scope `<anonymous@13>/openViewer`.
- [L141](../sources/image-viewer-1.2.js.txt) `const zoomInButton = createButton('+')`; scope `<anonymous@13>/openViewer`.
- [L142](../sources/image-viewer-1.2.js.txt) `const copyButton = createButton('Kopírovať URL')`; scope `<anonymous@13>/openViewer`.
- [L143](../sources/image-viewer-1.2.js.txt) `const downloadButton = createButton('Prevziať')`; scope `<anonymous@13>/openViewer`.
- [L144](../sources/image-viewer-1.2.js.txt) `const closeButton = createButton('✕')`; scope `<anonymous@13>/openViewer`.
- [L156](../sources/image-viewer-1.2.js.txt) `const stage = document.createElement('div')`; scope `<anonymous@13>/openViewer`.
- [L166](../sources/image-viewer-1.2.js.txt) `const image = document.createElement('img')`; scope `<anonymous@13>/openViewer`.
- [L222](../sources/image-viewer-1.2.js.txt) `const downloadLink = document.createElement('a')`; scope `<anonymous@13>/openViewer/<anonymous@217>`.
- [L296](../sources/image-viewer-1.2.js.txt) `const link = event.target.closest('a[href]')`; scope `<anonymous@13>/<anonymous@291>`.
- [L302](../sources/image-viewer-1.2.js.txt) `const url = link.href`; scope `<anonymous@13>/<anonymous@291>`.
- [L303](../sources/image-viewer-1.2.js.txt) `const looksLikeImage = IMAGE_EXTENSIONS.test(url)`; scope `<anonymous@13>/<anonymous@291>`.

## storage

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## events

- [L13](../sources/image-viewer-1.2.js.txt) `() => { 'use strict'; const IMAGE_EXTENSIONS = /\.(?:avif|bmp|gif|jpe?g|png|svg|webp)(?:$|[?#])/i; let overlay = null; let objectUrl = null; let currentBlob = null; let currentUrl = ''; let zoom = 1; function createButton(text) { const button = document.createElement('button'); button.type = 'button`; scope `root`.
- [L41](../sources/image-viewer-1.2.js.txt) `button.addEventListener('mouseenter', () => { button.style.background = 'rgba(255,255,255,.22)'; })`; scope `<anonymous@13>/createButton`.
- [L45](../sources/image-viewer-1.2.js.txt) `button.addEventListener('mouseleave', () => { button.style.background = 'rgba(255,255,255,.12)'; })`; scope `<anonymous@13>/createButton`.
- [L188](../sources/image-viewer-1.2.js.txt) `zoomOutButton.addEventListener('click', () => { zoom = Math.max(0.1, zoom - 0.1); updateZoom(); })`; scope `<anonymous@13>/openViewer`.
- [L193](../sources/image-viewer-1.2.js.txt) `zoomInButton.addEventListener('click', () => { zoom = Math.min(8, zoom + 0.1); updateZoom(); })`; scope `<anonymous@13>/openViewer`.
- [L198](../sources/image-viewer-1.2.js.txt) `zoomResetButton.addEventListener('click', () => { zoom = 1; updateZoom(); })`; scope `<anonymous@13>/openViewer`.
- [L203](../sources/image-viewer-1.2.js.txt) `copyButton.addEventListener('click', async () => { try { await navigator.clipboard.writeText(currentUrl); copyButton.textContent = 'Skopírované ✓'; setTimeout(() => { copyButton.textContent = 'Kopírovať URL'; }, 1200); } catch { window.prompt('Adresa obrázka:', currentUrl); } })`; scope `<anonymous@13>/openViewer`.
- [L217](../sources/image-viewer-1.2.js.txt) `downloadButton.addEventListener('click', () => { if (!objectUrl || !currentBlob) { return; } const downloadLink = document.createElement('a'); downloadLink.href = objectUrl; downloadLink.download = getFilename( currentUrl, currentBlob.type ); document.body.append(downloadLink); downloadLink.click();`; scope `<anonymous@13>/openViewer`.
- [L235](../sources/image-viewer-1.2.js.txt) `closeButton.addEventListener('click', closeViewer)`; scope `<anonymous@13>/openViewer`.
- [L237](../sources/image-viewer-1.2.js.txt) `stage.addEventListener('wheel', event => { if (!objectUrl) { return; } event.preventDefault(); zoom += event.deltaY < 0 ? 0.1 : -0.1; zoom = Math.min(8, Math.max(0.1, zoom)); updateZoom(); }, { passive: false })`; scope `<anonymous@13>/openViewer`.
- [L270](../sources/image-viewer-1.2.js.txt) `image.addEventListener('load', () => { info.textContent = '${getFilename(currentUrl, currentBlob.type)} — ' + '${image.naturalWidth} × ${image.naturalHeight} px'; })`; scope `<anonymous@13>/openViewer/onload`.
- [L276](../sources/image-viewer-1.2.js.txt) `image.addEventListener('error', () => { info.textContent = 'Súbor sa nepodarilo rozpoznať ako obrázok.'; })`; scope `<anonymous@13>/openViewer/onload`.
- [L289](../sources/image-viewer-1.2.js.txt) `document.addEventListener('click', event => { if (event.button !== 0) { return; } const link = event.target.closest('a[href]'); if (!link) { return; } const url = link.href; const looksLikeImage = IMAGE_EXTENSIONS.test(url); // Alt + klik skúsi ako obrázok otvoriť aj link bez prípony. if (!looksLike`; scope `<anonymous@13>`.
- [L327](../sources/image-viewer-1.2.js.txt) `document.addEventListener('keydown', event => { if (event.key === 'Escape' && overlay) { closeViewer(); } })`; scope `<anonymous@13>`.

## lifecycle

- [L13](../sources/image-viewer-1.2.js.txt) `() => { 'use strict'; const IMAGE_EXTENSIONS = /\.(?:avif|bmp|gif|jpe?g|png|svg|webp)(?:$|[?#])/i; let overlay = null; let objectUrl = null; let currentBlob = null; let currentUrl = ''; let zoom = 1; function createButton(text) { const button = document.createElement('button'); button.type = 'button`; scope `root`.
- [L209](../sources/image-viewer-1.2.js.txt) `setTimeout(() => { copyButton.textContent = 'Kopírovať URL'; }, 1200)`; scope `<anonymous@13>/openViewer/<anonymous@203>`.

## io

- [L13](../sources/image-viewer-1.2.js.txt) `() => { 'use strict'; const IMAGE_EXTENSIONS = /\.(?:avif|bmp|gif|jpe?g|png|svg|webp)(?:$|[?#])/i; let overlay = null; let objectUrl = null; let currentBlob = null; let currentUrl = ''; let zoom = 1; function createButton(text) { const button = document.createElement('button'); button.type = 'button`; scope `root`.
- [L85](../sources/image-viewer-1.2.js.txt) `URL.revokeObjectURL(objectUrl)`; scope `<anonymous@13>/closeViewer`.
- [L205](../sources/image-viewer-1.2.js.txt) `navigator.clipboard.writeText(currentUrl)`; scope `<anonymous@13>/openViewer/<anonymous@203>`.
- [L254](../sources/image-viewer-1.2.js.txt) `GM_xmlhttpRequest({ method: 'GET', url, responseType: 'blob', onload(response) { if (response.status < 200 || response.status >= 400) { info.textContent = 'Chyba HTTP ${response.status}'; return; } currentBlob = response.response; objectUrl = URL.createObjectURL(currentBlob); image.src = objectUrl; `; scope `<anonymous@13>/openViewer`.
- [L266](../sources/image-viewer-1.2.js.txt) `URL.createObjectURL(currentBlob)`; scope `<anonymous@13>/openViewer/onload`.

## dom-read

- [L296](../sources/image-viewer-1.2.js.txt) `event.target.closest('a[href]')`; scope `<anonymous@13>/<anonymous@291>`.

## dom-write

- [L13](../sources/image-viewer-1.2.js.txt) `() => { 'use strict'; const IMAGE_EXTENSIONS = /\.(?:avif|bmp|gif|jpe?g|png|svg|webp)(?:$|[?#])/i; let overlay = null; let objectUrl = null; let currentBlob = null; let currentUrl = ''; let zoom = 1; function createButton(text) { const button = document.createElement('button'); button.type = 'button`; scope `root`.
- [L89](../sources/image-viewer-1.2.js.txt) `overlay?.remove()`; scope `<anonymous@13>/closeViewer`.
- [L146](../sources/image-viewer-1.2.js.txt) `toolbar.append(info, zoomOutButton, zoomResetButton, zoomInButton, copyButton, downloadButton, closeButton)`; scope `<anonymous@13>/openViewer`.
- [L178](../sources/image-viewer-1.2.js.txt) `stage.append(image)`; scope `<anonymous@13>/openViewer`.
- [L179](../sources/image-viewer-1.2.js.txt) `overlay.append(toolbar, stage)`; scope `<anonymous@13>/openViewer`.
- [L181](../sources/image-viewer-1.2.js.txt) `(document.body || document.documentElement).append(overlay)`; scope `<anonymous@13>/openViewer`.
- [L230](../sources/image-viewer-1.2.js.txt) `document.body.append(downloadLink)`; scope `<anonymous@13>/openViewer/<anonymous@217>`.
- [L232](../sources/image-viewer-1.2.js.txt) `downloadLink.remove()`; scope `<anonymous@13>/openViewer/<anonymous@217>`.

## logs

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## Zápisy do globálov, DOM a ostatných vlastností

- [L29](../sources/image-viewer-1.2.js.txt) `button.textContent = text`.
- [L42](../sources/image-viewer-1.2.js.txt) `button.style.background = 'rgba(255,255,255,.22)'`.
- [L46](../sources/image-viewer-1.2.js.txt) `button.style.background = 'rgba(255,255,255,.12)'`.
- [L103](../sources/image-viewer-1.2.js.txt) `overlay.id = 'faxcopy-image-viewer'`.
- [L128](../sources/image-viewer-1.2.js.txt) `info.textContent = 'Načítavam obrázok…'`.
- [L184](../sources/image-viewer-1.2.js.txt) `image.style.transform = 'scale(${zoom})'`.
- [L185](../sources/image-viewer-1.2.js.txt) `zoomResetButton.textContent = '${Math.round(zoom * 100)} %'`.
- [L207](../sources/image-viewer-1.2.js.txt) `copyButton.textContent = 'Skopírované ✓'`.
- [L210](../sources/image-viewer-1.2.js.txt) `copyButton.textContent = 'Kopírovať URL'`.
- [L261](../sources/image-viewer-1.2.js.txt) `info.textContent = 'Chyba HTTP ${response.status}'`.
- [L271](../sources/image-viewer-1.2.js.txt) `info.textContent = '${getFilename(currentUrl, currentBlob.type)} — ' + '${image.naturalWidth} × ${image.naturalHeight} px'`.
- [L277](../sources/image-viewer-1.2.js.txt) `info.textContent = 'Súbor sa nepodarilo rozpoznať ako obrázok.'`.
- [L283](../sources/image-viewer-1.2.js.txt) `info.textContent = 'Obrázok sa nepodarilo načítať.'`.
