(function () {
    'use strict';

    const api = window.MaterialDetectorAPI;
    if (!api) return;

    function pickWeight(text) {
        const match = String(text || '').match(/\b(120|135|140|180|200|230|240|260|280|380)\s*g\b/i);
        return match ? `${match[1]}g` : '';
    }

    function parseDetails(params) {
        const mediaTypeRaw = api.getParamValueByLabelContains(params, ['typ tlacoveho media']);
        const mediaType = api.normalizeKey(mediaTypeRaw);
        const allValues = api.getAllParamValues(params).map(api.normalizeKey);
        let variant = '';
        let weight = '';

        if (mediaType.includes('economy plagat')) {
            const gram = api.getParamValueByLabelContains(params, ['gramaz papiera']);
            weight = pickWeight(gram) || pickWeight(allValues.join(' '));
        } else if (mediaType.includes('plagatovy papier')) {
            const gram = api.getParamValueByLabelContains(params, ['gramaz papiera']);
            weight = pickWeight(gram) || pickWeight(allValues.join(' '));
        } else if (mediaType.includes('fotopapier')) {
            if (allValues.some(v => v.includes('pololesk'))) variant = 'pololeskly';
            else if (allValues.some(v => v.includes('lesk'))) variant = 'leskly';
            else if (allValues.some(v => v.includes('matn'))) variant = 'matny';
            const gramCandidate = allValues.find(v => /\b(180|200|230|240|260)\s*g\b/i.test(v)) || '';
            weight = pickWeight(gramCandidate);
        } else if (mediaType.includes('platno')) {
            const canvasType = api.getParamValueByLabelContains(params, ['typ-gramaz platna']);
            if (canvasType) variant = api.normalizeKey(canvasType);
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

        const quantityRaw = api.getParamValueByLabelContains(params, ['pocet kusov', 'pocet rovnakych vytlackov']);
        const quantity = (String(quantityRaw || '').match(/\d+/) || [null])[0] || '';
        return { mediaTypeRaw, mediaType, variant, weight, quantity };
    }

    function buildAlias(details) {
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
        const baseAlias = api.resolveMaterialAlias(key) || details.mediaTypeRaw || '42foto/web';
        const qty = parseInt(details.quantity, 10);
        if (!Number.isNaN(qty) && qty >= 2) return `${baseAlias} | ${qty}ks`;
        return baseAlias;
    }

    api.registerDetector({
        id: '42foto/web',
        match(internalCode) {
            return String(internalCode || '').toLowerCase() === '42foto/web';
        },
        detect() {
            const params = api.parseZdParams();
            const details = parseDetails(params);
            const left = buildAlias(details);
            const sizeAlias = api.detectUniversalSizeAlias();
            return {
                detector: '42foto/web',
                left,
                top: '',
                bottom: '',
                rename: {
                    enabled: true,
                    pattern: '{alias}_{size}_{quantity}_{vp} {original}.{ext}',
                    alias: left.split('|')[0].trim(),
                    sizeAlias,
                    quantity: details.quantity ? `${details.quantity}ks` : '1ks'
                },
                state: {
                    detector: '42foto/web',
                    productCode: '42foto/web',
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