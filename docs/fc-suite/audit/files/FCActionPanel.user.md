# FC Action Panel

Zdroj: FCActionPanel.user.js; referencia: 75087f8c4cbd34190e69318038bda6ef36eee0f2.
SHA-256: `45e425b47870be9073f06845a99fc09b8dd2cc035d2487e7b96a4e0e5ee73fc0`. Riadkov: 252.

AST inventár: obsahuje aj vnorené/anonýmne funkcie a lokálne premenné. Zoznam premenných nie je zoznam editovateľných nastavení. Volania sú klasifikované podľa názvu; dynamické aliasy môžu vyžadovať ručné dohľadanie. Historické @require hlavičky v načítanom JS nie sú ďalším automaticky spusteným @require reťazcom.

## Metadata

```json
{
  "name": [
    "FC Action Panel"
  ],
  "namespace": [
    "faxcopy-userscripts"
  ],
  "author": [
    "mato e."
  ],
  "version": [
    "1.9"
  ],
  "description": [
    "Spoločný riadok pre tlačidlá a nástroje userscriptov na detaile VP"
  ],
  "updateURL": [
    "https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/main/FCActionPanel.user.js"
  ],
  "downloadURL": [
    "https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/main/FCActionPanel.user.js"
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

- [L14–251](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L14) `<anonymous@14>()`; scope `root`.
- [L29–31](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L29) `normalizeText(value)`; scope `<anonymous@14>`.
- [L33–44](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L33) `findActionSection()`; scope `<anonymous@14>`.
- [L35–35](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L35) `<anonymous@35>(node)`; scope `<anonymous@14>/findActionSection`.
- [L46–61](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L46) `addStyles()`; scope `<anonymous@14>`.
- [L63–95](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L63) `ensureActionPanel()`; scope `<anonymous@14>`.
- [L97–111](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L97) `styleActionButton(button, options = {})`; scope `<anonymous@14>`.
- [L113–184](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L113) `ensureFrontQueueDropdown(panel)`; scope `<anonymous@14>`.
- [L143–146](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L143) `setOpen(open)`; scope `<anonymous@14>/ensureFrontQueueDropdown`.
- [L148–152](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L148) `<anonymous@148>(event)`; scope `<anonymous@14>/ensureFrontQueueDropdown`.
- [L153–159](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L153) `<anonymous@153>(event)`; scope `<anonymous@14>/ensureFrontQueueDropdown`.
- [L160–168](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L160) `<anonymous@160>(event)`; scope `<anonymous@14>/ensureFrontQueueDropdown`.
- [L169–171](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L169) `<anonymous@169>(event)`; scope `<anonymous@14>/ensureFrontQueueDropdown`.
- [L172–174](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L172) `<anonymous@172>(event)`; scope `<anonymous@14>/ensureFrontQueueDropdown`.
- [L175–179](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L175) `<anonymous@175>(event)`; scope `<anonymous@14>/ensureFrontQueueDropdown`.
- [L186–200](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L186) `orderButtons(panel)`; scope `<anonymous@14>`.
- [L188–191](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L188) `<anonymous@188>(node, index)`; scope `<anonymous@14>/orderButtons`.
- [L189–189](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L189) `<anonymous@189>(item)`; scope `<anonymous@14>/orderButtons/<anonymous@188>`.
- [L192–192](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L192) `<anonymous@192>(a, b)`; scope `<anonymous@14>/orderButtons`.
- [L193–195](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L193) `<anonymous@193>({ node }, index)`; scope `<anonymous@14>/orderButtons`.
- [L202–223](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L202) `adoptKnownButtons()`; scope `<anonymous@14>`.
- [L205–205](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L205) `<anonymous@205>(config)`; scope `<anonymous@14>/adoptKnownButtons`.
- [L205–210](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L205) `<anonymous@205>(config)`; scope `<anonymous@14>/adoptKnownButtons`.
- [L231–244](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L231) `init()`; scope `<anonymous@14>`.
- [L235–242](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L235) `<anonymous@235>()`; scope `<anonymous@14>/init`.
- [L238–241](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L238) `<anonymous@238>()`; scope `<anonymous@14>/init/<anonymous@235>`.

## Premenné a pôvodné inicializátory

Dlhé inicializátory sú tu skrátené na 300 znakov; úplné znenie je v inventory.json a v zdroji.

- [L17](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L17) `const PANEL_ID = 'fc-userscripts-action-panel'`; scope `<anonymous@14>`.
- [L18](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L18) `const STYLE_ID = 'fc-userscripts-action-panel-style'`; scope `<anonymous@14>`.
- [L19](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L19) `const FRONT_QUEUE_ID = 'fc-userscripts-front-queue'`; scope `<anonymous@14>`.
- [L20](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L20) `const FRONT_QUEUE_MENU_ID = 'fc-userscripts-front-queue-menu'`; scope `<anonymous@14>`.
- [L21](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L21) `const ACTION_HEADING = 'AKCIA'`; scope `<anonymous@14>`.
- [L22](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L22) `const KNOWN_BUTTONS = [ { selector: '#material-detector-next-config-button', order: 10, background: '#183b56', borderColor: '#123149' }, { selector: '#materialDetectorConfigButton', order: 20, background: '#263238', borderColor: '#111111' }, { selector: '#m2CalcButton', order: 30, background: '#183b`; scope `<anonymous@14>`.
- [L34](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L34) `const candidates = Array.from(document.querySelectorAll('h1,h2,h3,h4,.box-head,.box-title,.box_header'))`; scope `<anonymous@14>/findActionSection`.
- [L35](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L35) `const heading = candidates.find(node => normalizeText(node.textContent) === ACTION_HEADING)`; scope `<anonymous@14>/findActionSection`.
- [L38](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L38) `const box = heading.closest('.box') || heading.closest('[class*="grid_"]')`; scope `<anonymous@14>/findActionSection`.
- [L48](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L48) `const style = document.createElement('style')`; scope `<anonymous@14>/addStyles`.
- [L66](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L66) `let panel = document.getElementById(PANEL_ID)`; scope `<anonymous@14>/ensureActionPanel`.
- [L82](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L82) `const section = findActionSection()`; scope `<anonymous@14>/ensureActionPanel`.
- [L98](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L98) `const background = options.background || '#8BB400'`; scope `<anonymous@14>/styleActionButton`.
- [L99](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L99) `const borderColor = options.borderColor || '#779904'`; scope `<anonymous@14>/styleActionButton`.
- [L114](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L114) `let dropdown = document.getElementById(FRONT_QUEUE_ID)`; scope `<anonymous@14>/ensureFrontQueueDropdown`.
- [L126](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L126) `const trigger = document.createElement('button')`; scope `<anonymous@14>/ensureFrontQueueDropdown`.
- [L136](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L136) `const menu = document.createElement('div')`; scope `<anonymous@14>/ensureFrontQueueDropdown`.
- [L143](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L143) `const setOpen = open => { menu.hidden = !open; trigger.setAttribute('aria-expanded', open ? 'true' : 'false'); }`; scope `<anonymous@14>/ensureFrontQueueDropdown`.
- [L157](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L157) `const items = menu.querySelectorAll('a,button,[role="menuitem"]')`; scope `<anonymous@14>/ensureFrontQueueDropdown/<anonymous@153>`.
- [L162](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L162) `const items = Array.from(menu.querySelectorAll('a,button,[role="menuitem"]'))`; scope `<anonymous@14>/ensureFrontQueueDropdown/<anonymous@160>`.
- [L165](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L165) `const currentIndex = items.indexOf(document.activeElement)`; scope `<anonymous@14>/ensureFrontQueueDropdown/<anonymous@160>`.
- [L166](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L166) `const step = event.key === 'ArrowDown' ? 1 : -1`; scope `<anonymous@14>/ensureFrontQueueDropdown/<anonymous@160>`.
- [L187](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L187) `const children = Array.from(panel.children)`; scope `<anonymous@14>/orderButtons`.
- [L188](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L188) `const indexed = children.map((node, index) => { const known = KNOWN_BUTTONS.find(item => item.selector && node.matches(item.selector)); return { node, index, order: known ? known.order : 100 + index }; })`; scope `<anonymous@14>/orderButtons`.
- [L189](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L189) `const known = KNOWN_BUTTONS.find(item => item.selector && node.matches(item.selector))`; scope `<anonymous@14>/orderButtons/<anonymous@188>`.
- [L196](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L196) `const dropdown = document.getElementById(FRONT_QUEUE_ID)`; scope `<anonymous@14>/orderButtons`.
- [L203](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L203) `const panel = ensureActionPanel()`; scope `<anonymous@14>/adoptKnownButtons`.
- [L206](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L206) `const button = document.querySelector(config.selector)`; scope `<anonymous@14>/adoptKnownButtons/<anonymous@205>`.
- [L214](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L214) `const dropdown = ensureFrontQueueDropdown(panel)`; scope `<anonymous@14>/adoptKnownButtons`.
- [L215](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L215) `const menu = dropdown.querySelector('#${FRONT_QUEUE_MENU_ID}')`; scope `<anonymous@14>/adoptKnownButtons`.
- [L216](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L216) `const graphicsButton = document.querySelector('#doGrafikyBtn')`; scope `<anonymous@14>/adoptKnownButtons`.
- [L234](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L234) `let scheduled = false`; scope `<anonymous@14>/init`.
- [L235](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L235) `const observer = new MutationObserver(() => { if (scheduled) return; scheduled = true; requestAnimationFrame(() => { scheduled = false; adoptKnownButtons(); }); })`; scope `<anonymous@14>/init`.

## storage

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## events

- [L14](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L14) `function () { 'use strict'; const PANEL_ID = 'fc-userscripts-action-panel'; const STYLE_ID = 'fc-userscripts-action-panel-style'; const FRONT_QUEUE_ID = 'fc-userscripts-front-queue'; const FRONT_QUEUE_MENU_ID = 'fc-userscripts-front-queue-menu'; const ACTION_HEADING = 'AKCIA'; const KNOWN_BUTTONS = `; scope `root`.
- [L148](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L148) `trigger.addEventListener('click', event => { event.preventDefault(); event.stopPropagation(); setOpen(menu.hidden); })`; scope `<anonymous@14>/ensureFrontQueueDropdown`.
- [L153](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L153) `trigger.addEventListener('keydown', event => { if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') return; event.preventDefault(); setOpen(true); const items = menu.querySelectorAll('a,button,[role="menuitem"]'); if (items.length) items[event.key === 'ArrowDown' ? 0 : items.length - 1].focus()`; scope `<anonymous@14>/ensureFrontQueueDropdown`.
- [L160](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L160) `menu.addEventListener('keydown', event => { if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') return; const items = Array.from(menu.querySelectorAll('a,button,[role="menuitem"]')); if (!items.length) return; event.preventDefault(); const currentIndex = items.indexOf(document.activeElement); `; scope `<anonymous@14>/ensureFrontQueueDropdown`.
- [L169](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L169) `menu.addEventListener('click', event => { if (event.target.closest('a,button')) setOpen(false); }, true)`; scope `<anonymous@14>/ensureFrontQueueDropdown`.
- [L172](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L172) `document.addEventListener('click', event => { if (!dropdown.contains(event.target)) setOpen(false); })`; scope `<anonymous@14>/ensureFrontQueueDropdown`.
- [L175](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L175) `document.addEventListener('keydown', event => { if (event.key !== 'Escape' || menu.hidden) return; setOpen(false); trigger.focus(); })`; scope `<anonymous@14>/ensureFrontQueueDropdown`.
- [L247](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L247) `document.addEventListener('DOMContentLoaded', init, { once: true })`; scope `<anonymous@14>`.

## lifecycle

- [L14](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L14) `function () { 'use strict'; const PANEL_ID = 'fc-userscripts-action-panel'; const STYLE_ID = 'fc-userscripts-action-panel-style'; const FRONT_QUEUE_ID = 'fc-userscripts-front-queue'; const FRONT_QUEUE_MENU_ID = 'fc-userscripts-front-queue-menu'; const ACTION_HEADING = 'AKCIA'; const KNOWN_BUTTONS = `; scope `root`.
- [L235](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L235) `MutationObserver(() => { if (scheduled) return; scheduled = true; requestAnimationFrame(() => { scheduled = false; adoptKnownButtons(); }); })`; scope `<anonymous@14>/init`.
- [L238](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L238) `requestAnimationFrame(() => { scheduled = false; adoptKnownButtons(); })`; scope `<anonymous@14>/init/<anonymous@235>`.
- [L243](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L243) `observer.observe(document.body, { childList: true, subtree: true })`; scope `<anonymous@14>/init`.

## io

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## dom-read

- [L14](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L14) `function () { 'use strict'; const PANEL_ID = 'fc-userscripts-action-panel'; const STYLE_ID = 'fc-userscripts-action-panel-style'; const FRONT_QUEUE_ID = 'fc-userscripts-front-queue'; const FRONT_QUEUE_MENU_ID = 'fc-userscripts-front-queue-menu'; const ACTION_HEADING = 'AKCIA'; const KNOWN_BUTTONS = `; scope `root`.
- [L34](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L34) `document.querySelectorAll('h1,h2,h3,h4,.box-head,.box-title,.box_header')`; scope `<anonymous@14>/findActionSection`.
- [L38](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L38) `heading.closest('.box')`; scope `<anonymous@14>/findActionSection`.
- [L38](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L38) `heading.closest('[class*="grid_"]')`; scope `<anonymous@14>/findActionSection`.
- [L39](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L39) `heading.closest('.box-head,.box-title,.box_header')`; scope `<anonymous@14>/findActionSection`.
- [L42](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L42) `heading.closest('.box-head,.box-title,.box_header')`; scope `<anonymous@14>/findActionSection`.
- [L47](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L47) `document.getElementById(STYLE_ID)`; scope `<anonymous@14>/addStyles`.
- [L66](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L66) `document.getElementById(PANEL_ID)`; scope `<anonymous@14>/ensureActionPanel`.
- [L114](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L114) `document.getElementById(FRONT_QUEUE_ID)`; scope `<anonymous@14>/ensureFrontQueueDropdown`.
- [L157](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L157) `menu.querySelectorAll('a,button,[role="menuitem"]')`; scope `<anonymous@14>/ensureFrontQueueDropdown/<anonymous@153>`.
- [L162](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L162) `menu.querySelectorAll('a,button,[role="menuitem"]')`; scope `<anonymous@14>/ensureFrontQueueDropdown/<anonymous@160>`.
- [L170](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L170) `event.target.closest('a,button')`; scope `<anonymous@14>/ensureFrontQueueDropdown/<anonymous@169>`.
- [L189](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L189) `node.matches(item.selector)`; scope `<anonymous@14>/orderButtons/<anonymous@188>/<anonymous@189>`.
- [L196](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L196) `document.getElementById(FRONT_QUEUE_ID)`; scope `<anonymous@14>/orderButtons`.
- [L206](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L206) `document.querySelector(config.selector)`; scope `<anonymous@14>/adoptKnownButtons/<anonymous@205>`.
- [L215](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L215) `dropdown.querySelector('#${FRONT_QUEUE_MENU_ID}')`; scope `<anonymous@14>/adoptKnownButtons`.
- [L216](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L216) `document.querySelector('#doGrafikyBtn')`; scope `<anonymous@14>/adoptKnownButtons`.

## dom-write

- [L14](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L14) `function () { 'use strict'; const PANEL_ID = 'fc-userscripts-action-panel'; const STYLE_ID = 'fc-userscripts-action-panel-style'; const FRONT_QUEUE_ID = 'fc-userscripts-front-queue'; const FRONT_QUEUE_MENU_ID = 'fc-userscripts-front-queue-menu'; const ACTION_HEADING = 'AKCIA'; const KNOWN_BUTTONS = `; scope `root`.
- [L60](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L60) `(document.head || document.documentElement).appendChild(style)`; scope `<anonymous@14>/addStyles`.
- [L70](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L70) `panel.setAttribute('role', 'group')`; scope `<anonymous@14>/ensureActionPanel`.
- [L71](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L71) `panel.setAttribute('aria-label', 'Akcie userscriptov')`; scope `<anonymous@14>/ensureActionPanel`.
- [L85](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L85) `section.box.insertBefore(panel, section.heading)`; scope `<anonymous@14>/ensureActionPanel`.
- [L89](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L89) `section.heading.parentNode.insertBefore(panel, section.heading)`; scope `<anonymous@14>/ensureActionPanel`.
- [L92](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L92) `document.body.appendChild(panel)`; scope `<anonymous@14>/ensureActionPanel`.
- [L131](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L131) `trigger.setAttribute('aria-haspopup', 'true')`; scope `<anonymous@14>/ensureFrontQueueDropdown`.
- [L132](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L132) `trigger.setAttribute('aria-expanded', 'false')`; scope `<anonymous@14>/ensureFrontQueueDropdown`.
- [L133](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L133) `trigger.setAttribute('aria-controls', FRONT_QUEUE_MENU_ID)`; scope `<anonymous@14>/ensureFrontQueueDropdown`.
- [L139](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L139) `menu.setAttribute('role', 'menu')`; scope `<anonymous@14>/ensureFrontQueueDropdown`.
- [L140](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L140) `menu.setAttribute('aria-label', 'Akcie fronty')`; scope `<anonymous@14>/ensureFrontQueueDropdown`.
- [L145](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L145) `trigger.setAttribute('aria-expanded', open ? 'true' : 'false')`; scope `<anonymous@14>/ensureFrontQueueDropdown/setOpen`.
- [L181](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L181) `dropdown.append(trigger, menu)`; scope `<anonymous@14>/ensureFrontQueueDropdown`.
- [L182](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L182) `panel.appendChild(dropdown)`; scope `<anonymous@14>/ensureFrontQueueDropdown`.
- [L194](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L194) `panel.insertBefore(node, panel.children[index] || null)`; scope `<anonymous@14>/orderButtons/<anonymous@193>`.
- [L198](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L198) `panel.appendChild(dropdown)`; scope `<anonymous@14>/orderButtons`.
- [L209](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L209) `panel.appendChild(button)`; scope `<anonymous@14>/adoptKnownButtons/<anonymous@205>`.
- [L219](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L219) `graphicsButton.setAttribute('role', 'menuitem')`; scope `<anonymous@14>/adoptKnownButtons`.
- [L220](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L220) `menu.appendChild(graphicsButton)`; scope `<anonymous@14>/adoptKnownButtons`.

## logs

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## Zápisy do globálov, DOM a ostatných vlastností

- [L49](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L49) `style.id = STYLE_ID`.
- [L50](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L50) `style.textContent = ' #${PANEL_ID}{position:relative;z-index:2;display:flex;flex-flow:row wrap;align-items:center;gap:5px;width:100%;box-sizing:border-box;margin:0 0 6px;padding:0;background:transparent;border:0;border-radius:0;font:11px/1.2 Tahoma,Calibri,"Trebuchet MS",sans-serif} #${PANEL_ID} .fc`.
- [L69](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L69) `panel.id = PANEL_ID`.
- [L118](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L118) `dropdown.id = FRONT_QUEUE_ID`.
- [L119](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L119) `dropdown.className = 'fc-front-queue'`.
- [L128](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L128) `trigger.className = 'fc-action-button'`.
- [L129](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L129) `trigger.textContent = 'DO FRONTY ▾'`.
- [L137](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L137) `menu.id = FRONT_QUEUE_MENU_ID`.
- [L138](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L138) `menu.className = 'fc-front-queue-menu'`.
- [L225](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/FCActionPanel.user.js#L225) `window.FCUserscripts = Object.assign(window.FCUserscripts || {}, { ensureActionPanel, styleActionButton, adoptKnownButtons })`.
