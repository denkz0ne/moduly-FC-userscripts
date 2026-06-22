(function () {
    'use strict';

    const api = window.MaterialDetectorAPI;
    if (!api) return;

    function detectExpressToken() {
        const badges = Array.from(document.querySelectorAll('.badge'));
        return badges.some(badge => api.clean(badge.textContent).toUpperCase() === 'EXPR') ? 'EXPR' : '';
    }

    api.registerDetector({
        id: 'common_size',
        tokens: ['alias', 'size', 'quantity', 'vp', 'express', 'original', 'ext'],
        match(internalCode, context) {
            return !internalCode && !!api.detectUniversalSizeAlias(context);
        },
        detect(context) {
            const sizeAlias = api.detectUniversalSizeAlias(context);
            if (!sizeAlias) return null;
            const express = detectExpressToken();
            const left = api.stripSizeUnitSuffix(sizeAlias).replace('x', ' ');
            return {
                detector: 'common_size',
                left,
                top: express,
                bottom: '',
                rename: {
                    alias: left,
                    sizeAlias,
                    quantity: '1ks'
                },
                state: {
                    detector: 'common_size',
                    productCode: 'fallback',
                    outputAlias: left,
                    sizeAlias,
                    topBadge: express,
                    params: { express, sizeAlias }
                },
                debug: { express, sizeAlias }
            };
        }
    });
})();