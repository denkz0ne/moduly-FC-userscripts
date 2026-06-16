(function () {
    'use strict';

    const api = window.MaterialDetectorAPI;
    if (!api) return;

    api.registerDetector({
        id: 'hexa',
        match(internalCode) {
            return /^48x(?:k|1|4|6)$/i.test(String(internalCode || ''));
        },
        detect(context) {
            const code = String(context.internalCode || '').toLowerCase();
            const premium = /^48x[146]$/.test(code);
            const left = premium ? 'HEXA P' : 'HEXA';
            return {
                detector: 'hexa',
                left,
                top: '',
                bottom: '',
                rename: {
                    alias: code || left,
                    sizeAlias: left,
                    quantity: '1ks'
                },
                state: {
                    detector: 'hexa',
                    productCode: code,
                    outputAlias: code || left,
                    sizeAlias: '',
                    topBadge: '',
                    params: { code, premium }
                },
                debug: { code, premium }
            };
        }
    });
})();