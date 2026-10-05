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
            const label = api.clean(cells[0].textContent || '');
            const blocks = Array.from(cells[1].querySelectorAll('.p-2.border'));
            const values = Array.from(cells[1].querySelectorAll('.whitespace-pre-line'))
                .map(el => api.clean(el.textContent || ''))
                .filter(Boolean);
            const value = values.length ? values.join(' | ') : api.clean(cells[1].textContent || '');
            return { label, key: api.normalizeKey(label), value, values, blocks, valueCell: cells[1] };
        }).filter(Boolean);
    }

    function rowsByLabel(rows, labels) {
        const normalized = labels.map(api.normalizeKey);
        return rows.filter(row => normalized.some(label => row.key.includes(label)));
    }

    function firstValue(rows, labels) {
        const row = rowsByLabel(rows, labels).find(item => item.value);
        return row ? row.value : '';
    }

    function exactValue(rows, labels) {
        const normalized = labels.map(api.normalizeKey);
        const row = rows.find(item => normalized.includes(item.key) && item.value);
        return row ? row.value : '';
    }

    function extractNumber(value) {
        const match = String(value || '').replace(',', '.').match(/(\d+(?:\.\d+)?)/);
        return match ? match[1] : '';
    }

    function parseQuantity(rows) {
        const raw = exactValue(rows, ['pocet kusov']) || firstValue(rows, ['pocet kusov']);
        const match = String(raw || '').match(/\d+/);
        return match ? match[0] : '';
    }

    function parseDimensions(rows) {
        const row = rowsByLabel(rows, ['vlastny rozmer', 'rozmer tabulky']).find(item => item.blocks.length || item.values.length) || null;
        if (!row) return { widthRaw: '', heightRaw: '', widthCm: '', heightCm: '', size: '', sizeAlias: '' };
        let widthRaw = '';
        let heightRaw = '';
        row.blocks.forEach(block => {
            const label = api.normalizeKey(block.querySelector('em')?.textContent || '');
            const value = api.clean(block.querySelector('.whitespace-pre-line')?.textContent || block.textContent || '');
            if (label.includes('sirka')) widthRaw = value;
            if (label.includes('vyska')) heightRaw = value;
        });
        if ((!widthRaw || !heightRaw) && row.values.length >= 2) {
            widthRaw = widthRaw || row.values[0];
            heightRaw = heightRaw || row.values[1];
        }
        const widthCm = extractNumber(widthRaw);
        const heightCm = extractNumber(heightRaw);
        const inputUnit = widthRaw.includes('mm') || heightRaw.includes('mm') ? ' mm' : ' cm';
        const sizeAlias = widthCm && heightCm ? api.parseSizeAlias(widthCm + 'x' + heightCm + inputUnit) : '';
        const size = api.stripSizeUnitSuffix(sizeAlias);
        return { widthRaw, heightRaw, widthCm, heightCm, size, sizeAlias };
    }

    function aliasForMaterial(material) {
        const normalized = api.normalizeKey(material);
        if (normalized.includes('penova') || normalized.includes('kapa')) return 'spz kapa';
        return 'spz';
    }

    function parseDetails() {
        const rows = getRows();
        const material = firstValue(rows, ['vyber materialu vyhotovenia spz', 'material vyhotovenia spz']);
        const dimensions = parseDimensions(rows);
        const quantity = parseQuantity(rows);
        const alias = aliasForMaterial(material);
        const details = {
            material,
            tableSizeType: firstValue(rows, ['rozmer tabulky']),
            mandatorySurcharge: firstValue(rows, ['povinne priplatky']),
            foilSurcharge: firstValue(rows, ['vlastny rozmer doplatok folia']),
            printSurcharge: firstValue(rows, ['vlastny rozmer doplatok tlac']),
            calculatedKapaEco: firstValue(rows, ['vypocitane pole vlastny rozmer tabulky kapa', 'vypocitane pole vlastny rozmer tabulky kapa ecosolvent']),
            calculatedFoil: firstValue(rows, ['vypocitane pole vlastny rozmer tabulky folia']),
            graphicDesign: firstValue(rows, ['graficky navrh']),
            uploadFiles: firstValue(rows, ['subory s vlastnou grafikou', 'subory', 'nahrajte subor', 'nahrat subor']),
            specificRequirements: firstValue(rows, ['specificke poziadavky']),
            extraServices: firstValue(rows, ['doplnkove sluzby']),
            quantity,
            alias
        };
        details.fileNames = details.uploadFiles;
        return Object.assign(details, dimensions);
    }

    api.registerDetector({
        id: '67spz',
        displayName: '67spz SPZ',
        tokens: [
            'alias', 'size', 'sizeAlias', 'quantity', 'vp', 'code', 'productCode', 'express',
            'material', 'tableSizeType', 'widthRaw', 'heightRaw', 'widthCm', 'heightCm',
            'mandatorySurcharge', 'foilSurcharge', 'printSurcharge', 'calculatedKapaEco',
            'calculatedFoil', 'graphicDesign', 'uploadFiles', 'fileNames', 'specificRequirements',
            'extraServices', 'original', 'ext'
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
            if (code) return code === '67spz';
            const text = api.normalizeKey((context && context.productText) || '');
            return /\b67spz\b/i.test(text) || text.includes('vyber materialu vyhotovenia spz');
        },
        detect() {
            const details = parseDetails();
            const express = detectExpressToken();
            const alias = details.alias || 'spz';
            const quantity = details.quantity ? details.quantity + 'ks' : '1ks';
            return {
                detector: '67spz',
                left: alias,
                top: express,
                bottom: '',
                rename: {
                    enabled: true,
                    pattern: '{alias}_{size}_{quantity}_{vp} {original}.{ext}',
                    alias,
                    sizeAlias: details.sizeAlias,
                    quantity
                },
                state: {
                    detector: '67spz',
                    productCode: '67spz',
                    outputAlias: alias,
                    sizeAlias: details.sizeAlias,
                    topBadge: express,
                    params: Object.assign({}, details, { alias, express, code: '67spz', productCode: '67spz' })
                },
                debug: Object.assign({}, details, { alias, express, code: '67spz', productCode: '67spz' })
            };
        }
    });
})();