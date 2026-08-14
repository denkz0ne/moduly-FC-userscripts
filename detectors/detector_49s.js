(function () {
    'use strict';

    const api = window.MaterialDetectorAPI;
    if (!api) return;

    function detectExpressToken() {
        const badges = Array.from(document.querySelectorAll('.badge'));
        return badges.some(badge => api.clean(badge.textContent).toUpperCase() === 'EXPR') ? 'EXPR' : '';
    }

    function getZdRoot() {
        return document.querySelector('#zd-form-container #VPZDParams');
    }

    function getRows() {
        const root = getZdRoot();
        if (!root) return [];
        return Array.from(root.querySelectorAll(':scope > div.flex')).map(row => {
            const cells = row.querySelectorAll(':scope > div');
            if (cells.length < 2) return null;
            const rawLabel = api.clean(cells[0].textContent || '');
            const values = Array.from(cells[1].querySelectorAll('.whitespace-pre-line'))
                .map(el => api.clean(el.textContent || ''))
                .filter(Boolean);
            const value = values.length ? values.join(' | ') : api.clean(cells[1].textContent || '');
            return { label: rawLabel, key: api.normalizeKey(rawLabel), value, values, valueCell: cells[1] };
        }).filter(Boolean);
    }

    function firstRow(rows, labels) {
        const normalized = labels.map(api.normalizeKey);
        return rows.find(row => normalized.some(label => row.key.includes(label))) || null;
    }

    function exactRow(rows, labels) {
        const normalized = labels.map(api.normalizeKey);
        return rows.find(row => normalized.includes(row.key)) || null;
    }

    function allRows(rows, labels) {
        const normalized = labels.map(api.normalizeKey);
        return rows.filter(row => normalized.some(label => row.key.includes(label)));
    }

    function extractCode(valueCell) {
        if (!valueCell) return '';
        const codeEl = Array.from(valueCell.querySelectorAll('.text-gray, [class*="text-gray"]'))
            .find(el => /#?FV\w+/i.test(el.textContent || ''));
        const match = (codeEl ? codeEl.textContent : valueCell.textContent || '').match(/#?\s*([A-Z]{1,4}\d{2,6})/i);
        return match ? `#${match[1]}` : '';
    }

    function extractNumber(value) {
        const match = String(value || '').replace(',', '.').match(/(\d+(?:\.\d+)?)/);
        return match ? match[1] : '';
    }

    function valueOf(row) {
        return row ? row.value || '' : '';
    }

    function codeOf(row) {
        return row ? extractCode(row.valueCell) : '';
    }

    function parseQuantity(rows) {
        const row = exactRow(rows, ['pocet kusov']);
        const match = String(valueOf(row)).match(/\d+/);
        return match ? match[0] : '';
    }

    function parseCutCount(rows) {
        const row = firstRow(rows, ['pocet rezov na format', 'pocet rezov']);
        const match = String(valueOf(row)).match(/\d+/);
        return match ? match[0] : '';
    }

    function parseStickerSize(rows) {
        const sizeRows = allRows(rows, ['rozmer samolepky']);
        const dimensionRow = sizeRows.find(row => row.values.some(value => /\bmm\b/i.test(value))) || null;
        const modeRow = sizeRows.find(row => row.values.some(value => !/\b(mm|rol|m2)\b/i.test(value))) || null;
        const rollRow = sizeRows.find(row => row.values.some(value => /\brol\b/i.test(value))) || null;
        const values = dimensionRow ? dimensionRow.values : [];
        const widthRaw = values[0] || '';
        const heightRaw = values[1] || '';
        const widthMm = extractNumber(widthRaw);
        const heightMm = extractNumber(heightRaw);
        const sizeAlias = widthMm && heightMm ? api.parseSizeAlias(`${widthMm}x${heightMm} mm`) : api.detectUniversalSizeAlias();
        const size = api.stripSizeUnitSuffix(sizeAlias);
        const parts = size.match(/^(\d+(?:[,.]\d+)?)x(\d+(?:[,.]\d+)?)$/);
        return {
            stickerSizeMode: valueOf(modeRow),
            stickerRollAmount: valueOf(rollRow),
            widthRaw,
            heightRaw,
            widthMm,
            heightMm,
            widthCm: widthMm ? String(Number(widthMm.replace(',', '.')) / 10).replace('.', ',') : '',
            heightCm: heightMm ? String(Number(heightMm.replace(',', '.')) / 10).replace('.', ',') : '',
            size,
            sizeAlias,
            width: parts ? parts[1] : '',
            height: parts ? parts[2] : ''
        };
    }

    function finishAlias(normalized, prefix) {
        if (normalized.includes('mat')) return `${prefix} mat`;
        if (normalized.includes('lesk')) return `${prefix} lesk`;
        return prefix;
    }

    function foilMaterialAlias(material, code) {
        const normalized = api.normalizeKey(`${material || ''} ${code || ''}`);
        if (normalized.includes('vf163') || normalized.includes('strukturovana')) return 'geko';
        if (normalized.includes('fv169') || normalized.includes('lahko odstranitelna')) return 'lesk easy';
        if (normalized.includes('fv027') || normalized.includes('biela polymericka')) return 'poly';
        return '';
    }

    function foilAlias(raw) {
        const normalized = api.normalizeKey(raw);
        if (normalized.includes('transparent')) return finishAlias(normalized, 'trans');
        if (normalized.includes('metal')) return 'metal';
        if (normalized.includes('mat')) return 'mat';
        if (normalized.includes('lesk')) return 'lesk';
        return 'samol';
    }

    function cutMark(cutting) {
        return api.normalizeKey(cutting).includes('chcem predrezat') ? '+R' : '';
    }

    function buildLeft(alias, quantity, marker) {
        const base = `${alias}${marker || ''}`;
        const qty = parseInt(quantity, 10);
        return !Number.isNaN(qty) && qty >= 2 ? `${base} | ${qty}ks` : base;
    }

    function parseDetails() {
        const rows = getRows();
        const foilGroupRow = firstRow(rows, ['druhy folii']);
        const selectedFoilRow = rows.find(row => row.key.startsWith('druhy folii -')) || null;
        const size = parseStickerSize(rows);
        const quantity = parseQuantity(rows);
        const cutCount = parseCutCount(rows);
        const foilType = valueOf(foilGroupRow);
        const foilMaterial = valueOf(selectedFoilRow);
        const foilMaterialCode = codeOf(selectedFoilRow);
        const cutting = valueOf(exactRow(rows, ['rezanie']));
        const aliasSource = [foilMaterial, foilType, selectedFoilRow && selectedFoilRow.label].filter(Boolean).join(' ');
        const alias = foilMaterialAlias(foilMaterial, foilMaterialCode)
            || foilAlias(aliasSource);
        const details = {
            stickerKind: valueOf(firstRow(rows, ['druh samolepiek'])),
            note: valueOf(exactRow(rows, ['poznamka'])),
            foilType,
            foilAlias: alias,
            foilMaterial,
            foilMaterialCode,
            printType: valueOf(exactRow(rows, ['tlac'])),
            printArea: valueOf(firstRow(rows, ['vypocitane pole tlac'])),
            uploadFiles: valueOf(firstRow(rows, ['nahrajte subor', 'nahrat subor', 'subory'])),
            cutting,
            cutMark: cutMark(cutting),
            cutCount,
            packing: valueOf(exactRow(rows, ['balenie'])),
            specificRequirements: valueOf(firstRow(rows, ['specificke poziadavky'])),
            quantity
        };
        details.fileNames = details.uploadFiles;
        return Object.assign(details, size);
    }

    api.registerDetector({
        id: '49s',
        displayName: '49s Samolepky',
        tokens: [
            'alias', 'size', 'sizeAlias', 'quantity', 'vp', 'code', 'productCode', 'express',
            'stickerKind', 'note', 'foilType', 'foilAlias', 'foilMaterial', 'foilMaterialCode',
            'printType', 'stickerSizeMode', 'stickerRollAmount', 'width', 'height', 'widthMm',
            'heightMm', 'widthCm', 'heightCm', 'widthRaw', 'heightRaw', 'printArea',
            'uploadFiles', 'fileNames', 'cutting', 'cutMark', 'cutCount', 'packing', 'specificRequirements',
            'original', 'ext'
        ],
        defaultRenameTemplate: [
            { type: 'token', value: 'alias' },
            { type: 'text', value: '_' },
            { type: 'token', value: 'size' },
            { type: 'text', value: '_' },
            { type: 'token', value: 'quantity' },
            { type: 'text', value: '_' },
            { type: 'token', value: 'vp' },
            { type: 'text', value: ' ' },
            { type: 'token', value: 'original' },
            { type: 'text', value: '.' },
            { type: 'token', value: 'ext' }
        ],
        match(internalCode, context) {
            const code = String(internalCode || '').toLowerCase();
            const text = api.normalizeKey((context && context.productText) || '');
            return code === '49s' || /\b49s\b/i.test(text) || (text.includes('samolepky') && text.includes('druh samolepiek'));
        },
        detect() {
            const details = parseDetails();
            const express = detectExpressToken();
            const alias = details.foilAlias || 'samol';
            const leftAlias = `${alias}${details.cutMark || ''}`;
            const left = buildLeft(alias, details.quantity, details.cutMark);
            const quantity = details.quantity ? `${details.quantity}ks` : '1ks';
            return {
                detector: '49s',
                left,
                top: express,
                bottom: '',
                rename: {
                    enabled: true,
                    pattern: '{alias}_{size}_{quantity}_{vp} {original}.{ext}',
                    alias: leftAlias,
                    sizeAlias: details.sizeAlias,
                    quantity
                },
                state: {
                    detector: '49s',
                    productCode: '49s',
                    outputAlias: left,
                    sizeAlias: details.sizeAlias,
                    topBadge: express,
                    params: Object.assign({}, details, { alias: leftAlias, baseAlias: alias, express, code: '49s', productCode: '49s' })
                },
                debug: Object.assign({}, details, { alias: leftAlias, baseAlias: alias, express, code: '49s', productCode: '49s' })
            };
        }
    });
})();