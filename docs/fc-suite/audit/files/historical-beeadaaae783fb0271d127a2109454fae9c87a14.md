# labelRegeneratorV2

Zdroj: labelRegeneratorV2.user.js; referencia: beeadaaae783fb0271d127a2109454fae9c87a14.
SHA-256: `14341264d58febc50ab0c7b2741e889682d042bb4095c6be8c13e6f8a11bc081`. Riadkov: 180.

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
    "2.0.6"
  ],
  "description": [
    "Uprava print stitku, overlay zony, konfigurator layoutu a klavesa L pre otvorenie, tlac a zatvorenie stitku."
  ],
  "updateURL": [
    "https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/labelRegeneratorV2.user.js"
  ],
  "downloadURL": [
    "https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/labelRegeneratorV2.user.js"
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

- [L15–179](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L15) `<anonymous@15>()`; scope `root`.
- [L52–52](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L52) `isPrintLabelPage()`; scope `<anonymous@15>`.
- [L53–53](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L53) `ensureRobotoCondensedFont()`; scope `<anonymous@15>`.
- [L54–54](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L54) `deepClone(value)`; scope `<anonymous@15>`.
- [L55–55](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L55) `buildDefaultLayoutConfig()`; scope `<anonymous@15>`.
- [L55–55](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L55) `<anonymous@55>(definition)`; scope `<anonymous@15>/buildDefaultLayoutConfig`.
- [L56–56](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L56) `setStoredPanelOpen(value)`; scope `<anonymous@15>`.
- [L57–57](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L57) `getStoredSelectedBlock()`; scope `<anonymous@15>`.
- [L57–57](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L57) `<anonymous@57>(definition)`; scope `<anonymous@15>/getStoredSelectedBlock`.
- [L58–58](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L58) `setStoredSelectedBlock(value)`; scope `<anonymous@15>`.
- [L58–58](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L58) `<anonymous@58>(definition)`; scope `<anonymous@15>/setStoredSelectedBlock`.
- [L59–59](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L59) `getStoredMode()`; scope `<anonymous@15>`.
- [L60–60](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L60) `setStoredMode(value)`; scope `<anonymous@15>`.
- [L61–61](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L61) `setPanelOpen(value)`; scope `<anonymous@15>`.
- [L63–63](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L63) `loadLayoutConfig()`; scope `<anonymous@15>`.
- [L64–64](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L64) `saveLayoutConfig()`; scope `<anonymous@15>`.
- [L65–65](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L65) `normalizeLayoutConfig(input, defaults)`; scope `<anonymous@15>`.
- [L65–65](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L65) `<anonymous@65>(definition)`; scope `<anonymous@15>/normalizeLayoutConfig`.
- [L66–66](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L66) `normalizeBlockConfig(input, defaults)`; scope `<anonymous@15>`.
- [L66–66](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L66) `<anonymous@66>(key)`; scope `<anonymous@15>/normalizeBlockConfig`.
- [L66–66](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L66) `<anonymous@66>(key)`; scope `<anonymous@15>/normalizeBlockConfig`.
- [L67–67](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L67) `normalizeValue(key, value, fallback, scope)`; scope `<anonymous@15>`.
- [L68–68](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L68) `clamp(value, min, max)`; scope `<anonymous@15>`.
- [L69–69](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L69) `sanitizeBlockConfig(block)`; scope `<anonymous@15>`.
- [L70–70](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L70) `getStoredZoneValue(key)`; scope `<anonymous@15>`.
- [L71–71](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L71) `setStoredZoneValue(key, value)`; scope `<anonymous@15>`.
- [L72–72](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L72) `findZoneDefinition(zoneName)`; scope `<anonymous@15>`.
- [L72–72](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L72) `<anonymous@72>(definition)`; scope `<anonymous@15>/findZoneDefinition`.
- [L73–73](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L73) `resolveZoneValue(definition)`; scope `<anonymous@15>`.
- [L74–74](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L74) `persistZoneValue(definition, value)`; scope `<anonymous@15>`.
- [L74–74](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L74) `<anonymous@74>(alias)`; scope `<anonymous@15>/persistZoneValue`.
- [L76–120](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L76) `injectBaseStyles()`; scope `<anonymous@15>`.
- [L122–122](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L122) `buildZone(definition)`; scope `<anonymous@15>`.
- [L123–123](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L123) `ensureBaseLayer()`; scope `<anonymous@15>`.
- [L123–123](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L123) `<anonymous@123>(node)`; scope `<anonymous@15>/ensureBaseLayer`.
- [L124–124](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L124) `syncBaseScale()`; scope `<anonymous@15>`.
- [L125–125](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L125) `ensureOverlayLayer()`; scope `<anonymous@15>`.
- [L125–125](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L125) `<anonymous@125>(definition)`; scope `<anonymous@15>/ensureOverlayLayer`.
- [L126–126](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L126) `getZoneElements(definition)`; scope `<anonymous@15>`.
- [L127–127](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L127) `applyBlockContainerStyles(definition, elements, config, content)`; scope `<anonymous@15>`.
- [L128–128](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L128) `applyBlockTextStyles(elements, config, content)`; scope `<anonymous@15>`.
- [L129–129](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L129) `fitZoneText(elements, config)`; scope `<anonymous@15>`.
- [L130–130](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L130) `renderOverlayZones()`; scope `<anonymous@15>`.
- [L130–130](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L130) `<anonymous@130>(definition)`; scope `<anonymous@15>/renderOverlayZones`.
- [L132–132](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L132) `applyLabelCanvas()`; scope `<anonymous@15>`.
- [L133–133](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L133) `createInput(field, value, blockKey, scope)`; scope `<anonymous@15>`.
- [L133–133](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L133) `<anonymous@133>(optionValue)`; scope `<anonymous@15>/createInput`.
- [L134–134](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L134) `buildBlockCard(definition)`; scope `<anonymous@15>`.
- [L134–134](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L134) `<anonymous@134>(field)`; scope `<anonymous@15>/buildBlockCard`.
- [L134–134](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L134) `<anonymous@134>(field)`; scope `<anonymous@15>/buildBlockCard`.
- [L135–135](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L135) `buildGlobalCard()`; scope `<anonymous@15>`.
- [L135–135](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L135) `<anonymous@135>(definition)`; scope `<anonymous@15>/buildGlobalCard`.
- [L136–136](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L136) `updateEditorInputValues()`; scope `<anonymous@15>`.
- [L136–136](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L136) `<anonymous@136>(input)`; scope `<anonymous@15>/updateEditorInputValues`.
- [L137–137](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L137) `refreshPanelSelectionState()`; scope `<anonymous@15>`.
- [L137–137](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L137) `<anonymous@137>(definition)`; scope `<anonymous@15>/refreshPanelSelectionState`.
- [L137–137](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L137) `<anonymous@137>(card)`; scope `<anonymous@15>/refreshPanelSelectionState`.
- [L137–137](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L137) `<anonymous@137>(button)`; scope `<anonymous@15>/refreshPanelSelectionState`.
- [L138–138](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L138) `updateModeButtons()`; scope `<anonymous@15>`.
- [L139–139](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L139) `applyPanelOpenState()`; scope `<anonymous@15>`.
- [L140–140](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L140) `updateConfiguratorPosition()`; scope `<anonymous@15>`.
- [L141–141](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L141) `handleConfigInput(event)`; scope `<anonymous@15>`.
- [L141–141](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L141) `<anonymous@141>(item)`; scope `<anonymous@15>/handleConfigInput`.
- [L142–142](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L142) `setSelectedBlock(blockKey)`; scope `<anonymous@15>`.
- [L144–165](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L144) `ensureConfigPanel()`; scope `<anonymous@15>`.
- [L154–154](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L154) `<anonymous@154>(definition)`; scope `<anonymous@15>/ensureConfigPanel`.
- [L156–156](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L156) `<anonymous@156>(mode)`; scope `<anonymous@15>/ensureConfigPanel`.
- [L160–160](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L160) `<anonymous@160>()`; scope `<anonymous@15>/ensureConfigPanel`.
- [L161–161](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L161) `<anonymous@161>()`; scope `<anonymous@15>/ensureConfigPanel`.
- [L162–162](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L162) `<anonymous@162>(event)`; scope `<anonymous@15>/ensureConfigPanel`.
- [L167–167](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L167) `exposeOverlayApi()`; scope `<anonymous@15>`.
- [L167–167](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L167) `window.labelRegeneratorSetZone(zoneName, value)`; scope `<anonymous@15>/exposeOverlayApi`.
- [L167–167](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L167) `window.labelRegeneratorGetConfig()`; scope `<anonymous@15>/exposeOverlayApi`.
- [L167–167](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L167) `window.labelRegeneratorSetBlockConfig(blockKey, patch)`; scope `<anonymous@15>/exposeOverlayApi`.
- [L167–167](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L167) `<anonymous@167>(item)`; scope `<anonymous@15>/exposeOverlayApi/window.labelRegeneratorSetBlockConfig`.
- [L167–167](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L167) `window.labelRegeneratorToggleEditor()`; scope `<anonymous@15>/exposeOverlayApi`.
- [L167–167](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L167) `window.labelRegeneratorSetMode(mode)`; scope `<anonymous@15>/exposeOverlayApi`.
- [L167–167](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L167) `window.labelRegeneratorSelectBlock(blockKey)`; scope `<anonymous@15>/exposeOverlayApi`.
- [L168–168](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L168) `markPrintReady()`; scope `<anonymous@15>`.
- [L168–168](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L168) `finalize()`; scope `<anonymous@15>/markPrintReady`.
- [L168–168](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L168) `<anonymous@168>()`; scope `<anonymous@15>/markPrintReady/finalize`.
- [L168–168](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L168) `<anonymous@168>()`; scope `<anonymous@15>/markPrintReady/finalize/<anonymous@168>`.
- [L168–168](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L168) `<anonymous@168>()`; scope `<anonymous@15>/markPrintReady`.
- [L168–168](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L168) `<anonymous@168>()`; scope `<anonymous@15>/markPrintReady`.
- [L169–169](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L169) `getVpNumber()`; scope `<anonymous@15>`.
- [L170–170](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L170) `syncLabelValuesFromDetailPage()`; scope `<anonymous@15>`.
- [L171–171](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L171) `triggerPrintWhenReady(printWindow)`; scope `<anonymous@15>`.
- [L171–171](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L171) `<anonymous@171>()`; scope `<anonymous@15>/triggerPrintWhenReady`.
- [L171–171](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L171) `<anonymous@171>()`; scope `<anonymous@15>/triggerPrintWhenReady/<anonymous@171>`.
- [L172–172](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L172) `pressLAction()`; scope `<anonymous@15>`.
- [L172–172](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L172) `<anonymous@172>()`; scope `<anonymous@15>/pressLAction`.
- [L173–173](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L173) `initializeWindowValues()`; scope `<anonymous@15>`.
- [L173–173](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L173) `<anonymous@173>(definition)`; scope `<anonymous@15>/initializeWindowValues`.
- [L173–173](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L173) `<anonymous@173>(alias)`; scope `<anonymous@15>/initializeWindowValues/<anonymous@173>`.
- [L174–174](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L174) `initializePrintPage()`; scope `<anonymous@15>`.
- [L175–175](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L175) `bindBlockSelection()`; scope `<anonymous@15>`.
- [L175–175](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L175) `<anonymous@175>(definition)`; scope `<anonymous@15>/bindBlockSelection`.
- [L175–175](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L175) `handler(event)`; scope `<anonymous@15>/bindBlockSelection/<anonymous@175>`.
- [L175–175](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L175) `<anonymous@175>(event)`; scope `<anonymous@15>/bindBlockSelection/<anonymous@175>`.
- [L175–175](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L175) `<anonymous@175>(event)`; scope `<anonymous@15>/bindBlockSelection`.
- [L176–176](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L176) `bindEvents()`; scope `<anonymous@15>`.
- [L176–176](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L176) `<anonymous@176>()`; scope `<anonymous@15>/bindEvents`.
- [L176–176](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L176) `<anonymous@176>(event)`; scope `<anonymous@15>/bindEvents`.
- [L176–176](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L176) `<anonymous@176>()`; scope `<anonymous@15>/bindEvents`.
- [L176–176](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L176) `<anonymous@176>(definition)`; scope `<anonymous@15>/bindEvents/<anonymous@176>`.
- [L176–176](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L176) `<anonymous@176>(alias)`; scope `<anonymous@15>/bindEvents/<anonymous@176>/<anonymous@176>`.

## Premenné a pôvodné inicializátory

Dlhé inicializátory sú tu skrátené na 300 znakov; úplné znenie je v inventory.json a v zdroji.

- [L20](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L20) `const LABEL_WIDTH_MM = 62`; scope `<anonymous@15>`.
- [L21](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L21) `const LABEL_HEIGHT_MM = 45`; scope `<anonymous@15>`.
- [L22](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L22) `const SOURCE_LABEL_WIDTH_MM = 86`; scope `<anonymous@15>`.
- [L23](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L23) `const SOURCE_LABEL_HEIGHT_MM = 50`; scope `<anonymous@15>`.
- [L24](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L24) `const CONFIG_STORAGE_KEY = 'labelRegeneratorLayoutConfigV201'`; scope `<anonymous@15>`.
- [L25](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L25) `const PANEL_OPEN_STORAGE_KEY = 'labelRegeneratorPanelOpen'`; scope `<anonymous@15>`.
- [L26](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L26) `const MODE_STORAGE_KEY = 'labelRegeneratorMode'`; scope `<anonymous@15>`.
- [L27](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L27) `const SELECTED_BLOCK_STORAGE_KEY = 'labelRegeneratorSelectedBlock'`; scope `<anonymous@15>`.
- [L28](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L28) `const EDIT_ZOOM = 1.45`; scope `<anonymous@15>`.
- [L30](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L30) `const ZONE_DEFINITIONS = [ { key: 'TM_testoLeft', aliases: ['testoleft'], id: 'lr-zone-testoleft', slug: 'testo-left', title: 'TM_testoLeft', defaults: { container: { x: 1, y: 35.4, width: 41, height: 5.6, zIndex: 20, visible: true, paddingLeft: 1.2, paddingRight: 1.2, paddingTop: 0.3, paddingBottom`; scope `<anonymous@15>`.
- [L37](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L37) `const FIELD_GROUPS = { container: [ { key: 'x', label: 'X', type: 'number', min: 0, max: LABEL_WIDTH_MM, step: 0.1, unit: 'mm' }, { key: 'y', label: 'Y', type: 'number', min: 0, max: LABEL_HEIGHT_MM, step: 0.1, unit: 'mm' }, { key: 'width', label: 'Width', type: 'number', min: 0.5, max: LABEL_WIDTH_`; scope `<anonymous@15>`.
- [L46](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L46) `let layoutConfig = loadLayoutConfig()`; scope `<anonymous@15>`.
- [L47](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L47) `let currentMode = getStoredMode()`; scope `<anonymous@15>`.
- [L48](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L48) `let panelOpen = true`; scope `<anonymous@15>`.
- [L49](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L49) `let panelElements = null`; scope `<anonymous@15>`.
- [L50](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L50) `let selectedBlockKey = getStoredSelectedBlock()`; scope `<anonymous@15>`.
- [L53](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L53) `const link = document.createElement('link')`; scope `<anonymous@15>/ensureRobotoCondensedFont`.
- [L55](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L55) `const config = { blocks: {} }`; scope `<anonymous@15>/buildDefaultLayoutConfig`.
- [L57](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L57) `const value = localStorage.getItem(SELECTED_BLOCK_STORAGE_KEY) || ''`; scope `<anonymous@15>/getStoredSelectedBlock`.
- [L58](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L58) `const normalized = ZONE_DEFINITIONS.some((definition) => definition.key === value) ? value : ''`; scope `<anonymous@15>/setStoredSelectedBlock`.
- [L63](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L63) `const defaults = buildDefaultLayoutConfig()`; scope `<anonymous@15>/loadLayoutConfig`.
- [L63](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L63) `const raw = localStorage.getItem(CONFIG_STORAGE_KEY)`; scope `<anonymous@15>/loadLayoutConfig`.
- [L65](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L65) `const normalized = deepClone(defaults)`; scope `<anonymous@15>/normalizeLayoutConfig`.
- [L65](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L65) `const sourceBlocks = input && input.blocks ? input.blocks : {}`; scope `<anonymous@15>/normalizeLayoutConfig`.
- [L65](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L65) `const incoming = sourceBlocks[definition.key] || {}`; scope `<anonymous@15>/normalizeLayoutConfig/<anonymous@65>`.
- [L66](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L66) `const block = deepClone(defaults)`; scope `<anonymous@15>/normalizeBlockConfig`.
- [L66](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L66) `const incomingContainer = input && input.container ? input.container : {}`; scope `<anonymous@15>/normalizeBlockConfig`.
- [L66](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L66) `const incomingText = input && input.text ? input.text : {}`; scope `<anonymous@15>/normalizeBlockConfig`.
- [L67](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L67) `const numeric = Number(value)`; scope `<anonymous@15>/normalizeValue`.
- [L69](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L69) `const container = block.container`; scope `<anonymous@15>/sanitizeBlockConfig`.
- [L69](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L69) `const text = block.text`; scope `<anonymous@15>/sanitizeBlockConfig`.
- [L71](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L71) `const normalized = value == null ? '' : String(value)`; scope `<anonymous@15>/setStoredZoneValue`.
- [L72](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L72) `const normalized = String(zoneName || '').trim()`; scope `<anonymous@15>/findZoneDefinition`.
- [L73](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L73) `const candidates = [definition.key, ...definition.aliases]`; scope `<anonymous@15>/resolveZoneValue`.
- [L73](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L73) `const key = <bez inicializátora>`; scope `<anonymous@15>/resolveZoneValue`.
- [L73](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L73) `const runtimeValue = window[key]`; scope `<anonymous@15>/resolveZoneValue`.
- [L73](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L73) `const key = <bez inicializátora>`; scope `<anonymous@15>/resolveZoneValue`.
- [L73](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L73) `const stored = getStoredZoneValue(key)`; scope `<anonymous@15>/resolveZoneValue`.
- [L74](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L74) `const normalized = value == null ? '' : String(value)`; scope `<anonymous@15>/persistZoneValue`.
- [L78](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L78) `const style = document.createElement('style')`; scope `<anonymous@15>/injectBaseStyles`.
- [L122](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L122) `const zone = document.createElement('div')`; scope `<anonymous@15>/buildZone`.
- [L122](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L122) `const guide = document.createElement('div')`; scope `<anonymous@15>/buildZone`.
- [L122](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L122) `const anchor = document.createElement('div')`; scope `<anonymous@15>/buildZone`.
- [L122](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L122) `const text = document.createElement('span')`; scope `<anonymous@15>/buildZone`.
- [L123](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L123) `const label = document.querySelector('#label')`; scope `<anonymous@15>/ensureBaseLayer`.
- [L123](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L123) `let base = document.getElementById('label-regenerator-base')`; scope `<anonymous@15>/ensureBaseLayer`.
- [L124](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L124) `const base = document.getElementById('label-regenerator-base')`; scope `<anonymous@15>/syncBaseScale`.
- [L124](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L124) `const scale = Math.min(LABEL_WIDTH_MM / SOURCE_LABEL_WIDTH_MM, LABEL_HEIGHT_MM / SOURCE_LABEL_HEIGHT_MM)`; scope `<anonymous@15>/syncBaseScale`.
- [L125](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L125) `const label = document.querySelector('#label')`; scope `<anonymous@15>/ensureOverlayLayer`.
- [L125](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L125) `let overlay = document.getElementById('label-regenerator-overlay')`; scope `<anonymous@15>/ensureOverlayLayer`.
- [L126](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L126) `const zone = document.getElementById(definition.id)`; scope `<anonymous@15>/getZoneElements`.
- [L127](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L127) `const zone = elements.zone`; scope `<anonymous@15>/applyBlockContainerStyles`.
- [L127](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L127) `const anchor = elements.anchor`; scope `<anonymous@15>/applyBlockContainerStyles`.
- [L127](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L127) `const container = config.container`; scope `<anonymous@15>/applyBlockContainerStyles`.
- [L127](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L127) `const text = config.text`; scope `<anonymous@15>/applyBlockContainerStyles`.
- [L127](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L127) `const hasContent = String(content || '').trim().length > 0`; scope `<anonymous@15>/applyBlockContainerStyles`.
- [L127](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L127) `const visibleForEditing = currentMode === 'edit'`; scope `<anonymous@15>/applyBlockContainerStyles`.
- [L128](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L128) `const text = elements.text`; scope `<anonymous@15>/applyBlockTextStyles`.
- [L128](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L128) `const textConfig = config.text`; scope `<anonymous@15>/applyBlockTextStyles`.
- [L129](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L129) `const anchor = elements.anchor`; scope `<anonymous@15>/fitZoneText`.
- [L129](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L129) `const text = elements.text`; scope `<anonymous@15>/fitZoneText`.
- [L129](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L129) `const textConfig = config.text`; scope `<anonymous@15>/fitZoneText`.
- [L129](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L129) `const scaleX = textConfig.scaleX / 100`; scope `<anonymous@15>/fitZoneText`.
- [L129](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L129) `const naturalWidth = text.scrollWidth * scaleX`; scope `<anonymous@15>/fitZoneText`.
- [L129](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L129) `const naturalHeight = text.scrollHeight`; scope `<anonymous@15>/fitZoneText`.
- [L129](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L129) `const availableWidth = anchor.clientWidth`; scope `<anonymous@15>/fitZoneText`.
- [L129](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L129) `const availableHeight = anchor.clientHeight`; scope `<anonymous@15>/fitZoneText`.
- [L129](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L129) `const fitWidth = availableWidth / naturalWidth`; scope `<anonymous@15>/fitZoneText`.
- [L129](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L129) `const fitHeight = availableHeight / naturalHeight`; scope `<anonymous@15>/fitZoneText`.
- [L129](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L129) `const fitScale = Math.min(1, fitWidth, fitHeight)`; scope `<anonymous@15>/fitZoneText`.
- [L130](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L130) `const elements = getZoneElements(definition)`; scope `<anonymous@15>/renderOverlayZones/<anonymous@130>`.
- [L130](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L130) `const blockConfig = layoutConfig.blocks[definition.key]`; scope `<anonymous@15>/renderOverlayZones/<anonymous@130>`.
- [L130](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L130) `const content = resolveZoneValue(definition)`; scope `<anonymous@15>/renderOverlayZones/<anonymous@130>`.
- [L132](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L132) `const predajnaText = document.querySelector('#predajna .rotate')`; scope `<anonymous@15>/applyLabelCanvas`.
- [L132](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L132) `const label = document.querySelector('#label')`; scope `<anonymous@15>/applyLabelCanvas`.
- [L132](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L132) `const obj = document.querySelector('.obj')`; scope `<anonymous@15>/applyLabelCanvas`.
- [L132](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L132) `const block = document.querySelector('#data > div')`; scope `<anonymous@15>/applyLabelCanvas`.
- [L132](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L132) `const wrapper = document.querySelector('#data > div')`; scope `<anonymous@15>/applyLabelCanvas`.
- [L132](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L132) `const vpText = wrapper.querySelector('span')`; scope `<anonymous@15>/applyLabelCanvas`.
- [L132](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L132) `const newSpan = document.createElement('span')`; scope `<anonymous@15>/applyLabelCanvas`.
- [L133](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L133) `const wrap = document.createElement('div')`; scope `<anonymous@15>/createInput`.
- [L133](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L133) `const label = document.createElement('label')`; scope `<anonymous@15>/createInput`.
- [L133](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L133) `let input = <bez inicializátora>`; scope `<anonymous@15>/createInput`.
- [L133](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L133) `const option = document.createElement('option')`; scope `<anonymous@15>/createInput/<anonymous@133>`.
- [L133](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L133) `const unit = document.createElement('span')`; scope `<anonymous@15>/createInput`.
- [L134](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L134) `const card = document.createElement('section')`; scope `<anonymous@15>/buildBlockCard`.
- [L134](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L134) `const title = document.createElement('h3')`; scope `<anonymous@15>/buildBlockCard`.
- [L134](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L134) `const note = document.createElement('p')`; scope `<anonymous@15>/buildBlockCard`.
- [L134](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L134) `const blockForm = document.createElement('div')`; scope `<anonymous@15>/buildBlockCard`.
- [L134](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L134) `const containerTitle = document.createElement('div')`; scope `<anonymous@15>/buildBlockCard`.
- [L134](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L134) `const containerGrid = document.createElement('div')`; scope `<anonymous@15>/buildBlockCard`.
- [L134](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L134) `const configValue = layoutConfig.blocks[definition.key].container[field.key]`; scope `<anonymous@15>/buildBlockCard/<anonymous@134>`.
- [L134](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L134) `const textTitle = document.createElement('div')`; scope `<anonymous@15>/buildBlockCard`.
- [L134](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L134) `const textGrid = document.createElement('div')`; scope `<anonymous@15>/buildBlockCard`.
- [L134](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L134) `const configValue = layoutConfig.blocks[definition.key].text[field.key]`; scope `<anonymous@15>/buildBlockCard/<anonymous@134>`.
- [L135](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L135) `const card = document.createElement('section')`; scope `<anonymous@15>/buildGlobalCard`.
- [L135](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L135) `const paragraph = document.createElement('p')`; scope `<anonymous@15>/buildGlobalCard`.
- [L135](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L135) `const list = document.createElement('div')`; scope `<anonymous@15>/buildGlobalCard`.
- [L135](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L135) `const button = document.createElement('button')`; scope `<anonymous@15>/buildGlobalCard/<anonymous@135>`.
- [L136](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L136) `const blockKey = input.dataset.block`; scope `<anonymous@15>/updateEditorInputValues/<anonymous@136>`.
- [L136](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L136) `const scope = input.dataset.scope`; scope `<anonymous@15>/updateEditorInputValues/<anonymous@136>`.
- [L136](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L136) `const field = input.dataset.field`; scope `<anonymous@15>/updateEditorInputValues/<anonymous@136>`.
- [L136](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L136) `const value = layoutConfig.blocks[blockKey][scope][field]`; scope `<anonymous@15>/updateEditorInputValues/<anonymous@136>`.
- [L137](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L137) `const selectedDefinition = ZONE_DEFINITIONS.find((definition) => definition.key === selectedBlockKey) || null`; scope `<anonymous@15>/refreshPanelSelectionState`.
- [L137](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L137) `const selectedLabel = selectedDefinition ? selectedDefinition.title : 'No block selected'`; scope `<anonymous@15>/refreshPanelSelectionState`.
- [L141](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L141) `const target = event.target`; scope `<anonymous@15>/handleConfigInput`.
- [L141](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L141) `const blockKey = target.dataset.block`; scope `<anonymous@15>/handleConfigInput`.
- [L141](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L141) `const scope = target.dataset.scope`; scope `<anonymous@15>/handleConfigInput`.
- [L141](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L141) `const field = target.dataset.field`; scope `<anonymous@15>/handleConfigInput`.
- [L141](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L141) `const fieldDefinition = FIELD_GROUPS[scope].find((item) => item.key === field)`; scope `<anonymous@15>/handleConfigInput`.
- [L141](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L141) `let value = <bez inicializátora>`; scope `<anonymous@15>/handleConfigInput`.
- [L146](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L146) `const toggle = document.createElement('button')`; scope `<anonymous@15>/ensureConfigPanel`.
- [L147](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L147) `const panel = document.createElement('aside')`; scope `<anonymous@15>/ensureConfigPanel`.
- [L148](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L148) `const topbar = document.createElement('div')`; scope `<anonymous@15>/ensureConfigPanel`.
- [L149](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L149) `const viewButton = document.createElement('button')`; scope `<anonymous@15>/ensureConfigPanel`.
- [L150](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L150) `const editButton = document.createElement('button')`; scope `<anonymous@15>/ensureConfigPanel`.
- [L152](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L152) `const selectedChip = document.createElement('div')`; scope `<anonymous@15>/ensureConfigPanel`.
- [L153](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L153) `const globalCard = buildGlobalCard()`; scope `<anonymous@15>/ensureConfigPanel`.
- [L155](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L155) `const footer = document.createElement('div')`; scope `<anonymous@15>/ensureConfigPanel`.
- [L156](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L156) `const modeSelect = document.createElement('select')`; scope `<anonymous@15>/ensureConfigPanel`.
- [L156](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L156) `const option = document.createElement('option')`; scope `<anonymous@15>/ensureConfigPanel/<anonymous@156>`.
- [L162](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L162) `const button = event.target.closest('[data-select-block]')`; scope `<anonymous@15>/ensureConfigPanel/<anonymous@162>`.
- [L167](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L167) `const definition = findZoneDefinition(zoneName)`; scope `<anonymous@15>/exposeOverlayApi/window.labelRegeneratorSetZone`.
- [L167](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L167) `const definition = findZoneDefinition(blockKey)`; scope `<anonymous@15>/exposeOverlayApi/window.labelRegeneratorSetBlockConfig`.
- [L167](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L167) `const current = layoutConfig.blocks[definition.key]`; scope `<anonymous@15>/exposeOverlayApi/window.labelRegeneratorSetBlockConfig`.
- [L167](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L167) `const next = normalizeBlockConfig({ container: Object.assign({}, current.container, patch.container || {}), text: Object.assign({}, current.text, patch.text || {}) }, ZONE_DEFINITIONS.find((item) => item.key === definition.key).defaults)`; scope `<anonymous@15>/exposeOverlayApi/window.labelRegeneratorSetBlockConfig`.
- [L168](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L168) `const finalize = () => { requestAnimationFrame(() => { requestAnimationFrame(() => { renderOverlayZones(); window.__labelRegeneratorReady = true; window.dispatchEvent(new Event('labelRegeneratorReady')); }); }); }`; scope `<anonymous@15>/markPrintReady`.
- [L169](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L169) `const strong = document.querySelector('strong.red')`; scope `<anonymous@15>/getVpNumber`.
- [L170](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L170) `const leftBadge = document.querySelector('#shortcut-info-label')`; scope `<anonymous@15>/syncLabelValuesFromDetailPage`.
- [L170](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L170) `const rightBadge = document.querySelector('#shortcut-info-date')`; scope `<anonymous@15>/syncLabelValuesFromDetailPage`.
- [L170](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L170) `const leftValue = leftBadge ? (leftBadge.textContent || '').trim() : getStoredZoneValue('TM_testoLeft')`; scope `<anonymous@15>/syncLabelValuesFromDetailPage`.
- [L170](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L170) `const rightValue = rightBadge ? (rightBadge.textContent || '').trim() : getStoredZoneValue('TM_testoRight')`; scope `<anonymous@15>/syncLabelValuesFromDetailPage`.
- [L171](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L171) `const deadlineMs = 15000`; scope `<anonymous@15>/triggerPrintWhenReady`.
- [L171](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L171) `const startedAt = Date.now()`; scope `<anonymous@15>/triggerPrintWhenReady`.
- [L171](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L171) `const timer = setInterval(() => { const timedOut = Date.now() - startedAt > deadlineMs; const ready = !!printWindow.__labelRegeneratorReady; const closed = printWindow.closed; if (closed) { clearInterval(timer); return; } if (ready || timedOut) { clearInterval(timer); printWindow.print(); setTimeout`; scope `<anonymous@15>/triggerPrintWhenReady`.
- [L171](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L171) `const timedOut = Date.now() - startedAt > deadlineMs`; scope `<anonymous@15>/triggerPrintWhenReady/<anonymous@171>`.
- [L171](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L171) `const ready = !!printWindow.__labelRegeneratorReady`; scope `<anonymous@15>/triggerPrintWhenReady/<anonymous@171>`.
- [L171](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L171) `const closed = printWindow.closed`; scope `<anonymous@15>/triggerPrintWhenReady/<anonymous@171>`.
- [L172](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L172) `const vpNumber = getVpNumber()`; scope `<anonymous@15>/pressLAction`.
- [L172](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L172) `const url = 'https://moduly.faxcopy.sk/vyrobne_prikazy/detail/printLabel/${vpNumber}'`; scope `<anonymous@15>/pressLAction`.
- [L172](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L172) `const popup = window.open(url, '_blank')`; scope `<anonymous@15>/pressLAction`.
- [L173](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L173) `const value = resolveZoneValue(definition)`; scope `<anonymous@15>/initializeWindowValues/<anonymous@173>`.
- [L175](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L175) `const elements = getZoneElements(definition)`; scope `<anonymous@15>/bindBlockSelection/<anonymous@175>`.
- [L175](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L175) `const handler = (event) => { if (currentMode !== 'edit') return; event.preventDefault(); event.stopPropagation(); setSelectedBlock(definition.key); setPanelOpen(true); }`; scope `<anonymous@15>/bindBlockSelection/<anonymous@175>`.
- [L176](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L176) `const leftDefinition = findZoneDefinition('TM_testoLeft')`; scope `<anonymous@15>/bindEvents/<anonymous@176>`.
- [L176](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L176) `const rightDefinition = findZoneDefinition('TM_testoRight')`; scope `<anonymous@15>/bindEvents/<anonymous@176>`.

## storage

- [L15](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L15) `function () { 'use strict'; window.labelRegeneratorV2Version = '2.0.6'; const LABEL_WIDTH_MM = 62; const LABEL_HEIGHT_MM = 45; const SOURCE_LABEL_WIDTH_MM = 86; const SOURCE_LABEL_HEIGHT_MM = 50; const CONFIG_STORAGE_KEY = 'labelRegeneratorLayoutConfigV201'; const PANEL_OPEN_STORAGE_KEY = 'labelRege`; scope `root`.
- [L56](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L56) `localStorage.setItem(PANEL_OPEN_STORAGE_KEY, value ? '1' : '0')`; scope `<anonymous@15>/setStoredPanelOpen`.
- [L57](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L57) `localStorage.getItem(SELECTED_BLOCK_STORAGE_KEY)`; scope `<anonymous@15>/getStoredSelectedBlock`.
- [L58](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L58) `localStorage.setItem(SELECTED_BLOCK_STORAGE_KEY, normalized)`; scope `<anonymous@15>/setStoredSelectedBlock`.
- [L58](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L58) `localStorage.removeItem(SELECTED_BLOCK_STORAGE_KEY)`; scope `<anonymous@15>/setStoredSelectedBlock`.
- [L59](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L59) `localStorage.getItem(MODE_STORAGE_KEY)`; scope `<anonymous@15>/getStoredMode`.
- [L60](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L60) `localStorage.setItem(MODE_STORAGE_KEY, currentMode)`; scope `<anonymous@15>/setStoredMode`.
- [L63](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L63) `localStorage.getItem(CONFIG_STORAGE_KEY)`; scope `<anonymous@15>/loadLayoutConfig`.
- [L64](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L64) `localStorage.setItem(CONFIG_STORAGE_KEY, JSON.stringify(layoutConfig))`; scope `<anonymous@15>/saveLayoutConfig`.
- [L70](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L70) `localStorage.getItem(key)`; scope `<anonymous@15>/getStoredZoneValue`.
- [L71](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L71) `localStorage.setItem(key, normalized)`; scope `<anonymous@15>/setStoredZoneValue`.
- [L71](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L71) `localStorage.removeItem(key)`; scope `<anonymous@15>/setStoredZoneValue`.
- [L176](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L176) `localStorage.removeItem(definition.key)`; scope `<anonymous@15>/bindEvents/<anonymous@176>/<anonymous@176>`.
- [L176](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L176) `localStorage.removeItem(alias)`; scope `<anonymous@15>/bindEvents/<anonymous@176>/<anonymous@176>/<anonymous@176>`.

## events

- [L15](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L15) `function () { 'use strict'; window.labelRegeneratorV2Version = '2.0.6'; const LABEL_WIDTH_MM = 62; const LABEL_HEIGHT_MM = 45; const SOURCE_LABEL_WIDTH_MM = 86; const SOURCE_LABEL_HEIGHT_MM = 50; const CONFIG_STORAGE_KEY = 'labelRegeneratorLayoutConfigV201'; const PANEL_OPEN_STORAGE_KEY = 'labelRege`; scope `root`.
- [L160](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L160) `viewButton.addEventListener('click', () => setPanelOpen(false))`; scope `<anonymous@15>/ensureConfigPanel`.
- [L161](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L161) `editButton.addEventListener('click', () => setPanelOpen(true))`; scope `<anonymous@15>/ensureConfigPanel`.
- [L162](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L162) `panel.addEventListener('click', (event) => { const button = event.target.closest('[data-select-block]'); if (!button) return; setSelectedBlock(button.dataset.selectBlock); setPanelOpen(true); })`; scope `<anonymous@15>/ensureConfigPanel`.
- [L163](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L163) `panel.addEventListener('input', handleConfigInput)`; scope `<anonymous@15>/ensureConfigPanel`.
- [L163](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L163) `panel.addEventListener('change', handleConfigInput)`; scope `<anonymous@15>/ensureConfigPanel`.
- [L168](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L168) `window.dispatchEvent(new Event('labelRegeneratorReady'))`; scope `<anonymous@15>/markPrintReady/finalize/<anonymous@168>/<anonymous@168>`.
- [L172](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L172) `popup.addEventListener('load', () => { triggerPrintWhenReady(popup); }, { once: true })`; scope `<anonymous@15>/pressLAction`.
- [L175](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L175) `elements.zone.addEventListener('click', handler)`; scope `<anonymous@15>/bindBlockSelection/<anonymous@175>`.
- [L175](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L175) `elements.zone.addEventListener('keydown', (event) => { if (event.key === 'Enter' || event.key === ' ') handler(event); })`; scope `<anonymous@15>/bindBlockSelection/<anonymous@175>`.
- [L175](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L175) `document.addEventListener('click', (event) => { if (currentMode !== 'edit') return; if (event.target.closest('#lr-config-panel')) return; if (event.target.closest('.lr-block')) return; setSelectedBlock(''); })`; scope `<anonymous@15>/bindBlockSelection`.
- [L176](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L176) `window.addEventListener('resize', () => { renderOverlayZones(); updateConfiguratorPosition(); })`; scope `<anonymous@15>/bindEvents`.
- [L176](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L176) `window.addEventListener('keydown', (event) => { if (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === 'e') { event.preventDefault(); setPanelOpen(currentMode !== 'edit'); return; } if (event.key.toLowerCase() === 'l' && !event.repeat) pressLAction(); })`; scope `<anonymous@15>/bindEvents`.
- [L176](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L176) `window.addEventListener('unload', () => { if (!isPrintLabelPage()) return; const leftDefinition = findZoneDefinition('TM_testoLeft'); const rightDefinition = findZoneDefinition('TM_testoRight'); [leftDefinition, rightDefinition].forEach((definition) => { if (!definition) return; localStorage.removeI`; scope `<anonymous@15>/bindEvents`.

## lifecycle

- [L15](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L15) `function () { 'use strict'; window.labelRegeneratorV2Version = '2.0.6'; const LABEL_WIDTH_MM = 62; const LABEL_HEIGHT_MM = 45; const SOURCE_LABEL_WIDTH_MM = 86; const SOURCE_LABEL_HEIGHT_MM = 50; const CONFIG_STORAGE_KEY = 'labelRegeneratorLayoutConfigV201'; const PANEL_OPEN_STORAGE_KEY = 'labelRege`; scope `root`.
- [L164](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L164) `requestAnimationFrame(updateConfiguratorPosition)`; scope `<anonymous@15>/ensureConfigPanel`.
- [L168](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L168) `requestAnimationFrame(() => { requestAnimationFrame(() => { renderOverlayZones(); window.__labelRegeneratorReady = true; window.dispatchEvent(new Event('labelRegeneratorReady')); }); })`; scope `<anonymous@15>/markPrintReady/finalize`.
- [L168](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L168) `requestAnimationFrame(() => { renderOverlayZones(); window.__labelRegeneratorReady = true; window.dispatchEvent(new Event('labelRegeneratorReady')); })`; scope `<anonymous@15>/markPrintReady/finalize/<anonymous@168>`.
- [L168](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L168) `document.fonts.ready.then(() => setTimeout(finalize, 50)).catch(() => setTimeout(finalize, 120))`; scope `<anonymous@15>/markPrintReady`.
- [L168](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L168) `setTimeout(finalize, 50)`; scope `<anonymous@15>/markPrintReady/<anonymous@168>`.
- [L168](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L168) `setTimeout(finalize, 120)`; scope `<anonymous@15>/markPrintReady/<anonymous@168>`.
- [L168](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L168) `setTimeout(finalize, 120)`; scope `<anonymous@15>/markPrintReady`.
- [L171](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L171) `setInterval(() => { const timedOut = Date.now() - startedAt > deadlineMs; const ready = !!printWindow.__labelRegeneratorReady; const closed = printWindow.closed; if (closed) { clearInterval(timer); return; } if (ready || timedOut) { clearInterval(timer); printWindow.print(); setTimeout(() => { if (!`; scope `<anonymous@15>/triggerPrintWhenReady`.
- [L171](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L171) `clearInterval(timer)`; scope `<anonymous@15>/triggerPrintWhenReady/<anonymous@171>`.
- [L171](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L171) `clearInterval(timer)`; scope `<anonymous@15>/triggerPrintWhenReady/<anonymous@171>`.
- [L171](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L171) `setTimeout(() => { if (!printWindow.closed) printWindow.close(); }, 1200)`; scope `<anonymous@15>/triggerPrintWhenReady/<anonymous@171>`.

## io

- [L171](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L171) `printWindow.print()`; scope `<anonymous@15>/triggerPrintWhenReady/<anonymous@171>`.
- [L172](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L172) `window.open(url, '_blank')`; scope `<anonymous@15>/pressLAction`.

## dom-read

- [L15](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L15) `function () { 'use strict'; window.labelRegeneratorV2Version = '2.0.6'; const LABEL_WIDTH_MM = 62; const LABEL_HEIGHT_MM = 45; const SOURCE_LABEL_WIDTH_MM = 86; const SOURCE_LABEL_HEIGHT_MM = 50; const CONFIG_STORAGE_KEY = 'labelRegeneratorLayoutConfigV201'; const PANEL_OPEN_STORAGE_KEY = 'labelRege`; scope `root`.
- [L53](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L53) `document.querySelector('link[data-label-regenerator-font="roboto-condensed"]')`; scope `<anonymous@15>/ensureRobotoCondensedFont`.
- [L77](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L77) `document.getElementById('label-regenerator-styles')`; scope `<anonymous@15>/injectBaseStyles`.
- [L123](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L123) `document.querySelector('#label')`; scope `<anonymous@15>/ensureBaseLayer`.
- [L123](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L123) `document.getElementById('label-regenerator-base')`; scope `<anonymous@15>/ensureBaseLayer`.
- [L124](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L124) `document.getElementById('label-regenerator-base')`; scope `<anonymous@15>/syncBaseScale`.
- [L125](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L125) `document.querySelector('#label')`; scope `<anonymous@15>/ensureOverlayLayer`.
- [L125](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L125) `document.getElementById('label-regenerator-overlay')`; scope `<anonymous@15>/ensureOverlayLayer`.
- [L126](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L126) `document.getElementById(definition.id)`; scope `<anonymous@15>/getZoneElements`.
- [L126](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L126) `zone.querySelector('.lr-text-anchor')`; scope `<anonymous@15>/getZoneElements`.
- [L126](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L126) `zone.querySelector('.lr-text')`; scope `<anonymous@15>/getZoneElements`.
- [L132](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L132) `document.querySelector('#predajna .rotate')`; scope `<anonymous@15>/applyLabelCanvas`.
- [L132](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L132) `document.querySelector('#label')`; scope `<anonymous@15>/applyLabelCanvas`.
- [L132](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L132) `document.querySelector('.obj')`; scope `<anonymous@15>/applyLabelCanvas`.
- [L132](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L132) `document.querySelector('#data > div')`; scope `<anonymous@15>/applyLabelCanvas`.
- [L132](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L132) `document.querySelector('#data > div')`; scope `<anonymous@15>/applyLabelCanvas`.
- [L132](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L132) `wrapper.querySelector('span')`; scope `<anonymous@15>/applyLabelCanvas`.
- [L136](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L136) `panelElements.panel.querySelectorAll('input, select').forEach((input) => { const blockKey = input.dataset.block; const scope = input.dataset.scope; const field = input.dataset.field; if (!blockKey || !scope || !field) return; const value = layoutConfig.blocks[blockKey][scope][field]; if (input.type `; scope `<anonymous@15>/updateEditorInputValues`.
- [L136](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L136) `panelElements.panel.querySelectorAll('input, select')`; scope `<anonymous@15>/updateEditorInputValues`.
- [L137](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L137) `panelElements.panel.querySelectorAll('[data-block-card]').forEach((card) => { card.hidden = card.dataset.blockCard !== selectedBlockKey; })`; scope `<anonymous@15>/refreshPanelSelectionState`.
- [L137](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L137) `panelElements.panel.querySelectorAll('[data-block-card]')`; scope `<anonymous@15>/refreshPanelSelectionState`.
- [L137](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L137) `panelElements.panel.querySelectorAll('[data-select-block]').forEach((button) => { button.classList.toggle('is-active', button.dataset.selectBlock === selectedBlockKey); })`; scope `<anonymous@15>/refreshPanelSelectionState`.
- [L137](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L137) `panelElements.panel.querySelectorAll('[data-select-block]')`; scope `<anonymous@15>/refreshPanelSelectionState`.
- [L162](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L162) `event.target.closest('[data-select-block]')`; scope `<anonymous@15>/ensureConfigPanel/<anonymous@162>`.
- [L169](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L169) `document.querySelector('strong.red')`; scope `<anonymous@15>/getVpNumber`.
- [L170](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L170) `document.querySelector('#shortcut-info-label')`; scope `<anonymous@15>/syncLabelValuesFromDetailPage`.
- [L170](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L170) `document.querySelector('#shortcut-info-date')`; scope `<anonymous@15>/syncLabelValuesFromDetailPage`.
- [L175](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L175) `event.target.closest('#lr-config-panel')`; scope `<anonymous@15>/bindBlockSelection/<anonymous@175>`.
- [L175](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L175) `event.target.closest('.lr-block')`; scope `<anonymous@15>/bindBlockSelection/<anonymous@175>`.

## dom-write

- [L15](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L15) `function () { 'use strict'; window.labelRegeneratorV2Version = '2.0.6'; const LABEL_WIDTH_MM = 62; const LABEL_HEIGHT_MM = 45; const SOURCE_LABEL_WIDTH_MM = 86; const SOURCE_LABEL_HEIGHT_MM = 50; const CONFIG_STORAGE_KEY = 'labelRegeneratorLayoutConfigV201'; const PANEL_OPEN_STORAGE_KEY = 'labelRege`; scope `root`.
- [L53](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L53) `link.setAttribute('data-label-regenerator-font', 'roboto-condensed')`; scope `<anonymous@15>/ensureRobotoCondensedFont`.
- [L53](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L53) `document.head.appendChild(link)`; scope `<anonymous@15>/ensureRobotoCondensedFont`.
- [L119](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L119) `document.head.appendChild(style)`; scope `<anonymous@15>/injectBaseStyles`.
- [L122](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L122) `zone.appendChild(guide)`; scope `<anonymous@15>/buildZone`.
- [L122](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L122) `anchor.appendChild(text)`; scope `<anonymous@15>/buildZone`.
- [L122](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L122) `zone.appendChild(anchor)`; scope `<anonymous@15>/buildZone`.
- [L123](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L123) `base.appendChild(node)`; scope `<anonymous@15>/ensureBaseLayer/<anonymous@123>`.
- [L123](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L123) `label.appendChild(base)`; scope `<anonymous@15>/ensureBaseLayer`.
- [L125](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L125) `overlay.appendChild(buildZone(definition))`; scope `<anonymous@15>/ensureOverlayLayer/<anonymous@125>`.
- [L125](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L125) `label.appendChild(overlay)`; scope `<anonymous@15>/ensureOverlayLayer`.
- [L133](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L133) `wrap.appendChild(label)`; scope `<anonymous@15>/createInput`.
- [L133](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L133) `input.appendChild(option)`; scope `<anonymous@15>/createInput/<anonymous@133>`.
- [L133](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L133) `wrap.appendChild(input)`; scope `<anonymous@15>/createInput`.
- [L133](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L133) `wrap.appendChild(unit)`; scope `<anonymous@15>/createInput`.
- [L134](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L134) `card.appendChild(title)`; scope `<anonymous@15>/buildBlockCard`.
- [L134](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L134) `card.appendChild(note)`; scope `<anonymous@15>/buildBlockCard`.
- [L134](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L134) `blockForm.appendChild(containerTitle)`; scope `<anonymous@15>/buildBlockCard`.
- [L134](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L134) `containerGrid.appendChild(createInput(field, configValue, definition.key, 'container'))`; scope `<anonymous@15>/buildBlockCard/<anonymous@134>`.
- [L134](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L134) `blockForm.appendChild(containerGrid)`; scope `<anonymous@15>/buildBlockCard`.
- [L134](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L134) `blockForm.appendChild(textTitle)`; scope `<anonymous@15>/buildBlockCard`.
- [L134](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L134) `textGrid.appendChild(createInput(field, configValue, definition.key, 'text'))`; scope `<anonymous@15>/buildBlockCard/<anonymous@134>`.
- [L134](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L134) `blockForm.appendChild(textGrid)`; scope `<anonymous@15>/buildBlockCard`.
- [L134](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L134) `card.appendChild(blockForm)`; scope `<anonymous@15>/buildBlockCard`.
- [L135](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L135) `card.appendChild(paragraph)`; scope `<anonymous@15>/buildGlobalCard`.
- [L135](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L135) `list.appendChild(button)`; scope `<anonymous@15>/buildGlobalCard/<anonymous@135>`.
- [L135](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L135) `card.appendChild(list)`; scope `<anonymous@15>/buildGlobalCard`.
- [L149](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L149) `topbar.appendChild(viewButton)`; scope `<anonymous@15>/ensureConfigPanel`.
- [L150](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L150) `topbar.appendChild(editButton)`; scope `<anonymous@15>/ensureConfigPanel`.
- [L151](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L151) `panel.appendChild(topbar)`; scope `<anonymous@15>/ensureConfigPanel`.
- [L152](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L152) `panel.appendChild(selectedChip)`; scope `<anonymous@15>/ensureConfigPanel`.
- [L153](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L153) `panel.appendChild(globalCard)`; scope `<anonymous@15>/ensureConfigPanel`.
- [L154](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L154) `panel.appendChild(buildBlockCard(definition))`; scope `<anonymous@15>/ensureConfigPanel/<anonymous@154>`.
- [L155](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L155) `panel.appendChild(footer)`; scope `<anonymous@15>/ensureConfigPanel`.
- [L156](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L156) `modeSelect.appendChild(option)`; scope `<anonymous@15>/ensureConfigPanel/<anonymous@156>`.
- [L157](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L157) `panel.appendChild(modeSelect)`; scope `<anonymous@15>/ensureConfigPanel`.
- [L158](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L158) `document.body.appendChild(toggle)`; scope `<anonymous@15>/ensureConfigPanel`.
- [L158](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L158) `document.body.appendChild(panel)`; scope `<anonymous@15>/ensureConfigPanel`.

## logs

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## Zápisy do globálov, DOM a ostatných vlastností

- [L18](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L18) `window.labelRegeneratorV2Version = '2.0.6'`.
- [L79](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L79) `style.id = 'label-regenerator-styles'`.
- [L80](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L80) `style.textContent = ' :root { --lr-label-width: ${LABEL_WIDTH_MM}mm; --lr-label-height: ${LABEL_HEIGHT_MM}mm; --lr-panel-width: 360px; --lr-guide-color: rgba(35, 35, 35, 0.5); --lr-guide-fill: rgba(0, 0, 0, 0.035); --lr-panel-shadow: 0 10px 28px rgba(0, 0, 0, 0.14); --lr-panel-border: rgba(0, 0, 0, `.
- [L122](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L122) `zone.id = definition.id`.
- [L122](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L122) `zone.className = 'lr-block lr-block--${definition.slug}'`.
- [L122](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L122) `guide.className = 'lr-guide-tag'`.
- [L122](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L122) `guide.textContent = definition.title`.
- [L122](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L122) `anchor.className = 'lr-text-anchor lr-text-anchor--${definition.slug}'`.
- [L122](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L122) `text.className = 'lr-text lr-text--${definition.slug}'`.
- [L123](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L123) `base.id = 'label-regenerator-base'`.
- [L124](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L124) `base.style.transform = 'scale(${scale})'`.
- [L125](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L125) `overlay.id = 'label-regenerator-overlay'`.
- [L127](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L127) `zone.style.display = container.visible && (hasContent || visibleForEditing) ? 'block' : 'none'`.
- [L127](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L127) `zone.style.left = '${container.x}mm'`.
- [L127](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L127) `zone.style.top = '${container.y}mm'`.
- [L127](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L127) `zone.style.width = '${container.width}mm'`.
- [L127](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L127) `zone.style.height = '${container.height}mm'`.
- [L127](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L127) `zone.style.zIndex = String(container.zIndex)`.
- [L127](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L127) `zone.style.border = container.borderWidth > 0 ? '${container.borderWidth}mm solid ${container.borderColor}' : '0 solid transparent'`.
- [L127](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L127) `zone.style.borderRadius = '${container.borderRadius}mm'`.
- [L127](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L127) `zone.style.background = container.backgroundColor`.
- [L127](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L127) `anchor.style.left = '${container.paddingLeft}mm'`.
- [L127](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L127) `anchor.style.right = '${container.paddingRight}mm'`.
- [L127](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L127) `anchor.style.top = '${container.paddingTop}mm'`.
- [L127](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L127) `anchor.style.bottom = '${container.paddingBottom}mm'`.
- [L127](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L127) `anchor.style.justifyContent = text.textAlign === 'right' ? 'flex-end' : text.textAlign === 'center' ? 'center' : 'flex-start'`.
- [L128](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L128) `text.textContent = textConfig.uppercase ? String(content || '').toUpperCase() : String(content || '')`.
- [L128](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L128) `text.style.fontFamily = textConfig.fontFamily`.
- [L128](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L128) `text.style.fontSize = '${textConfig.fontSize}mm'`.
- [L128](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L128) `text.style.fontWeight = String(textConfig.fontWeight)`.
- [L128](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L128) `text.style.lineHeight = String(textConfig.lineHeight)`.
- [L128](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L128) `text.style.letterSpacing = '${textConfig.letterSpacing}mm'`.
- [L128](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L128) `text.style.color = textConfig.color`.
- [L128](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L128) `text.style.background = textConfig.backgroundColor`.
- [L128](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L128) `text.style.border = textConfig.borderWidth > 0 ? '${textConfig.borderWidth}mm solid ${textConfig.borderColor}' : '0 solid transparent'`.
- [L128](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L128) `text.style.borderRadius = '${textConfig.borderRadius}mm'`.
- [L128](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L128) `text.style.padding = '${textConfig.paddingY}mm ${textConfig.paddingX}mm'`.
- [L128](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L128) `text.style.textAlign = textConfig.textAlign`.
- [L128](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L128) `text.style.transformOrigin = textConfig.textAlign === 'right' ? 'right center' : textConfig.textAlign === 'center' ? 'center center' : 'left center'`.
- [L129](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L129) `text.style.transform = 'scale(1, 1)'`.
- [L129](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L129) `text.style.transform = 'scale(${scaleX}, 1)'`.
- [L129](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L129) `text.style.transform = 'scale(${scaleX * fitScale}, ${fitScale})'`.
- [L132](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L132) `predajnaText.style.fontSize = '27pt'`.
- [L132](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L132) `label.style.position = 'relative'`.
- [L132](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L132) `label.style.width = '${LABEL_WIDTH_MM}mm'`.
- [L132](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L132) `label.style.height = '${LABEL_HEIGHT_MM}mm'`.
- [L132](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L132) `label.style.overflow = 'hidden'`.
- [L132](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L132) `label.style.border = '0'`.
- [L132](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L132) `obj.style.height = '16mm'`.
- [L132](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L132) `block.style.marginBottom = '1mm'`.
- [L132](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L132) `newSpan.innerHTML = 'VP: ' + vpText.textContent.trim()`.
- [L132](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L132) `newSpan.style.color = '#ffffff'`.
- [L132](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L132) `newSpan.style.background = '#000'`.
- [L132](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L132) `newSpan.style.padding = '1px 4px'`.
- [L132](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L132) `newSpan.style.margin = '2px 0'`.
- [L132](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L132) `newSpan.style.borderRadius = '6px'`.
- [L132](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L132) `newSpan.style.fontSize = '13pt'`.
- [L132](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L132) `newSpan.style.display = 'inline-block'`.
- [L132](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L132) `newSpan.style.verticalAlign = 'middle'`.
- [L132](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L132) `wrapper.innerHTML = wrapper.innerHTML.replace(/VP.*<\/span>/, '')`.
- [L133](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L133) `wrap.className = 'lr-field'`.
- [L133](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L133) `label.textContent = field.label`.
- [L133](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L133) `option.textContent = optionValue`.
- [L133](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L133) `unit.className = 'lr-input-unit'`.
- [L133](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L133) `unit.textContent = field.unit`.
- [L134](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L134) `card.className = 'lr-block-card'`.
- [L134](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L134) `title.textContent = definition.title`.
- [L134](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L134) `note.textContent = 'Classy: .lr-block--${definition.slug} a .lr-text--${definition.slug}'`.
- [L134](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L134) `blockForm.className = 'lr-block-form'`.
- [L134](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L134) `containerTitle.className = 'lr-section-title'`.
- [L134](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L134) `containerTitle.textContent = 'Block'`.
- [L134](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L134) `containerGrid.className = 'lr-field-grid'`.
- [L134](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L134) `textTitle.className = 'lr-section-title'`.
- [L134](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L134) `textTitle.textContent = 'Text Element'`.
- [L134](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L134) `textGrid.className = 'lr-field-grid'`.
- [L135](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L135) `card.className = 'lr-global-card'`.
- [L135](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L135) `paragraph.textContent = 'Print je finalny view rezim. Edit je layout rezim; klik na blok v stitku alebo vyber blok nizsie.'`.
- [L135](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L135) `list.className = 'lr-selection-list'`.
- [L135](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L135) `button.className = 'lr-select-block-btn'`.
- [L135](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L135) `button.textContent = definition.title`.
- [L137](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L137) `panelElements.selectedChip.textContent = selectedLabel`.
- [L139](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L139) `panelElements.toggle.textContent = 'CFG'`.
- [L140](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L140) `panelElements.panel.style.left = '50%'`.
- [L140](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L140) `panelElements.panel.style.top = '10px'`.
- [L140](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L140) `panelElements.panel.style.transform = 'translateX(-50%)'`.
- [L140](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L140) `panelElements.toggle.style.display = 'none'`.
- [L146](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L146) `toggle.id = 'lr-config-toggle'`.
- [L146](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L146) `toggle.textContent = 'CFG'`.
- [L147](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L147) `panel.id = 'lr-config-panel'`.
- [L148](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L148) `topbar.className = 'lr-panel-topbar'`.
- [L149](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L149) `viewButton.className = 'lr-btn'`.
- [L149](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L149) `viewButton.textContent = 'Print'`.
- [L150](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L150) `editButton.className = 'lr-btn'`.
- [L150](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L150) `editButton.textContent = 'Edit'`.
- [L152](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L152) `selectedChip.className = 'lr-selected-chip lr-selected-chip--empty'`.
- [L152](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L152) `selectedChip.textContent = 'No block selected'`.
- [L155](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L155) `footer.className = 'lr-panel-footer'`.
- [L155](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L155) `footer.textContent = 'Ctrl+Shift+E prepina Print/Edit rezim.'`.
- [L156](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L156) `option.textContent = mode`.
- [L167](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L167) `window.labelRegeneratorSetZone = (zoneName, value) => { const definition = findZoneDefinition(zoneName); if (!definition) return; persistZoneValue(definition, value); renderOverlayZones(); }`.
- [L167](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L167) `window.labelRegeneratorRefresh = renderOverlayZones`.
- [L167](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L167) `window.labelRegeneratorGetConfig = () => deepClone(layoutConfig)`.
- [L167](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L167) `window.labelRegeneratorSetBlockConfig = (blockKey, patch) => { const definition = findZoneDefinition(blockKey); if (!definition || !patch || typeof patch !== 'object') return; const current = layoutConfig.blocks[definition.key]; const next = normalizeBlockConfig({ container: Object.assign({}, curren`.
- [L167](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L167) `window.labelRegeneratorToggleEditor = () => setPanelOpen(currentMode !== 'edit')`.
- [L167](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L167) `window.labelRegeneratorSetMode = (mode) => { setPanelOpen(mode === 'edit'); }`.
- [L167](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L167) `window.labelRegeneratorSelectBlock = (blockKey) => { setSelectedBlock(blockKey); }`.
- [L168](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L168) `window.__labelRegeneratorReady = false`.
- [L168](https://github.com/denkz0ne/moduly-FC-userscripts/blob/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js#L168) `window.__labelRegeneratorReady = true`.
