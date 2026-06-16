(function () {
    'use strict';

    const api = window.MaterialDetectorAPI;
    if (!api) return;

    api.registerDetector({
        id: 'common_size',
        match(internalCode, context) {
            return !internalCode && !!api.detectUniversalSizeAlias(context);
        },
        detect(context) {
            const sizeAlias = api.detectUniversalSizeAlias(context);
            if (!sizeAlias) return null;
            const left = api.stripSizeUnitSuffix(sizeAlias).replace('x', ' ');
            return {
                detector: 'common_size',
                left,
                top: '',
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
                    topBadge: '',
                    params: { sizeAlias }
                },
                debug: { sizeAlias }
            };
        }
    });
})();