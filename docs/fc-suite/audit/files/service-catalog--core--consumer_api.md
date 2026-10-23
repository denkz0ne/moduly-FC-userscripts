# service-catalog/core/consumer_api.js

Zdroj: service-catalog/core/consumer_api.js; referencia: 75087f8c4cbd34190e69318038bda6ef36eee0f2.
SHA-256: `e3934ef7a4525682a18ef60e95d2394635c71c9182391b43bbd524e7da74f196`. Riadkov: 42.

AST inventár: obsahuje aj vnorené/anonýmne funkcie a lokálne premenné. Zoznam premenných nie je zoznam editovateľných nastavení. Volania sú klasifikované podľa názvu; dynamické aliasy môžu vyžadovať ručné dohľadanie. Historické @require hlavičky v načítanom JS nie sú ďalším automaticky spusteným @require reťazcom.

## Metadata

```json
{}
```

## Funkcie a signatúry

- [L1–41](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/consumer_api.js#L1) `<anonymous@1>()`; scope `root`.
- [L8–19](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/consumer_api.js#L8) `readState(options = {})`; scope `<anonymous@1>`.
- [L21–33](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/consumer_api.js#L21) `subscribe(listener)`; scope `<anonymous@1>`.
- [L22–22](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/consumer_api.js#L22) `<anonymous@22>()`; scope `<anonymous@1>/subscribe`.
- [L23–23](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/consumer_api.js#L23) `handler(event)`; scope `<anonymous@1>/subscribe`.
- [L24–26](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/consumer_api.js#L24) `storageHandler(event)`; scope `<anonymous@1>/subscribe`.
- [L29–32](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/consumer_api.js#L29) `unsubscribe()`; scope `<anonymous@1>/subscribe`.

## Premenné a pôvodné inicializátory

Dlhé inicializátory sú tu skrátené na 300 znakov; úplné znenie je v inventory.json a v zdroji.

- [L4](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/consumer_api.js#L4) `const STORAGE_KEY = 'materialDetectorNext.publicState.v1'`; scope `<anonymous@1>`.
- [L5](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/consumer_api.js#L5) `const EVENT_NAME = 'materialDetectorNext:updated'`; scope `<anonymous@1>`.
- [L6](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/consumer_api.js#L6) `const DEFAULT_TTL_MS = 60 * 1000`; scope `<anonymous@1>`.
- [L10](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/consumer_api.js#L10) `const state = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null')`; scope `<anonymous@1>/readState`.
- [L12](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/consumer_api.js#L12) `const age = Date.now() - new Date(state.updatedAt || 0).getTime()`; scope `<anonymous@1>/readState`.
- [L13](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/consumer_api.js#L13) `const maxAge = Number(options.maxAgeMs || DEFAULT_TTL_MS)`; scope `<anonymous@1>/readState`.
- [L23](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/consumer_api.js#L23) `const handler = event => listener(event.detail || readState())`; scope `<anonymous@1>/subscribe`.
- [L24](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/consumer_api.js#L24) `const storageHandler = event => { if (event.key === STORAGE_KEY) listener(readState()); }`; scope `<anonymous@1>/subscribe`.

## storage

- [L1](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/consumer_api.js#L1) `function () { 'use strict'; const STORAGE_KEY = 'materialDetectorNext.publicState.v1'; const EVENT_NAME = 'materialDetectorNext:updated'; const DEFAULT_TTL_MS = 60 * 1000; function readState(options = {}) { try { const state = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null'); if (!state || st`; scope `root`.
- [L10](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/consumer_api.js#L10) `localStorage.getItem(STORAGE_KEY)`; scope `<anonymous@1>/readState`.

## events

- [L1](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/consumer_api.js#L1) `function () { 'use strict'; const STORAGE_KEY = 'materialDetectorNext.publicState.v1'; const EVENT_NAME = 'materialDetectorNext:updated'; const DEFAULT_TTL_MS = 60 * 1000; function readState(options = {}) { try { const state = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null'); if (!state || st`; scope `root`.
- [L27](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/consumer_api.js#L27) `window.addEventListener(EVENT_NAME, handler)`; scope `<anonymous@1>/subscribe`.
- [L28](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/consumer_api.js#L28) `window.addEventListener('storage', storageHandler)`; scope `<anonymous@1>/subscribe`.
- [L30](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/consumer_api.js#L30) `window.removeEventListener(EVENT_NAME, handler)`; scope `<anonymous@1>/subscribe/unsubscribe`.
- [L31](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/consumer_api.js#L31) `window.removeEventListener('storage', storageHandler)`; scope `<anonymous@1>/subscribe/unsubscribe`.

## lifecycle

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## io

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## dom-read

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## dom-write

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## logs

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## Zápisy do globálov, DOM a ostatných vlastností

- [L35](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/consumer_api.js#L35) `window.MaterialDetectorNextClient = { stateKey: STORAGE_KEY, eventName: EVENT_NAME, getState: readState, subscribe }`.
