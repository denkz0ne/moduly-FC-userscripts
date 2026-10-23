// ==UserScript==
// @name         FC Action Panel
// @namespace    faxcopy-userscripts
// @author       mato e.
// @version      1.6
// @description  Spoločný riadok pre tlačidlá a nástroje userscriptov na detaile VP
// @updateURL    https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/main/FCActionPanel.user.js
// @downloadURL  https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/main/FCActionPanel.user.js
// @match        https://moduly.faxcopy.sk/vyrobne_prikazy/detail/index/*
// @run-at       document-end
// ==/UserScript==
// FC Userscripts ecosystem: https://github.com/denkz0ne/moduly-FC-userscripts

(function () {
    'use strict';

    const PANEL_ID = 'fc-userscripts-action-panel';
    const STYLE_ID = 'fc-userscripts-action-panel-style';
    const FRONT_QUEUE_ID = 'fc-userscripts-front-queue';
    const FRONT_QUEUE_MENU_ID = 'fc-userscripts-front-queue-menu';
    const ACTION_HEADING = 'AKCIA';
    const KNOWN_BUTTONS = [
        { selector: '#material-detector-next-config-button', order: 10, background: '#183b56', borderColor: '#123149' },
        { selector: '#materialDetectorConfigButton', order: 20, background: '#263238', borderColor: '#111111' },
        { selector: '#m2CalcButton', order: 30, background: '#00897b', borderColor: '#00695c' },
        { selector: `#${FRONT_QUEUE_ID}`, order: 10000 }
    ];

    function normalizeText(value) {
        return String(value || '').replace(/\s+/g, ' ').trim().toLocaleUpperCase('sk');
    }

    function findActionSection() {
        const candidates = Array.from(document.querySelectorAll('h1,h2,h3,h4,.box-head,.box-title,.box_header'));
        const heading = candidates.find(node => normalizeText(node.textContent) === ACTION_HEADING);
        if (!heading) return null;

        const box = heading.closest('.box') || heading.closest('[class*="grid_"]');
        if (!box) return { box: null, heading: heading.closest('.box-head,.box-title,.box_header') || heading.parentElement };
        return {
            box,
            heading: heading.closest('.box-head,.box-title,.box_header') || heading.parentElement
        };
    }

    function addStyles() {
        if (document.getElementById(STYLE_ID)) return;
        const style = document.createElement('style');
        style.id = STYLE_ID;
        style.textContent = `
            #${PANEL_ID}{position:relative;z-index:2;display:flex;flex-flow:row wrap;align-items:center;gap:5px;width:100%;box-sizing:border-box;margin:0 0 6px;padding:0;background:transparent;border:0;border-radius:0;font:11px/1.2 Tahoma,Calibri,"Trebuchet MS",sans-serif}
            #${PANEL_ID} .fc-action-button{position:static!important;inset:auto!important;display:inline-flex!important;flex:0 0 auto;align-items:center;justify-content:center;width:auto!important;min-width:0!important;max-width:100%;box-sizing:border-box;margin:0!important;padding:6px 9px!important;border-width:1px!important;border-style:solid!important;border-radius:2px!important;box-shadow:none!important;color:#fff!important;font:700 11px/1.2 Tahoma,Calibri,"Trebuchet MS",sans-serif!important;text-align:center;text-decoration:none!important;white-space:nowrap;cursor:pointer}
            #${PANEL_ID} .fc-action-button:hover{filter:brightness(.94)}
            #${PANEL_ID} .fc-front-queue{position:relative;display:inline-flex;flex:0 0 auto;margin-left:auto}
            #${PANEL_ID} .fc-front-queue-menu{position:absolute;top:calc(100% + 3px);left:0;z-index:10000;display:flex;flex-direction:column;gap:3px;min-width:160px;padding:4px;background:#fff;border:1px solid #bbb;border-radius:2px;box-shadow:0 3px 8px rgba(0,0,0,.2)}
            #${PANEL_ID} .fc-front-queue-menu[hidden]{display:none}
            #${PANEL_ID} .fc-front-queue-menu .fc-action-button{display:flex!important;justify-content:flex-start!important;width:100%!important;white-space:normal}
            @media(max-width:700px){#${PANEL_ID}{gap:4px}#${PANEL_ID} .fc-action-button{white-space:normal}}
        `;
        (document.head || document.documentElement).appendChild(style);
    }

    function ensureActionPanel() {
        if (!document.body) return null;
        addStyles();
        let panel = document.getElementById(PANEL_ID);
        if (!panel) {
            panel = document.createElement('div');
            panel.id = PANEL_ID;
            panel.setAttribute('role', 'group');
            panel.setAttribute('aria-label', 'Akcie userscriptov');
        }
        Object.assign(panel.style, {
            position: 'relative', top: 'auto', right: 'auto', bottom: 'auto', left: 'auto',
            zIndex: '2', display: 'flex', flexDirection: 'row', flexWrap: 'wrap',
            alignItems: 'center', gap: '5px', width: '100%', boxSizing: 'border-box',
            margin: '0 0 6px', padding: '0', background: 'transparent',
            border: '0', borderRadius: '0',
            font: '11px/1.2 Tahoma, Calibri, "Trebuchet MS", sans-serif'
        });

        const section = findActionSection();
        if (section && section.box && section.heading && section.heading.parentNode === section.box) {
            if (panel.parentNode !== section.box || panel.nextSibling !== section.heading) {
                section.box.insertBefore(panel, section.heading);
            }
        } else if (section && section.heading && section.heading.parentNode) {
            if (panel.parentNode !== section.heading.parentNode || panel.nextSibling !== section.heading) {
                section.heading.parentNode.insertBefore(panel, section.heading);
            }
        } else if (!panel.isConnected) {
            document.body.appendChild(panel);
        }
        return panel;
    }

    function styleActionButton(button, options = {}) {
        const background = options.background || '#8BB400';
        const borderColor = options.borderColor || '#779904';
        button.classList.add('fc-action-button');
        Object.assign(button.style, {
            position: 'static', top: 'auto', right: 'auto', bottom: 'auto', left: 'auto',
            display: 'inline-flex', width: 'auto', minWidth: '0', boxSizing: 'border-box',
            margin: '0', padding: '6px 9px', textAlign: 'center', lineHeight: '13px',
            fontWeight: '700', fontFamily: 'Tahoma, Calibri, "Trebuchet MS", sans-serif',
            fontSize: '11px', color: '#fff', background, border: `1px solid ${borderColor}`,
            borderRadius: '2px', cursor: 'pointer', boxShadow: 'none', textDecoration: 'none',
            whiteSpace: 'nowrap'
        });
        return button;
    }

    function ensureFrontQueueDropdown(panel) {
        let dropdown = document.getElementById(FRONT_QUEUE_ID);
        if (dropdown) return dropdown;

        dropdown = document.createElement('div');
        dropdown.id = FRONT_QUEUE_ID;
        dropdown.className = 'fc-front-queue';

        const trigger = document.createElement('button');
        trigger.type = 'button';
        trigger.className = 'fc-action-button';
        trigger.textContent = 'DO FRONTY ▾';
        trigger.title = 'Zobraziť akcie pre zaradenie do fronty';
        trigger.setAttribute('aria-haspopup', 'true');
        trigger.setAttribute('aria-expanded', 'false');
        trigger.setAttribute('aria-controls', FRONT_QUEUE_MENU_ID);
        styleActionButton(trigger, { background: '#8BB400', borderColor: '#779904' });

        const menu = document.createElement('div');
        menu.id = FRONT_QUEUE_MENU_ID;
        menu.className = 'fc-front-queue-menu';
        menu.setAttribute('role', 'menu');
        menu.setAttribute('aria-label', 'Akcie fronty');
        menu.hidden = true;

        const setOpen = open => {
            menu.hidden = !open;
            trigger.setAttribute('aria-expanded', open ? 'true' : 'false');
        };

        trigger.addEventListener('click', event => {
            event.preventDefault();
            event.stopPropagation();
            setOpen(menu.hidden);
        });
        trigger.addEventListener('keydown', event => {
            if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') return;
            event.preventDefault();
            setOpen(true);
            const items = menu.querySelectorAll('a,button,[role="menuitem"]');
            if (items.length) items[event.key === 'ArrowDown' ? 0 : items.length - 1].focus();
        });
        menu.addEventListener('keydown', event => {
            if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') return;
            const items = Array.from(menu.querySelectorAll('a,button,[role="menuitem"]'));
            if (!items.length) return;
            event.preventDefault();
            const currentIndex = items.indexOf(document.activeElement);
            const step = event.key === 'ArrowDown' ? 1 : -1;
            items[(currentIndex + step + items.length) % items.length].focus();
        });
        menu.addEventListener('click', event => {
            if (event.target.closest('a,button')) setOpen(false);
        }, true);
        document.addEventListener('click', event => {
            if (!dropdown.contains(event.target)) setOpen(false);
        });
        document.addEventListener('keydown', event => {
            if (event.key !== 'Escape' || menu.hidden) return;
            setOpen(false);
            trigger.focus();
        });

        dropdown.append(trigger, menu);
        panel.appendChild(dropdown);
        return dropdown;
    }

    function orderButtons(panel) {
        const children = Array.from(panel.children);
        const indexed = children.map((node, index) => {
            const known = KNOWN_BUTTONS.find(item => item.selector && node.matches(item.selector));
            return { node, index, order: known ? known.order : 100 + index };
        });
        indexed.sort((a, b) => a.order - b.order || a.index - b.index);
        indexed.forEach(({ node }, index) => {
            if (panel.children[index] !== node) panel.insertBefore(node, panel.children[index] || null);
        });
    }

    function adoptKnownButtons() {
        const panel = ensureActionPanel();
        if (!panel) return;
        KNOWN_BUTTONS.filter(config => config.selector !== `#${FRONT_QUEUE_ID}`).forEach(config => {
            const button = document.querySelector(config.selector);
            if (!button) return;
            styleActionButton(button, config);
            if (button.parentNode !== panel) panel.appendChild(button);
        });

        const graphicsButton = document.querySelector('#doGrafikyBtn');
        if (graphicsButton) {
            const dropdown = ensureFrontQueueDropdown(panel);
            const menu = dropdown.querySelector(`#${FRONT_QUEUE_MENU_ID}`);
            styleActionButton(graphicsButton, { background: '#7b1fa2', borderColor: '#6a1b9a' });
            graphicsButton.setAttribute('role', 'menuitem');
            if (graphicsButton.parentNode !== menu) menu.appendChild(graphicsButton);
        }
        orderButtons(panel);
    }

    window.FCUserscripts = Object.assign(window.FCUserscripts || {}, {
        ensureActionPanel,
        styleActionButton,
        adoptKnownButtons
    });

    function init() {
        if (!document.body) return;
        adoptKnownButtons();
        const observer = new MutationObserver(adoptKnownButtons);
        observer.observe(document.body, { childList: true, subtree: true });
        let tries = 0;
        const interval = setInterval(() => {
            tries += 1;
            adoptKnownButtons();
            if (tries >= 60) clearInterval(interval);
        }, 500);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init, { once: true });
    } else {
        init();
    }
})();
