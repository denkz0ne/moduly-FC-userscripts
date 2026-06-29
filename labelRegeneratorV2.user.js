// ==UserScript==
// @name         labelRegenerator V2
// @namespace    https://moduly.faxcopy.sk/
// @author       mato e.
// @version      2.0.2
// @description  Uprava print stitku, overlay zony, konfigurator layoutu a klavesa L pre otvorenie, tlac a zatvorenie stitku.
// @updateURL    https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/labelRegeneratorV2.user.js
// @downloadURL  https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/labelRegeneratorV2.user.js
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
    const CONFIG_STORAGE_KEY = 'labelRegeneratorLayoutConfigV201';
    const PANEL_OPEN_STORAGE_KEY = 'labelRegeneratorPanelOpen';
    const MODE_STORAGE_KEY = 'labelRegeneratorMode';
    const SELECTED_BLOCK_STORAGE_KEY = 'labelRegeneratorSelectedBlock';
    const EDIT_ZOOM = 1.45;

    const ZONE_DEFINITIONS = [
        {
            key: 'TM_testoLeft',
            aliases: ['testoleft'],
            id: 'lr-zone-testoleft',
            slug: 'testo-left',
            title: 'TM_testoLeft',
            defaults: {
                container: {
                    x: 1,
                    y: 35.4,
                    width: 41,
                    height: 5.6,
                    zIndex: 20,
                    visible: true,
                    paddingLeft: 1.2,
                    paddingRight: 1.2,
                    paddingTop: 0.3,
                    paddingBottom: 0.3,
                    borderWidth: 0,
                    borderColor: '#999999',
                    borderRadius: 0,
                    backgroundColor: 'transparent'
                },
                text: {
                    fontFamily: "'Roboto Condensed', Arial, sans-serif",
                    fontSize: 4.8,
                    fontWeight: 400,
                    lineHeight: 1,
                    letterSpacing: 0,
                    scaleX: 100,
                    textAlign: 'left',
                    color: '#111111',
                    backgroundColor: 'transparent',
                    borderWidth: 0,
                    borderColor: 'transparent',
                    borderRadius: 0,
                    paddingX: 0,
                    paddingY: 0,
                    uppercase: false
                }
            }
        },
        {
            key: 'TM_testoRight',
            aliases: ['testoright'],
            id: 'lr-zone-testoright',
            slug: 'testo-right',
            title: 'TM_testoRight',
            defaults: {
                container: {
                    x: 43,
                    y: 35.4,
                    width: 18,
                    height: 5.6,
                    zIndex: 20,
                    visible: true,
                    paddingLeft: 1.2,
                    paddingRight: 1.2,
                    paddingTop: 0.3,
                    paddingBottom: 0.3,
                    borderWidth: 0,
                    borderColor: '#999999',
                    borderRadius: 0,
                    backgroundColor: 'transparent'
                },
                text: {
                    fontFamily: "'Roboto Condensed', Arial, sans-serif",
                    fontSize: 4.5,
                    fontWeight: 400,
                    lineHeight: 1,
                    letterSpacing: 0,
                    scaleX: 100,
                    textAlign: 'right',
                    color: '#111111',
                    backgroundColor: 'transparent',
                    borderWidth: 0,
                    borderColor: 'transparent',
                    borderRadius: 0,
                    paddingX: 0,
                    paddingY: 0,
                    uppercase: false
                }
            }
        },
        {
            key: 'TM_top',
            aliases: [],
            id: 'lr-zone-top',
            slug: 'top',
            title: 'TM_top',
            defaults: {
                container: {
                    x: 40.5,
                    y: 0.4,
                    width: 20.5,
                    height: 6.2,
                    zIndex: 20,
                    visible: true,
                    paddingLeft: 1.2,
                    paddingRight: 1.2,
                    paddingTop: 0.3,
                    paddingBottom: 0.3,
                    borderWidth: 0,
                    borderColor: '#999999',
                    borderRadius: 0,
                    backgroundColor: 'transparent'
                },
                text: {
                    fontFamily: "'Roboto Condensed', Arial, sans-serif",
                    fontSize: 4.7,
                    fontWeight: 400,
                    lineHeight: 1,
                    letterSpacing: 0,
                    scaleX: 100,
                    textAlign: 'right',
                    color: '#111111',
                    backgroundColor: 'transparent',
                    borderWidth: 0,
                    borderColor: 'transparent',
                    borderRadius: 0,
                    paddingX: 0,
                    paddingY: 0,
                    uppercase: false
                }
            }
        },
        {
            key: 'TM_bottom',
            aliases: [],
            id: 'lr-zone-bottom',
            slug: 'bottom',
            title: 'TM_bottom',
            defaults: {
                container: {
                    x: 40.5,
                    y: 6.8,
                    width: 20.5,
                    height: 6.2,
                    zIndex: 20,
                    visible: true,
                    paddingLeft: 1.2,
                    paddingRight: 1.2,
                    paddingTop: 0.3,
                    paddingBottom: 0.3,
                    borderWidth: 0,
                    borderColor: '#999999',
                    borderRadius: 0,
                    backgroundColor: 'transparent'
                },
                text: {
                    fontFamily: "'Roboto Condensed', Arial, sans-serif",
                    fontSize: 4.7,
                    fontWeight: 400,
                    lineHeight: 1,
                    letterSpacing: 0,
                    scaleX: 100,
                    textAlign: 'right',
                    color: '#111111',
                    backgroundColor: 'transparent',
                    borderWidth: 0,
                    borderColor: 'transparent',
                    borderRadius: 0,
                    paddingX: 0,
                    paddingY: 0,
                    uppercase: false
                }
            }
        }
    ];

    const FIELD_GROUPS = {
        container: [
            { key: 'x', label: 'X', type: 'number', min: 0, max: LABEL_WIDTH_MM, step: 0.1, unit: 'mm' },
            { key: 'y', label: 'Y', type: 'number', min: 0, max: LABEL_HEIGHT_MM, step: 0.1, unit: 'mm' },
            { key: 'width', label: 'Width', type: 'number', min: 0.5, max: LABEL_WIDTH_MM, step: 0.1, unit: 'mm' },
            { key: 'height', label: 'Height', type: 'number', min: 0.5, max: LABEL_HEIGHT_MM, step: 0.1, unit: 'mm' },
            { key: 'zIndex', label: 'Z-index', type: 'number', min: 1, max: 9999, step: 1 },
            { key: 'visible', label: 'Visible', type: 'checkbox' },
            { key: 'paddingLeft', label: 'Pad Left', type: 'number', min: 0, max: 10, step: 0.1, unit: 'mm' },
            { key: 'paddingRight', label: 'Pad Right', type: 'number', min: 0, max: 10, step: 0.1, unit: 'mm' },
            { key: 'paddingTop', label: 'Pad Top', type: 'number', min: 0, max: 10, step: 0.1, unit: 'mm' },
            { key: 'paddingBottom', label: 'Pad Bottom', type: 'number', min: 0, max: 10, step: 0.1, unit: 'mm' },
            { key: 'borderWidth', label: 'Border', type: 'number', min: 0, max: 3, step: 0.1, unit: 'mm' },
            { key: 'borderRadius', label: 'Radius', type: 'number', min: 0, max: 10, step: 0.1, unit: 'mm' },
            { key: 'borderColor', label: 'Border Color', type: 'text' },
            { key: 'backgroundColor', label: 'Block Bg', type: 'text' }
        ],
        text: [
            { key: 'fontSize', label: 'Font', type: 'number', min: 1, max: 16, step: 0.1, unit: 'mm' },
            { key: 'fontWeight', label: 'Weight', type: 'number', min: 100, max: 900, step: 100 },
            { key: 'lineHeight', label: 'Line', type: 'number', min: 0.7, max: 2, step: 0.05 },
            { key: 'letterSpacing', label: 'Letter', type: 'number', min: -1, max: 3, step: 0.05, unit: 'mm' },
            { key: 'scaleX', label: 'Stretch', type: 'number', min: 50, max: 200, step: 1, unit: '%' },
            { key: 'paddingX', label: 'Text Pad X', type: 'number', min: 0, max: 5, step: 0.1, unit: 'mm' },
            { key: 'paddingY', label: 'Text Pad Y', type: 'number', min: 0, max: 5, step: 0.1, unit: 'mm' },
            { key: 'borderWidth', label: 'Text Border', type: 'number', min: 0, max: 3, step: 0.1, unit: 'mm' },
            { key: 'borderRadius', label: 'Text Radius', type: 'number', min: 0, max: 10, step: 0.1, unit: 'mm' },
            { key: 'textAlign', label: 'Align', type: 'select', options: ['left', 'center', 'right'] },
            { key: 'uppercase', label: 'Uppercase', type: 'checkbox' },
            { key: 'color', label: 'Text Color', type: 'text' },
            { key: 'backgroundColor', label: 'Text Bg', type: 'text' },
            { key: 'borderColor', label: 'Text Border Color', type: 'text' }
        ]
    };

    let layoutConfig = loadLayoutConfig();
    let currentMode = getStoredMode();
    let panelOpen = getStoredPanelOpen();
    let panelElements = null;
    let selectedBlockKey = getStoredSelectedBlock();

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

    function deepClone(value) {
        return JSON.parse(JSON.stringify(value));
    }

    function buildDefaultLayoutConfig() {
        const config = { blocks: {} };
        ZONE_DEFINITIONS.forEach((definition) => {
            config.blocks[definition.key] = deepClone(definition.defaults);
        });
        return config;
    }

    function getStoredPanelOpen() {
        return localStorage.getItem(PANEL_OPEN_STORAGE_KEY) === '1';
    }

    function setStoredPanelOpen(value) {
        localStorage.setItem(PANEL_OPEN_STORAGE_KEY, value ? '1' : '0');
    }

    function getStoredSelectedBlock() {
        const value = localStorage.getItem(SELECTED_BLOCK_STORAGE_KEY) || '';
        return ZONE_DEFINITIONS.some((definition) => definition.key === value) ? value : '';
    }

    function setStoredSelectedBlock(value) {
        const normalized = ZONE_DEFINITIONS.some((definition) => definition.key === value) ? value : '';
        selectedBlockKey = normalized;
        if (normalized) {
            localStorage.setItem(SELECTED_BLOCK_STORAGE_KEY, normalized);
        } else {
            localStorage.removeItem(SELECTED_BLOCK_STORAGE_KEY);
        }
    }

    function getStoredMode() {
        return localStorage.getItem(MODE_STORAGE_KEY) === 'edit' ? 'edit' : 'view';
    }

    function setStoredMode(value) {
        currentMode = value === 'edit' ? 'edit' : 'view';
        localStorage.setItem(MODE_STORAGE_KEY, currentMode);
        document.documentElement.classList.toggle('lr-edit-mode', currentMode === 'edit');
        if (panelElements && panelElements.modeSelect) {
            panelElements.modeSelect.value = currentMode;
        }
        updateConfiguratorPosition();
    }

    function loadLayoutConfig() {
        const defaults = buildDefaultLayoutConfig();
        const raw = localStorage.getItem(CONFIG_STORAGE_KEY);
        if (!raw) return defaults;

        try {
            const parsed = JSON.parse(raw);
            return normalizeLayoutConfig(parsed, defaults);
        } catch (error) {
            return defaults;
        }
    }

    function saveLayoutConfig() {
        localStorage.setItem(CONFIG_STORAGE_KEY, JSON.stringify(layoutConfig));
    }

    function normalizeLayoutConfig(input, defaults) {
        const normalized = deepClone(defaults);
        const sourceBlocks = input && input.blocks ? input.blocks : {};

        ZONE_DEFINITIONS.forEach((definition) => {
            const incoming = sourceBlocks[definition.key] || {};
            normalized.blocks[definition.key] = normalizeBlockConfig(
                incoming,
                defaults.blocks[definition.key]
            );
        });

        return normalized;
    }

    function normalizeBlockConfig(input, defaults) {
        const block = deepClone(defa