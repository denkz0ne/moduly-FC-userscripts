// ==UserScript==
// @name         materialDetector
// @namespace    https://moduly.faxcopy.sk/
// @author       mato e.
// @version      4.2.0
// @description  Material detekcia + univerzalna velkost + premenovanie stahovanych suborov.
// @updateURL    https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/materialDetector.user.js
// @downloadURL  https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/materialDetector.user.js
// @match        https://moduly.faxcopy.sk/vyrobne_prikazy/detail/index/*
// @grant        GM_download
// @run-at       document-start
// ==/UserScript==

(function () {
    'use strict';

    const MATERIAL_ALIAS_STORAGE_KEY = 'materialDetector.materialAliases.v1';
    const STATE_TTL_MS = 30000;
    const LAST_SIZE_ALIAS_STORAGE_PREFIX = 'materialDetector.lastSizeAlias:';

    let lastLeft = null;
    let lastRight = null;
    let lastTop = null;
    let observerStarted = false;
    let renameBound = false;
    let sizeObserverStarted = false;

    function getCurrentVpFromUrl() {
        const match = location.pathname.match(/\/index\/(\d+)/);
        return match ? match[1] : '';
    }

    function normalizeKey(text) {
        if (!text) return '';
        return String(text)
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/\s+/g, ' ')
            .trim();
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

    function getDefaultMaterialAliasMap() {
        const map = {};
        map[normalizeKey('Pauzovací papier 90g')] = 'pauz';
        map[normalizeKey('základný papier biely 80g/m2')] = '80g';
        map[normalizeKey('neónový papier zelený 90g/m2')] = '90n_zel';
        map[normalizeKey('neónový papier oranžový 90g/m2')] = '90n_or';
        map[normalizeKey('neónový papier ružový 90g/m2')] = '90n_ruz';
        map[normalizeKey('neónový papier žltý 90g/m2')] = '90n_zlt';
        map[normalizeKey('42foto/web|economy plagat|120g')] = '120';
        map[normalizeKey('42foto/web|economy plagat|140g')] = '140';
        map[normalizeKey('42foto/web|Plagátový papier|135g')] = '135';
        map[normalizeKey('42foto/web|Plagátový papier|200g')] = '200';
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
            const normalizedCustom = {};
            Object.entries(parsed).forEach(([key, value]) => {
                const normKey = normalizeKey(key);
                const alias = String(value || '').trim();
                if (!normKey || !alias) return;
                normalizedCustom[normKey] = alias;
            });
            return { ...defaults, ...normalizedCustom };
        } catch (e) {
            console.warn('[materialDetector] alias config load failed', e);
            return defaults;
        }
    }

    function saveMaterialAliasConfig(nextMap) {
        try {
            localStorage.setItem(MATERIAL_ALIAS_STORAGE_KEY, JSON.stringify(nextMap));
        } catch (e) {
            console.warn('[materialDetector] alias config save failed', e);
        }
    }

    function resolveMaterialAlias(materialText) {
        const clean = (materialText || '').trim();
        if (!clean) return '';
        const config = loadMaterialAliasConfig();
        const normalizedMaterial = normalizeKey(clean);
        if (config[normalizedMaterial]) return config[normalizedMaterial];
        for (const [key, alias] of Object.entries(config)) {
            if (normalizedMaterial.includes(key)) return alias;
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
            saveMaterialAliasConfig(current);
            return true;
        };

        window.__clearMaterialAlias = function (materialLabel) {
            const key = normalizeKey(materialLabel);
            if (!key) return false;
            const current = loadMaterialAliasConfig();
            delete current[key];
            saveMaterialAliasConfig(current);
            return true;
        };
    }

    function getStateFromSession(vp) {
        try {
            const raw = sessionStorage.getItem('materialDetectorState:' + vp);
            if (!raw) return null;
            const parsed = JSON.parse(raw);
            if (!parsed) return null;
            const updatedTs = new Date(parsed.updatedAt || 0).getTime();
            const ageMs = Date.now() - updatedTs;
            if (!Number.isFinite(updatedTs) || !Number.isFinite(ageMs) || ageMs > STATE_TTL_MS) return null;
            return parsed;
        } catch (e) {
            return null;
        }
    }

    function getMaterialDetectorState() {
        const vp = getCurrentVpFromUrl();
        if (window.__materialDetectorState && String(window.__materialDetectorState.vp || '') === vp) {
            return window.__materialDetectorState;
        }
        return getStateFromSession(vp);
    }

    function setPerTabState(state) {
        const vp = getCurrentVpFromUrl();
        const payload = { vp, ...state, updatedAt: new Date().toISOString() };
        window.__materialDetectorState = payload;
        try {
            sessionStorage.setItem('materialDetectorState:' + vp, JSON.stringify(payload));
        } catch (e) {
            console.warn('[materialDetector] sessionStorage save failed', e);
        }
    }

    function getLastSizeAliasForVp(vp) {
        if (!vp) return '';
        try {
            return String(localStorage.getItem(LAST_SIZE_ALIAS_STORAGE_PREFIX + vp) || '').trim();
        } catch (e) {
            return '';
        }
    }

    function setLastSizeAliasForVp(vp, sizeAlias) {
        if (!vp || !sizeAlias) return;
        try {
            localStorage.setItem(LAST_SIZE_ALIAS_STORAGE_PREFIX + vp, String(sizeAlias).trim());
        } catch (e) {
            // ignore storage errors
        }
    }

    function extractDimensionFromText(text) {
        const match = String(text || '').match(/(\d{2,3})\s*[x×]\s*(\d{2,3})/i);
        return match ? `${match[1]} ${match[2]}` : null;
    }

    function findDimensionInRows() {
        const trs = document.querySelectorAll("tr[title='ceny bez DPH']");
        for (const tr of trs) {
            const txt = tr.innerText;
            const dim = extractDimensionFromText(txt);
            if (dim) return { dim, text: txt };
        }
        return null;
    }

    function detectPriecka() {
        const rows = document.querySelectorAll("tr.detail-price-tr .detail-price-in-order tr");
        for (const tr of rows) {
            if ((tr.innerText || '').toLowerCase().includes('priecka')) return '+';
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
        return { detailInfo, rowTexts, formTexts, productText };
    }

    function findInternalCode(context) {
        const texts = [...(context.rowTexts || []), ...(context.formTexts || []), context.productText || ''];
        for (const text of texts) {
            const match = String(text).match(/\b(48rp\d{4,6}|48r\d{4,6}|48xk|48x[146])\b/i);
            if (match) return match[1].toLowerCase();
        }
        return '';
    }

    function hasCanvasSelected(detailInfo) {
        const select = detailInfo.querySelector("select[name='FO_CANVAS']");
        if (!select) return false;
        const opt = select.options[select.selectedIndex];
        return !!opt && /canvas/i.test(opt.textContent || '');
    }

    function hasGiftPack(detailInfo) {
        const select = detailInfo.querySelector("select[name='FO_GIFT_PACK']");
        return !!select && !!String(select.value || '').trim();
    }

    function splitPhotoobrazDigits(digits) {
        const raw = String(digits || '').trim();
        if (!raw || raw.length % 2 !== 0) return null;
        const mid = raw.length / 2;
        const left = String(Number(raw.slice(0, mid)));
        const right = String(Number(raw.slice(mid)));
        if (!left || !right) return null;
        return { left, right, sizeAlias: `${left}x${right}_cm`, displaySize: `${left} ${right}` };
    }

    function parsePhotoobrazCode(code) {
        const lower = String(code || '').toLowerCase();
        if (lower === '48xk') {
            return { kind: 'hexa', storageAlias: '48xk', displayAlias: 'HEXA', sizeAlias: '' };
        }
        if (/^48x[146]$/.test(lower)) {
            return { kind: 'hexa-premium', storageAlias: lower, displayAlias: 'HEXA P', sizeAlias: '' };
        }
        const match = lower.match(/^48r(p?)(\d{4,6})$/);
        if (!match) return null;
        const premium = !!match[1];
        const split = splitPhotoobrazDigits(match[2]);
        if (!split) return null;
        return {
            kind: premium ? 'premium' : 'regular',
            storageAlias: lower,
            displayAlias: `${split.displaySize}${premium ? ' P' : ''}`,
            sizeAlias: split.sizeAlias
        };
    }

    function detectMaterialPhotoobraz(context) {
        const code = findInternalCode(context);
        const parsed = parsePhotoobrazCode(code);
        if (!parsed) return null;

        const detailInfo = context.detailInfo;
        const canvas = hasCanvasSelected(detailInfo);
        const giftPack = hasGiftPack(detailInfo);

        const displayAlias = `${parsed.displayAlias}${canvas ? ' C' : ''}`.trim();
        const topBadge = giftPack ? 'DBAL' : '';

        setPerTabState({
            detector: 'photoobraz',
            productCode: code,
            outputAlias: parsed.storageAlias,
            sizeAlias: parsed.sizeAlias,
            topBadge,
            params: {
                code,
                kind: parsed.kind,
                canvas,
                giftPack,
                sizeAlias: parsed.sizeAlias
            },
            source: '#vpDetailInfo'
        });

        return {
            material: 'photoobraz',
            alias: displayAlias,
            storageAlias: parsed.storageAlias,
            sizeAlias: parsed.sizeAlias,
            topBadge,
            priority: 500,
            details: parsed
        };
    }

    function getProductCodeFromPriceRows() {
        const rows = document.querySelectorAll("tr[title='ceny bez DPH']");
        for (const row of rows) {
            const text = ((row.textContent || row.innerText || '') + '').toLowerCase();
            if (text.includes('42foto/web')) return '42foto/web';
            if (text.includes('41tv')) return '41tv';
            if (/\b48rp\d{4,6}\b/i.test(text) || /\b48r\d{4,6}\b/i.test(text) || /\b48xk\b/i.test(text) || /\b48x[146]\b/i.test(text)) {
                return 'photoobraz';
            }
            const codeMatch = text.match(/\b([0-9]{2}[a-z]{2})\b/i);
            if (codeMatch) return codeMatch[1].toLowerCase();
        }
        return '';
    }

    function extractValuesFromParamRow(valueCell) {
        if (!valueCell) return [];
        const chunks = Array.from(valueCell.querySelectorAll('.whitespace-pre-line'))
            .map(el => (el.textContent || '').replace(/\s+/g, ' ').trim())
            .filter(Boolean);
        if (chunks.length) return Array.from(new Set(chunks));
        const fallback = (valueCell.textContent || '').replace(/\s+/g, ' ').trim();
        return fallback ? [fallback] : [];
    }

    function getZdParamRows(root) {
        const rows = Array.from(root.querySelectorAll(':scope > div.flex'));
        return rows.filter(row => row.querySelectorAll(':scope > div').length >= 2);
    }

    function parseZdParams() {
        const container = document.querySelector('#zd-form-container');
        if (!container) return null;
        const root = container.querySelector('#VPZDParams');
        if (!root) return null;
        const rows = getZdParamRows(root);
        if (!rows.length) return null;
        const params = {};
        rows.forEach(row => {
            const cells = row.querySelectorAll(':scope > div');
            if (cells.length < 2) return;
            const rawLabel = (cells[0].textContent || '').replace(/\s+/g, ' ').trim();
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
        return Object.values(params)
            .flatMap(item => item.values || [])
            .map(v => String(v || '').trim())
            .filter(Boolean);
    }

    function pickWeight(text) {
        const match = String(text || '').match(/\b(120|135|140|180|200|230|240|260|280|380)\s*g\b/i);
        return match ? `${match[1]}g` : '';
    }

    function parse42fotoWebDetailsFromZd(params) {
        const mediaTypeRaw = getParamValueByLabelContains(params, ['typ tlacoveho media']);
        const mediaType = normalizeKey(mediaTypeRaw);
        const allValues = getAllParamValues(params).map(normalizeKey);
        let variant = '';
        let weight = '';

        if (mediaType.includes('economy plagat')) {
            const gram = getParamValueByLabelContains(params, ['gramaz papiera']);
            weight = pickWeight(gram) || pickWeight(allValues.join(' '));
        } else if (mediaType.includes('plagatovy papier')) {
            const gram = getParamValueByLabelContains(params, ['gramaz papiera']);
            weight = pickWeight(gram) || pickWeight(allValues.join(' '));
        } else if (mediaType.includes('fotopapier')) {
            if (allValues.some(v => v.includes('pololesk'))) variant = 'pololeskly';
            else if (allValues.some(v => v.includes('lesk'))) variant = 'leskly';
            else if (allValues.some(v => v.includes('matn'))) variant = 'matny';
            const gramCandidate = allValues.find(v => /\b(180|200|230|240|260)\s*g\b/i.test(v)) || '';
            weight = pickWeight(gramCandidate);
        } else if (mediaType.includes('platno')) {
            const canvasType = getParamValueByLabelContains(params, ['typ-gramaz platna']);
            if (canvasType) variant = normalizeKey(canvasType);
        } else if (mediaType.includes('billboardovy papier')) {
            variant = 'default';
        } else if (mediaType.includes('rollup')) {
            if (allValues.some(v => v.includes('economy'))) variant = 'economy';
            else if (allValues.some(v => v.includes('standart') || v.includes('standard'))) variant = 'standart';
        } else if (mediaType.includes('backlit')) {
            if (allValues.some(v => v.includes('lesk'))) variant = 'lesk';
            else if (allValues.some(v => v.includes('mat'))) variant = 'mat';
        }

        if (!weight) {
            const anyGramCandidate = allValues.find(v => /\b(120|135|140|180|200|230|240|260|280|380)\s*g\b/i.test(v)) || '';
            weight = pickWeight(anyGramCandidate);
        }

        const quantityRaw = getParamValueByLabelContains(params, ['pocet kusov', 'pocet rovnakych vytlackov']);
        const quantity = (String(quantityRaw || '').match(/\d+/) || [null])[0] || '';
        return { mediaTypeRaw, mediaType, variant, weight, quantity };
    }

    function build42fotoWebAlias(details) {
        const chunks = ['42foto/web'];
        if (details.mediaType.includes('economy plagat')) {
            chunks.push('economy plagat');
            if (details.weight) chunks.push(details.weight);
        } else if (details.mediaType.includes('plagatovy papier')) {
            chunks.push('plagatovy papier');
            if (details.weight) chunks.push(details.weight);
        } else if (details.mediaType.includes('fotopapier')) {
            chunks.push('fotopapier');
            if (details.variant) chunks.push(details.variant);
            if (details.weight) chunks.push(details.weight);
        } else if (details.mediaType.includes('platno')) {
            chunks.push('platno');
            if (details.variant) chunks.push(details.variant);
        } else if (details.mediaType.includes('billboardovy papier')) {
            chunks.push('billboardovy papier');
        } else if (details.mediaType.includes('rollup')) {
            chunks.push('medium pre rollup');
            if (details.variant) chunks.push(details.variant);
        } else if (details.mediaType.includes('backlit')) {
            chunks.push('backlit');
            if (details.variant) chunks.push(details.variant);
        } else {
            chunks.push(details.mediaTypeRaw || 'unknown');
        }
        const key = chunks.join('|');
        const baseAlias = resolveMaterialAlias(key) || details.mediaTypeRaw || '42foto/web';
        const qty = parseInt(details.quantity, 10);
        if (!Number.isNaN(qty) && qty >= 2) return `${baseAlias} | ${qty}ks`;
        return baseAlias;
    }

    function detectMaterial42fotoWeb() {
        const productCode = getProductCodeFromPriceRows();
        if (productCode !== '42foto/web') return null;
        const params = parseZdParams();
        const details = parse42fotoWebDetailsFromZd(params);
        const outputAlias = build42fotoWebAlias(details);
        setPerTabState({
            detector: '42foto/web',
            productCode,
            params: details,
            outputAlias,
            source: '#zd-form-container #VPZDParams',
            aliasConfig: loadMaterialAliasConfig()
        });
        return { material: '42foto/web', alias: outputAlias, storageAlias: outputAlias, priority: 350, details };
    }

    function parse41tvDetailsFromZd(params) {
        const printType = getParamValueByLabelContains(params, ['druh tlace']);
        const material = getParamValueByLabelContains(params, ['tlacove medium', 'tlacove medium pre', 'medium pre', 'material']);
        const materialAlias = resolveMaterialAlias(material) || material;
        const quantityText = getParamValueByLabelContains(params, ['pocet kusov', 'pocet rovnakych vytlackov']);
        const folding = getParamValueByLabelContains(params, ['skladanie']);
        const quantity = (quantityText.match(/\d+/) || [null])[0] || '';
        const normalizedPrintType = normalizeKey(printType);
        let colorCode = '';
        if (normalizedPrintType.includes('fareb')) colorCode = 'f';
        else if (normalizedPrintType.includes('ciernobiel') || normalizedPrintType.includes('ciernobiela') || normalizedPrintType.includes('ciernobiely') || normalizedPrintType.includes('cb')) colorCode = 'cb';
        return { quantity, colorCode, material, materialAlias, folding };
    }

    function hasFoldingSelected(foldingText) {
        const clean = (foldingText || '').trim();
        if (!clean) return false;
        const normalized = normalizeKey(clean);
        if (!normalized) return false;
        if (normalized === 'nie') return false;
        if (normalized.includes('bez')) return false;
        return true;
    }

    function build41tvOutputAlias(details) {
        const materialPart = (details.materialAlias || details.material || '41tv').trim();
        const colorPart = (details.colorCode || '').trim();
        let result = materialPart;
        if (colorPart) result += ` ${colorPart}`;
        if (hasFoldingSelected(details.folding)) result += ' + skl';
        const qty = parseInt(details.quantity, 10);
        if (!Number.isNaN(qty) && qty >= 2) result += ` | ${qty}ks`;
        return result;
    }

    function detectMaterial41tv() {
        const productCode = getProductCodeFromPriceRows();
        if (productCode !== '41tv') return null;
        const params = parseZdParams();
        const details = parse41tvDetailsFromZd(params);
        const outputAlias = build41tvOutputAlias(details);
        setPerTabState({
            detector: '41tv',
            productCode,
            params: details,
            outputAlias,
            source: '#zd-form-container #VPZDParams',
            aliasConfig: loadMaterialAliasConfig()
        });
        return { material: '41tv', alias: outputAlias, storageAlias: outputAlias, priority: 300, details };
    }

    function detectMaterialHexa(context) {
        const code = findInternalCode(context);
        if (!/^48x/i.test(code)) return null;
        return {
            material: 'HEXA',
            alias: code === '48xk' ? 'HEXA' : 'HEXA P',
            storageAlias: code === '48xk' ? '48xk' : code,
            sizeAlias: '',
            topBadge: '',
            priority: 120,
            state: {
                detector: 'hexa',
                productCode: 'HEXA',
                outputAlias: code === '48xk' ? '48xk' : code,
                sizeAlias: '',
                params: { code }
            }
        };
    }

    function runMaterialDetectors(context) {
        return [
            detectMaterialPhotoobraz(context),
            detectMaterial41tv(),
            detectMaterial42fotoWeb(),
            detectMaterialHexa(context)
        ].filter(Boolean).sort((a, b) => b.priority - a.priority);
    }

    function detectExpeditionDate() {
        const el = document.querySelector('#dodacia_lehota_label');
        if (!el) return '';
        const text = (el.textContent || '').trim();
        const match = text.match(/(\d{1,2})\.\s*(\d{1,2})\./);
        if (!match) return '';
        return `${match[1]}. ${match[2]}.`;
    }

    function normalizeSizeAliasFromDisplay(dim) {
        const match = String(dim || '').match(/^(\d{1,3})\s+(\d{1,3})$/);
        if (!match) return '';
        return `${match[1]}x${match[2]}_cm`;
    }

    function detectCurrentLabel() {
        const context = collectPageContext();
        const detections = runMaterialDetectors(context);
        if (detections.length) {
            const best = detections[0];
            return {
                tmLeft: best.alias || '',
                tmTop: best.topBadge || '',
                state: best.state || {
                    detector: best.material || 'unknown',
                    productCode: best.storageAlias || best.alias || '',
                    outputAlias: best.storageAlias || best.alias || '',
                    sizeAlias: best.sizeAlias || '',
                    topBadge: best.topBadge || '',
                    params: best.details || {}
                }
            };
        }

        const row = findDimensionInRows();
        if (!row) return null;
        const premiumDetected = /PREMIUM/i.test(context.productText) || context.rowTexts.some(txt => /PREMIUM/i.test(txt));
        const canvasDetected = hasCanvasSelected(context.detailInfo);
        const topBadge = hasGiftPack(context.detailInfo) ? 'DBAL' : '';
        let result = row.dim || '';
        const pr = detectPriecka();
        if (pr) result += pr;
        if (premiumDetected) result += ' P';
        if (canvasDetected) result += ' C';
        return {
            tmLeft: result,
            tmTop: topBadge,
            state: {
                detector: 'fallback',
                productCode: 'fallback',
                outputAlias: result,
                sizeAlias: normalizeSizeAliasFromDisplay(row.dim),
                topBadge,
                params: { sizeAlias: normalizeSizeAliasFromDisplay(row.dim), premiumDetected, canvasDetected }
            }
        };
    }

    function showLabel(leftText, rightText, topText) {
        if (!leftText && !rightText && !topText) return;
        const h = document.querySelector('h1, h2');
        if (!h) return;

        let elLeft = document.querySelector('#shortcut-info-label');
        let elRight = document.querySelector('#shortcut-info-date');
        let elTop = document.querySelector('#shortcut-info-top');

        if (!elLeft) {
            elLeft = document.createElement('span');
            elLeft.id = 'shortcut-info-label';
            elLeft.style.cssText = 'background:#fffa65;color:#000;padding:4px 8px;margin-left:12px;border-radius:4px;font-weight:bold;';
            h.append(elLeft);
        }

        if (!elRight) {
            elRight = document.createElement('span');
            elRight.id = 'shortcut-info-date';
            elRight.style.cssText = 'background:#d0ffb3;color:#000;padding:4px 8px;margin-left:8px;border-radius:4px;font-weight:bold;';
            h.append(elRight);
        }

        if (!elTop) {
            elTop = document.createElement('span');
            elTop.id = 'shortcut-info-top';
            elTop.className = 'badge fs11';
            elTop.style.cssText = 'background:#000;color:#fff;padding:4px 8px;margin-left:8px;border-radius:4px;font-weight:bold;display:inline-block;';
            h.append(elTop);
        }

        elLeft.textContent = leftText || '';
        elRight.textContent = rightText || '';
        elTop.textContent = topText || '';
        elTop.style.display = topText ? 'inline-block' : 'none';
    }

    function writeToSession(tmLeft, tmRight, tmTop) {
        if (!tmLeft) {
            localStorage.removeItem('TM_testoLeft');
            window.TM_testoLeft = '';
        } else {
            localStorage.setItem('TM_testoLeft', tmLeft);
            window.TM_testoLeft = tmLeft;
        }

        if (!tmRight) {
            localStorage.removeItem('TM_testoRight');
            window.TM_testoRight = '';
        } else {
            localStorage.setItem('TM_testoRight', tmRight);
            window.TM_testoRight = tmRight;
        }

        if (!tmTop) {
            localStorage.removeItem('TM_top');
            window.TM_top = '';
        } else {
            localStorage.setItem('TM_top', tmTop);
            window.TM_top = tmTop;
        }
    }

    function updateSession(force = false) {
        const detected = detectCurrentLabel();
        const tmLeft = detected ? detected.tmLeft : '';
        const tmRight = detectExpeditionDate();
        const tmTop = detected ? detected.tmTop : '';
        if (!force && tmLeft === lastLeft && tmRight === lastRight && tmTop === lastTop) return;
        lastLeft = tmLeft;
        lastRight = tmRight;
        lastTop = tmTop;
        if (detected && detected.state) {
            setPerTabState(detected.state);
        }
        writeToSession(tmLeft, tmRight, tmTop);
        showLabel(tmLeft, tmRight, tmTop);
        console.log('[materialDetector] updated', {
            tmLeft,
            tmRight,
            tmTop,
            visibility: document.visibilityState,
            forced: force,
            state: window.__materialDetectorState || null
        });
    }

    function forceRefreshSessionBurst() {
        lastLeft = null;
        lastRight = null;
        lastTop = null;
        updateSession(true);
        [80, 250, 700, 1500].forEach(delay => setTimeout(() => updateSession(true), delay));
    }

    function bootstrapRetries() {
        updateSession();
        const retryDelays = [100, 250, 500, 1000, 2000, 3500, 5000, 8000, 12000];
        retryDelays.forEach(delay => setTimeout(updateSession, delay));
    }

    function startDomObserver() {
        if (observerStarted || !document.body) return;
        observerStarted = true;
        const observer = new MutationObserver(() => updateSession());
        observer.observe(document.body, { childList: true, subtree: true, characterData: true });
    }

    function ensureObserverWhenBodyExists() {
        if (document.body) {
            startDomObserver();
            return;
        }
        const waitBodyObserver = new MutationObserver(() => {
            if (!document.body) return;
            waitBodyObserver.disconnect();
            startDomObserver();
            updateSession();
        });
        waitBodyObserver.observe(document.documentElement, { childList: true, subtree: true });
    }

    function getZdRows() {
        const root = document.querySelector('#zd-form-container #VPZDParams');
        if (!root) return [];
        return Array.from(root.querySelectorAll(':scope > div.flex'))
            .map(row => {
                const cols = row.querySelectorAll(':scope > div');
                if (cols.length < 2) return null;
                const label = (cols[0].textContent || '').replace(/\s+/g, ' ').trim();
                const values = Array.from(cols[1].querySelectorAll('.whitespace-pre-line'))
                    .map(el => (el.textContent || '').replace(/\s+/g, ' ').trim())
                    .filter(Boolean);
                const fallback = (cols[1].textContent || '').replace(/\s+/g, ' ').trim();
                if (!values.length && fallback) values.push(fallback);
                return { label, values };
            })
            .filter(Boolean);
    }

    function toCleanNumber(value) {
        if (!value) return '';
        const n = Number(value);
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

    function parseDimensionScalar(text) {
        const raw = String(text || '').replace(',', '.').toLowerCase().trim();
        const match = raw.match(/(\d+(?:\.\d+)?)\s*(mm|cm)\b/);
        if (!match) return null;
        return { value: Number(match[1]), unit: match[2] };
    }

    function parseSizeAliasFromSeparateValues(values) {
        if (!Array.isArray(values) || values.length < 2) return '';
        const parsed = values.map(parseDimensionScalar).filter(Boolean);
        if (parsed.length < 2) return '';
        const [w, h] = parsed;
        if (w.unit === 'cm' && h.unit === 'cm') return normalizeCmOutput(w.value, h.value);
        if (w.unit === 'mm' && h.unit === 'mm') return normalizeCmOutput(w.value / 10, h.value / 10);
        return '';
    }

    function stripSizeUnitSuffix(sizeAlias) {
        const raw = String(sizeAlias || '').trim();
        if (!raw) return '';
        return raw.replace(/_?cm$/i, '');
    }

    function parseSizeAlias(text) {
        const raw = String(text || '').trim();
        if (!raw) return '';
        const aMatch = raw.match(/\bA\s*([0-9]{1,2})\b/i);
        if (aMatch) return ('A' + aMatch[1]).toUpperCase();
        const cleaned = raw.replace(/×/g, 'x').replace(/,/g, '.').replace(/\s+/g, ' ').trim();
        const mm = cleaned.match(/(\d{2,4}(?:\.\d+)?)\s*x\s*(\d{2,4}(?:\.\d+)?)\s*mm\b/i);
        if (mm) return normalizeCmOutput(Number(mm[1]) / 10, Number(mm[2]) / 10);
        const cm = cleaned.match(/(\d{1,4}(?:\.\d+)?)\s*x\s*(\d{1,4}(?:\.\d+)?)\s*cm\b/i);
        if (cm) return normalizeCmOutput(cm[1], cm[2]);
        const any = cleaned.match(/(\d{1,4}(?:\.\d+)?)\s*x\s*(\d{1,4}(?:\.\d+)?)/i);
        if (any) {
            const w = Number(any[1]);
            const h = Number(any[2]);
            if (Number.isFinite(w) && Number.isFinite(h)) {
                if (w > 200 || h > 200) return normalizeCmOutput(w / 10, h / 10);
                return normalizeCmOutput(w, h);
            }
        }
        return '';
    }

    function isLikelySizeLabel(label) {
        const key = normalizeKey(label);
        if (!key) return false;
        if (key.includes('format')) return true;
        if (key.includes('velkost')) return true;
        if (key.includes('rozmer')) return true;
        if (key.includes('sirka') || key.includes('vyska')) return true;
        if (key.includes('dlzka') || key.includes('sirka x vyska')) return true;
        return false;
    }

    function isBlockedLabel(label) {
        const key = normalizeKey(label);
        if (!key) return false;
        return [
            'pocet kusov',
            'pocet rovnakych vytlackov',
            'gramaz',
            'material',
            'tlacove medium',
            'subory',
            'upozornenie'
        ].some(b => key.includes(b));
    }

    function detectUniversalSizeAlias() {
        const rows = getZdRows();
        if (!rows.length) return '';
        const prioritized = [];
        const secondary = [];
        rows.forEach(row => {
            if (!row.values || !row.values.length) return;
            if (isBlockedLabel(row.label)) return;
            if (isLikelySizeLabel(row.label)) {
                const pairAlias = parseSizeAliasFromSeparateValues(row.values);
                if (pairAlias) {
                    prioritized.push(pairAlias);
                    return;
                }
            }
            const joined = row.values.join(' | ');
            const hasSizePattern = /\bA\s*\d{1,2}\b/i.test(joined)
                || /(\d{1,4}(?:[.,]\d+)?)\s*[x×]\s*(\d{1,4}(?:[.,]\d+)?)/i.test(joined);
            if (isLikelySizeLabel(row.label)) {
                prioritized.push(joined);
            } else if (hasSizePattern) {
                secondary.push(joined);
            }
        });
        const candidates = prioritized.concat(secondary);
        for (const candidate of candidates) {
            const alias = parseSizeAlias(candidate);
            if (alias) return alias;
        }
        return '';
    }

    function applySizeAliasToState() {
        const vp = getCurrentVpFromUrl();
        if (!vp) return '';
        const sizeAlias = detectUniversalSizeAlias();
        if (!sizeAlias) return '';
        const baseState = getMaterialDetectorState() || { vp };
        const nextParams = Object.assign({}, baseState.params || {}, { sizeAlias });
        setLastSizeAliasForVp(vp, sizeAlias);
        const nextState = Object.assign({}, baseState, {
            vp,
            params: nextParams,
            sizeAlias,
            updatedAt: new Date().toISOString()
        });
        window.__materialDetectorState = nextState;
        try {
            sessionStorage.setItem('materialDetectorState:' + vp, JSON.stringify(nextState));
        } catch (e) {
            console.warn('[materialDetector] size session save failed', e);
        }
        return sizeAlias;
    }

    function ensureSizeAliasForRename() {
        const vp = getCurrentVpFromUrl();
        const live = applySizeAliasToState();
        if (live) return live;
        const state = getMaterialDetectorState();
        const fromState = String((state && ((state.params && state.params.sizeAlias) || state.sizeAlias)) || '').trim();
        if (fromState) {
            setLastSizeAliasForVp(vp, fromState);
            return fromState;
        }
        return getLastSizeAliasForVp(vp);
    }

    function startSizeObserver() {
        if (sizeObserverStarted) return;
        sizeObserverStarted = true;
        const observer = new MutationObserver(() => applySizeAliasToState());
        observer.observe(document.documentElement, { childList: true, subtree: true, characterData: true });
    }

    function initSizeBridge() {
        applySizeAliasToState();
        const retry = [100, 250, 500, 1000, 2000, 3500, 5000, 8000, 12000];
        retry.forEach(delay => setTimeout(applySizeAliasToState, delay));
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', applySizeAliasToState, { once: true });
        }
        window.addEventListener('load', applySizeAliasToState);
        window.addEventListener('focus', applySizeAliasToState);
        startSizeObserver();
    }

    function getAliasFromLeftText() {
        const left = String(window.TM_testoLeft || localStorage.getItem('TM_testoLeft') || '').trim();
        if (!left) return '';
        return left.split('|')[0].trim();
    }

    function getQtyFromLeftText() {
        const left = String(window.TM_testoLeft || localStorage.getItem('TM_testoLeft') || '').trim();
        if (!left) return '';
        const qtyMatch = left.match(/(\d+)\s*ks/i);
        return qtyMatch ? qtyMatch[1] : '';
    }

    function getNameParts() {
        const vp = getCurrentVpFromUrl();
        const state = getMaterialDetectorState();
        let alias = '';
        let sizeAlias = ensureSizeAliasForRename() || '';
        let qty = '';
        if (state) {
            alias = String(state.outputAlias || '').split('|')[0].trim();
            const stateSizeAlias = String((state.params && state.params.sizeAlias) || state.sizeAlias || '').trim();
            if (stateSizeAlias) sizeAlias = stateSizeAlias;
            qty = String((state.params && state.params.quantity) || '').match(/\d+/)?.[0] || '';
        }
        if (!alias) alias = getAliasFromLeftText();
        if (!sizeAlias) sizeAlias = parseSizeAliasFromText(alias);
        if (!qty) qty = getQtyFromLeftText();
        const aliasPart = sanitizeSnakeToken(alias || 'material');
        const sizePart = sanitizeSnakeToken(stripSizeUnitSuffix(sizeAlias) || 'bez_rozmeru');
        const qtyPart = sanitizeSnakeToken(qty ? qty + 'ks' : '1ks');
        const vpPart = sanitizeSnakeToken(vp || 'bezVP');
        return { aliasPart, sizePart, qtyPart, vpPart };
    }

    function parseSizeAliasFromText(text) {
        const raw = String(text || '').trim();
        if (!raw) return '';
        const iso = raw.match(/\bA\s*([0-9]{1,2})\b/i);
        if (iso) return ('A' + iso[1]).toUpperCase();
        const normalized = raw.replace(/×/g, 'x').replace(/\s+/g, ' ').trim();
        const mm = normalized.match(/(\d{2,4}(?:[.,]\d+)?)\s*x\s*(\d{2,4}(?:[.,]\d+)?)\s*mm\b/i);
        if (mm) {
            const w = Number(mm[1].replace(',', '.')) / 10;
            const h = Number(mm[2].replace(',', '.')) / 10;
            if (Number.isFinite(w) && Number.isFinite(h)) {
                const sw = String(Math.round(w * 10) / 10).replace('.', ',');
                const sh = String(Math.round(h * 10) / 10).replace('.', ',');
                return sw + 'x' + sh + '_cm';
            }
        }
        const cm = normalized.match(/(\d{1,4}(?:[.,]\d+)?)\s*x\s*(\d{1,4}(?:[.,]\d+)?)\s*cm\b/i);
        if (cm) {
            const sw = cm[1].replace('.', ',');
            const sh = cm[2].replace('.', ',');
            return sw + 'x' + sh + '_cm';
        }
        return '';
    }

    function extractFilenameFromHref(href) {
        try {
            const url = new URL(href, location.href);
            const raw = decodeURIComponent(url.pathname.split('/').pop() || 'subor');
            const dot = raw.lastIndexOf('.');
            if (dot <= 0) return { base: raw, ext: '' };
            return { base: raw.slice(0, dot), ext: raw.slice(dot + 1) };
        } catch (e) {
            return { base: 'subor', ext: '' };
        }
    }

    function buildNewFileName(originalHref) {
        const parts = getNameParts();
        const original = extractFilenameFromHref(originalHref);
        const prefix = [parts.aliasPart, parts.sizePart, parts.qtyPart, parts.vpPart].join('_');
        const originalBase = sanitizeToken(original.base || 'subor');
        const ext = sanitizeToken(original.ext || '');
        return ext ? (prefix + ' ' + originalBase + '.' + ext) : (prefix + ' ' + originalBase);
    }

    function isDownloadCandidate(anchor) {
        if (!anchor || !anchor.href) return false;
        const href = anchor.href;
        const text = (anchor.textContent || '').toLowerCase();
        const cls = anchor.className || '';
        if (/\/data\/servicesForm\//i.test(href)) return true;
        if (/\/svg_editor\//i.test(href)) return true;
        if (/\.(pdf|png|jpg|jpeg|tif|tiff|zip)(\?|$)/i.test(href)) return true;
        if (text.includes('stiahni') || text.includes('stiahnut')) return true;
        if (cls.includes('block mt5')) return true;
        return false;
    }

    function shouldRenameForCurrentOrder() {
        const productCode = getProductCodeFromPriceRows();
        return productCode === '41tv' || productCode === '42foto/web' || productCode === 'photoobraz' || productCode === 'HEXA';
    }

    function startDownload(url, fileName) {
        if (typeof GM_download === 'function') {
            GM_download({
                url,
                name: fileName,
                saveAs: false,
                onerror: function () {
                    window.open(url, '_blank', 'noopener');
                }
            });
            return;
        }
        window.open(url, '_blank', 'noopener');
    }

    function initDownloadRename() {
        if (renameBound) return;
        renameBound = true;
        document.addEventListener('click', function (event) {
            const link = event.target.closest('a[href]');
            if (!link) return;
            if (!isDownloadCandidate(link)) return;
            if (!shouldRenameForCurrentOrder()) return;
            event.preventDefault();
            event.stopPropagation();
            const fileName = buildNewFileName(link.href);
            startDownload(link.href, fileName);
            console.log('[materialDetector] download:', { from: link.href, as: fileName });
        }, true);
    }

    function initCore() {
        exposeAliasHelpers();
        bootstrapRetries();
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', updateSession, { once: true });
        } else {
            setTimeout(updateSession, 0);
        }
        window.addEventListener('load', forceRefreshSessionBurst);
        window.addEventListener('pageshow', forceRefreshSessionBurst);
        window.addEventListener('focus', forceRefreshSessionBurst);
        document.addEventListener('visibilitychange', function () {
            if (document.visibilityState === 'visible') {
                forceRefreshSessionBurst();
            } else {
                setTimeout(updateSession, 0);
            }
        });
        ensureObserverWhenBodyExists();
    }

    function updateSession(force = false) {
        const detected = detectCurrentLabel();
        const tmLeft = detected ? detected.tmLeft : '';
        const tmRight = detectExpeditionDate();
        const tmTop = detected ? detected.tmTop : '';
        if (!force && tmLeft === lastLeft && tmRight === lastRight && tmTop === lastTop) return;
        lastLeft = tmLeft;
        lastRight = tmRight;
        lastTop = tmTop;
        if (detected && detected.state) {
            setPerTabState(detected.state);
        }
        writeToSession(tmLeft, tmRight, tmTop);
        showLabel(tmLeft, tmRight, tmTop);
        console.log('[materialDetector] updated', {
            tmLeft,
            tmRight,
            tmTop,
            visibility: document.visibilityState,
            forced: force,
            state: window.__materialDetectorState || null
        });
    }

    function forceRefreshSessionBurst() {
        lastLeft = null;
        lastRight = null;
        lastTop = null;
        updateSession(true);
        [80, 250, 700, 1500].forEach(delay => setTimeout(() => updateSession(true), delay));
    }

    function bootstrapRetries() {
        updateSession();
        const retryDelays = [100, 250, 500, 1000, 2000, 3500, 5000, 8000, 12000];
        retryDelays.forEach(delay => setTimeout(updateSession, delay));
    }

    function startDomObserver() {
        if (observerStarted || !document.body) return;
        observerStarted = true;
        const observer = new MutationObserver(() => updateSession());
        observer.observe(document.body, { childList: true, subtree: true, characterData: true });
    }

    function ensureObserverWhenBodyExists() {
        if (document.body) {
            startDomObserver();
            return;
        }
        const waitBodyObserver = new MutationObserver(() => {
            if (!document.body) return;
            waitBodyObserver.disconnect();
            startDomObserver();
            updateSession();
        });
        waitBodyObserver.observe(document.documentElement, { childList: true, subtree: true });
    }

    function getZdRows() {
        const root = document.querySelector('#zd-form-container #VPZDParams');
        if (!root) return [];
        return Array.from(root.querySelectorAll(':scope > div.flex'))
            .map(row => {
                const cols = row.querySelectorAll(':scope > div');
                if (cols.length < 2) return null;
                const label = (cols[0].textContent || '').replace(/\s+/g, ' ').trim();
                const values = Array.from(cols[1].querySelectorAll('.whitespace-pre-line'))
                    .map(el => (el.textContent || '').replace(/\s+/g, ' ').trim())
                    .filter(Boolean);
                const fallback = (cols[1].textContent || '').replace(/\s+/g, ' ').trim();
                if (!values.length && fallback) values.push(fallback);
                return { label, values };
            })
            .filter(Boolean);
    }

    function toCleanNumber(value) {
        if (!value) return '';
        const n = Number(value);
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

    function parseDimensionScalar(text) {
        const raw = String(text || '').replace(',', '.').toLowerCase().trim();
        const match = raw.match(/(\d+(?:\.\d+)?)\s*(mm|cm)\b/);
        if (!match) return null;
        return { value: Number(match[1]), unit: match[2] };
    }

    function parseSizeAliasFromSeparateValues(values) {
        if (!Array.isArray(values) || values.length < 2) return '';
        const parsed = values.map(parseDimensionScalar).filter(Boolean);
        if (parsed.length < 2) return '';
        const [w, h] = parsed;
        if (w.unit === 'cm' && h.unit === 'cm') return normalizeCmOutput(w.value, h.value);
        if (w.unit === 'mm' && h.unit === 'mm') return normalizeCmOutput(w.value / 10, h.value / 10);
        return '';
    }

    function stripSizeUnitSuffix(sizeAlias) {
        const raw = String(sizeAlias || '').trim();
        if (!raw) return '';
        return raw.replace(/_?cm$/i, '');
    }

    function parseSizeAlias(text) {
        const raw = String(text || '').trim();
        if (!raw) return '';
        const aMatch = raw.match(/\bA\s*([0-9]{1,2})\b/i);
        if (aMatch) return ('A' + aMatch[1]).toUpperCase();
        const cleaned = raw.replace(/×/g, 'x').replace(/,/g, '.').replace(/\s+/g, ' ').trim();
        const mm = cleaned.match(/(\d{2,4}(?:\.\d+)?)\s*x\s*(\d{2,4}(?:\.\d+)?)\s*mm\b/i);
        if (mm) return normalizeCmOutput(Number(mm[1]) / 10, Number(mm[2]) / 10);
        const cm = cleaned.match(/(\d{1,4}(?:\.\d+)?)\s*x\s*(\d{1,4}(?:\.\d+)?)\s*cm\b/i);
        if (cm) return normalizeCmOutput(cm[1], cm[2]);
        const any = cleaned.match(/(\d{1,4}(?:\.\d+)?)\s*x\s*(\d{1,4}(?:\.\d+)?)/i);
        if (any) {
            const w = Number(any[1]);
            const h = Number(any[2]);
            if (Number.isFinite(w) && Number.isFinite(h)) {
                if (w > 200 || h > 200) return normalizeCmOutput(w / 10, h / 10);
                return normalizeCmOutput(w, h);
            }
        }
        return '';
    }

    function isLikelySizeLabel(label) {
        const key = normalizeKey(label);
        if (!key) return false;
        if (key.includes('format')) return true;
        if (key.includes('velkost')) return true;
        if (key.includes('rozmer')) return true;
        if (key.includes('sirka') || key.includes('vyska')) return true;
        if (key.includes('dlzka') || key.includes('sirka x vyska')) return true;
        return false;
    }

    function isBlockedLabel(label) {
        const key = normalizeKey(label);
        if (!key) return false;
        return [
            'pocet kusov',
            'pocet rovnakych vytlackov',
            'gramaz',
            'material',
            'tlacove medium',
            'subory',
            'upozornenie'
        ].some(b => key.includes(b));
    }

    function detectUniversalSizeAlias() {
        const rows = getZdRows();
        if (!rows.length) return '';
        const prioritized = [];
        const secondary = [];
        rows.forEach(row => {
            if (!row.values || !row.values.length) return;
            if (isBlockedLabel(row.label)) return;
            if (isLikelySizeLabel(row.label)) {
                const pairAlias = parseSizeAliasFromSeparateValues(row.values);
                if (pairAlias) {
                    prioritized.push(pairAlias);
                    return;
                }
            }
            const joined = row.values.join(' | ');
            const hasSizePattern = /\bA\s*\d{1,2}\b/i.test(joined)
                || /(\d{1,4}(?:[.,]\d+)?)\s*[x×]\s*(\d{1,4}(?:[.,]\d+)?)/i.test(joined);
            if (isLikelySizeLabel(row.label)) {
                prioritized.push(joined);
            } else if (hasSizePattern) {
                secondary.push(joined);
            }
        });
        const candidates = prioritized.concat(secondary);
        for (const candidate of candidates) {
            const alias = parseSizeAlias(candidate);
            if (alias) return alias;
        }
        return '';
    }

    function applySizeAliasToState() {
        const vp = getCurrentVpFromUrl();
        if (!vp) return '';
        const sizeAlias = detectUniversalSizeAlias();
        if (!sizeAlias) return '';
        const baseState = getMaterialDetectorState() || { vp };
        const nextParams = Object.assign({}, baseState.params || {}, { sizeAlias });
        setLastSizeAliasForVp(vp, sizeAlias);
        const nextState = Object.assign({}, baseState, {
            vp,
            params: nextParams,
            sizeAlias,
            updatedAt: new Date().toISOString()
        });
        window.__materialDetectorState = nextState;
        try {
            sessionStorage.setItem('materialDetectorState:' + vp, JSON.stringify(nextState));
        } catch (e) {
            console.warn('[materialDetector] size session save failed', e);
        }
        return sizeAlias;
    }

    function ensureSizeAliasForRename() {
        const vp = getCurrentVpFromUrl();
        const live = applySizeAliasToState();
        if (live) return live;
        const state = getMaterialDetectorState();
        const fromState = String((state && ((state.params && state.params.sizeAlias) || state.sizeAlias)) || '').trim();
        if (fromState) {
            setLastSizeAliasForVp(vp, fromState);
            return fromState;
        }
        return getLastSizeAliasForVp(vp);
    }

    function startSizeObserver() {
        if (sizeObserverStarted) return;
        sizeObserverStarted = true;
        const observer = new MutationObserver(() => applySizeAliasToState());
        observer.observe(document.documentElement, { childList: true, subtree: true, characterData: true });
    }

    function initSizeBridge() {
        applySizeAliasToState();
        const retry = [100, 250, 500, 1000, 2000, 3500, 5000, 8000, 12000];
        retry.forEach(delay => setTimeout(applySizeAliasToState, delay));
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', applySizeAliasToState, { once: true });
        }
        window.addEventListener('load', applySizeAliasToState);
        window.addEventListener('focus', applySizeAliasToState);
        startSizeObserver();
    }

    function getAliasFromLeftText() {
        const left = String(window.TM_testoLeft || localStorage.getItem('TM_testoLeft') || '').trim();
        if (!left) return '';
        return left.split('|')[0].trim();
    }

    function getQtyFromLeftText() {
        const left = String(window.TM_testoLeft || localStorage.getItem('TM_testoLeft') || '').trim();
        if (!left) return '';
        const qtyMatch = left.match(/(\d+)\s*ks/i);
        return qtyMatch ? qtyMatch[1] : '';
    }

    function getNameParts() {
        const vp = getCurrentVpFromUrl();
        const state = getMaterialDetectorState();
        let alias = '';
        let sizeAlias = ensureSizeAliasForRename() || '';
        let qty = '';
        if (state) {
            alias = String(state.outputAlias || '').split('|')[0].trim();
            const stateSizeAlias = String((state.params && state.params.sizeAlias) || state.sizeAlias || '').trim();
            if (stateSizeAlias) sizeAlias = stateSizeAlias;
            qty = String((state.params && state.params.quantity) || '').match(/\d+/)?.[0] || '';
        }
        if (!alias) alias = getAliasFromLeftText();
        if (!sizeAlias) sizeAlias = parseSizeAliasFromText(alias);
        if (!qty) qty = getQtyFromLeftText();
        const aliasPart = sanitizeSnakeToken(alias || 'material');
        const sizePart = sanitizeSnakeToken(stripSizeUnitSuffix(sizeAlias) || 'bez_rozmeru');
        const qtyPart = sanitizeSnakeToken(qty ? qty + 'ks' : '1ks');
        const vpPart = sanitizeSnakeToken(vp || 'bezVP');
        return { aliasPart, sizePart, qtyPart, vpPart };
    }

    function parseSizeAliasFromText(text) {
        const raw = String(text || '').trim();
        if (!raw) return '';
        const iso = raw.match(/\bA\s*([0-9]{1,2})\b/i);
        if (iso) return ('A' + iso[1]).toUpperCase();
        const normalized = raw.replace(/×/g, 'x').replace(/\s+/g, ' ').trim();
        const mm = normalized.match(/(\d{2,4}(?:[.,]\d+)?)\s*x\s*(\d{2,4}(?:[.,]\d+)?)\s*mm\b/i);
        if (mm) {
            const w = Number(mm[1].replace(',', '.')) / 10;
            const h = Number(mm[2].replace(',', '.')) / 10;
            if (Number.isFinite(w) && Number.isFinite(h)) {
                const sw = String(Math.round(w * 10) / 10).replace('.', ',');
                const sh = String(Math.round(h * 10) / 10).replace('.', ',');
                return sw + 'x' + sh + '_cm';
            }
        }
        const cm = normalized.match(/(\d{1,4}(?:[.,]\d+)?)\s*x\s*(\d{1,4}(?:[.,]\d+)?)\s*cm\b/i);
        if (cm) {
            const sw = cm[1].replace('.', ',');
            const sh = cm[2].replace('.', ',');
            return sw + 'x' + sh + '_cm';
        }
        return '';
    }

    function extractFilenameFromHref(href) {
        try {
            const url = new URL(href, location.href);
            const raw = decodeURIComponent(url.pathname.split('/').pop() || 'subor');
            const dot = raw.lastIndexOf('.');
            if (dot <= 0) return { base: raw, ext: '' };
            return { base: raw.slice(0, dot), ext: raw.slice(dot + 1) };
        } catch (e) {
            return { base: 'subor', ext: '' };
        }
    }

    function buildNewFileName(originalHref) {
        const parts = getNameParts();
        const original = extractFilenameFromHref(originalHref);
        const prefix = [parts.aliasPart, parts.sizePart, parts.qtyPart, parts.vpPart].join('_');
        const originalBase = sanitizeToken(original.base || 'subor');
        const ext = sanitizeToken(original.ext || '');
        return ext ? (prefix + ' ' + originalBase + '.' + ext) : (prefix + ' ' + originalBase);
    }

    function isDownloadCandidate(anchor) {
        if (!anchor || !anchor.href) return false;
        const href = anchor.href;
        const text = (anchor.textContent || '').toLowerCase();
        const cls = anchor.className || '';
        if (/\/data\/servicesForm\//i.test(href)) return true;
        if (/\/svg_editor\//i.test(href)) return true;
        if (/\.(pdf|png|jpg|jpeg|tif|tiff|zip)(\?|$)/i.test(href)) return true;
        if (text.includes('stiahni') || text.includes('stiahnut')) return true;
        if (cls.includes('block mt5')) return true;
        return false;
    }

    function shouldRenameForCurrentOrder() {
        const productCode = getProductCodeFromPriceRows();
        return productCode === '41tv' || productCode === '42foto/web' || productCode === 'photoobraz' || productCode === 'HEXA';
    }

    function startDownload(url, fileName) {
        if (typeof GM_download === 'function') {
            GM_download({
                url,
                name: fileName,
                saveAs: false,
                onerror: function () {
                    window.open(url, '_blank', 'noopener');
                }
            });
            return;
        }
        window.open(url, '_blank', 'noopener');
    }

    function initDownloadRename() {
        if (renameBound) return;
        renameBound = true;
        document.addEventListener('click', function (event) {
            const link = event.target.closest('a[href]');
            if (!link) return;
            if (!isDownloadCandidate(link)) return;
            if (!shouldRenameForCurrentOrder()) return;
            event.preventDefault();
            event.stopPropagation();
            const fileName = buildNewFileName(link.href);
            startDownload(link.href, fileName);
            console.log('[materialDetector] download:', { from: link.href, as: fileName });
        }, true);
    }

    function initCore() {
        exposeAliasHelpers();
        bootstrapRetries();
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', updateSession, { once: true });
        } else {
            setTimeout(updateSession, 0);
        }
        window.addEventListener('load', forceRefreshSessionBurst);
        window.addEventListener('pageshow', forceRefreshSessionBurst);
        window.addEventListener('focus', forceRefreshSessionBurst);
        document.addEventListener('visibilitychange', function () {
            if (document.visibilityState === 'visible') {
                forceRefreshSessionBurst();
            } else {
                setTimeout(updateSession, 0);
            }
        });
        ensureObserverWhenBodyExists();
    }

    function updateSession(force = false) {
        const detected = detectCurrentLabel();
        const tmLeft = detected ? detected.tmLeft : '';
        const tmRight = detectExpeditionDate();
        const tmTop = detected ? detected.tmTop : '';
        if (!force && tmLeft === lastLeft && tmRight === lastRight && tmTop === lastTop) return;
        lastLeft = tmLeft;
        lastRight = tmRight;
        lastTop = tmTop;
        if (detected && detected.state) {
            setPerTabState(detected.state);
        }
        writeToSession(tmLeft, tmRight, tmTop);
        showLabel(tmLeft, tmRight, tmTop);
        console.log('[materialDetector] updated', {
            tmLeft,
            tmRight,
            tmTop,
            visibility: document.visibilityState,
            forced: force,
            state: window.__materialDetectorState || null
        });
    }

    function forceRefreshSessionBurst() {
        lastLeft = null;
        lastRight = null;
        lastTop = null;
        updateSession(true);
        [80, 250, 700, 1500].forEach(delay => setTimeout(() => updateSession(true), delay));
    }

    function bootstrapRetries() {
        updateSession();
        const retryDelays = [100, 250, 500, 1000, 2000, 3500, 5000, 8000, 12000];
        retryDelays.forEach(delay => setTimeout(updateSession, delay));
    }

    function startDomObserver() {
        if (observerStarted || !document.body) return;
        observerStarted = true;
        const observer = new MutationObserver(() => updateSession());
        observer.observe(document.body, { childList: true, subtree: true, characterData: true });
    }

    function ensureObserverWhenBodyExists() {
        if (document.body) {
            startDomObserver();
            return;
        }
        const waitBodyObserver = new MutationObserver(() => {
            if (!document.body) return;
            waitBodyObserver.disconnect();
            startDomObserver();
            updateSession();
        });
        waitBodyObserver.observe(document.documentElement, { childList: true, subtree: true });
    }

    function getZdRows() {
        const root = document.querySelector('#zd-form-container #VPZDParams');
        if (!root) return [];
        return Array.from(root.querySelectorAll(':scope > div.flex'))
            .map(row => {
                const cols = row.querySelectorAll(':scope > div');
                if (cols.length < 2) return null;
                const label = (cols[0].textContent || '').replace(/\s+/g, ' ').trim();
                const values = Array.from(cols[1].querySelectorAll('.whitespace-pre-line'))
                    .map(el => (el.textContent || '').replace(/\s+/g, ' ').trim())
                    .filter(Boolean);
                const fallback = (cols[1].textContent || '').replace(/\s+/g, ' ').trim();
                if (!values.length && fallback) values.push(fallback);
                return { label, values };
            })
            .filter(Boolean);
    }

    function toCleanNumber(value) {
        if (!value) return '';
        const n = Number(value);
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

    function parseDimensionScalar(text) {
        const raw = String(text || '').replace(',', '.').toLowerCase().trim();
        const match = raw.match(/(\d+(?:\.\d+)?)\s*(mm|cm)\b/);
        if (!match) return null;
        return { value: Number(match[1]), unit: match[2] };
    }

    function parseSizeAliasFromSeparateValues(values) {
        if (!Array.isArray(values) || values.length < 2) return '';
        const parsed = values.map(parseDimensionScalar).filter(Boolean);
        if (parsed.length < 2) return '';
        const [w, h] = parsed;
        if (w.unit === 'cm' && h.unit === 'cm') return normalizeCmOutput(w.value, h.value);
        if (w.unit === 'mm' && h.unit === 'mm') return normalizeCmOutput(w.value / 10, h.value / 10);
        return '';
    }

    function stripSizeUnitSuffix(sizeAlias) {
        const raw = String(sizeAlias || '').trim();
        if (!raw) return '';
        return raw.replace(/_?cm$/i, '');
    }

    function parseSizeAlias(text) {
        const raw = String(text || '').trim();
        if (!raw) return '';
        const aMatch = raw.match(/\bA\s*([0-9]{1,2})\b/i);
        if (aMatch) return ('A' + aMatch[1]).toUpperCase();
        const cleaned = raw.replace(/×/g, 'x').replace(/,/g, '.').replace(/\s+/g, ' ').trim();
        const mm = cleaned.match(/(\d{2,4}(?:\.\d+)?)\s*x\s*(\d{2,4}(?:\.\d+)?)\s*mm\b/i);
        if (mm) return normalizeCmOutput(Number(mm[1]) / 10, Number(mm[2]) / 10);
        const cm = cleaned.match(/(\d{1,4}(?:\.\d+)?)\s*x\s*(\d{1,4}(?:\.\d+)?)\s*cm\b/i);
        if (cm) return normalizeCmOutput(cm[1], cm[2]);
        const any = cleaned.match(/(\d{1,4}(?:\.\d+)?)\s*x\s*(\d{1,4}(?:\.\d+)?)/i);
        if (any) {
            const w = Number(any[1]);
            const h = Number(any[2]);
            if (Number.isFinite(w) && Number.isFinite(h)) {
                if (w > 200 || h > 200) return normalizeCmOutput(w / 10, h / 10);
                return normalizeCmOutput(w, h);
            }
        }
        return '';
    }

    function isLikelySizeLabel(label) {
        const key = normalizeKey(label);
        if (!key) return false;
        if (key.includes('format')) return true;
        if (key.includes('velkost')) return true;
        if (key.includes('rozmer')) return true;
        if (key.includes('sirka') || key.includes('vyska')) return true;
        if (key.includes('dlzka') || key.includes('sirka x vyska')) return true;
        return false;
    }

    function isBlockedLabel(label) {
        const key = normalizeKey(label);
        if (!key) return false;
        return [
            'pocet kusov',
            'pocet rovnakych vytlackov',
            'gramaz',
            'material',
            'tlacove medium',
            'subory',
            'upozornenie'
        ].some(b => key.includes(b));
    }

    function detectUniversalSizeAlias() {
        const rows = getZdRows();
        if (!rows.length) return '';
        const prioritized = [];
        const secondary = [];
        rows.forEach(row => {
            if (!row.values || !row.values.length) return;
            if (isBlockedLabel(row.label)) return;
            if (isLikelySizeLabel(row.label)) {
                const pairAlias = parseSizeAliasFromSeparateValues(row.values);
                if (pairAlias) {
                    prioritized.push(pairAlias);
                    return;
                }
            }
            const joined = row.values.join(' | ');
            const hasSizePattern = /\bA\s*\d{1,2}\b/i.test(joined)
                || /(\d{1,4}(?:[.,]\d+)?)\s*[x×]\s*(\d{1,4}(?:[.,]\d+)?)/i.test(joined);
            if (isLikelySizeLabel(row.label)) {
                prioritized.push(joined);
            } else if (hasSizePattern) {
                secondary.push(joined);
            }
        });
        const candidates = prioritized.concat(secondary);
        for (const candidate of candidates) {
            const alias = parseSizeAlias(candidate);
            if (alias) return alias;
        }
        return '';
    }

    function applySizeAliasToState() {
        const vp = getCurrentVpFromUrl();
        if (!vp) return '';
        const sizeAlias = detectUniversalSizeAlias();
        if (!sizeAlias) return '';
        const baseState = getMaterialDetectorState() || { vp };
        const nextParams = Object.assign({}, baseState.params || {}, { sizeAlias });
        setLastSizeAliasForVp(vp, sizeAlias);
        const nextState = Object.assign({}, baseState, {
            vp,
            params: nextParams,
            sizeAlias,
            updatedAt: new Date().toISOString()
        });
        window.__materialDetectorState = nextState;
        try {
            sessionStorage.setItem('materialDetectorState:' + vp, JSON.stringify(nextState));
        } catch (e) {
            console.warn('[materialDetector] size session save failed', e);
        }
        return sizeAlias;
    }

    function ensureSizeAliasForRename() {
        const vp = getCurrentVpFromUrl();
        const live = applySizeAliasToState();
        if (live) return live;
        const state = getMaterialDetectorState();
        const fromState = String((state && ((state.params && state.params.sizeAlias) || state.sizeAlias)) || '').trim();
        if (fromState) {
            setLastSizeAliasForVp(vp, fromState);
            return fromState;
        }
        return getLastSizeAliasForVp(vp);
    }

    function startSizeObserver() {
        if (sizeObserverStarted) return;
        sizeObserverStarted = true;
        const observer = new MutationObserver(() => applySizeAliasToState());
        observer.observe(document.documentElement, { childList: true, subtree: true, characterData: true });
    }

    function initSizeBridge() {
        applySizeAliasToState();
        const retry = [100, 250, 500, 1000, 2000, 3500, 5000, 8000, 12000];
        retry.forEach(delay => setTimeout(applySizeAliasToState, delay));
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', applySizeAliasToState, { once: true });
        }
        window.addEventListener('load', applySizeAliasToState);
        window.addEventListener('focus', applySizeAliasToState);
        startSizeObserver();
    }

    function getAliasFromLeftText() {
        const left = String(window.TM_testoLeft || localStorage.getItem('TM_testoLeft') || '').trim();
        if (!left) return '';
        return left.split('|')[0].trim();
    }

    function getQtyFromLeftText() {
        const left = String(window.TM_testoLeft || localStorage.getItem('TM_testoLeft') || '').trim();
        if (!left) return '';
        const qtyMatch = left.match(/(\d+)\s*ks/i);
        return qtyMatch ? qtyMatch[1] : '';
    }

    function getNameParts() {
        const vp = getCurrentVpFromUrl();
        const state = getMaterialDetectorState();
        let alias = '';
        let sizeAlias = ensureSizeAliasForRename() || '';
        let qty = '';
        if (state) {
            alias = String(state.outputAlias || '').split('|')[0].trim();
            const stateSizeAlias = String((state.params && state.params.sizeAlias) || state.sizeAlias || '').trim();
            if (stateSizeAlias) sizeAlias = stateSizeAlias;
            qty = String((state.params && state.params.quantity) || '').match(/\d+/)?.[0] || '';
        }
        if (!alias) alias = getAliasFromLeftText();
        if (!sizeAlias) sizeAlias = parseSizeAliasFromText(alias);
        if (!qty) qty = getQtyFromLeftText();
        const aliasPart = sanitizeSnakeToken(alias || 'material');
        const sizePart = sanitizeSnakeToken(stripSizeUnitSuffix(sizeAlias) || 'bez_rozmeru');
        const qtyPart = sanitizeSnakeToken(qty ? qty + 'ks' : '1ks');
        const vpPart = sanitizeSnakeToken(vp || 'bezVP');
        return { aliasPart, sizePart, qtyPart, vpPart };
    }

    function parseSizeAliasFromText(text) {
        const raw = String(text || '').trim();
        if (!raw) return '';
        const iso = raw.match(/\bA\s*([0-9]{1,2})\b/i);
        if (iso) return ('A' + iso[1]).toUpperCase();
        const normalized = raw.replace(/×/g, 'x').replace(/\s+/g, ' ').trim();
        const mm = normalized.match(/(\d{2,4}(?:[.,]\d+)?)\s*x\s*(\d{2,4}(?:[.,]\d+)?)\s*mm\b/i);
        if (mm) {
            const w = Number(mm[1].replace(',', '.')) / 10;
            const h = Number(mm[2].replace(',', '.')) / 10;
            if (Number.isFinite(w) && Number.isFinite(h)) {
                const sw = String(Math.round(w * 10) / 10).replace('.', ',');
                const sh = String(Math.round(h * 10) / 10).replace('.', ',');
                return sw + 'x' + sh + '_cm';
            }
        }
        const cm = normalized.match(/(\d{1,4}(?:[.,]\d+)?)\s*x\s*(\d{1,4}(?:[.,]\d+)?)\s*cm\b/i);
        if (cm) {
            const sw = cm[1].replace('.', ',');
            const sh = cm[2].replace('.', ',');
            return sw + 'x' + sh + '_cm';
        }
        return '';
    }

    function extractFilenameFromHref(href) {
        try {
            const url = new URL(href, location.href);
            const raw = decodeURIComponent(url.pathname.split('/').pop() || 'subor');
            const dot = raw.lastIndexOf('.');
            if (dot <= 0) return { base: raw, ext: '' };
            return { base: raw.slice(0, dot), ext: raw.slice(dot + 1) };
        } catch (e) {
            return { base: 'subor', ext: '' };
        }
    }

    function buildNewFileName(originalHref) {
        const parts = getNameParts();
        const original = extractFilenameFromHref(originalHref);
        const prefix = [parts.aliasPart, parts.sizePart, parts.qtyPart, parts.vpPart].join('_');
        const originalBase = sanitizeToken(original.base || 'subor');
        const ext = sanitizeToken(original.ext || '');
        return ext ? (prefix + ' ' + originalBase + '.' + ext) : (prefix + ' ' + originalBase);
    }

    function isDownloadCandidate(anchor) {
        if (!anchor || !anchor.href) return false;
        const href = anchor.href;
        const text = (anchor.textContent || '').toLowerCase();
        const cls = anchor.className || '';
        if (/\/data\/servicesForm\//i.test(href)) return true;
        if (/\/svg_editor\//i.test(href)) return true;
        if (/\.(pdf|png|jpg|jpeg|tif|tiff|zip)(\?|$)/i.test(href)) return true;
        if (text.includes('stiahni') || text.includes('stiahnut')) return true;
        if (cls.includes('block mt5')) return true;
        return false;
    }

    function shouldRenameForCurrentOrder() {
        const productCode = getProductCodeFromPriceRows();
        return productCode === '41tv' || productCode === '42foto/web' || productCode === 'photoobraz' || productCode === 'HEXA';
    }

    function startDownload(url, fileName) {
        if (typeof GM_download === 'function') {
            GM_download({
                url,
                name: fileName,
                saveAs: false,
                onerror: function () {
                    window.open(url, '_blank', 'noopener');
                }
            });
            return;
        }
        window.open(url, '_blank', 'noopener');
    }

    function initDownloadRename() {
        if (renameBound) return;
        renameBound = true;
        document.addEventListener('click', function (event) {
            const link = event.target.closest('a[href]');
            if (!link) return;
            if (!isDownloadCandidate(link)) return;
            if (!shouldRenameForCurrentOrder()) return;
            event.preventDefault();
            event.stopPropagation();
            const fileName = buildNewFileName(link.href);
            startDownload(link.href, fileName);
            console.log('[materialDetector] download:', { from: link.href, as: fileName });
        }, true);
    }

    function initCore() {
        exposeAliasHelpers();
        bootstrapRetries();
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', updateSession, { once: true });
        } else {
            setTimeout(updateSession, 0);
        }
        window.addEventListener('load', forceRefreshSessionBurst);
        window.addEventListener('pageshow', forceRefreshSessionBurst);
        window.addEventListener('focus', forceRefreshSessionBurst);
        document.addEventListener('visibilitychange', function () {
            if (document.visibilityState === 'visible') {
                forceRefreshSessionBurst();
            } else {
                setTimeout(updateSession, 0);
            }
        });
        ensureObserverWhenBodyExists();
    }

    function updateSession(force = false) {
        const detected = detectCurrentLabel();
        const tmLeft = detected ? detected.tmLeft : '';
        const tmRight = detectExpeditionDate();
        const tmTop = detected ? detected.tmTop : '';
        if (!force && tmLeft === lastLeft && tmRight === lastRight && tmTop === lastTop) return;
        lastLeft = tmLeft;
        lastRight = tmRight;
        lastTop = tmTop;
        if (detected && detected.state) {
            setPerTabState(detected.state);
        }
        writeToSession(tmLeft, tmRight, tmTop);
        showLabel(tmLeft, tmRight, tmTop);
        console.log('[materialDetector] updated', {
            tmLeft,
            tmRight,
            tmTop,
            visibility: document.visibilityState,
            forced: force,
            state: window.__materialDetectorState || null
        });
    }

    function forceRefreshSessionBurst() {
        lastLeft = null;
        lastRight = null;
        lastTop = null;
        updateSession(true);
        [80, 250, 700, 1500].forEach(delay => setTimeout(() => updateSession(true), delay));
    }

    function bootstrapRetries() {
        updateSession();
        const retryDelays = [100, 250, 500, 1000, 2000, 3500, 5000, 8000, 12000];
        retryDelays.forEach(delay => setTimeout(updateSession, delay));
    }

    function startDomObserver() {
        if (observerStarted || !document.body) return;
        observerStarted = true;
        const observer = new MutationObserver(() => updateSession());
        observer.observe(document.body, { childList: true, subtree: true, characterData: true });
    }

    function ensureObserverWhenBodyExists() {
        if (document.body) {
            startDomObserver();
            return;
        }
        const waitBodyObserver = new MutationObserver(() => {
            if (!document.body) return;
            waitBodyObserver.disconnect();
            startDomObserver();
            updateSession();
        });
        waitBodyObserver.observe(document.documentElement, { childList: true, subtree: true });
    }

    function getZdRows() {
        const root = document.querySelector('#zd-form-container #VPZDParams');
        if (!root) return [];
        return Array.from(root.querySelectorAll(':scope > div.flex'))
            .map(row => {
                const cols = row.querySelectorAll(':scope > div');
                if (cols.length < 2) return null;
                const label = (cols[0].textContent || '').replace(/\s+/g, ' ').trim();
                const values = Array.from(cols[1].querySelectorAll('.whitespace-pre-line'))
                    .map(el => (el.textContent || '').replace(/\s+/g, ' ').trim())
                    .filter(Boolean);
                const fallback = (cols[1].textContent || '').replace(/\s+/g, ' ').trim();
                if (!values.length && fallback) values.push(fallback);
                return { label, values };
            })
            .filter(Boolean);
    }

    function toCleanNumber(value) {
        if (!value) return '';
        const n = Number(value);
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

    function parseDimensionScalar(text) {
        const raw = String(text || '').replace(',', '.').toLowerCase().trim();
        const match = raw.match(/(\d+(?:\.\d+)?)\s*(mm|cm)\b/);
        if (!match) return null;
        return { value: Number(match[1]), unit: match[2] };
    }

    function parseSizeAliasFromSeparateValues(values) {
        if (!Array.isArray(values) || values.length < 2) return '';
        const parsed = values.map(parseDimensionScalar).filter(Boolean);
        if (parsed.length < 2) return '';
        const [w, h] = parsed;
        if (w.unit === 'cm' && h.unit === 'cm') return normalizeCmOutput(w.value, h.value);
        if (w.unit === 'mm' && h.unit === 'mm') return normalizeCmOutput(w.value / 10, h.value / 10);
        return '';
    }

    function stripSizeUnitSuffix(sizeAlias) {
        const raw = String(sizeAlias || '').trim();
        if (!raw) return '';
        return raw.replace(/_?cm$/i, '');
    }

    function parseSizeAlias(text) {
        const raw = String(text || '').trim();
        if (!raw) return '';
        const aMatch = raw.match(/\bA\s*([0-9]{1,2})\b/i);
        if (aMatch) return ('A' + aMatch[1]).toUpperCase();
        const cleaned = raw.replace(/×/g, 'x').replace(/,/g, '.').replace(/\s+/g, ' ').trim();
        const mm = cleaned.match(/(\d{2,4}(?:\.\d+)?)\s*x\s*(\d{2,4}(?:\.\d+)?)\s*mm\b/i);
        if (mm) return normalizeCmOutput(Number(mm[1]) / 10, Number(mm[2]) / 10);
        const cm = cleaned.match(/(\d{1,4}(?:\.\d+)?)\s*x\s*(\d{1,4}(?:\.\d+)?)\s*cm\b/i);
        if (cm) return normalizeCmOutput(cm[1], cm[2]);
        const any = cleaned.match(/(\d{1,4}(?:\.\d+)?)\s*x\s*(\d{1,4}(?:\.\d+)?)/i);
        if (any) {
            const w = Number(any[1]);
            const h = Number(any[2]);
            if (Number.isFinite(w) && Number.isFinite(h)) {
                if (w > 200 || h > 200) return normalizeCmOutput(w / 10, h / 10);
                return normalizeCmOutput(w, h);
            }
        }
        return '';
    }

    function isLikelySizeLabel(label) {
        const key = normalizeKey(label);
        if (!key) return false;
        if (key.includes('format')) return true;
        if (key.includes('velkost')) return true;
        if (key.includes('rozmer')) return true;
        if (key.includes('sirka') || key.includes('vyska')) return true;
        if (key.includes('dlzka') || key.includes('sirka x vyska')) return true;
        return false;
    }

    function isBlockedLabel(label) {
        const key = normalizeKey(label);
        if (!key) return false;
        return [
            'pocet kusov',
            'pocet rovnakych vytlackov',
            'gramaz',
            'material',
            'tlacove medium',
            'subory',
            'upozornenie'
        ].some(b => key.includes(b));
    }

    function detectUniversalSizeAlias() {
        const rows = getZdRows();
        if (!rows.length) return '';
        const prioritized = [];
        const secondary = [];
        rows.forEach(row => {
            if (!row.values || !row.values.length) return;
            if (isBlockedLabel(row.label)) return;
            if (isLikelySizeLabel(row.label)) {
                const pairAlias = parseSizeAliasFromSeparateValues(row.values);
                if (pairAlias) {
                    prioritized.push(pairAlias);
                    return;
                }
            }
            const joined = row.values.join(' | ');
            const hasSizePattern = /\bA\s*\d{1,2}\b/i.test(joined)
                || /(\d{1,4}(?:[.,]\d+)?)\s*[x×]\s*(\d{1,4}(?:[.,]\d+)?)/i.test(joined);
            if (isLikelySizeLabel(row.label)) {
                prioritized.push(joined);
            } else if (hasSizePattern) {
                secondary.push(joined);
            }
        });
        const candidates = prioritized.concat(secondary);
        for (const candidate of candidates) {
            const alias = parseSizeAlias(candidate);
            if (alias) return alias;
        }
        return '';
    }

    function applySizeAliasToState() {
        const vp = getCurrentVpFromUrl();
        if (!vp) return '';
        const sizeAlias = detectUniversalSizeAlias();
        if (!sizeAlias) return '';
        const baseState = getMaterialDetectorState() || { vp };
        const nextParams = Object.assign({}, baseState.params || {}, { sizeAlias });
        setLastSizeAliasForVp(vp, sizeAlias);
        const nextState = Object.assign({}, baseState, {
            vp,
            params: nextParams,
            sizeAlias,
            updatedAt: new Date().toISOString()
        });
        window.__materialDetectorState = nextState;
        try {
            sessionStorage.setItem('materialDetectorState:' + vp, JSON.stringify(nextState));
        } catch (e) {
            console.warn('[materialDetector] size session save failed', e);
        }
        return sizeAlias;
    }

    function ensureSizeAliasForRename() {
        const vp = getCurrentVpFromUrl();
        const live = applySizeAliasToState();
        if (live) return live;
        const state = getMaterialDetectorState();
        const fromState = String((state && ((state.params && state.params.sizeAlias) || state.sizeAlias)) || '').trim();
        if (fromState) {
            setLastSizeAliasForVp(vp, fromState);
            return fromState;
        }
        return getLastSizeAliasForVp(vp);
    }

    function startSizeObserver() {
        if (sizeObserverStarted) return;
        sizeObserverStarted = true;
        const observer = new MutationObserver(() => applySizeAliasToState());
        observer.observe(document.documentElement, { childList: true, subtree: true, characterData: true });
    }

    function initSizeBridge() {
        applySizeAliasToState();
        const retry = [100, 250, 500, 1000, 2000, 3500, 5000, 8000, 12000];
        retry.forEach(delay => setTimeout(applySizeAliasToState, delay));
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', applySizeAliasToState, { once: true });
        }
        window.addEventListener('load', applySizeAliasToState);
        window.addEventListener('focus', applySizeAliasToState);
        startSizeObserver();
    }

    function getAliasFromLeftText() {
        const left = String(window.TM_testoLeft || localStorage.getItem('TM_testoLeft') || '').trim();
        if (!left) return '';
        return left.split('|')[0].trim();
    }

    function getQtyFromLeftText() {
        const left = String(window.TM_testoLeft || localStorage.getItem('TM_testoLeft') || '').trim();
        if (!left) return '';
        const qtyMatch = left.match(/(\d+)\s*ks/i);
        return qtyMatch ? qtyMatch[1] : '';
    }

    function getNameParts() {
        const vp = getCurrentVpFromUrl();
        const state = getMaterialDetectorState();
        let alias = '';
        let sizeAlias = ensureSizeAliasForRename() || '';
        let qty = '';
        if (state) {
            alias = String(state.outputAlias || '').split('|')[0].trim();
            const stateSizeAlias = String((state.params && state.params.sizeAlias) || state.sizeAlias || '').trim();
            if (stateSizeAlias) sizeAlias = stateSizeAlias;
            qty = String((state.params && state.params.quantity) || '').match(/\d+/)?.[0] || '';
        }
        if (!alias) alias = getAliasFromLeftText();
        if (!sizeAlias) sizeAlias = parseSizeAliasFromText(alias);
        if (!qty) qty = getQtyFromLeftText();
        const aliasPart = sanitizeSnakeToken(alias || 'material');
        const sizePart = sanitizeSnakeToken(stripSizeUnitSuffix(sizeAlias) || 'bez_rozmeru');
        const qtyPart = sanitizeSnakeToken(qty ? qty + 'ks' : '1ks');
        const vpPart = sanitizeSnakeToken(vp || 'bezVP');
        return { aliasPart, sizePart, qtyPart, vpPart };
    }

    function parseSizeAliasFromText(text) {
        const raw = String(text || '').trim();
        if (!raw) return '';
        const iso = raw.match(/\bA\s*([0-9]{1,2})\b/i);
        if (iso) return ('A' + iso[1]).toUpperCase();
        const normalized = raw.replace(/×/g, 'x').replace(/\s+/g, ' ').trim();
        const mm = normalized.match(/(\d{2,4}(?:[.,]\d+)?)\s*x\s*(\d{2,4}(?:[.,]\d+)?)\s*mm\b/i);
        if (mm) {
            const w = Number(mm[1].replace(',', '.')) / 10;
            const h = Number(mm[2].replace(',', '.')) / 10;
            if (Number.isFinite(w) && Number.isFinite(h)) {
                const sw = String(Math.round(w * 10) / 10).replace('.', ',');
                const sh = String(Math.round(h * 10) / 10).replace('.', ',');
                return sw + 'x' + sh + '_cm';
            }
        }
        const cm = normalized.match(/(\d{1,4}(?:[.,]\d+)?)\s*x\s*(\d{1,4}(?:[.,]\d+)?)\s*cm\b/i);
        if (cm) {
            const sw = cm[1].replace('.', ',');
            const sh = cm[2].replace('.', ',');
            return sw + 'x' + sh + '_cm';
        }
        return '';
    }

    function extractFilenameFromHref(href) {
        try {
            const url = new URL(href, location.href);
            const raw = decodeURIComponent(url.pathname.split('/').pop() || 'subor');
            const dot = raw.lastIndexOf('.');
            if (dot <= 0) return { base: raw, ext: '' };
            return { base: raw.slice(0, dot), ext: raw.slice(dot + 1) };
        } catch (e) {
            return { base: 'subor', ext: '' };
        }
    }

    function buildNewFileName(originalHref) {
        const parts = getNameParts();
        const original = extractFilenameFromHref(originalHref);
        const prefix = [parts.aliasPart, parts.sizePart, parts.qtyPart, parts.vpPart].join('_');
        const originalBase = sanitizeToken(original.base || 'subor');
        const ext = sanitizeToken(original.ext || '');
        return ext ? (prefix + ' ' + originalBase + '.' + ext) : (prefix + ' ' + originalBase);
    }

    function isDownloadCandidate(anchor) {
        if (!anchor || !anchor.href) return false;
        const href = anchor.href;
        const text = (anchor.textContent || '').toLowerCase();
        const cls = anchor.className || '';
        if (/\/data\/servicesForm\//i.test(href)) return true;
        if (/\/svg_editor\//i.test(href)) return true;
        if (/\.(pdf|png|jpg|jpeg|tif|tiff|zip)(\?|$)/i.test(href)) return true;
        if (text.includes('stiahni') || text.includes('stiahnut')) return true;
        if (cls.includes('block mt5')) return true;
        return false;
    }

    function shouldRenameForCurrentOrder() {
        const productCode = getProductCodeFromPriceRows();
        return productCode === '41tv' || productCode === '42foto/web' || productCode === 'photoobraz' || productCode === 'HEXA';
    }

    function startDownload(url, fileName) {
        if (typeof GM_download === 'function') {
            GM_download({
                url,
                name: fileName,
                saveAs: false,
                onerror: function () {
                    window.open(url, '_blank', 'noopener');
                }
            });
            return;
        }
        window.open(url, '_blank', 'noopener');
    }

    function initDownloadRename() {
        if (renameBound) return;
        renameBound = true;
        document.addEventListener('click', function (event) {
            const link = event.target.closest('a[href]');
            if (!link) return;
            if (!isDownloadCandidate(link)) return;
            if (!shouldRenameForCurrentOrder()) return;
            event.preventDefault();
            event.stopPropagation();
            const fileName = buildNewFileName(link.href);
            startDownload(link.href, fileName);
            console.log('[materialDetector] download:', { from: link.href, as: fileName });
        }, true);
    }

    function initCore() {
        exposeAliasHelpers();
        bootstrapRetries();
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', updateSession, { once: true });
        } else {
            setTimeout(updateSession, 0);
        }
        window.addEventListener('load', forceRefreshSessionBurst);
        window.addEventListener('pageshow', forceRefreshSessionBurst);
        window.addEventListener('focus', forceRefreshSessionBurst);
        document.addEventListener('visibilitychange', function () {
            if (document.visibilityState === 'visible') {
                forceRefreshSessionBurst();
            } else {
                setTimeout(updateSession, 0);
            }
        });
        ensureObserverWhenBodyExists();
    }

    function updateSession(force = false) {
        const detected = detectCurrentLabel();
        const tmLeft = detected ? detected.tmLeft : '';
        const tmRight = detectExpeditionDate();
        const tmTop = detected ? detected.tmTop : '';
        if (!force && tmLeft === lastLeft && tmRight === lastRight && tmTop === lastTop) return;
        lastLeft = tmLeft;
        lastRight = tmRight;
        lastTop = tmTop;
        if (detected && detected.state) {
            setPerTabState(detected.state);
        }
        writeToSession(tmLeft, tmRight, tmTop);
        showLabel(tmLeft, tmRight, tmTop);
        console.log('[materialDetector] updated', {
            tmLeft,
            tmRight,
            tmTop,
            visibility: document.visibilityState,
            forced: force,
            state: window.__materialDetectorState || null
        });
    }

    function forceRefreshSessionBurst() {
        lastLeft = null;
        lastRight = null;
        lastTop = null;
        updateSession(true);
        [80, 250, 700, 1500].forEach(delay => setTimeout(() => updateSession(true), delay));
    }

    function bootstrapRetries() {
        updateSession();
        const retryDelays = [100, 250, 500, 1000, 2000, 3500, 5000, 8000, 12000];
        retryDelays.forEach(delay => setTimeout(updateSession, delay));
    }

    function showLabel(leftText, rightText, topText) {
        if (!leftText && !rightText && !topText) return;
        const h = document.querySelector('h1, h2');
        if (!h) return;

        let elLeft = document.querySelector('#shortcut-info-label');
        let elRight = document.querySelector('#shortcut-info-date');
        let elTop = document.querySelector('#shortcut-info-top');

        if (!elLeft) {
            elLeft = document.createElement('span');
            elLeft.id = 'shortcut-info-label';
            elLeft.style.cssText = 'background:#fffa65;color:#000;padding:4px 8px;margin-left:12px;border-radius:4px;font-weight:bold;';
            h.append(elLeft);
        }

        if (!elRight) {
            elRight = document.createElement('span');
            elRight.id = 'shortcut-info-date';
            elRight.style.cssText = 'background:#d0ffb3;color:#000;padding:4px 8px;margin-left:8px;border-radius:4px;font-weight:bold;';
            h.append(elRight);
        }

        if (!elTop) {
            elTop = document.createElement('span');
            elTop.id = 'shortcut-info-top';
            elTop.className = 'badge fs11';
            elTop.style.cssText = 'background:#000;color:#fff;padding:4px 8px;margin-left:8px;border-radius:4px;font-weight:bold;display:inline-block;';
            h.append(elTop);
        }

        elLeft.textContent = leftText || '';
        elRight.textContent = rightText || '';
        elTop.textContent = topText || '';
        elTop.style.display = topText ? 'inline-block' : 'none';
    }

    function writeToSession(tmLeft, tmRight, tmTop) {
        if (!tmLeft) {
            localStorage.removeItem('TM_testoLeft');
            window.TM_testoLeft = '';
        } else {
            localStorage.setItem('TM_testoLeft', tmLeft);
            window.TM_testoLeft = tmLeft;
        }

        if (!tmRight) {
            localStorage.removeItem('TM_testoRight');
            window.TM_testoRight = '';
        } else {
            localStorage.setItem('TM_testoRight', tmRight);
            window.TM_testoRight = tmRight;
        }

        if (!tmTop) {
            localStorage.removeItem('TM_top');
            window.TM_top = '';
        } else {
            localStorage.setItem('TM_top', tmTop);
            window.TM_top = tmTop;
        }
    }

    initCore();
    initSizeBridge();
    initDownloadRename();
})();
