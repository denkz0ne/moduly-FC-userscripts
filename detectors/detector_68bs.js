(function () {
    'use strict';

    const api = window.MaterialDetectorAPI;
    if (!api) return;

    function detectExpressToken() {
        const badges = Array.from(document.querySelectorAll('.badge'));
        return badges.some(badge => api.clean(badge.textContent).toUpperCase() === 'EXPR') ? 'EXPR' : '';
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

    function parseQuantity(params) {
        const raw = getExactParam(params, ['pocet kusov']);
        const match = String(raw || '').match(/\d+/);
        return match ? match[0] : '';
    }

    function optionMode(option) {
        const normalized = api.normalizeKey(option);
        if (normalized.includes('komplet')) return 'complete';
        if (normalized.includes('len tlac')) return 'print';
        if (normalized.includes('len konstrukcia')) return 'construction';
        return '';
    }

    function qualityAlias(quality) {
        const normalized = api.normalizeKey(quality);
        if (normalized.includes('economy')) return 'eco';
        if (normalized.includes('standard')) return 'std';
        if (normalized.includes('premium')) return 'p';
        return '';
    }

    function printBaseAlias(constructionType) {
        const normalized = api.normalizeKey(constructionType);
        if (normalized.includes('banner display')) return 'bd';
        return 'rld';
    }

    function constructionOnlyAlias(constructionType) {
        const normalized = api.normalizeKey(constructionType);
        if (normalized.includes('banner display')) return 'bd';
        if (normalized.includes('100') && normalized.includes('200')) return 'rollup100';
        if (normalized.includes('85') && normalized.includes('200')) return 'rollup85';
        if (normalized.includes('80') && normalized.includes('200')) return 'rollup80';
        if (normalized.includes('100')) return 'rollup100';
        if (normalized.includes('85')) return 'rollup85';
        if (normalized.includes('80')) return 'rollup80';
        return 'rollup';
    }

    function buildAlias(details) {
        const mode = details.optionMode;
        const q = details.qualityAlias;
        if (mode === 'construction') return details.constructionOnlyAlias;
        const base = details.printAlias || 'rld';
        const quality = q ? ` ${q}` : '';
        if (mode === 'complete') return `${base}${quality}+K`;
        return `${base}${quality}`;
    }

    function buildLeft(alias, quantity) {
        const qty = parseInt(quantity, 10);
        return !Number.isNaN(qty) && qty >= 2 ? `${alias} | ${qty}ks` : alias;
    }

    function parseDetails(params) {
        const option = getParam(params, ['moznosti']);
        const constructionType = getParam(params, ['typ konstrukcia + platno', 'typ konstrukcia', 'typ']);
        const quality = getParam(params, ['platno kvalita']);
        const mode = optionMode(option);
        const qAlias = qualityAlias(quality);
        const printAlias = printBaseAlias(constructionType);
        const constructionAlias = constructionOnlyAlias(constructionType);
        const quantity = parseQuantity(params);
        const details = {
            option,
            optionMode: mode,
            constructionType,
            constructionAlias,
            constructionOnlyAlias: constructionAlias,
            printAlias,
            quality,
            qualityAlias: qAlias,
            printType: getParam(params, ['tlac']),
            printArea: getParam(params, ['vypocitane pole tlac']),
            printSubstrate: getParam(params, ['tlacovy podklad']),
            substrateFiles: getParam(params, ['subory s podkladmi', 'nahrajte subor', 'nahrat subor', 'subory']),
            extraService: getParam(params, ['doplnkova sluzba']),
            specificRequirements: getParam(params, ['specificke poziadavky']),
            quantity
        };
        details.alias = buildAlias(details);
        details.fileNames = details.substrateFiles;
        return details;
    }

    api.registerDetector({
        id: '68bs',
        displayName: '68bs Rollup/Display',
        tokens: [
            'alias', 'quantity', 'vp', 'code', 'productCode', 'express',
            'option', 'optionMode', 'constructionType', 'constructionAlias', 'constructionOnlyAlias',
            'printAlias', 'quality', 'qualityAlias', 'printType', 'printArea', 'printSubstrate',
            'substrateFiles', 'fileNames', 'extraService', 'specificRequirements', 'original', 'ext'
        ],
        defaultRenameTemplate: [
            { type: 'token', value: 'alias' },
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
            return code === '68bs' || /\b68bs\b/i.test(text) || text.includes('rollup/display') || text.includes('rollup display');
        },
        detect() {
            const params = api.parseZdParams();
            const details = parseDetails(params);
            const express = detectExpressToken();
            const alias = details.alias || 'rld';
            const left = buildLeft(alias, details.quantity);
            const quantity = details.quantity ? `${details.quantity}ks` : '1ks';
            return {
                detector: '68bs',
                left,
                top: express,
                bottom: '',
                rename: {
                    enabled: true,
                    pattern: '{alias}_{quantity}_{vp} {original}.{ext}',
                    alias,
                    sizeAlias: '',
                    quantity
                },
                state: {
                    detector: '68bs',
                    productCode: '68bs',
                    outputAlias: left,
                    sizeAlias: '',
                    topBadge: express,
                    params: Object.assign({}, details, { alias, express, code: '68bs', productCode: '68bs' })
                },
                debug: Object.assign({}, details, { alias, express, code: '68bs', productCode: '68bs' })
            };
        }
    });
})();