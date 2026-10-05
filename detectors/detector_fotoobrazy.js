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

    function getZdRows(root) {
        const scope = (root && root.querySelector && root.querySelector('#VPZDParams'))
            || document.querySelector('#zd-form-container #VPZDParams');
        if (!scope) return [];
        return Array.from(scope.querySelectorAll(':scope > div.flex')).map(row => {
            const cells = row.querySelectorAll(':scope > div');
            if (cells.length < 2) return null;
            const label = api.clean(cells[0].textContent || '');
            const values = Array.from(cells[1].querySelectorAll('.whitespace-pre-line'))
                .map(el => api.clean(el.textContent || ''))
                .filter(Boolean);
            return { label, key: api.normalizeKey(label), value: values.join(' | ') || api.clean(cells[1].textContent || '') };
        }).filter(Boolean);
    }

    function getZdValue(root, labels) {
        const keys = labels.map(api.normalizeKey);
        const row = getZdRows(root).find(item => keys.some(key => item.key.includes(key)));
        return row ? row.value : '';
    }

    function parseClockFromDetail(code, detailInfo) {
        const format = getZdValue(detailInfo, ['format platna']);
        const match = String(format || '').replace(',', '.').match(/(\d+(?:\.\d+)?)\s*x\s*(\d+(?:\.\d+)?)/i);
        if (!match) return null;
        const left = String(Number(match[1])).replace('.', ',');
        const right = String(Number(match[2])).replace('.', ',');
        const displaySize = left + ' ' + right;
        const sizeAlias = (left + 'x' + right + '_cm').replace(',', '.');
        return { kind: 'hod', code: String(code || '48fh').toLowerCase(), displayAlias: displaySize + ' + hod', sizeAlias };
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
            return { kind: 'hod', code: lower, displayAlias: `${split.displaySize} + hod`, sizeAlias: split.sizeAlias };
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
            let parsed = parseCode(context.internalCode);
            if (!parsed && /^48fh/i.test(String(context.internalCode || ''))) {
                parsed = parseClockFromDetail(context.internalCode, context.detailInfo);
            }
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