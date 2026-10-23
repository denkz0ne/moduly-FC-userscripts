// ==UserScript==
// @name         Material Detector Next
// @namespace    https://moduly.faxcopy.sk/material-detector-next
// @author       mato e.
// @version      0.1.4
// @description  Nový katalóg služieb, detekcia parametrov a izolovaný náhľad štítka.
// @updateURL    https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/main/service-catalog/materialDetectorNext.user.js
// @downloadURL  https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/main/service-catalog/materialDetectorNext.user.js
// @match        https://moduly.faxcopy.sk/vyrobne_prikazy/detail/index/*
// @grant        GM_xmlhttpRequest
// @connect      raw.githubusercontent.com
// @require      https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/main/service-catalog/core/detector_api.js
// @require      https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/main/service-catalog/detectors/detector_fotoobrazy.js
// @require      https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/main/service-catalog/detectors/detector_41tv.js
// @require      https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/main/service-catalog/detectors/detector_42fotoweb.js
// @require      https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/main/service-catalog/detectors/detector_67mf.js
// @require      https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/main/service-catalog/detectors/detector_67spz.js
// @require      https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/main/service-catalog/detectors/detector_68bs.js
// @require      https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/main/service-catalog/detectors/detector_49ban.js
// @require      https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/main/service-catalog/detectors/detector_49s.js
// @require      https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/main/service-catalog/detectors/detector_common_size.js
// @require      https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/main/service-catalog/core/page_context.js
// @require      https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/main/service-catalog/core/database.js
// @require      https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/main/service-catalog/core/extraction.js
// @require      https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/main/service-catalog/core/proposals.js
// @require      https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/main/service-catalog/core/preview.js
// @require      https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/main/service-catalog/core/consumer_api.js
// @require      https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/main/service-catalog/config/config_panel.js
// @run-at       document-end
// ==/UserScript==
// FC Userscripts ecosystem: https://github.com/denkz0ne/moduly-FC-userscripts

(function () {
    'use strict';

    const OUTPUT_MODE = 'preview';
    let databaseState = null;
    let lastSignature = '';
    let scheduled = false;
    const PREVIEW_BUTTON_ID = 'material-detector-next-preview-toggle';

    function isAllowedPage() {
        return window.MaterialDetectorNextPageContext
            && window.MaterialDetectorNextPageContext.allowedPage();
    }

    function currentSignature(context) {
        if (!context) return '';
        return JSON.stringify({
            vp: context.vp,
            code: context.internalCode || context.candidateCode,
            rows: context.rawRows
        });
    }

    function publishPublicState(detection) {
        const result = detection && detection.result || {};
        const payload = {
            version: 1,
            outputMode: OUTPUT_MODE,
            vp: detection && detection.context && detection.context.vp || '',
            serviceId: detection && detection.service && detection.service.id || '',
            detectorId: result.detector || '',
            label: detection && detection.zones || { left: '', right: '', top: '', bottom: '' },
            renameDebug: detection && detection.result && detection.result.renameDebug
                ? {
                    mode: 'debug',
                    enabled: false,
                    configuredEnabled: detection.result.renameDebug.enabled,
                    pattern: detection.result.renameDebug.pattern,
                    tokens: Object.assign({}, detection.result.tokens || {})
                }
                : null,
            databaseVersion: detection && detection.database && detection.database.database
                ? detection.database.database.dataVersion
                : 0,
            updatedAt: new Date().toISOString()
        };
        try {
            localStorage.setItem(window.MaterialDetectorNextClient.stateKey, JSON.stringify(payload));
        } catch (error) {
            console.warn('[materialDetectorNext] public state save failed', error);
        }
        window.dispatchEvent(new CustomEvent(window.MaterialDetectorNextClient.eventName, { detail: payload }));
    }

    function ensurePreviewActionButton() {
        // Separate Tampermonkey scripts can run in isolated JavaScript worlds,
        // so discover the shared Action Panel through the DOM first.
        const actionPanelApi = window.FCUserscripts;
        let panel = document.getElementById('fc-userscripts-action-panel');
        if (!panel && actionPanelApi && typeof actionPanelApi.ensureActionPanel === 'function') {
            panel = actionPanelApi.ensureActionPanel();
        }
        if (!panel) return null;
        let button = document.getElementById(PREVIEW_BUTTON_ID);
        if (!button) {
            button = document.createElement('button');
            button.id = PREVIEW_BUTTON_ID;
            button.type = 'button';
            button.setAttribute('aria-pressed', 'false');
            button.title = 'Zobraziť alebo skryť náhľad štítka';
            button.addEventListener('click', () => {
                const visible = window.MaterialDetectorNextPreview.setVisible(!window.MaterialDetectorNextPreview.isVisible());
                button.textContent = visible ? 'Skryť náhľad' : 'Náhľad štítka';
                button.setAttribute('aria-pressed', String(visible));
            });
        }
        const visible = window.MaterialDetectorNextPreview.isVisible();
        const label = visible ? 'Skryť náhľad' : 'Náhľad štítka';
        if (button.textContent !== label) button.textContent = label;
        button.setAttribute('aria-pressed', String(visible));
        if (actionPanelApi && typeof actionPanelApi.styleActionButton === 'function') {
            actionPanelApi.styleActionButton(button, { background: '#315b79', borderColor: '#244661' });
        } else {
            Object.assign(button.style, {
                position: 'static', right: 'auto', bottom: 'auto', display: 'block',
                width: '100%', minWidth: '0', boxSizing: 'border-box', margin: '0',
                padding: '8px 10px', textAlign: 'center', lineHeight: '13px',
                fontWeight: '700', color: '#fff', background: '#315b79',
                border: '1px solid #244661', borderRadius: '5px', cursor: 'pointer',
                boxShadow: '0 2px 8px rgba(0,0,0,0.18)', textDecoration: 'none'
            });
        }
        if (button.parentNode !== panel) panel.appendChild(button);
        return button;
    }

    function renderCurrent() {
        if (!isAllowedPage()) return null;
        ensurePreviewActionButton();
        const context = window.MaterialDetectorNextPageContext.collect();
        if (!context) return null;
        const signature = currentSignature(context);
        if (signature === lastSignature && window.__materialDetectorNextState) return window.__materialDetectorNextState;
        lastSignature = signature;
        const detection = window.MaterialDetectorNextExtraction.detect(databaseState, context);
        window.MaterialDetectorNextPreview.render(detection);
        publishPublicState(detection);
        window.dispatchEvent(new CustomEvent('materialDetectorNext:updated', { detail: detection }));
        return detection;
    }

    function scheduleRefresh() {
        if (scheduled) return;
        scheduled = true;
        setTimeout(() => {
            scheduled = false;
            renderCurrent();
        }, 150);
    }

    async function refreshDatabase() {
        databaseState = await window.MaterialDetectorNextDatabase.refresh();
        lastSignature = '';
        const result = renderCurrent();
        window.dispatchEvent(new CustomEvent('materialDetectorNext:databaseUpdated', { detail: databaseState }));
        return result;
    }

    function startObserver() {
        if (!document.body) return;
        const observer = new MutationObserver(scheduleRefresh);
        observer.observe(document.body, { childList: true, subtree: true, characterData: true, attributes: true });
    }

    async function init() {
        if (!isAllowedPage()) return;
        databaseState = await window.MaterialDetectorNextDatabase.load();
        window.MaterialDetectorNextConfig.init();
        renderCurrent();
        startObserver();
        window.addEventListener('materialDetectorNext:configChanged', () => {
            lastSignature = '';
            renderCurrent();
        });
        window.addEventListener('materialDetectorNext:refreshDatabase', refreshDatabase);
        console.info('[materialDetectorNext] initialized in ' + OUTPUT_MODE + ' mode', {
            serviceCount: databaseState.database && databaseState.database.services.length || 0,
            source: databaseState.source
        });
    }

    window.MaterialDetectorNext = {
        outputMode: OUTPUT_MODE,
        refresh: refreshDatabase,
        refreshPreview: () => {
            lastSignature = '';
            return renderCurrent();
        },
        getDatabaseState: () => databaseState,
        getState: () => window.__materialDetectorNextState || null
    };

    init().catch(error => console.error('[materialDetectorNext] initialization failed', error));
})();
