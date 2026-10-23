# attendanceBalancePredictor

Zdroj: attendanceBalancePredictor.user.js; referencia: 75087f8c4cbd34190e69318038bda6ef36eee0f2.
SHA-256: `d1623bc1ae4cb8d3b569e0f7b1a100b868080c2024d8f72534025afc16f29130`. Riadkov: 498.

AST inventár: obsahuje aj vnorené/anonýmne funkcie a lokálne premenné. Zoznam premenných nie je zoznam editovateľných nastavení. Volania sú klasifikované podľa názvu; dynamické aliasy môžu vyžadovať ručné dohľadanie. Historické @require hlavičky v načítanom JS nie sú ďalším automaticky spusteným @require reťazcom.

## Metadata

```json
{
  "name": [
    "attendanceBalancePredictor"
  ],
  "namespace": [
    "https://person.faxcopy.sk/"
  ],
  "author": [
    "Codex"
  ],
  "version": [
    "0.2.1"
  ],
  "description": [
    "Prepocet upravenej dochadzky, kumulativnej bilancie a predikcie buducich dni."
  ],
  "updateURL": [
    "https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/attendanceBalancePredictor.user.js"
  ],
  "downloadURL": [
    "https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/attendanceBalancePredictor.user.js"
  ],
  "match": [
    "https://person.faxcopy.sk/*"
  ],
  "run-at": [
    "document-end"
  ]
}
```

## Funkcie a signatúry

- [L14–497](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L14) `<anonymous@14>()`; scope `root`.
- [L26–53](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L26) `injectStyles()`; scope `<anonymous@14>`.
- [L55–57](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L55) `cleanText(value)`; scope `<anonymous@14>`.
- [L59–63](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L59) `parseDate(dateText)`; scope `<anonymous@14>`.
- [L65–69](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L65) `timeToMinutes(value)`; scope `<anonymous@14>`.
- [L71–76](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L71) `minutesToTime(totalMinutes)`; scope `<anonymous@14>`.
- [L78–83](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L78) `durationToText(totalMinutes)`; scope `<anonymous@14>`.
- [L85–88](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L85) `signedDuration(totalMinutes)`; scope `<anonymous@14>`.
- [L90–92](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L90) `roundUpQuarter(minutes)`; scope `<anonymous@14>`.
- [L94–96](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L94) `roundDownQuarter(minutes)`; scope `<anonymous@14>`.
- [L98–100](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L98) `roundNearestQuarter(minutes)`; scope `<anonymous@14>`.
- [L102–104](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L102) `sameDay(a, b)`; scope `<anonymous@14>`.
- [L106–111](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L106) `isBeforeDay(a, b)`; scope `<anonymous@14>`.
- [L113–118](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L113) `isAfterDay(a, b)`; scope `<anonymous@14>`.
- [L120–142](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L120) `parseTimeRange(text)`; scope `<anonymous@14>`.
- [L144–150](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L144) `createValueSpan(text, className, title)`; scope `<anonymous@14>`.
- [L152–155](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L152) `setCellValue(cell, text, className, title)`; scope `<anonymous@14>`.
- [L157–187](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L157) `getDayGroups(table)`; scope `<anonymous@14>`.
- [L165–184](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L165) `<anonymous@165>(row)`; scope `<anonymous@14>/getDayGroups`.
- [L189–220](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L189) `ensureAdjustedCells(day)`; scope `<anonymous@14>`.
- [L222–268](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L222) `parseDay(group)`; scope `<anonymous@14>`.
- [L270–272](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L270) `buildDays(table)`; scope `<anonymous@14>`.
- [L271–271](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L271) `<anonymous@271>(day)`; scope `<anonymous@14>/buildDays`.
- [L274–325](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L274) `computeActualDay(day, today)`; scope `<anonymous@14>`.
- [L327–329](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L327) `collectForecastCandidates(days, today)`; scope `<anonymous@14>`.
- [L328–328](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L328) `<anonymous@328>(day)`; scope `<anonymous@14>/collectForecastCandidates`.
- [L331–375](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L331) `allocateForecasts(days, today)`; scope `<anonymous@14>`.
- [L334–341](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L334) `<anonymous@334>(day)`; scope `<anonymous@14>/allocateForecasts`.
- [L346–374](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L346) `<anonymous@346>(day, index)`; scope `<anonymous@14>/allocateForecasts`.
- [L377–396](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L377) `updateAdjustedCells(day, payload, className)`; scope `<anonymous@14>`.
- [L398–410](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L398) `updateBalanceCell(day, cumulativeBalance, isFuture, tooltip)`; scope `<anonymous@14>`.
- [L412–431](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L412) `renderDays(days)`; scope `<anonymous@14>`.
- [L420–430](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L420) `<anonymous@420>(day)`; scope `<anonymous@14>/renderDays`.
- [L436–445](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L436) `applyScript(table)`; scope `<anonymous@14>`.
- [L447–451](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L447) `resetAndApply(table)`; scope `<anonymous@14>`.
- [L453–482](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L453) `watchTable()`; scope `<anonymous@14>`.
- [L456–476](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L456) `<anonymous@456>()`; scope `<anonymous@14>/watchTable`.
- [L461–475](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L461) `<anonymous@461>()`; scope `<anonymous@14>/watchTable/<anonymous@456>`.
- [L484–490](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L484) `init()`; scope `<anonymous@14>`.

## Premenné a pôvodné inicializátory

Dlhé inicializátory sú tu skrátené na 300 znakov; úplné znenie je v inventory.json a v zdroji.

- [L17](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L17) `const TABLE_SELECTOR = '#attendance-month'`; scope `<anonymous@14>`.
- [L18](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L18) `const DAILY_PRESENCE_TARGET_MINUTES = 8 * 60 + 30`; scope `<anonymous@14>`.
- [L19](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L19) `const DAILY_WORK_TARGET_MINUTES = 8 * 60`; scope `<anonymous@14>`.
- [L20](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L20) `const LUNCH_BREAK_MINUTES = 30`; scope `<anonymous@14>`.
- [L21](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L21) `const FORECAST_ARRIVAL_MINUTES = 6 * 60 + 15`; scope `<anonymous@14>`.
- [L22](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L22) `const MAX_DAILY_DEVIATION_MINUTES = 45`; scope `<anonymous@14>`.
- [L24](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L24) `const STYLE_ID = 'attendance-balance-predictor-style'`; scope `<anonymous@14>`.
- [L29](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L29) `const style = document.createElement('style')`; scope `<anonymous@14>/injectStyles`.
- [L60](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L60) `const match = cleanText(dateText).match(/^(\d{4})-(\d{2})-(\d{2})/)`; scope `<anonymous@14>/parseDate`.
- [L66](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L66) `const match = cleanText(value).match(/^(\d{1,2}):(\d{2})$/)`; scope `<anonymous@14>/timeToMinutes`.
- [L72](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L72) `const normalized = Math.max(0, totalMinutes)`; scope `<anonymous@14>/minutesToTime`.
- [L73](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L73) `const hours = Math.floor(normalized / 60)`; scope `<anonymous@14>/minutesToTime`.
- [L74](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L74) `const minutes = normalized % 60`; scope `<anonymous@14>/minutesToTime`.
- [L79](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L79) `const abs = Math.abs(totalMinutes)`; scope `<anonymous@14>/durationToText`.
- [L80](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L80) `const hours = Math.floor(abs / 60)`; scope `<anonymous@14>/durationToText`.
- [L81](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L81) `const minutes = abs % 60`; scope `<anonymous@14>/durationToText`.
- [L108](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L108) `const left = new Date(a.getFullYear(), a.getMonth(), a.getDate()).getTime()`; scope `<anonymous@14>/isBeforeDay`.
- [L109](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L109) `const right = new Date(b.getFullYear(), b.getMonth(), b.getDate()).getTime()`; scope `<anonymous@14>/isBeforeDay`.
- [L115](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L115) `const left = new Date(a.getFullYear(), a.getMonth(), a.getDate()).getTime()`; scope `<anonymous@14>/isAfterDay`.
- [L116](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L116) `const right = new Date(b.getFullYear(), b.getMonth(), b.getDate()).getTime()`; scope `<anonymous@14>/isAfterDay`.
- [L121](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L121) `const normalized = cleanText(text)`; scope `<anonymous@14>/parseTimeRange`.
- [L122](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L122) `const range = normalized.match(/(\d{1,2}:\d{2})\s*-\s*(\d{1,2}:\d{2})/)`; scope `<anonymous@14>/parseTimeRange`.
- [L130](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L130) `const single = normalized.match(/^(\d{1,2}:\d{2})$/)`; scope `<anonymous@14>/parseTimeRange`.
- [L145](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L145) `const span = document.createElement('span')`; scope `<anonymous@14>/createValueSpan`.
- [L158](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L158) `const body = table.tBodies[0]`; scope `<anonymous@14>/getDayGroups`.
- [L161](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L161) `const rows = Array.from(body.rows)`; scope `<anonymous@14>/getDayGroups`.
- [L162](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L162) `const groups = []`; scope `<anonymous@14>/getDayGroups`.
- [L163](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L163) `let current = null`; scope `<anonymous@14>/getDayGroups`.
- [L166](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L166) `const firstCell = row.cells[0]`; scope `<anonymous@14>/getDayGroups/<anonymous@165>`.
- [L167](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L167) `const firstText = cleanText(firstCell ? firstCell.textContent : '')`; scope `<anonymous@14>/getDayGroups/<anonymous@165>`.
- [L168](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L168) `const isDayStart = /^\d{4}-\d{2}-\d{2}/.test(firstText)`; scope `<anonymous@14>/getDayGroups/<anonymous@165>`.
- [L197](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L197) `const row = day.firstRow`; scope `<anonymous@14>/ensureAdjustedCells`.
- [L198](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L198) `const adjustedEmptyCell = row.querySelector('td[colspan="2"]:not(.approved):not(.planned)')`; scope `<anonymous@14>/ensureAdjustedCells`.
- [L204](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L204) `const adjustedCells = [ document.createElement('td'), document.createElement('td') ]`; scope `<anonymous@14>/ensureAdjustedCells`.
- [L223](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L223) `const firstRow = group.firstRow`; scope `<anonymous@14>/parseDay`.
- [L224](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L224) `const actualRow = group.rows.length > 1 ? group.rows[group.rows.length - 1] : null`; scope `<anonymous@14>/parseDay`.
- [L225](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L225) `const plannedTypeCell = firstRow.cells[1] || null`; scope `<anonymous@14>/parseDay`.
- [L226](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L226) `const plannedTimeCell = firstRow.cells[2] || null`; scope `<anonymous@14>/parseDay`.
- [L227](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L227) `const plannedTotalCell = firstRow.cells[3] || null`; scope `<anonymous@14>/parseDay`.
- [L228](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L228) `const balanceCell = firstRow.cells.length >= 2 ? firstRow.cells[firstRow.cells.length - 2] : null`; scope `<anonymous@14>/parseDay`.
- [L230](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L230) `const plannedType = cleanText(plannedTypeCell ? plannedTypeCell.textContent : '')`; scope `<anonymous@14>/parseDay`.
- [L231](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L231) `const plannedTime = cleanText(plannedTimeCell ? plannedTimeCell.textContent : '')`; scope `<anonymous@14>/parseDay`.
- [L232](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L232) `const plannedTotal = cleanText(plannedTotalCell ? plannedTotalCell.textContent : '')`; scope `<anonymous@14>/parseDay`.
- [L234](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L234) `let actualTimeCell = null`; scope `<anonymous@14>/parseDay`.
- [L235](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L235) `let adjustedTimeCell = null`; scope `<anonymous@14>/parseDay`.
- [L236](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L236) `let adjustedTotalCell = null`; scope `<anonymous@14>/parseDay`.
- [L244](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L244) `const actualTimeText = cleanText(actualTimeCell ? actualTimeCell.textContent : '')`; scope `<anonymous@14>/parseDay`.
- [L245](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L245) `const parsedActual = parseTimeRange(actualTimeText)`; scope `<anonymous@14>/parseDay`.
- [L246](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L246) `const isScheduled = !!plannedTotal`; scope `<anonymous@14>/parseDay`.
- [L247](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L247) `const hasWeekendOrHolidayColor = /background-color:\s*#(?:d2ebfd|fdd2d2)/i.test(firstRow.getAttribute('style') || '')`; scope `<anonymous@14>/parseDay`.
- [L248](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L248) `const isNonWorkingDay = !isScheduled && hasWeekendOrHolidayColor`; scope `<anonymous@14>/parseDay`.
- [L249](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L249) `const isSpecialScheduledDay = isScheduled && plannedType && plannedType !== 'PrZ'`; scope `<anonymous@14>/parseDay`.
- [L275](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L275) `const result = { adjustedArrival: null, adjustedDeparture: null, presenceMinutes: null, workedMinutes: null, balanceMinutes: null, planningBalanceMinutes: null, tooltip: '' }`; scope `<anonymous@14>/computeActualDay`.
- [L332](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L332) `let runningBalance = 0`; scope `<anonymous@14>/allocateForecasts`.
- [L343](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L343) `const futureDays = collectForecastCandidates(days, today)`; scope `<anonymous@14>/allocateForecasts`.
- [L344](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L344) `let remainingBalance = runningBalance`; scope `<anonymous@14>/allocateForecasts`.
- [L347](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L347) `const forecast = { adjustedArrival: null, adjustedDeparture: null, presenceMinutes: DAILY_PRESENCE_TARGET_MINUTES, workedMinutes: DAILY_WORK_TARGET_MINUTES, balanceMinutes: 0, planningBalanceMinutes: 0, tooltip: '' }`; scope `<anonymous@14>/allocateForecasts/<anonymous@346>`.
- [L358](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L358) `const daysLeft = futureDays.length - index`; scope `<anonymous@14>/allocateForecasts/<anonymous@346>`.
- [L359](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L359) `const desiredDailyBalance = roundNearestQuarter((-remainingBalance) / daysLeft)`; scope `<anonymous@14>/allocateForecasts/<anonymous@346>`.
- [L360](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L360) `const cappedBalance = Math.max(-MAX_DAILY_DEVIATION_MINUTES, Math.min(MAX_DAILY_DEVIATION_MINUTES, desiredDailyBalance))`; scope `<anonymous@14>/allocateForecasts/<anonymous@346>`.
- [L378](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L378) `const cells = ensureAdjustedCells(day)`; scope `<anonymous@14>/updateAdjustedCells`.
- [L401](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L401) `const className = isFuture ? 'abp-forecast' : cumulativeBalance > 0 ? 'abp-positive' : cumulativeBalance < 0 ? 'abp-negative' : 'abp-neutral'`; scope `<anonymous@14>/updateBalanceCell`.
- [L413](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L413) `const today = new Date()`; scope `<anonymous@14>/renderDays`.
- [L414](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L414) `const currentDay = new Date(today.getFullYear(), today.getMonth(), today.getDate())`; scope `<anonymous@14>/renderDays`.
- [L418](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L418) `let cumulativeBalance = 0`; scope `<anonymous@14>/renderDays`.
- [L421](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L421) `const isFuture = isAfterDay(day.date, currentDay)`; scope `<anonymous@14>/renderDays/<anonymous@420>`.
- [L422](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L422) `const payload = isFuture ? (day.forecast || null) : day.computed`; scope `<anonymous@14>/renderDays/<anonymous@420>`.
- [L433](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L433) `let tableObserver = null`; scope `<anonymous@14>`.
- [L434](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L434) `let applyTimer = null`; scope `<anonymous@14>`.
- [L440](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L440) `const days = buildDays(table)`; scope `<anonymous@14>/applyScript`.
- [L463](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L463) `const table = document.querySelector(TABLE_SELECTOR)`; scope `<anonymous@14>/watchTable/<anonymous@456>/<anonymous@461>`.
- [L485](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L485) `const table = document.querySelector(TABLE_SELECTOR)`; scope `<anonymous@14>/init`.

## storage

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## events

- [L14](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L14) `function () { 'use strict'; const TABLE_SELECTOR = '#attendance-month'; const DAILY_PRESENCE_TARGET_MINUTES = 8 * 60 + 30; const DAILY_WORK_TARGET_MINUTES = 8 * 60; const LUNCH_BREAK_MINUTES = 30; const FORECAST_ARRIVAL_MINUTES = 6 * 60 + 15; const MAX_DAILY_DEVIATION_MINUTES = 45; const STYLE_ID = `; scope `root`.
- [L493](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L493) `document.addEventListener('DOMContentLoaded', init, { once: true })`; scope `<anonymous@14>`.

## lifecycle

- [L14](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L14) `function () { 'use strict'; const TABLE_SELECTOR = '#attendance-month'; const DAILY_PRESENCE_TARGET_MINUTES = 8 * 60 + 30; const DAILY_WORK_TARGET_MINUTES = 8 * 60; const LUNCH_BREAK_MINUTES = 30; const FORECAST_ARRIVAL_MINUTES = 6 * 60 + 15; const MAX_DAILY_DEVIATION_MINUTES = 45; const STYLE_ID = `; scope `root`.
- [L456](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L456) `MutationObserver(() => { if (applyTimer) { clearTimeout(applyTimer); } applyTimer = window.setTimeout(() => { applyTimer = null; const table = document.querySelector(TABLE_SELECTOR); if (!table) return; tableObserver.disconnect(); try { resetAndApply(table); } finally { tableObserver.observe(documen`; scope `<anonymous@14>/watchTable`.
- [L458](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L458) `clearTimeout(applyTimer)`; scope `<anonymous@14>/watchTable/<anonymous@456>`.
- [L461](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L461) `window.setTimeout(() => { applyTimer = null; const table = document.querySelector(TABLE_SELECTOR); if (!table) return; tableObserver.disconnect(); try { resetAndApply(table); } finally { tableObserver.observe(document.body, { childList: true, subtree: true }); } }, 60)`; scope `<anonymous@14>/watchTable/<anonymous@456>`.
- [L466](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L466) `tableObserver.disconnect()`; scope `<anonymous@14>/watchTable/<anonymous@456>/<anonymous@461>`.
- [L470](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L470) `tableObserver.observe(document.body, { childList: true, subtree: true })`; scope `<anonymous@14>/watchTable/<anonymous@456>/<anonymous@461>`.
- [L478](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L478) `tableObserver.observe(document.body, { childList: true, subtree: true })`; scope `<anonymous@14>/watchTable`.

## io

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## dom-read

- [L14](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L14) `function () { 'use strict'; const TABLE_SELECTOR = '#attendance-month'; const DAILY_PRESENCE_TARGET_MINUTES = 8 * 60 + 30; const DAILY_WORK_TARGET_MINUTES = 8 * 60; const LUNCH_BREAK_MINUTES = 30; const FORECAST_ARRIVAL_MINUTES = 6 * 60 + 15; const MAX_DAILY_DEVIATION_MINUTES = 45; const STYLE_ID = `; scope `root`.
- [L27](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L27) `document.getElementById(STYLE_ID)`; scope `<anonymous@14>/injectStyles`.
- [L198](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L198) `row.querySelector('td[colspan="2"]:not(.approved):not(.planned)')`; scope `<anonymous@14>/ensureAdjustedCells`.
- [L463](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L463) `document.querySelector(TABLE_SELECTOR)`; scope `<anonymous@14>/watchTable/<anonymous@456>/<anonymous@461>`.
- [L485](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L485) `document.querySelector(TABLE_SELECTOR)`; scope `<anonymous@14>/init`.

## dom-write

- [L14](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L14) `function () { 'use strict'; const TABLE_SELECTOR = '#attendance-month'; const DAILY_PRESENCE_TARGET_MINUTES = 8 * 60 + 30; const DAILY_WORK_TARGET_MINUTES = 8 * 60; const LUNCH_BREAK_MINUTES = 30; const FORECAST_ARRIVAL_MINUTES = 6 * 60 + 15; const MAX_DAILY_DEVIATION_MINUTES = 45; const STYLE_ID = `; scope `root`.
- [L52](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L52) `document.head.appendChild(style)`; scope `<anonymous@14>/injectStyles`.
- [L154](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L154) `cell.appendChild(createValueSpan(text, className, title))`; scope `<anonymous@14>/setCellValue`.

## logs

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## Zápisy do globálov, DOM a ostatných vlastností

- [L30](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L30) `style.id = STYLE_ID`.
- [L31](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L31) `style.textContent = ' .abp-muted { color: #7a7a7a; } .abp-forecast { color: #7a7a7a; font-style: italic; } .abp-positive { color: #1f8a3b; font-weight: 700; } .abp-negative { color: #c53434; font-weight: 700; } .abp-neutral { color: #666666; font-weight: 700; } '`.
- [L146](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L146) `span.textContent = text`.
- [L147](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L147) `span.className = className`.
- [L153](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L153) `cell.textContent = ''`.
- [L209](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L209) `adjustedCells[0].className = ''`.
- [L210](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/attendanceBalancePredictor.user.js#L210) `adjustedCells[1].className = 'text-right'`.
