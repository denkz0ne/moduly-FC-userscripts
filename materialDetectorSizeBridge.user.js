// ==UserScript==
// @name         materialDetector Size Bridge
// @namespace    https://moduly.faxcopy.sk/
// @author       mato e.
// @version      1.1.0
// @description  Univerzalna detekcia velkosti vytlacku (A, mm, cm) pre materialDetector state.
// @updateURL    https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/materialDetectorSizeBridge.user.js
// @downloadURL  https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/materialDetectorSizeBridge.user.js
// @match        https://moduly.faxcopy.sk/vyrobne_prikazy/detail/index/*
// @grant        none
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

    function getCurrentVpFromUrl() {
        const match = location.pathname.match(/\/index\/(\d+)/);
        return match ? match[1] : '';
    }

    function getZdRows() {
        const root = document.querySelector('#zd-form-container #VPZDParams');
        if (!root) return [];

        return Array.from(root.querySelectorAll(':scope > div.flex'))
            .map(row => {
                const cols = row.querySelectorAll(':scope > div');
                if (cols.length < 2) return null;
                const label = (cols[0].textContent || '').replace(/\s+/g, ' ').trim();
                const values = Array.from(cols[1].querySelectorAll('.whitespace-pre-line'))
                    .map(el => (el.textContent || '').replace(/\s+/g, ' ').trim())
                    .filter(Boolean);

                const fallback = (cols[1].textContent || '').replace(/\s+/g, ' ').trim();
                if (!values.length && fallback) values.push(fallback);

                return { label, values };
            })
            .filter(Boolean);
    }

    function toCleanNumber(value) {
        if (!value) return '';
        const n = Number(value);
        if (!Number.isFinite(n)) return '';
        if (Math.abs(n - Math.round(n)) < 0.00001) return String(Math.round(n));
        return String(Math.round(n * 10) / 10).replace('.', ',');
    }

    function normalizeCmOutput(w, h) {
        const a = toCleanNumber(w);
        const b = toCleanNumber(h);
        if (!a || !b) return '';
        return a + 'x' + b + '_cm';
    }

    function parseSizeAlias(text) {
        const raw = String(text || '').trim();
        if (!raw) return '';

        const aMatch = raw.match(/\bA\s*([0-9]{1,2})\b/i);
        if (aMatch) return ('A' + aMatch[1]).toUpperCase();

        const cleaned = raw
            .replace(/×/g, 'x')
            .replace(/,/g, '.')
            .replace(/\s+/g, ' ')
            .trim();

        const mm = cleaned.match(/(\d{2,4}(?:\.\d+)?)\s*x\s*(\d{2,4}(?:\.\d+)?)\s*mm\b/i);
        if (mm) {
            const w = Number(mm[1]) / 10;
            const h = Number(mm[2]) / 10;
            return normalizeCmOutput(w, h);
        }

        const cm = cleaned.match(/(\d{1,4}(?:\.\d+)?)\s*x\s*(\d{1,4}(?:\.\d+)?)\s*cm\b/i);
        if (cm) {
            return normalizeCmOutput(cm[1], cm[2]);
        }

        const any = cleaned.match(/(\d{1,4}(?:\.\d+)?)\s*x\s*(\d{1,4}(?:\.\d+)?)/i);
        if (any) {
            const w = Number(any[1]);
            const h = Number(any[2]);
            if (Number.isFinite(w) && Number.isFinite(h)) {
                if (w > 200 || h > 200) return normalizeCmOutput(w / 10, h / 10);
                return normalizeCmOutput(w, h);
            }
        }

        return '';
    }

    function isLikelySizeLabel(label) {
        const key = normalizeKey(label);
        if (!key) return false;

        if (key.includes('format')) return true;
        if (key.includes('velkost')) return true;
        if (key.includes('rozmer')) return true;
        if (key.includes('sirka') || key.includes('vyska')) return true;
        if (key.includes('dlzka') || key.includes('sirka x vyska')) return true;

        return false;
    }

    function isBlockedLabel(label) {
        const key = normalizeKey(label);
        if (!key) return false;

        return [
            'pocet kusov',
            'pocet rovnakych vytlackov',
            'gramaz',
            'material',
            'tlacove medium',
            'subory',
            'upozornenie'
        ].some(b => key.includes(b));
    }

    function detectUniversalSizeAlias() {
        const rows = getZdRows();
        if (!rows.length) return '';

        const prioritized = [];
        const secondary = [];

        rows.forEach(row => {
            if (!row.values || !row.values.length) return;
            if (isBlockedLabel(row.label)) return;

            const joined = row.values.join(' | ');
            const hasSizePattern = /\bA\s*\d{1,2}\b/i.test(joined)
                || /(\d{1,4}(?:[.,]\d+)?)\s*[x×]\s*(\d{1,4}(?:[.,]\d+)?)/i.test(joined);

            if (isLikelySizeLabel(row.label)) {
                prioritized.push(joined);
            } else if (hasSizePattern) {
                secondary.push(joined);
            }
        });

        const candidates = prioritized.concat(secondary);
        for (const candidate of candidates) {
            const alias = parseSizeAlias(candidate);
            if (alias) return alias;
        }

        return '';
    }

    function applySizeAliasToState() {
        const vp = getCurrentVpFromUrl();
        if (!vp) return;

        const sizeAlias = detectUniversalSizeAlias();
        if (!sizeAlias) return;

        const baseState = (window.__materialDetectorState && String(window.__materialDetectorState.vp || '') === vp)
            ? window.__materialDetectorState
            : (() => {
                try {
                    const raw = sessionStorage.getItem('materialDetectorState:' + vp);
                    return raw ? JSON.parse(raw) : { vp };
                } catch (e) {
                    return { vp };
                }
            })();

        const nextParams = Object.assign({}, baseState.params || {}, { sizeAlias });
        const nextState = Object.assign({}, baseState, {
            vp,
            params: nextParams,
            sizeAlias,
            updatedAt: new Date().toISOString()
        });

        window.__materialDetectorState = nextState;

        try {
            sessionStorage.setItem('materialDetectorState:' + vp, JSON.stringify(nextState));
        } catch (e) {
            console.warn('[materialDetectorSizeBridge] session save failed', e);
        }
    }

    function start() {
        applySizeAliasToState();

        const retry = [100, 250, 500, 1000, 2000, 3500, 5000, 8000, 12000];
        retry.forEach(delay => setTimeout(applySizeAliasToState, delay));

        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', applySizeAliasToState, { once: true });
        }

        window.addEventListener('load', applySizeAliasToState);
        window.addEventListener('focus', applySizeAliasToState);

        const bootObs = new MutationObserver(() => applySizeAliasToState());
        bootObs.observe(document.documentElement, { childList: true, subtree: true, characterData: true });
    }

    start();
})();
