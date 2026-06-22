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

    function hasStiffenerSelected(detailInfo) {
        const root = detailInfo || document;
        const select = root.querySelector && root.querySelector('select[name="FO_STIFFENER"]');
        if (!select) return false;
        return String(select.value || '').trim() !== '';
    }

    function detectExpressToken() {
        const badges = Array.from(document.querySelectorAll('.badge'));
        return badges.some(badge => api.clean(badge.textContent).toUpperCase() === 'EXPR') ? 'EXPR' : '';
    }

    function joinBadges() {
        return Array.from(arguments).filter(Boolean).join(' ');
    }

    function addStiffenerMark(displayAlias) {
        return String(displayAlias || '').replace(/^(\d+\s+\d+)/, '$1+');
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
        tokens: ['alias', 'size', 'quantity', 'vp', 'code', 'kind', 'canvas', 'giftPack', 'stiffener', 'express', 'displayAlias', 'original', 'ext'],
        match(internalCode) {
            return /^48(?:r|rp|fh|x)/i.test(String(internalCode || ''));
        },
        detect(context) {
            const parsed = parseCode(context.internalCode);
            if (!parsed) return null;
            const canvas = parsed.kind === 'regular' && api.hasCanvasSelected(context.detailInfo);
            const giftPack = api.hasGiftPack(context.detailInfo);
            const express = detectExpressToken();
            const stiffener = !!parsed.sizeAlias && hasStiffenerSelected(context.detailInfo);
            const displayAlias = stiffener ? addStiffenerMark(parsed.displayAlias) : parsed.displayAlias;
            const left = `${displayAlias}${canvas ? ' C' : ''}`.trim();
            const top = joinBadges(giftPack ? 'DBAL' : '', express);
            return {
                detector: 'fotoobrazy',
                left,
                top,
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
                    topBadge: top,
                    params: { code: parsed.code, kind: parsed.kind, canvas, giftPack, stiffener, express, sizeAlias: parsed.sizeAlias, displayAlias }
                },
                debug: { code: parsed.code, parsed, kind: parsed.kind, canvas, giftPack, stiffener, express, displayAlias }
            };
        }
    });
})();