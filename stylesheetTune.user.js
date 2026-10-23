// ==UserScript==
// @name         stylesheetTune
// @namespace    http://tvoj-namespace.example
// @version      1.1
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
    #vp-detail > .box.grid_6:has(> #material-detector-summary-row) {
      display: flex !important;
      flex-flow: row wrap !important;
      align-items: stretch !important;
    }
    #vp-detail > .box.grid_6:has(> #material-detector-summary-row) > #material-detector-summary-row {
      flex: 0 0 100% !important;
      width: 100% !important;
      clear: none !important;
      margin-bottom: 2px !important;
    }
    #vp-detail > .box.grid_6:has(> #material-detector-summary-row) > .box.grid_6.detail,
    #vp-detail > .box.grid_6:has(> #material-detector-summary-row) > .box.grid_6.statuses {
      display: flex !important;
      flex-direction: column !important;
      float: none !important;
      box-sizing: border-box !important;
    }
    #vp-detail > .box.grid_6:has(> #material-detector-summary-row) > .box.grid_6.detail {
      flex: 0 0 49.5% !important;
      width: 49.5% !important;
      margin: 0 .5% 15px 0 !important;
    }
    #vp-detail > .box.grid_6:has(> #material-detector-summary-row) > .box.grid_6.statuses {
      flex: 0 0 49% !important;
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
})();
