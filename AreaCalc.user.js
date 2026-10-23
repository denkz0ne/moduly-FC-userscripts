// ==UserScript==
// @name         M2 + A4 kalkulačka
// @namespace    faxcopy-userscripts
// @author       mato e.
// @version      1.11
// @description  Kalkulačka m2 a A4 pre exporty, rozmery a zadané plochy
// @updateURL    https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/AreaCalc.user.js
// @downloadURL  https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/AreaCalc.user.js
// @match        https://moduly.faxcopy.sk/vyrobne_prikazy/detail/index/*
// @run-at       document-end
// ==/UserScript==
// FC Userscripts ecosystem: https://github.com/denkz0ne/moduly-FC-userscripts

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
        return parseFloat(
            String(v)
                .replace(',', '.')
                .trim()
        );
    }

    function isPositiveNumber(value) {
        return /^\d+(?:[.,]\d+)?$/.test(String(value || '').trim()) &&
            normalizeNumber(value) > 0;
    }

    function unitToMm(value, unit) {

        unit = (unit || 'cm').toLowerCase();

        if (unit === 'mm') {
            return value;
        }

        if (unit === 'm') {
            return value * 1000;
        }

        return value * 10;
    }

    //
    // QTY
    //
    // berie POSLEDNY qty token v riadku
    //
    function extractQty(line) {

        const matches = [
            ...line.matchAll(
                /(\d+(?:[\.,]\d+)?)\s*(x|ks|kus|pcs)\b/gi
            )
        ];

        if (!matches.length) {
            return 1;
        }

        const last = matches[matches.length - 1];

        return Math.max(
            1,
            parseInt(
                String(last[1]).replace(',', '.')
            ) || 1
        );
    }

    //
    // PDF EXPORT
    //
    function parsePdfExport(line) {

        const parts = line.replace(/\r$/, '').split('\t');

        if (parts.length < 3) {
            return null;
        }

        let widthIndex = 1;
        let heightIndex = 2;

        // TCMD export: cesta, prázdny stĺpec, počet strán, šírka, výška,
        // šírka rolky, veľkosť, dátum a prípadne CDR verzia.
        if (parts.length >= 5 && parts[1].trim() === '' &&
            isPositiveNumber(parts[2]) &&
            isPositiveNumber(parts[3]) &&
            isPositiveNumber(parts[4])) {
            widthIndex = 3;
            heightIndex = 4;
        } else if (parts.length >= 4 &&
            isPositiveNumber(parts[1]) &&
            Number.isInteger(normalizeNumber(parts[1])) &&
            normalizeNumber(parts[1]) <= 100 &&
            isPositiveNumber(parts[2]) &&
            isPositiveNumber(parts[3])) {
            // Rovnaké dáta bez úvodného prázdneho stĺpca.
            widthIndex = 2;
            heightIndex = 3;
        }

        const width = normalizeNumber(parts[widthIndex]);
        const height = normalizeNumber(parts[heightIndex]);

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

    function parseArea(line) {

        const match = line.match(
            /(\d+(?:[.,]\d+)?)\s*(mm(?:2|²)|cm(?:2|²)|sqm|m(?:2|²))(?![a-z])/i
        );

        if (!match) {
            return null;
        }

        const value = normalizeNumber(match[1]);
        const unit = match[2].toLowerCase().replace('²', '2');
        const areaM2 = unit.startsWith('mm') ? value / 1000000 :
            unit.startsWith('cm') ? value / 10000 : value;

        if (!Number.isFinite(areaM2) || areaM2 <= 0) {
            return null;
        }

        return {
            path: line.trim(),
            areaM2,
            width: null,
            height: null,
            qty: extractQty(line)
        };
    }

    //
    // FREEFORM
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
                path: clean,
                width: size[0],
                height: size[1],
                qty: extractQty(clean)
            };
        }

        //
        // DIMENSIONS
        //
        // kazdy riadok = jeden zaznam
        // parser berie LEN prvy rozmer
        //
        const dimMatch = clean.match(
            /(\d+(?:[\.,]\d+)?)\s*(mm|cm|m)?\s*[x×*]\s*(\d+(?:[\.,]\d+)?)\s*(mm|cm|m)?/i
        );

        if (!dimMatch) {
            return null;
        }

        const w = normalizeNumber(dimMatch[1]);
        const h = normalizeNumber(dimMatch[3]);

        const wu = dimMatch[2] || dimMatch[4] || 'cm';
        const hu = dimMatch[4] || dimMatch[2] || 'cm';
        const qtyText = clean.slice(0, dimMatch.index) +
            clean.slice(dimMatch.index + dimMatch[0].length);

        return {
            path: clean,
            width: unitToMm(w, wu),
            height: unitToMm(h, hu),
            qty: extractQty(qtyText)
        };
    }

    //
    // MAIN PARSER
    //
    function parseLine(line) {
        return parsePdfExport(line) || parseArea(line) || parseFreeform(line);
    }

    //
    // CALC
    //
    function calc(item) {

        const m2 = item.areaM2 != null
            ? item.areaM2
            : (item.width * item.height) / 1000000;

        const a4 = m2 / A4_AREA;

        return {
            totalM2: m2 * item.qty,
            totalA4: a4 * item.qty
        };
    }

    //
    // COLLAPSIBLE CALCULATOR PANEL
    //
    function addPanelStyles() {
        if (document.getElementById('area-calc-panel-style')) return;
        const style = document.createElement('style');
        style.id = 'area-calc-panel-style';
        style.textContent = `
            #area-calc-panel{position:relative;z-index:2;display:grid;grid-template-rows:0fr;width:100%;max-width:100%;margin:0;overflow:hidden;background:#fff;color:#000;border:0 solid #bbb;border-radius:3px;box-shadow:none;font:11px/1.35 Tahoma,Calibri,"Trebuchet MS",sans-serif;opacity:0;transition:grid-template-rows .24s ease,opacity .18s ease,margin-bottom .24s ease,border-width .24s ease}
            #area-calc-panel[data-open="true"]{grid-template-rows:1fr;margin-bottom:8px;border-width:1px;opacity:1}
            #area-calc-panel *{box-sizing:border-box}
            #area-calc-panel .area-calc-shell{min-height:0;overflow:hidden}
            #area-calc-panel .area-calc-head{display:flex;align-items:center;justify-content:space-between;padding:8px 10px;background:#141414;color:#fff}
            #area-calc-panel .area-calc-title{font-size:12px;font-weight:700;text-transform:uppercase}
            #area-calc-panel .area-calc-close{border:1px solid #666;background:#292929;color:#fff;font-size:16px;cursor:pointer;padding:2px 7px;border-radius:2px}
            #area-calc-panel .area-calc-content{padding:8px 9px;background:#fff}
            #area-calc-panel textarea{display:block;width:100%;min-height:150px;padding:7px;border:1px solid #bbb;border-radius:0;background:#fff;color:#000;font:11px/1.4 Tahoma,Calibri,"Trebuchet MS",sans-serif;resize:vertical}
            #area-calc-panel .area-calc-actions{display:flex;gap:6px;align-items:center;margin-top:8px;flex-wrap:wrap}
            #area-calc-panel .area-calc-button{border:1px solid #779904;border-radius:2px;padding:6px 9px;background:#fff;color:#294862;font:700 11px Tahoma,Calibri,"Trebuchet MS",sans-serif;cursor:pointer}
            #area-calc-panel .area-calc-button:hover{background:#f3f3f3}
            #area-calc-panel .area-calc-button.primary{background:#8BB400;border-color:#779904;color:#fff}
            #area-calc-panel .area-calc-results{margin-top:10px;overflow-x:auto}
            #area-calc-panel .area-calc-table{width:100%;border-collapse:collapse}
            #area-calc-panel .area-calc-table th{padding:6px;border:1px solid #d8d1b5;background:#EBE7D4;color:#292929;text-align:left}
            #area-calc-panel .area-calc-table td{padding:6px;border:1px solid #ddd;text-align:center}
            #area-calc-panel .area-calc-table td:first-child{text-align:left;overflow-wrap:anywhere}
            #area-calc-panel .area-calc-table input{width:65px;padding:4px;border:1px solid #bbb;border-radius:0;font:11px Tahoma,Calibri,"Trebuchet MS",sans-serif;text-align:center}
            #area-calc-panel .area-calc-summary{margin-top:8px;padding:8px;border:1px solid #ddd;border-radius:2px;background:#F3F3F3;color:#183b56;font-size:12px;font-weight:700}
            #area-calc-panel .area-calc-error{padding:8px;border:1px solid #e5aeb0;border-radius:2px;background:#fff1f1;color:#7f1d1d}
        `;
        (document.head || document.documentElement).appendChild(style);
    }

    function findActivitySection() {
        const heading = Array.from(document.querySelectorAll('h1,h2,h3,h4,.box-head,.box-title,.box_header'))
            .find(node => String(node.textContent || '').replace(/\s+/g, ' ').trim().toLocaleUpperCase('sk') === 'AKTIVITY');
        if (!heading) return null;
        return {
            box: heading.closest('.box') || heading.closest('[class*="grid_"]'),
            heading: heading.closest('.box-head,.box-title,.box_header') || heading.parentElement
        };
    }

    function mountPanel(panel) {
        const section = findActivitySection();
        if (!section) return false;
        if (section.box && section.box.parentNode) {
            Array.from(panel.classList).forEach(name => {
                if (/^(grid_|alpha$|omega$)/.test(name)) panel.classList.remove(name);
            });
            Array.from(section.box.classList).forEach(name => {
                if (/^(grid_|alpha$|omega$)/.test(name)) panel.classList.add(name);
            });
            if (panel.parentNode !== section.box.parentNode || panel.nextSibling !== section.box) {
                section.box.parentNode.insertBefore(panel, section.box);
            }
            return true;
        }
        if (section.heading && section.heading.parentNode) {
            section.heading.parentNode.insertBefore(panel, section.heading);
            return true;
        }
        return false;
    }

    function setPanelOpen(panel, open) {
        const isOpen = !!open;
        panel.dataset.open = String(isOpen);
        panel.setAttribute('aria-hidden', String(!isOpen));
        panel.inert = !isOpen;
        const button = document.querySelector('#m2CalcButton');
        if (button) button.setAttribute('aria-expanded', String(isOpen));
    }

    function createPanel() {
        addPanelStyles();
        let panel = document.querySelector('#area-calc-panel');
        if (panel) return () => setPanelOpen(panel, panel.dataset.open !== 'true');

        panel = document.createElement('section');
        panel.id = 'area-calc-panel';
        panel.dataset.open = 'false';
        panel.setAttribute('aria-label', 'Kalkulačka m² a A4');
        panel.setAttribute('aria-hidden', 'true');
        panel.inert = true;

        const shell = document.createElement('div');
        shell.className = 'area-calc-shell';
        shell.innerHTML = `
            <div class="area-calc-head">
                <div class="area-calc-title">Kalkulačka m² / A4</div>
                <button class="area-calc-close" type="button" aria-label="Zavrieť kalkulačku">×</button>
            </div>
            <div class="area-calc-content">
                <textarea id="m2CalcInput" aria-label="Vstupy pre kalkulačku" placeholder="
10x15 100x
60x40 2x
100x500mm 12ks
A4 66x
2 x 3m 8 ks
2,5 m²
3.2 m2 2x
banner 300 x 120 cm 4 ks
                "></textarea>
                <div class="area-calc-actions">
                    <button id="m2CalcRun" class="area-calc-button primary" type="button">Prepočítať</button>
                    <button id="m2CalcClear" class="area-calc-button" type="button">Vyčistiť</button>
                </div>
                <div id="m2CalcResults" class="area-calc-results" aria-live="polite"></div>
            </div>
        `;
        panel.appendChild(shell);

        const closePanel = () => setPanelOpen(panel, false);
        shell.querySelector('.area-calc-close').addEventListener('click', closePanel);
        shell.querySelector('#m2CalcClear').addEventListener('click', () => {
            shell.querySelector('#m2CalcInput').value = '';
            shell.querySelector('#m2CalcResults').replaceChildren();
        });
        shell.querySelector('#m2CalcRun').addEventListener('click', () => {
            const lines = shell.querySelector('#m2CalcInput').value
                .split('\n').map(value => value.trim()).filter(Boolean);
            renderResults(lines.map(parseLine).filter(Boolean), shell.querySelector('#m2CalcResults'));
        });
        document.addEventListener('keydown', event => {
            if (event.key === 'Escape' && panel.dataset.open === 'true') closePanel();
        });

        if (!mountPanel(panel)) {
            const observer = new MutationObserver(() => {
                if (mountPanel(panel)) observer.disconnect();
            });
            observer.observe(document.body || document.documentElement, { childList: true, subtree: true });
        }
        return () => setPanelOpen(panel, panel.dataset.open !== 'true');
    }
    // RESULTS
    //
    function renderResults(items, container) {

        if (!items.length) {
            const error = document.createElement('div');
            error.className = 'area-calc-error';
            error.textContent = 'Žiadne validné dáta';
            container.replaceChildren(error);
            return;
        }

        container.replaceChildren();

        const table = document.createElement('table');
        table.className = 'area-calc-table';
        table.innerHTML = `
            <thead><tr><th>Vstup</th><th>Rozmer</th><th>Ks</th><th>m²</th><th>A4</th></tr></thead>
            <tbody></tbody>
        `;

        const tbody = table.querySelector('tbody');

        items.forEach((item, index) => {

            const values = calc(item);

            const row = document.createElement('tr');

            row.innerHTML = '<td class="calc-source"></td><td class="calc-size"></td><td><input class="m2QtyInput" type="number" min="1"></td><td class="m2Cell"></td><td class="a4Cell"></td>';
            row.querySelector('.calc-source').textContent = item.path;
            row.querySelector('.calc-size').textContent = item.areaM2 != null
                ? `${item.areaM2.toFixed(2)} m² plocha`
                : `${Math.round(item.width)} × ${Math.round(item.height)} mm`;
            const qtyInput = row.querySelector('.m2QtyInput');
            qtyInput.dataset.index = index;
            qtyInput.value = item.qty;
            row.querySelector('.m2Cell').dataset.index = index;
            row.querySelector('.m2Cell').textContent = values.totalM2.toFixed(2);
            row.querySelector('.a4Cell').dataset.index = index;
            row.querySelector('.a4Cell').textContent = Math.ceil(values.totalA4);

            tbody.appendChild(row);
        });

        container.appendChild(table);

        const summary = document.createElement('div');

        summary.className = 'area-calc-summary';

        function recalc() {

            let totalM2 = 0;
            let totalA4 = 0;

            items.forEach((item, index) => {

                const input = container.querySelector(
                    `.m2QtyInput[data-index="${index}"]`
                );

                item.qty = Math.max(
                    1,
                    parseInt(input.value) || 1
                );

                const values = calc(item);

                container.querySelector(
                    `.m2Cell[data-index="${index}"]`
                ).innerText = values.totalM2.toFixed(2);

                container.querySelector(
                    `.a4Cell[data-index="${index}"]`
                ).innerText = Math.ceil(values.totalA4);

                totalM2 += values.totalM2;
                totalA4 += values.totalA4;
            });

            summary.textContent = `
                CELKOM →
                ${totalM2.toFixed(2)} m²
                •
                ${Math.ceil(totalA4)} A4
            `;
        }

        table.querySelectorAll('.m2QtyInput')
            .forEach(input => {

                input.addEventListener('input', recalc);
            });

        container.appendChild(summary);

        recalc();
    }

    //
    // BUTTON
    //
    function createButton(togglePanel) {

        if (document.querySelector('#m2CalcButton')) {
            return true;
        }

        const panel = document.querySelector('#fc-userscripts-action-panel');
        if (!panel) return false;

        const button = document.createElement('button');
        button.type = 'button';
        button.id = 'm2CalcButton';
        button.textContent = 'CALC';
        button.title = 'Otvoriť kalkulačku m²/A4';
        button.setAttribute('aria-expanded', 'false');
        button.className = 'fc-action-button';
        Object.assign(button.style, {
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            flex: '0 0 auto', width: 'auto', minWidth: '0', boxSizing: 'border-box',
            margin: '0', padding: '6px 9px', border: '1px solid #123149',
            borderRadius: '2px', background: '#183b56', color: '#fff',
            font: '700 11px/13px Tahoma, Calibri, "Trebuchet MS", sans-serif',
            cursor: 'pointer', boxShadow: 'none'
        });

        button.addEventListener('click', (e) => {

            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();

            togglePanel();

        }, true);

        panel.appendChild(button);

        return true;
    }

    //
    // INIT
    //
    function init() {

        const togglePanel = createPanel();

        let tries = 0;

        const interval = setInterval(() => {

            tries++;

            if (createButton(togglePanel) || tries > 30) {
                clearInterval(interval);
            }

        }, 500);

        console.log(
            '[CALC] kalkulačka m²/A4 pripravená'
        );
    }

    if (document.readyState === 'complete') init();
    else window.addEventListener('load', init, { once: true });

})();
