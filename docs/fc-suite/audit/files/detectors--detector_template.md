# detectors/detector_template.js

Zdroj: detectors/detector_template.js; referencia: 75087f8c4cbd34190e69318038bda6ef36eee0f2.
SHA-256: `9d0dad041b07c8284eaca78091dda01fd2a1d56a315963b36dbdea0f6083558a`. Riadkov: 93.

AST inventár: obsahuje aj vnorené/anonýmne funkcie a lokálne premenné. Zoznam premenných nie je zoznam editovateľných nastavení. Volania sú klasifikované podľa názvu; dynamické aliasy môžu vyžadovať ručné dohľadanie. Historické @require hlavičky v načítanom JS nie sú ďalším automaticky spusteným @require reťazcom.

## Metadata

```json
{}
```

## Funkcie a signatúry

- [L13–92](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_template.js#L13) `<anonymous@13>()`; scope `root`.
- [L27–37](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_template.js#L27) `match(internalCode, context)`; scope `<anonymous@13>`.
- [L39–90](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_template.js#L39) `detect(context)`; scope `<anonymous@13>`.

## Premenné a pôvodné inicializátory

Dlhé inicializátory sú tu skrátené na 300 znakov; úplné znenie je v inventory.json a v zdroji.

- [L16](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_template.js#L16) `const TEMPLATE_ONLY = true`; scope `<anonymous@13>`.
- [L19](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_template.js#L19) `const api = window.MaterialDetectorAPI`; scope `<anonymous@13>`.
- [L22](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_template.js#L22) `const DETECTOR_ID = 'example_internal_code'`; scope `<anonymous@13>`.
- [L28](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_template.js#L28) `const code = String(internalCode || '').toLowerCase()`; scope `<anonymous@13>/match`.
- [L41](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_template.js#L41) `const params = api.parseZdParams()`; scope `<anonymous@13>/detect`.
- [L42](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_template.js#L42) `const sizeAlias = api.detectUniversalSizeAlias()`; scope `<anonymous@13>/detect`.
- [L43](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_template.js#L43) `const quantity = '1ks'`; scope `<anonymous@13>/detect`.
- [L49](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_template.js#L49) `const left = ''`; scope `<anonymous@13>/detect`.
- [L50](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_template.js#L50) `const top = ''`; scope `<anonymous@13>/detect`.
- [L51](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_template.js#L51) `const bottom = ''`; scope `<anonymous@13>/detect`.
- [L52](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/detectors/detector_template.js#L52) `const outputAlias = left || DETECTOR_ID`; scope `<anonymous@13>/detect`.

## storage

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## events

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

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
