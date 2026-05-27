// ==UserScript==
// @name         M2 + A4 kalkulačka
// @namespace    faxcopy-userscripts
// @author       mato e.
// @version      1.4
// @description  Kalkulačka m2 a A4 z PDF rozmerov
// @updateURL    https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/AreaCalc.user.js
// @downloadURL  https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/AreaCalc.user.js
// @match        https://moduly.faxcopy.sk/vyrobne_prikazy/detail/index/*
// @run-at       document-end
// ==/UserScript==

(function () {
    'use strict';

    const A4_AREA = 0.06237; // m2

    function createButton(openModal) {

        if (document.querySelector('#m2CalcButton')) {
            return true;
        }

        const grafikyButton = document.querySelector('#doGrafikyBtn');

        if (!grafikyButton) {
            return false;
        }

        const button = grafikyButton.cloneNode(false);

        button.id = 'm2CalcButton';
        button.innerText = 'M2/A4';
        button.href = 'javascript:void(0)';

        // odstránenie bootstrap/modal atribútov z pôvodného tlačidla
        // ktoré spôsobovali otvorenie originálnych modalov stránky
        [
            'data-toggle',
            'data-target',
            'data-bs-toggle',
            'data-bs-target',
            'data-dismiss',
            'data-bs-dismiss',
            'onclick'
        ].forEach(attr => {
            button.removeAttribute(attr);
        });

        button.classList.remove('modalBtn');

        Object.assign(button.style, {
            display: 'block',
            marginTop: '6px',
            background: '#00897b',
            borderColor: '#00695c',
            color: 'white'
        });

        button.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();

            openModal();
        }, true);

        grafikyButton.insertAdjacentElement('afterend', button);

        return true;
    }

    function createUI() {

        if (document.querySelector('#m2CalcModal')) {
            return;
        }

        //
        // OVERLAY
        //
        const overlay = document.createElement('div');

        overlay.id = 'm2CalcOverlay';

        Object.assign(overlay.style, {
            position: 'fixed',
            inset: '0',
            background: 'rgba(0,0,0,0.45)',
            zIndex: '999998',
            display: 'none'
        });

        document.body.appendChild(overlay);

        //
        // MODAL
        //
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
            boxShadow: '0 10px 40px rgba(0,0,0,0.4)',
            display: 'none',
            fontFamily: 'Arial, sans-serif'
        });

        modal.innerHTML = `
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:15px;">
                <h2 style="margin:0;">M2 + A4 kalkulačka</h2>

                <button id="m2CalcClose"
                    style="
                        border:none;
                        background:#eee;
                        padding:8px 12px;
                        border-radius:8px;
                        cursor:pointer;
                    ">
                    X
                </button>
            </div>

            <textarea
                id="m2CalcInput"
                placeholder="Sem vlož export súborov"
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
                <button id="m2CalcRun"
                    style="
                        background:#00897b;
                        color:white;
                        border:none;
                        padding:10px 14px;
                        border-radius:8px;
                        cursor:pointer;
                    ">
                    Prepočítať
                </button>

                <button id="m2CalcClear"
                    style="
                        background:#ddd;
                        border:none;
                        padding:10px 14px;
                        border-radius:8px;
                        cursor:pointer;
                    ">
                    Vyčistiť
                </button>
            </div>

            <div id="m2CalcResults" style="margin-top:20px;"></div>
        `;

        document.body.appendChild(modal);

        function openModal() {
            modal.style.display = 'block';
            overlay.style.display = 'block';
        }

        function closeModal() {
            modal.style.display = 'none';
            overlay.style.display = 'none';
        }

        document.querySelector('#m2CalcClose').addEventListener('click', closeModal);

        overlay.addEventListener('click', closeModal);

        document.querySelector('#m2CalcClear').addEventListener('click', () => {

            document.querySelector('#m2CalcInput').value = '';
            document.querySelector('#m2CalcResults').innerHTML = '';
        });

        document.querySelector('#m2CalcRun').addEventListener('click', runCalculation);

        waitForButton(openModal);
    }

    function waitForButton(openModal) {

        let tries = 0;

        const interval = setInterval(() => {

            tries++;

            if (createButton(openModal) || tries > 30) {
                clearInterval(interval);
            }

        }, 500);
    }

    function parseLine(line) {

        const parts = line.trim().split('\t');

        if (parts.length < 3) {
            return null;
        }

        const path = parts[0];

        const width = parseFloat(parts[1].replace(',', '.'));
        const height = parseFloat(parts[2].replace(',', '.'));

        if (isNaN(width) || isNaN(height)) {
            return null;
        }

        return {
            path,
            width,
            height,
            quantity: 1
        };
    }

    function calculateItem(item) {

        const m2 = (item.width * item.height) / 1000000;
        const a4 = m2 / A4_AREA;

        return {
            ...item,
            m2,
            a4,
            totalM2: m2 * item.quantity,
            totalA4: a4 * item.quantity
        };
    }

    function runCalculation() {

        const input = document.querySelector('#m2CalcInput').value;

        const lines = input
            .split('\n')
            .map(l => l.trim())
            .filter(Boolean);

        const parsed = lines
            .map(parseLine)
            .filter(Boolean);

        renderResults(parsed);
    }

    function renderResults(items) {

        const results = document.querySelector('#m2CalcResults');

        if (!items.length) {

            results.innerHTML = `
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

        const calculated = items.map(calculateItem);

        results.innerHTML = '';

        const table = document.createElement('table');

        table.style.width = '100%';
        table.style.borderCollapse = 'collapse';
        table.style.marginTop = '10px';

        table.innerHTML = `...`;
    }

    window.addEventListener('load', () => {

        createUI();

        console.log('[M2/A4] kalkulačka pripravená');
    });

})();