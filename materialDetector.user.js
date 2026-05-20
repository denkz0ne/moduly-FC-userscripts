// ==UserScript==
// @name         materialDetector
// @namespace    https://moduly.faxcopy.sk/
// @author       mato e.
// @version      3.0.1
// @description  Zistovanie rozmeru/materialu a datumu expedicie pre stitok.
// @updateURL    https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/materialDetector.user.js
// @downloadURL  https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/materialDetector.user.js
// @match        https://moduly.faxcopy.sk/vyrobne_prikazy/detail/index/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
    'use strict';

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

    function setPerTabState(state) {
        const vp = getCurrentVpFromUrl();
        const payload = {
            vp,
            ...state,
            updatedAt: new Date().toISOString()
        };

        window.__materialDetectorState = payload;

        try {
            sessionStorage.setItem(`materialDetectorState:${vp}`, JSON.stringify(payload));
        } catch (e) {
            console.warn('[materialDetector] sessionStorage save failed', e);
        }
    }

    function extractDimensionFromText(text) {
        const match = text.match(/(\d{2,3})\s*[x×]\s*(\d{2,3})/i);
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
        const tableRows = document.querySelectorAll('div > table tr');
        const rowTexts = Array.from(tableRows).map(tr => tr.textContent || '');

        const premiumEl = document.querySelector('.product-name') || document.querySelector('h1') || document.querySelector('h2');
        const productText = premiumEl ? premiumEl.textContent || '' : '';

        return { rowTexts, productText };
    }

    function getProductCodeFromPriceRows() {
        const rows = document.querySelectorAll("tr[title='ceny bez DPH']");

        for (const row of rows) {
            const cells = row.querySelectorAll('td');
            if (!cells.length) continue;

            const itemCell = cells[2] || null;
            const text = (itemCell ? itemCell.textContent : row.textContent) || '';
            const codeMatch = text.match(/\b([0-9]{2}[a-z]{2})\b/i);
            if (codeMatch) return codeMatch[1].toLowerCase();
        }

        return '';
    }

    function extractValuesFromParamRow(valueCell) {
        if (!valueCell) return [];

        const chunks = Array.from(valueCell.querySelectorAll('.whitespace-pre-line'))
            .map(el => (el.textContent || '').trim())
            .filter(Boolean);

        if (chunks.length) return Array.from(new Set(chunks));

        const fallback = (valueCell.textContent || '')
            .replace(/\s+/g, ' ')
            .trim();

        return fallback ? [fallback] : [];
    }

    function getZdParamRows(root) {
        // Expected row layout in VPZDParams: each row is a flex wrapper with 3 direct columns.
        const rows = Array.from(root.querySelectorAll(':scope > div.flex'));

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

            const rawLabel = (cells[0].textContent || '').replace(/\s+/g, ' ').trim();
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

        return Object.keys(params).length ? params : null;
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

    function parseFormatAlias(formatText) {
        const clean = (formatText || '').trim();
        if (!clean) return '';

        const iso = clean.match(/\bA\d\b/i);
        if (iso) return iso[0].toUpperCase();

        const mm = clean.match(/(\d{2,4})\s*[x×]\s*(\d{2,4})\s*mm/i);
        if (mm) return `${mm[1]}x${mm[2]}mm`;

        const cm = clean.match(/(\d{2,4})\s*[x×]\s*(\d{2,4})\s*cm/i);
        if (cm) return `${cm[1]}x${cm[2]}cm`;

        return clean;
    }

    function parse41tvDetailsFromZd(params) {
        const printType = getParamValueByLabelContains(params, ['druh tlace']);
        const material = getParamValueByLabelContains(params, ['tlacove medium', 'medium pre']);
        const formatType = getParamValueByLabelContains(params, ['format vytlacku']);
        const formatValue = getParamValueByLabelContains(params, ['standardne formaty iso', 'velkost vytlacku', 'format vytlacku']);
        const quantityText = getParamValueByLabelContains(params, ['pocet rovnakych vytlackov']);
        const folding = getParamValueByLabelContains(params, ['skladanie']);

        const quantity = (quantityText.match(/\d+/) || [null])[0];

        let colorMode = '';
        if (/fareb/i.test(printType)) colorMode = 'farebna';
        else if (/ciern|ciernobiel/i.test(printType)) colorMode = 'cb';

        return {
            formatType,
            formatValue,
            formatAlias: parseFormatAlias(formatValue),
            quantity: quantity || '',
            printType,
            colorMode,
            material,
            folding
        };
    }

    function detectMaterial41tv() {
        const productCode = getProductCodeFromPriceRows();
        if (productCode !== '41tv') return null;

        const params = parseZdParams();
        const details = parse41tvDetailsFromZd(params);

        setPerTabState({
            detector: '41tv',
            productCode,
            params: details,
            source: '#zd-form-container #VPZDParams'
        });

        return {
            material: '41tv',
            alias: details.material || '41tv',
            priority: 300,
            details
        };
    }

    function detectMaterialHexa(context) {
        const detected = context.rowTexts.some(txt => /HEXA|HEXAGON|HEXAGÓN/i.test(txt));
        if (!detected) return null;

        setPerTabState({
            detector: 'hexa',
            productCode: 'hexa',
            params: {
                material: 'HEXA'
            }
        });

        return {
            material: 'HEXA',
            alias: 'HEXA',
            priority: 100
        };
    }

    function runMaterialDetectors(context) {
        const detectors = [
            detectMaterial41tv,
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

        if (aliases.length) return aliases.join(' ');

        const row = findDimensionInRows();
        if (!row) return '';

        const premiumDetected = /PREMIUM/i.test(context.productText) ||
            context.rowTexts.some(txt => /PREMIUM/i.test(txt));

        let result = row.dim || '';
        const pr = detectPriecka();
        if (pr) result += pr;
        if (premiumDetected) result += '  P';

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
            elLeft.style.cssText = 'background:#fffa65;color:#000;padding:4px 8px;margin-left:12px;border-radius:4px;font-weight:bold;';
            h.append(elLeft);
        }

        if (!elRight) {
            elRight = document.createElement('span');
            elRight.id = 'shortcut-info-date';
            elRight.style.cssText = 'background:#d0ffb3;color:#000;padding:4px 8px;margin-left:8px;border-radius:4px;font-weight:bold;';
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

        if (tmLeft === lastLeft && tmRight === lastRight) return;

        lastLeft = tmLeft;
        lastRight = tmRight;

        writeToSession(tmLeft, tmRight);
        showLabel(tmLeft, tmRight);

        console.log('[materialDetector] updated', { tmLeft, tmRight, visibility: document.visibilityState, state: window.__materialDetectorState || null });
    }

    function bootstrapRetries() {
        updateSession();

        const retryDelays = [100, 250, 500, 1000, 2000, 3500, 5000, 8000, 12000];
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
        bootstrapRetries();

        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', updateSession, { once: true });
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
