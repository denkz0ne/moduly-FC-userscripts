(function () {
    'use strict';

    const MATERIAL_ALIAS_STORAGE_KEY = 'materialDetectorNext.materialAliases.v1';
    const PANEL_CONFIG_STORAGE_KEY = 'materialDetectorNext.panelConfig.v1';
    const LAST_SIZE_ALIAS_STORAGE_PREFIX = 'materialDetectorNext.lastSizeAlias:';
    const detectors = [];
    let serviceAliasResolver = function () { return ''; };

    function clean(text) {
        return String(text || '').replace(/\s+/g, ' ').trim();
    }

    function normalizeKey(text) {
        return clean(text)
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '');
    }

    function sanitizeToken(value) {
        return String(value || '')
            .replace(/[\\/:*?"<>|]+/g, ' ')
            .replace(/\s+/g, ' ')
            .trim();
    }

    function sanitizeSnakeToken(value) {
        return sanitizeToken(value)
            .replace(/\s+/g, '_')
            .replace(/_+/g, '_')
            .replace(/^_+|_+$/g, '');
    }

    function getCurrentVpFromUrl() {
        const match = location.pathname.match(/\/index\/(\d+)/);
        return match ? match[1] : '';
    }

    function getDefaultMaterialAliasMap() {
        return {};
    }

    function loadMaterialAliasConfig() {
        const defaults = getDefaultMaterialAliasMap();
        try {
            const raw = localStorage.getItem(MATERIAL_ALIAS_STORAGE_KEY);
            if (!raw) return defaults;
            const parsed = JSON.parse(raw);
            if (!parsed || typeof parsed !== 'object') return defaults;
            const custom = {};
            Object.entries(parsed).forEach(([key, value]) => {
                const normKey = normalizeKey(key);
                const alias = String(value || '').trim();
                if (normKey && alias) custom[normKey] = alias;
            });
            return Object.assign({}, defaults, custom);
        } catch (e) {
            console.warn('[materialDetectorNext] alias config load failed', e);
            return defaults;
        }
    }

    function saveMaterialAliasConfig(config) {
        const normalized = {};
        Object.entries(config || {}).forEach(([key, value]) => {
            const normKey = normalizeKey(key);
            const alias = String(value || '').trim();
            if (normKey && alias) normalized[normKey] = alias;
        });
        localStorage.setItem(MATERIAL_ALIAS_STORAGE_KEY, JSON.stringify(normalized));
        return normalized;
    }

    function setMaterialAlias(materialLabel, alias) {
        const key = normalizeKey(materialLabel);
        const value = String(alias || '').trim();
        if (!key || !value) return false;
        const current = loadMaterialAliasConfig();
        current[key] = value;
        saveMaterialAliasConfig(current);
        return true;
    }

    function clearMaterialAlias(materialLabel) {
        const key = normalizeKey(materialLabel);
        if (!key) return false;
        const current = loadMaterialAliasConfig();
        delete current[key];
        saveMaterialAliasConfig(current);
        return true;
    }

    function resolveMaterialAlias(materialText) {
        const cleanText = clean(materialText);
        if (!cleanText) return '';
        const config = loadMaterialAliasConfig();
        const normalized = normalizeKey(cleanText);
        if (config[normalized]) return config[normalized];
        for (const [key, alias] of Object.entries(config)) {
            if (normalized.includes(key)) return alias;
        }
        return serviceAliasResolver(cleanText) || '';
    }

    function setServiceAliasResolver(resolver) {
        serviceAliasResolver = typeof resolver === 'function' ? resolver : function () { return ''; };
    }

    function getDefaultPanelConfig() {
        return { version: 1, detectors: {} };
    }

    function normalizePanelConfig(config) {
        const base = getDefaultPanelConfig();
        if (!config || typeof config !== 'object') return base;
        const detectorsConfig = config.detectors && typeof config.detectors === 'object' ? config.detectors : {};
        return { version: 1, detectors: detectorsConfig };
    }

    function loadPanelConfig() {
        try {
            const raw = localStorage.getItem(PANEL_CONFIG_STORAGE_KEY);
            if (!raw) return getDefaultPanelConfig();
            return normalizePanelConfig(JSON.parse(raw));
        } catch (e) {
            console.warn('[materialDetectorNext] panel config load failed', e);
            return getDefaultPanelConfig();
        }
    }

    function savePanelConfig(config) {
        const normalized = normalizePanelConfig(config);
        localStorage.setItem(PANEL_CONFIG_STORAGE_KEY, JSON.stringify(normalized));
        return normalized;
    }

    function getDetectorSettings(detectorId) {
        const id = String(detectorId || '');
        const config = loadPanelConfig();
        const settings = config.detectors[id];
        return settings && typeof settings === 'object' ? settings : {};
    }

    function saveDetectorSettings(detectorId, settings) {
        const id = String(detectorId || '');
        if (!id) return loadPanelConfig();
        const config = loadPanelConfig();
        config.detectors[id] = Object.assign({}, settings || {});
        return savePanelConfig(config);
    }

    function normalizeTemplateBlocks(template) {
        if (!template) return [];
        if (Array.isArray(template)) {
            return template.map(block => ({
                type: block && block.type === 'token' ? 'token' : 'text',
                value: clean(block && block.value != null ? block.value : '')
            })).filter(block => block.value !== '');
        }
        const text = String(template || '');
        const blocks = [];
        const re = /\{([a-zA-Z0-9_]+)\}/g;
        let last = 0;
        let match;
        while ((match = re.exec(text))) {
            if (match.index > last) blocks.push({ type: 'text', value: text.slice(last, match.index) });
            blocks.push({ type: 'token', value: match[1] });
            last = match.index + match[0].length;
        }
        if (last < text.length) blocks.push({ type: 'text', value: text.slice(last) });
        return blocks.filter(block => block.value !== '');
    }

    function templateToPattern(template) {
        return normalizeTemplateBlocks(template).map(block => block.type === 'token' ? `{${block.value}}` : block.value).join('');
    }

    function renderTemplate(template, tokens) {
        return normalizeTemplateBlocks(template).map(block => {
            if (block.type === 'token') return tokens && tokens[block.value] != null ? String(tokens[block.value]) : '';
            return block.value;
        }).join('').replace(/[ \t]+/g, ' ').trim();
    }

    function exposeAliasHelpers() {
        window.__getMaterialDetectorNextAliasConfig = function () { return loadMaterialAliasConfig(); };
        window.__setMaterialDetectorNextAlias = setMaterialAlias;
        window.__clearMaterialDetectorNextAlias = clearMaterialAlias;
        window.__getMaterialDetectorNextPanelConfig = function () { return loadPanelConfig(); };
        window.__setMaterialDetectorNextPanelConfig = function (config) { return savePanelConfig(config); };
    }

    function extractKnownProductCode(text) {
        const normalized = normalizeKey(text);
        const zd = normalized.match(/\b(49ban|68bs|67mf|49s)\b/i);
        if (zd) return zd[1].toLowerCase();
        const photo = normalized.match(/\b(48fh\d{4,6}|48rp\d{4,6}|48r\d{4,6}|48xk|48x[146])\b/i);
        if (photo) return photo[1].toLowerCase();
        if (normalized.includes('42foto/web') || normalized.includes('48foto/web')) return '42foto/web';
        if (normalized.includes('41tv')) return '41tv';
        return '';
    }

    function getProductCodeFromPriceRows() {
        const rows = document.querySelectorAll("tr[title='ceny bez DPH']");
        for (const row of rows) {
            const code = extractKnownProductCode(row.textContent || row.innerText || '');
            if (code) return code;
        }
        return '';
    }

    function collectPageContext(options = {}) {
        const detailInfo = document.querySelector('#vpDetailInfo') || document;
        const rowTexts = Array.from(document.querySelectorAll('tr')).map(tr => tr.textContent || '');
        const formTexts = Array.from(detailInfo.querySelectorAll('input, select, textarea, option, label, p, span, div'))
            .map(el => (el.textContent || el.value || '').trim())
            .filter(Boolean);
        const productText = [document.querySelector('h1, h2')?.textContent || '', ...rowTexts, ...formTexts].join(' ');
        const priceCode = options.skipProductCode ? '' : getProductCodeFromPriceRows();
        const productCode = options.skipProductCode ? '' : extractKnownProductCode(productText);
        const internalCode = productCode || priceCode;
        return { detailInfo, rowTexts, formTexts, productText, internalCode, priceCode };
    }

    function extractValuesFromParamRow(valueCell) {
        if (!valueCell) return [];
        const chunks = Array.from(valueCell.querySelectorAll('.whitespace-pre-line'))
            .map(el => clean(el.textContent || ''))
            .filter(Boolean);
        if (chunks.length) return Array.from(new Set(chunks));
        const fallback = clean(valueCell.textContent || '');
        return fallback ? [fallback] : [];
    }

    function getZdParamRows(root) {
        const rows = Array.from(root.querySelectorAll(':scope > div.flex'));
        return rows.filter(row => row.querySelectorAll(':scope > div').length >= 2);
    }

    function parseZdParams() {
        const root = document.querySelector('#zd-form-container #VPZDParams');
        if (!root) return null;
        const params = {};
        getZdParamRows(root).forEach(row => {
            const cells = row.querySelectorAll(':scope > div');
            if (cells.length < 2) return;
            const rawLabel = clean(cells[0].textContent || '');
            const normLabel = normalizeKey(rawLabel);
            if (!normLabel) return;
            const values = extractValuesFromParamRow(cells[1]);
            if (!values.length) return;
            params[normLabel] = { label: rawLabel, values, value: values.join(' | ') };
        });
        return Object.keys(params).length ? params : null;
    }

    function getParamValueByLabelContains(params, patterns) {
        if (!params) return '';
        for (const [key, item] of Object.entries(params)) {
            if (patterns.some(pattern => key.includes(pattern))) return item.value || '';
        }
        return '';
    }

    function getAllParamValues(params) {
        if (!params) return [];
        return Object.values(params).flatMap(item => item.values || []).map(v => clean(v)).filter(Boolean);
    }

    function toCleanNumber(value) {
        if (!value && value !== 0) return '';
        const n = Number(String(value).replace(',', '.'));
        if (!Number.isFinite(n)) return '';
        if (Math.abs(n - Math.round(n)) < 0.00001) return String(Math.round(n));
        return String(Math.round(n * 10) / 10).replace('.', ',');
    }

    function normalizeCmOutput(w, h) {
        const a = toCleanNumber(w);
        const b = toCleanNumber(h);
        if (!a || !b) return '';
        return a + 'x' + b + '_cm';
    }

    function parseSizeAlias(text) {
        const raw = clean(text).replace(/\u00d7/g, 'x').replace(/,/g, '.');
        if (!raw) return '';
        const aMatch = raw.match(/\bA\s*([0-9]{1,2})\b/i);
        if (aMatch) return ('A' + aMatch[1]).toUpperCase();
        const mm = raw.match(/(\d{2,4}(?:\.\d+)?)\s*x\s*(\d{2,4}(?:\.\d+)?)\s*mm\b/i);
        if (mm) return normalizeCmOutput(Number(mm[1]) / 10, Number(mm[2]) / 10);
        const cm = raw.match(/(\d{1,4}(?:\.\d+)?)\s*x\s*(\d{1,4}(?:\.\d+)?)\s*cm\b/i);
        if (cm) return normalizeCmOutput(cm[1], cm[2]);
        const any = raw.match(/(\d{1,4}(?:\.\d+)?)\s*x\s*(\d{1,4}(?:\.\d+)?)/i);
        if (!any) return '';
        const w = Number(any[1]);
        const h = Number(any[2]);
        if (!Number.isFinite(w) || !Number.isFinite(h)) return '';
        if (w > 200 || h > 200) return normalizeCmOutput(w / 10, h / 10);
        return normalizeCmOutput(w, h);
    }

    function stripSizeUnitSuffix(sizeAlias) {
        return clean(sizeAlias).replace(/_?cm$/i, '');
    }

    function numericValue(value) {
        const number = Number(String(value || '').replace(',', '.'));
        return Number.isFinite(number) ? number : null;
    }

    function dimensionToCm(value, unit) {
        if (value == null) return null;
        if (unit === 'mm') return value / 10;
        if (unit === 'm') return value * 100;
        return value;
    }

    function cleanDimensionNumber(value) {
        return Math.round(value * 100) / 100;
    }

    function parseDimensionPair(value, unitHint = '') {
        const raw = clean(String(unitHint || '') + ' ' + String(value || ''))
            .replace(/[\u00d7\u2715]/g, 'x')
            .replace(/,/g, '.')
            .toLowerCase();
        const match = raw.match(/(\d+(?:\.\d+)?)\s*(mm|cm|m)?\s*[x*]\s*(\d+(?:\.\d+)?)\s*(mm|cm|m)?\b/i);
        if (!match) return null;
        const first = Number(match[1]);
        const second = Number(match[3]);
        const unit = match[2] || match[4] || ((raw.match(/\b(mm|cm|m)\b/i) || [])[1]) || '';
        const inferredUnit = unit || (Math.max(first, second) > 200 ? 'mm' : 'cm');
        const widthCm = cleanDimensionNumber(dimensionToCm(first, match[2] || inferredUnit));
        const heightCm = cleanDimensionNumber(dimensionToCm(second, match[4] || inferredUnit));
        return { widthCm, heightCm };
    }

    function parseDimensionValue(value, unitHint = '') {
        const raw = clean(String(unitHint || '') + ' ' + String(value || ''))
            .replace(/,/g, '.')
            .toLowerCase();
        const match = raw.match(/(?:^|[^\d])(\d+(?:\.\d+)?)\s*(mm|cm|m)?\b/i);
        if (!match) return null;
        const number = Number(match[1]);
        const unit = match[2] || ((raw.match(/\b(mm|cm|m)\b/i) || [])[1]) || (number > 200 ? 'mm' : 'cm');
        return cleanDimensionNumber(dimensionToCm(number, unit));
    }

    function parseQuantityValue(value) {
        const raw = clean(value).replace(/\u00a0/g, ' ');
        const match = raw.match(/\d+(?:[\s.,]\d{3})*(?:[.,]\d+)?/);
        if (!match) return null;
        const token = match[0].replace(/\s/g, '');
        const separators = token.match(/[.,]/g) || [];
        if (separators.length && /\d{1,3}(?:[.,]\d{3})+$/.test(token)) {
            return Number(token.replace(/[.,]/g, ''));
        }
        return numericValue(token.replace(',', '.'));
    }

    function parseUniversalParameters(rows = [], serviceFields = []) {
        const fields = Array.isArray(serviceFields) ? serviceFields : [];
        const normalizedRows = (Array.isArray(rows) ? rows : []).map(row => ({
            label: clean(row && row.label || ''),
            key: normalizeKey(row && row.label || ''),
            value: clean(row && (row.value || (row.values || []).join(' | ')) || '')
        })).filter(row => row.label && row.value);
        const fieldLabels = field => [field.key, field.label].concat(field.sourceLabels || [])
            .map(normalizeKey).filter(Boolean);
        const rowsFor = (kind, pattern) => normalizedRows.filter(row => pattern.test(row.key)
            || fields.some(field => {
                const identity = normalizeKey([field.key, field.type].join(' '));
                const relevant = kind === 'dimension'
                    ? /size|dimension|width|height|rozmer|format/.test(identity)
                    : /quantity|count|pocet|mnozstvo|qty/.test(identity);
                return relevant && fieldLabels(field).some(label => row.key === label || row.key.includes(label) || label.includes(row.key));
            }));
        const rowsForConfiguredField = keyPattern => normalizedRows.filter(row => fields.some(field => {
            const identity = normalizeKey([field.key, field.type].join(' '));
            return keyPattern.test(identity) && fieldLabels(field).some(label => row.key === label || row.key.includes(label) || label.includes(row.key));
        }));

        const dimensionRows = Array.from(new Set(rowsFor('dimension', /rozmer|format|velkost|size|dimension|sirka|vyska|width|height/)));
        const widthRows = Array.from(new Set(dimensionRows.filter(row => /sirka|width|breite/.test(row.key)).concat(rowsForConfiguredField(/width|sirka/))));
        const heightRows = Array.from(new Set(dimensionRows.filter(row => /vyska|height|hoehe/.test(row.key)).concat(rowsForConfiguredField(/height|vyska/))));
        let dimensions = null;
        for (const row of dimensionRows) {
            dimensions = parseDimensionPair(row.value, row.label);
            if (dimensions) break;
        }
        if (!dimensions && widthRows.length && heightRows.length) {
            const unitHint = [widthRows[0].label, widthRows[0].value, heightRows[0].label, heightRows[0].value].join(' ').match(/\b(mm|cm|m)\b/i);
            const sharedUnit = unitHint ? unitHint[1] : '';
            const widthCm = parseDimensionValue(widthRows[0].value, `${widthRows[0].label} ${sharedUnit}`);
            const heightCm = parseDimensionValue(heightRows[0].value, `${heightRows[0].label} ${sharedUnit}`);
            if (widthCm != null && heightCm != null) dimensions = { widthCm, heightCm };
        }

        const quantityRows = rowsFor('quantity', /pocet|mnozstvo|quantity|qty|kusov|kusy|vytlack|naklad|menge|cantidad|anzahl|(?:^|\s)ks(?:\s|$)/);
        const quantityCount = quantityRows.map(row => parseQuantityValue(row.value)).find(value => value != null);
        const sizeAlias = dimensions
            ? parseSizeAlias(`${dimensions.widthCm}x${dimensions.heightCm} cm`)
            : '';
        return Object.assign({
            width: dimensions ? dimensions.widthCm : null,
            height: dimensions ? dimensions.heightCm : null,
            widthCm: dimensions ? dimensions.widthCm : null,
            heightCm: dimensions ? dimensions.heightCm : null,
            sizeAlias,
            quantityCount: quantityCount == null ? null : quantityCount,
            quantity: quantityCount == null ? '' : `${quantityCount}ks`
        });
    }

    function detectUniversalSizeAlias() {
        const root = document.querySelector('#zd-form-container #VPZDParams');
        if (root) {
            const rows = Array.from(root.querySelectorAll(':scope > div.flex'));
            const candidates = [];
            rows.forEach(row => {
                const cols = row.querySelectorAll(':scope > div');
                if (cols.length < 2) return;
                const label = normalizeKey(cols[0].textContent || '');
                const value = clean(cols[1].textContent || '');
                if (!value) return;
                if (label.includes('format') || label.includes('velkost') || label.includes('rozmer') || label.includes('sirka') || label.includes('vyska')) {
                    candidates.unshift(value);
                } else if (/\bA\s*\d{1,2}\b/i.test(value) || /\d+[,.]?\d*\s*[x\u00d7]\s*\d+[,.]?\d*/.test(value)) {
                    candidates.push(value);
                }
            });
            for (const candidate of candidates) {
                const alias = parseSizeAlias(candidate);
                if (alias) return alias;
            }
        }

        const inputs = Array.from((document.querySelector('#vpDetailInfo') || document).querySelectorAll('input[disabled], input:not([type="hidden"]), select[disabled]'));
        for (const el of inputs) {
            const alias = parseSizeAlias(el.value || el.textContent || '');
            if (alias) return alias;
        }
        return '';
    }

    function hasGiftPack(detailInfo) {
        const select = detailInfo.querySelector("select[name='FO_GIFT_PACK']");
        return !!select && !!clean(select.value);
    }

    function hasCanvasSelected(detailInfo) {
        const select = detailInfo.querySelector("select[name='FO_CANVAS']");
        if (!select) return false;
        const opt = select.options[select.selectedIndex];
        return !!opt && /canvas/i.test(opt.textContent || '');
    }

    function detectorMatches(detector, internalCode, context) {
        if (!detector) return false;
        if (typeof detector.match === 'function') return !!detector.match(internalCode, context, api);
        return false;
    }

    function registerDetector(detector) {
        if (!detector || !detector.id || typeof detector.detect !== 'function') {
            console.warn('[materialDetectorNext] invalid detector registration', detector);
            return;
        }
        detectors.push(detector);
    }

    const api = {
        clean,
        normalizeKey,
        sanitizeToken,
        sanitizeSnakeToken,
        getCurrentVpFromUrl,
        collectPageContext,
        parseZdParams,
        getParamValueByLabelContains,
        getAllParamValues,
        loadMaterialAliasConfig,
        saveMaterialAliasConfig,
        setMaterialAlias,
        clearMaterialAlias,
        resolveMaterialAlias,
        setServiceAliasResolver,
        exposeAliasHelpers,
        loadPanelConfig,
        savePanelConfig,
        getDetectorSettings,
        saveDetectorSettings,
        normalizeTemplateBlocks,
        templateToPattern,
        renderTemplate,
        parseSizeAlias,
        parseDimensionPair,
        parseDimensionValue,
        parseQuantityValue,
        parseUniversalParameters,
        detectUniversalSizeAlias,
        stripSizeUnitSuffix,
        hasGiftPack,
        hasCanvasSelected,
        registerDetector,
        getDetectors: () => detectors.slice(),
        findDetector: (internalCode, context) => detectors.find(detector => detectorMatches(detector, internalCode, context)),
        MATERIAL_ALIAS_STORAGE_KEY,
        PANEL_CONFIG_STORAGE_KEY,
        LAST_SIZE_ALIAS_STORAGE_PREFIX
    };

    window.MaterialDetectorNextAPI = api;
})();
