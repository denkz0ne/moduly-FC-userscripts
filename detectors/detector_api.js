(function () {
    'use strict';

    const MATERIAL_ALIAS_STORAGE_KEY = 'materialDetector.materialAliases.v1';
    const LAST_SIZE_ALIAS_STORAGE_PREFIX = 'materialDetector.lastSizeAlias:';
    const detectors = [];

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
        const map = {};
        map[normalizeKey('Pauzovaci papier 90g')] = 'pauz';
        map[normalizeKey('zakladny papier biely 80g/m2')] = '80g';
        map[normalizeKey('neonovy papier zeleny 90g/m2')] = '90n_zel';
        map[normalizeKey('neonovy papier oranzovy 90g/m2')] = '90n_or';
        map[normalizeKey('neonovy papier ruzovy 90g/m2')] = '90n_ruz';
        map[normalizeKey('neonovy papier zlty 90g/m2')] = '90n_zlt';
        map[normalizeKey('42foto/web|economy plagat|120g')] = '120';
        map[normalizeKey('42foto/web|economy plagat|140g')] = '140';
        map[normalizeKey('42foto/web|Plagatovy papier|135g')] = '135';
        map[normalizeKey('42foto/web|Plagatovy papier|200g')] = '200';
        map[normalizeKey('42foto/web|fotopapier|leskly|200g')] = '200 lesk';
        map[normalizeKey('42foto/web|fotopapier|leskly|260g')] = '260 lesk';
        map[normalizeKey('42foto/web|fotopapier|pololeskly|200g')] = '200 sat';
        map[normalizeKey('42foto/web|fotopapier|pololeskly|240g')] = '240 sat';
        map[normalizeKey('42foto/web|fotopapier|pololeskly|260g')] = '260 sat';
        map[normalizeKey('42foto/web|fotopapier|matny|180g')] = '180';
        map[normalizeKey('42foto/web|fotopapier|matny|230g')] = '230';
        map[normalizeKey('42foto/web|platno|standard 280g')] = 'poly';
        map[normalizeKey('42foto/web|platno|premium 380g')] = 'canv';
        map[normalizeKey('42foto/web|billboardovy papier')] = 'bb';
        map[normalizeKey('42foto/web|medium pre rollup|economy')] = 'rld eco';
        map[normalizeKey('42foto/web|medium pre rollup|standart')] = 'rld';
        map[normalizeKey('42foto/web|medium pre rollup|standard')] = 'rld';
        map[normalizeKey('42foto/web|backlit|lesk')] = 'back lesk';
        map[normalizeKey('42foto/web|backlit|mat')] = 'back mat';
        return map;
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
            console.warn('[materialDetector] alias config load failed', e);
            return defaults;
        }
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
        return '';
    }

    function exposeAliasHelpers() {
        window.__getMaterialAliasConfig = function () {
            return loadMaterialAliasConfig();
        };
        window.__setMaterialAlias = function (materialLabel, alias) {
            const key = normalizeKey(materialLabel);
            const value = String(alias || '').trim();
            if (!key || !value) return false;
            const current = loadMaterialAliasConfig();
            current[key] = value;
            localStorage.setItem(MATERIAL_ALIAS_STORAGE_KEY, JSON.stringify(current));
            return true;
        };
        window.__clearMaterialAlias = function (materialLabel) {
            const key = normalizeKey(materialLabel);
            if (!key) return false;
            const current = loadMaterialAliasConfig();
            delete current[key];
            localStorage.setItem(MATERIAL_ALIAS_STORAGE_KEY, JSON.stringify(current));
            return true;
        };
    }

    function getProductCodeFromPriceRows() {
        const rows = document.querySelectorAll("tr[title='ceny bez DPH']");
        for (const row of rows) {
            const text = normalizeKey(row.textContent || row.innerText || '');
            if (text.includes('42foto/web') || text.includes('48foto/web')) return '42foto/web';
            if (text.includes('41tv')) return '41tv';
            const photo = text.match(/\b(48fh\d{4,6}|48rp\d{4,6}|48r\d{4,6}|48xk|48x[146])\b/i);
            if (photo) return photo[1].toLowerCase();
        }
        return '';
    }

    function collectPageContext() {
        const detailInfo = document.querySelector('#vpDetailInfo') || document;
        const rowTexts = Array.from(document.querySelectorAll('tr')).map(tr => tr.textContent || '');
        const formTexts = Array.from(detailInfo.querySelectorAll('input, select, textarea, option, label, p, span, div'))
            .map(el => (el.textContent || el.value || '').trim())
            .filter(Boolean);
        const productText = [document.querySelector('h1, h2')?.textContent || '', ...rowTexts, ...formTexts].join(' ');
        const priceCode = getProductCodeFromPriceRows();
        const photoMatch = productText.match(/\b(48fh\d{4,6}|48rp\d{4,6}|48r\d{4,6}|48xk|48x[146])\b/i);
        const internalCode = photoMatch ? photoMatch[1].toLowerCase() : priceCode;
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
        const raw = clean(text).replace(/×/g, 'x').replace(/,/g, '.');
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
                } else if (/\bA\s*\d{1,2}\b/i.test(value) || /\d+[,.]?\d*\s*[x×]\s*\d+[,.]?\d*/.test(value)) {
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
            console.warn('[materialDetector] invalid detector registration', detector);
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
        resolveMaterialAlias,
        exposeAliasHelpers,
        parseSizeAlias,
        detectUniversalSizeAlias,
        stripSizeUnitSuffix,
        hasGiftPack,
        hasCanvasSelected,
        registerDetector,
        getDetectors: () => detectors.slice(),
        findDetector: (internalCode, context) => detectors.find(detector => detectorMatches(detector, internalCode, context)),
        LAST_SIZE_ALIAS_STORAGE_PREFIX
    };

    window.MaterialDetectorAPI = api;
})();