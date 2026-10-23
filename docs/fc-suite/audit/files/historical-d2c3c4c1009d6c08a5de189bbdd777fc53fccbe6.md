# labelRegeneratorV2

Zdroj: labelRegeneratorV2.user.js; referencia: d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6.
SHA-256: `eb326f484c7309ea4907b04adb044175947393ba28cb73bea7e119ccf1d0bfeb`. Riadkov: 762.

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
    "2.0.18"
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
    "https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js"
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

- [L16–761](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L16) `<anonymous@16>()`; scope `root`.
- [L38–40](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L38) `zoneKeys(zone)`; scope `<anonymous@16>`.
- [L42–45](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L42) `findZone(name)`; scope `<anonymous@16>`.
- [L44–44](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L44) `<anonymous@44>(zone)`; scope `<anonymous@16>/findZone`.
- [L47–57](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L47) `currentValue(zone)`; scope `<anonymous@16>`.
- [L59–65](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L59) `captureBaseline(zone)`; scope `<anonymous@16>`.
- [L61–63](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L61) `<anonymous@61>(key)`; scope `<anonymous@16>/captureBaseline`.
- [L67–81](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L67) `applyOverrideValues()`; scope `<anonymous@16>`.
- [L68–80](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L68) `<anonymous@68>(zone)`; scope `<anonymous@16>/applyOverrideValues`.
- [L71–73](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L71) `<anonymous@71>(key)`; scope `<anonymous@16>/applyOverrideValues/<anonymous@68>`.
- [L77–79](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L77) `<anonymous@77>(key)`; scope `<anonymous@16>/applyOverrideValues/<anonymous@68>`.
- [L83–93](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L83) `refreshLabel()`; scope `<anonymous@16>`.
- [L95–146](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L95) `ensureStyles()`; scope `<anonymous@16>`.
- [L148–288](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L148) `ensurePanelControlStyles()`; scope `<anonymous@16>`.
- [L290–298](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L290) `getRoot()`; scope `<anonymous@16>`.
- [L300–328](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L300) `ensureInputs()`; scope `<anonymous@16>`.
- [L304–327](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L304) `<anonymous@304>(zone)`; scope `<anonymous@16>/ensureInputs`.
- [L319–323](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L319) `<anonymous@319>()`; scope `<anonymous@16>/ensureInputs/<anonymous@304>`.
- [L330–339](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L330) `updatePlaceholders()`; scope `<anonymous@16>`.
- [L333–338](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L333) `<anonymous@333>(zone)`; scope `<anonymous@16>/updatePlaceholders`.
- [L341–370](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L341) `positionInputs()`; scope `<anonymous@16>`.
- [L349–349](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L349) `mmX(mm)`; scope `<anonymous@16>/positionInputs`.
- [L350–350](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L350) `mmY(mm)`; scope `<anonymous@16>/positionInputs`.
- [L361–369](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L361) `<anonymous@361>(field)`; scope `<anonymous@16>/positionInputs`.
- [L372–380](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L372) `removeLegacyInputs()`; scope `<anonymous@16>`.
- [L373–373](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L373) `<anonymous@373>(card)`; scope `<anonymous@16>/removeLegacyInputs`.
- [L374–379](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L374) `<anonymous@374>(input)`; scope `<anonymous@16>/removeLegacyInputs`.
- [L382–394](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L382) `mmToPx(mm)`; scope `<anonymous@16>`.
- [L396–398](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L396) `getInfoBlock(data)`; scope `<anonymous@16>`.
- [L397–397](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L397) `<anonymous@397>(node)`; scope `<anonymous@16>/getInfoBlock`.
- [L400–437](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L400) `stabilizeOrderNumberBlock()`; scope `<anonymous@16>`.
- [L439–441](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L439) `getPanelMode()`; scope `<anonymous@16>`.
- [L443–457](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L443) `getPanelControlButtons()`; scope `<anonymous@16>`.
- [L448–448](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L448) `<anonymous@448>(button)`; scope `<anonymous@16>/getPanelControlButtons`.
- [L449–449](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L449) `<anonymous@449>(button)`; scope `<anonymous@16>/getPanelControlButtons`.
- [L459–468](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L459) `setPanelMode(mode)`; scope `<anonymous@16>`.
- [L470–474](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L470) `printCurrentLabel(allowFromEdit)`; scope `<anonymous@16>`.
- [L473–473](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L473) `<anonymous@473>()`; scope `<anonymous@16>/printCurrentLabel`.
- [L476–487](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L476) `syncPanelPrintEditState()`; scope `<anonymous@16>`.
- [L489–511](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L489) `bindPanelPrintEditControls()`; scope `<anonymous@16>`.
- [L497–501](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L497) `<anonymous@497>(event)`; scope `<anonymous@16>/bindPanelPrintEditControls`.
- [L503–507](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L503) `<anonymous@503>(event)`; scope `<anonymous@16>/bindPanelPrintEditControls`.
- [L513–538](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L513) `bindVisualBlockSelection()`; scope `<anonymous@16>`.
- [L517–535](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L517) `<anonymous@517>(event)`; scope `<anonymous@16>/bindVisualBlockSelection`.
- [L540–542](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L540) `isPrintLabelPage()`; scope `<anonymous@16>`.
- [L544–546](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L544) `isDetailPage()`; scope `<anonymous@16>`.
- [L548–552](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L548) `isTypingTarget(target)`; scope `<anonymous@16>`.
- [L554–557](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L554) `getVpNumber()`; scope `<anonymous@16>`.
- [L559–571](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L559) `persistPrintZone(zoneName, value)`; scope `<anonymous@16>`.
- [L563–570](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L563) `<anonymous@563>(key)`; scope `<anonymous@16>/persistPrintZone`.
- [L573–580](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L573) `syncLabelValuesFromDetailPage()`; scope `<anonymous@16>`.
- [L582–595](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L582) `clearDelayedPrintState()`; scope `<anonymous@16>`.
- [L597–601](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L597) `cancelDelayedPrint()`; scope `<anonymous@16>`.
- [L603–610](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L603) `finishDelayedPrint(printWindow)`; scope `<anonymous@16>`.
- [L607–609](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L607) `<anonymous@607>()`; scope `<anonymous@16>/finishDelayedPrint`.
- [L612–629](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L612) `triggerDelayedPrintWhenReady(printWindow)`; scope `<anonymous@16>`.
- [L615–628](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L615) `<anonymous@615>()`; scope `<anonymous@16>/triggerDelayedPrintWhenReady`.
- [L631–663](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L631) `startCancellableDelayedPrint(printWindow)`; scope `<anonymous@16>`.
- [L633–638](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L633) `cancelOnEsc(event)`; scope `<anonymous@16>/startCancellableDelayedPrint`.
- [L656–662](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L656) `<anonymous@656>()`; scope `<anonymous@16>/startCancellableDelayedPrint`.
- [L665–675](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L665) `openPrintLabelWithDelay()`; scope `<anonymous@16>`.
- [L677–704](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L677) `bindKeyboardOverrides()`; scope `<anonymous@16>`.
- [L680–701](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L680) `<anonymous@680>(event)`; scope `<anonymous@16>/bindKeyboardOverrides`.
- [L706–717](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L706) `refreshAll()`; scope `<anonymous@16>`.
- [L719–725](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L719) `scheduleStabilize()`; scope `<anonymous@16>`.
- [L729–734](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L729) `window.labelRegeneratorRefresh()`; scope `<anonymous@16>`.
- [L739–749](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L739) `window.labelRegeneratorSetZone(zoneName, value)`; scope `<anonymous@16>`.
- [L743–745](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L743) `<anonymous@743>(key)`; scope `<anonymous@16>/window.labelRegeneratorSetZone`.

## Premenné a pôvodné inicializátory

Dlhé inicializátory sú tu skrátené na 300 znakov; úplné znenie je v inventory.json a v zdroji.

- [L21](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L21) `const ZONES = [ { key: 'TM_top', aliases: [], pos: 'top1', label: 'pravy horny 1' }, { key: 'TM_bottom', aliases: [], pos: 'top2', label: 'pravy horny 2' }, { key: 'TM_testoLeft', aliases: ['testoleft'], pos: 'bottomLeft', label: 'lavy dolny' }, { key: 'TM_testoRight', aliases: ['testoright'], pos: `; scope `<anonymous@16>`.
- [L28](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L28) `const overrides = Object.create(null)`; scope `<anonymous@16>`.
- [L29](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L29) `const baselines = Object.create(null)`; scope `<anonymous@16>`.
- [L30](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L30) `const DELAYED_PRINT_MS = 3000`; scope `<anonymous@16>`.
- [L31](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L31) `let mmPxCache = null`; scope `<anonymous@16>`.
- [L32](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L32) `let refreshing = false`; scope `<anonymous@16>`.
- [L33](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L33) `let panelControlBound = false`; scope `<anonymous@16>`.
- [L34](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L34) `let visualSelectionBound = false`; scope `<anonymous@16>`.
- [L35](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L35) `let keyboardOverrideBound = false`; scope `<anonymous@16>`.
- [L36](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L36) `let delayedPrintState = null`; scope `<anonymous@16>`.
- [L43](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L43) `const normalized = String(name || '').trim()`; scope `<anonymous@16>/findZone`.
- [L48](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L48) `const key = <bez inicializátora>`; scope `<anonymous@16>/currentValue`.
- [L49](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L49) `const value = window[key]`; scope `<anonymous@16>/currentValue`.
- [L52](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L52) `const key = <bez inicializátora>`; scope `<anonymous@16>/currentValue`.
- [L53](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L53) `const stored = localStorage.getItem(key)`; scope `<anonymous@16>/currentValue`.
- [L60](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L60) `const value = currentValue(zone)`; scope `<anonymous@16>/captureBaseline`.
- [L69](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L69) `const override = String(overrides[zone.key] || '').trim()`; scope `<anonymous@16>/applyOverrideValues/<anonymous@68>`.
- [L97](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L97) `const style = document.createElement('style')`; scope `<anonymous@16>/ensureStyles`.
- [L150](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L150) `const style = document.createElement('style')`; scope `<anonymous@16>/ensurePanelControlStyles`.
- [L291](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L291) `let root = document.getElementById('lr-detached-overrides')`; scope `<anonymous@16>/getRoot`.
- [L302](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L302) `const root = getRoot()`; scope `<anonymous@16>/ensureInputs`.
- [L305](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L305) `let input = root.querySelector('input[data-override-zone="${zone.key}"]')`; scope `<anonymous@16>/ensureInputs/<anonymous@304>`.
- [L308](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L308) `const field = document.createElement('div')`; scope `<anonymous@16>/ensureInputs/<anonymous@304>`.
- [L331](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L331) `const root = document.getElementById('lr-detached-overrides')`; scope `<anonymous@16>/updatePlaceholders`.
- [L334](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L334) `const input = root.querySelector('input[data-override-zone="${zone.key}"]')`; scope `<anonymous@16>/updatePlaceholders/<anonymous@333>`.
- [L342](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L342) `const label = document.querySelector('#label')`; scope `<anonymous@16>/positionInputs`.
- [L343](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L343) `const root = document.getElementById('lr-detached-overrides')`; scope `<anonymous@16>/positionInputs`.
- [L346](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L346) `const rect = label.getBoundingClientRect()`; scope `<anonymous@16>/positionInputs`.
- [L347](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L347) `const scaleX = rect.width / 62`; scope `<anonymous@16>/positionInputs`.
- [L348](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L348) `const scaleY = rect.height / 45`; scope `<anonymous@16>/positionInputs`.
- [L349](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L349) `const mmX = (mm) => rect.left + (mm * scaleX)`; scope `<anonymous@16>/positionInputs`.
- [L350](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L350) `const mmY = (mm) => rect.top + (mm * scaleY)`; scope `<anonymous@16>/positionInputs`.
- [L351](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L351) `const gapX = 4 * scaleX`; scope `<anonymous@16>/positionInputs`.
- [L352](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L352) `const gapY = 5.5 * scaleY`; scope `<anonymous@16>/positionInputs`.
- [L354](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L354) `const positions = { top1: { left: mmX(62) + gapX, top: mmY(0.4), width: 22 * scaleX, height: 5.6 * scaleY }, top2: { left: mmX(62) + gapX, top: mmY(6.8), width: 22 * scaleX, height: 5.6 * scaleY }, bottomLeft: { left: mmX(0), top: mmY(45) + gapY, width: 25 * scaleX, height: 5.6 * scaleY }, bottomRig`; scope `<anonymous@16>/positionInputs`.
- [L362](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L362) `const pos = positions[field.dataset.overridePosition]`; scope `<anonymous@16>/positionInputs/<anonymous@361>`.
- [L363](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L363) `const input = field.querySelector('input')`; scope `<anonymous@16>/positionInputs/<anonymous@361>`.
- [L376](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L376) `const field = input.closest('.lr-override-field') || input`; scope `<anonymous@16>/removeLegacyInputs/<anonymous@374>`.
- [L384](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L384) `const probe = document.createElement('div')`; scope `<anonymous@16>/mmToPx`.
- [L401](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L401) `const data = document.querySelector('#label-regenerator-base #data, #data')`; scope `<anonymous@16>/stabilizeOrderNumberBlock`.
- [L403](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L403) `const info = getInfoBlock(data)`; scope `<anonymous@16>/stabilizeOrderNumberBlock`.
- [L404](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L404) `const obj = data.querySelector('.obj')`; scope `<anonymous@16>/stabilizeOrderNumberBlock`.
- [L424](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L424) `const dataHeight = data.clientHeight || mmToPx(46)`; scope `<anonymous@16>/stabilizeOrderNumberBlock`.
- [L425](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L425) `const infoBottom = info.offsetTop + info.offsetHeight`; scope `<anonymous@16>/stabilizeOrderNumberBlock`.
- [L426](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L426) `const gap = mmToPx(0.8)`; scope `<anonymous@16>/stabilizeOrderNumberBlock`.
- [L427](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L427) `const defaultHeight = mmToPx(16)`; scope `<anonymous@16>/stabilizeOrderNumberBlock`.
- [L428](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L428) `const minHeight = mmToPx(9.5)`; scope `<anonymous@16>/stabilizeOrderNumberBlock`.
- [L429](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L429) `const availableHeight = Math.max(minHeight, dataHeight - infoBottom - gap)`; scope `<anonymous@16>/stabilizeOrderNumberBlock`.
- [L430](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L430) `const finalHeight = Math.min(defaultHeight, availableHeight)`; scope `<anonymous@16>/stabilizeOrderNumberBlock`.
- [L433](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L433) `const compressed = finalHeight < defaultHeight - 1`; scope `<anonymous@16>/stabilizeOrderNumberBlock`.
- [L434](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L434) `const fontSize = compressed ? Math.max(24, Math.min(37, finalHeight * 0.62)) : 37`; scope `<anonymous@16>/stabilizeOrderNumberBlock`.
- [L444](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L444) `const panel = document.getElementById('lr-config-panel')`; scope `<anonymous@16>/getPanelControlButtons`.
- [L447](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L447) `const buttons = Array.from(panel.querySelectorAll('button'))`; scope `<anonymous@16>/getPanelControlButtons`.
- [L448](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L448) `const printButton = buttons.find((button) => /^(print|view|tlacit|tlačiť)$/i.test(button.textContent.trim())) || null`; scope `<anonymous@16>/getPanelControlButtons`.
- [L449](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L449) `const editButton = buttons.find((button) => /^edit$/i.test(button.textContent.trim())) || null`; scope `<anonymous@16>/getPanelControlButtons`.
- [L460](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L460) `const nextMode = mode === 'edit' ? 'edit' : 'view'`; scope `<anonymous@16>/setPanelMode`.
- [L478](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L478) `const controls = getPanelControlButtons()`; scope `<anonymous@16>/syncPanelPrintEditState`.
- [L481](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L481) `const editMode = getPanelMode() === 'edit'`; scope `<anonymous@16>/syncPanelPrintEditState`.
- [L491](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L491) `const controls = getPanelControlButtons()`; scope `<anonymous@16>/bindPanelPrintEditControls`.
- [L522](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L522) `const block = event.target.closest('.lr-block')`; scope `<anonymous@16>/bindVisualBlockSelection/<anonymous@517>`.
- [L525](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L525) `const zone = block.dataset.zone`; scope `<anonymous@16>/bindVisualBlockSelection/<anonymous@517>`.
- [L550](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L550) `const tagName = target.tagName`; scope `<anonymous@16>/isTypingTarget`.
- [L555](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L555) `const strong = document.querySelector('strong.red')`; scope `<anonymous@16>/getVpNumber`.
- [L560](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L560) `const zone = findZone(zoneName)`; scope `<anonymous@16>/persistPrintZone`.
- [L562](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L562) `const normalized = value == null ? '' : String(value).trim()`; scope `<anonymous@16>/persistPrintZone`.
- [L574](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L574) `const leftBadge = document.querySelector('#shortcut-info-label')`; scope `<anonymous@16>/syncLabelValuesFromDetailPage`.
- [L575](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L575) `const rightBadge = document.querySelector('#shortcut-info-date')`; scope `<anonymous@16>/syncLabelValuesFromDetailPage`.
- [L576](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L576) `const leftValue = leftBadge ? (leftBadge.textContent || '').trim() : localStorage.getItem('TM_testoLeft') || ''`; scope `<anonymous@16>/syncLabelValuesFromDetailPage`.
- [L577](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L577) `const rightValue = rightBadge ? (rightBadge.textContent || '').trim() : localStorage.getItem('TM_testoRight') || ''`; scope `<anonymous@16>/syncLabelValuesFromDetailPage`.
- [L621](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L621) `const timedOut = Date.now() - delayedPrintState.startedAt > 15000`; scope `<anonymous@16>/triggerDelayedPrintWhenReady/<anonymous@615>`.
- [L622](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L622) `const ready = !!printWindow.__labelRegeneratorReady`; scope `<anonymous@16>/triggerDelayedPrintWhenReady/<anonymous@615>`.
- [L633](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L633) `const cancelOnEsc = (event) => { if (event.key !== 'Escape') return; event.preventDefault(); event.stopImmediatePropagation(); cancelDelayedPrint(); }`; scope `<anonymous@16>/startCancellableDelayedPrint`.
- [L666](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L666) `const vpNumber = getVpNumber()`; scope `<anonymous@16>/openPrintLabelWithDelay`.
- [L670](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L670) `const url = 'https://moduly.faxcopy.sk/vyrobne_prikazy/detail/printLabel/${vpNumber}'`; scope `<anonymous@16>/openPrintLabelWithDelay`.
- [L671](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L671) `const popup = window.open(url, '_blank')`; scope `<anonymous@16>/openPrintLabelWithDelay`.
- [L688](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L688) `const key = event.key.toLowerCase()`; scope `<anonymous@16>/bindKeyboardOverrides/<anonymous@680>`.
- [L727](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L727) `const originalRefresh = window.labelRegeneratorRefresh`; scope `<anonymous@16>`.
- [L731](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L731) `const result = originalRefresh.apply(this, arguments)`; scope `<anonymous@16>/window.labelRegeneratorRefresh`.
- [L737](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L737) `const originalSetZone = window.labelRegeneratorSetZone`; scope `<anonymous@16>`.
- [L740](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L740) `const zone = findZone(zoneName)`; scope `<anonymous@16>/window.labelRegeneratorSetZone`.
- [L741](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L741) `const result = originalSetZone.apply(this, arguments)`; scope `<anonymous@16>/window.labelRegeneratorSetZone`.

## storage

- [L16](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L16) `function () { 'use strict'; window.labelRegeneratorV2Version = '2.0.18'; const ZONES = [ { key: 'TM_top', aliases: [], pos: 'top1', label: 'pravy horny 1' }, { key: 'TM_bottom', aliases: [], pos: 'top2', label: 'pravy horny 2' }, { key: 'TM_testoLeft', aliases: ['testoleft'], pos: 'bottomLeft', labe`; scope `root`.
- [L53](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L53) `localStorage.getItem(key)`; scope `<anonymous@16>/currentValue`.
- [L566](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L566) `localStorage.setItem(key, normalized)`; scope `<anonymous@16>/persistPrintZone/<anonymous@563>`.
- [L568](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L568) `localStorage.removeItem(key)`; scope `<anonymous@16>/persistPrintZone/<anonymous@563>`.
- [L576](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L576) `localStorage.getItem('TM_testoLeft')`; scope `<anonymous@16>/syncLabelValuesFromDetailPage`.
- [L577](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L577) `localStorage.getItem('TM_testoRight')`; scope `<anonymous@16>/syncLabelValuesFromDetailPage`.

## events

- [L16](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L16) `function () { 'use strict'; window.labelRegeneratorV2Version = '2.0.18'; const ZONES = [ { key: 'TM_top', aliases: [], pos: 'top1', label: 'pravy horny 1' }, { key: 'TM_bottom', aliases: [], pos: 'top2', label: 'pravy horny 2' }, { key: 'TM_testoLeft', aliases: ['testoleft'], pos: 'bottomLeft', labe`; scope `root`.
- [L319](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L319) `input.addEventListener('input', () => { if (!overrides[zone.key]) captureBaseline(zone); overrides[zone.key] = input.value; refreshLabel(); })`; scope `<anonymous@16>/ensureInputs/<anonymous@304>`.
- [L497](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L497) `controls.printButton.addEventListener('click', (event) => { event.preventDefault(); event.stopImmediatePropagation(); printCurrentLabel(false); }, true)`; scope `<anonymous@16>/bindPanelPrintEditControls`.
- [L503](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L503) `controls.editButton.addEventListener('click', (event) => { event.preventDefault(); event.stopImmediatePropagation(); setPanelMode(getPanelMode() === 'edit' ? 'view' : 'edit'); }, true)`; scope `<anonymous@16>/bindPanelPrintEditControls`.
- [L517](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L517) `document.addEventListener('click', (event) => { if (getPanelMode() !== 'edit') return; if (event.target.closest('#lr-config-panel')) return; if (event.target.closest('#lr-detached-overrides')) return; const block = event.target.closest('.lr-block'); if (!block) return; const zone = block.dataset.zon`; scope `<anonymous@16>/bindVisualBlockSelection`.
- [L587](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L587) `window.removeEventListener('keydown', delayedPrintState.cancelOnEsc, true)`; scope `<anonymous@16>/clearDelayedPrintState`.
- [L589](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L589) `delayedPrintState.printWindow.removeEventListener('keydown', delayedPrintState.cancelOnEsc, true)`; scope `<anonymous@16>/clearDelayedPrintState`.
- [L649](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L649) `window.addEventListener('keydown', cancelOnEsc, true)`; scope `<anonymous@16>/startCancellableDelayedPrint`.
- [L651](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L651) `printWindow.addEventListener('keydown', cancelOnEsc, true)`; scope `<anonymous@16>/startCancellableDelayedPrint`.
- [L680](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L680) `window.addEventListener('keydown', (event) => { if (event.key === 'Escape') { cancelDelayedPrint(); return; } if (isTypingTarget(event.target) || event.ctrlKey || event.metaKey || event.altKey) return; const key = event.key.toLowerCase(); if (key === 'p' && isPrintLabelPage() && !event.repeat) { eve`; scope `<anonymous@16>/bindKeyboardOverrides`.
- [L752](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L752) `window.addEventListener('labelRegeneratorReady', scheduleStabilize)`; scope `<anonymous@16>`.
- [L753](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L753) `window.addEventListener('resize', scheduleStabilize)`; scope `<anonymous@16>`.
- [L754](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L754) `window.addEventListener('scroll', scheduleStabilize, true)`; scope `<anonymous@16>`.
- [L757](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L757) `document.addEventListener('DOMContentLoaded', scheduleStabilize)`; scope `<anonymous@16>`.

## lifecycle

- [L16](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L16) `function () { 'use strict'; window.labelRegeneratorV2Version = '2.0.18'; const ZONES = [ { key: 'TM_top', aliases: [], pos: 'top1', label: 'pravy horny 1' }, { key: 'TM_bottom', aliases: [], pos: 'top2', label: 'pravy horny 2' }, { key: 'TM_testoLeft', aliases: ['testoleft'], pos: 'bottomLeft', labe`; scope `root`.
- [L473](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L473) `requestAnimationFrame(() => window.print())`; scope `<anonymous@16>/printCurrentLabel`.
- [L584](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L584) `clearInterval(delayedPrintState.readyTimer)`; scope `<anonymous@16>/clearDelayedPrintState`.
- [L585](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L585) `clearTimeout(delayedPrintState.delayTimer)`; scope `<anonymous@16>/clearDelayedPrintState`.
- [L607](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L607) `setTimeout(() => { if (!printWindow.closed) printWindow.close(); }, 1200)`; scope `<anonymous@16>/finishDelayedPrint`.
- [L615](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L615) `setInterval(() => { if (!delayedPrintState || delayedPrintState.cancelled || printWindow.closed) { clearDelayedPrintState(); return; } const timedOut = Date.now() - delayedPrintState.startedAt > 15000; const ready = !!printWindow.__labelRegeneratorReady; if (!ready && !timedOut) return; clearInterva`; scope `<anonymous@16>/triggerDelayedPrintWhenReady`.
- [L625](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L625) `clearInterval(delayedPrintState.readyTimer)`; scope `<anonymous@16>/triggerDelayedPrintWhenReady/<anonymous@615>`.
- [L656](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L656) `setTimeout(() => { if (!delayedPrintState || delayedPrintState.cancelled || printWindow.closed) { clearDelayedPrintState(); return; } triggerDelayedPrintWhenReady(printWindow); }, DELAYED_PRINT_MS)`; scope `<anonymous@16>/startCancellableDelayedPrint`.
- [L721](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L721) `requestAnimationFrame(refreshAll)`; scope `<anonymous@16>/scheduleStabilize`.
- [L722](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L722) `setTimeout(refreshAll, 80)`; scope `<anonymous@16>/scheduleStabilize`.
- [L723](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L723) `setTimeout(refreshAll, 250)`; scope `<anonymous@16>/scheduleStabilize`.
- [L724](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L724) `setTimeout(refreshAll, 800)`; scope `<anonymous@16>/scheduleStabilize`.

## io

- [L473](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L473) `window.print()`; scope `<anonymous@16>/printCurrentLabel/<anonymous@473>`.
- [L606](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L606) `printWindow.print()`; scope `<anonymous@16>/finishDelayedPrint`.
- [L671](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L671) `window.open(url, '_blank')`; scope `<anonymous@16>/openPrintLabelWithDelay`.

## dom-read

- [L16](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L16) `function () { 'use strict'; window.labelRegeneratorV2Version = '2.0.18'; const ZONES = [ { key: 'TM_top', aliases: [], pos: 'top1', label: 'pravy horny 1' }, { key: 'TM_bottom', aliases: [], pos: 'top2', label: 'pravy horny 2' }, { key: 'TM_testoLeft', aliases: ['testoleft'], pos: 'bottomLeft', labe`; scope `root`.
- [L96](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L96) `document.getElementById('lr-detached-overrides-style')`; scope `<anonymous@16>/ensureStyles`.
- [L149](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L149) `document.getElementById('lr-panel-control-style-v217')`; scope `<anonymous@16>/ensurePanelControlStyles`.
- [L291](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L291) `document.getElementById('lr-detached-overrides')`; scope `<anonymous@16>/getRoot`.
- [L305](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L305) `root.querySelector('input[data-override-zone="${zone.key}"]')`; scope `<anonymous@16>/ensureInputs/<anonymous@304>`.
- [L331](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L331) `document.getElementById('lr-detached-overrides')`; scope `<anonymous@16>/updatePlaceholders`.
- [L334](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L334) `root.querySelector('input[data-override-zone="${zone.key}"]')`; scope `<anonymous@16>/updatePlaceholders/<anonymous@333>`.
- [L342](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L342) `document.querySelector('#label')`; scope `<anonymous@16>/positionInputs`.
- [L343](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L343) `document.getElementById('lr-detached-overrides')`; scope `<anonymous@16>/positionInputs`.
- [L361](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L361) `root.querySelectorAll('.lr-detached-field[data-override-position]').forEach((field) => { const pos = positions[field.dataset.overridePosition]; const input = field.querySelector('input'); if (!pos || !input) return; field.style.left = '${pos.left}px'; field.style.top = '${pos.top}px'; input.style.wi`; scope `<anonymous@16>/positionInputs`.
- [L361](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L361) `root.querySelectorAll('.lr-detached-field[data-override-position]')`; scope `<anonymous@16>/positionInputs`.
- [L363](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L363) `field.querySelector('input')`; scope `<anonymous@16>/positionInputs/<anonymous@361>`.
- [L373](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L373) `document.querySelectorAll('.lr-override-card').forEach((card) => card.remove())`; scope `<anonymous@16>/removeLegacyInputs`.
- [L373](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L373) `document.querySelectorAll('.lr-override-card')`; scope `<anonymous@16>/removeLegacyInputs`.
- [L374](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L374) `document.querySelectorAll('input[data-override-zone]').forEach((input) => { if (!input.closest('#lr-detached-overrides')) { const field = input.closest('.lr-override-field') || input; field.remove(); } })`; scope `<anonymous@16>/removeLegacyInputs`.
- [L374](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L374) `document.querySelectorAll('input[data-override-zone]')`; scope `<anonymous@16>/removeLegacyInputs`.
- [L375](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L375) `input.closest('#lr-detached-overrides')`; scope `<anonymous@16>/removeLegacyInputs/<anonymous@374>`.
- [L376](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L376) `input.closest('.lr-override-field')`; scope `<anonymous@16>/removeLegacyInputs/<anonymous@374>`.
- [L401](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L401) `document.querySelector('#label-regenerator-base #data, #data')`; scope `<anonymous@16>/stabilizeOrderNumberBlock`.
- [L404](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L404) `data.querySelector('.obj')`; scope `<anonymous@16>/stabilizeOrderNumberBlock`.
- [L444](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L444) `document.getElementById('lr-config-panel')`; scope `<anonymous@16>/getPanelControlButtons`.
- [L447](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L447) `panel.querySelectorAll('button')`; scope `<anonymous@16>/getPanelControlButtons`.
- [L519](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L519) `event.target.closest('#lr-config-panel')`; scope `<anonymous@16>/bindVisualBlockSelection/<anonymous@517>`.
- [L520](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L520) `event.target.closest('#lr-detached-overrides')`; scope `<anonymous@16>/bindVisualBlockSelection/<anonymous@517>`.
- [L522](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L522) `event.target.closest('.lr-block')`; scope `<anonymous@16>/bindVisualBlockSelection/<anonymous@517>`.
- [L555](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L555) `document.querySelector('strong.red')`; scope `<anonymous@16>/getVpNumber`.
- [L574](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L574) `document.querySelector('#shortcut-info-label')`; scope `<anonymous@16>/syncLabelValuesFromDetailPage`.
- [L575](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L575) `document.querySelector('#shortcut-info-date')`; scope `<anonymous@16>/syncLabelValuesFromDetailPage`.

## dom-write

- [L16](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L16) `function () { 'use strict'; window.labelRegeneratorV2Version = '2.0.18'; const ZONES = [ { key: 'TM_top', aliases: [], pos: 'top1', label: 'pravy horny 1' }, { key: 'TM_bottom', aliases: [], pos: 'top2', label: 'pravy horny 2' }, { key: 'TM_testoLeft', aliases: ['testoleft'], pos: 'bottomLeft', labe`; scope `root`.
- [L145](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L145) `document.head.appendChild(style)`; scope `<anonymous@16>/ensureStyles`.
- [L287](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L287) `document.head.appendChild(style)`; scope `<anonymous@16>/ensurePanelControlStyles`.
- [L295](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L295) `document.body.appendChild(root)`; scope `<anonymous@16>/getRoot`.
- [L325](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L325) `field.appendChild(input)`; scope `<anonymous@16>/ensureInputs/<anonymous@304>`.
- [L326](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L326) `root.appendChild(field)`; scope `<anonymous@16>/ensureInputs/<anonymous@304>`.
- [L373](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L373) `card.remove()`; scope `<anonymous@16>/removeLegacyInputs/<anonymous@373>`.
- [L377](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L377) `field.remove()`; scope `<anonymous@16>/removeLegacyInputs/<anonymous@374>`.
- [L389](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L389) `document.body.appendChild(probe)`; scope `<anonymous@16>/mmToPx`.
- [L391](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L391) `probe.remove()`; scope `<anonymous@16>/mmToPx`.
- [L483](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L483) `controls.printButton.setAttribute('aria-disabled', editMode ? 'true' : 'false')`; scope `<anonymous@16>/syncPanelPrintEditState`.
- [L486](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L486) `controls.editButton.setAttribute('aria-pressed', editMode ? 'true' : 'false')`; scope `<anonymous@16>/syncPanelPrintEditState`.

## logs

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## Zápisy do globálov, DOM a ostatných vlastností

- [L19](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L19) `window.labelRegeneratorV2Version = '2.0.18'`.
- [L98](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L98) `style.id = 'lr-detached-overrides-style'`.
- [L99](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L99) `style.textContent = ' #lr-config-panel .lr-override-card, .lr-override-card { display: none !important; } #lr-detached-overrides { position: fixed; inset: 0 auto auto 0; z-index: 2147483645; pointer-events: none; } #lr-detached-overrides .lr-detached-field { position: fixed; margin: 0; padding: 0; p`.
- [L151](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L151) `style.id = 'lr-panel-control-style-v217'`.
- [L152](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L152) `style.textContent = ' #lr-config-toggle { display: none !important; } #label { transform: scale(1.45) !important; transform-origin: top left !important; } #label-regenerator-overlay { pointer-events: auto !important; } html.lr-edit-mode .lr-block { pointer-events: auto !important; cursor: pointer !i`.
- [L294](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L294) `root.id = 'lr-detached-overrides'`.
- [L309](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L309) `field.className = 'lr-detached-field'`.
- [L365](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L365) `field.style.left = '${pos.left}px'`.
- [L366](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L366) `field.style.top = '${pos.top}px'`.
- [L367](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L367) `input.style.width = '${pos.width}px'`.
- [L368](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L368) `input.style.height = '${Math.max(18, pos.height)}px'`.
- [L385](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L385) `probe.style.position = 'absolute'`.
- [L386](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L386) `probe.style.visibility = 'hidden'`.
- [L387](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L387) `probe.style.width = '100mm'`.
- [L388](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L388) `probe.style.height = '1mm'`.
- [L407](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L407) `data.style.position = 'relative'`.
- [L408](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L408) `data.style.height = '46mm'`.
- [L409](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L409) `data.style.marginBottom = '0'`.
- [L410](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L410) `data.style.overflow = 'visible'`.
- [L411](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L411) `info.style.marginBottom = '0.6mm'`.
- [L412](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L412) `obj.style.position = 'absolute'`.
- [L413](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L413) `obj.style.left = '0'`.
- [L414](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L414) `obj.style.right = '0'`.
- [L415](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L415) `obj.style.bottom = '0'`.
- [L416](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L416) `obj.style.width = '60mm'`.
- [L417](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L417) `obj.style.boxSizing = 'border-box'`.
- [L418](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L418) `obj.style.display = 'flex'`.
- [L419](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L419) `obj.style.alignItems = 'center'`.
- [L420](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L420) `obj.style.justifyContent = 'center'`.
- [L421](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L421) `obj.style.paddingTop = '0'`.
- [L422](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L422) `obj.style.lineHeight = '1'`.
- [L431](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L431) `obj.style.height = '${finalHeight}px'`.
- [L432](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L432) `obj.style.minHeight = '0'`.
- [L452](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L452) `printButton.textContent = 'Print'`.
- [L453](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L453) `editButton.textContent = 'Edit'`.
- [L729](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L729) `window.labelRegeneratorRefresh = function () { if (!refreshing) applyOverrideValues(); const result = originalRefresh.apply(this, arguments); scheduleStabilize(); return result; }`.
- [L739](https://github.com/denkz0ne/moduly-FC-userscripts/blob/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js#L739) `window.labelRegeneratorSetZone = function (zoneName, value) { const zone = findZone(zoneName); const result = originalSetZone.apply(this, arguments); if (zone) { zoneKeys(zone).forEach((key) => { baselines[key] = value == null ? '' : String(value); }); if (String(overrides[zone.key] || '').trim()) r`.
