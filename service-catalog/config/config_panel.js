(function () {
    'use strict';

    const BUTTON_ID = 'material-detector-next-config-button';
    const PANEL_ID = 'material-detector-next-config-panel';
    const STYLE_ID = 'material-detector-next-config-style';
    const api = window.MaterialDetectorNextAPI;
    let activeTab = 'overview';

    function el(tag, className, text) {
        const node = document.createElement(tag);
        if (className) node.className = className;
        if (text != null) node.textContent = text;
        return node;
    }

    function styles() {
        if (document.getElementById(STYLE_ID)) return;
        const style = document.createElement('style');
        style.id = STYLE_ID;
        style.textContent = [
            '#'+PANEL_ID+'{position:fixed;z-index:10001;right:20px;top:94px;width:520px;max-width:calc(100vw - 30px);max-height:calc(100vh - 115px);overflow:hidden;background:#f7f9fc;color:#17283b;border:1px solid #d6e0ec;border-radius:16px;box-shadow:0 18px 55px rgba(15,36,59,.27);font:13px/1.45 Inter,system-ui,-apple-system,"Segoe UI",sans-serif;display:none}',
            '#'+PANEL_ID+' *{box-sizing:border-box}',
            '#'+PANEL_ID+' .mdn-head{display:flex;align-items:center;justify-content:space-between;padding:15px 18px;background:#183b56;color:#fff}',
            '#'+PANEL_ID+' .mdn-title{font-size:16px;font-weight:760}',
            '#'+PANEL_ID+' .mdn-subtitle{margin-top:2px;color:#c4d6e5;font-size:11px}',
            '#'+PANEL_ID+' .mdn-close{border:0;background:transparent;color:#fff;font-size:22px;cursor:pointer;padding:2px 7px;border-radius:8px}',
            '#'+PANEL_ID+' .mdn-tabs{display:flex;gap:4px;padding:8px 10px;background:#eaf0f6;border-bottom:1px solid #dce5ef;overflow-x:auto}',
            '#'+PANEL_ID+' .mdn-tab{border:0;border-radius:8px;padding:8px 10px;background:transparent;color:#60748a;font-weight:700;white-space:nowrap;cursor:pointer}',
            '#'+PANEL_ID+' .mdn-tab[aria-selected="true"]{background:#fff;color:#183b56;box-shadow:0 1px 4px rgba(28,53,78,.12)}',
            '#'+PANEL_ID+' .mdn-content{padding:15px 17px;overflow:auto;max-height:calc(100vh - 220px)}',
            '#'+PANEL_ID+' .mdn-card{padding:13px;margin-bottom:11px;background:#fff;border:1px solid #e1e8f0;border-radius:12px}',
            '#'+PANEL_ID+' .mdn-card h3{margin:0 0 9px;font-size:13px;color:#203a54}',
            '#'+PANEL_ID+' .mdn-help{margin:4px 0 0;color:#718096;font-size:11px}',
            '#'+PANEL_ID+' .mdn-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px}',
            '#'+PANEL_ID+' .mdn-stat{padding:10px;border-radius:9px;background:#f3f7fb}',
            '#'+PANEL_ID+' .mdn-stat-label{display:block;color:#718096;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.06em}',
            '#'+PANEL_ID+' .mdn-stat-value{display:block;margin-top:3px;color:#183b56;font-weight:750;overflow-wrap:anywhere}',
            '#'+PANEL_ID+' label{display:block;margin:10px 0 5px;color:#445a70;font-weight:700;font-size:11px}',
            '#'+PANEL_ID+' input,#'+PANEL_ID+' textarea{width:100%;padding:9px 10px;border:1px solid #d2dce8;border-radius:8px;background:#fff;color:#17283b;font:inherit}',
            '#'+PANEL_ID+' textarea{min-height:68px;resize:vertical}',
            '#'+PANEL_ID+' .mdn-row{display:flex;gap:8px;align-items:center;margin-top:10px;flex-wrap:wrap}',
            '#'+PANEL_ID+' .mdn-button{border:1px solid #cbd7e4;border-radius:8px;padding:8px 11px;background:#fff;color:#294862;font:inherit;font-weight:700;cursor:pointer}',
            '#'+PANEL_ID+' .mdn-button:hover{background:#edf4fa}',
            '#'+PANEL_ID+' .mdn-button.primary{background:#176b5b;border-color:#176b5b;color:#fff}',
            '#'+PANEL_ID+' .mdn-button.primary:hover{background:#125747}',
            '#'+PANEL_ID+' .mdn-button.subtle{background:#183b56;border-color:#183b56;color:#fff}',
            '#'+PANEL_ID+' .mdn-badge{display:inline-flex;align-items:center;padding:4px 8px;border-radius:99px;background:#e8f5ef;color:#176b5b;font-size:10px;font-weight:800}',
            '#'+PANEL_ID+' .mdn-badge.warn{background:#fff1d9;color:#8a5710}',
            '#'+PANEL_ID+' .mdn-list{display:grid;gap:8px}',
            '#'+PANEL_ID+' .mdn-field{padding:10px;border:1px solid #e1e8f0;border-radius:9px;background:#fff}',
            '#'+PANEL_ID+' .mdn-field-title{font-weight:750;color:#294862}',
            '#'+PANEL_ID+' .mdn-field-meta{font-size:10px;color:#718096;margin-top:2px;overflow-wrap:anywhere}',
            '#'+PANEL_ID+' .mdn-proposal{padding:11px;border:1px solid #dce5ef;border-radius:10px;background:#fff}',
            '#'+PANEL_ID+' .mdn-proposal-head{display:flex;justify-content:space-between;gap:8px;align-items:center}',
            '#'+PANEL_ID+' .mdn-proposal-fields{display:grid;gap:7px;margin-top:8px}',
            '#'+PANEL_ID+' .mdn-proposal-field{display:grid;grid-template-columns:1fr 1fr;gap:7px}',
            '#'+PANEL_ID+' .mdn-field-options{display:grid;gap:5px;padding:3px 0 7px}',
            '#'+PANEL_ID+' .mdn-inline-label{display:flex;align-items:center;gap:6px;margin:0;font-weight:500}',
            '#'+PANEL_ID+' .mdn-inline-label input{width:auto}',
            '#'+PANEL_ID+' .mdn-empty{padding:20px;text-align:center;color:#718096;background:#fff;border:1px dashed #ccd8e5;border-radius:10px}',
            '@media(max-width:700px){#'+PANEL_ID+'{right:8px;top:90px;width:calc(100vw - 16px);max-height:calc(100vh - 100px)}#'+PANEL_ID+' .mdn-content{max-height:calc(100vh - 200px)}}'
        ].join('');
        (document.head || document.documentElement).appendChild(style);
    }

    function ensureButton() {
        const actionPanelApi = window.FCUserscripts;
        let actionPanel = document.getElementById('fc-userscripts-action-panel');
        if (!actionPanel && actionPanelApi && typeof actionPanelApi.ensureActionPanel === 'function') {
            actionPanel = actionPanelApi.ensureActionPanel();
        }
        if (!actionPanel) return null;

        let button = document.getElementById(BUTTON_ID);
        if (!button) {
            button = el('button', '', 'NEXT CFG');
            button.id = BUTTON_ID;
            button.type = 'button';
            button.title = 'Otvoriť nastavenia a návrhy Material Detector Next';
            button.addEventListener('click', toggle);
        }
        if (actionPanelApi && typeof actionPanelApi.styleActionButton === 'function') {
            actionPanelApi.styleActionButton(button, { background: '#183b56', borderColor: '#123149' });
        } else {
            Object.assign(button.style, {
                position: 'static', right: 'auto', bottom: 'auto', display: 'block',
                width: '100%', minWidth: '0', boxSizing: 'border-box', margin: '0',
                padding: '8px 10px', textAlign: 'center', lineHeight: '13px',
                fontWeight: '700', color: '#fff', background: '#183b56',
                border: '1px solid #123149', borderRadius: '5px', cursor: 'pointer',
                boxShadow: '0 2px 8px rgba(0,0,0,0.18)', textDecoration: 'none'
            });
        }
        if (button.parentNode !== actionPanel) actionPanel.insertBefore(button, actionPanel.firstChild);
        return button;
    }

    function waitForActionPanel() {
        if (!document.body || ensureButton()) return;
        const observer = new MutationObserver(() => {
            if (ensureButton()) observer.disconnect();
        });
        observer.observe(document.body, { childList: true, subtree: true });
    }

    function ensurePanel() {
        let panel = document.getElementById(PANEL_ID);
        if (panel) return panel;
        panel = document.createElement('section');
        panel.id = PANEL_ID;
        panel.setAttribute('aria-label', 'Material Detector Next konfigurácia');
        document.body.appendChild(panel);
        return panel;
    }

    function currentState() {
        return window.__materialDetectorNextState || {};
    }

    function currentDatabase() {
        return currentState().database || {};
    }

    function currentProposalContext() {
        return window.MaterialDetectorNextPageContext.collect();
    }

    function saveAndRender(detectorId, fields) {
        api.saveDetectorSettings(detectorId, fields);
        window.dispatchEvent(new CustomEvent('materialDetectorNext:configChanged'));
        render();
    }

    function stat(label, value) {
        const box = el('div', 'mdn-stat');
        box.append(el('span', 'mdn-stat-label', label), el('span', 'mdn-stat-value', value || '—'));
        return box;
    }

    function renderOverview(content) {
        const state = currentState();
        const result = state.result;
        const dbState = currentDatabase();
        const db = dbState.database || {};
        const card = el('section', 'mdn-card');
        card.append(el('h3', '', 'Stav detekcie'));
        const grid = el('div', 'mdn-grid');
        grid.append(
            stat('Služba', state.service && state.service.name || 'Neznáma služba'),
            stat('Detektor', result && result.detector || 'Bez zhody'),
            stat('DB verzia', db.dataVersion ? 'v' + db.dataVersion : 'nedostupná'),
            stat('Zdroj DB', dbState.source || '—')
        );
        card.appendChild(grid);
        if (dbState.refreshError || dbState.error) {
            const warn = el('p', 'mdn-help', 'DB sa nepodarilo obnoviť: ' + (dbState.refreshError || dbState.error));
            card.appendChild(warn);
        }
        content.appendChild(card);

        const zones = state.zones || {};
        const preview = el('section', 'mdn-card');
        preview.append(el('h3', '', 'Polia štítka'));
        const previewGrid = el('div', 'mdn-grid');
        previewGrid.append(
            stat('Ľavé', zones.left),
            stat('Pravé · termín', zones.right),
            stat('Horné', zones.top),
            stat('Dolné', zones.bottom)
        );
        preview.appendChild(previewGrid);
        preview.append(el('p', 'mdn-help', 'Toto sú iba hodnoty náhľadu; do pôvodného štítka sa nič nezapisuje.'));
        content.appendChild(preview);

        const actions = el('section', 'mdn-card');
        actions.append(el('h3', '', 'Rýchle akcie'));
        const row = el('div', 'mdn-row');
        row.append(button('Obnoviť databázu', async event => {
            event.currentTarget.disabled = true;
            try { await window.MaterialDetectorNext.refresh(); }
            finally { event.currentTarget.disabled = false; }
        }));
        if (!state.service) {
            row.append(button('Vytvoriť návrh z tejto VP', createProposal, 'primary'));
        }
        actions.appendChild(row);
        actions.append(el('p', 'mdn-help', 'Návrhy sa najprv ukladajú lokálne. Publikujú sa až po kontrole a ručnom nahratí do GitHubu.'));
        content.appendChild(actions);
    }

    function button(label, action, type) {
        const node = el('button', 'mdn-button' + (type ? ' ' + type : ''), label);
        node.type = 'button';
        node.addEventListener('click', action);
        return node;
    }

    function textareaField(labelText, value, help) {
        const wrap = document.createElement('div');
        const label = el('label', '', labelText);
        const input = document.createElement('textarea');
        input.value = value || '';
        wrap.append(label, input);
        if (help) wrap.appendChild(el('p', 'mdn-help', help));
        return { wrap, input };
    }

    function renderTemplates(content) {
        const state = currentState();
        const detectorId = state.result && state.result.detector || state.service && state.service.detectorId || 'default';
        const settings = api.getDetectorSettings(detectorId);
        const defaults = {
            leftTemplate: settings.leftTemplate || '',
            topTemplate: settings.topTemplate || '',
            bottomTemplate: settings.bottomTemplate || '',
            renameTemplate: settings.renameTemplate || '{alias}_{size}_{quantity}_{vp} {original}.{ext}'
        };
        const card = el('section', 'mdn-card');
        card.append(el('h3', '', 'Šablóny výstupu'));
        card.append(el('p', 'mdn-help', 'Dostupné tokeny sa zobrazia v detaile detektora. Prázdne pole ponechá pôvodný výstup detektora.'));
        const fields = {};
        [
            ['leftTemplate', 'Ľavé pole štítka'],
            ['topTemplate', 'Horné pole štítka'],
            ['bottomTemplate', 'Dolné pole štítka'],
            ['renameTemplate', 'Názov sťahovaného súboru']
        ].forEach(([key, label]) => {
            const item = textareaField(label, defaults[key], '{alias} · {size} · {quantity} · {vp}');
            fields[key] = item.input;
            card.appendChild(item.wrap);
        });
        const rename = document.createElement('label');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.style.width = 'auto';
        checkbox.checked = typeof settings.renameEnabled === 'boolean'
            ? settings.renameEnabled
            : !!(state.result && state.result.rename && state.result.rename.enabled);
        rename.append(checkbox, document.createTextNode(' Povoliť premenovanie sťahovaného súboru'));
        card.appendChild(rename);
        card.appendChild(button('Uložiť šablóny', () => {
            saveAndRender(detectorId, {
                leftTemplate: fields.leftTemplate.value,
                topTemplate: fields.topTemplate.value,
                bottomTemplate: fields.bottomTemplate.value,
                renameTemplate: fields.renameTemplate.value,
                renameEnabled: checkbox.checked
            });
        }, 'primary'));
        content.appendChild(card);
    }

    function renderService(content) {
        const state = currentState();
        const service = state.service;
        const card = el('section', 'mdn-card');
        card.append(el('h3', '', service ? service.name : 'Služba v tomto VP'));
        const rows = state.context && state.context.rawRows || [];
        if (!rows.length) {
            card.appendChild(el('div', 'mdn-empty', 'Na stránke sa nenašli čitateľné parametre služby.'));
        } else {
            const list = el('div', 'mdn-list');
            rows.forEach(row => {
                const item = el('div', 'mdn-field');
                item.append(el('div', 'mdn-field-title', row.label), el('div', 'mdn-field-meta', row.value));
                list.appendChild(item);
            });
            card.appendChild(list);
        }
        content.appendChild(card);

        const aliasCard = el('section', 'mdn-card');
        aliasCard.append(el('h3', '', 'Vlastný alias materiálu'));
        aliasCard.append(el('p', 'mdn-help', 'Vlastný alias platí iba v tomto prehliadači a má prednosť pred aliasom z databázy. Kľúč môže byť názov materiálu alebo zložený kľúč služby.|médiá|povrch|gramáž.'));
        const aliasKeyLabel = el('label', '', 'Kľúč aliasu');
        const aliasKey = document.createElement('input');
        aliasKey.placeholder = service && service.id === '42foto-web' ? '42foto/web|fotopapier|matny|230g' : 'Pauzovací papier 90g';
        const aliasValueLabel = el('label', '', 'Výstupný alias');
        const aliasValue = document.createElement('input');
        aliasValue.placeholder = 'napr. 230 mat';
        aliasCard.append(aliasKeyLabel, aliasKey, aliasValueLabel, aliasValue);
        const aliasActions = el('div', 'mdn-row');
        aliasActions.append(
            button('Uložiť vlastný alias', () => {
                if (api.setMaterialAlias(aliasKey.value, aliasValue.value)) render();
            }, 'primary'),
            button('Odstrániť vlastný alias', () => {
                if (api.clearMaterialAlias(aliasKey.value)) render();
            })
        );
        aliasCard.appendChild(aliasActions);
        content.appendChild(aliasCard);
        if (state.result) {
            const tokens = el('section', 'mdn-card');
            tokens.append(el('h3', '', 'Detegované tokeny'));
            const list = el('div', 'mdn-list');
            Object.entries(state.result.tokens || {}).forEach(([key, value]) => {
                const item = el('div', 'mdn-field');
                item.append(el('div', 'mdn-field-title', '{' + key + '}'), el('div', 'mdn-field-meta', String(value == null ? '' : value)));
                list.appendChild(item);
            });
            tokens.appendChild(list);
            content.appendChild(tokens);
        }
    }

    function exportProposal(proposal) {
        const blob = window.MaterialDetectorNextProposals.exportJson(proposal);
        const url = URL.createObjectURL(blob);
        const anchor = document.createElement('a');
        anchor.href = url;
        anchor.download = proposal.proposalId + '.json';
        anchor.click();
        setTimeout(() => URL.revokeObjectURL(url), 1000);
    }

    function renderProposals(content) {
        const items = window.MaterialDetectorNextProposals.readAll();
        const card = el('section', 'mdn-card');
        card.append(el('h3', '', 'Návrhy služieb'));
        const current = currentState();
        if (!current.service) {
            card.append(el('p', 'mdn-help', 'Návrh sa vytvorí z polí otvoreného výrobného príkazu. Export obsahuje iba názov a mapovanie polí; hodnoty zákazkovej VP ani jej číslo sa do JSON nezahrnú.'));
            card.append(el('p', 'mdn-help', 'Zaškrtni len normalizované hodnoty, ktoré majú byť všeobecnou voľbou služby. Pôvodné zákazkové hodnoty ostávajú lokálne a z exportu sa vynechajú.'));
            card.appendChild(button('Vytvoriť návrh z tejto VP', createProposal, 'primary'));
        }
        if (!items.length) {
            card.appendChild(el('div', 'mdn-empty', 'Zatiaľ tu nie sú žiadne lokálne návrhy.'));
            content.appendChild(card);
            return;
        }
        const list = el('div', 'mdn-list');
        items.forEach(proposal => {
            const item = el('article', 'mdn-proposal');
            const head = el('div', 'mdn-proposal-head');
            const title = el('strong', '', proposal.serviceCandidate.name || proposal.serviceCandidate.id || 'Nová služba');
            const badge = el('span', 'mdn-badge' + (proposal.reviewStatus === 'pending' ? ' warn' : ''), proposal.reviewStatus === 'pending' ? 'NA KONTROLU' : 'SKONTROLOVANÉ');
            head.append(title, badge);
            const idInput = document.createElement('input');
            idInput.value = proposal.serviceCandidate.id || '';
            idInput.placeholder = 'Interný kód služby';
            idInput.setAttribute('aria-label', 'Interný kód služby');
            const nameInput = document.createElement('input');
            nameInput.value = proposal.serviceCandidate.name || '';
            nameInput.placeholder = 'Názov služby';
            nameInput.setAttribute('aria-label', 'Názov služby');
            const aliasInput = document.createElement('input');
            aliasInput.value = proposal.serviceCandidate.outputAlias || '';
            aliasInput.placeholder = 'Predvolený alias štítka';
            aliasInput.setAttribute('aria-label', 'Predvolený alias štítka');
            item.append(head, idInput, nameInput, aliasInput);
            const fields = el('div', 'mdn-proposal-fields');
            (proposal.rawFields || []).forEach((field, index) => {
                const row = el('div', 'mdn-proposal-field');
                const source = document.createElement('input');
                source.value = field.label + ': ' + field.rawValue;
                source.readOnly = true;
                source.setAttribute('aria-label', 'Pôvodná hodnota');
                const normalized = document.createElement('input');
                normalized.value = field.normalizedValue || '';
                normalized.setAttribute('aria-label', 'Normalizovaná hodnota ' + field.label);
                const updateField = patch => {
                    const next = proposal.rawFields.slice();
                    next[index] = Object.assign({}, next[index], patch);
                    proposal = window.MaterialDetectorNextProposals.update(proposal.proposalId, { rawFields: next });
                };
                normalized.addEventListener('change', () => updateField({ normalizedValue: normalized.value }));
                row.append(source, normalized);
                fields.appendChild(row);
                const fieldOptions = el('div', 'mdn-field-options');
                const includeLabel = el('label', 'mdn-inline-label');
                const includeValue = document.createElement('input');
                includeValue.type = 'checkbox';
                includeValue.checked = !!field.includeNormalizedValue;
                includeValue.addEventListener('change', () => updateField({ includeNormalizedValue: includeValue.checked }));
                includeLabel.append(includeValue, document.createTextNode(' Zahrnúť túto normalizovanú hodnotu do katalógu'));
                fieldOptions.appendChild(includeLabel);
                if (field.type === 'material') {
                    const alias = document.createElement('input');
                    alias.value = field.aliasValue || '';
                    alias.placeholder = 'Alias materiálu (voliteľný)';
                    alias.setAttribute('aria-label', 'Alias pre ' + field.label);
                    alias.addEventListener('change', () => updateField({ aliasValue: alias.value }));
                    fieldOptions.appendChild(alias);
                }
                fields.appendChild(fieldOptions);
            });
            item.appendChild(fields);
            const actions = el('div', 'mdn-row');
            actions.append(
                button('Označiť ako skontrolované', () => {
                    proposal = window.MaterialDetectorNextProposals.update(proposal.proposalId, {
                        serviceCandidate: Object.assign({}, proposal.serviceCandidate, { id: idInput.value.trim(), name: nameInput.value.trim(), outputAlias: aliasInput.value.trim() }),
                        reviewStatus: 'reviewed'
                    });
                    render();
                }),
                button('Exportovať JSON', () => {
                    proposal = window.MaterialDetectorNextProposals.update(proposal.proposalId, {
                        serviceCandidate: Object.assign({}, proposal.serviceCandidate, { id: idInput.value.trim(), name: nameInput.value.trim(), outputAlias: aliasInput.value.trim() }),
                        reviewStatus: 'reviewed'
                    });
                    exportProposal(proposal);
                }, 'primary'),
                button('Odstrániť', () => {
                    window.MaterialDetectorNextProposals.remove(proposal.proposalId);
                    render();
                })
            );
            item.appendChild(actions);
            const sourceLink = el('a', 'mdn-field-meta', 'Otvoriť zdrojový VP');
            try {
                const sourceUrl = new URL(proposal.pageUrl);
                if (sourceUrl.hostname === 'moduly.faxcopy.sk' && /^\/vyrobne_prikazy\/detail\/index\/\d+\/?$/.test(sourceUrl.pathname)) {
                    sourceLink.href = sourceUrl.href;
                    sourceLink.target = '_blank';
                    sourceLink.rel = 'noopener noreferrer';
                    item.appendChild(sourceLink);
                }
            } catch (error) {}
            list.appendChild(item);
        });
        card.appendChild(list);
        content.appendChild(card);
    }

    function renderDatabase(content) {
        const state = currentDatabase();
        const db = state.database || {};
        const card = el('section', 'mdn-card');
        card.append(el('h3', '', 'Databáza služieb'));
        const grid = el('div', 'mdn-grid');
        grid.append(
            stat('Zdroj', state.source || '—'),
            stat('Verzia', db.dataVersion ? 'v' + db.dataVersion : 'nedostupná'),
            stat('Počet služieb', String((db.services || []).length)),
            stat('Aktualizované', db.updatedAt || '—')
        );
        card.appendChild(grid);
        const cachedAt = state.cachedAt ? new Date(state.cachedAt).toLocaleString() : '—';
        card.append(el('p', 'mdn-help', 'Posledná uložená kópia: ' + cachedAt));
        if (state.refreshError || state.error) card.append(el('p', 'mdn-help', 'Stav obnovy: ' + (state.refreshError || state.error)));
        card.appendChild(button('Skontrolovať GitHub teraz', async event => {
            event.currentTarget.disabled = true;
            event.currentTarget.textContent = 'Načítavam…';
            try { await window.MaterialDetectorNext.refresh(); }
            finally { event.currentTarget.disabled = false; event.currentTarget.textContent = 'Skontrolovať GitHub teraz'; }
        }, 'primary'));
        content.appendChild(card);
        const hint = el('section', 'mdn-card');
        hint.append(el('h3', '', 'Publikovanie zmien'));
        hint.append(el('p', 'mdn-help', 'NEXT skript databázu iba sťahuje. Nové služby exportuj z karty Návrhy a JSON ručne nahraj alebo zlúč do service-catalog/db/services.json v GitHube.'));
        content.appendChild(hint);
    }

    function createProposal() {
        const context = currentProposalContext();
        if (!context) return;
        const databaseState = currentDatabase();
        window.MaterialDetectorNextProposals.create(context, databaseState.database && databaseState.database.dataVersion || 0);
        activeTab = 'proposals';
        render();
    }

    function render() {
        if (!document.body) return;
        const panel = ensurePanel();
        panel.replaceChildren();
        const head = el('div', 'mdn-head');
        const titleWrap = document.createElement('div');
        titleWrap.append(el('div', 'mdn-title', 'Material Detector Next'), el('div', 'mdn-subtitle', 'Správa služieb a náhľad štítka'));
        const close = el('button', 'mdn-close', '×');
        close.type = 'button';
        close.setAttribute('aria-label', 'Zavrieť panel');
        close.addEventListener('click', () => { panel.style.display = 'none'; });
        head.append(titleWrap, close);
        const tabs = el('nav', 'mdn-tabs');
        const tabLabels = [
            ['overview', 'Prehľad'],
            ['service', 'Služba'],
            ['templates', 'Šablóny'],
            ['proposals', 'Návrhy'],
            ['database', 'Dáta']
        ];
        const content = el('div', 'mdn-content');
        tabLabels.forEach(([id, label]) => {
            const tab = el('button', 'mdn-tab', label);
            tab.type = 'button';
            tab.setAttribute('aria-selected', String(id === activeTab));
            tab.addEventListener('click', () => { activeTab = id; render(); });
            tabs.appendChild(tab);
        });
        panel.append(head, tabs, content);
        if (activeTab === 'overview') renderOverview(content);
        else if (activeTab === 'service') renderService(content);
        else if (activeTab === 'templates') renderTemplates(content);
        else if (activeTab === 'proposals') renderProposals(content);
        else renderDatabase(content);
    }

    function toggle() {
        const panel = ensurePanel();
        if (panel.style.display === 'block') {
            panel.style.display = 'none';
            return;
        }
        render();
        panel.style.display = 'block';
    }

    function init() {
        if (!document.body) {
            document.addEventListener('DOMContentLoaded', init, { once: true });
            return;
        }
        styles();
        waitForActionPanel();
        ensurePanel();
        window.addEventListener('materialDetectorNext:updated', () => {
            const panel = document.getElementById(PANEL_ID);
            if (panel && panel.style.display === 'block') render();
        });
    }

    window.MaterialDetectorNextConfig = { init, open: toggle, render };
    init();
})();
