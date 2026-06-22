(function () {
    'use strict';

    const api = window.MaterialDetectorAPI;
    if (!api) return;

    function detectExpressToken() {
        const badges = Array.from(document.querySelectorAll('.badge'));
        return badges.some(badge => api.clean(badge.textContent).toUpperCase() === 'EXPR') ? 'EXPR' : '';
    }

    function parseDetails(params) {
        const printType = api.getParamValueByLabelContains(params, ['druh tlace']);
        const material = api.getParamValueByLabelContains(params, ['tlacove medium', 'tlacove medium pre', 'medium pre', 'material']);
        const materialAlias = api.resolveMaterialAlias(material) || material;
        const quantityText = api.getParamValueByLabelContains(params, ['pocet kusov', 'pocet rovnakych vytlackov']);
        const folding = api.getParamValueByLabelContains(params, ['skladanie']);
        const quantity = (String(quantityText || '').match(/\d+/) || [null])[0] || '';
        const normalizedPrintType = api.normalizeKey(printType);
        let colorCode = '';
        if (normalizedPrintType.includes('fareb')) colorCode = 'f';
        else if (normalizedPrintType.includes('ciernobiel') || normalizedPrintType.includes('cb')) colorCode = 'cb';
        return { quantity, colorCode, material, materialAlias, folding, printType };
    }

    function hasFoldingSelected(foldingText) {
        const normalized = api.normalizeKey(foldingText);
        if (!normalized) return false;
        if (normalized === 'nie') return false;
        if (normalized.includes('bez')) return false;
        return true;
    }

    function buildAlias(details) {
        let result = (details.materialAlias || details.material || '41tv').trim();
        if (details.colorCode) result += ` ${details.colorCode}`;
        if (hasFoldingSelected(details.folding)) result += ' + skl';
        const qty = parseInt(details.quantity, 10);
        if (!Number.isNaN(qty) && qty >= 2) result += ` | ${qty}ks`;
        return result;
    }

    api.registerDetector({
        id: '41tv',
        displayName: '41tv',
        tokens: ['alias', 'size', 'quantity', 'vp', 'material', 'materialAlias', 'colorCode', 'folding', 'printType', 'express', 'original', 'ext'],
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
        match(internalCode) {
            return String(internalCode || '').toLowerCase() === '41tv';
        },
        detect() {
            const params = api.parseZdParams();
            const details = parseDetails(params);
            const express = detectExpressToken();
            const left = buildAlias(details);
            const sizeAlias = api.detectUniversalSizeAlias();
            return {
                detector: '41tv',
                left,
                top: express,
                bottom: '',
                rename: {
                    enabled: true,
                    pattern: '{alias}_{size}_{quantity}_{vp} {original}.{ext}',
                    alias: left.split('|')[0].trim(),
                    sizeAlias,
                    quantity: details.quantity ? `${details.quantity}ks` : '1ks'
                },
                state: {
                    detector: '41tv',
                    productCode: '41tv',
                    outputAlias: left,
                    sizeAlias,
                    topBadge: express,
                    params: Object.assign({}, details, { express, sizeAlias })
                },
                debug: Object.assign({}, details, { express })
            };
        }
    });
})();