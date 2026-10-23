# service-catalog/core/proposals.js

Zdroj: service-catalog/core/proposals.js; referencia: 75087f8c4cbd34190e69318038bda6ef36eee0f2.
SHA-256: `0329595396689c37b02d71e8f60d25bfb788e299c6e93db154d6c2ba3261075c`. Riadkov: 127.

AST inventár: obsahuje aj vnorené/anonýmne funkcie a lokálne premenné. Zoznam premenných nie je zoznam editovateľných nastavení. Volania sú klasifikované podľa názvu; dynamické aliasy môžu vyžadovať ručné dohľadanie. Historické @require hlavičky v načítanom JS nie sú ďalším automaticky spusteným @require reťazcom.

## Metadata

```json
{}
```

## Funkcie a signatúry

- [L1–126](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/proposals.js#L1) `<anonymous@1>()`; scope `root`.
- [L7–14](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/proposals.js#L7) `readAll()`; scope `<anonymous@1>`.
- [L16–19](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/proposals.js#L16) `saveAll(items)`; scope `<anonymous@1>`.
- [L21–32](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/proposals.js#L21) `normalizeCandidateValue(label, rawValue, universal)`; scope `<anonymous@1>`.
- [L34–40](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/proposals.js#L34) `typeForLabel(label)`; scope `<anonymous@1>`.
- [L42–78](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/proposals.js#L42) `create(context, baseVersion = 0)`; scope `<anonymous@1>`.
- [L46–56](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/proposals.js#L46) `<anonymous@46>(row, index)`; scope `<anonymous@1>/create`.
- [L80–87](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/proposals.js#L80) `update(proposalId, patch)`; scope `<anonymous@1>`.
- [L82–82](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/proposals.js#L82) `<anonymous@82>(item)`; scope `<anonymous@1>/update`.
- [L89–91](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/proposals.js#L89) `remove(proposalId)`; scope `<anonymous@1>`.
- [L90–90](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/proposals.js#L90) `<anonymous@90>(item)`; scope `<anonymous@1>/remove`.
- [L93–123](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/proposals.js#L93) `exportJson(proposal)`; scope `<anonymous@1>`.
- [L104–109](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/proposals.js#L104) `<anonymous@104>(aliases, field)`; scope `<anonymous@1>/exportJson`.
- [L111–117](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/proposals.js#L111) `<anonymous@111>(field)`; scope `<anonymous@1>/exportJson`.

## Premenné a pôvodné inicializátory

Dlhé inicializátory sú tu skrátené na 300 znakov; úplné znenie je v inventory.json a v zdroji.

- [L4](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/proposals.js#L4) `const STORAGE_KEY = 'materialDetectorNext.proposals.v1'`; scope `<anonymous@1>`.
- [L5](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/proposals.js#L5) `const api = window.MaterialDetectorNextAPI`; scope `<anonymous@1>`.
- [L9](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/proposals.js#L9) `const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')`; scope `<anonymous@1>/readAll`.
- [L22](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/proposals.js#L22) `const normalizedLabel = api.normalizeKey(label)`; scope `<anonymous@1>/normalizeCandidateValue`.
- [L23](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/proposals.js#L23) `const raw = api.clean(rawValue)`; scope `<anonymous@1>/normalizeCandidateValue`.
- [L35](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/proposals.js#L35) `const normalized = api.normalizeKey(label)`; scope `<anonymous@1>/typeForLabel`.
- [L44](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/proposals.js#L44) `const proposalId = 'proposal-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 7)`; scope `<anonymous@1>/create`.
- [L45](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/proposals.js#L45) `const universal = api.parseUniversalParameters(context.rawRows || [])`; scope `<anonymous@1>/create`.
- [L46](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/proposals.js#L46) `const rawFields = (context.rawRows || []).map((row, index) => ({ key: api.normalizeKey(row.label).replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '') || 'field_${index + 1}', label: row.label, rawValue: row.value, values: row.values || [row.value], normalizedValue: normalizeCandidateValue(row.label, r`; scope `<anonymous@1>/create`.
- [L57](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/proposals.js#L57) `const proposal = { proposalId, serviceCandidate: { id: context.candidateCode || '', name: context.heading || context.candidateCode || 'Neznáma služba', detectorId: '', outputAlias: context.candidateCode || context.heading || '' }, pageUrl: context.pageUrl, capturedAt: context.capturedAt || new Date(`; scope `<anonymous@1>/create`.
- [L74](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/proposals.js#L74) `const all = readAll()`; scope `<anonymous@1>/create`.
- [L81](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/proposals.js#L81) `const all = readAll()`; scope `<anonymous@1>/update`.
- [L82](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/proposals.js#L82) `const index = all.findIndex(item => item.proposalId === proposalId)`; scope `<anonymous@1>/update`.
- [L94](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/proposals.js#L94) `const payload = { proposalFormatVersion: 1, exportedAt: new Date().toISOString(), baseServicesVersion: proposal.baseServicesVersion, service: { id: proposal.serviceCandidate.id, name: proposal.serviceCandidate.name, detectorId: proposal.serviceCandidate.detectorId || '', outputAlias: proposal.servic`; scope `<anonymous@1>/exportJson`.
- [L105](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/proposals.js#L105) `const value = api.normalizeKey(field.normalizedValue || '')`; scope `<anonymous@1>/exportJson/<anonymous@104>`.
- [L106](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/proposals.js#L106) `const alias = String(field.aliasValue || '').trim()`; scope `<anonymous@1>/exportJson/<anonymous@104>`.

## storage

- [L1](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/proposals.js#L1) `function () { 'use strict'; const STORAGE_KEY = 'materialDetectorNext.proposals.v1'; const api = window.MaterialDetectorNextAPI; function readAll() { try { const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'); return Array.isArray(parsed) ? parsed : []; } catch (error) { return []; }`; scope `root`.
- [L9](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/proposals.js#L9) `localStorage.getItem(STORAGE_KEY)`; scope `<anonymous@1>/readAll`.
- [L17](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/proposals.js#L17) `localStorage.setItem(STORAGE_KEY, JSON.stringify(items))`; scope `<anonymous@1>/saveAll`.

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

- [L125](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/proposals.js#L125) `window.MaterialDetectorNextProposals = { create, update, remove, readAll, exportJson }`.
