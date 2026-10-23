# service-catalog/core/database.js

Zdroj: service-catalog/core/database.js; referencia: 75087f8c4cbd34190e69318038bda6ef36eee0f2.
SHA-256: `38f472eb94be6177708392cd18f8703b48d7d674fb8661aae3fec1caf8a630c5`. Riadkov: 147.

AST inventár: obsahuje aj vnorené/anonýmne funkcie a lokálne premenné. Zoznam premenných nie je zoznam editovateľných nastavení. Volania sú klasifikované podľa názvu; dynamické aliasy môžu vyžadovať ručné dohľadanie. Historické @require hlavičky v načítanom JS nie sú ďalším automaticky spusteným @require reťazcom.

## Metadata

```json
{}
```

## Funkcie a signatúry

- [L1–146](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/database.js#L1) `<anonymous@1>()`; scope `root`.
- [L10–19](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/database.js#L10) `isAllowedRawUrl(value)`; scope `<anonymous@1>`.
- [L21–50](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/database.js#L21) `validateDatabase(manifest, data)`; scope `<anonymous@1>`.
- [L36–48](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/database.js#L36) `<anonymous@36>(service)`; scope `<anonymous@1>/validateDatabase`.
- [L52–58](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/database.js#L52) `parseJson(text, label)`; scope `<anonymous@1>`.
- [L60–85](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/database.js#L60) `requestText(url)`; scope `<anonymous@1>`.
- [L63–79](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/database.js#L63) `<anonymous@63>(resolve, reject)`; scope `<anonymous@1>/requestText`.
- [L69–75](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/database.js#L69) `onload(response)`; scope `<anonymous@1>/requestText/<anonymous@63>`.
- [L76–76](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/database.js#L76) `onerror()`; scope `<anonymous@1>/requestText/<anonymous@63>`.
- [L77–77](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/database.js#L77) `ontimeout()`; scope `<anonymous@1>/requestText/<anonymous@63>`.
- [L81–84](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/database.js#L81) `<anonymous@81>(response)`; scope `<anonymous@1>/requestText`.
- [L87–96](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/database.js#L87) `readCache()`; scope `<anonymous@1>`.
- [L98–106](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/database.js#L98) `writeCache(manifest, database)`; scope `<anonymous@1>`.
- [L108–114](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/database.js#L108) `async fetchLatest()`; scope `<anonymous@1>`.
- [L116–137](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/database.js#L116) `async load(options = {})`; scope `<anonymous@1>`.
- [L142–142](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/database.js#L142) `refresh()`; scope `<anonymous@1>`.

## Premenné a pôvodné inicializátory

Dlhé inicializátory sú tu skrátené na 300 znakov; úplné znenie je v inventory.json a v zdroji.

- [L4](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/database.js#L4) `const MANIFEST_URL = 'https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/main/service-catalog/db/manifest.json'`; scope `<anonymous@1>`.
- [L5](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/database.js#L5) `const CACHE_KEY = 'materialDetectorNext.database.cache.v1'`; scope `<anonymous@1>`.
- [L6](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/database.js#L6) `const CHECK_KEY = 'materialDetectorNext.database.lastCheck.v1'`; scope `<anonymous@1>`.
- [L7](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/database.js#L7) `const CACHE_TTL_MS = 6 * 60 * 60 * 1000`; scope `<anonymous@1>`.
- [L8](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/database.js#L8) `const SUPPORTED_SCHEMA_VERSION = 1`; scope `<anonymous@1>`.
- [L12](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/database.js#L12) `const url = new URL(value)`; scope `<anonymous@1>/isAllowedRawUrl`.
- [L35](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/database.js#L35) `const ids = new Set()`; scope `<anonymous@1>/validateDatabase`.
- [L89](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/database.js#L89) `const cache = JSON.parse(localStorage.getItem(CACHE_KEY) || 'null')`; scope `<anonymous@1>/readCache`.
- [L99](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/database.js#L99) `const cache = { manifest, database, cachedAt: new Date().toISOString() }`; scope `<anonymous@1>/writeCache`.
- [L109](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/database.js#L109) `const manifest = parseJson(await requestText(MANIFEST_URL), 'Manifest')`; scope `<anonymous@1>/fetchLatest`.
- [L111](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/database.js#L111) `const database = parseJson(await requestText(manifest.servicesUrl), 'Databáza služieb')`; scope `<anonymous@1>/fetchLatest`.
- [L117](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/database.js#L117) `const cached = readCache()`; scope `<anonymous@1>/load`.
- [L118](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/database.js#L118) `const checkedAt = Number(localStorage.getItem(CHECK_KEY) || 0)`; scope `<anonymous@1>/load`.
- [L119](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/database.js#L119) `const force = options.force === true`; scope `<anonymous@1>/load`.
- [L123](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/database.js#L123) `const latest = await fetchLatest()`; scope `<anonymous@1>/load`.

## storage

- [L1](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/database.js#L1) `function () { 'use strict'; const MANIFEST_URL = 'https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/main/service-catalog/db/manifest.json'; const CACHE_KEY = 'materialDetectorNext.database.cache.v1'; const CHECK_KEY = 'materialDetectorNext.database.lastCheck.v1'; const CACHE_TTL_MS = `; scope `root`.
- [L89](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/database.js#L89) `localStorage.getItem(CACHE_KEY)`; scope `<anonymous@1>/readCache`.
- [L104](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/database.js#L104) `localStorage.setItem(CACHE_KEY, JSON.stringify(cache))`; scope `<anonymous@1>/writeCache`.
- [L118](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/database.js#L118) `localStorage.getItem(CHECK_KEY)`; scope `<anonymous@1>/load`.
- [L124](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/database.js#L124) `localStorage.setItem(CHECK_KEY, String(Date.now()))`; scope `<anonymous@1>/load`.

## events

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## lifecycle

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## io

- [L1](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/database.js#L1) `function () { 'use strict'; const MANIFEST_URL = 'https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/main/service-catalog/db/manifest.json'; const CACHE_KEY = 'materialDetectorNext.database.cache.v1'; const CHECK_KEY = 'materialDetectorNext.database.lastCheck.v1'; const CACHE_TTL_MS = `; scope `root`.
- [L64](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/database.js#L64) `GM_xmlhttpRequest({ method: 'GET', url, timeout: 12000, headers: { Accept: 'application/json' }, onload(response) { if (response.status < 200 || response.status >= 300) { reject(new Error('HTTP ' + response.status)); return; } resolve(response.responseText || ''); }, onerror() { reject(new Error('Si`; scope `<anonymous@1>/requestText/<anonymous@63>`.
- [L81](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/database.js#L81) `fetch(url, { cache: 'no-store' })`; scope `<anonymous@1>/requestText`.

## dom-read

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## dom-write

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## logs

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## Zápisy do globálov, DOM a ostatných vlastností

- [L139](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/database.js#L139) `window.MaterialDetectorNextDatabase = { load, validateDatabase, refresh: () => load({ force: true }), manifestUrl: MANIFEST_URL, cacheKey: CACHE_KEY }`.
