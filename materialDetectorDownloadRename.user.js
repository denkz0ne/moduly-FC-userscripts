// ==UserScript==
// @name         materialDetector Download Rename
// @namespace    https://moduly.faxcopy.sk/
// @author       mato e.
// @version      1.1.0
// @description  Premenuje stiahnute podklady podla materialDetector stavu.
// @updateURL    https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/materialDetectorDownloadRename.user.js
// @downloadURL  https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/materialDetectorDownloadRename.user.js
// @match        https://moduly.faxcopy.sk/vyrobne_prikazy/detail/index/*
// @grant        GM_download
// @run-at       document-start
// ==/UserScript==

(function () {
    'use strict';

    function normalizeKey(text) {
        if (!text) return '';
        return String(text)
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/\s+/g, ' ')
            .trim();
    }

    function sanitizeToken(value) {
        return String(value || '')
            .replace(/[\\/:*?"<>|]+/g, ' ')
            .replace(/\s+/g, ' ')
            .trim();
    }

    function sanitizeSnakeToken(value) {
        return sanitizeToken(value)
            .replace(/\s+/g, '_')
            .replace(/_+/g, '_')
            .replace(/^_+|_+$/g, '');
    }

    function getCurrentVpFromUrl() {
        const match = location.pathname.match(/\/index\/(\d+)/);
        return match ? match[1] : '';
    }

    function getStateFromSession(vp) {
        try {
            const raw = sessionStorage.getItem('materialDetectorState:' + vp);
            if (!raw) return null;
            return JSON.parse(raw);
        } catch (e) {
            return null;
        }
    }

    function getMaterialDetectorState() {
        const vp = getCurrentVpFromUrl();
        if (window.__materialDetectorState && String(window.__materialDetectorState.vp || '') === vp) {
            return window.__materialDetectorState;
        }

        return getStateFromSession(vp);
    }

    function parseSizeAliasFromText(text) {
        const raw = String(text || '').trim();
        if (!raw) return '';

        const iso = raw.match(/\bA\s*([0-9]{1,2})\b/i);
        if (iso) return ('A' + iso[1]).toUpperCase();

        const normalized = raw
            .replace(/×/g, 'x')
            .replace(/\s+/g, ' ')
            .trim();

        const mm = normalized.match(/(\d{2,4}(?:[.,]\d+)?)\s*x\s*(\d{2,4}(?:[.,]\d+)?)\s*mm\b/i);
        if (mm) {
            const w = Number(mm[1].replace(',', '.')) / 10;
            const h = Number(mm[2].replace(',', '.')) / 10;
            if (Number.isFinite(w) && Number.isFinite(h)) {
                const sw = String(Math.round(w * 10) / 10).replace('.', ',');
                const sh = String(Math.round(h * 10) / 10).replace('.', ',');
                return sw + 'x' + sh + '_cm';
            }
        }

        const cm = normalized.match(/(\d{1,4}(?:[.,]\d+)?)\s*x\s*(\d{1,4}(?:[.,]\d+)?)\s*cm\b/i);
        if (cm) {
            const sw = cm[1].replace('.', ',');
            const sh = cm[2].replace('.', ',');
            return sw + 'x' + sh + '_cm';
        }

        return '';
    }

    function parseLeftFallback() {
        const left = String(window.TM_testoLeft || localStorage.getItem('TM_testoLeft') || '').trim();
        if (!left) return { material: '', params: [], sizeAlias: '', qty: '' };

        const mainPart = left.split('|')[0].trim();
        const qtyMatch = left.match(/(\d+)\s*ks/i);
        const qty = qtyMatch ? qtyMatch[1] : '';

        const sizeAlias = parseSizeAliasFromText(mainPart);

        const norm = normalizeKey(mainPart);
        const params = [];
        if (/\bcb\b/i.test(norm)) params.push('cb');
        if (/\bf\b/i.test(norm)) params.push('f');
        if (norm.includes('+ skl') || norm.includes('sklad')) params.push('skl');

        let material = mainPart;
        material = material.replace(/\bcb\b/gi, '').replace(/\bf\b/gi, '').replace(/\+\s*skl/gi, '');
        material = sanitizeToken(material);

        return { material, params, sizeAlias, qty };
    }

    function getNameParts() {
        const vp = getCurrentVpFromUrl();
        const state = getMaterialDetectorState();

        let material = '';
        let params = [];
        let sizeAlias = '';
        let qty = '';

        if (state && state.params) {
            const p = state.params;

            material = sanitizeToken(p.materialAlias || p.material || state.outputAlias || '');
            material = material.split('|')[0].trim();

            if (p.colorCode) params.push(sanitizeToken(p.colorCode));
            if (p.folding) {
                const fold = normalizeKey(p.folding);
                if (fold && fold !== 'nie' && !fold.includes('bez')) params.push('skl');
            }
            if (p.variant) params.push(sanitizeToken(p.variant));
            if (p.weight) params.push(sanitizeToken(p.weight));

            sizeAlias = sanitizeToken(p.sizeAlias || state.sizeAlias || '');
            qty = String(p.quantity || '').match(/\d+/)?.[0] || '';
        }

        const fallback = parseLeftFallback();
        if (!material) material = fallback.material;
        if (!params.length) params = fallback.params;
        if (!sizeAlias) sizeAlias = fallback.sizeAlias;
        if (!qty) qty = fallback.qty;

        const materialPart = sanitizeSnakeToken(material || 'material');
        const paramsPart = sanitizeSnakeToken(params.filter(Boolean).join('_') || 'bez_parametrov');
        const sizePart = sanitizeSnakeToken(sizeAlias || 'bez_rozmeru');
        const qtyPart = sanitizeSnakeToken((qty ? qty + 'ks' : '1ks'));
        const vpPart = sanitizeSnakeToken(vp || 'bezVP');

        return { materialPart, paramsPart, sizePart, qtyPart, vpPart };
    }

    function extractFilenameFromHref(href) {
        try {
            const url = new URL(href, location.href);
            const raw = decodeURIComponent(url.pathname.split('/').pop() || 'subor');
            const dot = raw.lastIndexOf('.');
            if (dot <= 0) return { base: raw, ext: '' };
            return {
                base: raw.slice(0, dot),
                ext: raw.slice(dot + 1)
            };
        } catch (e) {
            return { base: 'subor', ext: '' };
        }
    }

    function buildNewFileName(originalHref) {
        const parts = getNameParts();
        const original = extractFilenameFromHref(originalHref);

        const prefix = [parts.materialPart, parts.paramsPart, parts.sizePart, parts.qtyPart, parts.vpPart].join('_');
        const originalBase = sanitizeToken(original.base || 'subor');
        const ext = sanitizeToken(original.ext || '');

        return ext ? (prefix + ' ' + originalBase + '.' + ext) : (prefix + ' ' + originalBase);
    }

    function isDownloadCandidate(anchor) {
        if (!anchor || !anchor.href) return false;

        const href = anchor.href;
        const text = (anchor.textContent || '').toLowerCase();
        const cls = anchor.className || '';

        if (/\/data\/servicesForm\//i.test(href)) return true;
        if (/\/svg_editor\//i.test(href)) return true;
        if (/\.(pdf|png|jpg|jpeg|tif|tiff|zip)(\?|$)/i.test(href)) return true;
        if (text.includes('stiahni') || text.includes('stiahnut')) return true;
        if (cls.includes('block mt5')) return true;

        return false;
    }

    function startDownload(url, fileName) {
        if (typeof GM_download === 'function') {
            GM_download({
                url,
                name: fileName,
                saveAs: false,
                onerror: function () {
                    window.open(url, '_blank', 'noopener');
                }
            });
            return;
        }

        window.open(url, '_blank', 'noopener');
    }

    document.addEventListener('click', function (event) {
        const link = event.target.closest('a[href]');
        if (!link) return;
        if (!isDownloadCandidate(link)) return;

        event.preventDefault();
        event.stopPropagation();

        const fileName = buildNewFileName(link.href);
        startDownload(link.href, fileName);

        console.log('[materialDetectorDownloadRename] download:', {
            from: link.href,
            as: fileName
        });
    }, true);
})();
