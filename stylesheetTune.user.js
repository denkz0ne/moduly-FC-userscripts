// ==UserScript==
// @name         stylesheetTune
// @namespace    http://tvoj-namespace.example
// @version      1.4
// @description  Prepis Stylebot CSS na Tampermonkey script + zväčšenie tlačidla accept a skrytie posuvníkov v celej tabuľke
// @updateURL    https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/stylesheetTune.user.js
// @downloadURL  https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/stylesheetTune.user.js
// @match        https://moduly.faxcopy.sk/*
// @grant        none
// @run-at       document-start
// ==/UserScript==
// FC Userscripts ecosystem: https://github.com/denkz0ne/moduly-FC-userscripts

(function() {
    'use strict';

    const css = `
    #dodacia_lehota_label {font-size: 13px;color: #000000;}
    form div strong {font-size: 12px;}
    span.badge.fs11 {font-size: 12px;}
    ul.table-toolbar li {padding-left: 10px;padding-right: 10px;}
    span.blue {font-size: 12px;}
    #frm-pokyn {font-size: 14px;line-height: 18px;}
    div.box.grid_6 tbody tr td {font-size: 12px;font-weight: 700;font-style: normal;}
    a.button.red {font-size: 10px;}
    a.button.green.small.block.mt5 {font-size: 12px;}
    #fc-wrapper > .content.container_12 {padding-top: 6px;}
    #fc-wrapper #vp-detail {padding-top: 6px;}
    #vp-detail > .box.grid_6:has(> #material-detector-summary-row) > .box.grid_6.detail {
      float: left !important;
      display: block !important;
      box-sizing: border-box !important;
      width: 49.5% !important;
      margin: 0 .5% 15px 0 !important;
    }
    #vp-detail > .box.grid_6:has(> #material-detector-summary-row) > .box.grid_6.statuses {
      float: left !important;
      display: block !important;
      box-sizing: border-box !important;
      width: 49% !important;
      margin: 0 .5% 15px !important;
    }
    #tracy-debug-bar {display: none !important;}
    a.action.silk.accept {transform: scale(1.2);transform-origin: center;display: inline-block;}

    table tbody tr td div {
      overflow: hidden;
      scrollbar-width: none;
    }
    table tbody tr td div::-webkit-scrollbar {
      display: none;
    }
    `;

    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);

    const findVpPanels = () => {
        const summary = document.querySelector('#vp-detail #material-detector-summary-row');
        const group = summary && summary.parentElement;
        if (!group) return null;
        const order = group.querySelector(':scope > .box.grid_6.detail');
        const status = group.querySelector(':scope > .box.grid_6.statuses');
        const actionHeader = Array.from(document.querySelectorAll('#vp-detail .box.grid_12.overview > .box-head'))
            .find(header => header.textContent.replace(/\s+/g, ' ').trim().toLocaleUpperCase('sk-SK') === 'AKCIA');
        return order && status && actionHeader ? { cards: [order, status], actionHeader } : null;
    };

    const alignVpPanelStarts = ({ cards, actionHeader }) => {
        cards.forEach(card => card.style.removeProperty('margin-top'));
        const actionTop = actionHeader.getBoundingClientRect().top;
        const firstCardTop = Math.min(...cards.map(card => card.getBoundingClientRect().top));
        const offset = Math.round((actionTop - firstCardTop) * 100) / 100;
        cards.forEach(card => card.style.setProperty('margin-top', `${offset}px`, 'important'));
    };

    const initializeVpPanelAlignment = () => {
        const panels = findVpPanels();
        if (!panels) return false;

        let frame = 0;
        const scheduleAlignment = () => {
            if (frame) cancelAnimationFrame(frame);
            frame = requestAnimationFrame(() => {
                frame = 0;
                alignVpPanelStarts(panels);
            });
        };

        scheduleAlignment();
        window.addEventListener('resize', scheduleAlignment, { passive: true });
        window.addEventListener('load', scheduleAlignment, { once: true });
        const contentObserver = new MutationObserver(scheduleAlignment);
        contentObserver.observe(document.getElementById('vp-detail'), { childList: true, characterData: true, subtree: true });
        return true;
    };

    if (!initializeVpPanelAlignment()) {
        const pageObserver = new MutationObserver(() => {
            if (initializeVpPanelAlignment()) pageObserver.disconnect();
        });
        pageObserver.observe(document.documentElement, { childList: true, subtree: true });
    }
})();
