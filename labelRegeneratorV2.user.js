// ==UserScript==
// @name         labelRegenerator V2
// @namespace    https://moduly.faxcopy.sk/
// @author       mato e.
// @version      2.0.3
// @description  V2 konfigurator stitku: view/edit rezim, live bloky, skryvanie prazdnych prvkov a kompatibilne zony.
// @updateURL    https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/labelRegeneratorV2.user.js
// @downloadURL  https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/labelRegeneratorV2.user.js
// @match        https://moduly.faxcopy.sk/vyrobne_prikazy/detail/printLabel/*
// @match        https://moduly.faxcopy.sk/vyrobne_prikazy/detail/index/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function () {
    'use strict';

    const LABEL_W = 62;
    const LABEL_H = 45;
    const SRC_W = 86;
    const SRC_H = 50;
    const ZOOM = 1.45;
    const STORE = 'labelRegeneratorLayoutConfigV201';
    const STORE_OPEN = 'labelRegeneratorPanelOpen';
    const STORE_MODE = 'labelRegeneratorMode';
    const STORE_SEL = 'labelRegeneratorSelectedBlock';
    const VALUE_PREFIX = 'labelRegeneratorValue:';

    const BLOCKS = [
        block('testoleft', ['TM_testoLeft'], 'Testo left', 1, 35.4, 41, 5.6, 4.8, 'left'),
        block('testoright', ['TM_testoRight'], 'Testo right', 43, 35.4, 18, 5.6, 4.6, 'right'),
        block('TM_top', [], 'TM top', 40.5, 1.0, 20.5, 6.2, 4.7, 'right'),
        block('TM_bottom', [], 'TM bottom', 40.5, 7.6, 20.5, 6.2, 4.7, 'right')
    ];

    function block(key, aliases, title, x, y, w, h, fs, align) {
        return {
            key, aliases, title,
            id: 'lr-zone-' + key.replace(/_/g, '-').toLowerCase(),
            box: {
                x, y, w, h,
                z: 20,
                visible: true,
                paddingLeft: 1.2,
                paddingRight: 1.2,
                paddingTop: 0.3,
                paddingBottom: 0.3,
                borderWidth: 0,
                borderColor: '#999999',
                borderRadius: 0,
                backgroundColor: 'transparent'
            },
            text: {
                fontFamily: "'Roboto Condensed', Arial, sans-serif",
                fontSize: fs,
                fontWeight: 400,
                lineHeight: 1,
                letterSpacing: 0,
                scaleX: 100,
                textAlign: align,
                color: '#111111',
                backgroundColor: 'transparent',
                borderWidth: 0,
                borderColor: 'transparent',
                borderRadius: 0,
                paddingX: 0,
                paddingY: 0,
                uppercase: false
            }
        };
    }

    const state = {
        cfg: loadConfig(),
        mode: localStorage.getItem(STORE_MODE) === 'edit' ? 'edit' : 'view',
        open: localStorage.getItem(STORE_OPEN) === '1',
        selected: localStorage.getItem(STORE_SEL) || ''
    };

    function copy(v) { return JSON.parse(JSON.stringify(v)); }
    function defByKey(key) { return BLOCKS.find(b => b.key === key || b.aliases.includes(key)); }
    function keys(b) { return [b.key].concat(b.aliases); }

    function loadConfig() {
        const base = {};
        BLOCKS.forEach(b => base[b.key] = { box: copy(b.box), text: copy(b.text) });
        try {
            const raw = JSON.parse(localStorage.getItem(STORE) || '{}');
            Object.keys(raw).forEach(k => {
                const b = defByKey(k);
                if (!b) return;
                base[b.key] = merge(base[b.key], raw[k]);
            });
        } catch (e) {}
        return base;
    }

    function merge(a, b) {
        const out = copy(a);
        if (!b) return out;
        ['box', 'text'].forEach(group => {
            if (!b[group]) return;
            Object.keys(b[group]).forEach(k => out[group][k] = b[group][k]);
        });
        return out;
    }

    function saveConfig() {
        localStorage.setItem(STORE, JSON.stringify(state.cfg));
    }

    function mm(v) { return Number(v || 0).toFixed(2).replace(/\.00$/, '') + 'mm'; }
    function clean(v) { return String(v == null ? '' : v).replace(/\s+/g, ' ').trim(); }
    function num(v, fallback) { const n = parseFloat(v); return Number.isFinite(n) ? n : fallback; }

    function getValue(b) {
        for (const k of keys(b)) {
            if (window[k] != null && clean(window[k]) !== '') return clean(window[k]);
        }
        for (const k of keys(b)) {
            const v = localStorage.getItem(VALUE_PREFIX + k);
            if (clean(v) !== '') return clean(v);
        }
        return '';
    }

    function setValue(key, value) {
        const b = defByKey(key);
        if (!b) return;
        keys(b).forEach(k => {
            window[k] = value;
            localStorage.setItem(VALUE_PREFIX + k, value == null ? '' : String(value));
        });
        render();
    }

    function injectCss() {
        if (document.getElementById('label-regenerator-v2-style')) return;
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap';
        link.dataset.labelRegeneratorFont = 'roboto-condensed';
        document.head.appendChild(link);

        const s = document.createElement('style');
        s.id = 'label-regenerator-v2-style';
        s.textContent = `
            :root{--lr-label-w:${LABEL_W}mm;--lr-label-h:${LABEL_H}mm;--lr-edit-zoom:${ZOOM}}
            html.lr-v2-print,html.lr-v2-print body{margin:0!important;padding:0!important;width:var(--lr-label-w)!important;height:var(--lr-label-h)!important;overflow:hidden!important;background:#fff!important}
            #label{position:relative!important;width:var(--lr-label-w)!important;min-width:var(--lr-label-w)!important;max-width:var(--lr-label-w)!important;height:var(--lr-label-h)!important;min-height:var(--lr-label-h)!important;max-height:var(--lr-label-h)!important;box-sizing:border-box!important;overflow:hidden!important;border:0!important;margin-left:0!important;background:#fff!important;transform-origin:top left!important}
            #label-regenerator-base{position:absolute!important;left:0!important;top:0!important;width:${SRC_W}mm!important;height:${SRC_H}mm!important;transform-origin:top left!important;pointer-events:none!important;box-sizing:border-box!important}
            #label-regenerator-overlay{position:absolute!important;inset:0!important;z-index:2147483000!important;pointer-events:none!important;box-sizing:border-box!important}
            .lr-zone{position:absolute!important;box-sizing:border-box!important;overflow:hidden!important;background:transparent;border:0 solid transparent;display:block;pointer-events:none!important;white-space:nowrap!important}
            .lr-zone-text{display:block!important;width:100%!important;max-width:100%!important;overflow:hidden!important;text-overflow:clip!important;white-space:nowrap!important;box-sizing:border-box!important;transform-origin:center center!important}
            html.lr-edit #label{transform:scale(var(--lr-edit-zoom))!important;box-shadow:0 7px 24px rgba(0,0,0,.22)!important}
            html.lr-edit .lr-zone{border-style:solid!important;border-color:#888!important;background:rgba(255,255,255,.04)!important;pointer-events:auto!important;cursor:pointer!important}
            html.lr-edit .lr-zone.lr-selected{outline:2px solid #111!important;outline-offset:1px!important}
            #lr-cfg-button{position:fixed;right:28mm;top:6mm;z-index:2147483647;border:0;border-radius:999px;background:#111;color:#fff;font:700 14px Arial,sans-serif;letter-spacing:.04em;padding:9px 18px;box-shadow:0 10px 25px rgba(0,0,0,.22);cursor:pointer}
            #lr-cfg-panel{position:fixed;z-index:2147483646;width:82mm;max-height:88vh;overflow:auto;background:#fff;color:#111;border:1px solid #222;border-radius:12px;box-shadow:0 18px 50px rgba(0,0,0,.28);font:12px Arial,sans-serif;padding:12px;box-sizing:border-box}
            #lr-cfg-panel[hidden]{display:none!important}
            #lr-cfg-panel h3{margin:0 0 9px;font-size:15px} #lr-cfg-panel h4{margin:13px 0 7px;font-size:12px;text-transform:uppercase;letter-spacing:.05em;color:#555}
            #lr-cfg-panel .row{display:grid;grid-template-columns:1fr 29mm;gap:7px;align-items:center;margin:5px 0} #lr-cfg-panel input,#lr-cfg-panel select{width:100%;box-sizing:border-box;padding:4px;border:1px solid #aaa;border-radius:5px;background:#fff;color:#111}
            #lr-cfg-panel input[type=color]{padding:0;height:27px} #lr-cfg-panel input[type=checkbox]{width:auto} #lr-cfg-panel .bar{display:flex;gap:6px;flex-wrap:wrap;margin:8px 0}
            #lr-cfg-panel button{border:1px solid #222;border-radius:999px;background:#111;color:#fff;padding:6px 10px;cursor:pointer;font-weight:700} #lr-cfg-panel button.light{background:#fff;color:#111}
            #lr-cfg-panel button.active{background:#0b66ff;border-color:#0b66ff;color:#fff} #lr-cfg-panel .muted{color:#666;font-size:11px;line-height:1.35}
            @media print{@page{size:${LABEL_W}mm ${LABEL_H}mm;margin:0}html,body{margin:0!important;padding:0!important;width:${LABEL_W}mm!important;height:${LABEL_H}mm!important;overflow:hidden!important}#label{transform:none!important;break-inside:avoid!important;page-break-inside:avoid!important;box-shadow:none!important}#lr-cfg-button,#lr-cfg-panel{display:none!important}}
        `;
        document.head.appendChild(s);
    }

    function prepareLabel() {
        const label = document.getElementById('label');
        if (!label) return null;
        label.style.position = 'relative';
        label.style.width = LABEL_W + 'mm';
        label.style.height = LABEL_H + 'mm';
        label.style.overflow = 'hidden';
        label.style.border = '0';

        let base = document.getElementById('label-regenerator-base');
        if (!base) {
            base = document.createElement('div');
            base.id = 'label-regenerator-base';
            while (label.firstChild) base.appendChild(label.firstChild);
            label.appendChild(base);
        }
        base.style.transform = 'scale(' + Math.min(LABEL_W / SRC_W, LABEL_H / SRC_H) + ')';

        const obj = label.querySelector('.obj');
        if (obj) obj.style.height = '16mm';
        const rot = label.querySelector('#predajna .rotate,.rotate');
        if (rot) rot.style.fontSize = '27pt';
        return label;
    }

    function ensureOverlay(label) {
        let ov = document.getElementById('label-regenerator-overlay');
        if (!ov) {
            ov = document.createElement('div');
            ov.id = 'label-regenerator-overlay';
            label.appendChild(ov);
        }
        BLOCKS.forEach(b => {
            let z = document.getElementById(b.id);
            if (!z) {
                z = document.createElement('div');
                z.id = b.id;
                z.className = 'lr-zone lr-block-' + b.key.replace(/_/g, '-').toLowerCase();
                z.dataset.zone = b.key;
                z.dataset.aliases = b.aliases.join(',');
                z.dataset.blockKey = b.key;
                const t = document.createElement('span');
                t.className = 'lr-zone-text lr-text-' + b.key.replace(/_/g, '-').toLowerCase();
                z.appendChild(t);
                ov.appendChild(z);
            }
        });
        return ov;
    }

    function applyStyles(z, t, b, hasValue) {
        const c = state.cfg[b.key] || { box: b.box, text: b.text };
        const box = c.box;
        const tx = c.text;
        z.style.left = mm(box.x);
        z.style.top = mm(box.y);
        z.style.width = mm(box.w);
        z.style.height = mm(box.h);
        z.style.zIndex = box.z || 20;
        z.style.padding = `${mm(box.paddingTop)} ${mm(box.paddingRight)} ${mm(box.paddingBottom)} ${mm(box.paddingLeft)}`;
        z.style.borderWidth = (state.mode === 'edit' || hasValue) ? Math.max(0, num(box.borderWidth, 0)) + 'px' : '0';
        z.style.borderColor = box.borderColor || 'transparent';
        z.style.borderRadius = mm(box.borderRadius);
        z.style.backgroundColor = box.backgroundColor || 'transparent';
        z.style.textAlign = tx.textAlign || 'left';
        z.style.display = (box.visible && (hasValue || state.mode === 'edit')) ? 'block' : 'none';
        z.classList.toggle('lr-selected', state.mode === 'edit' && state.selected === b.key);
        z.dataset.empty = hasValue ? 'false' : 'true';

        t.style.fontFamily = tx.fontFamily || "'Roboto Condensed', Arial, sans-serif";
        t.style.fontSize = mm(tx.fontSize);
        t.style.fontWeight = tx.fontWeight || 400;
        t.style.lineHeight = tx.lineHeight || 1;
        t.style.letterSpacing = mm(tx.letterSpacing);
        t.style.textAlign = tx.textAlign || 'left';
        t.style.color = tx.color || '#111';
        t.style.backgroundColor = tx.backgroundColor || 'transparent';
        t.style.border = Math.max(0, num(tx.borderWidth, 0)) + 'px solid ' + (tx.borderColor || 'transparent');
        t.style.borderRadius = mm(tx.borderRadius);
        t.style.padding = `${mm(tx.paddingY)} ${mm(tx.paddingX)}`;
        t.style.transform = 'scaleX(' + (num(tx.scaleX, 100) / 100) + ')';
        t.style.transformOrigin = tx.textAlign === 'right' ? 'right center' : tx.textAlign === 'center' ? 'center center' : 'left center';
        t.style.visibility = hasValue ? 'visible' : 'hidden';
    }

    function render() {
        const label = prepareLabel();
        if (!label) return;
        ensureOverlay(label);
        document.documentElement.classList.toggle('lr-edit', state.mode === 'edit');
        document.documentElement.classList.add('lr-v2-print');
        BLOCKS.forEach(b => {
            const z = document.getElementById(b.id);
            if (!z) return;
            const t = z.querySelector('.lr-zone-text');
            const raw = getValue(b);
            const c = state.cfg[b.key] || { box: b.box, text: b.text };
            const text = c.text.uppercase ? raw.toUpperCase() : raw;
            t.textContent = text;
            applyStyles(z, t, b, clean(text) !== '');
        });
        buildPanel();
        positionPanel();
    }

    function setMode(mode) {
        state.mode = mode === 'edit' ? 'edit' : 'view';
        localStorage.setItem(STORE_MODE, state.mode);
        if (state.mode !== 'edit') state.selected = '';
        localStorage.setItem(STORE_SEL, state.selected);
        render();
    }

    function closeToView() {
        state.open = false;
        localStorage.setItem(STORE_OPEN, '0');
        setMode('view');
    }

    function patchBlock(key, group, prop, value) {
        const b = defByKey(key);
        if (!b) return;
        if (!state.cfg[b.key]) state.cfg[b.key] = { box: copy(b.box), text: copy(b.text) };
        state.cfg[b.key][group][prop] = value;
        saveConfig();
        render();
    }

    function positionPanel() {
        const p = document.getElementById('lr-cfg-panel');
        if (!p || p.hidden) return;
        const label = document.getElementById('label');
        if (!label) return;
        const r = label.getBoundingClientRect();
        const gap = 18;
        const w = p.offsetWidth || 310;
        let left = r.right + gap;
        if (left + w > window.innerWidth - 12) left = Math.max(12, r.left - w - gap);
        if (left < 12) left = Math.min(window.innerWidth - w - 12, r.left + 70);
        p.style.left = Math.max(12, left) + 'px';
        p.style.top = Math.max(12, Math.min(r.top, window.innerHeight - 120)) + 'px';
    }

    function selectBlock(key) {
        const b = defByKey(key);
        state.selected = b ? b.key : '';
        localStorage.setItem(STORE_SEL, state.selected);
        render();
    }

    function field(label, type, value, min, max, step, onInput) {
        const row = document.createElement('label');
        row.className = 'row';
        const name = document.createElement('span');
        name.textContent = label;
        const input = document.createElement(type === 'select' ? 'select' : 'input');
        if (type !== 'select') input.type = type;
        if (min != null) input.min = min;
        if (max != null) input.max = max;
        if (step != null) input.step = step;
        if (type === 'checkbox') input.checked = !!value;
        else input.value = value;
        input.addEventListener('input', () => onInput(type === 'checkbox' ? input.checked : input.value));
        input.addEventListener('change', () => onInput(type === 'checkbox' ? input.checked : input.value));
        row.append(name, input);
        return { row, input };
    }

    function selectField(label, value, options, onInput) {
        const f = field(label, 'select', value, null, null, null, onInput);
        options.forEach(o => {
            const opt = document.createElement('option');
            opt.value = o;
            opt.textContent = o;
            f.input.appendChild(opt);
        });
        f.input.value = value;
        return f.row;
    }

    function addNum(parent, title, key, group, prop, min, max, step) {
        const val = state.cfg[key][group][prop];
        parent.appendChild(field(title, 'number', val, min, max, step, v => patchBlock(key, group, prop, num(v, val))).row);
    }

    function addText(parent, title, key, group, prop) {
        const val = state.cfg[key][group][prop];
        parent.appendChild(field(title, 'text', val, null, null, null, v => patchBlock(key, group, prop, v)).row);
    }

    function addColor(parent, title, key, group, prop) {
        const val = state.cfg[key][group][prop];
        const color = /^#/.test(val) ? val : '#ffffff';
        parent.appendChild(field(title, 'color', color, null, null, null, v => patchBlock(key, group, prop, v)).row);
    }

    function addBlockControls(p, key) {
        const c = state.cfg[key];
        const title = document.createElement('h3');
        title.textContent = (defByKey(key) || {}).title || key;
        p.appendChild(title);
        p.appendChild(buttonBar([
            ['Spat', 'light', () => selectBlock('')],
            ['View', state.mode === 'view' ? 'active' : 'light', () => setMode('view')],
            ['Edit', state.mode === 'edit' ? 'active' : 'light', () => setMode('edit')],
            ['Zavriet', 'light', closeToView]
        ]));

        p.appendChild(section('Blok'));
        addNum(p, 'X mm', key, 'box', 'x', 0, LABEL_W, 0.1);
        addNum(p, 'Y mm', key, 'box', 'y', 0, LABEL_H, 0.1);
        addNum(p, 'Sirka mm', key, 'box', 'w', 1, LABEL_W, 0.1);
        addNum(p, 'Vyska mm', key, 'box', 'h', 1, LABEL_H, 0.1);
        addNum(p, 'Padding L', key, 'box', 'paddingLeft', 0, 10, 0.1);
        addNum(p, 'Padding R', key, 'box', 'paddingRight', 0, 10, 0.1);
        addNum(p, 'Border px', key, 'box', 'borderWidth', 0, 10, 1);
        addColor(p, 'Border farba', key, 'box', 'borderColor');
        addNum(p, 'Radius mm', key, 'box', 'borderRadius', 0, 10, 0.1);
        addText(p, 'Pozadie bloku', key, 'box', 'backgroundColor');
        p.appendChild(field('Viditelny', 'checkbox', c.box.visible, null, null, null, v => patchBlock(key, 'box', 'visible', v)).row);

        p.appendChild(section('Text / element'));
        addNum(p, 'Font mm', key, 'text', 'fontSize', 1, 20, 0.1);
        addNum(p, 'Bold', key, 'text', 'fontWeight', 100, 900, 100);
        addNum(p, 'Line height', key, 'text', 'lineHeight', 0.6, 2, 0.05);
        addNum(p, 'Hustota %', key, 'text', 'scaleX', 40, 160, 1);
        addNum(p, 'Letter mm', key, 'text', 'letterSpacing', -1, 3, 0.1);
        p.appendChild(selectField('Zarovnanie', c.text.textAlign, ['left', 'center', 'right'], v => patchBlock(key, 'text', 'textAlign', v)));
        addColor(p, 'Farba textu', key, 'text', 'color');
        addText(p, 'Pozadie prvku', key, 'text', 'backgroundColor');
        addNum(p, 'Border prvku px', key, 'text', 'borderWidth', 0, 10, 1);
        addColor(p, 'Border prvku', key, 'text', 'borderColor');
        addNum(p, 'Radius prvku', key, 'text', 'borderRadius', 0, 10, 0.1);
        addNum(p, 'Padding X', key, 'text', 'paddingX', 0, 10, 0.1);
        addNum(p, 'Padding Y', key, 'text', 'paddingY', 0, 10, 0.1);
        p.appendChild(field('Uppercase', 'checkbox', c.text.uppercase, null, null, null, v => patchBlock(key, 'text', 'uppercase', v)).row);
    }

    function section(text) {
        const h = document.createElement('h4');
        h.textContent = text;
        return h;
    }

    function buttonBar(items) {
        const bar = document.createElement('div');
        bar.className = 'bar';
        items.forEach(([text, cls, fn]) => {
            const b = document.createElement('button');
            b.textContent = text;
            b.className = cls || '';
            b.type = 'button';
            b.addEventListener('click', fn);
            bar.appendChild(b);
        });
        return bar;
    }

    function buildPanel() {
        let btn = document.getElementById('lr-cfg-button');
        if (!btn) {
            btn = document.createElement('button');
            btn.id = 'lr-cfg-button';
            btn.type = 'button';
            btn.textContent = 'CFG';
            btn.addEventListener('click', () => {
                if (state.open) closeToView();
                else { state.open = true; localStorage.setItem(STORE_OPEN, '1'); setMode('edit'); }
            });
            document.body.appendChild(btn);
        }

        let p = document.getElementById('lr-cfg-panel');
        if (!p) {
            p = document.createElement('div');
            p.id = 'lr-cfg-panel';
            document.body.appendChild(p);
        }
        p.hidden = !state.open;
        p.innerHTML = '';
        if (!state.open) return;

        if (state.selected && state.cfg[state.selected]) {
            addBlockControls(p, state.selected);
            return;
        }

        const h = document.createElement('h3');
        h.textContent = 'Label V2 konfigurator';
        p.appendChild(h);
        p.appendChild(buttonBar([
            ['View', state.mode === 'view' ? 'active' : 'light', () => setMode('view')],
            ['Edit', state.mode === 'edit' ? 'active' : 'light', () => setMode('edit')],
            ['Zavriet', 'light', closeToView],
            ['Reset', 'light', () => { if (confirm('Resetovat V2 layout?')) { localStorage.removeItem(STORE); state.cfg = loadConfig(); render(); } }]
        ]));
        const m = document.createElement('p');
        m.className = 'muted';
        m.textContent = 'Bez vybraneho bloku sa zobrazuju globalne volby. V edit mode klikni na blok v stitku alebo vyber blok tu.';
        p.appendChild(m);
        p.appendChild(section('Bloky'));
        p.appendChild(buttonBar(BLOCKS.map(b => [b.title, 'light', () => { setMode('edit'); selectBlock(b.key); }])));
    }

    function bindEvents() {
        document.addEventListener('click', e => {
            const z = e.target.closest && e.target.closest('.lr-zone');
            if (z && state.mode === 'edit') {
                e.preventDefault();
                e.stopPropagation();
                selectBlock(z.dataset.blockKey);
            }
        }, true);
        window.addEventListener('resize', positionPanel);
        window.addEventListener('scroll', positionPanel, true);
        document.addEventListener('keydown', e => {
            if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'e') {
                e.preventDefault();
                state.open ? closeToView() : (state.open = true, localStorage.setItem(STORE_OPEN, '1'), setMode('edit'));
            }
        });
    }

    window.labelRegeneratorSetZone = setValue;
    window.labelRegeneratorRefresh = render;
    window.labelRegeneratorGetConfig = () => copy(state.cfg);
    window.labelRegeneratorSetBlockConfig = (key, patch) => {
        const b = defByKey(key);
        if (!b) return;
        state.cfg[b.key] = merge(state.cfg[b.key] || { box: b.box, text: b.text }, patch || {});
        saveConfig();
        render();
    };
    window.labelRegeneratorSetMode = setMode;
    window.labelRegeneratorSelectBlock = selectBlock;
    window.labelRegeneratorToggleEditor = () => {
        state.open = !state.open;
        localStorage.setItem(STORE_OPEN, state.open ? '1' : '0');
        state.open ? setMode('edit') : closeToView();
    };

    function init() {
        injectCss();
        bindEvents();
        if (!document.getElementById('label')) return;
        render();
        setTimeout(render, 250);
        setTimeout(render, 1000);
    }

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
    else init();
})();
