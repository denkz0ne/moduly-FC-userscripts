// ==UserScript==
// @name         Pokyny Pre - Archiv
// @namespace    http://faxcopy.sk/
// @version      1.8
// @description  Archivacia pokynov a poznamok z VP formulara + interne priznaky pokynov
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
            marginTop: '8px',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '4px',
            alignItems: 'center',
            maxWidth: '340px'
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
            marginTop: '10px',
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
            <div id="fc-archive-controls" style="padding:14px 20px;border-bottom:1px solid #eee;background:white;">
                <input type="text" id="fc-search" placeholder="Hladat VP, meno, text alebo priznak..." style="width:100%;padding:11px 14px;border:1px solid #ddd;border-radius:12px;font-size:14px;outline:none;box-sizing:border-box;">
            </div>
            <div id="fc-records" style="flex:1;overflow:auto;padding:16px;background:#f5f7fb;">
        `;

        records.forEach(r => {
            const tags = Array.isArray(r.tags) ? r.tags : [];
            const tagSearchText = getTagLabels(tags).join(' ');

            html += `
                <div class="fc-record" data-tags="${escapeHtml(tags.join(' '))}" style="background:white;border:1px solid #ececec;border-radius:16px;padding:14px;margin-bottom:12px;">
                    <div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:10px;">
                        <span style="background:#edf2f7;padding:5px 10px;border-radius:999px;font-size:12px;font-weight:700;">VP ${r.vp}</span>
                        <span style="background:#ebf8ff;color:#2b6cb0;padding:5px 10px;border-radius:999px;font-size:12px;">${escapeHtml(r.typ)}</span>
                        <span style="background:#f0fff4;color:#276749;padding:5px 10px;border-radius:999px;font-size:12px;">${escapeHtml(r.recipientText)}</span>
                    </div>
                    ${renderRecordTags(tags)}
                    <div style="white-space:pre-wrap;line-height:1.5;color:#222;font-size:14px;margin-bottom:12px;">${escapeHtml(r.message)}</div>
                    <div style="display:none;">${escapeHtml(tagSearchText)}</div>
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

        const searchInput = document.querySelector('#fc-search');
        const archiveControls = document.querySelector('#fc-archive-controls');

        function applyArchiveFilters() {
            const value = searchInput.value.toLowerCase();
            const selectedTags = getSelectedArchiveTags();

            document.querySelectorAll('.fc-record').forEach(card => {
                const text = card.innerText.toLowerCase();
                const tags = (card.dataset.tags || '').toLowerCase().split(' ').filter(Boolean);
                const textMatch = !value || text.includes(value) || tags.join(' ').includes(value);
                const tagMatch = !selectedTags.length || selectedTags.some(tag => tags.includes(tag));

                card.style.display = textMatch && tagMatch ? '' : 'none';
            });
        }

        archiveControls.appendChild(createArchiveTagFilters(applyArchiveFilters));

        document.querySelector('#fc-close-panel').addEventListener('click', () => panel.remove());
        document.querySelector('#fc-export-json').addEventListener('click', exportJSON);
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
        initFormWatcher();
        customizeButtons();
        initPokynPrePobockuSetter();
    }

    init();
})();
