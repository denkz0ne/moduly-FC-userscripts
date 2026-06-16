// ==UserScript==
// @name         labelRegenerator
// @namespace    https://moduly.faxcopy.sk/
// @author       mato e.
// @version      1.6.0
// @description  Uprava print stitku, overlay zony a klavesa L pre otvorenie, tlac a zatvorenie stitku.
// @updateURL    https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/labelRegenerator.user.js
// @downloadURL  https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/labelRegenerator.user.js
// @match        https://moduly.faxcopy.sk/vyrobne_prikazy/detail/printLabel/*
// @match        https://moduly.faxcopy.sk/vyrobne_prikazy/detail/index/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function () {
    'use strict';

    const LABEL_WIDTH_MM = 62;
    const LABEL_HEIGHT_MM = 45;
    const SOURCE_LABEL_WIDTH_MM = 86;
    const SOURCE_LABEL_HEIGHT_MM = 50;
    const SAFE_MARGIN_MM = 1;
    const TOP_ZONES = [
        { key: 'TM_top', id: 'lr-zone-top' },
        { key: 'TM_bottom', id: 'lr-zone-bottom' }
    ];

    function isPrintLabelPage() {
        return /\/vyrobne_prikazy\/detail\/printLabel\//.test(location.pathname);
    }

    function ensureFont() {
        if (!document.head) return;
        if (document.querySelector('link[data-label-regenerator-font="roboto-condensed"]')) return;
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap';
        link.setAttribute('data-label-regenerator-font', 'roboto-condensed');
        document.head.appendChild(link);
    }

    function injectStyles() {
        if (!document.head) return;
        if (document.getElementById('label-regenerator-styles')) return;
        const style = document.createElement('style');
        style.id = 'label-regenerator-styles';
        style.textContent = `
            :root {
                --lr-label-width: ${LABEL_WIDTH_MM}mm;
                --lr-label-height: ${LABEL_HEIGHT_MM}mm;
                --lr-safe-margin: ${SAFE_MARGIN_MM}mm;
            }

            #label {
                position: relative !important;
                width: var(--lr-label-width) !important;
                min-width: var(--lr-label-width) !important;
                max-width: var(--lr-label-width) !important;
                height: var(--lr-label-height) !important;
                min-height: var(--lr-label-height) !important;
                max-height: var(--lr-label-height) !important;
                box-sizing: border-box !important;
                overflow: hidden !important;
                border: 0 !important;
            }

            #label-regenerator-overlay {
                position: absolute;
                inset: 0;
                z-index: 2147483647;
                pointer-events: none;
                box-sizing: border-box;
                overflow: hidden;
            }

            #label-regenerator-overlay .lr-zone {
                position: absolute;
                box-sizing: border-box;
                overflow: hidden;
                background: transparent;
                color: #111;
                font-family: 'Roboto Condensed', Arial, sans-serif;
                font-weight: 400;
                line-height: 1;
                white-space: nowrap;
                padding: 0;
            }

            #label-regenerator-overlay .lr-zone > span {
                position: absolute;
                top: 50%;
                display: block;
                overflow: hidden;
                text-overflow: clip;
                transform: translateY(-50%) scale(1);
            }

            #lr-zone-testoleft {
                left: var(--lr-safe-margin);
                bottom: 4.0mm;
                width: 41mm;
                height: 5.6mm;
                font-size: 5.4mm;
            }

            #lr-zone-testoleft > span {
                left: 1.2mm;
                right: 1.2mm;
                width: auto;
                text-align: left;
                transform-origin: left center;
            }

            #lr-zone-testoright {
                right: var(--lr-safe-margin);
                bottom: 4.0mm;
                width: 18mm;
                height: 5.6mm;
                font-size: 5.2mm;
            }

            #lr-zone-testoright > span,
            #lr-zone-top > span,
            #lr-zone-bottom > span {
                left: 1.2mm;
                right: 1.2mm;
                width: auto;
                text-align: right;
                transform-origin: right center;
            }

            #lr-zone-top,
            #lr-zone-bottom {
                right: var(--lr-safe-margin);
                width: 20.5mm;
                height: 6.2mm;
                font-size: 4.7mm;
            }

            #lr-zone-top {
                top: 0.4mm;
                border: 1px solid #000;
                background: #000;
                color: #fff;
                border-radius: 6px;
                padding: 0 0.5mm;
            }

            #lr-zone-top > span {
                color: #fff;
                text-align: center;
            }

            #lr-zone-bottom {
                top: 6.8mm;
            }

            @media print {
                @page {
                    size: ${LABEL_WIDTH_MM}mm ${LABEL_HEIGHT_MM}mm;
                    margin: 0;
                }

                html,
                body {
                    margin: 0 !important;
                    padding: 0 !important;
                    width: ${LABEL_WIDTH_MM}mm !important;
                    height: ${LABEL_HEIGHT_MM}mm !important;
                    overflow: hidden !important;
                    max-height: ${LABEL_HEIGHT_MM}mm !important;
                }

                #label,
                #label-regenerator-overlay {
                    page-break-inside: avoid !important;
                    break-inside: avoid !important;
                    overflow: hidden !important;
                }
            }
        `;
        document.head.appendChild(style);
    }

    function getStoredValue(key) {
        return localStorage.getItem(key) || '';
    }

    function setStoredValue(key, value) {
        const normalized = value == null ? '' : String(value);
        if (normalized) localStorage.setItem(key, normalized);
        else localStorage.removeItem(key);
        return normalized;
    }

    function buildZone(id) {
        const zone = document.createElement('div');
        zone.id = id;
        zone.className = 'lr-zone';
        zone.dataset.empty = 'true';
        const span = document.createElement('span');
        span.className = 'lr-zone-text';
        zone.appendChild(span);
        return zone;
    }

    function ensureOverlay() {
        const label = document.querySelector('#label');
        if (!label) return null;
        let overlay = document.getElementById('label-regenerator-overlay');
        if (overlay) return overlay;
        overlay = document.createElement('div');
        overlay.id = 'label-regenerator-overlay';
        overlay.appendChild(buildZone('lr-zone-testoleft'));
        overlay.appendChild(buildZone('lr-zone-testoright'));
        overlay.appendChild(buildZone('lr-zone-top'));
        overlay.appendChild(buildZone('lr-zone-bottom'));
        label.appendChild(overlay);
        return overlay;
    }

    function fitZone(zone) {
        const text = zone.querySelector('.lr-zone-text');
        if (!text) return;
        text.style.transform = 'translateY(-50%) scale(1)';
        const available = zone.clientWidth - 4;
        if (available <= 0) return;
        const measured = text.scrollWidth;
        if (measured > available) {
            const scale = Math.max(0.55, available / measured);
            text.style.transform = `translateY(-50%) scale(${scale})`;
        }
    }

    function setZoneText(zoneId, value) {
        const zone = document.getElementById(zoneId);
        if (!zone) return;
        const text = zone.querySelector('.lr-zone-text');
        if (!text) return;
        const normalized = value == null ? '' : String(value).trim();
        zone.dataset.empty = normalized ? 'false' : 'true';
        text.textContent = normalized;
        fitZone(zone);
    }

    function refreshZones() {
        setZoneText('lr-zone-testoleft', window.TM_testoLeft || getStoredValue('TM_testoLeft'));
        setZoneText('lr-zone-testoright', window.TM_testoRight || getStoredValue('TM_testoRight'));
        TOP_ZONES.forEach((zone) => {
            setZoneText(zone.id, window[zone.key] || getStoredValue(zone.key));
        });
    }

    function exposeApi() {
        window.labelRegeneratorSetZone = (zoneName, value) => {
            const key = String(zoneName || '').trim();
            const allowed = ['TM_testoLeft', 'TM_testoRight', ...TOP_ZONES.map((zone) => zone.key)];
            if (!allowed.includes(key)) return;
            const normalized = value == null ? '' : String(value);
            if (key === 'TM_testoLeft') {
                window.TM_testoLeft = normalized;
            } else if (key === 'TM_testoRight') {
                window.TM_testoRight = normalized;
            } else {
                window[key] = normalized;
            }
            setStoredValue(key, normalized);
            refreshZones();
        };
        window.labelRegeneratorRefresh = refreshZones;
    }

    function applyLayout() {
        const predajna = document.querySelector('#predajna .rotate');
        if (predajna) predajna.style.fontSize = '27pt';

        const label = document.querySelector('#label');
        if (!label) return;
        label.style.position = 'relative';
        label.style.width = `${LABEL_WIDTH_MM}mm`;
        label.style.height = `${LABEL_HEIGHT_MM}mm`;
        label.style.overflow = 'hidden';
        label.style.border = '0';

        const obj = document.querySelector('.obj');
        if (obj) obj.style.height = '16mm';

        const block = document.querySelector('#data > div');
        if (block) block.style.marginBottom = '1mm';
    }

    function markReady() {
        if (!isPrintLabelPage()) return;
        window.__labelRegeneratorReady = false;
        const finalize = () => {
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    refreshZones();
                    window.__labelRegeneratorReady = true;
                    window.dispatchEvent(new Event('labelRegeneratorReady'));
                });
            });
        };
        if (document.fonts && document.fonts.ready) {
            document.fonts.ready.then(() => setTimeout(finalize, 50)).catch(() => setTimeout(finalize, 120));
        } else {
            setTimeout(finalize, 120);
        }
    }

    function getVpNumber() {
        const strong = document.querySelector('strong.red');
        return strong ? strong.textContent.trim() : null;
    }

    function syncFromDetailPage() {
        if (isPrintLabelPage()) return;
        const left = document.querySelector('#shortcut-info-label');
        const right = document.querySelector('#shortcut-info-date');
        const top = document.querySelector('#shortcut-info-top');
        window.TM_testoLeft = left ? (left.textContent || '').trim() : getStoredValue('TM_testoLeft');
        window.TM_testoRight = right ? (right.textContent || '').trim() : getStoredValue('TM_testoRight');
        window.TM_top = top ? (top.textContent || '').trim() : getStoredValue('TM_top');
        setStoredValue('TM_testoLeft', window.TM_testoLeft);
        setStoredValue('TM_testoRight', window.TM_testoRight);
        setStoredValue('TM_top', window.TM_top);
    }

    function triggerPrintWhenReady(printWindow) {
        const deadlineMs = 15000;
        const startedAt = Date.now();
        const timer = setInterval(() => {
            const timedOut = Date.now() - startedAt > deadlineMs;
            const ready = !!printWindow.__labelRegeneratorReady;
            if (printWindow.closed) {
                clearInterval(timer);
                return;
            }
            if (ready || timedOut) {
                clearInterval(timer);
                printWindow.print();
                setTimeout(() => {
                    if (!printWindow.closed) printWindow.close();
                }, 1200);
            }
        }, 120);
    }

    function pressLAction() {
        if (!document.activeElement) return;
        if (['INPUT', 'SELECT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;
        const vpNumber = getVpNumber();
        if (!vpNumber) return;
        syncFromDetailPage();
        const url = `https://moduly.faxcopy.sk/vyrobne_prikazy/detail/printLabel/${vpNumber}`;
        const w = window.open(url, '_blank');
        if (!w) return;
        w.addEventListener('load', () => triggerPrintWhenReady(w), { once: true });
    }

    ensureFont();
    injectStyles();

    window.TM_testoLeft = getStoredValue('TM_testoLeft') || '';
    window.TM_testoRight = getStoredValue('TM_testoRight') || '';
    window.TM_top = getStoredValue('TM_top') || '';

    window.addEventListener('unload', () => {
        if (!isPrintLabelPage()) return;
        localStorage.removeItem('TM_testoLeft');
        localStorage.removeItem('TM_testoRight');
    });

    exposeApi();
    applyLayout();
    ensureOverlay();
    refreshZones();

    window.addEventListener('resize', refreshZones);
    window.addEventListener('keydown', (e) => {
        if (e.key.toLowerCase() === 'l' && !e.repeat) pressLAction();
    });

    markReady();
})();