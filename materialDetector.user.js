// ==UserScript==
// @name         materialDetector
// @namespace    https://moduly.faxcopy.sk/
// @author       mato e.
// @version      3.2.5
// @description  Zistovanie rozmeru/materialu a datumu expedicie pre stitok.
// @updateURL    https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/materialDetector.user.js
// @downloadURL  https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/materialDetector.user.js
// @match        https://moduly.faxcopy.sk/vyrobne_prikazy/detail/index/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
    'use strict';

    const MATERIAL_ALIAS_STORAGE_KEY = 'materialDetector.materialAliases.v1';

    let lastLeft = null;
    let lastRight = null;
    let observerStarted = false;

    function getCurrentVpFromUrl() {
        const match = location.pathname.match(/\/index\/(\d+)/);
        return match ? match[1] : '';
    }

    function normalizeKey(text) {
        if (!text) return '';

        return text
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/\s+/g, ' ')
            .trim();
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
        map[normalizeKey('42foto/web|Plagátovy papier|135g')] = '135';
        map[normalizeKey('42foto/web|Plagátovy papier|200g')] = '200';

        map[normalizeKey('42foto/web|fotopapier|leskly|200g')] = '200 lesk';
        map[normalizeKey('42foto/web|fotopapier|leskly|260g')] = '260 lesk';

        map[normalizeKey('42foto/web|fotopapier|pololeskly|200g')] = '200 sat';
        map[normalizeKey('42foto/web|fotopapier|pololeskly|240g')] = '240 sat';
        map[normalizeKey('42foto/web|fotopapier|pololeskly|260g')] = '260 sat';

        map[normalizeKey('42foto/web|fotopapier|matny|180g')] = '180';
        map[normalizeKey('42foto/web|fotopapier|matny|230g')] = '230';

        // FIXED PLÁTNA
        map[normalizeKey('42foto/web|platno|standard 280g')] = 'poly';
        map[normalizeKey('42foto/web|platno|premium 380g')] = 'canv';

        map[normalizeKey('42foto/web|billboardový papier')] = 'bb';
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

            if (!parsed || typeof parsed !== 'object') {
                return defaults;
            }

            const normalizedCustom = {};

            Object.entries(parsed).forEach(([key, value]) => {
                const normKey = normalizeKey(key);
                const alias = String(value || '').trim();

                if (!normKey || !alias) return;

                normalizedCustom[normKey] = alias;
            });

            return {
                ...defaults,
                ...normalizedCustom
            };

        } catch (e) {
            console.warn('[materialDetector] alias config load failed', e);
            return defaults;
        }
    }

    function saveMaterialAliasConfig(nextMap) {
        try {
            localStorage.setItem(
                MATERIAL_ALIAS_STORAGE_KEY,
                JSON.stringify(nextMap)
            );
        } catch (e) {
            console.warn('[materialDetector] alias config save failed', e);
        }
    }

    function resolveMaterialAlias(materialText) {
        const clean = (materialText || '').trim();

        if (!clean) return '';

        const config = loadMaterialAliasConfig();
        const normalizedMaterial = normalizeKey(clean);

        if (config[normalizedMaterial]) {
            return config[normalizedMaterial];
        }

        for (const [key, alias] of Object.entries(config)) {
            if (normalizedMaterial.includes(key)) {
                return alias;
            }
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

    function setPerTabState(state) {
        const vp = getCurrentVpFromUrl();

        const payload = {
            vp,
            ...state,
            updatedAt: new Date().toISOString()
        };

        window.__materialDetectorState = payload;

        try {
            sessionStorage.setItem(
                `materialDetectorState:${vp}`,
                JSON.stringify(payload)
            );
        } catch (e) {
            console.warn('[materialDetector] sessionStorage save failed', e);
        }
    }

    function extractDimensionFromText(text) {
        const match = text.match(/(\d{2,3})\s*[x×]\s*(\d{2,3})/i);

        return match
            ? `${match[1]} ${match[2]}`
            : null;
    }

    function findDimensionInRows() {
        const trs = document.querySelectorAll(
            "tr[title='ceny bez DPH']"
        );

        for (const tr of trs) {
            const txt = tr.innerText;
            const dim = extractDimensionFromText(txt);

            if (dim) {
                return {
                    dim,
                    text: txt
                };
            }
        }

        return null;
    }

    function detectPriecka() {
        const rows = document.querySelectorAll(
            "tr.detail-price-tr .detail-price-in-order tr"
        );

        for (const tr of rows) {
            if ((tr.innerText || '').toLowerCase().includes('priecka')) {
                return '+';
            }
        }

        return '';
    }

    function collectPageContext() {
        const tableRows = document.querySelectorAll('div > table tr');

        const rowTexts = Array.from(tableRows)
            .map(tr => tr.textContent || '');

        const premiumEl =
            document.querySelector('.product-name')
            || document.querySelector('h1')
            || document.querySelector('h2');

        const productText = premiumEl
            ? premiumEl.textContent || ''
            : '';

        return {
            rowTexts,
            productText
        };
    }

    function getProductCodeFromPriceRows() {
        const rows = document.querySelectorAll(
            "tr[title='ceny bez DPH']"
        );

        for (const row of rows) {
            const cells = row.querySelectorAll('td');

            if (!cells.length) continue;

            const itemCell = cells[2] || null;

            const text = (
                (itemCell ? itemCell.textContent : row.textContent) || ''
            ).toLowerCase();

            if (text.includes('42foto/web')) return '42foto/web';
            if (text.includes('41tv')) return '41tv';

            const codeMatch = text.match(/\b([0-9]{2}[a-z]{2})\b/i);

            if (codeMatch) {
                return codeMatch[1].toLowerCase();
            }
        }

        return '';
    }

    function extractValuesFromParamRow(valueCell) {
        if (!valueCell) return [];

        const chunks = Array.from(
            valueCell.querySelectorAll('.whitespace-pre-line')
        )
            .map(el => (
                el.textContent || ''
            ).replace(/\s+/g, ' ').trim())
            .filter(Boolean);

        if (chunks.length) {
            return Array.from(new Set(chunks));
        }

        const fallback = (
            valueCell.textContent || ''
        )
            .replace(/\s+/g, ' ')
            .trim();

        return fallback ? [fallback] : [];
    }

    function getZdParamRows(root) {
        const rows = Array.from(
            root.querySelectorAll(':scope > div.flex')
        );

        return rows.filter(row => {
            const cols = row.querySelectorAll(':scope > div');
            return cols.length >= 2;
        });
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

            const rawLabel = (
                cells[0].textContent || ''
            )
                .replace(/\s+/g, ' ')
                .trim();

            const normLabel = normalizeKey(rawLabel);

            if (!normLabel) return;

            const values = extractValuesFromParamRow(cells[1]);

            if (!values.length) return;

            params[normLabel] = {
                label: rawLabel,
                values,
                value: values.join(' | ')
            };
        });

        return Object.keys(params).length
            ? params
            : null;
    }

    function getParamValueByLabelContains(params, patterns) {
        if (!params) return '';

        const entries = Object.entries(params);

        for (const [key, item] of entries) {
            if (patterns.some(pattern => key.includes(pattern))) {
                return item.value || '';
            }
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
        const match = String(text || '').match(
            /\b(120|135|140|180|200|230|240|260|280|380)\s*g\b/i
        );

        return match
            ? `${match[1]}g`
            : '';
    }

    function parse42fotoWebDetailsFromZd(params) {
        const mediaTypeRaw = getParamValueByLabelContains(
            params,
            ['typ tlacoveho media']
        );

        const mediaType = normalizeKey(mediaTypeRaw);

        const allValues = getAllParamValues(params)
            .map(normalizeKey);

        let variant = '';
        let weight = '';

        if (mediaType.includes('economy plagat')) {

            const gram = getParamValueByLabelContains(
                params,
                ['gramaz papiera economy']
            );

            weight = pickWeight(gram);

        } else if (mediaType.includes('plagatovy papier')) {

            const gram = getParamValueByLabelContains(
                params,
                ['gramaz papiera plagatovy']
            );

            weight = pickWeight(gram);

        } else if (mediaType.includes('fotopapier')) {

            if (allValues.some(v => v.includes('pololesk'))) {
                variant = 'pololeskly';
            } else if (allValues.some(v => v.includes('lesk'))) {
                variant = 'leskly';
            } else if (allValues.some(v => v.includes('matn'))) {
                variant = 'matny';
            }

            const gramCandidate =
                allValues.find(v =>
                    /\b(180|200|230|240|260)\s*g\b/i.test(v)
                ) || '';

            weight = pickWeight(gramCandidate);

        } else if (mediaType.includes('platno')) {

            const canvasType = getParamValueByLabelContains(
                params,
                ['typ-gramaz platna']
            );

            if (canvasType) {
                variant = normalizeKey(canvasType);
            }

        } else if (mediaType.includes('billboardovy papier')) {

            variant = 'default';

        } else if (mediaType.includes('rollup')) {

            if (allValues.some(v => v.includes('economy'))) {
                variant = 'economy';
            } else if (
                allValues.some(v =>
                    v.includes('standart')
                    || v.includes('standard')
                )
            ) {
                variant = 'standart';
            }

        } else if (mediaType.includes('backlit')) {

            if (allValues.some(v => v.includes('lesk'))) {
                variant = 'lesk';
            } else if (allValues.some(v => v.includes('mat'))) {
                variant = 'mat';
            }
        }

        if (!weight) {
            const anyGramCandidate =
                allValues.find(v =>
                    /\b(120|135|140|180|200|230|240|260|280|380)\s*g\b/i.test(v)
                ) || '';

            weight = pickWeight(anyGramCandidate);
        }

        const quantityRaw = getParamValueByLabelContains(
            params,
            ['pocet kusov', 'pocet rovnakych vytlackov']
        );

        const quantityMatch =
            String(quantityRaw || '').match(/\d+/);

        const quantity = quantityMatch
            ? quantityMatch[0]
            : '';

        return {
            mediaTypeRaw,
            mediaType,
            variant,
            weight,
            quantity
        };
    }

    function build42fotoWebAlias(details) {
        const chunks = ['42foto/web'];

        if (details.mediaType.includes('economy plagat')) {

            chunks.push('economy plagat');

            if (details.weight) {
                chunks.push(details.weight);
            }

        } else if (details.mediaType.includes('plagatovy papier')) {

            chunks.push('plagatovy papier');

            if (details.weight) {
                chunks.push(details.weight);
            }

        } else if (details.mediaType.includes('fotopapier')) {

            chunks.push('fotopapier');

            if (details.variant) {
                chunks.push(details.variant);
            }

            if (details.weight) {
                chunks.push(details.weight);
            }

        } else if (details.mediaType.includes('platno')) {

            chunks.push('platno');

            if (details.variant) {
                chunks.push(details.variant);
            }

        } else if (details.mediaType.includes('billboardovy papier')) {

            chunks.push('billboardovy papier');

        } else if (details.mediaType.includes('rollup')) {

            chunks.push('medium pre rollup');

            if (details.variant) {
                chunks.push(details.variant);
            }

        } else if (details.mediaType.includes('backlit')) {

            chunks.push('backlit');

            if (details.variant) {
                chunks.push(details.variant);
            }

        } else {

            chunks.push(details.mediaTypeRaw || 'unknown');
        }

        const key = chunks.join('|');

        const baseAlias =
            resolveMaterialAlias(key)
            || details.mediaTypeRaw
            || '42foto/web';

        if (details.quantity) {
            return `${baseAlias} | ${details.quantity}ks`;
        }

        return baseAlias;
    }

    function detectMaterial42fotoWeb() {
        const productCode = getProductCodeFromPriceRows();

        if (productCode !== '42foto/web') {
            return null;
        }

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

        return {
            material: '42foto/web',
            alias: outputAlias,
            priority: 350,
            details
        };
    }

    function detectMaterialHexa(context) {
        const detected = context.rowTexts.some(txt =>
            /HEXA|HEXAGON|HEXAGÓN/i.test(txt)
        );

        if (!detected) return null;

        return {
            material: 'HEXA',
            alias: resolveMaterialAlias('HEXA') || 'HEXA',
            priority: 100
        };
    }

    function runMaterialDetectors(context) {
        const detectors = [
            detectMaterial42fotoWeb,
            () => detectMaterialHexa(context)
        ];

        return detectors
            .map(detector => detector())
            .filter(Boolean)
            .sort((a, b) => b.priority - a.priority);
    }

    function buildAliasesFromDetections(detections) {
        if (!detections.length) return [];

        return detections
            .map(d => d.alias)
            .filter(Boolean);
    }

    function detectFoText() {
        const context = collectPageContext();

        const detections = runMaterialDetectors(context);

        const aliases = buildAliasesFromDetections(detections);

        if (aliases.length) {
            return aliases.join(' ');
        }

        const row = findDimensionInRows();

        if (!row) return '';

        const premiumDetected =
            /PREMIUM/i.test(context.productText)
            || context.rowTexts.some(txt => /PREMIUM/i.test(txt));

        let result = row.dim || '';

        const pr = detectPriecka();

        if (pr) result += pr;

        if (premiumDetected) result += ' P';

        return result;
    }

    function detectExpeditionDate() {
        const el = document.querySelector('#dodacia_lehota_label');

        if (!el) return '';

        const text = (el.textContent || '').trim();

        const match = text.match(/(\d{1,2})\.\s*(\d{1,2})\./);

        if (!match) return '';

        return `${match[1]}. ${match[2]}.`;
    }

    function showLabel(leftText, rightText) {
        if (!leftText && !rightText) return;

        const h = document.querySelector('h1, h2');

        if (!h) return;

        let elLeft = document.querySelector('#shortcut-info-label');
        let elRight = document.querySelector('#shortcut-info-date');

        if (!elLeft) {
            elLeft = document.createElement('span');

            elLeft.id = 'shortcut-info-label';

            elLeft.style.cssText =
                'background:#fffa65;color:#000;padding:4px 8px;margin-left:12px;border-radius:4px;font-weight:bold;';

            h.append(elLeft);
        }

        if (!elRight) {
            elRight = document.createElement('span');

            elRight.id = 'shortcut-info-date';

            elRight.style.cssText =
                'background:#d0ffb3;color:#000;padding:4px 8px;margin-left:8px;border-radius:4px;font-weight:bold;';

            h.append(elRight);
        }

        elLeft.textContent = leftText || '';
        elRight.textContent = rightText || '';
    }

    function writeToSession(tmLeft, tmRight) {
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
    }

    function updateSession() {
        const tmLeft = detectFoText();
        const tmRight = detectExpeditionDate();

        if (tmLeft === lastLeft && tmRight === lastRight) {
            return;
        }

        lastLeft = tmLeft;
        lastRight = tmRight;

        writeToSession(tmLeft, tmRight);

        showLabel(tmLeft, tmRight);

        console.log('[materialDetector] updated', {
            tmLeft,
            tmRight,
            visibility: document.visibilityState,
            state: window.__materialDetectorState || null
        });
    }

    function bootstrapRetries() {
        updateSession();

        const retryDelays = [
            100,
            250,
            500,
            1000,
            2000,
            3500,
            5000,
            8000,
            12000
        ];

        retryDelays.forEach(delay => {
            setTimeout(updateSession, delay);
        });
    }

    function startDomObserver() {
        if (observerStarted) return;

        if (!document.body) return;

        observerStarted = true;

        const observer = new MutationObserver(() => {
            updateSession();
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true,
            characterData: true
        });
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

        waitBodyObserver.observe(document.documentElement, {
            childList: true,
            subtree: true
        });
    }

    function init() {
        exposeAliasHelpers();

        bootstrapRetries();

        if (document.readyState === 'loading') {
            document.addEventListener(
                'DOMContentLoaded',
                updateSession,
                { once: true }
            );
        } else {
            setTimeout(updateSession, 0);
        }

        window.addEventListener('load', updateSession);
        window.addEventListener('pageshow', updateSession);
        window.addEventListener('focus', updateSession);

        document.addEventListener('visibilitychange', () => {
            if (document.visibilityState === 'visible') {
                updateSession();
            } else {
                setTimeout(updateSession, 0);
            }
        });

        ensureObserverWhenBodyExists();
    }

    init();

})();
