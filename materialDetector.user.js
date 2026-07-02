// ==UserScript==
// @name         materialDetector
// @namespace    https://moduly.faxcopy.sk/
// @author       mato e.
// @version      5.3.4-core
// @description  Material detector core router + modular internal-code detectors.
// @updateURL    https://github.com/denkz0ne/moduly-FC-userscripts/raw/codex/materialdetector-core/materialDetector.user.js
// @downloadURL  https://github.com/denkz0ne/moduly-FC-userscripts/raw/codex/materialdetector-core/materialDetector.user.js
// @match        https://moduly.faxcopy.sk/vyrobne_prikazy/detail/index/*
// @grant        GM_download
// @require      https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/codex/materialdetector-core/detectors/detector_api.js
// @require      https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/codex/materialdetector-core/detectors/detector_fotoobrazy.js
// @require      https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/codex/materialdetector-core/detectors/detector_41tv.js
// @require      https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/codex/materialdetector-core/detectors/detector_42fotoweb.js
// @require      https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/codex/materialdetector-core/detectors/detector_67mf.js
// @require      https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/codex/materialdetector-core/detectors/detector_68bs.js
// @require      https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/codex/materialdetector-core/detectors/detector_49ban.js
// @require      https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/codex/materialdetector-core/detectors/detector_49s.js
// @require      https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/codex/materialdetector-core/detectors/control_panel.js
// @run-at       document-start
// ==/UserScript==

(function () {
    'use strict';

    const api = window.MaterialDetectorAPI;
    if (!api) {
        console.error('[materialDetector] Missing MaterialDetectorAPI. Check @require loading.');
        return;
    }

    const STATE_KEY_PREFIX = 'materialDetectorState:';
    const STATE_TTL_MS = 30000;
    const LAST_SIZE_ALIAS_STORAGE_PREFIX = api.LAST_SIZE_ALIAS_STORAGE_PREFIX || 'materialDetector.lastSizeAlias:';
    const DEFAULT_RENAME_PATTERN = '{alias}_{size}_{quantity}_{vp} {original}.{ext}';
    const NATIVE_DOWNLOAD_ATTR = 'data-material-detector-native-download';
    const ZONE_KEYS = {
        left: 'TM_testoLeft',
        right: 'TM_testoRight',
        top: 'TM_top',
        bottom: 'TM_bottom'
    };

    let lastSnapshot = '';
    let observerStarted = false;
    let renameBound = false;

    function getCurrentVp() {
        return api.getCurrentVpFromUrl();
    }

    function stateKey(vp) {
        return STATE_KEY_PREFIX + vp;
    }

    function hasTemplate(template) {
        return api.normalizeTemplateBlocks(template).length > 0;
    }

    function ensureQuantitySuffix(value) {
        const raw = api.clean(value || '');
        if (!raw) return '1ks';
        return /ks$/i.test(raw) ? raw : raw + 'ks';
    }

    function getResultParams(result) {
        return Object.assign({}, result.debug || {}, (result.state && result.state.params) || {});
    }

    function buildTemplateTokens(result, context, extra = {}) {
        const state = result.state || {};
        const rename = result.rename || {};
        const params = getResultParams(result);
        const sizeAlias = rename.sizeAlias || state.sizeAlias || params.sizeAlias || '';
        const quantity = ensureQuantitySuffix(rename.quantity || params.quantity || '1ks');
        const alias = rename.alias || state.outputAlias || result.left || params.alias || '';
        return Object.assign({}, params, {
            alias,
            left: result.left || '',
            top: result.top || '',
            bottom: result.bottom || '',
            size: stripSizeUnitSuffix(sizeAlias),
            sizeAlias,
            quantity,
            quantityRaw: params.quantity || '',
            vp: getCurrentVp(),
            detector: result.detector || state.detector || '',
            code: state.productCode || context.internalCode || params.code || '',
            productCode: state.productCode || context.internalCode || '',
            internalCode: context.internalCode || '',
            outputAlias: state.outputAlias || alias
        }, extra || {});
    }

    function applyPanelSettings(result, context) {
        const detectorId = result.detector || '';
        const settings = api.getDetectorSettings(detectorId);
        const hadCustomSettings = Object.keys(settings).length > 0;
        let tokens = buildTemplateTokens(result, context);

        if (hasTemplate(settings.leftTemplate)) {
            result.left = api.renderTemplate(settings.leftTemplate, tokens) || result.left || '';
        }
        if (hasTemplate(settings.topTemplate)) {
            result.top = api.renderTemplate(settings.topTemplate, tokens);
        }
        if (hasTemplate(settings.bottomTemplate)) {
            result.bottom = api.renderTemplate(settings.bottomTemplate, tokens);
        }

        if (typeof settings.renameEnabled === 'boolean' || hasTemplate(settings.renameTemplate)) {
            result.rename = Object.assign({
                alias: result.left || detectorId || 'material',
                sizeAlias: tokens.sizeAlias || '',
                quantity: tokens.quantity || '1ks'
            }, result.rename || {});
            if (typeof settings.renameEnabled === 'boolean') {
                result.rename.enabled = settings.renameEnabled;
            }
            if (hasTemplate(settings.renameTemplate)) {
                result.rename.pattern = settings.renameTemplate;
            }
        }

        result.state = Object.assign({}, result.state || {});
        result.state.outputAlias = result.state.outputAlias || result.left || '';
        result.state.panelSettingsApplied = hadCustomSettings;
        result.state.params = Object.assign({}, getResultParams(result), result.state.params || {});
        tokens = buildTemplateTokens(result, context);
        result.tokens = tokens;
        result.state.tokens = tokens;
        window.__materialDetectorTokens = tokens;
        return result;
    }

    function setPerTabState(result, context) {
        const vp = getCurrentVp();
        const payload = Object.assign({
            vp,
            detector: result.detector || 'unknown',
            productCode: context.internalCode || '',
            outputAlias: (result.rename && result.rename.alias) || result.left || '',
            sizeAlias: (result.rename && result.rename.sizeAlias) || '',
            topBadge: result.top || '',
            bottomBadge: result.bottom || '',
            params: result.debug || {},
            tokens: result.tokens || {},
            updatedAt: new Date().toISOString()
        }, result.state || {});

        if (result.rename) {
            payload.rename = result.rename;
        }

        window.__materialDetectorState = payload;
        try {
            sessionStorage.setItem(stateKey(vp), JSON.stringify(payload));
        } catch (e) {
            console.warn('[materialDetector] session state save failed', e);
        }

        if (payload.sizeAlias) {
            try {
                localStorage.setItem(LAST_SIZE_ALIAS_STORAGE_PREFIX + vp, payload.sizeAlias);
            } catch (e) {}
        }

        return payload;
    }

    function getPerTabState() {
        const vp = getCurrentVp();
        if (window.__materialDetectorState && String(window.__materialDetectorState.vp || '') === vp) {
            return window.__materialDetectorState;
        }
        try {
            const raw = sessionStorage.getItem(stateKey(vp));
            if (!raw) return null;
            const parsed = JSON.parse(raw);
            const updatedTs = new Date(parsed.updatedAt || 0).getTime();
            if (!Number.isFinite(updatedTs) || Date.now() - updatedTs > STATE_TTL_MS) return null;
            return parsed;
        } catch (e) {
            return null;
        }
    }

    function setZoneValue(key, value) {
        const normalized = value == null ? '' : String(value).trim();
        window[key] = normalized;
        try {
            if (normalized) localStorage.setItem(key, normalized);
            else localStorage.removeItem(key);
        } catch (e) {}
        return normalized;
    }

    function writeZones(zones) {
        setZoneValue(ZONE_KEYS.left, zones.left || '');
        setZoneValue(ZONE_KEYS.right, zones.right || '');
        setZoneValue(ZONE_KEYS.top, zones.top || '');
        setZoneValue(ZONE_KEYS.bottom, zones.bottom || '');
    }

    function detectExpeditionDate() {
        const el = document.querySelector('#dodacia_lehota_label');
        if (!el) return '';
        const text = api.clean(el.textContent || el.value || '');
        const match = text.match(/(\d{1,2})\.\s*(\d{1,2})\./);
        if (!match) return '';
        return `${String(match[1]).padStart(2, '0')}. ${String(match[2]).padStart(2, '0')}.`;
    }

    function runCurrentDetector(context) {
        const detector = api.findDetector(context.internalCode, context);
        if (!detector) return null;
        try {
            const result = detector.detect(context, api);
            if (!result) return null;
            result.detector = result.detector || detector.id;
            return applyPanelSettings(result, context);
        } catch (e) {
            console.error('[materialDetector] detector failed', detector.id, e);
            return null;
        }
    }

    function detectCurrentLabel() {
        const context = api.collectPageContext();
        const result = runCurrentDetector(context);
        const right = detectExpeditionDate();

        if (!result) {
            return {
                zones: { left: '', right, top: '', bottom: '' },
                state: null,
                context,
                result: null
            };
        }

        const state = setPerTabState(result, context);
        return {
            zones: {
                left: result.left || '',
                right,
                top: result.top || '',
                bottom: result.bottom || ''
            },
            state,
            context,
            result
        };
    }

    function showDetailBadges(zones) {
        if (!zones.left && !zones.right && !zones.top) return;
        const h = document.querySelector('h1, h2');
        if (!h) return;

        let left = document.querySelector('#shortcut-info-label');
        let right = document.querySelector('#shortcut-info-date');
        let top = document.querySelector('#shortcut-info-top');

        if (!left) {
            left = document.createElement('span');
            left.id = 'shortcut-info-label';
            left.style.cssText = 'background:#fffa65;color:#000;padding:4px 8px;margin-left:12px;border-radius:4px;font-weight:bold;display:inline-block;';
            h.append(left);
        }
        if (!right) {
            right = document.createElement('span');
            right.id = 'shortcut-info-date';
            right.style.cssText = 'background:#d0ffb3;color:#000;padding:4px 8px;margin-left:8px;border-radius:4px;font-weight:bold;display:inline-block;';
            h.append(right);
        }
        if (!top) {
            top = document.createElement('span');
            top.id = 'shortcut-info-top';
            top.className = 'badge fs11';
            top.style.cssText = 'background:#000;color:#fff;border:1px solid #000;padding:4px 8px;margin-left:8px;border-radius:6px;font-weight:bold;display:inline-block;';
            h.append(top);
        }

        left.textContent = zones.left || '';
        right.textContent = zones.right || '';
        top.textContent = zones.top || '';
        top.style.display = zones.top ? 'inline-block' : 'none';
    }

    function updateSession(force = false) {
        const detected = detectCurrentLabel();
        const zones = detected.zones;
        const snapshot = JSON.stringify(zones);
        if (!force && snapshot === lastSnapshot) return;
        lastSnapshot = snapshot;
        writeZones(zones);
        showDetailBadges(zones);
        console.log('[materialDetector] updated', {
            internalCode: detected.context.internalCode || '',
            zones,
            detector: detected.result ? detected.result.detector : '',
            state: detected.state || null,
            forced: force
        });
        window.dispatchEvent(new CustomEvent('materialDetector:updated', { detail: detected }));
    }

    function forceRefreshSessionBurst() {
        lastSnapshot = '';
        updateSession(true);
        [80, 250, 700, 1500].forEach(delay => setTimeout(() => updateSession(true), delay));
    }

    function bootstrapRetries() {
        updateSession();
        [100, 250, 500, 1000, 2000, 3500, 5000, 8000, 12000].forEach(delay => setTimeout(updateSession, delay));
    }

    function startDomObserver() {
        if (observerStarted || !document.body) return;
        observerStarted = true;
        const observer = new MutationObserver(() => updateSession());
        observer.observe(document.body, { childList: true, subtree: true, characterData: true });
    }

    function ensureObserverWhenBodyExists() {
        if (document.body) {
            startDomObserver();
            return;
        }
        const waitBodyObserver = new MutationObserver(() => {
            if (!document.body) return;
            waitBodyObserver.disconnect();
            startDomObserver();
            updateSession();
        });
        waitBodyObserver.observe(document.documentElement, { childList: true, subtree: true });
    }

    function stripSizeUnitSuffix(sizeAlias) {
        return api.stripSizeUnitSuffix(sizeAlias);
    }

    function getRenameConfig() {
        const state = getPerTabState();
        const rename = state && state.rename;
        if (!rename || rename.enabled !== true) return null;
        return { state, rename };
    }

    function extractFilenameFromHref(href) {
        try {
            const url = new URL(href, location.href);
            const raw = decodeURIComponent(url.pathname.split('/').pop() || 'subor');
            const dot = raw.lastIndexOf('.');
            if (dot <= 0) return { base: raw, ext: '' };
            return { base: raw.slice(0, dot), ext: raw.slice(dot + 1) };
        } catch (e) {
            return { base: 'subor', ext: '' };
        }
    }

    function buildRenameTokens(originalHref, state, rename) {
        const vp = getCurrentVp();
        const original = extractFilenameFromHref(originalHref);
        const alias = rename.alias || state.outputAlias || window.TM_testoLeft || 'material';
        const sizeAlias = rename.sizeAlias || state.sizeAlias || localStorage.getItem(LAST_SIZE_ALIAS_STORAGE_PREFIX + vp) || 'bez_rozmeru';
        const quantity = rename.quantity || '1ks';
        const rawTokens = Object.assign({}, state.tokens || {}, {
            alias,
            size: stripSizeUnitSuffix(sizeAlias),
            sizeAlias,
            quantity,
            vp: vp || 'bezVP',
            detector: state.detector || '',
            code: state.productCode || '',
            original: original.base || 'subor',
            ext: original.ext || ''
        });
        const tokens = {};
        Object.entries(rawTokens).forEach(([key, value]) => {
            tokens[key] = key === 'original' || key === 'ext'
                ? api.sanitizeToken(value)
                : api.sanitizeSnakeToken(value);
        });
        return tokens;
    }

    function applyRenamePattern(pattern, tokens) {
        const selectedPattern = hasTemplate(pattern) ? pattern : DEFAULT_RENAME_PATTERN;
        let fileName = api.renderTemplate(selectedPattern, tokens);
        fileName = fileName
            .replace(/_+/g, '_')
            .replace(/\s+/g, ' ')
            .replace(/_\s/g, ' ')
            .replace(/\s+\./g, '.')
            .replace(/^[_\s]+|[_\s]+$/g, '');
        if (!tokens.ext) fileName = fileName.replace(/\.$/, '');
        return fileName || tokens.original || 'subor';
    }

    function buildNewFileName(originalHref) {
        const config = getRenameConfig();
        if (!config) return '';
        const tokens = buildRenameTokens(originalHref, config.state, config.rename);
        return applyRenamePattern(config.rename.pattern, tokens);
    }

    function hasDownloadFileHref(href) {
        return /\/data\/servicesForm\//i.test(href)
            || /\/vyrobne_prikazy\/detail\/downloadZip\//i.test(href)
            || /\/svg_editor\//i.test(href)
            || /\.[a-z0-9]{1,12}(\?|$)/i.test(href);
    }

    function isDownloadCandidate(anchor) {
        if (!anchor || !anchor.href) return false;
        if (anchor.hasAttribute(NATIVE_DOWNLOAD_ATTR)) return false;
        const href = anchor.href;
        const text = api.normalizeKey(anchor.textContent || '');
        const cls = anchor.className || '';
        if (hasDownloadFileHref(href)) return true;
        if (text.includes('stiahni') || text.includes('stiahnut')) return true;
        if (cls.includes('block mt5')) return true;
        return false;
    }

    function shouldRenameForCurrentOrder() {
        return !!getRenameConfig();
    }

    function browserDownload(url, fileName) {
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName || '';
        a.rel = 'noopener';
        a.style.display = 'none';
        a.setAttribute(NATIVE_DOWNLOAD_ATTR, '1');
        document.body.append(a);
        a.click();
        setTimeout(() => a.remove(), 0);
    }

    async function blobDownload(url, fileName) {
        const response = await fetch(url, { credentials: 'include', cache: 'no-store' });
        if (!response.ok) throw new Error('HTTP ' + response.status);
        const blob = await response.blob();
        const objectUrl = URL.createObjectURL(blob);
        browserDownload(objectUrl, fileName);
        setTimeout(() => URL.revokeObjectURL(objectUrl), 30000);
    }

    function gmDownload(url, fileName) {
        if (typeof GM_download !== 'function') {
            browserDownload(url, fileName);
            return;
        }
        try {
            const result = GM_download({
                url,
                name: fileName,
                saveAs: false,
                onerror: function (error) {
                    console.warn('[materialDetector] GM_download fallback failed', error);
                    browserDownload(url, fileName);
                },
                ontimeout: function (error) {
                    console.warn('[materialDetector] GM_download fallback timeout', error);
                    browserDownload(url, fileName);
                }
            });
            if (result && typeof result.catch === 'function') {
                result.catch(error => {
                    console.warn('[materialDetector] GM_download promise failed', error);
                    browserDownload(url, fileName);
                });
            }
        } catch (error) {
            console.warn('[materialDetector] GM_download throw', error);
            browserDownload(url, fileName);
        }
    }

    function startDownload(url, fileName) {
        blobDownload(url, fileName).catch(error => {
            console.warn('[materialDetector] blob download failed, using GM_download fallback', error);
            gmDownload(url, fileName);
        });
    }

    function initDownloadRename() {
        if (renameBound) return;
        renameBound = true;
        document.addEventListener('click', function (event) {
            const link = event.target.closest('a[href]');
            if (!link) return;
            if (!isDownloadCandidate(link)) return;
            if (!shouldRenameForCurrentOrder()) return;
            const fileName = buildNewFileName(link.href);
            if (!fileName) return;
            event.preventDefault();
            event.stopPropagation();
            startDownload(link.href, fileName);
            console.log('[materialDetector] download:', { from: link.href, as: fileName });
        }, true);
    }

    function initControlPanel() {
        if (!window.MaterialDetectorControlPanel || typeof window.MaterialDetectorControlPanel.init !== 'function') return;
        window.MaterialDetectorControlPanel.init({ onChange: forceRefreshSessionBurst });
    }

    function init() {
        api.exposeAliasHelpers();
        Object.values(ZONE_KEYS).forEach(key => { window[key] = localStorage.getItem(key) || ''; });

        bootstrapRetries();
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', updateSession, { once: true });
        } else {
            setTimeout(updateSession, 0);
        }
        window.addEventListener('load', forceRefreshSessionBurst);
        window.addEventListener('pageshow', forceRefreshSessionBurst);
        window.addEventListener('focus', forceRefreshSessionBurst);
        window.addEventListener('materialDetector:configChanged', forceRefreshSessionBurst);
        document.addEventListener('visibilitychange', function () {
            if (document.visibilityState === 'visible') forceRefreshSessionBurst();
            else setTimeout(updateSession, 0);
        });
        ensureObserverWhenBodyExists();
        initDownloadRename();
        initControlPanel();
    }

    init();
})();
