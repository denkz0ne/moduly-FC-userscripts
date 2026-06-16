// ==UserScript==
// @name         labelRegenerator
// @namespace    https://moduly.faxcopy.sk/
// @author       mato e.
// @version      1.5
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
    const OVERLAY_BORDER = '0 solid transparent';
    const TOP_ZONES = [
        { key: 'TM_top', id: 'lr-zone-top' },
        { key: 'TM_bottom', id: 'lr-zone-bottom' }
    ];

    function isPrintLabelPage() {
        return /\/vyrobne_prikazy\/detail\/printLabel\//.test(location.pathname);
    }

    function ensureRobotoCondensedFont() {
        if (!document.head) return;
        if (document.querySelector('link[data-label-regenerator-font="roboto-condensed"]')) return;

        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap';
        link.setAttribute('data-label-regenerator-font', 'roboto-condensed');
        document.head.appendChild(link);
    }

    function injectBaseStyles() {
        if (!document.head) return;
        if (document.getElementById('label-regenerator-styles')) return;

        const style = document.createElement('style');
        style.id = 'label-regenerator-styles';
        style.textContent = `
            :root {
                --lr-label-width: ${LABEL_WIDTH_MM}mm;
                --lr-label-height: ${LABEL_HEIGHT_MM}mm;
                --lr-safe-margin: ${SAFE_MARGIN_MM}mm;
                --lr-overlay-border: ${OVERLAY_BORDER};
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

            #label-regenerator-base {
                position: absolute;
                top: 0;
                left: 0;
                width: ${SOURCE_LABEL_WIDTH_MM}mm;
                height: ${SOURCE_LABEL_HEIGHT_MM}mm;
                transform-origin: top left;
                pointer-events: none;
                box-sizing: border-box;
                overflow: hidden;
            }

            #label-regenerator-overlay .lr-zone {
                position: absolute;
                box-sizing: border-box;
                overflow: hidden;
                border: var(--lr-overlay-border);
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

                #label {
                    page-break-inside: avoid !important;
                    break-inside: avoid !important;
                    overflow: hidden !important;
                }

                #label-regenerator-base,
                #label-regenerator-overlay {
                    page-break-inside: avoid !important;
                    break-inside: avoid !important;
                    overflow: hidden !important;
                }
            }
        `;
        document.head.appendChild(style);
    }

    function getStoredZoneValue(key) {
        return localStorage.getItem(key) || '';
    }

    function setStoredZoneValue(key, value) {
        const normalized = value == null ? '' : String(value);
        if (normalized) {
            localStorage.setItem(key, normalized);
        } else {
            localStorage.removeItem(key);
        }
        return normalized;
    }

    function buildZone(id, zoneName) {
        const zone = document.createElement('div');
        zone.id = id;
        zone.className = 'lr-zone';
        zone.dataset.zone = zoneName;
        zone.dataset.empty = 'true';

        const text = document.createElement('span');
        text.className = 'lr-zone-text';
        zone.appendChild(text);
        return zone;
    }

    function ensureBaseLayer() {
        const label = document.querySelector('#label');
        if (!label) return null;

        let base = document.getElementById('label-regenerator-base');
        if (base) return base;

        base = document.createElement('div');
        base.id = 'label-regenerator-base';

        const nodes = Array.from(label.childNodes);
        nodes.forEach((node) => base.appendChild(node));

        label.appendChild(base);
        return base;
    }

    function syncBaseScale() {
        const base = document.getElementById('label-regenerator-base');
        if (!base) return;

        const scale = Math.min(
            LABEL_WIDTH_MM / SOURCE_LABEL_WIDTH_MM,
            LABEL_HEIGHT_MM / SOURCE_LABEL_HEIGHT_MM
        );

        base.style.transform = `scale(${scale})`;
    }

    function ensureOverlayLayer() {
        const label = document.querySelector('#label');
        if (!label) return null;

        let overlay = document.getElementById('label-regenerator-overlay');
        if (overlay) return overlay;

        overlay = document.createElement('div');
        overlay.id = 'label-regenerator-overlay';

        overlay.appendChild(buildZone('lr-zone-testoleft', 'testoleft'));
        overlay.appendChild(buildZone('lr-zone-testoright', 'testoright'));
        overlay.appendChild(buildZone('lr-zone-top', 'TM_top'));
        overlay.appendChild(buildZone('lr-zone-bottom', 'TM_bottom'));

        label.appendChild(overlay);
        return overlay;
    }

    function fitZoneText(zone) {
        const text = zone.querySelector('.lr-zone-text');
        if (!text) return;

        const origin = getComputedStyle(text).transformOrigin;
        text.style.transformOrigin = origin;
        text.style.transform = 'translateY(-50%) scale(1)';
        const horizontalPadding = 4;
        const availableWidth = zone.clientWidth - horizontalPadding;
        if (availableWidth <= 0) return;

        const measuredWidth = text.scrollWidth;
        if (measuredWidth > availableWidth) {
            const scale = Math.max(0.55, availableWidth / measuredWidth);
            text.style.transform = `translateY(-50%) scale(${scale})`;
        }
    }

    function setZoneTextById(zoneId, value) {
        const zone = document.getElementById(zoneId);
        if (!zone) return;

        const text = zone.querySelector('.lr-zone-text');
        if (!text) return;

        const normalized = value == null ? '' : String(value).trim();
        zone.dataset.empty = normalized ? 'false' : 'true';
        text.textContent = normalized;
        fitZoneText(zone);
    }

    function refreshOverlayZones() {
        setZoneTextById('lr-zone-testoleft', window.TM_testoLeft || '');
        setZoneTextById('lr-zone-testoright', window.TM_testoRight || '');
        TOP_ZONES.forEach((zone) => {
            setZoneTextById(zone.id, window[zone.key] || getStoredZoneValue(zone.key));
        });
    }

    function exposeOverlayApi() {
        window.labelRegeneratorSetZone = (zoneName, value) => {
            const key = String(zoneName || '').trim();
            const allowedKeys = ['TM_testoLeft', 'TM_testoRight', ...TOP_ZONES.map((zone) => zone.key)];
            if (!allowedKeys.includes(key)) return;

            const normalized = value == null ? '' : String(value);
            if (key === 'TM_testoLeft') {
                window.TM_testoLeft = normalized;
                setStoredZoneValue('TM_testoLeft', normalized);
            } else if (key === 'TM_testoRight') {
                window.TM_testoRight = normalized;
                setStoredZoneValue('TM_testoRight', normalized);
            } else {
                window[key] = normalized;
                setStoredZoneValue(key, normalized);
            }

            refreshOverlayZones();
        };

        window.labelRegeneratorRefresh = refreshOverlayZones;
    }

    function applyLabelCanvas() {
        const predajnaText = document.querySelector('#predajna .rotate');
        if (predajnaText) {
            predajnaText.style.fontSize = '27pt';
        }

        const label = document.querySelector('#label');
        if (!label) return;

        label.style.position = 'relative';
        label.style.width = `${LABEL_WIDTH_MM}mm`;
        label.style.height = `${LABEL_HEIGHT_MM}mm`;
        label.style.overflow = 'hidden';
        label.style.border = '0';

        const obj = document.querySelector('.obj');
        if (obj) {
            obj.style.height = '16mm';
        }

        const block = document.querySelector('#data > div');
        if (block) {
            block.style.marginBottom = '1mm';
        }

        const wrapper = document.querySelector('#data > div');
        if (wrapper) {
            const vpText = wrapper.querySelector('span');

            if (vpText && vpText.previousSibling && vpText.previousSibling.textContent.trim() === 'VP') {
                const newSpan = document.createElement('span');
                newSpan.innerHTML = 'VP: ' + vpText.textContent.trim();
                newSpan.style.color = '#ffffff';
                newSpan.style.background = '#000';
                newSpan.style.padding = '1px 4px';
                newSpan.style.margin = '2px 0';
                newSpan.style.borderRadius = '6px';
                newSpan.style.fontSize = '13pt';
                newSpan.style.display = 'inline-block';
                newSpan.style.verticalAlign = 'middle';

                wrapper.innerHTML = wrapper.innerHTML.replace(/VP.*<\/span>/, '');
                wrapper.prepend(newSpan);
            }
        }

        ensureBaseLayer();
        syncBaseScale();
    }

    function markPrintReady() {
        if (!isPrintLabelPage()) return;

        window.__labelRegeneratorReady = false;

        const finalize = () => {
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    refreshOverlayZones();
                    window.__labelRegeneratorReady = true;
                    window.dispatchEvent(new Event('labelRegeneratorReady'));
                });
            });
        };

        if (document.fonts && document.fonts.ready) {
            document.fonts.ready
                .then(() => setTimeout(finalize, 50))
                .catch(() => setTimeout(finalize, 120));
        } else {
            setTimeout(finalize, 120);
        }
    }

    function getVpNumber() {
        const strong = document.querySelector('strong.red');
        return strong ? strong.textContent.trim() : null;
    }

    function syncLabelValuesFromDetailPage() {
        if (isPrintLabelPage()) return;

        const leftBadge = document.querySelector('#shortcut-info-label');
        const rightBadge = document.querySelector('#shortcut-info-date');

        const left = leftBadge ? (leftBadge.textContent || '').trim() : getStoredZoneValue('TM_testoLeft');
        const right = rightBadge ? (rightBadge.textContent || '').trim() : getStoredZoneValue('TM_testoRight');

        window.TM_testoLeft = left;
        window.TM_testoRight = right;
        setStoredZoneValue('TM_testoLeft', left);
        setStoredZoneValue('TM_testoRight', right);
    }

    function triggerPrintWhenReady(printWindow) {
        const deadlineMs = 15000;
        const startedAt = Date.now();

        const timer = setInterval(() => {
            const timedOut = Date.now() - startedAt > deadlineMs;
            const ready = !!printWindow.__labelRegeneratorReady;
            const closed = printWindow.closed;

            if (closed) {
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

        syncLabelValuesFromDetailPage();

        const url = `https://moduly.faxcopy.sk/vyrobne_prikazy/detail/printLabel/${vpNumber}`;
        const w = window.open(url, '_blank');
        if (!w) return;

        w.addEventListener('load', () => {
            triggerPrintWhenReady(w);
        }, { once: true });
    }

    ensureRobotoCondensedFont();
    injectBaseStyles();

    window.TM_testoLeft = getStoredZoneValue('TM_testoLeft') || '';
    window.TM_testoRight = getStoredZoneValue('TM_testoRight') || '';
    TOP_ZONES.forEach((zone) => {
        window[zone.key] = getStoredZoneValue(zone.key) || '';
    });

    window.addEventListener('unload', () => {
        if (!isPrintLabelPage()) return;
        localStorage.removeItem('TM_testoLeft');
        localStorage.removeItem('TM_testoRight');
    });

    exposeOverlayApi();
    applyLabelCanvas();
    ensureBaseLayer();
    ensureOverlayLayer();
    syncBaseScale();
    refreshOverlayZones();

    window.addEventListener('resize', refreshOverlayZones);
    window.addEventListener('keydown', (e) => {
        if (e.key.toLowerCase() === 'l' && !e.repeat) {
            pressLAction();
        }
    });

    markPrintReady();
})();
