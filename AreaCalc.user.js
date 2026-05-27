// ==UserScript==
// @name         M2 + A4 kalkulačka
// @namespace    faxcopy-userscripts
// @author       mato e.
// @version      1.6
// @description  Kalkulačka m2, A4 a univerzálny parser rozmerov
// @updateURL    https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/AreaCalc.user.js
// @downloadURL  https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/AreaCalc.user.js
// @match        https://moduly.faxcopy.sk/vyrobne_prikazy/detail/index/*
// @run-at       document-end
// ==/UserScript==

(function () {
    'use strict';

    const A4_AREA = 0.06237;

    const PAPER_FORMATS = {
        A0: [841, 1189],
        A1: [594, 841],
        A2: [420, 594],
        A3: [297, 420],
        A4: [210, 297],
        A5: [148, 210]
    };

    //
    // HELPERS
    //
    function normalizeNumber(v) {
        return parseFloat(String(v).replace(',', '.'));
    }

    function unitToMm(value, unit) {

        if (!unit || unit === 'cm') {
            return value * 10;
        }

        if (unit === 'mm') {
            return value;
        }

        if (unit === 'm') {
            return value * 1000;
        }

        return value * 10;
    }

    function extractQty(line) {

        const qtyMatch = line.match(
            /(\d+(?:[\.,]\d+)?)\s*(x|ks|kus|pcs)/i
        );

        if (!qtyMatch) {
            return 1;
        }

        return Math.max(1, parseInt(qtyMatch[1]));
    }

    //
    // PDF EXPORT PARSER
    //
    function parsePdfExport(line) {

        const parts = line.trim().split('\t');

        if (parts.length < 3) {
            return null;
        }

        const width = normalizeNumber(parts[1]);
        const height = normalizeNumber(parts[2]);

        if (isNaN(width) || isNaN(height)) {
            return null;
        }

        return {
            path: parts[0],
            width,
            height,
            qty: 1
        };
    }

    //
    // FREEFORM PARSER
    //
    function parseFreeform(line) {

        const clean = line
            .replace(/,/g, '.')
            .replace(/\s+/g, ' ')
            .trim();

        //
        // A FORMATS
        //
        const paperMatch = clean.match(/\b(A[0-5])\b/i);

        if (paperMatch) {

            const format = paperMatch[1].toUpperCase();
            const size = PAPER_FORMATS[format];

            if (!size) {
                return null;
            }

            return {
                path: format,
                width: size[0],
                height: size[1],
                qty: extractQty(clean)
            };
        }

        //
        // DIMENSIONS
        //
        const dimMatch = clean.match(
            /(\d+(?:\.\d+)?)\s*(mm|cm|m)?\s*x\s*(\d+(?:\.\d+)?)\s*(mm|cm|m)?/i
        );

        if (!dimMatch) {
            return null;
        }

        const w = normalizeNumber(dimMatch[1]);
        const h = normalizeNumber(dimMatch[3]);

        const wu = dimMatch[2] || dimMatch[4] || 'cm';
        const hu = dimMatch[4] || dimMatch[2] || 'cm';

        return {
            path: clean,
            width: unitToMm(w, wu),
            height: unitToMm(h, hu),
            qty: extractQty(clean)
        };
    }

    //
    // MAIN PARSER
    //
    function parseLine(line) {
        return parsePdfExport(line) || parseFreeform(line);
    }

    //
    // CALC
    //
    function calc(item) {

        const m2 = (item.width * item.height) / 1000000;
        const a4 = m2 / A4_AREA;

        return {
            m2,
            a4,
            totalM2: m2 * item.qty,
            totalA4: a4 * item.qty
        };
    }

    //
    // MODAL
    //
    function createModal() {

        if (document.querySelector('#m2CalcModal')) {
            return;
        }

        const overlay = document.createElement('div');
        overlay.id = 'm2CalcOverlay';

        Object.assign(overlay.style, {
            position: 'fixed',
            inset: '0',
            background: 'rgba(0,0,0,.45)',
            zIndex: '999998',
            display: 'none'
        });

        const modal = document.createElement('div');
        modal.id = 'm2CalcModal';

        Object.assign(modal.style, {
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '1000px',
            maxWidth: '95vw',
            maxHeight: '85vh',
            overflow: 'auto',
            background: '#fff',
            borderRadius: '12px',
            zIndex: '999999',
            padding: '20px',
            boxShadow: '0 10px 40px rgba(0,0,0,.35)',
            display: 'none',
            fontFamily: 'Arial,sans-serif'
        });

        modal.innerHTML = `
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:15px;">
                <h2 style="margin:0;">M2 + A4 kalkulačka</h2>

                <button
                    id="m2CalcClose"
                    style="
                        border:none;
                        background:#eee;
                        padding:8px 12px;
                        border-radius:8px;
                        cursor:pointer;
                    "
                >
                    X
                </button>
            </div>

            <textarea
                id="m2CalcInput"
                placeholder="
10x15 1x
100x500mm 12ks
A4 66x
10x12 mm 6ks
2 x 3m 8 ks
                "
                style="
                    width:100%;
                    height:220px;
                    padding:10px;
                    font-family:monospace;
                    font-size:13px;
                    border:1px solid #ccc;
                    border-radius:8px;
                    box-sizing:border-box;
                "
            ></textarea>

            <div style="margin-top:15px;display:flex;gap:10px;">
                <button
                    id="m2CalcRun"
                    style="
                        background:#00897b;
                        color:white;
                        border:none;
                        padding:10px 14px;
                        border-radius:8px;
                        cursor:pointer;
                    "
                >
                    Prepočítať
                </button>

                <button
                    id="m2CalcClear"
                    style="
                        background:#ddd;
                        border:none;
                        padding:10px 14px;
                        border-radius:8px;
                        cursor:pointer;
                    "
                >
                    Vyčistiť
                </button>
            </div>

            <div id="m2CalcResults" style="margin-top:20px;"></div>
        `;

        function openModal() {
            overlay.style.display = 'block';
            modal.style.display = 'block';
        }

        function closeModal() {
            overlay.style.display = 'none';
            modal.style.display = 'none';
        }

        overlay.addEventListener('click', closeModal);

        modal.querySelector('#m2CalcClose')
            .addEventListener('click', closeModal);

        modal.querySelector('#m2CalcClear')
            .addEventListener('click', () => {

                modal.querySelector('#m2CalcInput').value = '';
                modal.querySelector('#m2CalcResults').innerHTML = '';
            });

        modal.querySelector('#m2CalcRun')
            .addEventListener('click', () => {

                const lines = modal
                    .querySelector('#m2CalcInput')
                    .value
                    .split('\n')
                    .map(v => v.trim())
                    .filter(Boolean);

                const items = lines
                    .map(parseLine)
                    .filter(Boolean);

                renderResults(
                    items,
                    modal.querySelector('#m2CalcResults')
                );
            });

        document.body.appendChild(overlay);
        document.body.appendChild(modal);

        return openModal;
    }

    //
    // RESULTS
    //
    function renderResults(items, container) {

        if (!items.length) {

            container.innerHTML = `
                <div style="
                    padding:10px;
                    background:#ffe5e5;
                    border-radius:8px;
                ">
                    Žiadne validné dáta
                </div>
            `;

            return;
        }

        container.innerHTML = '';

        const table = document.createElement('table');

        table.style.width = '100%';
        table.style.borderCollapse = 'collapse';
        table.style.marginTop = '10px';

        table.innerHTML = `
            <thead>
                <tr style="background:#f1f1f1;">
                    <th style="padding:8px;text-align:left;">Vstup</th>
                    <th style="padding:8px;">Rozmer</th>
                    <th style="padding:8px;">Ks</th>
                    <th style="padding:8px;">m²</th>
                    <th style="padding:8px;">A4</th>
                </tr>
            </thead>

            <tbody></tbody>
        `;

        const tbody = table.querySelector('tbody');

        let totalM2 = 0;
        let totalA4 = 0;

        items.forEach((item) => {

            const values = calc(item);

            totalM2 += values.totalM2;
            totalA4 += values.totalA4;

            const row = document.createElement('tr');

            row.innerHTML = `
                <td style="
                    padding:8px;
                    border-top:1px solid #eee;
                    font-family:monospace;
                    font-size:12px;
                ">
                    ${item.path}
                </td>

                <td style="
                    padding:8px;
                    border-top:1px solid #eee;
                    text-align:center;
                ">
                    ${Math.round(item.width)}
                    ×
                    ${Math.round(item.height)} mm
                </td>

                <td style="
                    padding:8px;
                    border-top:1px solid #eee;
                    text-align:center;
                ">
                    ${item.qty}
                </td>

                <td style="
                    padding:8px;
                    border-top:1px solid #eee;
                    text-align:center;
                ">
                    ${values.totalM2.toFixed(2)}
                </td>

                <td style="
                    padding:8px;
                    border-top:1px solid #eee;
                    text-align:center;
                ">
                    ${Math.ceil(values.totalA4)}
                </td>
            `;

            tbody.appendChild(row);
        });

        container.appendChild(table);

        const summary = document.createElement('div');

        Object.assign(summary.style, {
            marginTop: '20px',
            padding: '15px',
            background: '#f5f5f5',
            borderRadius: '10px',
            fontSize: '18px',
            fontWeight: 'bold'
        });

        summary.innerHTML = `
            CELKOM →
            ${totalM2.toFixed(2)} m²
            •
            ${Math.ceil(totalA4)} A4
        `;

        container.appendChild(summary);
    }

    //
    // BUTTON
    //
    function createButton(openModal) {

        if (document.querySelector('#m2CalcButton')) {
            return true;
        }

        const originalButton =
            document.querySelector('#doGrafikyBtn');

        if (!originalButton) {
            return false;
        }

        const button = originalButton.cloneNode(false);

        button.id = 'm2CalcButton';
        button.innerText = 'M2/A4';
        button.href = 'javascript:void(0)';

        [
            'data-toggle',
            'data-target',
            'data-bs-toggle',
            'data-bs-target',
            'data-dismiss',
            'data-bs-dismiss',
            'onclick'
        ].forEach(attr => button.removeAttribute(attr));

        button.className = '';

        Object.assign(button.style, {
            display: 'block',
            marginTop: '6px',
            background: '#00897b',
            borderColor: '#00695c',
            color: '#fff'
        });

        button.addEventListener('click', (e) => {

            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();

            openModal();

        }, true);

        originalButton.insertAdjacentElement(
            'afterend',
            button
        );

        return true;
    }

    //
    // INIT
    //
    window.addEventListener('load', () => {

        const openModal = createModal();

        let tries = 0;

        const interval = setInterval(() => {

            tries++;

            if (createButton(openModal) || tries > 30) {
                clearInterval(interval);
            }

        }, 500);

        console.log(
            '[M2/A4] kalkulačka pripravená'
        );
    });

})();
