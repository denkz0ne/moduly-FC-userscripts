# FaxCopy Session Keeper

Zdroj: faxcopySessionKeeper.user.js; referencia: 75087f8c4cbd34190e69318038bda6ef36eee0f2.
SHA-256: `b39bf90896dfd2f5a95c927d98c2b446fbb22e30593361e9ca394289c1af985e`. Riadkov: 374.

AST inventár: obsahuje aj vnorené/anonýmne funkcie a lokálne premenné. Zoznam premenných nie je zoznam editovateľných nastavení. Volania sú klasifikované podľa názvu; dynamické aliasy môžu vyžadovať ručné dohľadanie. Historické @require hlavičky v načítanom JS nie sú ďalším automaticky spusteným @require reťazcom.

## Metadata

```json
{
  "name": [
    "FaxCopy Session Keeper"
  ],
  "namespace": [
    "faxcopy-userscripts"
  ],
  "version": [
    "1.2.2"
  ],
  "description": [
    "Nenapadne pomaha oficialnemu FaxCopy SSO SDK obnovovat relaciu v pracovnom case a dava stav do tooltipu mena."
  ],
  "updateURL": [
    "https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/faxcopySessionKeeper.user.js"
  ],
  "downloadURL": [
    "https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/faxcopySessionKeeper.user.js"
  ],
  "match": [
    "https://moduly.faxcopy.sk/*"
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

- [L14–373](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L14) `<anonymous@14>()`; scope `root`.
- [L46–50](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L46) `log(...args)`; scope `<anonymous@14>`.
- [L52–54](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L52) `randomMs(min, max)`; scope `<anonymous@14>`.
- [L56–58](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L56) `seconds(ms)`; scope `<anonymous@14>`.
- [L60–62](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L60) `twoDigits(value)`; scope `<anonymous@14>`.
- [L64–69](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L64) `formatClock(timestamp)`; scope `<anonymous@14>`.
- [L71–79](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L71) `formatDuration(totalSeconds)`; scope `<anonymous@14>`.
- [L81–85](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L81) `isWorkingTime(date = new Date())`; scope `<anonymous@14>`.
- [L87–107](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L87) `getNextWorkStart(from = new Date())`; scope `<anonymous@14>`.
- [L109–111](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L109) `msUntilNextWorkStart()`; scope `<anonymous@14>`.
- [L113–119](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L113) `getWorkWindowText()`; scope `<anonymous@14>`.
- [L121–123](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L121) `canTrigger()`; scope `<anonymous@14>`.
- [L125–127](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L125) `markTrigger()`; scope `<anonymous@14>`.
- [L129–136](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L129) `getUserNameLink()`; scope `<anonymous@14>`.
- [L133–135](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L133) `<anonymous@133>(link)`; scope `<anonymous@14>/getUserNameLink`.
- [L138–160](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L138) `updateIndicator()`; scope `<anonymous@14>`.
- [L162–204](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L162) `async fetchStatus(reason)`; scope `<anonymous@14>`.
- [L206–208](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L206) `findVisibleToast()`; scope `<anonymous@14>`.
- [L210–234](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L210) `clickStaySignedIn(reason)`; scope `<anonymous@14>`.
- [L231–231](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L231) `<anonymous@231>()`; scope `<anonymous@14>/clickStaySignedIn`.
- [L236–264](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L236) `nudgeOfficialSsoSdk(reason)`; scope `<anonymous@14>`.
- [L263–263](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L263) `<anonymous@263>()`; scope `<anonymous@14>/nudgeOfficialSsoSdk`.
- [L266–281](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L266) `scheduleActivity(reason)`; scope `<anonymous@14>`.
- [L277–280](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L277) `<anonymous@277>()`; scope `<anonymous@14>/scheduleActivity`.
- [L283–295](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L283) `scheduleStatus(reason)`; scope `<anonymous@14>`.
- [L291–294](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L291) `async <anonymous@291>()`; scope `<anonymous@14>/scheduleStatus`.
- [L297–304](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L297) `handlePossibleToast(reason)`; scope `<anonymous@14>`.
- [L306–335](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L306) `bindToastObserver()`; scope `<anonymous@14>`.
- [L311–327](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L311) `<anonymous@311>(mutations)`; scope `<anonymous@14>/bindToastObserver`.
- [L312–322](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L312) `<anonymous@312>(mutation)`; scope `<anonymous@14>/bindToastObserver/<anonymous@311>`.
- [L317–321](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L317) `<anonymous@317>(node)`; scope `<anonymous@14>/bindToastObserver/<anonymous@311>/<anonymous@312>`.
- [L337–343](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L337) `bindCountdown()`; scope `<anonymous@14>`.
- [L345–366](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L345) `init()`; scope `<anonymous@14>`.
- [L355–358](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L355) `<anonymous@355>()`; scope `<anonymous@14>/init`.
- [L360–365](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L360) `<anonymous@360>()`; scope `<anonymous@14>/init`.

## Premenné a pôvodné inicializátory

Dlhé inicializátory sú tu skrátené na 300 znakov; úplné znenie je v inventory.json a v zdroji.

- [L17](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L17) `const DEBUG = true`; scope `<anonymous@14>`.
- [L18](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L18) `const RANDOM_INTERVAL_MIN_MS = 2.5 * 60 * 1000`; scope `<anonymous@14>`.
- [L19](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L19) `const RANDOM_INTERVAL_MAX_MS = 5.5 * 60 * 1000`; scope `<anonymous@14>`.
- [L20](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L20) `const STATUS_INTERVAL_MIN_MS = 58 * 1000`; scope `<anonymous@14>`.
- [L21](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L21) `const STATUS_INTERVAL_MAX_MS = 86 * 1000`; scope `<anonymous@14>`.
- [L22](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L22) `const STATUS_URL = '/sso/status'`; scope `<anonymous@14>`.
- [L23](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L23) `const TOAST_SELECTOR = '.fc-session-toast'`; scope `<anonymous@14>`.
- [L24](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L24) `const TOAST_VISIBLE_SELECTOR = '.fc-session-toast.fc-visible'`; scope `<anonymous@14>`.
- [L25](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L25) `const STAY_BUTTON_SELECTOR = '.fc-session-toast-btn-primary'`; scope `<anonymous@14>`.
- [L26](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L26) `const TRIGGER_COOLDOWN_MS = 65 * 1000`; scope `<anonymous@14>`.
- [L27](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L27) `const REFRESH_DETECT_DELTA_SEC = 5 * 60`; scope `<anonymous@14>`.
- [L28](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L28) `const WORK_START_HOUR = 6`; scope `<anonymous@14>`.
- [L29](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L29) `const WORK_END_HOUR = 16`; scope `<anonymous@14>`.
- [L30](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L30) `const WORK_DAYS = [1, 2, 3, 4, 5]`; scope `<anonymous@14>`.
- [L31](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L31) `const OUT_OF_HOURS_RECHECK_MIN_MS = 15 * 1000`; scope `<anonymous@14>`.
- [L32](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L32) `const OUT_OF_HOURS_RECHECK_MAX_MS = 75 * 1000`; scope `<anonymous@14>`.
- [L34](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L34) `let activityTimer = 0`; scope `<anonymous@14>`.
- [L35](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L35) `let statusTimer = 0`; scope `<anonymous@14>`.
- [L36](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L36) `let countdownTimer = 0`; scope `<anonymous@14>`.
- [L37](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L37) `let observer = null`; scope `<anonymous@14>`.
- [L38](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L38) `let lastTriggerAt = 0`; scope `<anonymous@14>`.
- [L39](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L39) `let expiresAt = null`; scope `<anonymous@14>`.
- [L40](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L40) `let lastExpiresIn = null`; scope `<anonymous@14>`.
- [L41](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L41) `let lastKeepAt = null`; scope `<anonymous@14>`.
- [L42](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L42) `let lastStatusAt = null`; scope `<anonymous@14>`.
- [L43](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L43) `let lastStatusError = ''`; scope `<anonymous@14>`.
- [L44](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L44) `let userLinkOriginalTitle = null`; scope `<anonymous@14>`.
- [L67](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L67) `const date = new Date(timestamp)`; scope `<anonymous@14>/formatClock`.
- [L74](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L74) `const safeSeconds = Math.max(0, Math.round(totalSeconds))`; scope `<anonymous@14>/formatDuration`.
- [L75](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L75) `const minutes = Math.floor(safeSeconds / 60)`; scope `<anonymous@14>/formatDuration`.
- [L76](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L76) `const secondsPart = safeSeconds % 60`; scope `<anonymous@14>/formatDuration`.
- [L88](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L88) `const next = new Date(from)`; scope `<anonymous@14>/getNextWorkStart`.
- [L130](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L130) `const userInfo = document.querySelector('.user-info')`; scope `<anonymous@14>/getUserNameLink`.
- [L139](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L139) `const link = getUserNameLink()`; scope `<anonymous@14>/updateIndicator`.
- [L146](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L146) `const remaining = expiresAt ? Math.ceil((expiresAt - Date.now()) / 1000) : NaN`; scope `<anonymous@14>/updateIndicator`.
- [L147](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L147) `const age = lastStatusAt ? Math.round((Date.now() - lastStatusAt) / 1000) : null`; scope `<anonymous@14>/updateIndicator`.
- [L148](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L148) `const ageText = age === null ? '-' : '${age}s'`; scope `<anonymous@14>/updateIndicator`.
- [L149](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L149) `const keepText = lastKeepAt ? formatClock(lastKeepAt) : '-'`; scope `<anonymous@14>/updateIndicator`.
- [L164](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L164) `const response = await fetch(STATUS_URL, { method: 'GET', credentials: 'same-origin', cache: 'no-store', headers: { 'Accept': 'application/json', 'X-Requested-With': 'XMLHttpRequest' } })`; scope `<anonymous@14>/fetchStatus`.
- [L178](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L178) `const data = await response.json()`; scope `<anonymous@14>/fetchStatus`.
- [L179](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L179) `const expiresIn = Number(data.expiresIn)`; scope `<anonymous@14>/fetchStatus`.
- [L216](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L216) `const toast = findVisibleToast()`; scope `<anonymous@14>/clickStaySignedIn`.
- [L217](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L217) `const button = toast ? toast.querySelector(STAY_BUTTON_SELECTOR) : null`; scope `<anonymous@14>/clickStaySignedIn`.
- [L254](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L254) `const target = document.body || document.documentElement || document`; scope `<anonymous@14>/nudgeOfficialSsoSdk`.
- [L271](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L271) `const next = isWorkingTime() ? randomMs(RANDOM_INTERVAL_MIN_MS, RANDOM_INTERVAL_MAX_MS) : msUntilNextWorkStart() + randomMs(OUT_OF_HOURS_RECHECK_MIN_MS, OUT_OF_HOURS_RECHECK_MAX_MS)`; scope `<anonymous@14>/scheduleActivity`.
- [L288](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L288) `const next = randomMs(STATUS_INTERVAL_MIN_MS, STATUS_INTERVAL_MAX_MS)`; scope `<anonymous@14>/scheduleStatus`.
- [L312](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L312) `const hasToastChange = mutations.some(mutation => { if (mutation.type === 'attributes') { return mutation.target instanceof Element && mutation.target.matches(TOAST_SELECTOR); } return Array.from(mutation.addedNodes).some(node => { return node instanceof Element && ( node.matches(TOAST_SELECTOR) || `; scope `<anonymous@14>/bindToastObserver/<anonymous@311>`.

## storage

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## events

- [L14](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L14) `function () { 'use strict'; const DEBUG = true; const RANDOM_INTERVAL_MIN_MS = 2.5 * 60 * 1000; const RANDOM_INTERVAL_MAX_MS = 5.5 * 60 * 1000; const STATUS_INTERVAL_MIN_MS = 58 * 1000; const STATUS_INTERVAL_MAX_MS = 86 * 1000; const STATUS_URL = '/sso/status'; const TOAST_SELECTOR = '.fc-session-to`; scope `root`.
- [L225](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L225) `button.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }))`; scope `<anonymous@14>/clickStaySignedIn`.
- [L255](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L255) `target.dispatchEvent(new MouseEvent('mousedown', { bubbles: true, cancelable: true, view: window, clientX: 1 + Math.floor(Math.random() * 4), clientY: 1 + Math.floor(Math.random() * 4) }))`; scope `<anonymous@14>/nudgeOfficialSsoSdk`.
- [L355](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L355) `window.addEventListener('focus', () => { fetchStatus('focus'); nudgeOfficialSsoSdk('focus'); })`; scope `<anonymous@14>/init`.
- [L360](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L360) `document.addEventListener('visibilitychange', () => { if (!document.hidden) { fetchStatus('navrat do tabu'); nudgeOfficialSsoSdk('navrat do tabu'); } })`; scope `<anonymous@14>/init`.
- [L369](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L369) `document.addEventListener('DOMContentLoaded', init, { once: true })`; scope `<anonymous@14>`.

## lifecycle

- [L14](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L14) `function () { 'use strict'; const DEBUG = true; const RANDOM_INTERVAL_MIN_MS = 2.5 * 60 * 1000; const RANDOM_INTERVAL_MAX_MS = 5.5 * 60 * 1000; const STATUS_INTERVAL_MIN_MS = 58 * 1000; const STATUS_INTERVAL_MAX_MS = 86 * 1000; const STATUS_URL = '/sso/status'; const TOAST_SELECTOR = '.fc-session-to`; scope `root`.
- [L231](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L231) `setTimeout(() => fetchStatus('po toast kliknuti: ${reason}'), 1600)`; scope `<anonymous@14>/clickStaySignedIn`.
- [L263](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L263) `setTimeout(() => fetchStatus('po activity signali: ${reason}'), 1800)`; scope `<anonymous@14>/nudgeOfficialSsoSdk`.
- [L268](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L268) `window.clearTimeout(activityTimer)`; scope `<anonymous@14>/scheduleActivity`.
- [L277](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L277) `window.setTimeout(() => { nudgeOfficialSsoSdk('nahodny interval'); scheduleActivity('nahodny interval'); }, next)`; scope `<anonymous@14>/scheduleActivity`.
- [L285](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L285) `window.clearTimeout(statusTimer)`; scope `<anonymous@14>/scheduleStatus`.
- [L291](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L291) `window.setTimeout(async () => { await fetchStatus('nahodny status check'); scheduleStatus('nahodny status check'); }, next)`; scope `<anonymous@14>/scheduleStatus`.
- [L311](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L311) `MutationObserver(mutations => { const hasToastChange = mutations.some(mutation => { if (mutation.type === 'attributes') { return mutation.target instanceof Element && mutation.target.matches(TOAST_SELECTOR); } return Array.from(mutation.addedNodes).some(node => { return node instanceof Element && ( `; scope `<anonymous@14>/bindToastObserver`.
- [L329](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L329) `observer.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['class', 'style'] })`; scope `<anonymous@14>/bindToastObserver`.
- [L339](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L339) `window.clearInterval(countdownTimer)`; scope `<anonymous@14>/bindCountdown`.
- [L342](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L342) `window.setInterval(updateIndicator, 1000)`; scope `<anonymous@14>/bindCountdown`.

## io

- [L14](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L14) `function () { 'use strict'; const DEBUG = true; const RANDOM_INTERVAL_MIN_MS = 2.5 * 60 * 1000; const RANDOM_INTERVAL_MAX_MS = 5.5 * 60 * 1000; const STATUS_INTERVAL_MIN_MS = 58 * 1000; const STATUS_INTERVAL_MAX_MS = 86 * 1000; const STATUS_URL = '/sso/status'; const TOAST_SELECTOR = '.fc-session-to`; scope `root`.
- [L164](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L164) `fetch(STATUS_URL, { method: 'GET', credentials: 'same-origin', cache: 'no-store', headers: { 'Accept': 'application/json', 'X-Requested-With': 'XMLHttpRequest' } })`; scope `<anonymous@14>/fetchStatus`.

## dom-read

- [L14](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L14) `function () { 'use strict'; const DEBUG = true; const RANDOM_INTERVAL_MIN_MS = 2.5 * 60 * 1000; const RANDOM_INTERVAL_MAX_MS = 5.5 * 60 * 1000; const STATUS_INTERVAL_MIN_MS = 58 * 1000; const STATUS_INTERVAL_MAX_MS = 86 * 1000; const STATUS_URL = '/sso/status'; const TOAST_SELECTOR = '.fc-session-to`; scope `root`.
- [L130](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L130) `document.querySelector('.user-info')`; scope `<anonymous@14>/getUserNameLink`.
- [L133](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L133) `Array.from(userInfo.querySelectorAll('a[href]')).find(link => { return !link.classList.contains('menu-icon') && link.textContent.trim(); })`; scope `<anonymous@14>/getUserNameLink`.
- [L133](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L133) `userInfo.querySelectorAll('a[href]')`; scope `<anonymous@14>/getUserNameLink`.
- [L207](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L207) `document.querySelector(TOAST_VISIBLE_SELECTOR)`; scope `<anonymous@14>/findVisibleToast`.
- [L217](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L217) `toast.querySelector(STAY_BUTTON_SELECTOR)`; scope `<anonymous@14>/clickStaySignedIn`.
- [L314](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L314) `mutation.target.matches(TOAST_SELECTOR)`; scope `<anonymous@14>/bindToastObserver/<anonymous@311>/<anonymous@312>`.
- [L319](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L319) `node.matches(TOAST_SELECTOR)`; scope `<anonymous@14>/bindToastObserver/<anonymous@311>/<anonymous@312>/<anonymous@317>`.
- [L319](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L319) `node.querySelector(TOAST_SELECTOR)`; scope `<anonymous@14>/bindToastObserver/<anonymous@311>/<anonymous@312>/<anonymous@317>`.

## dom-write

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## logs

- [L14](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L14) `function () { 'use strict'; const DEBUG = true; const RANDOM_INTERVAL_MIN_MS = 2.5 * 60 * 1000; const RANDOM_INTERVAL_MAX_MS = 5.5 * 60 * 1000; const STATUS_INTERVAL_MIN_MS = 58 * 1000; const STATUS_INTERVAL_MAX_MS = 86 * 1000; const STATUS_URL = '/sso/status'; const TOAST_SELECTOR = '.fc-session-to`; scope `root`.
- [L48](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/faxcopySessionKeeper.user.js#L48) `console.log('[FaxCopy Session Keeper]', ...args)`; scope `<anonymous@14>/log`.

## Zápisy do globálov, DOM a ostatných vlastností
