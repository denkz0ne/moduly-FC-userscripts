# detectors/detector_api.js

Zdroj: detectors/detector_api.js; referencia: 75087f8c4cbd34190e69318038bda6ef36eee0f2.
SHA-256: `59a0ff9d2f15e2f5bb55d048f58d7358ad3f4db7df0dc374c5c2f09abc25b774`. Riadkov: 425.

AST inventár: obsahuje aj vnorené/anonýmne funkcie a lokálne premenné. Zoznam premenných nie je zoznam editovateľných nastavení. Volania sú klasifikované podľa názvu; dynamické aliasy môžu vyžadovať ručné dohľadanie. Historické @require hlavičky v načítanom JS nie sú ďalším automaticky spusteným @require reťazcom.

## Metadata

```json
{}
```

## Funkcie a signatúry

- [L1–425](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L1) `<anonymous@1>()`; scope `root`.
- [L9–11](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L9) `clean(text)`; scope `<anonymous@1>`.
- [L13–18](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L13) `normalizeKey(text)`; scope `<anonymous@1>`.
- [L20–25](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L20) `sanitizeToken(value)`; scope `<anonymous@1>`.
- [L27–32](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L27) `sanitizeSnakeToken(value)`; scope `<anonymous@1>`.
- [L34–37](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L34) `getCurrentVpFromUrl()`; scope `<anonymous@1>`.
- [L39–68](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L39) `getDefaultMaterialAliasMap()`; scope `<anonymous@1>`.
- [L70–88](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L70) `loadMaterialAliasConfig()`; scope `<anonymous@1>`.
- [L78–82](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L78) `<anonymous@78>([key, value])`; scope `<anonymous@1>/loadMaterialAliasConfig`.
- [L90–99](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L90) `saveMaterialAliasConfig(config)`; scope `<anonymous@1>`.
- [L92–96](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L92) `<anonymous@92>([key, value])`; scope `<anonymous@1>/saveMaterialAliasConfig`.
- [L101–109](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L101) `setMaterialAlias(materialLabel, alias)`; scope `<anonymous@1>`.
- [L111–118](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L111) `clearMaterialAlias(materialLabel)`; scope `<anonymous@1>`.
- [L120–130](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L120) `resolveMaterialAlias(materialText)`; scope `<anonymous@1>`.
- [L132–134](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L132) `getDefaultPanelConfig()`; scope `<anonymous@1>`.
- [L136–141](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L136) `normalizePanelConfig(config)`; scope `<anonymous@1>`.
- [L143–152](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L143) `loadPanelConfig()`; scope `<anonymous@1>`.
- [L154–158](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L154) `savePanelConfig(config)`; scope `<anonymous@1>`.
- [L160–165](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L160) `getDetectorSettings(detectorId)`; scope `<anonymous@1>`.
- [L167–173](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L167) `saveDetectorSettings(detectorId, settings)`; scope `<anonymous@1>`.
- [L175–195](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L175) `normalizeTemplateBlocks(template)`; scope `<anonymous@1>`.
- [L178–181](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L178) `<anonymous@178>(block)`; scope `<anonymous@1>/normalizeTemplateBlocks`.
- [L181–181](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L181) `<anonymous@181>(block)`; scope `<anonymous@1>/normalizeTemplateBlocks`.
- [L194–194](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L194) `<anonymous@194>(block)`; scope `<anonymous@1>/normalizeTemplateBlocks`.
- [L197–199](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L197) `templateToPattern(template)`; scope `<anonymous@1>`.
- [L198–198](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L198) `<anonymous@198>(block)`; scope `<anonymous@1>/templateToPattern`.
- [L201–206](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L201) `renderTemplate(template, tokens)`; scope `<anonymous@1>`.
- [L202–205](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L202) `<anonymous@202>(block)`; scope `<anonymous@1>/renderTemplate`.
- [L208–214](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L208) `exposeAliasHelpers()`; scope `<anonymous@1>`.
- [L209–209](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L209) `window.__getMaterialAliasConfig()`; scope `<anonymous@1>/exposeAliasHelpers`.
- [L212–212](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L212) `window.__getMaterialDetectorPanelConfig()`; scope `<anonymous@1>/exposeAliasHelpers`.
- [L213–213](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L213) `window.__setMaterialDetectorPanelConfig(config)`; scope `<anonymous@1>/exposeAliasHelpers`.
- [L216–225](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L216) `extractKnownProductCode(text)`; scope `<anonymous@1>`.
- [L227–234](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L227) `getProductCodeFromPriceRows()`; scope `<anonymous@1>`.
- [L236–247](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L236) `collectPageContext()`; scope `<anonymous@1>`.
- [L238–238](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L238) `<anonymous@238>(tr)`; scope `<anonymous@1>/collectPageContext`.
- [L240–240](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L240) `<anonymous@240>(el)`; scope `<anonymous@1>/collectPageContext`.
- [L249–257](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L249) `extractValuesFromParamRow(valueCell)`; scope `<anonymous@1>`.
- [L252–252](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L252) `<anonymous@252>(el)`; scope `<anonymous@1>/extractValuesFromParamRow`.
- [L259–262](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L259) `getZdParamRows(root)`; scope `<anonymous@1>`.
- [L261–261](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L261) `<anonymous@261>(row)`; scope `<anonymous@1>/getZdParamRows`.
- [L264–279](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L264) `parseZdParams()`; scope `<anonymous@1>`.
- [L268–277](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L268) `<anonymous@268>(row)`; scope `<anonymous@1>/parseZdParams`.
- [L281–287](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L281) `getParamValueByLabelContains(params, patterns)`; scope `<anonymous@1>`.
- [L284–284](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L284) `<anonymous@284>(pattern)`; scope `<anonymous@1>/getParamValueByLabelContains`.
- [L289–292](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L289) `getAllParamValues(params)`; scope `<anonymous@1>`.
- [L291–291](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L291) `<anonymous@291>(item)`; scope `<anonymous@1>/getAllParamValues`.
- [L291–291](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L291) `<anonymous@291>(v)`; scope `<anonymous@1>/getAllParamValues`.
- [L294–300](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L294) `toCleanNumber(value)`; scope `<anonymous@1>`.
- [L302–307](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L302) `normalizeCmOutput(w, h)`; scope `<anonymous@1>`.
- [L309–325](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L309) `parseSizeAlias(text)`; scope `<anonymous@1>`.
- [L327–329](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L327) `stripSizeUnitSuffix(sizeAlias)`; scope `<anonymous@1>`.
- [L331–360](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L331) `detectUniversalSizeAlias()`; scope `<anonymous@1>`.
- [L336–347](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L336) `<anonymous@336>(row)`; scope `<anonymous@1>/detectUniversalSizeAlias`.
- [L362–365](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L362) `hasGiftPack(detailInfo)`; scope `<anonymous@1>`.
- [L367–372](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L367) `hasCanvasSelected(detailInfo)`; scope `<anonymous@1>`.
- [L374–378](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L374) `detectorMatches(detector, internalCode, context)`; scope `<anonymous@1>`.
- [L380–386](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L380) `registerDetector(detector)`; scope `<anonymous@1>`.
- [L417–417](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L417) `getDetectors()`; scope `<anonymous@1>`.
- [L418–418](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L418) `findDetector(internalCode, context)`; scope `<anonymous@1>`.
- [L418–418](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L418) `<anonymous@418>(detector)`; scope `<anonymous@1>/findDetector`.

## Premenné a pôvodné inicializátory

Dlhé inicializátory sú tu skrátené na 300 znakov; úplné znenie je v inventory.json a v zdroji.

- [L4](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L4) `const MATERIAL_ALIAS_STORAGE_KEY = 'materialDetector.materialAliases.v1'`; scope `<anonymous@1>`.
- [L5](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L5) `const PANEL_CONFIG_STORAGE_KEY = 'materialDetector.panelConfig.v1'`; scope `<anonymous@1>`.
- [L6](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L6) `const LAST_SIZE_ALIAS_STORAGE_PREFIX = 'materialDetector.lastSizeAlias:'`; scope `<anonymous@1>`.
- [L7](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L7) `const detectors = []`; scope `<anonymous@1>`.
- [L35](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L35) `const match = location.pathname.match(/\/index\/(\d+)/)`; scope `<anonymous@1>/getCurrentVpFromUrl`.
- [L40](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L40) `const map = {}`; scope `<anonymous@1>/getDefaultMaterialAliasMap`.
- [L71](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L71) `const defaults = getDefaultMaterialAliasMap()`; scope `<anonymous@1>/loadMaterialAliasConfig`.
- [L73](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L73) `const raw = localStorage.getItem(MATERIAL_ALIAS_STORAGE_KEY)`; scope `<anonymous@1>/loadMaterialAliasConfig`.
- [L75](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L75) `const parsed = JSON.parse(raw)`; scope `<anonymous@1>/loadMaterialAliasConfig`.
- [L77](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L77) `const custom = {}`; scope `<anonymous@1>/loadMaterialAliasConfig`.
- [L79](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L79) `const normKey = normalizeKey(key)`; scope `<anonymous@1>/loadMaterialAliasConfig/<anonymous@78>`.
- [L80](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L80) `const alias = String(value || '').trim()`; scope `<anonymous@1>/loadMaterialAliasConfig/<anonymous@78>`.
- [L91](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L91) `const normalized = {}`; scope `<anonymous@1>/saveMaterialAliasConfig`.
- [L93](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L93) `const normKey = normalizeKey(key)`; scope `<anonymous@1>/saveMaterialAliasConfig/<anonymous@92>`.
- [L94](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L94) `const alias = String(value || '').trim()`; scope `<anonymous@1>/saveMaterialAliasConfig/<anonymous@92>`.
- [L102](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L102) `const key = normalizeKey(materialLabel)`; scope `<anonymous@1>/setMaterialAlias`.
- [L103](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L103) `const value = String(alias || '').trim()`; scope `<anonymous@1>/setMaterialAlias`.
- [L105](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L105) `const current = loadMaterialAliasConfig()`; scope `<anonymous@1>/setMaterialAlias`.
- [L112](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L112) `const key = normalizeKey(materialLabel)`; scope `<anonymous@1>/clearMaterialAlias`.
- [L114](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L114) `const current = loadMaterialAliasConfig()`; scope `<anonymous@1>/clearMaterialAlias`.
- [L121](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L121) `const cleanText = clean(materialText)`; scope `<anonymous@1>/resolveMaterialAlias`.
- [L123](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L123) `const config = loadMaterialAliasConfig()`; scope `<anonymous@1>/resolveMaterialAlias`.
- [L124](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L124) `const normalized = normalizeKey(cleanText)`; scope `<anonymous@1>/resolveMaterialAlias`.
- [L126](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L126) `const [key, alias] = <bez inicializátora>`; scope `<anonymous@1>/resolveMaterialAlias`.
- [L137](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L137) `const base = getDefaultPanelConfig()`; scope `<anonymous@1>/normalizePanelConfig`.
- [L139](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L139) `const detectorsConfig = config.detectors && typeof config.detectors === 'object' ? config.detectors : {}`; scope `<anonymous@1>/normalizePanelConfig`.
- [L145](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L145) `const raw = localStorage.getItem(PANEL_CONFIG_STORAGE_KEY)`; scope `<anonymous@1>/loadPanelConfig`.
- [L155](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L155) `const normalized = normalizePanelConfig(config)`; scope `<anonymous@1>/savePanelConfig`.
- [L161](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L161) `const id = String(detectorId || '')`; scope `<anonymous@1>/getDetectorSettings`.
- [L162](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L162) `const config = loadPanelConfig()`; scope `<anonymous@1>/getDetectorSettings`.
- [L163](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L163) `const settings = config.detectors[id]`; scope `<anonymous@1>/getDetectorSettings`.
- [L168](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L168) `const id = String(detectorId || '')`; scope `<anonymous@1>/saveDetectorSettings`.
- [L170](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L170) `const config = loadPanelConfig()`; scope `<anonymous@1>/saveDetectorSettings`.
- [L183](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L183) `const text = String(template || '')`; scope `<anonymous@1>/normalizeTemplateBlocks`.
- [L184](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L184) `const blocks = []`; scope `<anonymous@1>/normalizeTemplateBlocks`.
- [L185](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L185) `const re = /\{([a-zA-Z0-9_]+)\}/g`; scope `<anonymous@1>/normalizeTemplateBlocks`.
- [L186](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L186) `let last = 0`; scope `<anonymous@1>/normalizeTemplateBlocks`.
- [L187](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L187) `let match = <bez inicializátora>`; scope `<anonymous@1>/normalizeTemplateBlocks`.
- [L217](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L217) `const normalized = normalizeKey(text)`; scope `<anonymous@1>/extractKnownProductCode`.
- [L218](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L218) `const zd = normalized.match(/\b(49ban|68bs|67mf|49s)\b/i)`; scope `<anonymous@1>/extractKnownProductCode`.
- [L220](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L220) `const photo = normalized.match(/\b(48fh\d{4,6}|48rp\d{4,6}|48r\d{4,6}|48xk|48x[146])\b/i)`; scope `<anonymous@1>/extractKnownProductCode`.
- [L228](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L228) `const rows = document.querySelectorAll("tr[title='ceny bez DPH']")`; scope `<anonymous@1>/getProductCodeFromPriceRows`.
- [L229](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L229) `const row = <bez inicializátora>`; scope `<anonymous@1>/getProductCodeFromPriceRows`.
- [L230](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L230) `const code = extractKnownProductCode(row.textContent || row.innerText || '')`; scope `<anonymous@1>/getProductCodeFromPriceRows`.
- [L237](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L237) `const detailInfo = document.querySelector('#vpDetailInfo') || document`; scope `<anonymous@1>/collectPageContext`.
- [L238](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L238) `const rowTexts = Array.from(document.querySelectorAll('tr')).map(tr => tr.textContent || '')`; scope `<anonymous@1>/collectPageContext`.
- [L239](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L239) `const formTexts = Array.from(detailInfo.querySelectorAll('input, select, textarea, option, label, p, span, div')) .map(el => (el.textContent || el.value || '').trim()) .filter(Boolean)`; scope `<anonymous@1>/collectPageContext`.
- [L242](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L242) `const productText = [document.querySelector('h1, h2')?.textContent || '', ...rowTexts, ...formTexts].join(' ')`; scope `<anonymous@1>/collectPageContext`.
- [L243](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L243) `const priceCode = getProductCodeFromPriceRows()`; scope `<anonymous@1>/collectPageContext`.
- [L244](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L244) `const productCode = extractKnownProductCode(productText)`; scope `<anonymous@1>/collectPageContext`.
- [L245](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L245) `const internalCode = productCode || priceCode`; scope `<anonymous@1>/collectPageContext`.
- [L251](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L251) `const chunks = Array.from(valueCell.querySelectorAll('.whitespace-pre-line')) .map(el => clean(el.textContent || '')) .filter(Boolean)`; scope `<anonymous@1>/extractValuesFromParamRow`.
- [L255](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L255) `const fallback = clean(valueCell.textContent || '')`; scope `<anonymous@1>/extractValuesFromParamRow`.
- [L260](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L260) `const rows = Array.from(root.querySelectorAll(':scope > div.flex'))`; scope `<anonymous@1>/getZdParamRows`.
- [L265](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L265) `const root = document.querySelector('#zd-form-container #VPZDParams')`; scope `<anonymous@1>/parseZdParams`.
- [L267](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L267) `const params = {}`; scope `<anonymous@1>/parseZdParams`.
- [L269](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L269) `const cells = row.querySelectorAll(':scope > div')`; scope `<anonymous@1>/parseZdParams/<anonymous@268>`.
- [L271](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L271) `const rawLabel = clean(cells[0].textContent || '')`; scope `<anonymous@1>/parseZdParams/<anonymous@268>`.
- [L272](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L272) `const normLabel = normalizeKey(rawLabel)`; scope `<anonymous@1>/parseZdParams/<anonymous@268>`.
- [L274](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L274) `const values = extractValuesFromParamRow(cells[1])`; scope `<anonymous@1>/parseZdParams/<anonymous@268>`.
- [L283](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L283) `const [key, item] = <bez inicializátora>`; scope `<anonymous@1>/getParamValueByLabelContains`.
- [L296](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L296) `const n = Number(String(value).replace(',', '.'))`; scope `<anonymous@1>/toCleanNumber`.
- [L303](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L303) `const a = toCleanNumber(w)`; scope `<anonymous@1>/normalizeCmOutput`.
- [L304](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L304) `const b = toCleanNumber(h)`; scope `<anonymous@1>/normalizeCmOutput`.
- [L310](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L310) `const raw = clean(text).replace(/\u00d7/g, 'x').replace(/,/g, '.')`; scope `<anonymous@1>/parseSizeAlias`.
- [L312](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L312) `const aMatch = raw.match(/\bA\s*([0-9]{1,2})\b/i)`; scope `<anonymous@1>/parseSizeAlias`.
- [L314](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L314) `const mm = raw.match(/(\d{2,4}(?:\.\d+)?)\s*x\s*(\d{2,4}(?:\.\d+)?)\s*mm\b/i)`; scope `<anonymous@1>/parseSizeAlias`.
- [L316](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L316) `const cm = raw.match(/(\d{1,4}(?:\.\d+)?)\s*x\s*(\d{1,4}(?:\.\d+)?)\s*cm\b/i)`; scope `<anonymous@1>/parseSizeAlias`.
- [L318](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L318) `const any = raw.match(/(\d{1,4}(?:\.\d+)?)\s*x\s*(\d{1,4}(?:\.\d+)?)/i)`; scope `<anonymous@1>/parseSizeAlias`.
- [L320](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L320) `const w = Number(any[1])`; scope `<anonymous@1>/parseSizeAlias`.
- [L321](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L321) `const h = Number(any[2])`; scope `<anonymous@1>/parseSizeAlias`.
- [L332](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L332) `const root = document.querySelector('#zd-form-container #VPZDParams')`; scope `<anonymous@1>/detectUniversalSizeAlias`.
- [L334](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L334) `const rows = Array.from(root.querySelectorAll(':scope > div.flex'))`; scope `<anonymous@1>/detectUniversalSizeAlias`.
- [L335](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L335) `const candidates = []`; scope `<anonymous@1>/detectUniversalSizeAlias`.
- [L337](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L337) `const cols = row.querySelectorAll(':scope > div')`; scope `<anonymous@1>/detectUniversalSizeAlias/<anonymous@336>`.
- [L339](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L339) `const label = normalizeKey(cols[0].textContent || '')`; scope `<anonymous@1>/detectUniversalSizeAlias/<anonymous@336>`.
- [L340](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L340) `const value = clean(cols[1].textContent || '')`; scope `<anonymous@1>/detectUniversalSizeAlias/<anonymous@336>`.
- [L348](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L348) `const candidate = <bez inicializátora>`; scope `<anonymous@1>/detectUniversalSizeAlias`.
- [L349](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L349) `const alias = parseSizeAlias(candidate)`; scope `<anonymous@1>/detectUniversalSizeAlias`.
- [L354](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L354) `const inputs = Array.from((document.querySelector('#vpDetailInfo') || document).querySelectorAll('input[disabled], input:not([type="hidden"]), select[disabled]'))`; scope `<anonymous@1>/detectUniversalSizeAlias`.
- [L355](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L355) `const el = <bez inicializátora>`; scope `<anonymous@1>/detectUniversalSizeAlias`.
- [L356](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L356) `const alias = parseSizeAlias(el.value || el.textContent || '')`; scope `<anonymous@1>/detectUniversalSizeAlias`.
- [L363](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L363) `const select = detailInfo.querySelector("select[name='FO_GIFT_PACK']")`; scope `<anonymous@1>/hasGiftPack`.
- [L368](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L368) `const select = detailInfo.querySelector("select[name='FO_CANVAS']")`; scope `<anonymous@1>/hasCanvasSelected`.
- [L370](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L370) `const opt = select.options[select.selectedIndex]`; scope `<anonymous@1>/hasCanvasSelected`.
- [L388](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L388) `const api = { clean, normalizeKey, sanitizeToken, sanitizeSnakeToken, getCurrentVpFromUrl, collectPageContext, parseZdParams, getParamValueByLabelContains, getAllParamValues, loadMaterialAliasConfig, saveMaterialAliasConfig, setMaterialAlias, clearMaterialAlias, resolveMaterialAlias, exposeAliasHelp`; scope `<anonymous@1>`.

## storage

- [L1](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L1) `function () { 'use strict'; const MATERIAL_ALIAS_STORAGE_KEY = 'materialDetector.materialAliases.v1'; const PANEL_CONFIG_STORAGE_KEY = 'materialDetector.panelConfig.v1'; const LAST_SIZE_ALIAS_STORAGE_PREFIX = 'materialDetector.lastSizeAlias:'; const detectors = []; function clean(text) { return Stri`; scope `root`.
- [L73](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L73) `localStorage.getItem(MATERIAL_ALIAS_STORAGE_KEY)`; scope `<anonymous@1>/loadMaterialAliasConfig`.
- [L97](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L97) `localStorage.setItem(MATERIAL_ALIAS_STORAGE_KEY, JSON.stringify(normalized))`; scope `<anonymous@1>/saveMaterialAliasConfig`.
- [L145](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L145) `localStorage.getItem(PANEL_CONFIG_STORAGE_KEY)`; scope `<anonymous@1>/loadPanelConfig`.
- [L156](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L156) `localStorage.setItem(PANEL_CONFIG_STORAGE_KEY, JSON.stringify(normalized))`; scope `<anonymous@1>/savePanelConfig`.

## events

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## lifecycle

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## io

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## dom-read

- [L1](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L1) `function () { 'use strict'; const MATERIAL_ALIAS_STORAGE_KEY = 'materialDetector.materialAliases.v1'; const PANEL_CONFIG_STORAGE_KEY = 'materialDetector.panelConfig.v1'; const LAST_SIZE_ALIAS_STORAGE_PREFIX = 'materialDetector.lastSizeAlias:'; const detectors = []; function clean(text) { return Stri`; scope `root`.
- [L228](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L228) `document.querySelectorAll("tr[title='ceny bez DPH']")`; scope `<anonymous@1>/getProductCodeFromPriceRows`.
- [L237](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L237) `document.querySelector('#vpDetailInfo')`; scope `<anonymous@1>/collectPageContext`.
- [L238](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L238) `Array.from(document.querySelectorAll('tr')).map(tr => tr.textContent || '')`; scope `<anonymous@1>/collectPageContext`.
- [L238](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L238) `document.querySelectorAll('tr')`; scope `<anonymous@1>/collectPageContext`.
- [L239](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L239) `Array.from(detailInfo.querySelectorAll('input, select, textarea, option, label, p, span, div')) .map(el => (el.textContent || el.value || '').trim()) .filter(Boolean)`; scope `<anonymous@1>/collectPageContext`.
- [L239](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L239) `Array.from(detailInfo.querySelectorAll('input, select, textarea, option, label, p, span, div')) .map(el => (el.textContent || el.value || '').trim())`; scope `<anonymous@1>/collectPageContext`.
- [L239](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L239) `detailInfo.querySelectorAll('input, select, textarea, option, label, p, span, div')`; scope `<anonymous@1>/collectPageContext`.
- [L242](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L242) `[document.querySelector('h1, h2')?.textContent || '', ...rowTexts, ...formTexts].join(' ')`; scope `<anonymous@1>/collectPageContext`.
- [L242](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L242) `document.querySelector('h1, h2')`; scope `<anonymous@1>/collectPageContext`.
- [L251](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L251) `Array.from(valueCell.querySelectorAll('.whitespace-pre-line')) .map(el => clean(el.textContent || '')) .filter(Boolean)`; scope `<anonymous@1>/extractValuesFromParamRow`.
- [L251](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L251) `Array.from(valueCell.querySelectorAll('.whitespace-pre-line')) .map(el => clean(el.textContent || ''))`; scope `<anonymous@1>/extractValuesFromParamRow`.
- [L251](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L251) `valueCell.querySelectorAll('.whitespace-pre-line')`; scope `<anonymous@1>/extractValuesFromParamRow`.
- [L260](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L260) `root.querySelectorAll(':scope > div.flex')`; scope `<anonymous@1>/getZdParamRows`.
- [L261](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L261) `row.querySelectorAll(':scope > div')`; scope `<anonymous@1>/getZdParamRows/<anonymous@261>`.
- [L265](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L265) `document.querySelector('#zd-form-container #VPZDParams')`; scope `<anonymous@1>/parseZdParams`.
- [L269](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L269) `row.querySelectorAll(':scope > div')`; scope `<anonymous@1>/parseZdParams/<anonymous@268>`.
- [L332](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L332) `document.querySelector('#zd-form-container #VPZDParams')`; scope `<anonymous@1>/detectUniversalSizeAlias`.
- [L334](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L334) `root.querySelectorAll(':scope > div.flex')`; scope `<anonymous@1>/detectUniversalSizeAlias`.
- [L337](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L337) `row.querySelectorAll(':scope > div')`; scope `<anonymous@1>/detectUniversalSizeAlias/<anonymous@336>`.
- [L354](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L354) `(document.querySelector('#vpDetailInfo') || document).querySelectorAll('input[disabled], input:not([type="hidden"]), select[disabled]')`; scope `<anonymous@1>/detectUniversalSizeAlias`.
- [L354](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L354) `document.querySelector('#vpDetailInfo')`; scope `<anonymous@1>/detectUniversalSizeAlias`.
- [L363](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L363) `detailInfo.querySelector("select[name='FO_GIFT_PACK']")`; scope `<anonymous@1>/hasGiftPack`.
- [L368](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L368) `detailInfo.querySelector("select[name='FO_CANVAS']")`; scope `<anonymous@1>/hasCanvasSelected`.

## dom-write

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## logs

- [L1](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L1) `function () { 'use strict'; const MATERIAL_ALIAS_STORAGE_KEY = 'materialDetector.materialAliases.v1'; const PANEL_CONFIG_STORAGE_KEY = 'materialDetector.panelConfig.v1'; const LAST_SIZE_ALIAS_STORAGE_PREFIX = 'materialDetector.lastSizeAlias:'; const detectors = []; function clean(text) { return Stri`; scope `root`.
- [L85](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L85) `console.warn('[materialDetector] alias config load failed', e)`; scope `<anonymous@1>/loadMaterialAliasConfig`.
- [L149](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L149) `console.warn('[materialDetector] panel config load failed', e)`; scope `<anonymous@1>/loadPanelConfig`.
- [L382](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L382) `console.warn('[materialDetector] invalid detector registration', detector)`; scope `<anonymous@1>/registerDetector`.

## Zápisy do globálov, DOM a ostatných vlastností

- [L209](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L209) `window.__getMaterialAliasConfig = function () { return loadMaterialAliasConfig(); }`.
- [L210](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L210) `window.__setMaterialAlias = setMaterialAlias`.
- [L211](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L211) `window.__clearMaterialAlias = clearMaterialAlias`.
- [L212](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L212) `window.__getMaterialDetectorPanelConfig = function () { return loadPanelConfig(); }`.
- [L213](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L213) `window.__setMaterialDetectorPanelConfig = function (config) { return savePanelConfig(config); }`.
- [L424](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_api.js#L424) `window.MaterialDetectorAPI = api`.
