(function () {
    'use strict';

    const api = window.MaterialDetectorAPI;
    if (!api) return;

    function splitDigits(digits) {
        const raw = String(digits || '').trim();
        if (!/^\d{4,6}$/.test(raw)) return null;
        const splitAt = raw.length === 5 ? 3 : raw.length / 2;
        const left = String(Number(raw.slice(0, splitAt)));
        const right = String(Number(raw.slice(splitAt)));
        if (!left || !right) return null;
        return { left, right, displaySize: `${left} ${right}`, sizeAlias: `${left}x${right}_cm` };
    }

    function parseCode(code) {
        const lower = String(code || '').toLowerCase();
        if (lower === '48xk') {
            return { kind: 'hexa', code: lower, displayAlias: 'HEXA', sizeAlias: '' };
        }
        if (/^48x[146]$/.test(lower)) {
            return { kind: 'hexa-premium', code: lower, displayAlias: 'HEXA P', sizeAlias: '' };
        }
        if (/^48fh\d{4,6}$/.test(lower)) {
            const split = splitDigits(lower.replace(/^48fh/, ''));
            if (!split) return null;
            return { kind: 'hod', code: lower, displayAlias: `${split.displaySize} HOD`, sizeAlias: split.sizeAlias };
        }
        const match = lower.match(/^48r(p?)(\d{4,6})$/);
        if (!match) return null;
        const premium = !!match[1];
        const split = splitDigits(match[2]);
        if (!split) return null;
        return {
            kind: premium ? 'premium' : 'regular',
            code: lower,
            displayAlias: `${split.displaySize}${premium ? ' P' : ''}`,
            sizeAlias: split.sizeAlias
        };
    }

    api.registerDetector({
        id: 'fotoobrazy',
        displayName: 'Fotoobrazy',
        tokens: ['alias', 'size', 'quantity', 'vp', 'code', 'kind', 'canvas', 'giftPack', 'displayAlias', 'original', 'ext'],
        match(internalCode) {
            return /^48(?:r|rp|fh|x)/i.test(String(internalCode || ''));
        },
        detect(context) {
            const parsed = parseCode(context.internalCode);
            if (!parsed) return null;
            const canvas = parsed.kind === 'regular' && api.hasCanvasSelected(context.detailInfo);
            const giftPack = api.hasGiftPack(context.detailInfo);
            const left = `${parsed.displayAlias}${canvas ? ' C' : ''}`.trim();
            return {
                detector: 'fotoobrazy',
                left,
                top: giftPack ? 'DBAL' : '',
                bottom: '',
                rename: {
                    alias: parsed.code,
                    sizeAlias: parsed.sizeAlias || left,
                    quantity: '1ks'
                },
                state: {
                    detector: 'fotoobrazy',
                    productCode: parsed.code,
                    outputAlias: parsed.code,
                    sizeAlias: parsed.sizeAlias,
                    topBadge: giftPack ? 'DBAL' : '',
                    params: { code: parsed.code, kind: parsed.kind, canvas, giftPack, sizeAlias: parsed.sizeAlias, displayAlias: parsed.displayAlias }
                },
                debug: { code: parsed.code, parsed, kind: parsed.kind, canvas, giftPack, displayAlias: parsed.displayAlias }
            };
        }
    });
})();