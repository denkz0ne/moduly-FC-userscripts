// ==UserScript==
// @name         materialDetector
// @namespace    https://moduly.faxcopy.sk/
// @author       mato e.
// @version      4.4.0
// @description  Material detekcia + univerzalna velkost + premenovanie stahovanych suborov.
// @updateURL    https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/materialDetector.user.js
// @downloadURL  https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/materialDetector.user.js
// @match        https://moduly.faxcopy.sk/vyrobne_prikazy/detail/index/*
// @grant        GM_download
// @run-at       document-start
// ==/UserScript==

(function () {
    'use strict';

    const STATE_KEY = 'materialDetectorState:';
    const TM_LEFT_KEY = 'TM_testoLeft';
    const TM_RIGHT_KEY = 'TM_testoRight';
    const TM_TOP_KEY = 'TM_top';
    const LAST_SIZE_ALIAS_KEY = 'materialDetector.lastSizeAlias:';

    let lastLeft = '';
    let lastRight = '';
    let lastTop = '';
    let observerStarted = false;
    let renameBound = false;

    function vpId() {
        const match = location.pathname.match(/\/index\/(\d+)/);
        return match ? match[1] : '';
    }

    function clean(text) {
        return String(text || '').replace(/\s+/g, ' ').trim();
    }

    function normalize(text) {
        return clean(text).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    }

    function getDetailInfo() {
        return document.querySelector('#vpDetailInfo') || document;
    }

    function getAllText() {
        const detail = getDetailInfo();
        const bodyText = document.body ? document.body.innerText || '' : '';
        return clean((detail.innerText || '') + ' ' + bodyText);
    }

    function setState(partial) {
        const next = Object.assign({ vp: vpId(), updatedAt: new Date().toISOString() }, partial || {});
        window.__materialDetectorState = next;
        try {
            sessionStorage.setItem(STATE_KEY + vpId(), JSON.stringify(next));
        } catch (e) {}
        return next;
    }

    function getState() {
        const currentVp = vpId();
        if (window.__materialDetectorState && String(window.__materialDetectorState.vp || '') === currentVp) {
            return window.__materialDetectorState;
        }
        try {
            const raw = sessionStorage.getItem(STATE_KEY + currentVp);
            if (!raw) return null;
            const parsed = JSON.parse(raw);
            return parsed && String(parsed.vp || '') === currentVp ? parsed : null;
        } catch (e) {
            return null;
        }
    }

    function getLastSizeAlias() {
        try {
            return String(localStorage.getItem(LAST_SIZE_ALIAS_KEY + vpId()) || '').trim();
        } catch (e) {
            return '';
        }
    }

    function setLastSizeAlias(value) {
        try {
            localStorage.setItem(LAST_SIZE_ALIAS_KEY + vpId(), String(value || '').trim());
        } catch (e) {}
    }

    function getSelectedOptionText(name) {
        const select = getDetailInfo().querySelector(`select[name='${name}']`);
        if (!select) return '';
        const option = select.options[select.selectedIndex];
        return option ? clean(option.textContent) : '';
    }

    function hasCanvas() {
        return /canvas/i.test(getSelectedOptionText('FO_CANVAS'));
    }

    function hasGiftPack() {
        const select = getDetailInfo().querySelector("select[name='FO_GIFT_PACK']");
        return !!select && !!clean(select.value);
    }

    function getInternalCode() {
        const text = getAllText();
        const match = text.match(/\b(48fh\d{4,6}|48rp\d{4,6}|48r\d{4,6}|48xk|48x[146])\b/i);
        return match ? match[1].toLowerCase() : '';
    }

    function splitDigits(digits) {
        const raw = String(digits || '').trim();
        if (!raw) return null;
        if (raw.length === 4) return { left: raw.slice(0, 2), right: raw.slice(2), size: `${raw.slice(0, 2)} ${raw.slice(2)}` };
        if (raw.length === 6) return { left: raw.slice(0, 3), right: raw.slice(3), size: `${raw.slice(0, 3)} ${raw.slice(3)}` };
        return null;
    }

    function parsePhotoobrazCode(code) {
        const lower = String(code || '').toLowerCase();
        if (lower === '48xk') return { kind: 'hexa', label: 'HEXA', sizeAlias: 'HEXA' };
        if (/^48x[146]$/.test(lower)) return { kind: 'hexa-premium', label: 'HEXA P', sizeAlias: 'HEXA P' };
        if (/^48fh\d{4,6}$/.test(lower)) {
            const split = splitDigits(lower.replace(/^48fh/, ''));
            if (!split) return null;
            return { kind: 'hod', label: `${split.size} HOD`, sizeAlias: `${split.left}x${split.right}_cm` };
        }
        const regular = lower.match(/^48r(p?)(\d{4,6})$/);
        if (!regular) return null;
        const premium = !!regular[1];
        const split = splitDigits(regular[2]);
        if (!split) return null;
        return { kind: premium ? 'premium' : 'regular', label: `${split.size}${premium ? ' P' : ''}`, sizeAlias: `${split.left}x${split.right}_cm` };
    }

    function detectUniversalSizeAlias() {
        const nodes = Array.from(getDetailInfo().querySelectorAll('input[disabled], input:not([type="hidden"]), select[disabled]'));
        for (const el of nodes) {
            const val = clean(el.value || el.textContent || '');
            const match = val.match(/(\d{1,4}(?:[.,]\d+)?)\s*[x×]\s*(\d{1,4}(?:[.,]\d+)?)(?:\s*cm|\s*mm)?/i);
            if (match) {
                const left = String(match[1]).replace(',', '.');
                const right = String(match[2]).replace(',', '.');
                const unit = /mm/i.test(val) ? 'mm' : 'cm';
                if (unit === 'mm') return `${Number(left) / 10}x${Number(right) / 10}_cm`;
                return `${left}x${right}_cm`;
            }
        }
        return '';
    }

    function detectPhotoobraz() {
        const code = getInternalCode();
        const parsed = parsePhotoobrazCode(code);
        if (!parsed) return null;

        const left = parsed.kind.indexOf('hexa') === 0 ? parsed.label : `${parsed.label}${hasCanvas() ? ' C' : ''}`;
        const top = hasGiftPack() ? 'DBAL' : '';
        const state = setState({
            detector: 'photoobraz',
            productCode: code,
            outputAlias: left,
            sizeAlias: parsed.sizeAlias,
            topBadge: top,
            params: { code, kind: parsed.kind, canvas: hasCanvas(), giftPack: hasGiftPack(), sizeAlias: parsed.sizeAlias }
        });
        return { tmLeft: left, tmTop: top, state };
    }

    function detect41tv() {
        const text = normalize(getAllText());
        if (!/\b41\s*tv\b/.test(text) && !/\b41tv\b/.test(text)) return null;
        const dims = detectUniversalSizeAlias();
        if (!dims) return null;
        const left = `${dims.replace(/_cm$/i, '').replace('x', ' ')} TV`;
        const top = hasGiftPack() ? 'DBAL' : '';
        const state = setState({
            detector: '41tv',
            productCode: '41tv',
            outputAlias: left,
            sizeAlias: dims,
            topBadge: top,
            params: { sizeAlias: dims, giftPack: hasGiftPack() }
        });
        return { tmLeft: left, tmTop: top, state };
    }

    function detect42fotoWeb() {
        const text = normalize(getAllText());
        if (!/(?:\b42\s*foto\b|\b48\s*foto\b|\bfoto\s*web\b|\bfoto\/web\b)/.test(text)) return null;
        const dims = detectUniversalSizeAlias();
        if (!dims) return null;
        const left = `${dims.replace(/_cm$/i, '').replace('x', ' ')} FOTO WEB`;
        const top = hasGiftPack() ? 'DBAL' : '';
        const state = setState({
            detector: '42fotoWeb',
            productCode: '42foto/web',
            outputAlias: left,
            sizeAlias: dims,
            topBadge: top,
            params: { sizeAlias: dims, giftPack: hasGiftPack() }
        });
        return { tmLeft: left, tmTop: top, state };
    }

    function detectFallback() {
        const sizeAlias = detectUniversalSizeAlias();
        if (!sizeAlias) return null;
        const left = hasCanvas() ? `${sizeAlias.replace(/_cm$/i, '').replace('x', ' ')} C` : sizeAlias.replace(/_cm$/i, '').replace('x', ' ');
        const top = hasGiftPack() ? 'DBAL' : '';
        const state = setState({ detector: 'fallback', productCode: 'fallback', outputAlias: left, sizeAlias, topBadge: top, params: { sizeAlias, canvas: hasCanvas(), giftPack: hasGiftPack() } });
        return { tmLeft: left, tmTop: top, state };
    }

    function detectRightText() {
        const label = document.querySelector('#dodacia_lehota_label');
        const raw = clean(label ? label.textContent || '' : '');
        const match = raw.match(/(\d{1,2})\.(\d{1,2})\./);
        if (match) {
            const day = String(match[1]).padStart(2, '0');
            const month = String(match[2]).padStart(2, '0');
            return `${day}. ${month}.`;
        }
        return raw;
    }

    function detectCurrentLabel() {
        return detectPhotoobraz() || detect41tv() || detect42fotoWeb() || detectFallback();
    }

    function showLabel(leftText, rightText, topText) {
        const title = document.querySelector('h1, h2');
        if (!title) return;

        let left = document.querySelector('#shortcut-info-label');
        let right = document.querySelector('#shortcut-info-date');
        let top = document.querySelector('#shortcut-info-top');

        if (!left) {
            left = document.createElement('span');
            left.id = 'shortcut-info-label';
            left.style.cssText = 'background:#fffa65;color:#000;padding:4px 8px;margin-left:12px;border-radius:4px;font-weight:bold;display:inline-block;';
            title.appendChild(left);
        }
        if (!right) {
            right = document.createElement('span');
            right.id = 'shortcut-info-date';
            right.style.cssText = 'background:#d0ffb3;color:#000;padding:4px 8px;margin-left:8px;border-radius:4px;font-weight:bold;display:inline-block;';
            title.appendChild(right);
        }
        if (!top) {
            top = document.createElement('span');
            top.id = 'shortcut-info-top';
            top.className = 'badge fs11';
            top.style.cssText = 'background:#000;color:#fff;border:1px solid #000;padding:4px 8px;margin-left:8px;border-radius:6px;font-weight:bold;display:inline-block;';
            title.appendChild(top);
        }

        left.textContent = leftText || '';
        right.textContent = rightText || '';
        top.textContent = topText || '';
        top.style.display = topText ? 'inline-block' : 'none';
    }

    function writeToSession(leftText, rightText, topText) {
        window.TM_testoLeft = leftText || '';
        window.TM_testoRight = rightText || '';
        window.TM_top = topText || '';
        try {
            if (leftText) localStorage.setItem(TM_LEFT_KEY, leftText); else localStorage.removeItem(TM_LEFT_KEY);
            if (rightText) localStorage.setItem(TM_RIGHT_KEY, rightText); else localStorage.removeItem(TM_RIGHT_KEY);
            if (topText) localStorage.setItem(TM_TOP_KEY, topText); else localStorage.removeItem(TM_TOP_KEY);
        } catch (e) {}
    }

    function updateSession(force) {
        const detected = detectCurrentLabel();
        const leftText = detected ? detected.tmLeft : '';
        const rightText = detectRightText();
        const topText = detected ? detected.tmTop : '';
        if (!force && leftText === lastLeft && rightText === lastRight && topText === lastTop) return;
        lastLeft = leftText;
        lastRight = rightText;
        lastTop = topText;
        if (detected && detected.state) setState(detected.state);
        writeToSession(leftText, rightText, topText);
        showLabel(leftText, rightText, topText);
        console.log('[materialDetector] updated', { leftText, rightText, topText, forced: !!force, state: window.__materialDetectorState || null });
    }

    function burstRefresh() {
        lastLeft = '';
        lastRight = '';
        lastTop = '';
        updateSession(true);
        [80, 250, 700, 1500].forEach((delay) => setTimeout(() => updateSession(true), delay));
    }

    function bootstrapRetries() {
        updateSession(false);
        [100, 250, 500, 1000, 2000, 3500, 5000, 8000, 12000].forEach((delay) => setTimeout(() => updateSession(false), delay));
    }

    function startObserver() {
        if (observerStarted || !document.body) return;
        observerStarted = true;
        const obs = new MutationObserver(() => updateSession(false));
        obs.observe(document.body, { childList: true, subtree: true, characterData: true });
    }

    function ensureObserver() {
        if (document.body) {
            startObserver();
            return;
        }
        const wait = new MutationObserver(() => {
            if (!document.body) return;
            wait.disconnect();
            startObserver();
            updateSession(false);
        });
        wait.observe(document.documentElement, { childList: true, subtree: true });
    }

    function getLastSizeAliasForRename() {
        const state = getState();
        if (state && state.sizeAlias) return String(state.sizeAlias).trim();
        return getLastSizeAlias();
    }

    function getNameParts() {
        const state = getState();
        let alias = state && state.outputAlias ? String(state.outputAlias).trim() : (window.TM_testoLeft || '').trim();
        let sizeAlias = getLastSizeAliasForRename() || '';
        if (!sizeAlias && state && state.sizeAlias) sizeAlias = String(state.sizeAlias).trim();
        if (!sizeAlias && alias) sizeAlias = alias;
        const vp = vpId();
        return { alias: clean(alias || 'material').replace(/\s+/g, '_'), size: clean(sizeAlias || 'bez_rozmeru').replace(/_cm$/i, '').replace(/\s+/g, '_'), vp: clean(vp || 'bezVP'), qty: '1ks' };
    }

    function extractFilenameFromHref(href) {
        try {
            const url = new URL(href, location.href);
            const file = decodeURIComponent(url.pathname.split('/').pop() || 'subor');
            const idx = file.lastIndexOf('.');
            if (idx <= 0) return { base: file, ext: '' };
            return { base: file.slice(0, idx), ext: file.slice(idx + 1) };
        } catch (e) {
            return { base: 'subor', ext: '' };
        }
    }

    function buildNewFileName(href) {
        const parts = getNameParts();
        const original = extractFilenameFromHref(href);
        const prefix = [parts.alias, parts.size, parts.qty, parts.vp].join('_');
        const ext = clean(original.ext);
        const base = clean(original.base);
        return ext ? `${prefix} ${base}.${ext}` : `${prefix} ${base}`;
    }

    function isDownloadCandidate(link) {
        const href = link && link.href ? String(link.href) : '';
        const text = clean(link.textContent || '').toLowerCase();
        const cls = clean(link.className || '');
        return /\/svg_editor\//i.test(href) || /\.(pdf|png|jpg|jpeg|tif|tiff|zip)(\?|$)/i.test(href) || text.includes('stiahni') || text.includes('stiahnut') || cls.includes('block mt5');
    }

    function shouldRenameForCurrentOrder() {
        return !!detectCurrentLabel();
    }

    function startDownload(url, fileName) {
        if (typeof GM_download === 'function') {
            GM_download({ url, name: fileName, saveAs: false, onerror: function () { window.open(url, '_blank', 'noopener'); } });
            return;
        }
        window.open(url, '_blank', 'noopener');
    }

    function initRename() {
        if (renameBound) return;
        renameBound = true;
        document.addEventListener('click', function (event) {
            const link = event.target.closest('a[href]');
            if (!link) return;
            if (!isDownloadCandidate(link)) return;
            if (!shouldRenameForCurrentOrder()) return;
            event.preventDefault();
            event.stopPropagation();
            startDownload(link.href, buildNewFileName(link.href));
        }, true);
    }

    function init() {
        window.TM_testoLeft = String(localStorage.getItem(TM_LEFT_KEY) || '');
        window.TM_testoRight = String(localStorage.getItem(TM_RIGHT_KEY) || '');
        window.TM_top = String(localStorage.getItem(TM_TOP_KEY) || '');

        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => updateSession(false), { once: true });
        } else {
            setTimeout(() => updateSession(false), 0);
        }

        window.addEventListener('load', burstRefresh);
        window.addEventListener('pageshow', burstRefresh);
        window.addEventListener('focus', burstRefresh);
        document.addEventListener('visibilitychange', function () { if (document.visibilityState === 'visible') burstRefresh(); });

        bootstrapRetries();
        ensureObserver();
        initRename();
    }

    init();
})();