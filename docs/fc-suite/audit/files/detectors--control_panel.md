# detectors/control_panel.js

Zdroj: detectors/control_panel.js; referencia: 75087f8c4cbd34190e69318038bda6ef36eee0f2.
SHA-256: `e6ddd944d7dae5aa15d913ddc9ba07c422ec630f57c2a3df9289aee0d75f83a2`. Riadkov: 304.

AST inventár: obsahuje aj vnorené/anonýmne funkcie a lokálne premenné. Zoznam premenných nie je zoznam editovateľných nastavení. Volania sú klasifikované podľa názvu; dynamické aliasy môžu vyžadovať ručné dohľadanie. Historické @require hlavičky v načítanom JS nie sú ďalším automaticky spusteným @require reťazcom.

## Metadata

```json
{}
```

## Funkcie a signatúry

- [L1–303](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L1) `<anonymous@1>()`; scope `root`.
- [L18–18](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L18) `onChange()`; scope `<anonymous@1>`.
- [L20–26](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L20) `esc(value)`; scope `<anonymous@1>`.
- [L28–32](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L28) `getPanelTop()`; scope `<anonymous@1>`.
- [L34–48](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L34) `ensureActionPanel()`; scope `<anonymous@1>`.
- [L50–61](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L50) `styleActionButton(button)`; scope `<anonymous@1>`.
- [L63–78](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L63) `ensureButton()`; scope `<anonymous@1>`.
- [L80–99](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L80) `addStyles()`; scope `<anonymous@1>`.
- [L101–109](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L101) `ensurePanel()`; scope `<anonymous@1>`.
- [L111–113](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L111) `getDetectors()`; scope `<anonymous@1>`.
- [L112–112](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L112) `<anonymous@112>(detector)`; scope `<anonymous@1>/getDetectors`.
- [L115–120](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L115) `getSelectedDetector()`; scope `<anonymous@1>`.
- [L119–119](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L119) `<anonymous@119>(detector)`; scope `<anonymous@1>/getSelectedDetector`.
- [L122–125](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L122) `getTokenList(detector)`; scope `<anonymous@1>`.
- [L127–131](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L127) `getCurrentRenameEnabled(settings)`; scope `<anonymous@1>`.
- [L133–136](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L133) `tokenPreview()`; scope `<anonymous@1>`.
- [L135–135](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L135) `<anonymous@135>(key)`; scope `<anonymous@1>/tokenPreview`.
- [L138–148](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L138) `detectorPreview()`; scope `<anonymous@1>`.
- [L150–183](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L150) `createBlockRow(block, tokens)`; scope `<anonymous@1>`.
- [L159–164](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L159) `<anonymous@159>(name)`; scope `<anonymous@1>/createBlockRow`.
- [L168–168](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L168) `sync()`; scope `<anonymous@1>/createBlockRow`.
- [L171–171](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L171) `<anonymous@171>()`; scope `<anonymous@1>/createBlockRow`.
- [L172–172](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L172) `<anonymous@172>()`; scope `<anonymous@1>/createBlockRow`.
- [L173–173](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L173) `<anonymous@173>()`; scope `<anonymous@1>/createBlockRow`.
- [L174–174](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L174) `<anonymous@174>(event)`; scope `<anonymous@1>/createBlockRow`.
- [L175–175](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L175) `<anonymous@175>(event)`; scope `<anonymous@1>/createBlockRow`.
- [L176–181](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L176) `<anonymous@176>(event)`; scope `<anonymous@1>/createBlockRow`.
- [L185–196](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L185) `createTemplateEditor(field, label, template, tokens)`; scope `<anonymous@1>`.
- [L191–191](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L191) `<anonymous@191>(block)`; scope `<anonymous@1>/createTemplateEditor`.
- [L192–192](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L192) `<anonymous@192>()`; scope `<anonymous@1>/createTemplateEditor`.
- [L193–193](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L193) `<anonymous@193>()`; scope `<anonymous@1>/createTemplateEditor`.
- [L194–194](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L194) `<anonymous@194>()`; scope `<anonymous@1>/createTemplateEditor`.
- [L198–206](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L198) `collectTemplate(panel, field)`; scope `<anonymous@1>`.
- [L201–205](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L201) `<anonymous@201>(row)`; scope `<anonymous@1>/collectTemplate`.
- [L205–205](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L205) `<anonymous@205>(block)`; scope `<anonymous@1>/collectTemplate`.
- [L208–232](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L208) `renderPanel()`; scope `<anonymous@1>`.
- [L220–220](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L220) `<anonymous@220>(item)`; scope `<anonymous@1>/renderPanel`.
- [L220–220](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L220) `<anonymous@220>(t)`; scope `<anonymous@1>/renderPanel`.
- [L226–226](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L226) `<anonymous@226>(event)`; scope `<anonymous@1>/renderPanel`.
- [L227–227](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L227) `<anonymous@227>(btn)`; scope `<anonymous@1>/renderPanel`.
- [L234–248](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L234) `saveCurrentSettings()`; scope `<anonymous@1>`.
- [L250–259](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L250) `resetCurrentSettings()`; scope `<anonymous@1>`.
- [L261–267](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L261) `saveAlias()`; scope `<anonymous@1>`.
- [L269–275](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L269) `clearAlias()`; scope `<anonymous@1>`.
- [L277–277](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L277) `openPanel()`; scope `<anonymous@1>`.
- [L278–278](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L278) `closePanel()`; scope `<anonymous@1>`.
- [L279–279](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L279) `togglePanel()`; scope `<anonymous@1>`.
- [L281–300](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L281) `init(options = {})`; scope `<anonymous@1>`.
- [L285–293](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L285) `boot()`; scope `<anonymous@1>/init`.
- [L289–292](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L289) `<anonymous@289>()`; scope `<anonymous@1>/init/boot`.
- [L296–299](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L296) `<anonymous@296>()`; scope `<anonymous@1>/init`.

## Premenné a pôvodné inicializátory

Dlhé inicializátory sú tu skrátené na 300 znakov; úplné znenie je v inventory.json a v zdroji.

- [L4](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L4) `const api = window.MaterialDetectorAPI`; scope `<anonymous@1>`.
- [L7](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L7) `const BUTTON_ID = 'materialDetectorConfigButton'`; scope `<anonymous@1>`.
- [L8](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L8) `const PANEL_ID = 'materialDetectorConfigPanel'`; scope `<anonymous@1>`.
- [L9](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L9) `const ACTION_PANEL_ID = 'fc-userscripts-action-panel'`; scope `<anonymous@1>`.
- [L10](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L10) `const DEFAULT_TOKENS = [ 'alias', 'size', 'quantity', 'vp', 'detector', 'code', 'productCode', 'mediaType', 'mediaTypeRaw', 'weight', 'variant', 'material', 'materialAlias', 'colorCode', 'folding', 'kind', 'canvas', 'giftPack', 'aliasKey', 'original', 'ext' ]`; scope `<anonymous@1>`.
- [L16](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L16) `let initialized = false`; scope `<anonymous@1>`.
- [L17](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L17) `let selectedDetectorId = ''`; scope `<anonymous@1>`.
- [L18](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L18) `let onChange = function () {}`; scope `<anonymous@1>`.
- [L29](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L29) `const topRow = document.querySelector('#top-row')`; scope `<anonymous@1>/getPanelTop`.
- [L38](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L38) `let panel = document.getElementById(ACTION_PANEL_ID)`; scope `<anonymous@1>/ensureActionPanel`.
- [L65](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L65) `const actionPanel = ensureActionPanel()`; scope `<anonymous@1>/ensureButton`.
- [L66](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L66) `let button = document.getElementById(BUTTON_ID)`; scope `<anonymous@1>/ensureButton`.
- [L82](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L82) `const style = document.createElement('style')`; scope `<anonymous@1>/addStyles`.
- [L103](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L103) `let panel = document.getElementById(PANEL_ID)`; scope `<anonymous@1>/ensurePanel`.
- [L116](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L116) `const detectors = getDetectors()`; scope `<anonymous@1>/getSelectedDetector`.
- [L117](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L117) `const state = window.__materialDetectorState || {}`; scope `<anonymous@1>/getSelectedDetector`.
- [L123](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L123) `const own = Array.isArray(detector && detector.tokens) ? detector.tokens : []`; scope `<anonymous@1>/getTokenList`.
- [L129](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L129) `const state = window.__materialDetectorState || {}`; scope `<anonymous@1>/getCurrentRenameEnabled`.
- [L134](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L134) `const tokens = Object.assign({}, (window.__materialDetectorState || {}).tokens || {}, window.__materialDetectorTokens || {})`; scope `<anonymous@1>/tokenPreview`.
- [L139](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L139) `const state = window.__materialDetectorState || {}`; scope `<anonymous@1>/detectorPreview`.
- [L151](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L151) `const row = document.createElement('div')`; scope `<anonymous@1>/createBlockRow`.
- [L156](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L156) `const type = row.querySelector('[data-block-type]')`; scope `<anonymous@1>/createBlockRow`.
- [L157](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L157) `const token = row.querySelector('[data-block-token]')`; scope `<anonymous@1>/createBlockRow`.
- [L158](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L158) `const text = row.querySelector('[data-block-text]')`; scope `<anonymous@1>/createBlockRow`.
- [L160](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L160) `const opt = document.createElement('option')`; scope `<anonymous@1>/createBlockRow/<anonymous@159>`.
- [L178](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L178) `const from = parseInt(event.dataTransfer.getData('text/plain'), 10)`; scope `<anonymous@1>/createBlockRow/<anonymous@176>`.
- [L179](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L179) `const dragged = Array.from(row.parentNode.children)[from]`; scope `<anonymous@1>/createBlockRow/<anonymous@176>`.
- [L186](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L186) `const wrap = document.createElement('div')`; scope `<anonymous@1>/createTemplateEditor`.
- [L190](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L190) `const list = wrap.querySelector('[data-blocks]')`; scope `<anonymous@1>/createTemplateEditor`.
- [L199](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L199) `const editor = panel.querySelector('[data-editor="${field}"]')`; scope `<anonymous@1>/collectTemplate`.
- [L202](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L202) `const type = row.querySelector('[data-block-type]').value`; scope `<anonymous@1>/collectTemplate/<anonymous@201>`.
- [L203](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L203) `const value = type === 'token' ? row.querySelector('[data-block-token]').value : row.querySelector('[data-block-text]').value`; scope `<anonymous@1>/collectTemplate/<anonymous@201>`.
- [L209](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L209) `const panel = ensurePanel()`; scope `<anonymous@1>/renderPanel`.
- [L210](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L210) `const detectors = getDetectors()`; scope `<anonymous@1>/renderPanel`.
- [L211](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L211) `const detector = getSelectedDetector()`; scope `<anonymous@1>/renderPanel`.
- [L214](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L214) `const settings = api.getDetectorSettings(detector.id)`; scope `<anonymous@1>/renderPanel`.
- [L215](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L215) `const tokens = getTokenList(detector)`; scope `<anonymous@1>/renderPanel`.
- [L216](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L216) `const state = window.__materialDetectorState || {}`; scope `<anonymous@1>/renderPanel`.
- [L217](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L217) `const aliasKey = (state.tokens && state.tokens.aliasKey) || (state.params && state.params.aliasKey) || ''`; scope `<anonymous@1>/renderPanel`.
- [L218](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L218) `const renameChecked = getCurrentRenameEnabled(settings) ? 'checked' : ''`; scope `<anonymous@1>/renderPanel`.
- [L221](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L221) `const editors = panel.querySelector('[data-editors]')`; scope `<anonymous@1>/renderPanel`.
- [L235](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L235) `const panel = ensurePanel()`; scope `<anonymous@1>/saveCurrentSettings`.
- [L236](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L236) `const detector = getSelectedDetector()`; scope `<anonymous@1>/saveCurrentSettings`.
- [L251](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L251) `const detector = getSelectedDetector()`; scope `<anonymous@1>/resetCurrentSettings`.
- [L253](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L253) `const config = api.loadPanelConfig()`; scope `<anonymous@1>/resetCurrentSettings`.
- [L262](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L262) `const panel = ensurePanel()`; scope `<anonymous@1>/saveAlias`.
- [L270](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L270) `const panel = ensurePanel()`; scope `<anonymous@1>/clearAlias`.
- [L277](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L277) `const panel = ensurePanel()`; scope `<anonymous@1>/openPanel`.
- [L279](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L279) `const panel = ensurePanel()`; scope `<anonymous@1>/togglePanel`.
- [L288](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L288) `let tries = 0`; scope `<anonymous@1>/init/boot`.
- [L289](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L289) `const interval = setInterval(() => { ensureButton(); if (++tries > 60) clearInterval(interval); }, 500)`; scope `<anonymous@1>/init/boot`.
- [L297](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L297) `const panel = document.getElementById(PANEL_ID)`; scope `<anonymous@1>/init/<anonymous@296>`.

## storage

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## events

- [L1](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L1) `function () { 'use strict'; const api = window.MaterialDetectorAPI; if (!api) return; const BUTTON_ID = 'materialDetectorConfigButton'; const PANEL_ID = 'materialDetectorConfigPanel'; const ACTION_PANEL_ID = 'fc-userscripts-action-panel'; const DEFAULT_TOKENS = [ 'alias', 'size', 'quantity', 'vp', '`; scope `root`.
- [L73](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L73) `button.addEventListener('click', togglePanel)`; scope `<anonymous@1>/ensureButton`.
- [L169](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L169) `type.addEventListener('change', sync)`; scope `<anonymous@1>/createBlockRow`.
- [L171](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L171) `row.querySelector('[data-remove]').addEventListener('click', () => row.remove())`; scope `<anonymous@1>/createBlockRow`.
- [L172](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L172) `row.querySelector('[data-up]').addEventListener('click', () => row.previousElementSibling && row.parentNode.insertBefore(row, row.previousElementSibling))`; scope `<anonymous@1>/createBlockRow`.
- [L173](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L173) `row.querySelector('[data-down]').addEventListener('click', () => row.nextElementSibling && row.parentNode.insertBefore(row.nextElementSibling, row))`; scope `<anonymous@1>/createBlockRow`.
- [L174](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L174) `row.addEventListener('dragstart', event => event.dataTransfer.setData('text/plain', Array.from(row.parentNode.children).indexOf(row)))`; scope `<anonymous@1>/createBlockRow`.
- [L175](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L175) `row.addEventListener('dragover', event => event.preventDefault())`; scope `<anonymous@1>/createBlockRow`.
- [L176](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L176) `row.addEventListener('drop', event => { event.preventDefault(); const from = parseInt(event.dataTransfer.getData('text/plain'), 10); const dragged = Array.from(row.parentNode.children)[from]; if (dragged && dragged !== row) row.parentNode.insertBefore(dragged, row); })`; scope `<anonymous@1>/createBlockRow`.
- [L192](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L192) `wrap.querySelector('[data-add-token]').addEventListener('click', () => list.appendChild(createBlockRow({ type: 'token', value: tokens[0] || 'alias' }, tokens)))`; scope `<anonymous@1>/createTemplateEditor`.
- [L193](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L193) `wrap.querySelector('[data-add-text]').addEventListener('click', () => list.appendChild(createBlockRow({ type: 'text', value: ' ' }, tokens)))`; scope `<anonymous@1>/createTemplateEditor`.
- [L194](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L194) `wrap.querySelector('[data-clear]').addEventListener('click', () => { list.innerHTML = ''; })`; scope `<anonymous@1>/createTemplateEditor`.
- [L226](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L226) `panel.querySelector('[data-detector-select]').addEventListener('change', event => { selectedDetectorId = event.target.value; renderPanel(); })`; scope `<anonymous@1>/renderPanel`.
- [L227](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L227) `btn.addEventListener('click', closePanel)`; scope `<anonymous@1>/renderPanel/<anonymous@227>`.
- [L228](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L228) `panel.querySelector('[data-save]').addEventListener('click', saveCurrentSettings)`; scope `<anonymous@1>/renderPanel`.
- [L229](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L229) `panel.querySelector('[data-reset]').addEventListener('click', resetCurrentSettings)`; scope `<anonymous@1>/renderPanel`.
- [L230](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L230) `panel.querySelector('[data-save-alias]').addEventListener('click', saveAlias)`; scope `<anonymous@1>/renderPanel`.
- [L231](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L231) `panel.querySelector('[data-clear-alias]').addEventListener('click', clearAlias)`; scope `<anonymous@1>/renderPanel`.
- [L245](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L245) `window.dispatchEvent(new CustomEvent('materialDetector:configChanged'))`; scope `<anonymous@1>/saveCurrentSettings`.
- [L245](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L245) `CustomEvent('materialDetector:configChanged')`; scope `<anonymous@1>/saveCurrentSettings`.
- [L256](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L256) `window.dispatchEvent(new CustomEvent('materialDetector:configChanged'))`; scope `<anonymous@1>/resetCurrentSettings`.
- [L256](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L256) `CustomEvent('materialDetector:configChanged')`; scope `<anonymous@1>/resetCurrentSettings`.
- [L264](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L264) `window.dispatchEvent(new CustomEvent('materialDetector:configChanged'))`; scope `<anonymous@1>/saveAlias`.
- [L264](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L264) `CustomEvent('materialDetector:configChanged')`; scope `<anonymous@1>/saveAlias`.
- [L272](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L272) `window.dispatchEvent(new CustomEvent('materialDetector:configChanged'))`; scope `<anonymous@1>/clearAlias`.
- [L272](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L272) `CustomEvent('materialDetector:configChanged')`; scope `<anonymous@1>/clearAlias`.
- [L295](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L295) `document.addEventListener('DOMContentLoaded', boot, { once: true })`; scope `<anonymous@1>/init`.
- [L296](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L296) `window.addEventListener('materialDetector:updated', () => { const panel = document.getElementById(PANEL_ID); if (panel && panel.style.display === 'block') renderPanel(); })`; scope `<anonymous@1>/init`.

## lifecycle

- [L1](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L1) `function () { 'use strict'; const api = window.MaterialDetectorAPI; if (!api) return; const BUTTON_ID = 'materialDetectorConfigButton'; const PANEL_ID = 'materialDetectorConfigPanel'; const ACTION_PANEL_ID = 'fc-userscripts-action-panel'; const DEFAULT_TOKENS = [ 'alias', 'size', 'quantity', 'vp', '`; scope `root`.
- [L289](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L289) `setInterval(() => { ensureButton(); if (++tries > 60) clearInterval(interval); }, 500)`; scope `<anonymous@1>/init/boot`.
- [L291](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L291) `clearInterval(interval)`; scope `<anonymous@1>/init/boot/<anonymous@289>`.

## io

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## dom-read

- [L1](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L1) `function () { 'use strict'; const api = window.MaterialDetectorAPI; if (!api) return; const BUTTON_ID = 'materialDetectorConfigButton'; const PANEL_ID = 'materialDetectorConfigPanel'; const ACTION_PANEL_ID = 'fc-userscripts-action-panel'; const DEFAULT_TOKENS = [ 'alias', 'size', 'quantity', 'vp', '`; scope `root`.
- [L29](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L29) `document.querySelector('#top-row')`; scope `<anonymous@1>/getPanelTop`.
- [L38](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L38) `document.getElementById(ACTION_PANEL_ID)`; scope `<anonymous@1>/ensureActionPanel`.
- [L66](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L66) `document.getElementById(BUTTON_ID)`; scope `<anonymous@1>/ensureButton`.
- [L81](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L81) `document.getElementById('materialDetectorConfigStyles')`; scope `<anonymous@1>/addStyles`.
- [L103](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L103) `document.getElementById(PANEL_ID)`; scope `<anonymous@1>/ensurePanel`.
- [L156](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L156) `row.querySelector('[data-block-type]')`; scope `<anonymous@1>/createBlockRow`.
- [L157](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L157) `row.querySelector('[data-block-token]')`; scope `<anonymous@1>/createBlockRow`.
- [L158](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L158) `row.querySelector('[data-block-text]')`; scope `<anonymous@1>/createBlockRow`.
- [L171](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L171) `row.querySelector('[data-remove]').addEventListener('click', () => row.remove())`; scope `<anonymous@1>/createBlockRow`.
- [L171](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L171) `row.querySelector('[data-remove]')`; scope `<anonymous@1>/createBlockRow`.
- [L172](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L172) `row.querySelector('[data-up]').addEventListener('click', () => row.previousElementSibling && row.parentNode.insertBefore(row, row.previousElementSibling))`; scope `<anonymous@1>/createBlockRow`.
- [L172](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L172) `row.querySelector('[data-up]')`; scope `<anonymous@1>/createBlockRow`.
- [L173](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L173) `row.querySelector('[data-down]').addEventListener('click', () => row.nextElementSibling && row.parentNode.insertBefore(row.nextElementSibling, row))`; scope `<anonymous@1>/createBlockRow`.
- [L173](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L173) `row.querySelector('[data-down]')`; scope `<anonymous@1>/createBlockRow`.
- [L190](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L190) `wrap.querySelector('[data-blocks]')`; scope `<anonymous@1>/createTemplateEditor`.
- [L192](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L192) `wrap.querySelector('[data-add-token]').addEventListener('click', () => list.appendChild(createBlockRow({ type: 'token', value: tokens[0] || 'alias' }, tokens)))`; scope `<anonymous@1>/createTemplateEditor`.
- [L192](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L192) `wrap.querySelector('[data-add-token]')`; scope `<anonymous@1>/createTemplateEditor`.
- [L193](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L193) `wrap.querySelector('[data-add-text]').addEventListener('click', () => list.appendChild(createBlockRow({ type: 'text', value: ' ' }, tokens)))`; scope `<anonymous@1>/createTemplateEditor`.
- [L193](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L193) `wrap.querySelector('[data-add-text]')`; scope `<anonymous@1>/createTemplateEditor`.
- [L194](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L194) `wrap.querySelector('[data-clear]').addEventListener('click', () => { list.innerHTML = ''; })`; scope `<anonymous@1>/createTemplateEditor`.
- [L194](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L194) `wrap.querySelector('[data-clear]')`; scope `<anonymous@1>/createTemplateEditor`.
- [L199](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L199) `panel.querySelector('[data-editor="${field}"]')`; scope `<anonymous@1>/collectTemplate`.
- [L201](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L201) `Array.from(editor.querySelectorAll('[data-block-row]')).map(row => { const type = row.querySelector('[data-block-type]').value; const value = type === 'token' ? row.querySelector('[data-block-token]').value : row.querySelector('[data-block-text]').value; return { type, value }; }).filter(block => St`; scope `<anonymous@1>/collectTemplate`.
- [L201](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L201) `Array.from(editor.querySelectorAll('[data-block-row]')).map(row => { const type = row.querySelector('[data-block-type]').value; const value = type === 'token' ? row.querySelector('[data-block-token]').value : row.querySelector('[data-block-text]').value; return { type, value }; })`; scope `<anonymous@1>/collectTemplate`.
- [L201](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L201) `editor.querySelectorAll('[data-block-row]')`; scope `<anonymous@1>/collectTemplate`.
- [L202](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L202) `row.querySelector('[data-block-type]')`; scope `<anonymous@1>/collectTemplate/<anonymous@201>`.
- [L203](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L203) `row.querySelector('[data-block-token]')`; scope `<anonymous@1>/collectTemplate/<anonymous@201>`.
- [L203](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L203) `row.querySelector('[data-block-text]')`; scope `<anonymous@1>/collectTemplate/<anonymous@201>`.
- [L221](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L221) `panel.querySelector('[data-editors]')`; scope `<anonymous@1>/renderPanel`.
- [L226](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L226) `panel.querySelector('[data-detector-select]').addEventListener('change', event => { selectedDetectorId = event.target.value; renderPanel(); })`; scope `<anonymous@1>/renderPanel`.
- [L226](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L226) `panel.querySelector('[data-detector-select]')`; scope `<anonymous@1>/renderPanel`.
- [L227](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L227) `panel.querySelectorAll('[data-close]').forEach(btn => btn.addEventListener('click', closePanel))`; scope `<anonymous@1>/renderPanel`.
- [L227](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L227) `panel.querySelectorAll('[data-close]')`; scope `<anonymous@1>/renderPanel`.
- [L228](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L228) `panel.querySelector('[data-save]').addEventListener('click', saveCurrentSettings)`; scope `<anonymous@1>/renderPanel`.
- [L228](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L228) `panel.querySelector('[data-save]')`; scope `<anonymous@1>/renderPanel`.
- [L229](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L229) `panel.querySelector('[data-reset]').addEventListener('click', resetCurrentSettings)`; scope `<anonymous@1>/renderPanel`.
- [L229](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L229) `panel.querySelector('[data-reset]')`; scope `<anonymous@1>/renderPanel`.
- [L230](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L230) `panel.querySelector('[data-save-alias]').addEventListener('click', saveAlias)`; scope `<anonymous@1>/renderPanel`.
- [L230](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L230) `panel.querySelector('[data-save-alias]')`; scope `<anonymous@1>/renderPanel`.
- [L231](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L231) `panel.querySelector('[data-clear-alias]').addEventListener('click', clearAlias)`; scope `<anonymous@1>/renderPanel`.
- [L231](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L231) `panel.querySelector('[data-clear-alias]')`; scope `<anonymous@1>/renderPanel`.
- [L243](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L243) `panel.querySelector('[data-rename-enabled]')`; scope `<anonymous@1>/saveCurrentSettings`.
- [L263](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L263) `panel.querySelector('[data-alias-key]')`; scope `<anonymous@1>/saveAlias`.
- [L263](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L263) `panel.querySelector('[data-alias-value]')`; scope `<anonymous@1>/saveAlias`.
- [L271](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L271) `panel.querySelector('[data-alias-key]')`; scope `<anonymous@1>/clearAlias`.
- [L297](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L297) `document.getElementById(PANEL_ID)`; scope `<anonymous@1>/init/<anonymous@296>`.

## dom-write

- [L1](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L1) `function () { 'use strict'; const api = window.MaterialDetectorAPI; if (!api) return; const BUTTON_ID = 'materialDetectorConfigButton'; const PANEL_ID = 'materialDetectorConfigPanel'; const ACTION_PANEL_ID = 'fc-userscripts-action-panel'; const DEFAULT_TOKENS = [ 'alias', 'size', 'quantity', 'vp', '`; scope `root`.
- [L46](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L46) `document.body.appendChild(panel)`; scope `<anonymous@1>/ensureActionPanel`.
- [L76](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L76) `actionPanel.appendChild(button)`; scope `<anonymous@1>/ensureButton`.
- [L98](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L98) `document.head.appendChild(style)`; scope `<anonymous@1>/addStyles`.
- [L107](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L107) `document.body.appendChild(panel)`; scope `<anonymous@1>/ensurePanel`.
- [L163](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L163) `token.appendChild(opt)`; scope `<anonymous@1>/createBlockRow/<anonymous@159>`.
- [L171](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L171) `row.remove()`; scope `<anonymous@1>/createBlockRow/<anonymous@171>`.
- [L172](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L172) `row.parentNode.insertBefore(row, row.previousElementSibling)`; scope `<anonymous@1>/createBlockRow/<anonymous@172>`.
- [L173](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L173) `row.parentNode.insertBefore(row.nextElementSibling, row)`; scope `<anonymous@1>/createBlockRow/<anonymous@173>`.
- [L180](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L180) `row.parentNode.insertBefore(dragged, row)`; scope `<anonymous@1>/createBlockRow/<anonymous@176>`.
- [L191](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L191) `list.appendChild(createBlockRow(block, tokens))`; scope `<anonymous@1>/createTemplateEditor/<anonymous@191>`.
- [L192](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L192) `list.appendChild(createBlockRow({ type: 'token', value: tokens[0] || 'alias' }, tokens))`; scope `<anonymous@1>/createTemplateEditor/<anonymous@192>`.
- [L193](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L193) `list.appendChild(createBlockRow({ type: 'text', value: ' ' }, tokens))`; scope `<anonymous@1>/createTemplateEditor/<anonymous@193>`.
- [L222](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L222) `editors.appendChild(createTemplateEditor('leftTemplate', 'TM_testoLeft template', settings.leftTemplate || [], tokens))`; scope `<anonymous@1>/renderPanel`.
- [L223](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L223) `editors.appendChild(createTemplateEditor('topTemplate', 'TM_top template', settings.topTemplate || [], tokens))`; scope `<anonymous@1>/renderPanel`.
- [L224](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L224) `editors.appendChild(createTemplateEditor('bottomTemplate', 'TM_bottom template', settings.bottomTemplate || [], tokens))`; scope `<anonymous@1>/renderPanel`.
- [L225](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L225) `editors.appendChild(createTemplateEditor('renameTemplate', 'Rename filename template', settings.renameTemplate || detector.defaultRenameTemplate || [], tokens))`; scope `<anonymous@1>/renderPanel`.

## logs

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## Zápisy do globálov, DOM a ostatných vlastností

- [L41](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L41) `panel.id = ACTION_PANEL_ID`.
- [L69](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L69) `button.id = BUTTON_ID`.
- [L71](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L71) `button.textContent = 'MD CFG'`.
- [L83](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L83) `style.id = 'materialDetectorConfigStyles'`.
- [L84](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L84) `style.textContent = ' #${PANEL_ID}{position:fixed;right:124px;top:94px;width:470px;max-width:calc(100vw - 150px);max-height:82vh;overflow:auto;z-index:901;background:#fff;color:#111;border:1px solid #222;border-radius:6px;box-shadow:0 8px 28px rgba(0,0,0,.32);font-family:Arial,sans-serif;font-size:1`.
- [L106](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L106) `panel.id = PANEL_ID`.
- [L152](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L152) `row.className = 'mdcp-block'`.
- [L155](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L155) `row.innerHTML = '<div class="mdcp-row"><select data-block-type><option value="token">token</option><option value="text">text</option></select><select data-block-token></select><input data-block-text type="text" placeholder="vlastny text"><button type="button" data-up>↑</button><button type="button" `.
- [L162](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L162) `opt.textContent = '{${name}}'`.
- [L168](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L168) `token.style.display = type.value === 'token' ? '' : 'none'`.
- [L168](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L168) `text.style.display = type.value === 'text' ? '' : 'none'`.
- [L187](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L187) `wrap.className = 'mdcp-section'`.
- [L189](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L189) `wrap.innerHTML = '<label>${esc(label)}</label><div data-blocks></div><div class="mdcp-row"><button type="button" data-add-token>+ token</button><button type="button" data-add-text>+ text</button><button type="button" data-clear>Vycistit</button></div>'`.
- [L194](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L194) `list.innerHTML = ''`.
- [L219](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L219) `panel.style.top = '${getPanelTop()}px'`.
- [L220](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L220) `panel.innerHTML = '<div class="mdcp-head"><span>MaterialDetector CFG</span><button type="button" data-close>x</button></div><div class="mdcp-body"><label>Detector</label><select data-detector-select>${detectors.map(item => '<option value="${esc(item.id)}" ${item.id === detector.id ? 'selected' : ''}`.
- [L277](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L277) `panel.style.display = 'block'`.
- [L278](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L278) `ensurePanel().style.display = 'none'`.
- [L302](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/control_panel.js#L302) `window.MaterialDetectorControlPanel = { init, open: openPanel, close: closePanel }`.
