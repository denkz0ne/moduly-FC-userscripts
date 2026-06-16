(function () {
    'use strict';

    const api = window.MaterialDetectorAPI;
    if (!api) return;

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
        return { quantity, colorCode, material, materialAlias, folding };
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
        match(internalCode) {
            return String(internalCode || '').toLowerCase() === '41tv';
        },
        detect() {
            const params = api.parseZdParams();
            const details = parseDetails(params);
            const left = buildAlias(details);
            const sizeAlias = api.detectUniversalSizeAlias();
            return {
                detector: '41tv',
                left,
                top: '',
                bottom: '',
                rename: {
                    alias: left.split('|')[0].trim(),
                    sizeAlias,
                    quantity: details.quantity ? `${details.quantity}ks` : '1ks'
                },
                state: {
                    detector: '41tv',
                    productCode: '41tv',
                    outputAlias: left,
                    sizeAlias,
                    topBadge: '',
                    params: Object.assign({}, details, { sizeAlias })
                },
                debug: details
            };
        }
    });
})();