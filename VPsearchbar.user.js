// ==UserScript==
// @name         VP Searchbar
// @namespace    https://moduly.faxcopy.sk/
// @author       mato e.
// @version      1.2.4
// @description  Pridá input pre číslo VP nalavo od pôvodného vyhľadávania
// @match        https://moduly.faxcopy.sk/*
// @updateURL    https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/VPsearchbar.user.js
// @downloadURL  https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/VPsearchbar.user.js
// @grant        GM_openInTab
// @run-at       document-idle
// ==/UserScript==

(function () {
    'use strict';

    function findSearchInput() {
        return document.querySelector(
            'input[type="search"], input[name="search"], input[name="q"], #search-box'
        );
    }

    function enhanceSearchBar(originalInput) {
        if (!originalInput) return;
        if (document.getElementById('vp-quick-access')) return;

        const wrapper = originalInput.parentNode;

        // 🔢 VP input
        const vpInput = document.createElement('input');
        vpInput.type = 'text';
        vpInput.id = 'vp-quick-access';
        vpInput.placeholder = 'VP číslo…';
        vpInput.autocomplete = 'off';
        vpInput.spellcheck = false;
        vpInput.style.marginRight = '6px';
        vpInput.style.padding = getComputedStyle(originalInput).padding;
        vpInput.style.border = getComputedStyle(originalInput).border;
        vpInput.style.borderRadius = getComputedStyle(originalInput).borderRadius;
        vpInput.style.height = originalInput.offsetHeight + 'px';
        vpInput.style.boxSizing = 'border-box';
        vpInput.style.width = '110px';

        // 🏷️ ikonka tlače štítku (rovnaký vizuál ako v tabuľke)
        const labelLink = document.createElement('a');
        labelLink.href = '#';
        labelLink.title = 'Vytlačiť Štítok';
        labelLink.style.marginRight = '10px';
        labelLink.style.display = 'inline-flex';
        labelLink.style.alignItems = 'center';

        const img = document.createElement('img');
        img.src = '/assets/img/adminity/img/icons/04/16/39.png';
        img.alt = '';
        img.style.cursor = 'pointer';

        labelLink.appendChild(img);

        // vloženie pred pôvodný search
        wrapper.insertBefore(labelLink, originalInput);
        wrapper.insertBefore(vpInput, labelLink);

        // ⏎ Enter → detail VP
        vpInput.addEventListener('keydown', e => {
            if (e.key === 'Enter') {
                const vp = vpInput.value.trim();
                if (/^\d+$/.test(vp)) {
                    window.open(
                        `/vyrobne_prikazy/detail/index/${vp}`,
                        '_blank'
                    );
                } else {
                    alert('Zadaj platné číslo VP');
                }
            }
        });

        // 🏷️ klik na ikonku → tlač štítku
        labelLink.addEventListener('click', e => {
            e.preventDefault();

            const vp = vpInput.value.trim();
            if (/^\d+$/.test(vp)) {
                window.open(
                    `/vyrobne_prikazy/detail/printLabel/${vp}`,
                    '_blank'
                );
            } else {
                alert('Zadaj platné číslo VP');
            }
        });

        console.log('🏷️ VP search + ikonka tlače štítku pridané');
    }

    function injectVpLinkStyles() {
        if (document.getElementById('vp-detail-link-styles')) return;

        const style = document.createElement('style');
        style.id = 'vp-detail-link-styles';
        style.textContent = `
            #queue_log a.vp-detail-link {
                display: inline-flex;
                align-items: center;
                gap: 3px;
                font-weight: 600;
                text-decoration: none;
            }

            #queue_log a.vp-detail-link:hover {
                text-decoration: underline;
            }

            #queue_log .vp-detail-link-icon {
                display: inline-block;
                flex: 0 0 auto;
                margin-left: 2px;
            }
        `;

        document.head.appendChild(style);
    }

    function createVpDetailLink(vpId) {
        const link = document.createElement('a');
        link.className = 'vp-detail-link';
        link.href = `https://moduly.faxcopy.sk/vyrobne_prikazy/detail/index/${vpId}`;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.title = `Otvoriť VP ${vpId}`;

        const number = document.createElement('span');
        number.textContent = vpId;

        const icon = document.createElement('span');
        icon.className = 'ui-icon ui-icon-extlink vp-detail-link-icon';
        icon.setAttribute('aria-hidden', 'true');

        link.appendChild(number);
        link.appendChild(icon);

        return link;
    }

    function linkVpIdsInQueueLog() {
        const cells = document.querySelectorAll('#queue_log tbody td');
        if (!cells.length) return;

        injectVpLinkStyles();

        cells.forEach(cell => {
            if (cell.querySelector('a.vp-detail-link')) return;

            const text = cell.textContent;
            const match = text.match(/^(.*?\bID\s*=\s*)(\d+)(.*)$/);
            if (!match) return;

            cell.textContent = '';
            cell.appendChild(document.createTextNode(match[1]));
            cell.appendChild(createVpDetailLink(match[2]));
            if (match[3]) {
                cell.appendChild(document.createTextNode(match[3]));
            }
        });
    }

    function observeQueueLog() {
        const observer = new MutationObserver(linkVpIdsInQueueLog);

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });

        linkVpIdsInQueueLog();
    }

    function isVpListBackgroundLink(link) {
        const cell = link.closest('td');
        const row = link.closest('tr');
        const table = link.closest('table');

        return table && table.id === 'vp_list' &&
            row && row.parentElement && row.parentElement.tagName === 'TBODY' &&
            cell && (cell.cellIndex === 1 || cell.cellIndex === 2);
    }

    function openInBackgroundTab(url) {
        const absoluteUrl = new URL(url, window.location.href).href;

        if (typeof GM_openInTab === 'function') {
            GM_openInTab(absoluteUrl, {
                active: false,
                insert: true,
                setParent: true
            });
            return;
        }

        window.open(absoluteUrl, '_blank', 'noopener,noreferrer');
    }

    function enableVpListBackgroundLinks() {
        document.addEventListener('click', event => {
            if (event.defaultPrevented || event.button !== 0) return;
            if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

            const link = event.target.closest('a[href]');
            if (!link || !isVpListBackgroundLink(link)) return;

            event.preventDefault();
            event.stopPropagation();
            openInBackgroundTab(link.href);
        }, true);
    }

    function observeForSearch() {
        const observer = new MutationObserver(() => {
            const input = findSearchInput();
            if (input) {
                enhanceSearchBar(input);
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    window.addEventListener('load', () => {
        const input = findSearchInput();
        if (input) {
            enhanceSearchBar(input);
        } else {
            observeForSearch();
        }

        observeQueueLog();
        enableVpListBackgroundLinks();
    });
})();
