# setTitleForIndustrialQueue

Zdroj: setTitleForIndustrialQueue.user.js; referencia: 75087f8c4cbd34190e69318038bda6ef36eee0f2.
SHA-256: `493f82b6d8f4d5790ed36a41b2e55067f3a6ab3731d41da7526b8c8716fea849`. Riadkov: 690.

AST inventár: obsahuje aj vnorené/anonýmne funkcie a lokálne premenné. Zoznam premenných nie je zoznam editovateľných nastavení. Volania sú klasifikované podľa názvu; dynamické aliasy môžu vyžadovať ručné dohľadanie. Historické @require hlavičky v načítanom JS nie sú ďalším automaticky spusteným @require reťazcom.

## Metadata

```json
{
  "name": [
    "setTitleForIndustrialQueue"
  ],
  "namespace": [
    "http://tvoj-namespace.example"
  ],
  "version": [
    "1.6.1"
  ],
  "description": [
    "Nastavuje title fronty, drží stav sekcií, presúva EXPR navrch a ticho sleduje zmeny na pozadí"
  ],
  "updateURL": [
    "https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/setTitleForIndustrialQueue.user.js"
  ],
  "downloadURL": [
    "https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/setTitleForIndustrialQueue.user.js"
  ],
  "match": [
    "https://moduly.faxcopy.sk/vyrobne_prikazy/industrialQueue/detail/*",
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

- [L15–689](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L15) `<anonymous@15>()`; scope `root`.
- [L32–40](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L32) `<anonymous@32>()`; scope `<anonymous@15>`.
- [L42–116](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L42) `injectStyles()`; scope `<anonymous@15>`.
- [L118–128](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L118) `parseSkratka(root = document)`; scope `<anonymous@15>`.
- [L130–139](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L130) `parseTotalRecords(root = document)`; scope `<anonymous@15>`.
- [L141–146](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L141) `readSnapshot(root = document)`; scope `<anonymous@15>`.
- [L148–157](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L148) `setTitle(snapshot)`; scope `<anonymous@15>`.
- [L159–162](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L159) `refreshTitleFromDocument()`; scope `<anonymous@15>`.
- [L164–172](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L164) `ensureFaviconLink()`; scope `<anonymous@15>`.
- [L174–219](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L174) `drawBadgedFavicon()`; scope `<anonymous@15>`.
- [L175–218](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L175) `<anonymous@175>(resolve)`; scope `<anonymous@15>/drawBadgedFavicon`.
- [L187–198](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L187) `finish()`; scope `<anonymous@15>/drawBadgedFavicon/<anonymous@175>`.
- [L208–211](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L208) `img.onload()`; scope `<anonymous@15>/drawBadgedFavicon/<anonymous@175>`.
- [L212–216](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L212) `img.onerror()`; scope `<anonymous@15>/drawBadgedFavicon/<anonymous@175>`.
- [L221–231](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L221) `async applyFaviconBadge()`; scope `<anonymous@15>`.
- [L233–243](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L233) `clearFaviconBadge()`; scope `<anonymous@15>`.
- [L245–247](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L245) `getSectionStorageKey(sectionId)`; scope `<anonymous@15>`.
- [L249–262](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L249) `getToggleSectionPairs()`; scope `<anonymous@15>`.
- [L251–260](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L251) `<anonymous@251>(head)`; scope `<anonymous@15>/getToggleSectionPairs`.
- [L264–272](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L264) `applyDefaultHiddenSections()`; scope `<anonymous@15>`.
- [L265–271](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L265) `<anonymous@265>(sectionId)`; scope `<anonymous@15>/applyDefaultHiddenSections`.
- [L274–280](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L274) `forceHiddenSectionsWithDelay()`; scope `<anonymous@15>`.
- [L275–279](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L275) `<anonymous@275>(delay)`; scope `<anonymous@15>/forceHiddenSectionsWithDelay`.
- [L276–278](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L276) `<anonymous@276>()`; scope `<anonymous@15>/forceHiddenSectionsWithDelay/<anonymous@275>`.
- [L282–292](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L282) `restoreCollapsedSections()`; scope `<anonymous@15>`.
- [L283–291](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L283) `<anonymous@283>({ section, sectionId })`; scope `<anonymous@15>/restoreCollapsedSections`.
- [L294–303](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L294) `persistCollapsedSections()`; scope `<anonymous@15>`.
- [L295–302](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L295) `<anonymous@295>({ head, section, sectionId })`; scope `<anonymous@15>/persistCollapsedSections`.
- [L296–301](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L296) `<anonymous@296>()`; scope `<anonymous@15>/persistCollapsedSections/<anonymous@295>`.
- [L297–300](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L297) `<anonymous@297>()`; scope `<anonymous@15>/persistCollapsedSections/<anonymous@295>/<anonymous@296>`.
- [L305–307](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L305) `rowHasBadge(tr, badgeName)`; scope `<anonymous@15>`.
- [L306–306](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L306) `<anonymous@306>(badge)`; scope `<anonymous@15>/rowHasBadge`.
- [L309–311](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L309) `rowHasExpr(tr)`; scope `<anonymous@15>`.
- [L313–315](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L313) `rowHasStop(tr)`; scope `<anonymous@15>`.
- [L317–324](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L317) `rowIsCancelled(tr)`; scope `<anonymous@15>`.
- [L326–333](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L326) `openVpLink(anchor)`; scope `<anonymous@15>`.
- [L335–365](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L335) `bindSafeVpAnchor(anchor)`; scope `<anonymous@15>`.
- [L345–355](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L345) `openHandler(event)`; scope `<anonymous@15>/bindSafeVpAnchor`.
- [L358–360](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L358) `anchor.onmousedown(event)`; scope `<anonymous@15>/bindSafeVpAnchor`.
- [L361–363](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L361) `anchor.onmouseup(event)`; scope `<anonymous@15>/bindSafeVpAnchor`.
- [L367–370](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L367) `bindSafeVpLinks(root = document)`; scope `<anonymous@15>`.
- [L372–395](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L372) `installSafeVpLinkHandler()`; scope `<anonymous@15>`.
- [L377–390](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L377) `<anonymous@377>(event)`; scope `<anonymous@15>/installSafeVpLinkHandler`.
- [L397–411](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L397) `getVpLinkData(tr)`; scope `<anonymous@15>`.
- [L413–461](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L413) `replaceOrderColumnWithVpBadge(rows)`; scope `<anonymous@15>`.
- [L422–460](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L422) `<anonymous@422>(row)`; scope `<anonymous@15>/replaceOrderColumnWithVpBadge`.
- [L449–449](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L449) `<anonymous@449>(node)`; scope `<anonymous@15>/replaceOrderColumnWithVpBadge/<anonymous@422>`.
- [L463–469](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L463) `applyRowHighlighting(rows)`; scope `<anonymous@15>`.
- [L464–468](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L464) `<anonymous@464>(row)`; scope `<anonymous@15>/applyRowHighlighting`.
- [L471–483](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L471) `rowsNeedExprReorder(rows)`; scope `<anonymous@15>`.
- [L485–501](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L485) `enhanceQueueRows()`; scope `<anonymous@15>`.
- [L499–499](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L499) `<anonymous@499>(row)`; scope `<anonymous@15>/enhanceQueueRows`.
- [L500–500](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L500) `<anonymous@500>(row)`; scope `<anonymous@15>/enhanceQueueRows`.
- [L503–511](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L503) `scheduleMoveExprRowsToTop()`; scope `<anonymous@15>`.
- [L507–510](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L507) `<anonymous@507>()`; scope `<anonymous@15>/scheduleMoveExprRowsToTop`.
- [L513–527](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L513) `observeExprRows()`; scope `<anonymous@15>`.
- [L517–519](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L517) `<anonymous@517>()`; scope `<anonymous@15>/observeExprRows`.
- [L529–539](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L529) `getDataTableSettingsById(tableId)`; scope `<anonymous@15>`.
- [L541–548](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L541) `redrawDataTable(tableId)`; scope `<anonymous@15>`.
- [L550–561](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L550) `finishQueueRefresh(previousTotal)`; scope `<anonymous@15>`.
- [L563–576](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L563) `refreshQueueData()`; scope `<anonymous@15>`.
- [L573–575](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L573) `<anonymous@573>()`; scope `<anonymous@15>/refreshQueueData`.
- [L578–583](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L578) `startQueueAutoRefresh()`; scope `<anonymous@15>`.
- [L579–582](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L579) `<anonymous@579>()`; scope `<anonymous@15>/startQueueAutoRefresh`.
- [L585–590](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L585) `setTitleForVPDetail()`; scope `<anonymous@15>`.
- [L592–619](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L592) `addPrintLabelLink(root = document)`; scope `<anonymous@15>`.
- [L593–618](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L593) `<anonymous@593>(tr)`; scope `<anonymous@15>/addPrintLabelLink`.
- [L621–638](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L621) `observeTableChanges()`; scope `<anonymous@15>`.
- [L622–632](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L622) `<anonymous@622>(mutations)`; scope `<anonymous@15>/observeTableChanges`.
- [L623–629](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L623) `<anonymous@623>(mutation)`; scope `<anonymous@15>/observeTableChanges/<anonymous@622>`.
- [L624–628](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L624) `<anonymous@624>(node)`; scope `<anonymous@15>/observeTableChanges/<anonymous@622>/<anonymous@623>`.
- [L640–653](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L640) `observeTitleInputs()`; scope `<anonymous@15>`.
- [L644–646](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L644) `<anonymous@644>()`; scope `<anonymous@15>/observeTitleInputs`.
- [L655–662](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L655) `handleVisibilityChange()`; scope `<anonymous@15>`.
- [L656–661](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L656) `<anonymous@656>()`; scope `<anonymous@15>/handleVisibilityChange`.
- [L664–688](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L664) `<anonymous@664>()`; scope `<anonymous@15>`.

## Premenné a pôvodné inicializátory

Dlhé inicializátory sú tu skrátené na 300 znakov; úplné znenie je v inventory.json a v zdroji.

- [L18](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L18) `const SECTION_STATE_PREFIX = 'fc-industrial-queue-section-state'`; scope `<anonymous@15>`.
- [L19](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L19) `const BACKGROUND_CHECK_INTERVAL = 30000`; scope `<anonymous@15>`.
- [L20](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L20) `const TABLE_REFRESH_SETTLE_MS = 4000`; scope `<anonymous@15>`.
- [L21](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L21) `const EXPR_ROW_CLASS = 'fc-expr-row'`; scope `<anonymous@15>`.
- [L22](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L22) `const STOP_ROW_CLASS = 'fc-stop-row'`; scope `<anonymous@15>`.
- [L23](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L23) `const CANCELLED_ROW_CLASS = 'fc-cancelled-row'`; scope `<anonymous@15>`.
- [L24](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L24) `const DEFAULT_HIDDEN_SECTION_IDS = ['iqInfo', 'filter-content']`; scope `<anonymous@15>`.
- [L26](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L26) `let currentSnapshot = null`; scope `<anonymous@15>`.
- [L27](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L27) `let faviconBadgeApplied = false`; scope `<anonymous@15>`.
- [L28](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L28) `let exprMoveScheduled = false`; scope `<anonymous@15>`.
- [L29](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L29) `let safeVpLinkHandlerInstalled = false`; scope `<anonymous@15>`.
- [L30](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L30) `let queueRefreshInFlight = false`; scope `<anonymous@15>`.
- [L32](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L32) `const originalFavicon = (() => { const link = document.querySelector("link[rel*='icon']"); return link ? { href: link.href, type: link.type || 'image/x-icon' } : null; })()`; scope `<anonymous@15>`.
- [L33](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L33) `const link = document.querySelector("link[rel*='icon']")`; scope `<anonymous@15>/<anonymous@32>`.
- [L45](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L45) `const style = document.createElement('style')`; scope `<anonymous@15>/injectStyles`.
- [L119](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L119) `const elems = [...root.querySelectorAll('p, div, span, strong, td')]`; scope `<anonymous@15>/parseSkratka`.
- [L120](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L120) `const el = <bez inicializátora>`; scope `<anonymous@15>/parseSkratka`.
- [L123](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L123) `const match = el.textContent.match(/Skratka:\s*([^\s]+)/)`; scope `<anonymous@15>/parseSkratka`.
- [L131](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L131) `const infoDiv = root.getElementById('industrial_vp_list_info') || root.getElementById('vp_list_info')`; scope `<anonymous@15>/parseTotalRecords`.
- [L137](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L137) `const match = infoDiv.textContent.match(/z celkovo\s+(\d+)/i)`; scope `<anonymous@15>/parseTotalRecords`.
- [L151](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L151) `const { skratka, totalRecords } = snapshot`; scope `<anonymous@15>/setTitle`.
- [L165](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L165) `let link = document.querySelector("link[rel*='icon']")`; scope `<anonymous@15>/ensureFaviconLink`.
- [L176](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L176) `const size = 32`; scope `<anonymous@15>/drawBadgedFavicon/<anonymous@175>`.
- [L177](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L177) `const canvas = document.createElement('canvas')`; scope `<anonymous@15>/drawBadgedFavicon/<anonymous@175>`.
- [L181](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L181) `const ctx = canvas.getContext('2d')`; scope `<anonymous@15>/drawBadgedFavicon/<anonymous@175>`.
- [L187](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L187) `const finish = () => { ctx.fillStyle = '#d11f1f'; ctx.beginPath(); ctx.arc(size - 7, 7, 6, 0, Math.PI * 2); ctx.fill(); ctx.strokeStyle = '#ffffff'; ctx.lineWidth = 2; ctx.stroke(); resolve(canvas.toDataURL('image/png')); }`; scope `<anonymous@15>/drawBadgedFavicon/<anonymous@175>`.
- [L207](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L207) `const img = new Image()`; scope `<anonymous@15>/drawBadgedFavicon/<anonymous@175>`.
- [L224](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L224) `const badgedHref = await drawBadgedFavicon()`; scope `<anonymous@15>/applyFaviconBadge`.
- [L227](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L227) `const link = ensureFaviconLink()`; scope `<anonymous@15>/applyFaviconBadge`.
- [L236](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L236) `const link = ensureFaviconLink()`; scope `<anonymous@15>/clearFaviconBadge`.
- [L252](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L252) `const onclickValue = head.getAttribute('onclick') || ''`; scope `<anonymous@15>/getToggleSectionPairs/<anonymous@251>`.
- [L253](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L253) `const match = onclickValue.match(/setWindowHead\('([^']+)'\)/)`; scope `<anonymous@15>/getToggleSectionPairs/<anonymous@251>`.
- [L256](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L256) `const section = document.getElementById(match[1])`; scope `<anonymous@15>/getToggleSectionPairs/<anonymous@251>`.
- [L266](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L266) `const section = document.getElementById(sectionId)`; scope `<anonymous@15>/applyDefaultHiddenSections/<anonymous@265>`.
- [L284](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L284) `const stored = localStorage.getItem(getSectionStorageKey(sectionId))`; scope `<anonymous@15>/restoreCollapsedSections/<anonymous@283>`.
- [L298](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L298) `const isHidden = window.getComputedStyle(section).display === 'none'`; scope `<anonymous@15>/persistCollapsedSections/<anonymous@295>/<anonymous@296>/<anonymous@297>`.
- [L318](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L318) `const statusCell = tr.cells?.[8]`; scope `<anonymous@15>/rowIsCancelled`.
- [L319](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L319) `const productionCell = tr.cells?.[6]`; scope `<anonymous@15>/rowIsCancelled`.
- [L320](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L320) `const statusText = statusCell?.textContent?.trim() || ''`; scope `<anonymous@15>/rowIsCancelled`.
- [L321](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L321) `const productionText = productionCell?.textContent?.trim() || ''`; scope `<anonymous@15>/rowIsCancelled`.
- [L327](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L327) `const href = anchor?.getAttribute('href')`; scope `<anonymous@15>/openVpLink`.
- [L330](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L330) `const absoluteHref = new URL(href, location.origin).href`; scope `<anonymous@15>/openVpLink`.
- [L331](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L331) `const target = anchor.getAttribute('target') || '_blank'`; scope `<anonymous@15>/openVpLink`.
- [L338](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L338) `const href = anchor.getAttribute('href')`; scope `<anonymous@15>/bindSafeVpAnchor`.
- [L345](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L345) `const openHandler = event => { if (event) { event.preventDefault(); event.stopPropagation(); if (typeof event.stopImmediatePropagation === 'function') { event.stopImmediatePropagation(); } } openVpLink(anchor); return false; }`; scope `<anonymous@15>/bindSafeVpAnchor`.
- [L378](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L378) `const anchor = event.target.closest( '#industrial_vp_list a[href*="/vyrobne_prikazy/detail/index/"], #queue_log a[href*="/vyrobne_prikazy/detail/index/"]' )`; scope `<anonymous@15>/installSafeVpLinkHandler/<anonymous@377>`.
- [L398](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L398) `const vpLink = tr.querySelector('a[href*="/vyrobne_prikazy/detail/index/"]')`; scope `<anonymous@15>/getVpLinkData`.
- [L401](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L401) `const href = vpLink.getAttribute('href') || ''`; scope `<anonymous@15>/getVpLinkData`.
- [L402](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L402) `const match = href.match(/detail\/index\/(\d+)/)`; scope `<anonymous@15>/getVpLinkData`.
- [L414](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L414) `const headerWrapper = document.querySelector('#industrial_vp_list thead th:first-child .DataTables_sort_wrapper')`; scope `<anonymous@15>/replaceOrderColumnWithVpBadge`.
- [L416](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L416) `const sortIcon = headerWrapper.querySelector('.DataTables_sort_icon')`; scope `<anonymous@15>/replaceOrderColumnWithVpBadge`.
- [L423](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L423) `const firstCell = row.cells?.[0]`; scope `<anonymous@15>/replaceOrderColumnWithVpBadge/<anonymous@422>`.
- [L424](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L424) `const secondCell = row.cells?.[1]`; scope `<anonymous@15>/replaceOrderColumnWithVpBadge/<anonymous@422>`.
- [L425](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L425) `const vpData = getVpLinkData(row)`; scope `<anonymous@15>/replaceOrderColumnWithVpBadge/<anonymous@422>`.
- [L431](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L431) `const badgeLink = document.createElement('a')`; scope `<anonymous@15>/replaceOrderColumnWithVpBadge/<anonymous@422>`.
- [L445](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L445) `const mainVpLink = secondCell.querySelector('a[href*="/vyrobne_prikazy/detail/index/${vpData.id}"]')`; scope `<anonymous@15>/replaceOrderColumnWithVpBadge/<anonymous@422>`.
- [L447](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L447) `const nodes = [...mainVpLink.childNodes]`; scope `<anonymous@15>/replaceOrderColumnWithVpBadge/<anonymous@422>`.
- [L448](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L448) `const nameText = nodes .map(node => node.textContent || '') .join(' ') .replace(vpData.id, '') .replace(/\s+/g, ' ') .trim()`; scope `<anonymous@15>/replaceOrderColumnWithVpBadge/<anonymous@422>`.
- [L472](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L472) `let seenNonExpr = false`; scope `<anonymous@15>/rowsNeedExprReorder`.
- [L474](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L474) `const row = <bez inicializátora>`; scope `<anonymous@15>/rowsNeedExprReorder`.
- [L486](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L486) `const tbody = document.querySelector('#industrial_vp_list tbody')`; scope `<anonymous@15>/enhanceQueueRows`.
- [L489](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L489) `const rows = [...tbody.querySelectorAll('tr')]`; scope `<anonymous@15>/enhanceQueueRows`.
- [L496](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L496) `const exprRows = rows.filter(rowHasExpr)`; scope `<anonymous@15>/enhanceQueueRows`.
- [L499](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L499) `const otherRows = rows.filter(row => !rowHasExpr(row))`; scope `<anonymous@15>/enhanceQueueRows`.
- [L514](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L514) `const tbody = document.querySelector('#industrial_vp_list tbody')`; scope `<anonymous@15>/observeExprRows`.
- [L517](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L517) `const observer = new MutationObserver(() => { scheduleMoveExprRowsToTop(); })`; scope `<anonymous@15>/observeExprRows`.
- [L530](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L530) `const settingsList = window.jQuery?.fn?.dataTableSettings`; scope `<anonymous@15>/getDataTableSettingsById`.
- [L533](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L533) `let i = 0`; scope `<anonymous@15>/getDataTableSettingsById`.
- [L534](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L534) `const settings = settingsList[i]`; scope `<anonymous@15>/getDataTableSettingsById`.
- [L542](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L542) `const settings = getDataTableSettingsById(tableId)`; scope `<anonymous@15>/redrawDataTable`.
- [L543](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L543) `const instance = settings?.oInstance`; scope `<anonymous@15>/redrawDataTable`.
- [L551](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L551) `const latestSnapshot = readSnapshot(document)`; scope `<anonymous@15>/finishQueueRefresh`.
- [L552](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L552) `const latestTotal = Number(latestSnapshot.totalRecords || 0)`; scope `<anonymous@15>/finishQueueRefresh`.
- [L566](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L566) `const previousTotal = Number(parseTotalRecords(document) || 0)`; scope `<anonymous@15>/refreshQueueData`.
- [L567](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L567) `const vpReloaded = redrawDataTable('industrial_vp_list')`; scope `<anonymous@15>/refreshQueueData`.
- [L568](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L568) `const logReloaded = redrawDataTable('queue_log')`; scope `<anonymous@15>/refreshQueueData`.
- [L586](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L586) `const strong = document.querySelector('strong.red')`; scope `<anonymous@15>/setTitleForVPDetail`.
- [L594](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L594) `const printer = tr.querySelector('a.action.silk.printer')`; scope `<anonymous@15>/addPrintLabelLink/<anonymous@593>`.
- [L599](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L599) `const vpLink = tr.querySelector('a[href*="/vyrobne_prikazy/detail/index/"]')`; scope `<anonymous@15>/addPrintLabelLink/<anonymous@593>`.
- [L602](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L602) `const match = vpLink.getAttribute('href')?.match(/detail\/index\/(\d+)/)`; scope `<anonymous@15>/addPrintLabelLink/<anonymous@593>`.
- [L605](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L605) `const vpId = match[1]`; scope `<anonymous@15>/addPrintLabelLink/<anonymous@593>`.
- [L606](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L606) `const labelLink = document.createElement('a')`; scope `<anonymous@15>/addPrintLabelLink/<anonymous@593>`.
- [L612](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L612) `const img = document.createElement('img')`; scope `<anonymous@15>/addPrintLabelLink/<anonymous@593>`.
- [L622](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L622) `const observer = new MutationObserver(mutations => { mutations.forEach(mutation => { mutation.addedNodes.forEach(node => { if (node.nodeType !== 1) return; addPrintLabelLink(node); bindSafeVpLinks(node); }); }); scheduleMoveExprRowsToTop(); })`; scope `<anonymous@15>/observeTableChanges`.
- [L641](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L641) `const infoDiv = document.getElementById('industrial_vp_list_info')`; scope `<anonymous@15>/observeTitleInputs`.
- [L644](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L644) `const observer = new MutationObserver(() => { refreshTitleFromDocument(); })`; scope `<anonymous@15>/observeTitleInputs`.
- [L665](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L665) `const url = location.href`; scope `<anonymous@15>/<anonymous@664>`.

## storage

- [L15](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L15) `function () { 'use strict'; const SECTION_STATE_PREFIX = 'fc-industrial-queue-section-state'; const BACKGROUND_CHECK_INTERVAL = 30000; const TABLE_REFRESH_SETTLE_MS = 4000; const EXPR_ROW_CLASS = 'fc-expr-row'; const STOP_ROW_CLASS = 'fc-stop-row'; const CANCELLED_ROW_CLASS = 'fc-cancelled-row'; con`; scope `root`.
- [L269](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L269) `localStorage.setItem(getSectionStorageKey(sectionId), 'hidden')`; scope `<anonymous@15>/applyDefaultHiddenSections/<anonymous@265>`.
- [L284](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L284) `localStorage.getItem(getSectionStorageKey(sectionId))`; scope `<anonymous@15>/restoreCollapsedSections/<anonymous@283>`.
- [L299](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L299) `localStorage.setItem(getSectionStorageKey(sectionId), isHidden ? 'hidden' : 'visible')`; scope `<anonymous@15>/persistCollapsedSections/<anonymous@295>/<anonymous@296>/<anonymous@297>`.

## events

- [L15](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L15) `function () { 'use strict'; const SECTION_STATE_PREFIX = 'fc-industrial-queue-section-state'; const BACKGROUND_CHECK_INTERVAL = 30000; const TABLE_REFRESH_SETTLE_MS = 4000; const EXPR_ROW_CLASS = 'fc-expr-row'; const STOP_ROW_CLASS = 'fc-stop-row'; const CANCELLED_ROW_CLASS = 'fc-cancelled-row'; con`; scope `root`.
- [L296](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L296) `head.addEventListener('click', () => { setTimeout(() => { const isHidden = window.getComputedStyle(section).display === 'none'; localStorage.setItem(getSectionStorageKey(sectionId), isHidden ? 'hidden' : 'visible'); }, 0); })`; scope `<anonymous@15>/persistCollapsedSections/<anonymous@295>`.
- [L375](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L375) `document.addEventListener('click', event => { const anchor = event.target.closest( '#industrial_vp_list a[href*="/vyrobne_prikazy/detail/index/"], #queue_log a[href*="/vyrobne_prikazy/detail/index/"]' ); if (!anchor) return; event.preventDefault(); event.stopPropagation(); if (typeof event.stopImmed`; scope `<anonymous@15>/installSafeVpLinkHandler`.
- [L656](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L656) `document.addEventListener('visibilitychange', () => { if (!document.hidden) { clearFaviconBadge(); refreshQueueData(); } })`; scope `<anonymous@15>/handleVisibilityChange`.
- [L664](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L664) `window.addEventListener('load', () => { const url = location.href; if (url.includes('/industrialQueue/detail/')) { injectStyles(); applyDefaultHiddenSections(); forceHiddenSectionsWithDelay(); restoreCollapsedSections(); persistCollapsedSections(); refreshTitleFromDocument(); observeTitleInputs(); s`; scope `<anonymous@15>`.

## lifecycle

- [L15](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L15) `function () { 'use strict'; const SECTION_STATE_PREFIX = 'fc-industrial-queue-section-state'; const BACKGROUND_CHECK_INTERVAL = 30000; const TABLE_REFRESH_SETTLE_MS = 4000; const EXPR_ROW_CLASS = 'fc-expr-row'; const STOP_ROW_CLASS = 'fc-stop-row'; const CANCELLED_ROW_CLASS = 'fc-cancelled-row'; con`; scope `root`.
- [L276](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L276) `setTimeout(() => { applyDefaultHiddenSections(); }, delay)`; scope `<anonymous@15>/forceHiddenSectionsWithDelay/<anonymous@275>`.
- [L297](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L297) `setTimeout(() => { const isHidden = window.getComputedStyle(section).display === 'none'; localStorage.setItem(getSectionStorageKey(sectionId), isHidden ? 'hidden' : 'visible'); }, 0)`; scope `<anonymous@15>/persistCollapsedSections/<anonymous@295>/<anonymous@296>`.
- [L507](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L507) `setTimeout(() => { exprMoveScheduled = false; enhanceQueueRows(); }, 0)`; scope `<anonymous@15>/scheduleMoveExprRowsToTop`.
- [L517](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L517) `MutationObserver(() => { scheduleMoveExprRowsToTop(); })`; scope `<anonymous@15>/observeExprRows`.
- [L521](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L521) `observer.observe(tbody, { childList: true, subtree: false })`; scope `<anonymous@15>/observeExprRows`.
- [L573](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L573) `setTimeout(() => { finishQueueRefresh(previousTotal); }, TABLE_REFRESH_SETTLE_MS)`; scope `<anonymous@15>/refreshQueueData`.
- [L579](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L579) `setInterval(() => { if (!document.hidden) return; refreshQueueData(); }, BACKGROUND_CHECK_INTERVAL)`; scope `<anonymous@15>/startQueueAutoRefresh`.
- [L622](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L622) `MutationObserver(mutations => { mutations.forEach(mutation => { mutation.addedNodes.forEach(node => { if (node.nodeType !== 1) return; addPrintLabelLink(node); bindSafeVpLinks(node); }); }); scheduleMoveExprRowsToTop(); })`; scope `<anonymous@15>/observeTableChanges`.
- [L634](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L634) `observer.observe(document.body, { childList: true, subtree: true })`; scope `<anonymous@15>/observeTableChanges`.
- [L644](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L644) `MutationObserver(() => { refreshTitleFromDocument(); })`; scope `<anonymous@15>/observeTitleInputs`.
- [L648](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L648) `observer.observe(infoDiv, { childList: true, characterData: true, subtree: true })`; scope `<anonymous@15>/observeTitleInputs`.

## io

- [L332](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L332) `window.open(absoluteHref, target, 'noopener')`; scope `<anonymous@15>/openVpLink`.

## dom-read

- [L15](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L15) `function () { 'use strict'; const SECTION_STATE_PREFIX = 'fc-industrial-queue-section-state'; const BACKGROUND_CHECK_INTERVAL = 30000; const TABLE_REFRESH_SETTLE_MS = 4000; const EXPR_ROW_CLASS = 'fc-expr-row'; const STOP_ROW_CLASS = 'fc-stop-row'; const CANCELLED_ROW_CLASS = 'fc-cancelled-row'; con`; scope `root`.
- [L32](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L32) `() => { const link = document.querySelector("link[rel*='icon']"); return link ? { href: link.href, type: link.type || 'image/x-icon' } : null; }()`; scope `<anonymous@15>`.
- [L33](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L33) `document.querySelector("link[rel*='icon']")`; scope `<anonymous@15>/<anonymous@32>`.
- [L43](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L43) `document.getElementById('fc-industrial-queue-enhancements')`; scope `<anonymous@15>/injectStyles`.
- [L119](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L119) `root.querySelectorAll('p, div, span, strong, td')`; scope `<anonymous@15>/parseSkratka`.
- [L132](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L132) `root.getElementById('industrial_vp_list_info')`; scope `<anonymous@15>/parseTotalRecords`.
- [L133](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L133) `root.getElementById('vp_list_info')`; scope `<anonymous@15>/parseTotalRecords`.
- [L165](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L165) `document.querySelector("link[rel*='icon']")`; scope `<anonymous@15>/ensureFaviconLink`.
- [L250](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L250) `[...document.querySelectorAll('.box-head[onclick*="setWindowHead"]')] .map(head => { const onclickValue = head.getAttribute('onclick') || ''; const match = onclickValue.match(/setWindowHead\('([^']+)'\)/); if (!match?.[1]) return null; const section = document.getElementById(match[1]); if (!section)`; scope `<anonymous@15>/getToggleSectionPairs`.
- [L250](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L250) `[...document.querySelectorAll('.box-head[onclick*="setWindowHead"]')] .map(head => { const onclickValue = head.getAttribute('onclick') || ''; const match = onclickValue.match(/setWindowHead\('([^']+)'\)/); if (!match?.[1]) return null; const section = document.getElementById(match[1]); if (!section)`; scope `<anonymous@15>/getToggleSectionPairs`.
- [L250](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L250) `document.querySelectorAll('.box-head[onclick*="setWindowHead"]')`; scope `<anonymous@15>/getToggleSectionPairs`.
- [L256](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L256) `document.getElementById(match[1])`; scope `<anonymous@15>/getToggleSectionPairs/<anonymous@251>`.
- [L266](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L266) `document.getElementById(sectionId)`; scope `<anonymous@15>/applyDefaultHiddenSections/<anonymous@265>`.
- [L306](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L306) `[...tr.querySelectorAll('.badge')].some(badge => badge.textContent.trim() === badgeName)`; scope `<anonymous@15>/rowHasBadge`.
- [L306](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L306) `tr.querySelectorAll('.badge')`; scope `<anonymous@15>/rowHasBadge`.
- [L368](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L368) `root.querySelectorAll('#industrial_vp_list a[href*="/vyrobne_prikazy/detail/index/"]').forEach(bindSafeVpAnchor)`; scope `<anonymous@15>/bindSafeVpLinks`.
- [L368](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L368) `root.querySelectorAll('#industrial_vp_list a[href*="/vyrobne_prikazy/detail/index/"]')`; scope `<anonymous@15>/bindSafeVpLinks`.
- [L369](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L369) `root.querySelectorAll('#queue_log a[href*="/vyrobne_prikazy/detail/index/"]').forEach(bindSafeVpAnchor)`; scope `<anonymous@15>/bindSafeVpLinks`.
- [L369](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L369) `root.querySelectorAll('#queue_log a[href*="/vyrobne_prikazy/detail/index/"]')`; scope `<anonymous@15>/bindSafeVpLinks`.
- [L378](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L378) `event.target.closest('#industrial_vp_list a[href*="/vyrobne_prikazy/detail/index/"], #queue_log a[href*="/vyrobne_prikazy/detail/index/"]')`; scope `<anonymous@15>/installSafeVpLinkHandler/<anonymous@377>`.
- [L398](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L398) `tr.querySelector('a[href*="/vyrobne_prikazy/detail/index/"]')`; scope `<anonymous@15>/getVpLinkData`.
- [L414](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L414) `document.querySelector('#industrial_vp_list thead th:first-child .DataTables_sort_wrapper')`; scope `<anonymous@15>/replaceOrderColumnWithVpBadge`.
- [L416](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L416) `headerWrapper.querySelector('.DataTables_sort_icon')`; scope `<anonymous@15>/replaceOrderColumnWithVpBadge`.
- [L445](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L445) `secondCell.querySelector('a[href*="/vyrobne_prikazy/detail/index/${vpData.id}"]')`; scope `<anonymous@15>/replaceOrderColumnWithVpBadge/<anonymous@422>`.
- [L486](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L486) `document.querySelector('#industrial_vp_list tbody')`; scope `<anonymous@15>/enhanceQueueRows`.
- [L489](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L489) `tbody.querySelectorAll('tr')`; scope `<anonymous@15>/enhanceQueueRows`.
- [L514](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L514) `document.querySelector('#industrial_vp_list tbody')`; scope `<anonymous@15>/observeExprRows`.
- [L586](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L586) `document.querySelector('strong.red')`; scope `<anonymous@15>/setTitleForVPDetail`.
- [L593](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L593) `root.querySelectorAll('tr').forEach(tr => { const printer = tr.querySelector('a.action.silk.printer'); if (!printer) return; if (tr.querySelector('a[data-print-label="1"]')) return; const vpLink = tr.querySelector('a[href*="/vyrobne_prikazy/detail/index/"]'); if (!vpLink) return; const match = vpLin`; scope `<anonymous@15>/addPrintLabelLink`.
- [L593](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L593) `root.querySelectorAll('tr')`; scope `<anonymous@15>/addPrintLabelLink`.
- [L594](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L594) `tr.querySelector('a.action.silk.printer')`; scope `<anonymous@15>/addPrintLabelLink/<anonymous@593>`.
- [L597](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L597) `tr.querySelector('a[data-print-label="1"]')`; scope `<anonymous@15>/addPrintLabelLink/<anonymous@593>`.
- [L599](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L599) `tr.querySelector('a[href*="/vyrobne_prikazy/detail/index/"]')`; scope `<anonymous@15>/addPrintLabelLink/<anonymous@593>`.
- [L641](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L641) `document.getElementById('industrial_vp_list_info')`; scope `<anonymous@15>/observeTitleInputs`.

## dom-write

- [L15](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L15) `function () { 'use strict'; const SECTION_STATE_PREFIX = 'fc-industrial-queue-section-state'; const BACKGROUND_CHECK_INTERVAL = 30000; const TABLE_REFRESH_SETTLE_MS = 4000; const EXPR_ROW_CLASS = 'fc-expr-row'; const STOP_ROW_CLASS = 'fc-stop-row'; const CANCELLED_ROW_CLASS = 'fc-cancelled-row'; con`; scope `root`.
- [L115](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L115) `document.head.appendChild(style)`; scope `<anonymous@15>/injectStyles`.
- [L169](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L169) `document.head.appendChild(link)`; scope `<anonymous@15>/ensureFaviconLink`.
- [L418](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L418) `headerWrapper.appendChild(sortIcon)`; scope `<anonymous@15>/replaceOrderColumnWithVpBadge`.
- [L439](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L439) `firstCell.appendChild(badgeLink)`; scope `<anonymous@15>/replaceOrderColumnWithVpBadge/<anonymous@422>`.
- [L500](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L500) `tbody.appendChild(row)`; scope `<anonymous@15>/enhanceQueueRows/<anonymous@500>`.
- [L616](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L616) `labelLink.appendChild(img)`; scope `<anonymous@15>/addPrintLabelLink/<anonymous@593>`.

## logs

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## Zápisy do globálov, DOM a ostatných vlastností

- [L46](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L46) `style.id = 'fc-industrial-queue-enhancements'`.
- [L47](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L47) `style.textContent = ' #industrial_vp_list tbody tr.${EXPR_ROW_CLASS} td { background-color: #fff6ed; transition: background-color 0.2s ease; } #industrial_vp_list tbody tr.${EXPR_ROW_CLASS}:hover td { background-color: #ffefdf; } #industrial_vp_list tbody tr.${EXPR_ROW_CLASS} td:first-child { box-sh`.
- [L153](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L153) `document.title = '(${totalRecords}) ${skratka}'`.
- [L155](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L155) `document.title = skratka`.
- [L268](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L268) `section.style.display = 'none'`.
- [L286](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L286) `section.style.display = 'none'`.
- [L289](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L289) `section.style.display = ''`.
- [L417](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L417) `headerWrapper.textContent = 'ID VP'`.
- [L429](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L429) `firstCell.textContent = ''`.
- [L435](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L435) `badgeLink.className = 'fc-vp-badge-link'`.
- [L436](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L436) `badgeLink.textContent = vpData.id`.
- [L455](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L455) `mainVpLink.textContent = nameText || vpData.id`.
- [L588](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/setTitleForIndustrialQueue.user.js#L588) `document.title = 'VP ${strong.textContent.trim()}'`.
