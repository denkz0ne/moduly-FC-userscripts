# Pokyny Pre - Archiv

Zdroj: pokynPre_archiver.user.js; referencia: 75087f8c4cbd34190e69318038bda6ef36eee0f2.
SHA-256: `0075d6e0af8c6f0ab79053705b2147782bc10cc449da9d5aba343db723e9603a`. Riadkov: 600.

AST inventár: obsahuje aj vnorené/anonýmne funkcie a lokálne premenné. Zoznam premenných nie je zoznam editovateľných nastavení. Volania sú klasifikované podľa názvu; dynamické aliasy môžu vyžadovať ručné dohľadanie. Historické @require hlavičky v načítanom JS nie sú ďalším automaticky spusteným @require reťazcom.

## Metadata

```json
{
  "name": [
    "Pokyny Pre - Archiv"
  ],
  "namespace": [
    "http://faxcopy.sk/"
  ],
  "version": [
    "1.10"
  ],
  "description": [
    "Archivacia pokynov a poznamok z VP formulara + interne priznaky pokynov"
  ],
  "updateURL": [
    "https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/main/pokynPre_archiver.user.js"
  ],
  "downloadURL": [
    "https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/main/pokynPre_archiver.user.js"
  ],
  "match": [
    "https://moduly.faxcopy.sk/vyrobne_prikazy/detail/index/*"
  ],
  "grant": [
    "none"
  ],
  "run-at": [
    "document-idle"
  ]
}
```

## Funkcie a signatúry

- [L14–599](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L14) `<anonymous@14>()`; scope `root`.
- [L69–97](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L69) `openDB()`; scope `<anonymous@14>`.
- [L70–96](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L70) `<anonymous@70>(resolve, reject)`; scope `<anonymous@14>/openDB`.
- [L73–86](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L73) `request.onupgradeneeded(event)`; scope `<anonymous@14>/openDB/<anonymous@70>`.
- [L88–91](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L88) `request.onsuccess(event)`; scope `<anonymous@14>/openDB/<anonymous@70>`.
- [L93–95](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L93) `request.onerror(event)`; scope `<anonymous@14>/openDB/<anonymous@70>`.
- [L99–108](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L99) `saveRecord(data)`; scope `<anonymous@14>`.
- [L100–107](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L100) `<anonymous@100>(resolve, reject)`; scope `<anonymous@14>/saveRecord`.
- [L105–105](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L105) `request.onsuccess()`; scope `<anonymous@14>/saveRecord/<anonymous@100>`.
- [L106–106](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L106) `request.onerror(e)`; scope `<anonymous@14>/saveRecord/<anonymous@100>`.
- [L110–119](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L110) `getAllRecords()`; scope `<anonymous@14>`.
- [L111–118](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L111) `<anonymous@111>(resolve, reject)`; scope `<anonymous@14>/getAllRecords`.
- [L116–116](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L116) `request.onsuccess()`; scope `<anonymous@14>/getAllRecords/<anonymous@111>`.
- [L121–124](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L121) `extractVP()`; scope `<anonymous@14>`.
- [L126–129](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L126) `getSelectedText(select)`; scope `<anonymous@14>`.
- [L131–133](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L131) `nowISO()`; scope `<anonymous@14>`.
- [L135–144](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L135) `escapeHtml(text)`; scope `<anonymous@14>`.
- [L146–148](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L146) `normalizeText(text)`; scope `<anonymous@14>`.
- [L150–152](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L150) `getTagConfig(tagId)`; scope `<anonymous@14>`.
- [L151–151](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L151) `<anonymous@151>(tag)`; scope `<anonymous@14>/getTagConfig`.
- [L154–158](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L154) `getSelectedTags()`; scope `<anonymous@14>`.
- [L156–156](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L156) `<anonymous@156>(button)`; scope `<anonymous@14>/getSelectedTags`.
- [L160–164](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L160) `getSelectedArchiveTags()`; scope `<anonymous@14>`.
- [L162–162](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L162) `<anonymous@162>(button)`; scope `<anonymous@14>/getSelectedArchiveTags`.
- [L166–171](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L166) `getTagLabels(tagIds)`; scope `<anonymous@14>`.
- [L168–168](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L168) `<anonymous@168>(tagId)`; scope `<anonymous@14>/getTagLabels`.
- [L170–170](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L170) `<anonymous@170>(tag)`; scope `<anonymous@14>/getTagLabels`.
- [L173–192](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L173) `applyTagButtonStyle(button, selected)`; scope `<anonymous@14>`.
- [L194–217](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L194) `createTagButton(tag, className, onToggle)`; scope `<anonymous@14>`.
- [L205–214](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L205) `<anonymous@205>()`; scope `<anonymous@14>/createTagButton`.
- [L219–248](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L219) `createTagSelector()`; scope `<anonymous@14>`.
- [L243–245](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L243) `<anonymous@243>(tag)`; scope `<anonymous@14>/createTagSelector`.
- [L250–266](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L250) `renderRecordTags(tagIds)`; scope `<anonymous@14>`.
- [L251–251](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L251) `<anonymous@251>(tagId)`; scope `<anonymous@14>/renderRecordTags`.
- [L259–263](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L259) `<anonymous@259>(tag)`; scope `<anonymous@14>/renderRecordTags`.
- [L268–285](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L268) `createArchiveTagFilters(onFilterChange)`; scope `<anonymous@14>`.
- [L280–282](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L280) `<anonymous@280>(tag)`; scope `<anonymous@14>/createArchiveTagFilters`.
- [L287–299](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L287) `setNativeSelectValue(select, value)`; scope `<anonymous@14>`.
- [L301–311](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L301) `findOptionByText(select, expectedText)`; scope `<anonymous@14>`.
- [L308–309](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L308) `<anonymous@308>(option)`; scope `<anonymous@14>/findOptionByText`.
- [L313–343](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L313) `findAssignedBranchText()`; scope `<anonymous@14>`.
- [L345–378](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L345) `initFormWatcher()`; scope `<anonymous@14>`.
- [L346–377](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L346) `<anonymous@346>()`; scope `<anonymous@14>/initFormWatcher`.
- [L352–376](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L352) `async <anonymous@352>()`; scope `<anonymous@14>/initFormWatcher/<anonymous@346>`.
- [L380–417](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L380) `customizeButtons()`; scope `<anonymous@14>`.
- [L381–416](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L381) `<anonymous@381>()`; scope `<anonymous@14>/customizeButtons`.
- [L419–458](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L419) `initPokynPrePobockuSetter()`; scope `<anonymous@14>`.
- [L422–457](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L422) `<anonymous@422>()`; scope `<anonymous@14>/initPokynPrePobockuSetter`.
- [L438–439](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L438) `<anonymous@438>(option)`; scope `<anonymous@14>/initPokynPrePobockuSetter/<anonymous@422>`.
- [L460–493](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L460) `addViewerStyles()`; scope `<anonymous@14>`.
- [L495–577](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L495) `async openViewer()`; scope `<anonymous@14>`.
- [L497–497](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L497) `<anonymous@497>(a, b)`; scope `<anonymous@14>/openViewer`.
- [L529–549](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L529) `<anonymous@529>(r)`; scope `<anonymous@14>/openViewer`.
- [L558–570](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L558) `applyArchiveFilters()`; scope `<anonymous@14>/openViewer`.
- [L562–569](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L562) `<anonymous@562>(card)`; scope `<anonymous@14>/openViewer/applyArchiveFilters`.
- [L566–566](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L566) `<anonymous@566>(tag)`; scope `<anonymous@14>/openViewer/applyArchiveFilters/<anonymous@562>`.
- [L574–574](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L574) `<anonymous@574>()`; scope `<anonymous@14>/openViewer`.
- [L579–588](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L579) `async exportJSON()`; scope `<anonymous@14>`.
- [L590–596](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L590) `async init()`; scope `<anonymous@14>`.

## Premenné a pôvodné inicializátory

Dlhé inicializátory sú tu skrátené na 300 znakov; úplné znenie je v inventory.json a v zdroji.

- [L17](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L17) `const DB_NAME = 'fc_pokyny_archiv'`; scope `<anonymous@14>`.
- [L18](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L18) `const STORE_NAME = 'pokyny'`; scope `<anonymous@14>`.
- [L19](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L19) `const DB_VERSION = 1`; scope `<anonymous@14>`.
- [L20](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L20) `const STYLE_ID = 'fc-archiver-ui-style'`; scope `<anonymous@14>`.
- [L22](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L22) `const POKYN_TAGS = [ { id: 'chyba', label: 'Chyba', color: '#b42318', background: '#fde8e6', border: '#f3b8b3' }, { id: 'info', label: 'Info', color: '#1d4ed8', background: '#e7f0ff', border: '#b7cdfc' }, { id: 'poziadavka', label: 'Poziadavka', color: '#9a3412', background: '#fff0df', border: '#fdc`; scope `<anonymous@14>`.
- [L67](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L67) `let db = <bez inicializátora>`; scope `<anonymous@14>`.
- [L71](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L71) `const request = indexedDB.open(DB_NAME, DB_VERSION)`; scope `<anonymous@14>/openDB/<anonymous@70>`.
- [L77](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L77) `const store = db.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true })`; scope `<anonymous@14>/openDB/<anonymous@70>/request.onupgradeneeded`.
- [L101](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L101) `const tx = db.transaction(STORE_NAME, 'readwrite')`; scope `<anonymous@14>/saveRecord/<anonymous@100>`.
- [L102](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L102) `const store = tx.objectStore(STORE_NAME)`; scope `<anonymous@14>/saveRecord/<anonymous@100>`.
- [L103](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L103) `const request = store.add(data)`; scope `<anonymous@14>/saveRecord/<anonymous@100>`.
- [L112](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L112) `const tx = db.transaction(STORE_NAME, 'readonly')`; scope `<anonymous@14>/getAllRecords/<anonymous@111>`.
- [L113](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L113) `const store = tx.objectStore(STORE_NAME)`; scope `<anonymous@14>/getAllRecords/<anonymous@111>`.
- [L114](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L114) `const request = store.getAll()`; scope `<anonymous@14>/getAllRecords/<anonymous@111>`.
- [L122](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L122) `const match = location.href.match(/index\/(\d+)/)`; scope `<anonymous@14>/extractVP`.
- [L174](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L174) `const tag = getTagConfig(button.dataset.tag)`; scope `<anonymous@14>/applyTagButtonStyle`.
- [L195](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L195) `const button = document.createElement('button')`; scope `<anonymous@14>/createTagButton`.
- [L206](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L206) `const selected = !button.classList.contains('is-selected')`; scope `<anonymous@14>/createTagButton/<anonymous@205>`.
- [L220](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L220) `const submitBtn = document.querySelector('#frm-pokyn input[type="submit"]')`; scope `<anonymous@14>/createTagSelector`.
- [L225](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L225) `const buttonRow = submitBtn.closest('.form-row') || submitBtn.parentNode`; scope `<anonymous@14>/createTagSelector`.
- [L230](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L230) `const wrapper = document.createElement('div')`; scope `<anonymous@14>/createTagSelector`.
- [L251](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L251) `const tags = (tagIds || []).map(tagId => getTagConfig(tagId)).filter(Boolean)`; scope `<anonymous@14>/renderRecordTags`.
- [L269](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L269) `const wrapper = document.createElement('div')`; scope `<anonymous@14>/createArchiveTagFilters`.
- [L306](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L306) `const normalizedExpected = normalizeText(expectedText).toLowerCase()`; scope `<anonymous@14>/findOptionByText`.
- [L314](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L314) `const detail = document.querySelector('#vpOrderDetail')`; scope `<anonymous@14>/findAssignedBranchText`.
- [L315](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L315) `const root = detail || document`; scope `<anonymous@14>/findAssignedBranchText`.
- [L317](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L317) `const rows = Array.from(root.querySelectorAll('p'))`; scope `<anonymous@14>/findAssignedBranchText`.
- [L319](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L319) `const row = <bez inicializátora>`; scope `<anonymous@14>/findAssignedBranchText`.
- [L320](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L320) `const rowText = normalizeText(row.textContent)`; scope `<anonymous@14>/findAssignedBranchText`.
- [L326](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L326) `const strong = row.querySelector('strong')`; scope `<anonymous@14>/findAssignedBranchText`.
- [L327](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L327) `const strongText = normalizeText(strong ? strong.textContent : '')`; scope `<anonymous@14>/findAssignedBranchText`.
- [L333](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L333) `const match = rowText.match(/Pridelenie:\s*([^\s]+)/)`; scope `<anonymous@14>/findAssignedBranchText`.
- [L339](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L339) `const detailText = normalizeText(root.textContent)`; scope `<anonymous@14>/findAssignedBranchText`.
- [L340](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L340) `const fallbackMatch = detailText.match(/Pridelenie:\s*([^\s]+)/)`; scope `<anonymous@14>/findAssignedBranchText`.
- [L346](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L346) `const interval = setInterval(() => { const form = document.querySelector('#frm-pokyn'); if (!form) return; clearInterval(interval); form.addEventListener('submit', async function () { try { const typSelect = document.querySelector('#frm-pokyn_typ'); const recipientSelect = document.querySelector('#f`; scope `<anonymous@14>/initFormWatcher`.
- [L347](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L347) `const form = document.querySelector('#frm-pokyn')`; scope `<anonymous@14>/initFormWatcher/<anonymous@346>`.
- [L354](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L354) `const typSelect = document.querySelector('#frm-pokyn_typ')`; scope `<anonymous@14>/initFormWatcher/<anonymous@346>/<anonymous@352>`.
- [L355](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L355) `const recipientSelect = document.querySelector('#frm-pokyn_pobocka')`; scope `<anonymous@14>/initFormWatcher/<anonymous@346>/<anonymous@352>`.
- [L356](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L356) `const textarea = document.querySelector('#frm-pokyn textarea[name="pokyn"]')`; scope `<anonymous@14>/initFormWatcher/<anonymous@346>/<anonymous@352>`.
- [L357](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L357) `const tags = getSelectedTags()`; scope `<anonymous@14>/initFormWatcher/<anonymous@346>/<anonymous@352>`.
- [L359](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L359) `const data = { timestamp: nowISO(), url: location.href, vp: extractVP(), typ: getSelectedText(typSelect), recipientValue: recipientSelect ? recipientSelect.value : '', recipientText: getSelectedText(recipientSelect), message: textarea && textarea.value ? textarea.value.trim() : '', tags, tagLabels: `; scope `<anonymous@14>/initFormWatcher/<anonymous@346>/<anonymous@352>`.
- [L381](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L381) `const interval = setInterval(() => { const submitBtn = document.querySelector('#frm-pokyn input[type="submit"]'); if (!submitBtn) return; if (!document.querySelector('#fc-archive-btn')) { submitBtn.value = 'Potvrdit a archivovat'; Object.assign(submitBtn.style, { border: '1px solid #779904', borderR`; scope `<anonymous@14>/customizeButtons`.
- [L382](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L382) `const submitBtn = document.querySelector('#frm-pokyn input[type="submit"]')`; scope `<anonymous@14>/customizeButtons/<anonymous@381>`.
- [L399](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L399) `const archiveBtn = document.createElement('button')`; scope `<anonymous@14>/customizeButtons/<anonymous@381>`.
- [L420](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L420) `let tries = 0`; scope `<anonymous@14>/initPokynPrePobockuSetter`.
- [L422](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L422) `const interval = setInterval(() => { tries++; const typSelect = document.querySelector('#frm-pokyn_typ'); const branchSelect = document.querySelector('#frm-pokyn_pobocka'); const assignedBranchText = findAssignedBranchText(); if (!typSelect || !branchSelect || !assignedBranchText) { if (tries > 80) `; scope `<anonymous@14>/initPokynPrePobockuSetter`.
- [L425](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L425) `const typSelect = document.querySelector('#frm-pokyn_typ')`; scope `<anonymous@14>/initPokynPrePobockuSetter/<anonymous@422>`.
- [L426](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L426) `const branchSelect = document.querySelector('#frm-pokyn_pobocka')`; scope `<anonymous@14>/initPokynPrePobockuSetter/<anonymous@422>`.
- [L427](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L427) `const assignedBranchText = findAssignedBranchText()`; scope `<anonymous@14>/initPokynPrePobockuSetter/<anonymous@422>`.
- [L438](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L438) `const pokynPreOption = Array.from(typSelect.options).find(option => normalizeText(option.text).toLowerCase().startsWith('pokyn pre') )`; scope `<anonymous@14>/initPokynPrePobockuSetter/<anonymous@422>`.
- [L446](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L446) `const branchOption = findOptionByText(branchSelect, assignedBranchText)`; scope `<anonymous@14>/initPokynPrePobockuSetter/<anonymous@422>`.
- [L462](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L462) `const style = document.createElement('style')`; scope `<anonymous@14>/addViewerStyles`.
- [L496](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L496) `const records = await getAllRecords()`; scope `<anonymous@14>/openViewer`.
- [L499](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L499) `const oldPanel = document.querySelector('#fc-archiv-panel')`; scope `<anonymous@14>/openViewer`.
- [L506](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L506) `const panel = document.createElement('section')`; scope `<anonymous@14>/openViewer`.
- [L512](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L512) `let html = ' <div class="fc-archiv-head"> <div> <div class="fc-archiv-title">Archív pokynov</div> <div class="fc-archiv-count">${records.length} záznamov</div> </div> <div class="fc-archiv-actions"> <button id="fc-export-json" class="fc-archive-button primary" type="button">Exportovať JSON</button> `; scope `<anonymous@14>/openViewer`.
- [L530](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L530) `const tags = Array.isArray(r.tags) ? r.tags : []`; scope `<anonymous@14>/openViewer/<anonymous@529>`.
- [L531](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L531) `const tagSearchText = getTagLabels(tags).join(' ')`; scope `<anonymous@14>/openViewer/<anonymous@529>`.
- [L555](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L555) `const searchInput = panel.querySelector('#fc-search')`; scope `<anonymous@14>/openViewer`.
- [L556](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L556) `const archiveControls = panel.querySelector('#fc-archive-controls')`; scope `<anonymous@14>/openViewer`.
- [L559](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L559) `const value = searchInput.value.toLowerCase()`; scope `<anonymous@14>/openViewer/applyArchiveFilters`.
- [L560](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L560) `const selectedTags = getSelectedArchiveTags()`; scope `<anonymous@14>/openViewer/applyArchiveFilters`.
- [L563](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L563) `const text = card.innerText.toLowerCase()`; scope `<anonymous@14>/openViewer/applyArchiveFilters/<anonymous@562>`.
- [L564](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L564) `const tags = (card.dataset.tags || '').toLowerCase().split(' ').filter(Boolean)`; scope `<anonymous@14>/openViewer/applyArchiveFilters/<anonymous@562>`.
- [L565](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L565) `const textMatch = !value || text.includes(value) || tags.join(' ').includes(value)`; scope `<anonymous@14>/openViewer/applyArchiveFilters/<anonymous@562>`.
- [L566](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L566) `const tagMatch = !selectedTags.length || selectedTags.some(tag => tags.includes(tag))`; scope `<anonymous@14>/openViewer/applyArchiveFilters/<anonymous@562>`.
- [L580](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L580) `const records = await getAllRecords()`; scope `<anonymous@14>/exportJSON`.
- [L581](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L581) `const blob = new Blob([JSON.stringify(records, null, 2)], { type: 'application/json' })`; scope `<anonymous@14>/exportJSON`.
- [L582](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L582) `const url = URL.createObjectURL(blob)`; scope `<anonymous@14>/exportJSON`.
- [L583](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L583) `const a = document.createElement('a')`; scope `<anonymous@14>/exportJSON`.

## storage

- [L14](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L14) `function () { 'use strict'; const DB_NAME = 'fc_pokyny_archiv'; const STORE_NAME = 'pokyny'; const DB_VERSION = 1; const STYLE_ID = 'fc-archiver-ui-style'; const POKYN_TAGS = [ { id: 'chyba', label: 'Chyba', color: '#b42318', background: '#fde8e6', border: '#f3b8b3' }, { id: 'info', label: 'Info', c`; scope `root`.
- [L71](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L71) `indexedDB.open(DB_NAME, DB_VERSION)`; scope `<anonymous@14>/openDB/<anonymous@70>`.
- [L77](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L77) `db.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true })`; scope `<anonymous@14>/openDB/<anonymous@70>/request.onupgradeneeded`.
- [L101](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L101) `db.transaction(STORE_NAME, 'readwrite')`; scope `<anonymous@14>/saveRecord/<anonymous@100>`.
- [L112](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L112) `db.transaction(STORE_NAME, 'readonly')`; scope `<anonymous@14>/getAllRecords/<anonymous@111>`.

## events

- [L14](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L14) `function () { 'use strict'; const DB_NAME = 'fc_pokyny_archiv'; const STORE_NAME = 'pokyny'; const DB_VERSION = 1; const STYLE_ID = 'fc-archiver-ui-style'; const POKYN_TAGS = [ { id: 'chyba', label: 'Chyba', color: '#b42318', background: '#fde8e6', border: '#f3b8b3' }, { id: 'info', label: 'Info', c`; scope `root`.
- [L205](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L205) `button.addEventListener('click', () => { const selected = !button.classList.contains('is-selected'); button.classList.toggle('is-selected', selected); button.setAttribute('aria-pressed', selected ? 'true' : 'false'); applyTagButtonStyle(button, selected); if (onToggle) { onToggle(); } })`; scope `<anonymous@14>/createTagButton`.
- [L293](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L293) `select.dispatchEvent(new Event('input', { bubbles: true }))`; scope `<anonymous@14>/setNativeSelectValue`.
- [L294](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L294) `select.dispatchEvent(new Event('change', { bubbles: true }))`; scope `<anonymous@14>/setNativeSelectValue`.
- [L352](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L352) `form.addEventListener('submit', async function () { try { const typSelect = document.querySelector('#frm-pokyn_typ'); const recipientSelect = document.querySelector('#frm-pokyn_pobocka'); const textarea = document.querySelector('#frm-pokyn textarea[name="pokyn"]'); const tags = getSelectedTags(); co`; scope `<anonymous@14>/initFormWatcher/<anonymous@346>`.
- [L407](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L407) `archiveBtn.addEventListener('click', openViewer)`; scope `<anonymous@14>/customizeButtons/<anonymous@381>`.
- [L574](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L574) `panel.querySelector('#fc-close-panel').addEventListener('click', () => panel.remove())`; scope `<anonymous@14>/openViewer`.
- [L575](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L575) `panel.querySelector('#fc-export-json').addEventListener('click', exportJSON)`; scope `<anonymous@14>/openViewer`.
- [L576](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L576) `searchInput.addEventListener('input', applyArchiveFilters)`; scope `<anonymous@14>/openViewer`.

## lifecycle

- [L14](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L14) `function () { 'use strict'; const DB_NAME = 'fc_pokyny_archiv'; const STORE_NAME = 'pokyny'; const DB_VERSION = 1; const STYLE_ID = 'fc-archiver-ui-style'; const POKYN_TAGS = [ { id: 'chyba', label: 'Chyba', color: '#b42318', background: '#fde8e6', border: '#f3b8b3' }, { id: 'info', label: 'Info', c`; scope `root`.
- [L346](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L346) `setInterval(() => { const form = document.querySelector('#frm-pokyn'); if (!form) return; clearInterval(interval); form.addEventListener('submit', async function () { try { const typSelect = document.querySelector('#frm-pokyn_typ'); const recipientSelect = document.querySelector('#frm-pokyn_pobocka'`; scope `<anonymous@14>/initFormWatcher`.
- [L350](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L350) `clearInterval(interval)`; scope `<anonymous@14>/initFormWatcher/<anonymous@346>`.
- [L381](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L381) `setInterval(() => { const submitBtn = document.querySelector('#frm-pokyn input[type="submit"]'); if (!submitBtn) return; if (!document.querySelector('#fc-archive-btn')) { submitBtn.value = 'Potvrdit a archivovat'; Object.assign(submitBtn.style, { border: '1px solid #779904', borderRadius: '2px', pad`; scope `<anonymous@14>/customizeButtons`.
- [L414](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L414) `clearInterval(interval)`; scope `<anonymous@14>/customizeButtons/<anonymous@381>`.
- [L422](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L422) `setInterval(() => { tries++; const typSelect = document.querySelector('#frm-pokyn_typ'); const branchSelect = document.querySelector('#frm-pokyn_pobocka'); const assignedBranchText = findAssignedBranchText(); if (!typSelect || !branchSelect || !assignedBranchText) { if (tries > 80) { clearInterval(i`; scope `<anonymous@14>/initPokynPrePobockuSetter`.
- [L431](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L431) `clearInterval(interval)`; scope `<anonymous@14>/initPokynPrePobockuSetter/<anonymous@422>`.
- [L449](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L449) `clearInterval(interval)`; scope `<anonymous@14>/initPokynPrePobockuSetter/<anonymous@422>`.
- [L455](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L455) `clearInterval(interval)`; scope `<anonymous@14>/initPokynPrePobockuSetter/<anonymous@422>`.

## io

- [L14](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L14) `function () { 'use strict'; const DB_NAME = 'fc_pokyny_archiv'; const STORE_NAME = 'pokyny'; const DB_VERSION = 1; const STYLE_ID = 'fc-archiver-ui-style'; const POKYN_TAGS = [ { id: 'chyba', label: 'Chyba', color: '#b42318', background: '#fde8e6', border: '#f3b8b3' }, { id: 'info', label: 'Info', c`; scope `root`.
- [L71](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L71) `indexedDB.open(DB_NAME, DB_VERSION)`; scope `<anonymous@14>/openDB/<anonymous@70>`.
- [L582](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L582) `URL.createObjectURL(blob)`; scope `<anonymous@14>/exportJSON`.
- [L587](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L587) `URL.revokeObjectURL(url)`; scope `<anonymous@14>/exportJSON`.

## dom-read

- [L14](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L14) `function () { 'use strict'; const DB_NAME = 'fc_pokyny_archiv'; const STORE_NAME = 'pokyny'; const DB_VERSION = 1; const STYLE_ID = 'fc-archiver-ui-style'; const POKYN_TAGS = [ { id: 'chyba', label: 'Chyba', color: '#b42318', background: '#fde8e6', border: '#f3b8b3' }, { id: 'info', label: 'Info', c`; scope `root`.
- [L155](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L155) `Array.from(document.querySelectorAll('#fc-pokyn-tags .fc-pokyn-tag.is-selected')) .map(button => button.dataset.tag) .filter(Boolean)`; scope `<anonymous@14>/getSelectedTags`.
- [L155](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L155) `Array.from(document.querySelectorAll('#fc-pokyn-tags .fc-pokyn-tag.is-selected')) .map(button => button.dataset.tag)`; scope `<anonymous@14>/getSelectedTags`.
- [L155](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L155) `document.querySelectorAll('#fc-pokyn-tags .fc-pokyn-tag.is-selected')`; scope `<anonymous@14>/getSelectedTags`.
- [L161](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L161) `Array.from(document.querySelectorAll('#fc-archive-tag-filters .fc-archive-tag-filter.is-selected')) .map(button => button.dataset.tag) .filter(Boolean)`; scope `<anonymous@14>/getSelectedArchiveTags`.
- [L161](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L161) `Array.from(document.querySelectorAll('#fc-archive-tag-filters .fc-archive-tag-filter.is-selected')) .map(button => button.dataset.tag)`; scope `<anonymous@14>/getSelectedArchiveTags`.
- [L161](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L161) `document.querySelectorAll('#fc-archive-tag-filters .fc-archive-tag-filter.is-selected')`; scope `<anonymous@14>/getSelectedArchiveTags`.
- [L220](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L220) `document.querySelector('#frm-pokyn input[type="submit"]')`; scope `<anonymous@14>/createTagSelector`.
- [L221](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L221) `document.querySelector('#fc-pokyn-tags')`; scope `<anonymous@14>/createTagSelector`.
- [L225](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L225) `submitBtn.closest('.form-row')`; scope `<anonymous@14>/createTagSelector`.
- [L314](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L314) `document.querySelector('#vpOrderDetail')`; scope `<anonymous@14>/findAssignedBranchText`.
- [L317](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L317) `root.querySelectorAll('p')`; scope `<anonymous@14>/findAssignedBranchText`.
- [L326](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L326) `row.querySelector('strong')`; scope `<anonymous@14>/findAssignedBranchText`.
- [L347](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L347) `document.querySelector('#frm-pokyn')`; scope `<anonymous@14>/initFormWatcher/<anonymous@346>`.
- [L354](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L354) `document.querySelector('#frm-pokyn_typ')`; scope `<anonymous@14>/initFormWatcher/<anonymous@346>/<anonymous@352>`.
- [L355](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L355) `document.querySelector('#frm-pokyn_pobocka')`; scope `<anonymous@14>/initFormWatcher/<anonymous@346>/<anonymous@352>`.
- [L356](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L356) `document.querySelector('#frm-pokyn textarea[name="pokyn"]')`; scope `<anonymous@14>/initFormWatcher/<anonymous@346>/<anonymous@352>`.
- [L382](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L382) `document.querySelector('#frm-pokyn input[type="submit"]')`; scope `<anonymous@14>/customizeButtons/<anonymous@381>`.
- [L385](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L385) `document.querySelector('#fc-archive-btn')`; scope `<anonymous@14>/customizeButtons/<anonymous@381>`.
- [L413](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L413) `document.querySelector('#fc-archive-btn')`; scope `<anonymous@14>/customizeButtons/<anonymous@381>`.
- [L413](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L413) `document.querySelector('#fc-pokyn-tags')`; scope `<anonymous@14>/customizeButtons/<anonymous@381>`.
- [L425](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L425) `document.querySelector('#frm-pokyn_typ')`; scope `<anonymous@14>/initPokynPrePobockuSetter/<anonymous@422>`.
- [L426](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L426) `document.querySelector('#frm-pokyn_pobocka')`; scope `<anonymous@14>/initPokynPrePobockuSetter/<anonymous@422>`.
- [L461](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L461) `document.getElementById(STYLE_ID)`; scope `<anonymous@14>/addViewerStyles`.
- [L499](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L499) `document.querySelector('#fc-archiv-panel')`; scope `<anonymous@14>/openViewer`.
- [L555](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L555) `panel.querySelector('#fc-search')`; scope `<anonymous@14>/openViewer`.
- [L556](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L556) `panel.querySelector('#fc-archive-controls')`; scope `<anonymous@14>/openViewer`.
- [L562](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L562) `panel.querySelectorAll('.fc-record').forEach(card => { const text = card.innerText.toLowerCase(); const tags = (card.dataset.tags || '').toLowerCase().split(' ').filter(Boolean); const textMatch = !value || text.includes(value) || tags.join(' ').includes(value); const tagMatch = !selectedTags.length`; scope `<anonymous@14>/openViewer/applyArchiveFilters`.
- [L562](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L562) `panel.querySelectorAll('.fc-record')`; scope `<anonymous@14>/openViewer/applyArchiveFilters`.
- [L574](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L574) `panel.querySelector('#fc-close-panel').addEventListener('click', () => panel.remove())`; scope `<anonymous@14>/openViewer`.
- [L574](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L574) `panel.querySelector('#fc-close-panel')`; scope `<anonymous@14>/openViewer`.
- [L575](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L575) `panel.querySelector('#fc-export-json').addEventListener('click', exportJSON)`; scope `<anonymous@14>/openViewer`.
- [L575](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L575) `panel.querySelector('#fc-export-json')`; scope `<anonymous@14>/openViewer`.

## dom-write

- [L14](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L14) `function () { 'use strict'; const DB_NAME = 'fc_pokyny_archiv'; const STORE_NAME = 'pokyny'; const DB_VERSION = 1; const STYLE_ID = 'fc-archiver-ui-style'; const POKYN_TAGS = [ { id: 'chyba', label: 'Chyba', color: '#b42318', background: '#fde8e6', border: '#f3b8b3' }, { id: 'info', label: 'Info', c`; scope `root`.
- [L201](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L201) `button.setAttribute('aria-pressed', 'false')`; scope `<anonymous@14>/createTagButton`.
- [L208](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L208) `button.setAttribute('aria-pressed', selected ? 'true' : 'false')`; scope `<anonymous@14>/createTagButton/<anonymous@205>`.
- [L244](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L244) `wrapper.appendChild(createTagButton(tag, 'fc-pokyn-tag'))`; scope `<anonymous@14>/createTagSelector/<anonymous@243>`.
- [L247](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L247) `buttonRow.insertAdjacentElement('afterend', wrapper)`; scope `<anonymous@14>/createTagSelector`.
- [L281](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L281) `wrapper.appendChild(createTagButton(tag, 'fc-archive-tag-filter', onFilterChange))`; scope `<anonymous@14>/createArchiveTagFilters/<anonymous@280>`.
- [L405](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L405) `archiveBtn.setAttribute('aria-haspopup', 'dialog')`; scope `<anonymous@14>/customizeButtons/<anonymous@381>`.
- [L408](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L408) `submitBtn.insertAdjacentElement('afterend', archiveBtn)`; scope `<anonymous@14>/customizeButtons/<anonymous@381>`.
- [L492](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L492) `(document.head || document.documentElement).appendChild(style)`; scope `<anonymous@14>/addViewerStyles`.
- [L501](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L501) `oldPanel.remove()`; scope `<anonymous@14>/openViewer`.
- [L508](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L508) `panel.setAttribute('role', 'dialog')`; scope `<anonymous@14>/openViewer`.
- [L509](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L509) `panel.setAttribute('aria-modal', 'true')`; scope `<anonymous@14>/openViewer`.
- [L510](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L510) `panel.setAttribute('aria-label', 'Archív pokynov')`; scope `<anonymous@14>/openViewer`.
- [L553](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L553) `document.body.appendChild(panel)`; scope `<anonymous@14>/openViewer`.
- [L572](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L572) `archiveControls.appendChild(createArchiveTagFilters(applyArchiveFilters))`; scope `<anonymous@14>/openViewer`.
- [L574](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L574) `panel.remove()`; scope `<anonymous@14>/openViewer/<anonymous@574>`.

## logs

- [L14](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L14) `function () { 'use strict'; const DB_NAME = 'fc_pokyny_archiv'; const STORE_NAME = 'pokyny'; const DB_VERSION = 1; const STYLE_ID = 'fc-archiver-ui-style'; const POKYN_TAGS = [ { id: 'chyba', label: 'Chyba', color: '#b42318', background: '#fde8e6', border: '#f3b8b3' }, { id: 'info', label: 'Info', c`; scope `root`.
- [L374](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L374) `console.error('[ARCHIV] submit save failed', err)`; scope `<anonymous@14>/initFormWatcher/<anonymous@346>/<anonymous@352>`.
- [L432](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L432) `console.warn('[ARCHIV] nepodarilo sa najst formular alebo Pridelenie')`; scope `<anonymous@14>/initPokynPrePobockuSetter/<anonymous@422>`.
- [L450](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L450) `console.warn('[ARCHIV] pobocka ${assignedBranchText} nie je v selecte Pokyn pre')`; scope `<anonymous@14>/initPokynPrePobockuSetter/<anonymous@422>`.
- [L456](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L456) `console.log('[ARCHIV] Pokyn pre nastaveny na ${assignedBranchText}')`; scope `<anonymous@14>/initPokynPrePobockuSetter/<anonymous@422>`.

## Zápisy do globálov, DOM a ostatných vlastností

- [L198](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L198) `button.className = className`.
- [L199](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L199) `button.textContent = tag.label`.
- [L231](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L231) `wrapper.id = 'fc-pokyn-tags'`.
- [L270](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L270) `wrapper.id = 'fc-archive-tag-filters'`.
- [L400](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L400) `archiveBtn.id = 'fc-archive-btn'`.
- [L402](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L402) `archiveBtn.className = 'fc-archive-open'`.
- [L403](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L403) `archiveBtn.textContent = 'Archív'`.
- [L463](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L463) `style.id = STYLE_ID`.
- [L464](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L464) `style.textContent = ' #fc-archive-btn{margin-left:8px;padding:5px 9px;border:1px solid #779904;border-radius:2px;background:#8BB400;color:#fff;font:700 11px Tahoma,Calibri,"Trebuchet MS",sans-serif;cursor:pointer} #fc-archive-btn:hover{background:#779904} #fc-archiv-panel{position:fixed;top:50%;left`.
- [L507](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L507) `panel.id = 'fc-archiv-panel'`.
- [L552](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L552) `panel.innerHTML = html`.
- [L568](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/pokynPre_archiver.user.js#L568) `card.style.display = textMatch && tagMatch ? '' : 'none'`.
