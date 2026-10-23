# materialDetector

Zdroj: materialDetector.user.js; referencia: 75087f8c4cbd34190e69318038bda6ef36eee0f2.
SHA-256: `d726c08ef82b8ff2a82998292b6b4df3f1709de6ed5951b1c5dffc342294548e`. Riadkov: 591.

AST inventár: obsahuje aj vnorené/anonýmne funkcie a lokálne premenné. Zoznam premenných nie je zoznam editovateľných nastavení. Volania sú klasifikované podľa názvu; dynamické aliasy môžu vyžadovať ručné dohľadanie. Historické @require hlavičky v načítanom JS nie sú ďalším automaticky spusteným @require reťazcom.

## Metadata

```json
{
  "name": [
    "materialDetector"
  ],
  "namespace": [
    "https://moduly.faxcopy.sk/"
  ],
  "author": [
    "mato e."
  ],
  "version": [
    "5.3.7-core"
  ],
  "description": [
    "Material detector core router + modular internal-code detectors."
  ],
  "updateURL": [
    "https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/materialDetector.user.js"
  ],
  "downloadURL": [
    "https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/materialDetector.user.js"
  ],
  "match": [
    "https://moduly.faxcopy.sk/vyrobne_prikazy/detail/index/*"
  ],
  "grant": [
    "GM_download"
  ],
  "require": [
    "https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/main/detectors/detector_api.js",
    "https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/main/detectors/detector_fotoobrazy.js",
    "https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/main/detectors/detector_41tv.js",
    "https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/main/detectors/detector_42fotoweb.js",
    "https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/main/detectors/detector_67mf.js",
    "https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/main/detectors/detector_67spz.js",
    "https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/main/detectors/detector_68bs.js",
    "https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/main/detectors/detector_49ban.js",
    "https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/main/detectors/detector_49s.js",
    "https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/main/detectors/control_panel.js"
  ],
  "run-at": [
    "document-start"
  ]
}
```

## Funkcie a signatúry

- [L25–590](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L25) `<anonymous@25>()`; scope `root`.
- [L50–52](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L50) `getCurrentVp()`; scope `<anonymous@25>`.
- [L54–56](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L54) `stateKey(vp)`; scope `<anonymous@25>`.
- [L58–60](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L58) `hasTemplate(template)`; scope `<anonymous@25>`.
- [L62–66](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L62) `ensureQuantitySuffix(value)`; scope `<anonymous@25>`.
- [L68–70](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L68) `getResultParams(result)`; scope `<anonymous@25>`.
- [L72–95](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L72) `buildTemplateTokens(result, context, extra = {})`; scope `<anonymous@25>`.
- [L97–136](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L97) `applyPanelSettings(result, context)`; scope `<anonymous@25>`.
- [L138–171](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L138) `setPerTabState(result, context)`; scope `<anonymous@25>`.
- [L173–188](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L173) `getPerTabState()`; scope `<anonymous@25>`.
- [L190–198](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L190) `setZoneValue(key, value)`; scope `<anonymous@25>`.
- [L200–205](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L200) `writeZones(zones)`; scope `<anonymous@25>`.
- [L207–214](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L207) `detectExpeditionDate()`; scope `<anonymous@25>`.
- [L216–228](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L216) `runCurrentDetector(context)`; scope `<anonymous@25>`.
- [L230–256](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L230) `detectCurrentLabel()`; scope `<anonymous@25>`.
- [L258–341](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L258) `showDetailBadges(zones)`; scope `<anonymous@25>`.
- [L267–267](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L267) `<anonymous@267>(value)`; scope `<anonymous@25>/showDetailBadges`.
- [L314–335](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L314) `<anonymous@314>(zone)`; scope `<anonymous@25>/showDetailBadges`.
- [L318–318](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L318) `<anonymous@318>(node)`; scope `<anonymous@25>/showDetailBadges/<anonymous@314>`.
- [L337–339](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L337) `<anonymous@337>(badge)`; scope `<anonymous@25>/showDetailBadges`.
- [L343–359](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L343) `updateSession(force = false)`; scope `<anonymous@25>`.
- [L361–365](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L361) `forceRefreshSessionBurst()`; scope `<anonymous@25>`.
- [L364–364](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L364) `<anonymous@364>(delay)`; scope `<anonymous@25>/forceRefreshSessionBurst`.
- [L364–364](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L364) `<anonymous@364>()`; scope `<anonymous@25>/forceRefreshSessionBurst/<anonymous@364>`.
- [L367–370](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L367) `bootstrapRetries()`; scope `<anonymous@25>`.
- [L369–369](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L369) `<anonymous@369>(delay)`; scope `<anonymous@25>/bootstrapRetries`.
- [L372–377](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L372) `startDomObserver()`; scope `<anonymous@25>`.
- [L375–375](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L375) `<anonymous@375>()`; scope `<anonymous@25>/startDomObserver`.
- [L379–391](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L379) `ensureObserverWhenBodyExists()`; scope `<anonymous@25>`.
- [L384–389](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L384) `<anonymous@384>()`; scope `<anonymous@25>/ensureObserverWhenBodyExists`.
- [L393–395](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L393) `stripSizeUnitSuffix(sizeAlias)`; scope `<anonymous@25>`.
- [L397–402](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L397) `getRenameConfig()`; scope `<anonymous@25>`.
- [L404–414](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L404) `extractFilenameFromHref(href)`; scope `<anonymous@25>`.
- [L416–440](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L416) `buildRenameTokens(originalHref, state, rename)`; scope `<anonymous@25>`.
- [L434–438](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L434) `<anonymous@434>([key, value])`; scope `<anonymous@25>/buildRenameTokens`.
- [L442–453](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L442) `applyRenamePattern(pattern, tokens)`; scope `<anonymous@25>`.
- [L455–460](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L455) `buildNewFileName(originalHref)`; scope `<anonymous@25>`.
- [L462–467](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L462) `hasDownloadFileHref(href)`; scope `<anonymous@25>`.
- [L469–479](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L469) `isDownloadCandidate(anchor)`; scope `<anonymous@25>`.
- [L481–483](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L481) `shouldRenameForCurrentOrder()`; scope `<anonymous@25>`.
- [L485–495](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L485) `browserDownload(url, fileName)`; scope `<anonymous@25>`.
- [L494–494](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L494) `<anonymous@494>()`; scope `<anonymous@25>/browserDownload`.
- [L497–504](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L497) `async blobDownload(url, fileName)`; scope `<anonymous@25>`.
- [L503–503](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L503) `<anonymous@503>()`; scope `<anonymous@25>/blobDownload`.
- [L506–535](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L506) `gmDownload(url, fileName)`; scope `<anonymous@25>`.
- [L516–519](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L516) `onerror(error)`; scope `<anonymous@25>/gmDownload`.
- [L520–523](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L520) `ontimeout(error)`; scope `<anonymous@25>/gmDownload`.
- [L526–529](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L526) `<anonymous@526>(error)`; scope `<anonymous@25>/gmDownload`.
- [L537–542](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L537) `startDownload(url, fileName)`; scope `<anonymous@25>`.
- [L538–541](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L538) `<anonymous@538>(error)`; scope `<anonymous@25>/startDownload`.
- [L544–559](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L544) `initDownloadRename()`; scope `<anonymous@25>`.
- [L547–558](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L547) `<anonymous@547>(event)`; scope `<anonymous@25>/initDownloadRename`.
- [L561–564](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L561) `initControlPanel()`; scope `<anonymous@25>`.
- [L566–587](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L566) `init()`; scope `<anonymous@25>`.
- [L568–568](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L568) `<anonymous@568>(key)`; scope `<anonymous@25>/init`.
- [L580–583](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L580) `<anonymous@580>()`; scope `<anonymous@25>/init`.

## Premenné a pôvodné inicializátory

Dlhé inicializátory sú tu skrátené na 300 znakov; úplné znenie je v inventory.json a v zdroji.

- [L28](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L28) `const api = window.MaterialDetectorAPI`; scope `<anonymous@25>`.
- [L34](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L34) `const STATE_KEY_PREFIX = 'materialDetectorState:'`; scope `<anonymous@25>`.
- [L35](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L35) `const STATE_TTL_MS = 30000`; scope `<anonymous@25>`.
- [L36](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L36) `const LAST_SIZE_ALIAS_STORAGE_PREFIX = api.LAST_SIZE_ALIAS_STORAGE_PREFIX || 'materialDetector.lastSizeAlias:'`; scope `<anonymous@25>`.
- [L37](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L37) `const DEFAULT_RENAME_PATTERN = '{alias}_{size}_{quantity}_{vp} {original}.{ext}'`; scope `<anonymous@25>`.
- [L38](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L38) `const NATIVE_DOWNLOAD_ATTR = 'data-material-detector-native-download'`; scope `<anonymous@25>`.
- [L39](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L39) `const ZONE_KEYS = { left: 'TM_testoLeft', right: 'TM_testoRight', top: 'TM_top', bottom: 'TM_bottom' }`; scope `<anonymous@25>`.
- [L46](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L46) `let lastSnapshot = ''`; scope `<anonymous@25>`.
- [L47](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L47) `let observerStarted = false`; scope `<anonymous@25>`.
- [L48](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L48) `let renameBound = false`; scope `<anonymous@25>`.
- [L63](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L63) `const raw = api.clean(value || '')`; scope `<anonymous@25>/ensureQuantitySuffix`.
- [L73](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L73) `const state = result.state || {}`; scope `<anonymous@25>/buildTemplateTokens`.
- [L74](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L74) `const rename = result.rename || {}`; scope `<anonymous@25>/buildTemplateTokens`.
- [L75](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L75) `const params = getResultParams(result)`; scope `<anonymous@25>/buildTemplateTokens`.
- [L76](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L76) `const sizeAlias = rename.sizeAlias || state.sizeAlias || params.sizeAlias || ''`; scope `<anonymous@25>/buildTemplateTokens`.
- [L77](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L77) `const quantity = ensureQuantitySuffix(rename.quantity || params.quantity || '1ks')`; scope `<anonymous@25>/buildTemplateTokens`.
- [L78](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L78) `const alias = rename.alias || state.outputAlias || result.left || params.alias || ''`; scope `<anonymous@25>/buildTemplateTokens`.
- [L98](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L98) `const detectorId = result.detector || ''`; scope `<anonymous@25>/applyPanelSettings`.
- [L99](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L99) `const settings = api.getDetectorSettings(detectorId)`; scope `<anonymous@25>/applyPanelSettings`.
- [L100](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L100) `const hadCustomSettings = Object.keys(settings).length > 0`; scope `<anonymous@25>/applyPanelSettings`.
- [L101](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L101) `let tokens = buildTemplateTokens(result, context)`; scope `<anonymous@25>/applyPanelSettings`.
- [L139](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L139) `const vp = getCurrentVp()`; scope `<anonymous@25>/setPerTabState`.
- [L140](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L140) `const payload = Object.assign({ vp, detector: result.detector || 'unknown', productCode: context.internalCode || '', outputAlias: (result.rename && result.rename.alias) || result.left || '', sizeAlias: (result.rename && result.rename.sizeAlias) || '', topBadge: result.top || '', bottomBadge: result.`; scope `<anonymous@25>/setPerTabState`.
- [L174](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L174) `const vp = getCurrentVp()`; scope `<anonymous@25>/getPerTabState`.
- [L179](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L179) `const raw = sessionStorage.getItem(stateKey(vp))`; scope `<anonymous@25>/getPerTabState`.
- [L181](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L181) `const parsed = JSON.parse(raw)`; scope `<anonymous@25>/getPerTabState`.
- [L182](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L182) `const updatedTs = new Date(parsed.updatedAt || 0).getTime()`; scope `<anonymous@25>/getPerTabState`.
- [L191](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L191) `const normalized = value == null ? '' : String(value).trim()`; scope `<anonymous@25>/setZoneValue`.
- [L208](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L208) `const el = document.querySelector('#dodacia_lehota_label')`; scope `<anonymous@25>/detectExpeditionDate`.
- [L210](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L210) `const text = api.clean(el.textContent || el.value || '')`; scope `<anonymous@25>/detectExpeditionDate`.
- [L211](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L211) `const match = text.match(/(\d{1,2})\.\s*(\d{1,2})\./)`; scope `<anonymous@25>/detectExpeditionDate`.
- [L217](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L217) `const detector = api.findDetector(context.internalCode, context)`; scope `<anonymous@25>/runCurrentDetector`.
- [L220](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L220) `const result = detector.detect(context, api)`; scope `<anonymous@25>/runCurrentDetector`.
- [L231](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L231) `const context = api.collectPageContext()`; scope `<anonymous@25>/detectCurrentLabel`.
- [L232](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L232) `const result = runCurrentDetector(context)`; scope `<anonymous@25>/detectCurrentLabel`.
- [L233](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L233) `const right = detectExpeditionDate()`; scope `<anonymous@25>/detectCurrentLabel`.
- [L244](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L244) `const state = setPerTabState(result, context)`; scope `<anonymous@25>/detectCurrentLabel`.
- [L260](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L260) `const orderContent = document.querySelector('#vpOrderDetail')`; scope `<anonymous@25>/showDetailBadges`.
- [L261](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L261) `const h = orderContent && orderContent.closest('.box') ? orderContent.closest('.box').querySelector('.box-head h2') : document.querySelector('h1, h2')`; scope `<anonymous@25>/showDetailBadges`.
- [L266](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L266) `let row = document.querySelector('#material-detector-summary-row')`; scope `<anonymous@25>/showDetailBadges`.
- [L267](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L267) `const hasValues = Object.values(zones).some(value => String(value ?? '').trim())`; scope `<anonymous@25>/showDetailBadges`.
- [L291](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L291) `const orderBox = orderContent && orderContent.closest('.box.grid_6.detail')`; scope `<anonymous@25>/showDetailBadges`.
- [L292](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L292) `const vpContent = document.querySelector('#vpVpDetail')`; scope `<anonymous@25>/showDetailBadges`.
- [L293](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L293) `const vpBox = vpContent && vpContent.closest('.box.grid_6.statuses')`; scope `<anonymous@25>/showDetailBadges`.
- [L294](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L294) `const sharedParent = orderBox && vpBox && orderBox.parentElement === vpBox.parentElement ? orderBox.parentElement : null`; scope `<anonymous@25>/showDetailBadges`.
- [L305](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L305) `const knownBadges = { left: { id: 'shortcut-info-label', style: 'background:#fffa65;color:#000;padding:4px 8px;border-radius:4px;font-weight:bold;display:inline-block;' }, right: { id: 'shortcut-info-date', style: 'background:#d0ffb3;color:#000;padding:4px 8px;border-radius:4px;font-weight:bold;disp`; scope `<anonymous@25>/showDetailBadges`.
- [L311](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L311) `const zonesToShow = new Set([...Object.keys(zones), ...Object.keys(knownBadges)])`; scope `<anonymous@25>/showDetailBadges`.
- [L312](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L312) `const visibleBadges = new Set()`; scope `<anonymous@25>/showDetailBadges`.
- [L315](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L315) `const value = String(zones[zone] ?? '').trim()`; scope `<anonymous@25>/showDetailBadges/<anonymous@314>`.
- [L316](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L316) `const known = knownBadges[zone]`; scope `<anonymous@25>/showDetailBadges/<anonymous@314>`.
- [L317](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L317) `let badge = (known && document.getElementById(known.id)) || Array.from(row.children).find(node => node.dataset.materialDetectorZone === zone)`; scope `<anonymous@25>/showDetailBadges/<anonymous@314>`.
- [L344](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L344) `const detected = detectCurrentLabel()`; scope `<anonymous@25>/updateSession`.
- [L345](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L345) `const zones = detected.zones`; scope `<anonymous@25>/updateSession`.
- [L346](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L346) `const snapshot = JSON.stringify(zones)`; scope `<anonymous@25>/updateSession`.
- [L375](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L375) `const observer = new MutationObserver(() => updateSession())`; scope `<anonymous@25>/startDomObserver`.
- [L384](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L384) `const waitBodyObserver = new MutationObserver(() => { if (!document.body) return; waitBodyObserver.disconnect(); startDomObserver(); updateSession(); })`; scope `<anonymous@25>/ensureObserverWhenBodyExists`.
- [L398](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L398) `const state = getPerTabState()`; scope `<anonymous@25>/getRenameConfig`.
- [L399](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L399) `const rename = state && state.rename`; scope `<anonymous@25>/getRenameConfig`.
- [L406](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L406) `const url = new URL(href, location.href)`; scope `<anonymous@25>/extractFilenameFromHref`.
- [L407](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L407) `const raw = decodeURIComponent(url.pathname.split('/').pop() || 'subor')`; scope `<anonymous@25>/extractFilenameFromHref`.
- [L408](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L408) `const dot = raw.lastIndexOf('.')`; scope `<anonymous@25>/extractFilenameFromHref`.
- [L417](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L417) `const vp = getCurrentVp()`; scope `<anonymous@25>/buildRenameTokens`.
- [L418](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L418) `const original = extractFilenameFromHref(originalHref)`; scope `<anonymous@25>/buildRenameTokens`.
- [L419](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L419) `const alias = rename.alias || state.outputAlias || window.TM_testoLeft || 'material'`; scope `<anonymous@25>/buildRenameTokens`.
- [L420](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L420) `const sizeAlias = rename.sizeAlias || state.sizeAlias || localStorage.getItem(LAST_SIZE_ALIAS_STORAGE_PREFIX + vp) || 'bez_rozmeru'`; scope `<anonymous@25>/buildRenameTokens`.
- [L421](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L421) `const quantity = rename.quantity || '1ks'`; scope `<anonymous@25>/buildRenameTokens`.
- [L422](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L422) `const rawTokens = Object.assign({}, state.tokens || {}, { alias, size: stripSizeUnitSuffix(sizeAlias), sizeAlias, quantity, vp: vp || 'bezVP', detector: state.detector || '', code: state.productCode || '', original: original.base || 'subor', ext: original.ext || '' })`; scope `<anonymous@25>/buildRenameTokens`.
- [L433](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L433) `const tokens = {}`; scope `<anonymous@25>/buildRenameTokens`.
- [L443](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L443) `const selectedPattern = hasTemplate(pattern) ? pattern : DEFAULT_RENAME_PATTERN`; scope `<anonymous@25>/applyRenamePattern`.
- [L444](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L444) `let fileName = api.renderTemplate(selectedPattern, tokens)`; scope `<anonymous@25>/applyRenamePattern`.
- [L456](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L456) `const config = getRenameConfig()`; scope `<anonymous@25>/buildNewFileName`.
- [L458](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L458) `const tokens = buildRenameTokens(originalHref, config.state, config.rename)`; scope `<anonymous@25>/buildNewFileName`.
- [L472](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L472) `const href = anchor.href`; scope `<anonymous@25>/isDownloadCandidate`.
- [L473](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L473) `const text = api.normalizeKey(anchor.textContent || '')`; scope `<anonymous@25>/isDownloadCandidate`.
- [L474](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L474) `const cls = anchor.className || ''`; scope `<anonymous@25>/isDownloadCandidate`.
- [L486](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L486) `const a = document.createElement('a')`; scope `<anonymous@25>/browserDownload`.
- [L498](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L498) `const response = await fetch(url, { credentials: 'include', cache: 'no-store' })`; scope `<anonymous@25>/blobDownload`.
- [L500](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L500) `const blob = await response.blob()`; scope `<anonymous@25>/blobDownload`.
- [L501](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L501) `const objectUrl = URL.createObjectURL(blob)`; scope `<anonymous@25>/blobDownload`.
- [L512](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L512) `const result = GM_download({ url, name: fileName, saveAs: false, onerror: function (error) { console.warn('[materialDetector] GM_download fallback failed', error); browserDownload(url, fileName); }, ontimeout: function (error) { console.warn('[materialDetector] GM_download fallback timeout', error);`; scope `<anonymous@25>/gmDownload`.
- [L548](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L548) `const link = event.target.closest('a[href]')`; scope `<anonymous@25>/initDownloadRename/<anonymous@547>`.
- [L552](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L552) `const fileName = buildNewFileName(link.href)`; scope `<anonymous@25>/initDownloadRename/<anonymous@547>`.

## storage

- [L25](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L25) `function () { 'use strict'; const api = window.MaterialDetectorAPI; if (!api) { console.error('[materialDetector] Missing MaterialDetectorAPI. Check @require loading.'); return; } const STATE_KEY_PREFIX = 'materialDetectorState:'; const STATE_TTL_MS = 30000; const LAST_SIZE_ALIAS_STORAGE_PREFIX = ap`; scope `root`.
- [L159](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L159) `sessionStorage.setItem(stateKey(vp), JSON.stringify(payload))`; scope `<anonymous@25>/setPerTabState`.
- [L166](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L166) `localStorage.setItem(LAST_SIZE_ALIAS_STORAGE_PREFIX + vp, payload.sizeAlias)`; scope `<anonymous@25>/setPerTabState`.
- [L179](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L179) `sessionStorage.getItem(stateKey(vp))`; scope `<anonymous@25>/getPerTabState`.
- [L194](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L194) `localStorage.setItem(key, normalized)`; scope `<anonymous@25>/setZoneValue`.
- [L195](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L195) `localStorage.removeItem(key)`; scope `<anonymous@25>/setZoneValue`.
- [L420](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L420) `localStorage.getItem(LAST_SIZE_ALIAS_STORAGE_PREFIX + vp)`; scope `<anonymous@25>/buildRenameTokens`.
- [L568](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L568) `localStorage.getItem(key)`; scope `<anonymous@25>/init/<anonymous@568>`.

## events

- [L25](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L25) `function () { 'use strict'; const api = window.MaterialDetectorAPI; if (!api) { console.error('[materialDetector] Missing MaterialDetectorAPI. Check @require loading.'); return; } const STATE_KEY_PREFIX = 'materialDetectorState:'; const STATE_TTL_MS = 30000; const LAST_SIZE_ALIAS_STORAGE_PREFIX = ap`; scope `root`.
- [L358](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L358) `window.dispatchEvent(new CustomEvent('materialDetector:updated', { detail: detected }))`; scope `<anonymous@25>/updateSession`.
- [L358](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L358) `CustomEvent('materialDetector:updated', { detail: detected })`; scope `<anonymous@25>/updateSession`.
- [L547](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L547) `document.addEventListener('click', function (event) { const link = event.target.closest('a[href]'); if (!link) return; if (!isDownloadCandidate(link)) return; if (!shouldRenameForCurrentOrder()) return; const fileName = buildNewFileName(link.href); if (!fileName) return; event.preventDefault(); even`; scope `<anonymous@25>/initDownloadRename`.
- [L572](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L572) `document.addEventListener('DOMContentLoaded', updateSession, { once: true })`; scope `<anonymous@25>/init`.
- [L576](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L576) `window.addEventListener('load', forceRefreshSessionBurst)`; scope `<anonymous@25>/init`.
- [L577](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L577) `window.addEventListener('pageshow', forceRefreshSessionBurst)`; scope `<anonymous@25>/init`.
- [L578](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L578) `window.addEventListener('focus', forceRefreshSessionBurst)`; scope `<anonymous@25>/init`.
- [L579](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L579) `window.addEventListener('materialDetector:configChanged', forceRefreshSessionBurst)`; scope `<anonymous@25>/init`.
- [L580](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L580) `document.addEventListener('visibilitychange', function () { if (document.visibilityState === 'visible') forceRefreshSessionBurst(); else setTimeout(updateSession, 0); })`; scope `<anonymous@25>/init`.

## lifecycle

- [L25](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L25) `function () { 'use strict'; const api = window.MaterialDetectorAPI; if (!api) { console.error('[materialDetector] Missing MaterialDetectorAPI. Check @require loading.'); return; } const STATE_KEY_PREFIX = 'materialDetectorState:'; const STATE_TTL_MS = 30000; const LAST_SIZE_ALIAS_STORAGE_PREFIX = ap`; scope `root`.
- [L364](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L364) `setTimeout(() => updateSession(true), delay)`; scope `<anonymous@25>/forceRefreshSessionBurst/<anonymous@364>`.
- [L369](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L369) `setTimeout(updateSession, delay)`; scope `<anonymous@25>/bootstrapRetries/<anonymous@369>`.
- [L375](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L375) `MutationObserver(() => updateSession())`; scope `<anonymous@25>/startDomObserver`.
- [L376](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L376) `observer.observe(document.body, { childList: true, subtree: true, characterData: true })`; scope `<anonymous@25>/startDomObserver`.
- [L384](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L384) `MutationObserver(() => { if (!document.body) return; waitBodyObserver.disconnect(); startDomObserver(); updateSession(); })`; scope `<anonymous@25>/ensureObserverWhenBodyExists`.
- [L386](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L386) `waitBodyObserver.disconnect()`; scope `<anonymous@25>/ensureObserverWhenBodyExists/<anonymous@384>`.
- [L390](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L390) `waitBodyObserver.observe(document.documentElement, { childList: true, subtree: true })`; scope `<anonymous@25>/ensureObserverWhenBodyExists`.
- [L494](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L494) `setTimeout(() => a.remove(), 0)`; scope `<anonymous@25>/browserDownload`.
- [L503](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L503) `setTimeout(() => URL.revokeObjectURL(objectUrl), 30000)`; scope `<anonymous@25>/blobDownload`.
- [L574](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L574) `setTimeout(updateSession, 0)`; scope `<anonymous@25>/init`.
- [L582](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L582) `setTimeout(updateSession, 0)`; scope `<anonymous@25>/init/<anonymous@580>`.

## io

- [L25](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L25) `function () { 'use strict'; const api = window.MaterialDetectorAPI; if (!api) { console.error('[materialDetector] Missing MaterialDetectorAPI. Check @require loading.'); return; } const STATE_KEY_PREFIX = 'materialDetectorState:'; const STATE_TTL_MS = 30000; const LAST_SIZE_ALIAS_STORAGE_PREFIX = ap`; scope `root`.
- [L498](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L498) `fetch(url, { credentials: 'include', cache: 'no-store' })`; scope `<anonymous@25>/blobDownload`.
- [L501](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L501) `URL.createObjectURL(blob)`; scope `<anonymous@25>/blobDownload`.
- [L503](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L503) `URL.revokeObjectURL(objectUrl)`; scope `<anonymous@25>/blobDownload/<anonymous@503>`.
- [L512](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L512) `GM_download({ url, name: fileName, saveAs: false, onerror: function (error) { console.warn('[materialDetector] GM_download fallback failed', error); browserDownload(url, fileName); }, ontimeout: function (error) { console.warn('[materialDetector] GM_download fallback timeout', error); browserDownloa`; scope `<anonymous@25>/gmDownload`.

## dom-read

- [L25](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L25) `function () { 'use strict'; const api = window.MaterialDetectorAPI; if (!api) { console.error('[materialDetector] Missing MaterialDetectorAPI. Check @require loading.'); return; } const STATE_KEY_PREFIX = 'materialDetectorState:'; const STATE_TTL_MS = 30000; const LAST_SIZE_ALIAS_STORAGE_PREFIX = ap`; scope `root`.
- [L208](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L208) `document.querySelector('#dodacia_lehota_label')`; scope `<anonymous@25>/detectExpeditionDate`.
- [L260](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L260) `document.querySelector('#vpOrderDetail')`; scope `<anonymous@25>/showDetailBadges`.
- [L261](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L261) `orderContent.closest('.box')`; scope `<anonymous@25>/showDetailBadges`.
- [L262](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L262) `orderContent.closest('.box').querySelector('.box-head h2')`; scope `<anonymous@25>/showDetailBadges`.
- [L262](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L262) `orderContent.closest('.box')`; scope `<anonymous@25>/showDetailBadges`.
- [L263](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L263) `document.querySelector('h1, h2')`; scope `<anonymous@25>/showDetailBadges`.
- [L266](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L266) `document.querySelector('#material-detector-summary-row')`; scope `<anonymous@25>/showDetailBadges`.
- [L268](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L268) `document.querySelector('#shortcut-info-label, #shortcut-info-date, #shortcut-info-top')`; scope `<anonymous@25>/showDetailBadges`.
- [L291](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L291) `orderContent.closest('.box.grid_6.detail')`; scope `<anonymous@25>/showDetailBadges`.
- [L292](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L292) `document.querySelector('#vpVpDetail')`; scope `<anonymous@25>/showDetailBadges`.
- [L293](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L293) `vpContent.closest('.box.grid_6.statuses')`; scope `<anonymous@25>/showDetailBadges`.
- [L317](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L317) `document.getElementById(known.id)`; scope `<anonymous@25>/showDetailBadges/<anonymous@314>`.
- [L548](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L548) `event.target.closest('a[href]')`; scope `<anonymous@25>/initDownloadRename/<anonymous@547>`.

## dom-write

- [L25](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L25) `function () { 'use strict'; const api = window.MaterialDetectorAPI; if (!api) { console.error('[materialDetector] Missing MaterialDetectorAPI. Check @require loading.'); return; } const STATE_KEY_PREFIX = 'materialDetectorState:'; const STATE_TTL_MS = 30000; const LAST_SIZE_ALIAS_STORAGE_PREFIX = ap`; scope `root`.
- [L273](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L273) `row.setAttribute('role', 'group')`; scope `<anonymous@25>/showDetailBadges`.
- [L274](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L274) `row.setAttribute('aria-label', 'Premenné výrobného príkazu')`; scope `<anonymous@25>/showDetailBadges`.
- [L299](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L299) `sharedParent.insertBefore(row, orderBox)`; scope `<anonymous@25>/showDetailBadges`.
- [L302](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L302) `h.appendChild(row)`; scope `<anonymous@25>/showDetailBadges`.
- [L333](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L333) `row.appendChild(badge)`; scope `<anonymous@25>/showDetailBadges/<anonymous@314>`.
- [L491](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L491) `a.setAttribute(NATIVE_DOWNLOAD_ATTR, '1')`; scope `<anonymous@25>/browserDownload`.
- [L492](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L492) `document.body.append(a)`; scope `<anonymous@25>/browserDownload`.
- [L494](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L494) `a.remove()`; scope `<anonymous@25>/browserDownload/<anonymous@494>`.

## logs

- [L25](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L25) `function () { 'use strict'; const api = window.MaterialDetectorAPI; if (!api) { console.error('[materialDetector] Missing MaterialDetectorAPI. Check @require loading.'); return; } const STATE_KEY_PREFIX = 'materialDetectorState:'; const STATE_TTL_MS = 30000; const LAST_SIZE_ALIAS_STORAGE_PREFIX = ap`; scope `root`.
- [L30](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L30) `console.error('[materialDetector] Missing MaterialDetectorAPI. Check @require loading.')`; scope `<anonymous@25>`.
- [L161](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L161) `console.warn('[materialDetector] session state save failed', e)`; scope `<anonymous@25>/setPerTabState`.
- [L225](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L225) `console.error('[materialDetector] detector failed', detector.id, e)`; scope `<anonymous@25>/runCurrentDetector`.
- [L351](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L351) `console.log('[materialDetector] updated', { internalCode: detected.context.internalCode || '', zones, detector: detected.result ? detected.result.detector : '', state: detected.state || null, forced: force })`; scope `<anonymous@25>/updateSession`.
- [L517](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L517) `console.warn('[materialDetector] GM_download fallback failed', error)`; scope `<anonymous@25>/gmDownload/onerror`.
- [L521](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L521) `console.warn('[materialDetector] GM_download fallback timeout', error)`; scope `<anonymous@25>/gmDownload/ontimeout`.
- [L527](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L527) `console.warn('[materialDetector] GM_download promise failed', error)`; scope `<anonymous@25>/gmDownload/<anonymous@526>`.
- [L532](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L532) `console.warn('[materialDetector] GM_download throw', error)`; scope `<anonymous@25>/gmDownload`.
- [L539](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L539) `console.warn('[materialDetector] blob download failed, using GM_download fallback', error)`; scope `<anonymous@25>/startDownload/<anonymous@538>`.
- [L557](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L557) `console.log('[materialDetector] download:', { from: link.href, as: fileName })`; scope `<anonymous@25>/initDownloadRename/<anonymous@547>`.

## Zápisy do globálov, DOM a ostatných vlastností

- [L134](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L134) `window.__materialDetectorTokens = tokens`.
- [L157](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L157) `window.__materialDetectorState = payload`.
- [L272](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L272) `row.id = 'material-detector-summary-row'`.
- [L323](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L323) `badge.id = known.id`.
- [L324](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L324) `badge.style.cssText = 'background:#f0f3f6;color:#233;border:1px solid #cfd8e3;padding:4px 8px;border-radius:6px;font-weight:bold;display:inline-block;'`.
- [L325](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L325) `badge.className = known.className`.
- [L326](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L326) `badge.style.cssText = known.style`.
- [L330](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L330) `badge.textContent = value`.
- [L331](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L331) `badge.style.marginLeft = '0'`.
- [L332](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L332) `badge.style.display = value ? 'inline-block' : 'none'`.
- [L338](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L338) `badge.style.display = 'none'`.
- [L340](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L340) `row.style.display = visibleBadges.size ? 'flex' : 'none'`.
- [L490](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/materialDetector.user.js#L490) `a.style.display = 'none'`.
