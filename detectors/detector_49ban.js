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
            const blocks = Array.from(cells[1].querySelectorAll('.p-2.border'));
            const values = Array.from(cells[1].querySelectorAll('.whitespace-pre-line'))
                .map(el => api.clean(el.textContent || ''))
                .filter(Boolean);
            const value = values.length ? values.join(' | ') : api.clean(cells[1].textContent || '');
            return { label: rawLabel, key: api.normalizeKey(rawLabel), value, values, valueCell: cells[1], blocks };
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

    function allValues(rows, labels) {
        return rowsByLabel(rows, labels).map(row => row.value).filter(Boolean);
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
        const raw = firstValue(rows, ['pocet kusov bannerov', 'pocet kusov']);
        const match = String(raw || '').match(/\d+/);
        return match ? match[0] : '';
    }

    function parseDimensions(rows) {
        const row = rowsByLabel(rows, ['rozmery']).find(item => item.blocks.length || item.values.length) || null;
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
            heightRaw = heightRaw || row.values[0];
            widthRaw = widthRaw || row.values[1];
        }
        const widthCm = extractNumber(widthRaw);
        const heightCm = extractNumber(heightRaw);
        const sizeAlias = widthCm && heightCm ? api.parseSizeAlias(`${widthCm}x${heightCm} cm`) : '';
        const size = api.stripSizeUnitSuffix(sizeAlias);
        return { widthRaw, heightRaw, widthCm, heightCm, size, sizeAlias };
    }

    function parseRope(rows) {
        const raw = firstValue(rows, ['napinacie lano']);
        const normalized = api.normalizeKey(raw);
        if (!raw || normalized.includes('bez')) return { rope: raw, ropeMeters: '', ropeMark: '' };
        const meters = (String(raw).replace(',', '.').match(/(\d+(?:\.\d+)?)\s*m\b/i) || [])[1]
            || (String(raw).match(/\b(\d+)\b/) || [])[1]
            || '';
        const cleanMeters = meters ? String(Number(meters)).replace('.', ',') : '';
        return { rope: raw, ropeMeters: cleanMeters, ropeMark: cleanMeters ? `${cleanMeters}m` : '' };
    }

    function buildAlias(ropeMark) {
        return ropeMark ? `ban + ${ropeMark}` : 'ban';
    }

    function buildLeft(alias, quantity) {
        const qty = parseInt(quantity, 10);
        return !Number.isNaN(qty) && qty >= 2 ? `${alias} | ${qty}ks` : alias;
    }

    function parseDetails() {
        const rows = getRows();
        const dimensions = parseDimensions(rows);
        const rope = parseRope(rows);
        const quantity = parseQuantity(rows);
        const eyeletValues = allValues(rows, ['ockovanie']);
        const gluingValues = allValues(rows, ['lepenie']);
        const details = {
            type: exactValue(rows, ['typ']),
            bannerType: exactValue(rows, ['typ']),
            material: firstValue(rows, ['material banneru']),
            graphicDesign: firstValue(rows, ['graficky navrh']),
            uploadFiles: firstValue(rows, ['subory', 'nahrajte subor', 'nahrat subor']),
            eyelet: eyeletValues[0] || '',
            eyeletPlacement: eyeletValues[1] || '',
            eyeletValues: eyeletValues.join(' | '),
            gluing: gluingValues[0] || '',
            gluingDetail: gluingValues[1] || '',
            gluingValues: gluingValues.join(' | '),
            reinforcedEdge: firstValue(rows, ['spevneny okraj', 'lem']),
            rope: rope.rope,
            ropeMeters: rope.ropeMeters,
            ropeMark: rope.ropeMark,
            materialConsumption: firstValue(rows, ['spotreba materialu']),
            perimeter: firstValue(rows, ['vypocitane poleobvod', 'vypocitane pole obvod']),
            eyeletCount: firstValue(rows, ['vypocitane pole ockovanie']),
            specificRequirements: firstValue(rows, ['specificke poziadavky']),
            quantity
        };
        details.fileNames = details.uploadFiles;
        details.alias = buildAlias(details.ropeMark);
        return Object.assign(details, dimensions);
    }

    api.registerDetector({
        id: '49ban',
        displayName: '49ban Bannery',
        tokens: [
            'alias', 'size', 'sizeAlias', 'quantity', 'vp', 'code', 'productCode', 'express',
            'type', 'bannerType', 'material', 'widthRaw', 'heightRaw', 'widthCm', 'heightCm',
            'graphicDesign', 'uploadFiles', 'fileNames', 'eyelet', 'eyeletPlacement', 'eyeletValues',
            'gluing', 'gluingDetail', 'gluingValues', 'reinforcedEdge', 'rope', 'ropeMeters', 'ropeMark',
            'materialConsumption', 'perimeter', 'eyeletCount', 'specificRequirements', 'original', 'ext'
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
            return code === '49ban'
                || /\b49ban\b/i.test(text)
                || text.includes('49ban - bannery')
                || text.includes('material banneru')
                || text.includes('pocet kusov bannerov')
                || (text.includes('jednostranny banner') && text.includes('rozmery'));
        },
        detect() {
            const details = parseDetails();
            const express = detectExpressToken();
            const alias = details.alias || 'ban';
            const left = buildLeft(alias, details.quantity);
            const quantity = details.quantity ? `${details.quantity}ks` : '1ks';
            return {
                detector: '49ban',
                left,
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
                    detector: '49ban',
                    productCode: '49ban',
                    outputAlias: left,
                    sizeAlias: details.sizeAlias,
                    topBadge: express,
                    params: Object.assign({}, details, { alias, express, code: '49ban', productCode: '49ban' })
                },
                debug: Object.assign({}, details, { alias, express, code: '49ban', productCode: '49ban' })
            };
        }
    });
})();