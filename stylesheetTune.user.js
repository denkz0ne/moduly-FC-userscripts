// ==UserScript==
// @name         stylesheetTune
// @namespace    http://tvoj-namespace.example
// @version      1.1
// @description  CSS styly
// @match        https://moduly.faxcopy.sk/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

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
