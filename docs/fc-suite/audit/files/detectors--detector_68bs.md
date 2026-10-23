# detectors/detector_68bs.js

Zdroj: detectors/detector_68bs.js; referencia: 75087f8c4cbd34190e69318038bda6ef36eee0f2.
SHA-256: `f9fdecbe0ccdefbd8914b711a0b112cc441f1c18f9538a86d96f01cde028d733`. Riadkov: 168.

AST inventár: obsahuje aj vnorené/anonýmne funkcie a lokálne premenné. Zoznam premenných nie je zoznam editovateľných nastavení. Volania sú klasifikované podľa názvu; dynamické aliasy môžu vyžadovať ručné dohľadanie. Historické @require hlavičky v načítanom JS nie sú ďalším automaticky spusteným @require reťazcom.

## Metadata

```json
{}
```

## Funkcie a signatúry

- [L1–168](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_68bs.js#L1) `<anonymous@1>()`; scope `root`.
- [L7–10](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_68bs.js#L7) `detectExpressToken()`; scope `<anonymous@1>`.
- [L9–9](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_68bs.js#L9) `<anonymous@9>(badge)`; scope `<anonymous@1>/detectExpressToken`.
- [L12–14](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_68bs.js#L12) `getParam(params, labels)`; scope `<anonymous@1>`.
- [L16–23](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_68bs.js#L16) `getExactParam(params, labels)`; scope `<anonymous@1>`.
- [L25–29](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_68bs.js#L25) `parseQuantity(params)`; scope `<anonymous@1>`.
- [L31–37](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_68bs.js#L31) `optionMode(option)`; scope `<anonymous@1>`.
- [L39–45](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_68bs.js#L39) `qualityAlias(quality)`; scope `<anonymous@1>`.
- [L47–51](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_68bs.js#L47) `printBaseAlias(constructionType)`; scope `<anonymous@1>`.
- [L53–63](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_68bs.js#L53) `constructionOnlyAlias(constructionType)`; scope `<anonymous@1>`.
- [L65–73](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_68bs.js#L65) `buildAlias(details)`; scope `<anonymous@1>`.
- [L75–78](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_68bs.js#L75) `buildLeft(alias, quantity)`; scope `<anonymous@1>`.
- [L80–109](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_68bs.js#L80) `parseDetails(params)`; scope `<anonymous@1>`.
- [L131–136](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_68bs.js#L131) `match(internalCode, context)`; scope `<anonymous@1>`.
- [L137–166](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_68bs.js#L137) `detect()`; scope `<anonymous@1>`.

## Premenné a pôvodné inicializátory

Dlhé inicializátory sú tu skrátené na 300 znakov; úplné znenie je v inventory.json a v zdroji.

- [L4](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_68bs.js#L4) `const api = window.MaterialDetectorAPI`; scope `<anonymous@1>`.
- [L8](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_68bs.js#L8) `const badges = Array.from(document.querySelectorAll('.badge'))`; scope `<anonymous@1>/detectExpressToken`.
- [L18](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_68bs.js#L18) `const normalizedLabels = labels.map(api.normalizeKey)`; scope `<anonymous@1>/getExactParam`.
- [L19](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_68bs.js#L19) `const [key, item] = <bez inicializátora>`; scope `<anonymous@1>/getExactParam`.
- [L26](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_68bs.js#L26) `const raw = getExactParam(params, ['pocet kusov'])`; scope `<anonymous@1>/parseQuantity`.
- [L27](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_68bs.js#L27) `const match = String(raw || '').match(/\d+/)`; scope `<anonymous@1>/parseQuantity`.
- [L32](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_68bs.js#L32) `const normalized = api.normalizeKey(option)`; scope `<anonymous@1>/optionMode`.
- [L40](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_68bs.js#L40) `const normalized = api.normalizeKey(quality)`; scope `<anonymous@1>/qualityAlias`.
- [L48](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_68bs.js#L48) `const normalized = api.normalizeKey(constructionType)`; scope `<anonymous@1>/printBaseAlias`.
- [L54](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_68bs.js#L54) `const normalized = api.normalizeKey(constructionType)`; scope `<anonymous@1>/constructionOnlyAlias`.
- [L66](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_68bs.js#L66) `const mode = details.optionMode`; scope `<anonymous@1>/buildAlias`.
- [L67](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_68bs.js#L67) `const q = details.qualityAlias`; scope `<anonymous@1>/buildAlias`.
- [L69](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_68bs.js#L69) `const base = details.printAlias || 'rld'`; scope `<anonymous@1>/buildAlias`.
- [L70](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_68bs.js#L70) `const quality = q ? ' ${q}' : ''`; scope `<anonymous@1>/buildAlias`.
- [L76](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_68bs.js#L76) `const qty = parseInt(quantity, 10)`; scope `<anonymous@1>/buildLeft`.
- [L81](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_68bs.js#L81) `const option = getParam(params, ['moznosti'])`; scope `<anonymous@1>/parseDetails`.
- [L82](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_68bs.js#L82) `const constructionType = getParam(params, ['konstrukcia + platno', 'typ (konstrukcia', 'typ konstrukcia'])`; scope `<anonymous@1>/parseDetails`.
- [L83](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_68bs.js#L83) `const quality = getParam(params, ['platno - kvalita', 'kvalita'])`; scope `<anonymous@1>/parseDetails`.
- [L84](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_68bs.js#L84) `const mode = optionMode(option)`; scope `<anonymous@1>/parseDetails`.
- [L85](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_68bs.js#L85) `const qAlias = qualityAlias(quality)`; scope `<anonymous@1>/parseDetails`.
- [L86](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_68bs.js#L86) `const printAlias = printBaseAlias(constructionType)`; scope `<anonymous@1>/parseDetails`.
- [L87](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_68bs.js#L87) `const constructionAlias = constructionOnlyAlias(constructionType)`; scope `<anonymous@1>/parseDetails`.
- [L88](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_68bs.js#L88) `const quantity = parseQuantity(params)`; scope `<anonymous@1>/parseDetails`.
- [L89](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_68bs.js#L89) `const details = { option, optionMode: mode, constructionType, constructionAlias, constructionOnlyAlias: constructionAlias, printAlias, quality, qualityAlias: qAlias, printType: getParam(params, ['tlac']), printArea: getParam(params, ['vypocitane pole tlac']), printSubstrate: getParam(params, ['tlaco`; scope `<anonymous@1>/parseDetails`.
- [L132](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_68bs.js#L132) `const code = String(internalCode || '').toLowerCase()`; scope `<anonymous@1>/match`.
- [L134](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_68bs.js#L134) `const text = api.normalizeKey((context && context.productText) || '')`; scope `<anonymous@1>/match`.
- [L138](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_68bs.js#L138) `const params = api.parseZdParams()`; scope `<anonymous@1>/detect`.
- [L139](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_68bs.js#L139) `const details = parseDetails(params)`; scope `<anonymous@1>/detect`.
- [L140](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_68bs.js#L140) `const express = detectExpressToken()`; scope `<anonymous@1>/detect`.
- [L141](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_68bs.js#L141) `const alias = details.alias || 'rld'`; scope `<anonymous@1>/detect`.
- [L142](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_68bs.js#L142) `const left = buildLeft(alias, details.quantity)`; scope `<anonymous@1>/detect`.
- [L143](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_68bs.js#L143) `const quantity = details.quantity ? '${details.quantity}ks' : '1ks'`; scope `<anonymous@1>/detect`.

## storage

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## events

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## lifecycle

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## io

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## dom-read

- [L1](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_68bs.js#L1) `function () { 'use strict'; const api = window.MaterialDetectorAPI; if (!api) return; function detectExpressToken() { const badges = Array.from(document.querySelectorAll('.badge')); return badges.some(badge => api.clean(badge.textContent).toUpperCase() === 'EXPR') ? 'EXPR' : ''; } function getParam(`; scope `root`.
- [L8](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_68bs.js#L8) `document.querySelectorAll('.badge')`; scope `<anonymous@1>/detectExpressToken`.

## dom-write

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## logs

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## Zápisy do globálov, DOM a ostatných vlastností
