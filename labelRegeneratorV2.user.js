// ==UserScript==
// @name         labelRegeneratorV2
// @namespace    https://moduly.faxcopy.sk/
// @author       mato e.
// @version      2.0.20
// @description  Uprava print stitku, overlay zony, konfigurator layoutu a klavesa L pre otvorenie, tlac a zatvorenie stitku.
// @updateURL    https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/main/labelRegeneratorV2.user.js
// @downloadURL  https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/main/labelRegeneratorV2.user.js
// @require      https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/beeadaaae783fb0271d127a2109454fae9c87a14/labelRegeneratorV2.user.js
// @require      https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/d2c3c4c1009d6c08a5de189bbdd777fc53fccbe6/labelRegeneratorV2.user.js
// @match        https://moduly.faxcopy.sk/vyrobne_prikazy/detail/printLabel/*
// @match        https://moduly.faxcopy.sk/vyrobne_prikazy/detail/index/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function () {
    'use strict';

    window.labelRegeneratorV2Version = '2.0.20';

    const CONFIG_KEYS = [
        'labelRegeneratorLayoutConfigV201'
    ];
    const EXPORT_TYPE = 'labelRegeneratorV2.editorConfig';

    function isPrintLabelPage() {
        return /\/vyrobne_prikazy\/detail\/printLabel\//.test(location.pathname);
    }

    function ensureNonPrintCleanupStyles() {
        if (isPrintLabelPage()) return;
        if (document.getElementById('lr-non-print-cleanup-style-v220')) return;

        const style = document.createElement('style');
        style.id = 'lr-non-print-cleanup-style-v220';
        style.textContent = `
            #lr-detached-overrides,
            #lr-config-panel,
            #lr-config-toggle,
            .lr-override-card,
            input[data-override-zone] {
                display: none !important;
                visibility: hidden !important;
                pointer-events: none !important;
            }
        `;
        document.head.appendChild(style);
    }

    function removeLabelEditorUiOutsidePrint() {
        if (isPrintLabelPage()) return;
        ensureNonPrintCleanupStyles();

        [
            '#lr-detached-overrides',
            '#lr-config-panel',
            '#lr-config-toggle',
            '.lr-override-card'
        ].forEach((selector) => {
            document.querySelectorAll(selector).forEach((node) => node.remove());
        });

        document.querySelectorAll('input[data-override-zone]').forEach((input) => {
            const wrapper = input.closest('.lr-detached-field, .lr-override-field') || input;
            wrapper.remove();
        });
    }

    function keepEditorUiOutOfDetailPage() {
        if (isPrintLabelPage()) return;
        removeLabelEditorUiOutsidePrint();
        requestAnimationFrame(removeLabelEditorUiOutsidePrint);
        setTimeout(removeLabelEditorUiOutsidePrint, 80);
        setTimeout(removeLabelEditorUiOutsidePrint, 250);
        setTimeout(removeLabelEditorUiOutsidePrint, 800);
        setTimeout(removeLabelEditorUiOutsidePrint, 1600);

        if (!document.body || document.body.dataset.lrNonPrintObserver === '1') return;
        const observer = new MutationObserver(removeLabelEditorUiOutsidePrint);
        observer.observe(document.body, { childList: true, subtree: true });
        document.body.dataset.lrNonPrintObserver = '1';
    }

    function ensureExportImportStyles() {
        if (!isPrintLabelPage()) return;
        if (document.getElementById('lr-export-import-style-v220')) return;

        const style = document.createElement('style');
        style.id = 'lr-export-import-style-v220';
        style.textContent = `
            #lr-config-panel .lr-export-import-card {
                border: 1px solid #c9c9c9 !important;
                background: #f4f4f4 !important;
                border-radius: 0 !important;
                padding: 10px !important;
                margin: 8px 0 !important;
                box-sizing: border-box !important;
            }

            #lr-config-panel .lr-export-import-actions {
                display: grid !important;
                grid-template-columns: 1fr 1fr !important;
                gap: 6px !important;
                margin-bottom: 6px !important;
            }

            #lr-config-panel .lr-export-import-actions button {
                border-radius: 0 !important;
                border: 1px solid #bcbcbc !important;
                background: #e8e8e8 !important;
                color: #222 !important;
                padding: 7px 8px !important;
                font: 700 11px/1 Arial, sans-serif !important;
                cursor: pointer !important;
            }

            #lr-config-panel .lr-export-import-actions button:hover {
                background: #dcdcdc !important;
            }

            #lr-config-panel .lr-export-import-text {
                display: block !important;
                width: 100% !important;
                min-height: 58px !important;
                resize: vertical !important;
                box-sizing: border-box !important;
                border: 1px solid #bdbdbd !important;
                border-radius: 0 !important;
                background: #fff !important;
                color: #111 !important;
                padding: 7px !important;
                font: 11px/1.25 Consolas, monospace !important;
            }

            #lr-config-panel .lr-export-import-status {
                min-height: 14px !important;
                margin-top: 5px !important;
                color: #555 !important;
                font: 11px/1.25 Arial, sans-serif !important;
            }

            @media print {
                #lr-config-panel .lr-export-import-card { display: none !important; }
            }
        `;
        document.head.appendChild(style);
    }

    function readConfigExport() {
        const keys = {};
        CONFIG_KEYS.forEach((key) => {
            const value = localStorage.getItem(key);
            if (value != null) keys[key] = value;
        });

        return {
            type: EXPORT_TYPE,
            script: 'labelRegeneratorV2',
            version: window.labelRegeneratorV2Version || '2.0.20',
            exportedAt: new Date().toISOString(),
            keys
        };
    }

    function normalizeImportPayload(rawText) {
        const parsed = JSON.parse(String(rawText || '').trim());

        if (parsed && parsed.type === EXPORT_TYPE && parsed.keys && typeof parsed.keys === 'object') {
            return parsed.keys;
        }

        if (parsed && parsed.blocks && typeof parsed.blocks === 'object') {
            return { labelRegeneratorLayoutConfigV201: JSON.stringify(parsed) };
        }

        if (parsed && parsed.labelRegeneratorLayoutConfigV201) {
            return { labelRegeneratorLayoutConfigV201: String(parsed.labelRegeneratorLayoutConfigV201) };
        }

        throw new Error('Neplatny format importu');
    }

    function setStatus(card, text, isError) {
        const status = card.querySelector('.lr-export-import-status');
        if (!status) return;
        status.textContent = text;
        status.style.color = isError ? '#a00000' : '#555';
    }

    async function copyText(text) {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            await navigator.clipboard.writeText(text);
            return true;
        }
        return false;
    }

    async function handleExport(card) {
        const textarea = card.querySelector('.lr-export-import-text');
        const payload = readConfigExport();
        const text = JSON.stringify(payload, null, 2);
        textarea.value = text;
        textarea.focus();
        textarea.select();

        try {
            const copied = await copyText(text);
            setStatus(card, copied ? 'Export skopirovany do schranky.' : 'Export pripraveny, skopiruj text rucne.', false);
        } catch (error) {
            setStatus(card, 'Export pripraveny, skopiruj text rucne.', false);
        }
    }

    function handleImport(card) {
        const textarea = card.querySelector('.lr-export-import-text');
        try {
            const importedKeys = normalizeImportPayload(textarea.value);
            CONFIG_KEYS.forEach((key) => {
                if (Object.prototype.hasOwnProperty.call(importedKeys, key)) {
                    localStorage.setItem(key, importedKeys[key]);
                }
            });
            setStatus(card, 'Import hotovy, obnovujem editor.', false);
            setTimeout(() => location.reload(), 250);
        } catch (error) {
            setStatus(card, 'Import zlyhal: skontroluj JSON.', true);
        }
    }

    function buildExportImportCard() {
        const card = document.createElement('section');
        card.className = 'lr-export-import-card';
        card.dataset.lrExportImport = 'true';

        const actions = document.createElement('div');
        actions.className = 'lr-export-import-actions';

        const exportButton = document.createElement('button');
        exportButton.type = 'button';
        exportButton.textContent = 'Export';

        const importButton = document.createElement('button');
        importButton.type = 'button';
        importButton.textContent = 'Import';

        actions.appendChild(exportButton);
        actions.appendChild(importButton);
        card.appendChild(actions);

        const textarea = document.createElement('textarea');
        textarea.className = 'lr-export-import-text';
        textarea.placeholder = 'Sem vloz export z druheho PC alebo klikni Export.';
        card.appendChild(textarea);

        const status = document.createElement('div');
        status.className = 'lr-export-import-status';
        status.textContent = 'Nastavenia su lokalne v tomto prehliadaci.';
        card.appendChild(status);

        exportButton.addEventListener('click', () => handleExport(card));
        importButton.addEventListener('click', () => handleImport(card));

        return card;
    }

    function ensureExportImportPanel() {
        if (!isPrintLabelPage()) {
            keepEditorUiOutOfDetailPage();
            return;
        }

        ensureExportImportStyles();
        const panel = document.getElementById('lr-config-panel');
        if (!panel || panel.querySelector('[data-lr-export-import="true"]')) return;

        const topbar = panel.querySelector('.lr-panel-topbar');
        const card = buildExportImportCard();
        if (topbar && topbar.nextSibling) {
            panel.insertBefore(card, topbar.nextSibling);
        } else {
            panel.appendChild(card);
        }
    }

    function scheduleEnsureExportImportPanel() {
        keepEditorUiOutOfDetailPage();
        ensureExportImportPanel();
        requestAnimationFrame(() => {
            keepEditorUiOutOfDetailPage();
            ensureExportImportPanel();
        });
        setTimeout(() => {
            keepEditorUiOutOfDetailPage();
            ensureExportImportPanel();
        }, 150);
        setTimeout(() => {
            keepEditorUiOutOfDetailPage();
            ensureExportImportPanel();
        }, 600);
        setTimeout(() => {
            keepEditorUiOutOfDetailPage();
            ensureExportImportPanel();
        }, 1500);
    }

    window.labelRegeneratorExportEditorConfig = readConfigExport;
    window.labelRegeneratorImportEditorConfig = (payload) => {
        const text = typeof payload === 'string' ? payload : JSON.stringify(payload);
        const importedKeys = normalizeImportPayload(text);
        CONFIG_KEYS.forEach((key) => {
            if (Object.prototype.hasOwnProperty.call(importedKeys, key)) {
                localStorage.setItem(key, importedKeys[key]);
            }
        });
        location.reload();
    };

    window.addEventListener('labelRegeneratorReady', scheduleEnsureExportImportPanel);
    window.addEventListener('resize', scheduleEnsureExportImportPanel);
    window.addEventListener('scroll', scheduleEnsureExportImportPanel, true);

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', scheduleEnsureExportImportPanel);
    } else {
        scheduleEnsureExportImportPanel();
    }
})();
