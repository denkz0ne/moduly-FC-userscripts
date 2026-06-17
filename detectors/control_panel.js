(function () {
    'use strict';

    const api = window.MaterialDetectorAPI;
    if (!api) return;

    const BUTTON_ID = 'materialDetectorConfigButton';
    const PANEL_ID = 'materialDetectorConfigPanel';
    const ACTION_PANEL_ID = 'fc-userscripts-action-panel';
    const DEFAULT_TOKENS = [
        'alias', 'size', 'quantity', 'vp', 'detector', 'code', 'productCode',
        'mediaType', 'mediaTypeRaw', 'weight', 'variant', 'material', 'materialAlias',
        'colorCode', 'folding', 'kind', 'canvas', 'giftPack', 'original', 'ext'
    ];

    let initialized = false;
    let selectedDetectorId = '';
    let onChange = function () {};

    function esc(value) {
        return String(value == null ? '' : value)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');
    }

    function getActionPanelTop() {
        const topRow = document.querySelector('#top-row');
        if (!topRow) return 94;
        const rect = topRow.getBoundingClientRect();
        return Math.max(8, Math.round(rect.bottom + 8));
    }

    function ensureActionPanel() {
        if (window.FCUserscripts && typeof window.FCUserscripts.ensureActionPanel === 'function') {
            return window.FCUserscripts.ensureActionPanel();
        }

        let panel = document.getElementById(ACTION_PANEL_ID);
        if (panel) return panel;

        panel = document.createElement('div');
        panel.id = ACTION_PANEL_ID;
        Object.assign(panel.style, {
            position: 'fixed',
            right: '20px',
            top: `${getActionPanelTop()}px`,
            bottom: 'auto',
            zIndex: '900',
            width: '94px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch',
            gap: '5px'
        });
        document.body.appendChild(panel);
        return panel;
    }

    function styleActionButton(button) {
        if (window.FCUserscripts && typeof window.FCUserscripts.styleActionButton === 'function') {
            window.FCUserscripts.styleActionButton(button, { background: '#263238', borderColor: '#111' });
            return;
        }
        Object.assign(button.style, {
            position: 'static',
            right: 'auto',
            bottom: 'auto',
            display: 'block',
            width: '100%',
            minWidth: '0',
            boxSizing: 'border-box',
            margin: '0',
            padding: '8px 10px',
            textAlign: 'center',
            lineHeight: '13px',
            fontWeight: '700',
            color: '#fff',
            background: '#263238',
            border: '1px solid #111',
            borderRadius: '5px',
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(0,0,0,0.18)',
            textDecoration: 'none'
        });
    }

    function ensureButton() {
        if (!document.body) return null;
        const actionPanel = ensureActionPanel();
        let button = document.getElementById(BUTTON_ID);
        if (!button) {
            button = document.createElement('a');
            button.id = BUTTON_ID;
            button.href = 'javascript:void(0)';
            button.textContent = 'MD CFG';
            button.title = 'MaterialDetector konfigurácia';
            button.addEventListener('click', togglePanel);
        }
        styleActionButton(button);
        if (button.parentNode !== actionPanel) actionPanel.appendChild(button);
        return button;
    }

    function addStyles() {
        if (document.getElementById('materialDetectorConfigStyles')) return;
        const style = document.createElement('style');
        style.id = 'materialDetectorConfigStyles';
        style.textContent = `
            #${PANEL_ID} {
                position: fixed;
                right: 124px;
                top: 94px;
                width: 470px;
                max-width: calc(100vw - 150px);
                max-height: 82vh;
                overflow: auto;
                z-index: 901;
                background: #fff;
                color: #111;
                border: 1px solid #222;
                border-radius: 6px;
                box-shadow: 0 8px 28px rgba(0,0,0,.32);
                font-family: Arial, sans-serif;
                font-size: 12px;
                display: none;
            }
            #${PANEL_ID} * { box-sizing: border-box; }
            #${PANEL_ID} .mdcp-head { display:flex; align-items:center; justify-content:space-between; padding:10px 12px; background:#111; color:#fff; font-weight:700; }
            #${PANEL_ID} .mdcp-body { padding:12px; }
            #${PANEL_ID} label { display:block; font-weight:700; margin:9px 0 4px; }
            #${PANEL_ID} select,
            #${PANEL_ID} input,
            #${PANEL_ID} textarea { width:100%; border:1px solid #bbb; border-radius:4px; padding:6px; font-size:12px; }
            #${PANEL_ID} textarea { min-height:54px; font-family:monospace; }
            #${PANEL_ID} button { border:1px solid #333; border-radius:4px; background:#f4f4f4; padding:5px 7px; cursor:pointer; font-size:12px; }
            #${PANEL_ID} button.primary { background:#111; color:#fff; }
            #${PANEL_ID} button.danger { background:#b71c1c; color:#fff; border-color:#7f0000; }
            #${PANEL_ID} .mdcp-row { display:flex; gap:6px; align-items:center; margin:5px 0; }
            #${PANEL_ID} .mdcp-row > * { flex:1; }
            #${PANEL_ID} .mdcp-row button { flex:0 0 auto; }
            #${PANEL_ID} .mdcp-block { border:1px solid #ddd; background:#fafafa; border-radius:4px; padding:6px; margin:5px 0; cursor:grab; }
            #${PANEL_ID} .mdcp-preview { background:#f5f5f5; border:1px solid #ddd; border-radius:4px; padding:8px; white-space:pre-wrap; font-family:monospace; max-height:130px; overflow:auto; }
            #${PANEL_ID} .mdcp-actions { display:flex; gap:7px; margin-top:12px; flex-wrap:wrap; }
            #${PANEL_ID} .mdcp-small { color:#555; font-size:11px; line-height:1.35; }
            #${PANEL_ID} .mdcp-token { display:inline-block; background:#111; color:#fff; border-radius:4px; padding:2px 5px; margin:2px; font-family:monospace; }
            #${PANEL_ID} .mdcp-section { border-top:1px solid #ddd; margin-top:12px; padding-top:10px; }
        `;
        document.head.appendChild(style);
    }

    function ensurePanel() {
        addStyles();
        let panel = document.getElementById(PANEL_ID);
        if (panel) return panel;
        panel = document.createElement('div');
        panel.id = PANEL_ID;
        document.body.appendChild(panel);
        return panel;
    }

    function getDetectors() {
        return api.getDetectors().filter(detector => detector && detector.id);
    }

    function getSelectedDetector() {
        const detectors = getDetectors();
        const currentState = window.__materialDetectorState || {};
        if (!selectedDetectorId) selectedDetectorId = currentState.detector || (detectors[0] && detectors[0].id) || '';
        return detectors.find(detector => detector.id === selectedDetectorId) || detectors[0] || null;
    }

    function tokenList(detector) {
        const own = Array.isArray(detector && detector.tokens) ? detector.tokens : [];
        return Array.from(new Set([...own, ...DEFAULT_TOKENS]));
    }

    function tokenPreview() {
        const tokens = Object.assign({}, (window.__materialDetectorState || {}).tokens || {}, window.__materialDetectorTokens || {});
        return Object.keys(tokens).sort().map(key => `${key}: ${tokens[key]}`).join('\n') || 'Zatial nie su dostupne tokeny pre aktualny VP.';
    }

    function detectorPreview() {
        const state = window.__materialDetectorState || {};
        return [
            `detector: ${state.detector || ''}`,
            `productCode: ${state.productCode || ''}`,
            `left: ${window.TM_testoLeft || ''}`,
            `right: ${window.TM_testoRight || ''}`,
            `top: ${window.TM_top || ''}`,
            `rename: ${state.rename && state.rename.enabled ? 'ON' : 'OFF'}`
        ].join('\n');
    }

    function createBlockRow(block, tokens) {
        const row = document.createElement('div');
        row.className = 'mdcp-block';
        row.draggable = true;
        row.dataset.blockRow = '1';
        row.innerHTML = `
            <div class="mdcp-row">
                <select data-block-type>
                    <option value="token">token</option>
                    <option value="text">text</option>
                </select>
                <select data-block-token></select>
                <input data-block-text type="text" placeholder="vlastny text">
                <button type="button" data-up title="Hore">↑</button>
                <button type="button" data-down title="Dole">↓</button>
                <button type="button" data-remove title="Odstranit">x</button>
            </div>
        `;
        const type = row.querySelector('[data-block-type]');
        const token = row.querySelector('[data-block-token]');
        const text = row.querySelector('[data-block-text]');
        tokens.forEach(name => {
            const opt = document.createElement('option');
            opt.value = name;
            opt.textContent = `{${name}}`;
            token.appendChild(opt);
        });
        type.value = block.type === 'token' ? 'token' : 'text';
        token.value = block.type === 'token' ? block.value : tokens[0] || 'alias';
        text.value = block.type === 'text' ? block.value : '';

        function sync() {
            token.style.display = type.value === 'token' ? '' : 'none';
            text.style.display = type.value === 'text' ? '' : 'none';
        }
        type.addEventListener('change', sync);
        sync();

        row.querySelector('[data-remove]').addEventListener('click', () => row.remove());
        row.querySelector('[data-up]').addEventListener('click', () => row.previousElementSibling && row.parentNode.insertBefore(row, row.previousElementSibling));
        row.querySelector('[data-down]').addEventListener('click', () => row.nextElementSibling && row.parentNode.insertBefore(row.nextElementSibling, row));
        row.addEventListener('dragstart', event => event.dataTransfer.setData('text/plain', Array.from(row.parentNode.children).indexOf(row)));
        row.addEventListener('dragover', event => event.preventDefault());
        row.addEventListener('drop', event => {
            event.preventDefault();
            const from = parseInt(event.dataTransfer.getData('text/plain'), 10);
            const rows = Array.from(row.parentNode.children);
            const dragged = rows[from];
            if (dragged && dragged !== row) row.parentNode.insertBefore(dragged, row);
        });
        return row;
    }

    function createTemplateEditor(field, label, template, tokens) {
        const wrap = document.createElement('div');
        wrap.className = 'mdcp-section';
        wrap.dataset.editor = field;
        wrap.innerHTML = `<label>${esc(label)}</label><div data-blocks></div><div class="mdcp-row"><button type="button" data-add-token>+ token</button><button type="button" data-add-text>+ text</button><button type="button" data-clear>Vyčistiť</button></div>`;
        const list = wrap.querySelector('[data-blocks]');
        const blocks = api.normalizeTemplateBlocks(template);
        blocks.forEach(block => list.appendChild(createBlockRow(block, tokens)));
        wrap.querySelector('[data-add-token]').addEventListener('click', () => list.appendChild(createBlockRow({ type: 'token', value: tokens[0] || 'alias' }, tokens)));
        wrap.querySelector('[data-add-text]').addEventListener('click', () => list.appendChild(createBlockRow({ type: 'text', value: ' ' }, tokens)));
        wrap.querySelector('[data-clear]').addEventListener('click', () => { list.innerHTML = ''; });
        return wrap;
    }

    function collectTemplate(panel, field) {
        const editor = panel.querySelector(`[data-editor="${field}"]`);
        if (!editor) return [];
        return Array.from(editor.querySelectorAll('[data-block-row]')).map(row => {
            const type = row.querySelector('[data-block-type]').value;
            const value = type === 'token' ? row.querySelector('[data-block-token]').value : row.querySelector('[data-block-text]').value;
            return { type, value };
        }).filter(block => String(block.value || '').trim() !== '');
    }

    function renderPanel() {
        const panel = ensurePanel();
        const detectors = getDetectors();
        const detector = getSelectedDetector();
        if (!detector) {
            panel.innerHTML = '<div class="mdcp-head">MaterialDetector CFG<button type="button" data-close>x</button></div><div class="mdcp-body">Ziadne detektory.</div>';
            return;
        }
        selectedDetectorId = detector.id;
        const settings = api.getDetectorSettings(detector.id);
        const tokens = tokenList(detector);
        const state = window.__materialDetectorState || {};
        const aliasKey = (state.tokens && state.tokens.aliasKey) || (state.params && state.params.aliasKey) || '';

        panel.style.top = `${getActionPanelTop()}px`;
        panel.innerHTML = `
            <div class="mdcp-head"><span>MaterialDetector CFG</span><button type="button" data-close>x</button></div>
            <div class="mdcp-body">
                <label>Detector</label>
                <select data-detector-select>${detectors.map(item => `<option value="${esc(item.id)}" ${item.id === detector.id ? 'selected' : ''}>${esc(item.displayName || item.id)}</option>`).join('')}</select>
                <div class="mdcp-section"><label>Aktualny stav</label><div class="mdcp-preview">${esc(detectorPreview())}</div></div>
                <div class="mdcp-section"><label>Dostupne tokeny</label><div>${tokens.map(t => `<span class="mdcp-token">{${esc(t)}}</span>`).join('')}</div><div class="mdcp-preview">${esc(tokenPreview())}</div></div>
                <div data-editors></div>
                <div class="mdcp-section">
                    <label><input data-rename-enabled type="checkbox" style="width:auto;vertical-align:middle" ${settings.renameEnabled === true ? 'checked' : ''}> Zapnut renamer pre tento detector</label>
                    <div class="mdcp-small">Ak checkbox nechas prazdny, core pouzije default detektora. Ulozenim checkbox explicitne prepises spravanie.</div>
                </div>
                <div class="mdcp-section">
                    <label>Alias key</label><input data-alias-key value="${esc(aliasKey)}" placeholder="napr. 42foto/web|economy plagat|180g">
                    <label>Alias value</label><input data-alias-value placeholder="napr. 180">
                    <div class="mdcp-row"><button type="button" data-save-alias>Ulozit alias</button><button type="button" data-clear-alias>Vymazat alias</button></div>
                </div>
                <div class="mdcp-actions"><button class="primary" type="button" data-save>Ulozit konfiguraciu</button><button type="button" data-reset>Reset detectora</button><button class="danger" type="button" data-close>Zavriet</button></div>
            </div>
        `;
        const editors = panel.querySelector('[data-editors]');
        editors.appendChild(createTemplateEditor('leftTemplate', 'TM_testoLeft template', settings.leftTemplate || [], tokens));
        editors.appendChild(createTemplateEditor('topTemplate', 'TM_top template', settings.topTemplate || [], tokens));
        editors.appendChild(createTemplateEditor('bottomTemplate', 'TM_bottom template', settings.bottomTemplate || [], tokens));
        editors.appendChild(createTemplateEditor('renameTemplate', 'Rename filename template', settings.renameTemplate || detector.defaultRenameTemplate || [], tokens));

        panel.querySelector('[data-detector-select]').addEventListener('change', event => { selectedDetectorId = event.target.value; renderPanel(); });
        panel.querySelectorAll('[data-close]').forEach(btn => btn.addEventListener('click', closePanel));
        panel.querySelector('[data-save]').addEventListener('click', saveCurrentSettings);
        panel.querySelector('[data-reset]').addEventListener('click', resetCurrentSettings);
        panel.querySelector('[data-save-alias]').addEventListener('click', saveAlias);
        panel.querySelector('[data-clear-alias]').addEventListener('click', clearAlias);
    }

    function saveCurrentSettings() {
        const panel = ensurePanel();
        const detector = getSelectedDetector();
        if (!detector) return;
        const settings = {
            leftTemplate: collectTemplate(panel, 'leftTemplate'),
            topTemplate: collectTemplate(panel, 'topTemplate'),
            bottomTemplate: collectTemplate(panel, 'bottomTemplate'),
            renameTemplate: collectTemplate(panel, 'renameTemplate'),
            renameEnabled: !!panel.querySelector('[data-rename-enabled]').checked
        };
        api.saveDetectorSettings(detector.id, settings);
        window.dispatchEvent(new CustomEvent('materialDetector:configChanged'));
        onChange();
        renderPanel();
    }

    function resetCurrentSettings() {
        const detector = getSelectedDetector();
        if (!detector) return;
        const config = api.loadPanelConfig();
        delete config.detectors[detector.id];
        api.savePanelConfig(config);
        window.dispatchEvent(new CustomEvent('materialDetector:configChanged'));
        onChange();
        renderPanel();
    }

    function saveAlias() {
        const panel = ensurePanel();
        const key = panel.querySelector('[data-alias-key]').value;
        const value = panel.querySelector('[data-alias-value]').value;
        if (!api.setMaterialAlias(key, value)) return;
        window.dispatchEvent(new CustomEvent('materialDetector:configChanged'));
        onChange();
        renderPanel();
    }

    function clearAlias() {
        const panel = ensurePanel();
        const key = panel.querySelector('[data-alias-key]').value;
        if (!api.clearMaterialAlias(key)) return;
        window.dispatchEvent(new CustomEvent('materialDetector:configChanged'));
        onChange();
        renderPanel();
    }

    function openPanel() {
        const panel = ensurePanel();
        renderPanel();
        panel.style.display = 'block';
    }

    function closePanel() {
        ensurePanel().style.display = 'none';
    }

    function togglePanel() {
        const panel = ensurePanel();
        if (panel.style.display === 'block') closePanel();
        else openPanel();
    }

    function init(options = {}) {
        if (initialized) return;
        initialized = true;
        onChange = typeof options.onChange === 'function' ? options.onChange : onChange;

        function boot() {
            ensureButton();
            ensurePanel();
            let tries = 0;
            const interval = setInterval(() => {
                ensureButton();
                tries++;
                if (tries > 60) clearInterval(interval);
            }, 500);
        }

        if (document.body) boot();
        else document.addEventListener('DOMContentLoaded', boot, { once: true });

        window.addEventListener('materialDetector:updated', () => {
            const panel = document.getElementById(PANEL_ID);
            if (panel && panel.style.display === 'block') renderPanel();
        });
    }

    window.MaterialDetectorControlPanel = { init, open: openPanel, close: closePanel };
})();
