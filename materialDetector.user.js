// ==UserScript==
// @name         materialDetector
// @namespace    https://moduly.faxcopy.sk/
// @author       mato e.
// @version      2.9.0
// @description  Zistovanie rozmeru/materialu a datumu expedicie pre stitok.
// @updateURL    https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/materialDetector.user.js
// @downloadURL  https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/materialDetector.user.js
// @match        https://moduly.faxcopy.sk/vyrobne_prikazy/detail/index/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function () {
    'use strict';

    function extractDimensionFromText(text) {
        const match = text.match(/(\d{2,3})\s*[x×]\s*(\d{2,3})/i);
        return match ? `${match[1]} ${match[2]}` : null;
    }

    function findDimensionInRows() {
        const trs = document.querySelectorAll("tr[title='ceny bez DPH']");
        for (const tr of trs) {
            const txt = tr.innerText;
            const dim = extractDimensionFromText(txt);
            if (dim) return { dim, text: txt };
        }
        return null;
    }

    function detectPriecka() {
        const rows = document.querySelectorAll("tr.detail-price-tr .detail-price-in-order tr");
        for (const tr of rows) {
            if (tr.innerText.toLowerCase().includes('priecka')) return '+';
        }
        return '';
    }

    function collectPageContext() {
        const tableRows = document.querySelectorAll('div > table tr');
        const rowTexts = Array.from(tableRows).map(tr => tr.textContent || '');

        const premiumEl = document.querySelector('.product-name') || document.querySelector('h1') || document.querySelector('h2');
        const productText = premiumEl ? premiumEl.textContent || '' : '';

        return { rowTexts, productText };
    }

    // Material detector #1 (current): HEXA / HEXAGON
    function detectMaterialHexa(context) {
        const detected = context.rowTexts.some(txt => /HEXA|HEXAGÓN/i.test(txt));
        if (!detected) return null;

        return {
            material: 'HEXA',
            alias: 'HEXA',
            priority: 100
        };
    }

    function runMaterialDetectors(context) {
        const detectors = [
            detectMaterialHexa
            // detectMaterialFoam,
            // detectMaterialPvc,
            // detectMaterialTextile,
        ];

        return detectors
            .map(detector => detector(context))
            .filter(Boolean)
            .sort((a, b) => b.priority - a.priority);
    }

    function buildAliasesFromDetections(detections) {
        if (!detections.length) return [];

        return detections
            .map(d => d.alias)
            .filter(Boolean);
    }

    function detectFoText() {
        const context = collectPageContext();
        const detections = runMaterialDetectors(context);
        const aliases = buildAliasesFromDetections(detections);

        if (aliases.length) return aliases.join(' ');

        const row = findDimensionInRows();
        if (!row) return '';

        const premiumDetected = /PREMIUM/i.test(context.productText) ||
            context.rowTexts.some(txt => /PREMIUM/i.test(txt));

        let result = row.dim || '';
        const pr = detectPriecka();
        if (pr) result += pr;
        if (premiumDetected) result += '  P';

        return result;
    }

    function detectExpeditionDate() {
        const el = document.querySelector('#dodacia_lehota_label');
        if (!el) return '';

        const text = el.textContent.trim();
        const match = text.match(/(\d{1,2})\.\s*(\d{1,2})\./);
        if (!match) return '';

        return `${match[1]}. ${match[2]}.`;
    }

    function showLabel(leftText, rightText) {
        if (!leftText && !rightText) return;
        let elLeft = document.querySelector('#shortcut-info-label');
        let elRight = document.querySelector('#shortcut-info-date');

        const h = document.querySelector('h1, h2');
        if (!h) return;

        if (!elLeft) {
            elLeft = document.createElement('span');
            elLeft.id = 'shortcut-info-label';
            elLeft.style.cssText = 'background:#fffa65;color:#000;padding:4px 8px;margin-left:12px;border-radius:4px;font-weight:bold;';
            h.append(elLeft);
        }

        if (!elRight) {
            elRight = document.createElement('span');
            elRight.id = 'shortcut-info-date';
            elRight.style.cssText = 'background:#d0ffb3;color:#000;padding:4px 8px;margin-left:8px;border-radius:4px;font-weight:bold;';
            h.append(elRight);
        }

        elLeft.textContent = leftText || '';
        elRight.textContent = rightText || '';
    }

    function updateSession() {
        const tmLeft = detectFoText();
        const tmRight = detectExpeditionDate();

        if (!tmLeft) {
            localStorage.removeItem('TM_testoLeft');
            window.TM_testoLeft = '';
        } else {
            localStorage.setItem('TM_testoLeft', tmLeft);
            window.TM_testoLeft = tmLeft;
        }

        if (tmRight) {
            localStorage.setItem('TM_testoRight', tmRight);
            window.TM_testoRight = tmRight;
        } else {
            localStorage.removeItem('TM_testoRight');
            window.TM_testoRight = '';
        }

        showLabel(tmLeft, tmRight);
    }

    window.addEventListener('load', updateSession);
})();
