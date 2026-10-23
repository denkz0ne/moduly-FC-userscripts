// ==UserScript==
// @name         Pokyny Pre - Archiv
// @namespace    http://faxcopy.sk/
// @version      1.10
// @description  Archivacia pokynov a poznamok z VP formulara + interne priznaky pokynov
// @updateURL    https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/main/pokynPre_archiver.user.js
// @downloadURL  https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/main/pokynPre_archiver.user.js
// @match        https://moduly.faxcopy.sk/vyrobne_prikazy/detail/index/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==
// FC Userscripts ecosystem: https://github.com/denkz0ne/moduly-FC-userscripts

(function () {
    'use strict';

    const DB_NAME = 'fc_pokyny_archiv';
    const STORE_NAME = 'pokyny';
    const DB_VERSION = 1;
    const STYLE_ID = 'fc-archiver-ui-style';

    const POKYN_TAGS = [
        {
            id: 'chyba',
            label: 'Chyba',
            color: '#b42318',
            background: '#fde8e6',
            border: '#f3b8b3'
        },
        {
            id: 'info',
            label: 'Info',
            color: '#1d4ed8',
            background: '#e7f0ff',
            border: '#b7cdfc'
        },
        {
            id: 'poziadavka',
            label: 'Poziadavka',
            color: '#9a3412',
            background: '#fff0df',
            border: '#fdc98b'
        },
        {
            id: 'otazka',
            label: 'Otazka',
            color: '#075985',
            background: '#e0f2fe',
            border: '#a5d8f3'
        },
        {
            id: 'upozornenie',
            label: 'Upozornenie',
            color: '#9a3412',
            background: '#fff0df',
            border: '#fdc98b'
        },
        {
            id: 'hotovo',
            label: 'Hotovo',
            color: '#15803d',
            background: '#dcfce7',
            border: '#9ddbaf'
        }
    ];

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

    function normalizeText(text) {
        return (text || '').replace(/\s+/g, ' ').trim();
    }

    function getTagConfig(tagId) {
        return POKYN_TAGS.find(tag => tag.id === tagId) || null;
    }

    function getSelectedTags() {
        return Array.from(document.querySelectorAll('#fc-pokyn-tags .fc-pokyn-tag.is-selected'))
            .map(button => button.dataset.tag)
            .filter(Boolean);
    }

    function getSelectedArchiveTags() {
        return Array.from(document.querySelectorAll('#fc-archive-tag-filters .fc-archive-tag-filter.is-selected'))
            .map(button => button.dataset.tag)
            .filter(Boolean);
    }

    function getTagLabels(tagIds) {
        return (tagIds || [])
            .map(tagId => getTagConfig(tagId))
            .filter(Boolean)
            .map(tag => tag.label);
    }

    function applyTagButtonStyle(button, selected) {
        const tag = getTagConfig(button.dataset.tag);
        if (!tag) return;

        Object.assign(button.style, {
            border: selected ? `2px solid ${tag.color}` : '1px solid #d6d6d6',
            background: selected ? tag.background : '#fff',
            color: selected ? tag.color : '#555',
            borderRadius: '6px',
            padding: selected ? '2px 6px' : '3px 7px',
            fontSize: '11px',
            fontWeight: selected ? '700' : '600',
            lineHeight: '13px',
            boxSizing: 'border-box',
            cursor: 'pointer',
            userSelect: 'none',
            transition: '0.12s ease',
            boxShadow: selected ? `0 0 0 1px ${tag.border}` : 'none'
        });
    }

    function createTagButton(tag, className, onToggle) {
        const button = document.createElement('button');
        button.type = 'button';
        button.dataset.tag = tag.id;
        button.className = className;
        button.textContent = tag.label;
        button.title = `Interny priznak: ${tag.label}`;
        button.setAttribute('aria-pressed', 'false');

        applyTagButtonStyle(button, false);

        button.addEventListener('click', () => {
            const selected = !button.classList.contains('is-selected');
            button.classList.toggle('is-selected', selected);
            button.setAttribute('aria-pressed', selected ? 'true' : 'false');
            applyTagButtonStyle(button, selected);

            if (onToggle) {
                onToggle();
            }
        });

        return button;
    }

    function createTagSelector() {
        const submitBtn = document.querySelector('#frm-pokyn input[type="submit"]');
        if (!submitBtn || document.querySelector('#fc-pokyn-tags')) {
            return;
        }

        const buttonRow = submitBtn.closest('.form-row') || submitBtn.parentNode;
        if (!buttonRow) {
            return;
        }

        const wrapper = document.createElement('div');
        wrapper.id = 'fc-pokyn-tags';
        wrapper.dataset.internalOnly = '1';

        Object.assign(wrapper.style, {
            marginTop: '6px',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '4px',
            alignItems: 'center',
            maxWidth: '360px'
        });

        POKYN_TAGS.forEach(tag => {
            wrapper.appendChild(createTagButton(tag, 'fc-pokyn-tag'));
        });

        buttonRow.insertAdjacentElement('afterend', wrapper);
    }

    function renderRecordTags(tagIds) {
        const tags = (tagIds || []).map(tagId => getTagConfig(tagId)).filter(Boolean);

        if (!tags.length) {
            return '';
        }

        return `
            <div style="display:flex;flex-wrap:wrap;gap:5px;margin-bottom:10px;">
                ${tags.map(tag => `
                    <span style="background:${tag.background};color:${tag.color};border:1px solid ${tag.border};padding:3px 7px;border-radius:999px;font-size:11px;font-weight:700;">
                        ${escapeHtml(tag.label)}
                    </span>
                `).join('')}
            </div>
        `;
    }

    function createArchiveTagFilters(onFilterChange) {
        const wrapper = document.createElement('div');
        wrapper.id = 'fc-archive-tag-filters';

        Object.assign(wrapper.style, {
            marginTop: '7px',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '5px',
            alignItems: 'center'
        });

        POKYN_TAGS.forEach(tag => {
            wrapper.appendChild(createTagButton(tag, 'fc-archive-tag-filter', onFilterChange));
        });

        return wrapper;
    }

    function setNativeSelectValue(select, value) {
        if (!select || select.value === value) {
            return;
        }

        select.value = value;
        select.dispatchEvent(new Event('input', { bubbles: true }));
        select.dispatchEvent(new Event('change', { bubbles: true }));

        if (window.jQuery) {
            window.jQuery(select).val(value).trigger('change');
        }
    }

    function findOptionByText(select, expectedText) {
        if (!select || !expectedText) {
            return null;
        }

        const normalizedExpected = normalizeText(expectedText).toLowerCase();

        return Array.from(select.options).find(option =>
            normalizeText(option.text).toLowerCase() === normalizedExpected
        ) || null;
    }

    function findAssignedBranchText() {
        const detail = document.querySelector('#vpOrderDetail');
        const root = detail || document;

        const rows = Array.from(root.querySelectorAll('p'));

        for (const row of rows) {
            const rowText = normalizeText(row.textContent);

            if (!rowText.includes('Pridelenie:')) {
                continue;
            }

            const strong = row.querySelector('strong');
            const strongText = normalizeText(strong ? strong.textContent : '');

            if (strongText) {
                return strongText;
            }

            const match = rowText.match(/Pridelenie:\s*([^\s]+)/);
            if (match) {
                return normalizeText(match[1]);
            }
        }

        const detailText = normalizeText(root.textContent);
        const fallbackMatch = detailText.match(/Pridelenie:\s*([^\s]+)/);

        return fallbackMatch ? normalizeText(fallbackMatch[1]) : '';
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
                    const tags = getSelectedTags();

                    const data = {
                        timestamp: nowISO(),
                        url: location.href,
                        vp: extractVP(),
                        typ: getSelectedText(typSelect),
                        recipientValue: recipientSelect ? recipientSelect.value : '',
                        recipientText: getSelectedText(recipientSelect),
                        message: textarea && textarea.value ? textarea.value.trim() : '',
                        tags,
                        tagLabels: getTagLabels(tags),
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

            if (!document.querySelector('#fc-archive-btn')) {
                submitBtn.value = 'Potvrdit a archivovat';
                Object.assign(submitBtn.style, {
                    border: '1px solid #779904',
                    borderRadius: '2px',
                    padding: '6px 10px',
                    background: '#8BB400',
                    color: '#fff',
                    fontFamily: 'Tahoma, Calibri, "Trebuchet MS", sans-serif',
                    fontSize: '11px',
                    fontWeight: '700',
                    cursor: 'pointer'
                });

                const archiveBtn = document.createElement('button');
                archiveBtn.id = 'fc-archive-btn';
                archiveBtn.type = 'button';
                archiveBtn.className = 'fc-archive-open';
                archiveBtn.textContent = 'Archív';
                archiveBtn.title = 'Otvoriť archív pokynov';
                archiveBtn.setAttribute('aria-haspopup', 'dialog');

                archiveBtn.addEventListener('click', openViewer);
                submitBtn.insertAdjacentElement('afterend', archiveBtn);
            }

            createTagSelector();

            if (document.querySelector('#fc-archive-btn') && document.querySelector('#fc-pokyn-tags')) {
                clearInterval(interval);
            }
        }, 300);
    }

    function initPokynPrePobockuSetter() {
        let tries = 0;

        const interval = setInterval(() => {
            tries++;

            const typSelect = document.querySelector('#frm-pokyn_typ');
            const branchSelect = document.querySelector('#frm-pokyn_pobocka');
            const assignedBranchText = findAssignedBranchText();

            if (!typSelect || !branchSelect || !assignedBranchText) {
                if (tries > 80) {
                    clearInterval(interval);
                    console.warn('[ARCHIV] nepodarilo sa najst formular alebo Pridelenie');
                }

                return;
            }

            const pokynPreOption = Array.from(typSelect.options).find(option =>
                normalizeText(option.text).toLowerCase().startsWith('pokyn pre')
            );

            if (pokynPreOption) {
                setNativeSelectValue(typSelect, pokynPreOption.value);
            }

            const branchOption = findOptionByText(branchSelect, assignedBranchText);

            if (!branchOption) {
                clearInterval(interval);
                console.warn(`[ARCHIV] pobocka ${assignedBranchText} nie je v selecte Pokyn pre`);
                return;
            }

            setNativeSelectValue(branchSelect, branchOption.value);
            clearInterval(interval);
            console.log(`[ARCHIV] Pokyn pre nastaveny na ${assignedBranchText}`);
        }, 300);
    }

    function addViewerStyles() {
        if (document.getElementById(STYLE_ID)) return;
        const style = document.createElement('style');
        style.id = STYLE_ID;
        style.textContent = `
            #fc-archive-btn{margin-left:8px;padding:5px 9px;border:1px solid #779904;border-radius:2px;background:#8BB400;color:#fff;font:700 11px Tahoma,Calibri,"Trebuchet MS",sans-serif;cursor:pointer}
            #fc-archive-btn:hover{background:#779904}
            #fc-archiv-panel{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);display:flex;flex-direction:column;width:950px;max-width:95vw;height:82vh;overflow:hidden;z-index:999999;background:#fff;border:1px solid #777;border-radius:3px;box-shadow:0 8px 28px rgba(0,0,0,.32);color:#000;font:11px/1.35 Tahoma,Calibri,"Trebuchet MS",sans-serif}
            #fc-archiv-panel *{box-sizing:border-box}
            #fc-archiv-panel .fc-archiv-head{display:flex;justify-content:space-between;align-items:center;gap:10px;padding:8px 10px;background:linear-gradient(#292929,#141414);color:#fff}
            #fc-archiv-panel .fc-archiv-title{font-size:12px;font-weight:700;text-transform:uppercase}
            #fc-archiv-panel .fc-archiv-count{margin-top:2px;color:#ddd;font-size:11px}
            #fc-archiv-panel .fc-archiv-actions{display:flex;align-items:center;gap:5px}
            #fc-archiv-panel .fc-archive-button{padding:6px 9px;border:1px solid #777;border-radius:2px;background:#292929;color:#fff;font:700 11px Tahoma,Calibri,"Trebuchet MS",sans-serif;cursor:pointer}
            #fc-archiv-panel .fc-archive-button.primary{border-color:#779904;background:#8BB400}
            #fc-archiv-panel .fc-archive-button:hover{filter:brightness(.94)}
            #fc-archive-controls{padding:8px 9px;border-bottom:1px solid #ccc;background:#fff}
            #fc-search{width:100%;padding:6px 8px;border:1px solid #bbb;border-radius:0;background:#fff;color:#000;font:11px Tahoma,Calibri,"Trebuchet MS",sans-serif}
            #fc-archive-tag-filters{margin-top:7px;display:flex;flex-wrap:wrap;gap:4px;align-items:center}
            #fc-records{flex:1;overflow:auto;padding:9px;background:#D8D6D8}
            #fc-archiv-panel .fc-record{background:#fff;border:1px solid #ccc;border-radius:3px;padding:9px;margin-bottom:7px}
            #fc-archiv-panel .fc-record:nth-child(even){background:#F3F3F3}
            #fc-archiv-panel .fc-record-identities{display:flex;flex-wrap:wrap;gap:5px;margin-bottom:7px}
            #fc-archiv-panel .fc-record-badge{display:inline-block;padding:3px 6px;border:1px solid #ccc;border-radius:2px;background:#EBE7D4;color:#292929;font-size:10px;font-weight:700}
            #fc-archiv-panel .fc-record-badge.type{border-color:#b7cdfc;background:#e7f0ff;color:#1d4ed8}
            #fc-archiv-panel .fc-record-badge.recipient{border-color:#9ddbaf;background:#dcfce7;color:#15803d}
            #fc-archiv-panel .fc-record-message{margin-bottom:8px;color:#222;font-size:12px;line-height:1.4;white-space:pre-wrap;overflow-wrap:anywhere}
            #fc-archiv-panel .fc-record-footer{display:flex;justify-content:space-between;align-items:center;gap:8px;flex-wrap:wrap;border-top:1px solid #ddd;padding-top:5px;color:#555;font-size:10px}
            #fc-archiv-panel .fc-record-footer a{color:#83AB24;text-decoration:none;font-weight:700}
            #fc-archiv-panel .fc-record-footer a:hover{text-decoration:underline}
            @media(max-width:700px){#fc-archiv-panel{width:96vw;height:88vh;max-width:96vw}#fc-archiv-panel .fc-archiv-head{align-items:flex-start}#fc-archiv-panel .fc-record-footer{align-items:flex-start}}
        `;
        (document.head || document.documentElement).appendChild(style);
    }

    async function openViewer() {
        const records = await getAllRecords();
        records.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

        const oldPanel = document.querySelector('#fc-archiv-panel');
        if (oldPanel) {
            oldPanel.remove();
            return;
        }

        addViewerStyles();
        const panel = document.createElement('section');
        panel.id = 'fc-archiv-panel';
        panel.setAttribute('role', 'dialog');
        panel.setAttribute('aria-modal', 'true');
        panel.setAttribute('aria-label', 'Archív pokynov');

        let html = `
            <div class="fc-archiv-head">
                <div>
                    <div class="fc-archiv-title">Archív pokynov</div>
                    <div class="fc-archiv-count">${records.length} záznamov</div>
                </div>
                <div class="fc-archiv-actions">
                    <button id="fc-export-json" class="fc-archive-button primary" type="button">Exportovať JSON</button>
                    <button id="fc-close-panel" class="fc-archive-button" type="button" aria-label="Zavrieť archív">Zavrieť</button>
                </div>
            </div>
            <div id="fc-archive-controls">
                <input type="text" id="fc-search" placeholder="Hľadať VP, meno, text alebo príznak..." aria-label="Hľadať v archíve">
            </div>
            <div id="fc-records">
        `;

        records.forEach(r => {
            const tags = Array.isArray(r.tags) ? r.tags : [];
            const tagSearchText = getTagLabels(tags).join(' ');

            html += `
                <div class="fc-record" data-tags="${escapeHtml(tags.join(' '))}">
                    <div class="fc-record-identities">
                        <span class="fc-record-badge">VP ${escapeHtml(String(r.vp || ''))}</span>
                        <span class="fc-record-badge type">${escapeHtml(r.typ)}</span>
                        <span class="fc-record-badge recipient">${escapeHtml(r.recipientText)}</span>
                    </div>
                    ${renderRecordTags(tags)}
                    <div class="fc-record-message">${escapeHtml(r.message)}</div>
                    <div style="display:none;">${escapeHtml(tagSearchText)}</div>
                    <div class="fc-record-footer">
                        <div>${new Date(r.timestamp).toLocaleString()}</div>
                        <a href="${escapeHtml(r.url)}" target="_blank" rel="noopener noreferrer">Otvoriť VP</a>
                    </div>
                </div>
            `;
        });

        html += '</div>';
        panel.innerHTML = html;
        document.body.appendChild(panel);

        const searchInput = panel.querySelector('#fc-search');
        const archiveControls = panel.querySelector('#fc-archive-controls');

        function applyArchiveFilters() {
            const value = searchInput.value.toLowerCase();
            const selectedTags = getSelectedArchiveTags();

            panel.querySelectorAll('.fc-record').forEach(card => {
                const text = card.innerText.toLowerCase();
                const tags = (card.dataset.tags || '').toLowerCase().split(' ').filter(Boolean);
                const textMatch = !value || text.includes(value) || tags.join(' ').includes(value);
                const tagMatch = !selectedTags.length || selectedTags.some(tag => tags.includes(tag));

                card.style.display = textMatch && tagMatch ? '' : 'none';
            });
        }

        archiveControls.appendChild(createArchiveTagFilters(applyArchiveFilters));

        panel.querySelector('#fc-close-panel').addEventListener('click', () => panel.remove());
        panel.querySelector('#fc-export-json').addEventListener('click', exportJSON);
        searchInput.addEventListener('input', applyArchiveFilters);
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
        addViewerStyles();
        initFormWatcher();
        customizeButtons();
        initPokynPrePobockuSetter();
    }

    init();
})();
