// ==UserScript==
// @name         Pokyny Pre - Archiv
// @namespace    http://faxcopy.sk/
// @version      1.3
// @description  Archivacia pokynov a poznamok z VP formulara + automaticke nastavenie pobocky
// @match        https://moduly.faxcopy.sk/vyrobne_prikazy/detail/index/*
// @updateURL    https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/pokynPre_archiver.user.js
// @downloadURL  https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/pokynPre_archiver.user.js
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function () {
    'use strict';

    const DB_NAME = 'fc_pokyny_archiv';
    const STORE_NAME = 'pokyny';
    const DB_VERSION = 1;

    let db;

    function openDB() {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open(DB_NAME, DB_VERSION);

            request.onupgradeneeded = function (event) {
                db = event.target.result;

                if (!db.objectStoreNames.contains(STORE_NAME)) {
                    const store = db.createObjectStore(STORE_NAME, {
                        keyPath: 'id',
                        autoIncrement: true
                    });

                    store.createIndex('timestamp', 'timestamp', { unique: false });
                    store.createIndex('vp', 'vp', { unique: false });
                    store.createIndex('recipientText', 'recipientText', { unique: false });
                }
            };

            request.onsuccess = function (event) {
                db = event.target.result;
                resolve(db);
            };

            request.onerror = function (event) {
                reject(event);
            };
        });
    }

    function saveRecord(data) {
        return new Promise((resolve, reject) => {
            const tx = db.transaction(STORE_NAME, 'readwrite');
            const store = tx.objectStore(STORE_NAME);
            const request = store.add(data);

            request.onsuccess = () => resolve();
            request.onerror = (e) => reject(e);
        });
    }

    function getAllRecords() {
        return new Promise((resolve, reject) => {
            const tx = db.transaction(STORE_NAME, 'readonly');
            const store = tx.objectStore(STORE_NAME);
            const request = store.getAll();

            request.onsuccess = () => resolve(request.result);
            request.onerror = reject;
        });
    }

    function extractVP() {
        const match = location.href.match(/index\/(\d+)/);
        return match ? match[1] : 'Nezname VP';
    }

    function getSelectedText(select) {
        if (!select) return '';
        return select.options[select.selectedIndex] ? select.options[select.selectedIndex].text.trim() : '';
    }

    function nowISO() {
        return new Date().toISOString();
    }

    function escapeHtml(text) {
        if (!text) return '';

        return text
            .replaceAll('&', '&amp;')
            .replaceAll('<', '&lt;')
            .replaceAll('>', '&gt;')
            .replaceAll('"', '&quot;')
            .replaceAll("'", '&#039;');
    }

    function getByXPath(xpath) {
        return document.evaluate(
            xpath,
            document,
            null,
            XPathResult.FIRST_ORDERED_NODE_TYPE,
            null
        ).singleNodeValue;
    }

    function initFormWatcher() {
        const interval = setInterval(() => {
            const form = document.querySelector('#frm-pokyn');
            if (!form) return;

            clearInterval(interval);

            form.addEventListener('submit', async function () {
                try {
                    const typSelect = document.querySelector('#frm-pokyn_typ');
                    const recipientSelect = document.querySelector('#frm-pokyn_pobocka');
                    const textarea = document.querySelector('#frm-pokyn textarea[name="pokyn"]');

                    const data = {
                        timestamp: nowISO(),
                        url: location.href,
                        vp: extractVP(),
                        typ: getSelectedText(typSelect),
                        recipientValue: recipientSelect ? recipientSelect.value : '',
                        recipientText: getSelectedText(recipientSelect),
                        message: textarea && textarea.value ? textarea.value.trim() : '',
                        pageTitle: document.title
                    };

                    await saveRecord(data);
                } catch (err) {
                    console.error('[ARCHIV] submit save failed', err);
                }
            });
        }, 500);
    }

    function customizeButtons() {
        const interval = setInterval(() => {
            const submitBtn = document.querySelector('#frm-pokyn input[type="submit"]');
            if (!submitBtn) return;

            if (document.querySelector('#fc-archive-btn')) {
                clearInterval(interval);
                return;
            }

            submitBtn.value = 'Potvrdit a archivovat';

            const archiveBtn = document.createElement('span');
            archiveBtn.id = 'fc-archive-btn';
            archiveBtn.innerText = 'Archiv';
            archiveBtn.style.marginLeft = '12px';
            archiveBtn.style.cursor = 'pointer';
            archiveBtn.style.color = '#2b6cb0';
            archiveBtn.style.fontWeight = '600';
            archiveBtn.style.fontSize = '13px';
            archiveBtn.style.verticalAlign = 'middle';
            archiveBtn.style.userSelect = 'none';
            archiveBtn.style.transition = '0.15s';

            archiveBtn.addEventListener('mouseenter', () => {
                archiveBtn.style.opacity = '0.75';
                archiveBtn.style.textDecoration = 'underline';
            });

            archiveBtn.addEventListener('mouseleave', () => {
                archiveBtn.style.opacity = '1';
                archiveBtn.style.textDecoration = 'none';
            });

            archiveBtn.addEventListener('click', openViewer);
            submitBtn.insertAdjacentElement('afterend', archiveBtn);

            clearInterval(interval);
        }, 300);
    }

    function initPokynPrePobockuSetter() {
        const interval = setInterval(() => {
            const secondSelect = getByXPath('/html/body/div[9]/div/div[2]/div/div/div[2]/div[2]/strong/strong/form/div[2]/div/select');
            const firstSelect = getByXPath('/html/body/div[9]/div/div[2]/div/div/div[2]/div[2]/strong/strong/form/div[4]/div/select');
            const textElem = getByXPath('/html/body/div[9]/div/div[2]/div/div/div[1]/div[2]/div[2]/p[5]/strong');

            if (!secondSelect && !firstSelect) return;

            if (secondSelect && secondSelect.options.length > 1) {
                secondSelect.value = secondSelect.options[1].value;
                secondSelect.dispatchEvent(new Event('change', { bubbles: true }));
            }

            if (firstSelect && textElem) {
                const text = (textElem.textContent || '').trim();
                const option = Array.from(firstSelect.options).find(o => o.text.trim() === text);

                if (option) {
                    firstSelect.value = option.value;
                    firstSelect.dispatchEvent(new Event('change', { bubbles: true }));
                }
            }

            clearInterval(interval);
        }, 500);
    }

    async function openViewer() {
        const records = await getAllRecords();
        records.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

        const oldPanel = document.querySelector('#fc-archiv-panel');
        if (oldPanel) {
            oldPanel.remove();
            return;
        }

        const panel = document.createElement('div');
        panel.id = 'fc-archiv-panel';
        panel.style.position = 'fixed';
        panel.style.top = '50%';
        panel.style.left = '50%';
        panel.style.transform = 'translate(-50%, -50%)';
        panel.style.width = '950px';
        panel.style.maxWidth = '95vw';
        panel.style.height = '82vh';
        panel.style.background = '#fff';
        panel.style.zIndex = '999999';
        panel.style.borderRadius = '18px';
        panel.style.overflow = 'hidden';
        panel.style.boxShadow = '0 20px 80px rgba(0,0,0,0.35)';
        panel.style.display = 'flex';
        panel.style.flexDirection = 'column';
        panel.style.fontFamily = 'Arial, sans-serif';

        let html = `
            <div style="padding:18px 22px;border-bottom:1px solid #eee;display:flex;justify-content:space-between;align-items:center;background:#f8fafc;">
                <div>
                    <div style="font-size:20px;font-weight:700;color:#111;">Archiv pokynov</div>
                    <div style="font-size:12px;color:#666;margin-top:3px;">${records.length} zaznamov</div>
                </div>
                <div style="display:flex;gap:8px;">
                    <button id="fc-export-json" style="border:none;background:#2d3748;color:white;padding:9px 13px;border-radius:10px;cursor:pointer;font-weight:600;">Export</button>
                    <button id="fc-close-panel" style="border:none;background:#e2e8f0;padding:9px 13px;border-radius:10px;cursor:pointer;font-weight:600;">X</button>
                </div>
            </div>
            <div style="padding:14px 20px;border-bottom:1px solid #eee;background:white;">
                <input type="text" id="fc-search" placeholder="Hladat VP, meno alebo text..." style="width:100%;padding:11px 14px;border:1px solid #ddd;border-radius:12px;font-size:14px;outline:none;">
            </div>
            <div id="fc-records" style="flex:1;overflow:auto;padding:16px;background:#f5f7fb;">
        `;

        records.forEach(r => {
            html += `
                <div class="fc-record" style="background:white;border:1px solid #ececec;border-radius:16px;padding:14px;margin-bottom:12px;">
                    <div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:10px;">
                        <span style="background:#edf2f7;padding:5px 10px;border-radius:999px;font-size:12px;font-weight:700;">VP ${r.vp}</span>
                        <span style="background:#ebf8ff;color:#2b6cb0;padding:5px 10px;border-radius:999px;font-size:12px;">${escapeHtml(r.typ)}</span>
                        <span style="background:#f0fff4;color:#276749;padding:5px 10px;border-radius:999px;font-size:12px;">${escapeHtml(r.recipientText)}</span>
                    </div>
                    <div style="white-space:pre-wrap;line-height:1.5;color:#222;font-size:14px;margin-bottom:12px;">${escapeHtml(r.message)}</div>
                    <div style="display:flex;justify-content:space-between;align-items:center;gap:10px;font-size:12px;color:#777;flex-wrap:wrap;">
                        <div>${new Date(r.timestamp).toLocaleString()}</div>
                        <a href="${r.url}" target="_blank" style="color:#2b6cb0;text-decoration:none;font-weight:600;">Otvorit VP</a>
                    </div>
                </div>
            `;
        });

        html += '</div>';
        panel.innerHTML = html;
        document.body.appendChild(panel);

        document.querySelector('#fc-close-panel').addEventListener('click', () => panel.remove());
        document.querySelector('#fc-export-json').addEventListener('click', exportJSON);

        const searchInput = document.querySelector('#fc-search');
        searchInput.addEventListener('input', function () {
            const value = this.value.toLowerCase();

            document.querySelectorAll('.fc-record').forEach(card => {
                const text = card.innerText.toLowerCase();
                card.style.display = text.includes(value) ? '' : 'none';
            });
        });
    }

    async function exportJSON() {
        const records = await getAllRecords();
        const blob = new Blob([JSON.stringify(records, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'fc-pokyny-archiv.json';
        a.click();
        URL.revokeObjectURL(url);
    }

    async function init() {
        await openDB();
        initFormWatcher();
        customizeButtons();
        initPokynPrePobockuSetter();
    }

    init();
})();
