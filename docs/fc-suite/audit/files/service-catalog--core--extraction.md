# service-catalog/core/extraction.js

Zdroj: service-catalog/core/extraction.js; referencia: 75087f8c4cbd34190e69318038bda6ef36eee0f2.
SHA-256: `adbef98c2bf268bc59680bf1f9e34e35e82820dd6bea1a6ab64d1e0b3f282784`. Riadkov: 388.

AST inventár: obsahuje aj vnorené/anonýmne funkcie a lokálne premenné. Zoznam premenných nie je zoznam editovateľných nastavení. Volania sú klasifikované podľa názvu; dynamické aliasy môžu vyžadovať ručné dohľadanie. Historické @require hlavičky v načítanom JS nie sú ďalším automaticky spusteným @require reťazcom.

## Metadata

```json
{}
```

## Funkcie a signatúry

- [L1–387](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L1) `<anonymous@1>()`; scope `root`.
- [L7–9](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L7) `normalizeServiceCode(value)`; scope `<anonymous@1>`.
- [L11–23](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L11) `findService(database, context)`; scope `<anonymous@1>`.
- [L15–15](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L15) `<anonymous@15>(item)`; scope `<anonymous@1>/findService`.
- [L17–19](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L17) `<anonymous@17>(pattern)`; scope `<anonymous@1>/findService`.
- [L25–35](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L25) `setActiveServiceAliases(service)`; scope `<anonymous@1>`.
- [L27–34](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L27) `<anonymous@27>(value)`; scope `<anonymous@1>/setActiveServiceAliases`.
- [L37–43](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L37) `detectorFor(service, context)`; scope `<anonymous@1>`.
- [L42–42](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L42) `<anonymous@42>(detector)`; scope `<anonymous@1>/detectorFor`.
- [L45–54](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L45) `inferField(row, index)`; scope `<anonymous@1>`.
- [L56–171](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L56) `genericServiceResult(service, context)`; scope `<anonymous@1>`.
- [L84–99](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L84) `<anonymous@84>(field)`; scope `<anonymous@1>/genericServiceResult`.
- [L86–89](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L86) `<anonymous@86>(row)`; scope `<anonymous@1>/genericServiceResult/<anonymous@84>`.
- [L88–88](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L88) `<anonymous@88>(source)`; scope `<anonymous@1>/genericServiceResult/<anonymous@84>/<anonymous@86>`.
- [L90–90](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L90) `<anonymous@90>(row)`; scope `<anonymous@1>/genericServiceResult/<anonymous@84>`.
- [L92–92](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L92) `<anonymous@92>(row)`; scope `<anonymous@1>/genericServiceResult/<anonymous@84>`.
- [L101–112](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L101) `<anonymous@101>(row, index)`; scope `<anonymous@1>/genericServiceResult`.
- [L117–117](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L117) `<anonymous@117>(field)`; scope `<anonymous@1>/genericServiceResult`.
- [L120–120](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L120) `<anonymous@120>([key])`; scope `<anonymous@1>/genericServiceResult`.
- [L121–121](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L121) `<anonymous@121>([key])`; scope `<anonymous@1>/genericServiceResult`.
- [L128–128](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L128) `<anonymous@128>(field)`; scope `<anonymous@1>/genericServiceResult`.
- [L131–131](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L131) `<anonymous@131>(field)`; scope `<anonymous@1>/genericServiceResult`.
- [L173–206](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L173) `addUniversalParameters(result, service, context)`; scope `<anonymous@1>`.
- [L208–215](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L208) `detectDeliveryDate()`; scope `<anonymous@1>`.
- [L217–219](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L217) `mergedParams(result)`; scope `<anonymous@1>`.
- [L221–246](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L221) `makeTokens(result, context)`; scope `<anonymous@1>`.
- [L248–250](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L248) `hasTemplate(value)`; scope `<anonymous@1>`.
- [L252–269](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L252) `applySettings(result, context)`; scope `<anonymous@1>`.
- [L271–334](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L271) `buildRenameDebug(result)`; scope `<anonymous@1>`.
- [L274–285](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L274) `<anonymous@274>(anchor)`; scope `<anonymous@1>/buildRenameDebug`.
- [L287–331](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L287) `<anonymous@287>(anchor)`; scope `<anonymous@1>/buildRenameDebug`.
- [L314–318](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L314) `<anonymous@314>([key, value])`; scope `<anonymous@1>/buildRenameDebug/<anonymous@287>`.
- [L336–378](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L336) `detect(databaseState, context)`; scope `<anonymous@1>`.

## Premenné a pôvodné inicializátory

Dlhé inicializátory sú tu skrátené na 300 znakov; úplné znenie je v inventory.json a v zdroji.

- [L4](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L4) `const api = window.MaterialDetectorNextAPI`; scope `<anonymous@1>`.
- [L5](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L5) `const DATE_SELECTOR = '#dodacia_lehota_label'`; scope `<anonymous@1>`.
- [L12](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L12) `const services = database && database.services || []`; scope `<anonymous@1>/findService`.
- [L13](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L13) `const code = normalizeServiceCode(context.internalCode || context.candidateCode)`; scope `<anonymous@1>/findService`.
- [L14](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L14) `const service = <bez inicializátora>`; scope `<anonymous@1>/findService`.
- [L15](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L15) `const exact = (service.internalCodes || []).some(item => normalizeServiceCode(item) === code)`; scope `<anonymous@1>/findService`.
- [L16](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L16) `const patterns = service.internalCodePatterns || []`; scope `<anonymous@1>/findService`.
- [L17](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L17) `const patternMatch = patterns.some(pattern => { try { return new RegExp(pattern, 'i').test(code); } catch (error) { return false; } })`; scope `<anonymous@1>/findService`.
- [L26](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L26) `const aliases = service && service.materialAliases || {}`; scope `<anonymous@1>/setActiveServiceAliases`.
- [L28](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L28) `const normalized = api.normalizeKey(value)`; scope `<anonymous@1>/setActiveServiceAliases/<anonymous@27>`.
- [L29](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L29) `const [key, alias] = <bez inicializátora>`; scope `<anonymous@1>/setActiveServiceAliases/<anonymous@27>`.
- [L30](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L30) `const normalizedKey = api.normalizeKey(key)`; scope `<anonymous@1>/setActiveServiceAliases/<anonymous@27>`.
- [L39](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L39) `const byCode = api.findDetector(context.internalCode, context)`; scope `<anonymous@1>/detectorFor`.
- [L46](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L46) `const label = api.clean(row && row.label || '')`; scope `<anonymous@1>/inferField`.
- [L47](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L47) `const key = api.normalizeKey(label).replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '') || 'field_' + (index + 1)`; scope `<anonymous@1>/inferField`.
- [L48](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L48) `const normalizedLabel = api.normalizeKey(label)`; scope `<anonymous@1>/inferField`.
- [L49](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L49) `let type = 'text'`; scope `<anonymous@1>/inferField`.
- [L57](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L57) `const target = service || { id: 'generic', name: context.serviceName || context.candidateCode || 'Neznáma služba', outputAlias: context.serviceName || context.candidateCode || 'sluzba', labelTemplate: {} }`; scope `<anonymous@1>/genericServiceResult`.
- [L63](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L63) `const fields = service && Array.isArray(service.fields) && service.fields.length ? service.fields : (context.rawRows || []).map(inferField)`; scope `<anonymous@1>/genericServiceResult`.
- [L66](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L66) `const params = {}`; scope `<anonymous@1>/genericServiceResult`.
- [L67](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L67) `const rawFields = {}`; scope `<anonymous@1>/genericServiceResult`.
- [L68](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L68) `const universal = api.parseUniversalParameters(context.rawRows || [], service && service.fields || [])`; scope `<anonymous@1>/genericServiceResult`.
- [L69](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L69) `const universalFields = {}`; scope `<anonymous@1>/genericServiceResult`.
- [L83](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L83) `const consumedRows = new Set()`; scope `<anonymous@1>/genericServiceResult`.
- [L85](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L85) `const sourceLabels = (field.sourceLabels || [field.label || field.key]).map(api.normalizeKey)`; scope `<anonymous@1>/genericServiceResult/<anonymous@84>`.
- [L86](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L86) `const matches = (context.rawRows || []).filter(row => { const label = api.normalizeKey(row.label); return sourceLabels.some(source => label === source || label.includes(source) || source.includes(label)); })`; scope `<anonymous@1>/genericServiceResult/<anonymous@84>`.
- [L87](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L87) `const label = api.normalizeKey(row.label)`; scope `<anonymous@1>/genericServiceResult/<anonymous@84>/<anonymous@86>`.
- [L90](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L90) `const rawValue = matches.map(row => row.value).filter(Boolean).join(' | ')`; scope `<anonymous@1>/genericServiceResult/<anonymous@84>`.
- [L93](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L93) `let normalizedValue = rawValue`; scope `<anonymous@1>/genericServiceResult/<anonymous@84>`.
- [L103](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L103) `const field = inferField(row, index)`; scope `<anonymous@1>/genericServiceResult/<anonymous@101>`.
- [L104](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L104) `const rawValue = api.clean(row.value || '')`; scope `<anonymous@1>/genericServiceResult/<anonymous@101>`.
- [L106](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L106) `let normalizedValue = rawValue`; scope `<anonymous@1>/genericServiceResult/<anonymous@101>`.
- [L116](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L116) `const allFields = fields.concat((context.rawRows || []).map(inferField))`; scope `<anonymous@1>/genericServiceResult`.
- [L117](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L117) `const sizeField = allFields.find(field => field.type === 'dimension' || /size|rozmer|format/i.test(field.key || ''))`; scope `<anonymous@1>/genericServiceResult`.
- [L118](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L118) `const sizeRaw = sizeField && rawFields[sizeField.key] || params.sizeRaw || rawFields.size || rawFields.rozmer || ''`; scope `<anonymous@1>/genericServiceResult`.
- [L119](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L119) `let sizeAlias = universal.sizeAlias || api.parseSizeAlias(sizeRaw) || params.size || ''`; scope `<anonymous@1>/genericServiceResult`.
- [L120](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L120) `const widthRaw = Object.entries(rawFields).find(([key]) => /sirka|width/i.test(key))?.[1] || ''`; scope `<anonymous@1>/genericServiceResult`.
- [L121](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L121) `const heightRaw = Object.entries(rawFields).find(([key]) => /vyska|height/i.test(key))?.[1] || ''`; scope `<anonymous@1>/genericServiceResult`.
- [L123](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L123) `const width = (widthRaw.match(/[\d,.]+/) || [''])[0]`; scope `<anonymous@1>/genericServiceResult`.
- [L124](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L124) `const height = (heightRaw.match(/[\d,.]+/) || [''])[0]`; scope `<anonymous@1>/genericServiceResult`.
- [L127](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L127) `const size = api.stripSizeUnitSuffix(sizeAlias)`; scope `<anonymous@1>/genericServiceResult`.
- [L128](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L128) `const materialField = allFields.find(field => field.type === 'material' || /material|media/i.test(field.key || ''))`; scope `<anonymous@1>/genericServiceResult`.
- [L129](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L129) `const materialRaw = materialField && rawFields[materialField.key] || params.materialRaw || params.material || params.mediaTypeRaw || ''`; scope `<anonymous@1>/genericServiceResult`.
- [L130](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L130) `const alias = api.resolveMaterialAlias(materialRaw) || service && (service.outputAlias || service.name) || context.serviceName || context.candidateCode || 'sluzba'`; scope `<anonymous@1>/genericServiceResult`.
- [L131](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L131) `const quantityField = allFields.find(field => field.type === 'quantity' || /quantity|pocet|mnozstvo/i.test(field.key || ''))`; scope `<anonymous@1>/genericServiceResult`.
- [L132](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L132) `const quantityRaw = quantityField && rawFields[quantityField.key] || params.quantityRaw || params.quantity || ''`; scope `<anonymous@1>/genericServiceResult`.
- [L133](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L133) `const quantity = universal.quantity || (quantityRaw ? quantityRaw + 'ks' : '1ks')`; scope `<anonymous@1>/genericServiceResult`.
- [L134](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L134) `const tokens = Object.assign({}, params, { alias, size, sizeAlias, quantity, vp: context.vp || '', code: context.internalCode || context.candidateCode || target.id, detector: target.id, productCode: context.internalCode || context.candidateCode || target.id, material: materialRaw, materialAlias: api`; scope `<anonymous@1>/genericServiceResult`.
- [L146](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L146) `const template = target.labelTemplate || {}`; scope `<anonymous@1>/genericServiceResult`.
- [L147](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L147) `const left = api.renderTemplate(template.left || '{alias}', tokens) || alias`; scope `<anonymous@1>/genericServiceResult`.
- [L148](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L148) `const top = api.renderTemplate(template.top || '', tokens)`; scope `<anonymous@1>/genericServiceResult`.
- [L149](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L149) `const bottom = api.renderTemplate(template.bottom || '', tokens)`; scope `<anonymous@1>/genericServiceResult`.
- [L175](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L175) `const parsed = api.parseUniversalParameters(context.rawRows || [], service && service.fields || [])`; scope `<anonymous@1>/addUniversalParameters`.
- [L176](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L176) `const hasDimensions = parsed.widthCm != null && parsed.heightCm != null`; scope `<anonymous@1>/addUniversalParameters`.
- [L177](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L177) `const hasQuantity = parsed.quantityCount != null`; scope `<anonymous@1>/addUniversalParameters`.
- [L180](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L180) `const shared = {}`; scope `<anonymous@1>/addUniversalParameters`.
- [L209](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L209) `const element = document.querySelector(DATE_SELECTOR)`; scope `<anonymous@1>/detectDeliveryDate`.
- [L211](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L211) `const text = api.clean(element.textContent || element.value || '')`; scope `<anonymous@1>/detectDeliveryDate`.
- [L212](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L212) `const match = text.match(/(\d{1,2})\.\s*(\d{1,2})\./)`; scope `<anonymous@1>/detectDeliveryDate`.
- [L222](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L222) `const state = result.state || {}`; scope `<anonymous@1>/makeTokens`.
- [L223](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L223) `const rename = result.rename || {}`; scope `<anonymous@1>/makeTokens`.
- [L224](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L224) `const params = mergedParams(result)`; scope `<anonymous@1>/makeTokens`.
- [L225](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L225) `const sizeAlias = rename.sizeAlias || state.sizeAlias || params.sizeAlias || ''`; scope `<anonymous@1>/makeTokens`.
- [L226](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L226) `const quantityValue = rename.quantity || params.quantity || '1ks'`; scope `<anonymous@1>/makeTokens`.
- [L227](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L227) `const quantity = /ks$/i.test(String(quantityValue)) ? String(quantityValue) : '${quantityValue}ks'`; scope `<anonymous@1>/makeTokens`.
- [L228](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L228) `const alias = rename.alias || state.outputAlias || result.left || params.alias || ''`; scope `<anonymous@1>/makeTokens`.
- [L253](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L253) `const detectorId = result.detector || ''`; scope `<anonymous@1>/applySettings`.
- [L254](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L254) `const settings = api.getDetectorSettings(detectorId)`; scope `<anonymous@1>/applySettings`.
- [L255](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L255) `let tokens = makeTokens(result, context)`; scope `<anonymous@1>/applySettings`.
- [L272](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L272) `const rename = result && result.rename || {}`; scope `<anonymous@1>/buildRenameDebug`.
- [L273](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L273) `const pattern = rename.pattern || '{alias}_{size}_{quantity}_{vp} {original}.{ext}'`; scope `<anonymous@1>/buildRenameDebug`.
- [L274](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L274) `const candidates = Array.from(document.querySelectorAll('a[href]')).filter(anchor => { const href = anchor.href || ''; const text = api.normalizeKey(anchor.textContent || ''); const cls = typeof anchor.className === 'string' ? anchor.className : ''; return /\/data\/servicesForm\//i.test(href) || /\/`; scope `<anonymous@1>/buildRenameDebug`.
- [L275](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L275) `const href = anchor.href || ''`; scope `<anonymous@1>/buildRenameDebug/<anonymous@274>`.
- [L276](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L276) `const text = api.normalizeKey(anchor.textContent || '')`; scope `<anonymous@1>/buildRenameDebug/<anonymous@274>`.
- [L277](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L277) `const cls = typeof anchor.className === 'string' ? anchor.className : ''`; scope `<anonymous@1>/buildRenameDebug/<anonymous@274>`.
- [L287](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L287) `const files = candidates.map(anchor => { let original = 'subor'; let ext = ''; try { const url = new URL(anchor.href, location.href); const name = decodeURIComponent(url.pathname.split('/').pop() || 'subor'); const dot = name.lastIndexOf('.'); if (dot > 0) { original = name.slice(0, dot); ext = name`; scope `<anonymous@1>/buildRenameDebug`.
- [L288](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L288) `let original = 'subor'`; scope `<anonymous@1>/buildRenameDebug/<anonymous@287>`.
- [L289](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L289) `let ext = ''`; scope `<anonymous@1>/buildRenameDebug/<anonymous@287>`.
- [L291](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L291) `const url = new URL(anchor.href, location.href)`; scope `<anonymous@1>/buildRenameDebug/<anonymous@287>`.
- [L292](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L292) `const name = decodeURIComponent(url.pathname.split('/').pop() || 'subor')`; scope `<anonymous@1>/buildRenameDebug/<anonymous@287>`.
- [L293](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L293) `const dot = name.lastIndexOf('.')`; scope `<anonymous@1>/buildRenameDebug/<anonymous@287>`.
- [L302](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L302) `const rawTokens = Object.assign({}, result && result.tokens || {}, { alias: rename.alias || result && result.state && result.state.outputAlias || result && result.left || 'material', size: api.stripSizeUnitSuffix(rename.sizeAlias || result && result.state && result.state.sizeAlias || ''), sizeAlias:`; scope `<anonymous@1>/buildRenameDebug/<anonymous@287>`.
- [L313](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L313) `const tokens = {}`; scope `<anonymous@1>/buildRenameDebug/<anonymous@287>`.
- [L319](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L319) `let proposed = api.renderTemplate(pattern, tokens) .replace(/_+/g, '_') .replace(/\s+/g, ' ') .replace(/_\s/g, ' ') .replace(/\s+\./g, '.') .replace(/^[_\s]+|[_\s]+$/g, '')`; scope `<anonymous@1>/buildRenameDebug/<anonymous@287>`.
- [L338](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L338) `const database = databaseState && databaseState.database || { services: [] }`; scope `<anonymous@1>/detect`.
- [L339](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L339) `const service = findService(database, context)`; scope `<anonymous@1>/detect`.
- [L342](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L342) `const detector = detectorFor(service, context)`; scope `<anonymous@1>/detect`.
- [L343](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L343) `let result = null`; scope `<anonymous@1>/detect`.
- [L361](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L361) `const right = detectDeliveryDate()`; scope `<anonymous@1>/detect`.
- [L362](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L362) `const zones = { left: result && result.left || '', right, top: result && result.top || '', bottom: result && result.bottom || '' }`; scope `<anonymous@1>/detect`.
- [L368](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L368) `const detection = { service, result, zones, context, database: databaseState || null, detectedAt: new Date().toISOString() }`; scope `<anonymous@1>/detect`.

## storage

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## events

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## lifecycle

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## io

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## dom-read

- [L1](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L1) `function () { 'use strict'; const api = window.MaterialDetectorNextAPI; const DATE_SELECTOR = '#dodacia_lehota_label'; function normalizeServiceCode(value) { return api.normalizeKey(value).replace(/\s+/g, ''); } function findService(database, context) { const services = database && database.services`; scope `root`.
- [L209](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L209) `document.querySelector(DATE_SELECTOR)`; scope `<anonymous@1>/detectDeliveryDate`.
- [L274](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L274) `Array.from(document.querySelectorAll('a[href]')).filter(anchor => { const href = anchor.href || ''; const text = api.normalizeKey(anchor.textContent || ''); const cls = typeof anchor.className === 'string' ? anchor.className : ''; return /\/data\/servicesForm\//i.test(href) || /\/vyrobne_prikazy\/de`; scope `<anonymous@1>/buildRenameDebug`.
- [L274](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L274) `Array.from(document.querySelectorAll('a[href]')).filter(anchor => { const href = anchor.href || ''; const text = api.normalizeKey(anchor.textContent || ''); const cls = typeof anchor.className === 'string' ? anchor.className : ''; return /\/data\/servicesForm\//i.test(href) || /\/vyrobne_prikazy\/de`; scope `<anonymous@1>/buildRenameDebug`.
- [L274](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L274) `document.querySelectorAll('a[href]')`; scope `<anonymous@1>/buildRenameDebug`.

## dom-write

Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.

## logs

- [L1](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L1) `function () { 'use strict'; const api = window.MaterialDetectorNextAPI; const DATE_SELECTOR = '#dodacia_lehota_label'; function normalizeServiceCode(value) { return api.normalizeKey(value).replace(/\s+/g, ''); } function findService(database, context) { const services = database && database.services`; scope `root`.
- [L349](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L349) `console.error('[materialDetectorNext] detekcia zlyhala', detector.id, error)`; scope `<anonymous@1>/detect`.

## Zápisy do globálov, DOM a ostatných vlastností

- [L376](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L376) `window.__materialDetectorNextState = detection`.
- [L380](https://github.com/denkz0ne/moduly-FC-userscripts/blob/75087f8c4cbd34190e69318038bda6ef36eee0f2/service-catalog/core/extraction.js#L380) `window.MaterialDetectorNextExtraction = { detect, findService, detectDeliveryDate, makeTokens, addUniversalParameters }`.
