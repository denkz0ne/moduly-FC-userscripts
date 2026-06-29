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

    function extractCode(valueCell) {
        if (!valueCell) return '';
        const codeEl = Array.from(valueCell.querySelectorAll('.text-gray, [class*="text-gray"]'))
            .find(el => /#?FV\w+/i.test(el.textContent || ''));
        const match = (codeEl ? codeEl.textContent : valueCell.textContent || '').match(/#?\s*([A-Z]{1,4}\d{2,6})/i);
        return match ? `#${match[1]}` : '';
    }

    function getParam(params, labels) {
        return api.getParamValueByLabelContains(params, labels);
    }

    function getExactParam(params, labels) {
        if (!params) return '';
        const normalizedLabels = labels.map(api.normalizeKey);
        for (const [key, item] of Object.entries(params)) {
            if (normalizedLabels.includes(key)) return item.value || '';
        }
        return '';
    }

    function getParamRowMeta(labelPatterns) {
        const root = getZdRoot();
        if (!root) return { value: '', code: '' };
        const patterns = labelPatterns.map(api.normalizeKey);
        const rows = Array.from(root.querySelectorAll(':scope > div.flex'));
        for (const row of rows) {
            const cells = row.querySelectorAll(':scope > div');
            if (cells.length < 2) continue;
            const label = api.normalizeKey(cells[0].textContent || '');
            if (!patterns.some(pattern => label.includes(pattern))) continue;
            const values = Array.from(cells[1].querySelectorAll('.whitespace-pre-line'))
                .map(el => api.clean(el.textContent || ''))
                .filter(Boolean);
            const value = values.length ? values.join(' | ') : api.clean(cells[1].textContent || '');
            return { value, code: extractCode(cells[1]) };
        }
        return { value: '', code: '' };
    }

    function extractNumber(value) {
        const match = String(value || '').replace(',', '.').match(/(\d+(?:\.\d+)?)/);
        return match ? match[1] : '';
    }

    function parseSizeFromParams(params) {
        const raw = getParam(params, ['vlastny rozmer folie', 'rozmer folie', 'rozmer']);
        const values = String(raw || '').split('|').map(api.clean).filter(Boolean);
        const widthRaw = values[0] || '';
        const heightRaw = values[1] || '';
        const widthMm = extractNumber(widthRaw);
        const heightMm = extractNumber(heightRaw);
        const sizeAlias = widthMm && heightMm ? api.parseSizeAlias(`${widthMm}x${heightMm} mm`) : api.detectUniversalSizeAlias();
        const size = api.stripSizeUnitSuffix(sizeAlias);
        const parts = size.match(/^(\d+(?:[,.]\d+)?)x(\d+(?:[,.]\d+)?)$/);
        return {
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

    function parseQuantity(params) {
        const raw = getExactParam(params, ['pocet kusov']);
        const match = String(raw || '').match(/\d+/);
        return match ? match[0] : '';
    }

    function parseCutCount(params) {
        const raw = getParam(params, ['pocet rezov na format', 'pocet rezov']);
        const match = String(raw || '').match(/\d+/);
        return match ? match[0] : '';
    }

    function buildLeft(quantity) {
        const qty = parseInt(quantity, 10);
        return !Number.isNaN(qty) && qty >= 2 ? `mag | ${qty}ks` : 'mag';
    }

    function parseDetails(params) {
        const sticker = getParamRowMeta(['typ nalepky']);
        const magneticFoil = getParamRowMeta(['magneticka folia']);
        const size = parseSizeFromParams(params);
        const quantity = parseQuantity(params);
        const cutCount = parseCutCount(params);
        const details = {
            format: getParam(params, ['format folie']),
            foilFormat: getParam(params, ['format folie']),
            stickerType: sticker.value,
            stickerTypeCode: sticker.code,
            magneticFoil: magneticFoil.value,
            magneticFoilCode: magneticFoil.code,
            areaM2: getParam(params, ['vypocitane pole vlastny rozmer']),
            magnetArea: getParam(params, ['vypocitane pole magnet folia']),
            graphicDesign: getParam(params, ['navrh grafiky potlace']),
            uploadFiles: getParam(params, ['nahrat subory', 'subory']),
            cutType: getParam(params, ['typ orezu']),
            cutting: getParam(params, ['rezanie']),
            cutCount,
            cutLineSource: getParam(params, ['podklady pre orez']),
            cutGraphicWork: getParam(params, ['graficke prace orez']),
            cutFileUpload: getParam(params, ['nahrat subor s orezovou linkou']),
            specificRequirements: getParam(params, ['specificke poziadavky']),
            quantity
        };
        details.fileNames = details.uploadFiles;
        return Object.assign(details, size);
    }

    api.registerDetector({
        id: '67mf',
        displayName: '67mf Magneticka folia',
        tokens: [
            'alias', 'size', 'sizeAlias', 'quantity', 'vp', 'code', 'productCode', 'express',
            'format', 'foilFormat', 'stickerType', 'stickerTypeCode', 'magneticFoil', 'magneticFoilCode',
            'width', 'height', 'widthMm', 'heightMm', 'widthCm', 'heightCm', 'widthRaw', 'heightRaw',
            'areaM2', 'magnetArea', 'graphicDesign', 'uploadFiles', 'fileNames', 'cutType', 'cutting',
            'cutCount', 'cutLineSource', 'cutGraphicWork', 'cutFileUpload', 'specificRequirements', 'original', 'ext'
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
            return code === '67mf' || /\b67mf\b/i.test(text) || text.includes('magneticka folia s potlacou');
        },
        detect() {
            const params = api.parseZdParams();
            const details = parseDetails(params);
            const express = detectExpressToken();
            const left = buildLeft(details.quantity);
            const quantity = details.quantity ? `${details.quantity}ks` : '1ks';
            return {
                detector: '67mf',
                left,
                top: express,
                bottom: '',
                rename: {
                    enabled: true,
                    pattern: '{alias}_{size}_{quantity}_{vp} {original}.{ext}',
                    alias: 'mag',
                    sizeAlias: details.sizeAlias,
                    quantity
                },
                state: {
                    detector: '67mf',
                    productCode: '67mf',
                    outputAlias: left,
                    sizeAlias: details.sizeAlias,
                    topBadge: express,
                    params: Object.assign({}, details, { alias: 'mag', express, code: '67mf', productCode: '67mf' })
                },
                debug: Object.assign({}, details, { alias: 'mag', express, code: '67mf', productCode: '67mf' })
            };
        }
    });
})();