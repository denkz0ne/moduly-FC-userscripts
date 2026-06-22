// ==UserScript==
// @name         setTitleForIndustrialQueue
// @namespace    http://tvoj-namespace.example
// @version      1.5.8
// @description  Nastavuje title fronty, drží stav sekcií, presúva EXPR navrch a ticho sleduje zmeny na pozadí
// @updateURL    https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/setTitleForIndustrialQueue.user.js
// @downloadURL  https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/setTitleForIndustrialQueue.user.js
// @match        https://moduly.faxcopy.sk/vyrobne_prikazy/industrialQueue/detail/*
// @match        https://moduly.faxcopy.sk/vyrobne_prikazy/detail/index/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function () {
    'use strict';

    const SECTION_STATE_PREFIX = 'fc-industrial-queue-section-state';
    const BACKGROUND_CHECK_INTERVAL = 30000;
    const EXPR_ROW_CLASS = 'fc-expr-row';
    const STOP_ROW_CLASS = 'fc-stop-row';
    const CANCELLED_ROW_CLASS = 'fc-cancelled-row';
    const DEFAULT_HIDDEN_SECTION_IDS = ['iqInfo', 'filter-content'];

    let currentSnapshot = null;
    let faviconBadgeApplied = false;
    let exprMoveScheduled = false;
    let safeVpLinkHandlerInstalled = false;

    const originalFavicon = (() => {
        const link = document.querySelector("link[rel*='icon']");
        return link
            ? {
                  href: link.href,
                  type: link.type || 'image/x-icon'
              }
            : null;
    })();

    function injectStyles() {
        if (document.getElementById('fc-industrial-queue-enhancements')) return;

        const style = document.createElement('style');
        style.id = 'fc-industrial-queue-enhancements';
        style.textContent = `
            #industrial_vp_list tbody tr.${EXPR_ROW_CLASS} td {
                background-color: #fff6ed;
                transition: background-color 0.2s ease;
            }

            #industrial_vp_list tbody tr.${EXPR_ROW_CLASS}:hover td {
                background-color: #ffefdf;
            }

            #industrial_vp_list tbody tr.${EXPR_ROW_CLASS} td:first-child {
                box-shadow: inset 3px 0 0 #d61f1f;
            }

            #industrial_vp_list tbody tr.${STOP_ROW_CLASS} td {
                background-color: #f3f3f3;
                transition: background-color 0.2s ease;
            }

            #industrial_vp_list tbody tr.${STOP_ROW_CLASS}:hover td {
                background-color: #ebebeb;
            }

            #industrial_vp_list tbody tr.${STOP_ROW_CLASS} td:first-child {
                box-shadow: inset 3px 0 0 #6e6e6e;
            }

            #industrial_vp_list tbody tr.${CANCELLED_ROW_CLASS} td {
                background-color: #efefef;
                color: #444444;
                transition: background-color 0.2s ease;
            }

            #industrial_vp_list tbody tr.${CANCELLED_ROW_CLASS}:hover td {
                background-color: #e7e7e7;
            }

            #industrial_vp_list tbody tr.${CANCELLED_ROW_CLASS} td:first-child {
                box-shadow: inset 3px 0 0 #5f5f5f;
            }

            #industrial_vp_list tbody tr.${CANCELLED_ROW_CLASS} td:nth-child(2) a {
                text-decoration: line-through;
                opacity: 0.78;
            }

            #industrial_vp_list .fc-vp-badge-link {
                display: inline-block;
                padding: 2px 7px;
                border-radius: 3px;
                background: #1f1f1f;
                color: #ffffff;
                font-weight: 700;
                font-size: 11px;
                line-height: 1.2;
                text-decoration: none;
                border: 1px solid #1f1f1f;
                letter-spacing: 0.01em;
                white-space: nowrap;
            }

            #industrial_vp_list .fc-vp-badge-link:hover {
                background: #2e2e2e;
                border-color: #2e2e2e;
                text-decoration: none;
            }
        `;

        document.head.appendChild(style);
    }

    function parseSkratka(root = document) {
        const elems = [...root.querySelectorAll('p, div, span, strong, td')];
        for (const el of elems) {
            if (!el.textContent?.includes('Skratka:')) continue;

            const match = el.textContent.match(/Skratka:\s*([^\s]+)/);
            if (match?.[1]) return match[1].trim();
        }

        return '';
    }

    function parseTotalRecords(root = document) {
        const infoDiv =
            root.getElementById('industrial_vp_list_info') ||
            root.getElementById('vp_list_info');

        if (!infoDiv?.textContent) return '';

        const match = infoDiv.textContent.match(/z celkovo\s+(\d+)/i);
        return match?.[1] || '';
    }

    function readSnapshot(root = document) {
        return {
            skratka: parseSkratka(root),
            totalRecords: parseTotalRecords(root)
        };
    }

    function setTitle(snapshot) {
        if (!snapshot) return;

        const { skratka, totalRecords } = snapshot;
        if (skratka && totalRecords) {
            document.title = `(${totalRecords}) ${skratka}`;
        } else if (skratka) {
            document.title = skratka;
        }
    }

    function refreshTitleFromDocument() {
        currentSnapshot = readSnapshot(document);
        setTitle(currentSnapshot);
    }

    function ensureFaviconLink() {
        let link = document.querySelector("link[rel*='icon']");
        if (!link) {
            link = document.createElement('link');
            link.rel = 'icon';
            document.head.appendChild(link);
        }
        return link;
    }

    function drawBadgedFavicon() {
        return new Promise(resolve => {
            const size = 32;
            const canvas = document.createElement('canvas');
            canvas.width = size;
            canvas.height = size;

            const ctx = canvas.getContext('2d');
            if (!ctx) {
                resolve(null);
                return;
            }

            const finish = () => {
                ctx.fillStyle = '#d11f1f';
                ctx.beginPath();
                ctx.arc(size - 7, 7, 6, 0, Math.PI * 2);
                ctx.fill();

                ctx.strokeStyle = '#ffffff';
                ctx.lineWidth = 2;
                ctx.stroke();

                resolve(canvas.toDataURL('image/png'));
            };

            if (!originalFavicon?.href) {
                ctx.fillStyle = '#ffffff';
                ctx.fillRect(0, 0, size, size);
                finish();
                return;
            }

            const img = new Image();
            img.onload = () => {
                ctx.drawImage(img, 0, 0, size, size);
                finish();
            };
            img.onerror = () => {
                ctx.fillStyle = '#ffffff';
                ctx.fillRect(0, 0, size, size);
                finish();
            };
            img.src = originalFavicon.href;
        });
    }

    async function applyFaviconBadge() {
        if (faviconBadgeApplied) return;

        const badgedHref = await drawBadgedFavicon();
        if (!badgedHref) return;

        const link = ensureFaviconLink();
        link.href = badgedHref;
        link.type = 'image/png';
        faviconBadgeApplied = true;
    }

    function clearFaviconBadge() {
        if (!faviconBadgeApplied) return;

        const link = ensureFaviconLink();
        if (originalFavicon?.href) {
            link.href = originalFavicon.href;
            link.type = originalFavicon.type;
        }

        faviconBadgeApplied = false;
    }

    function getSectionStorageKey(sectionId) {
        return `${SECTION_STATE_PREFIX}:${location.pathname}:${sectionId}`;
    }

    function getToggleSectionPairs() {
        return [...document.querySelectorAll('.box-head[onclick*="setWindowHead"]')]
            .map(head => {
                const onclickValue = head.getAttribute('onclick') || '';
                const match = onclickValue.match(/setWindowHead\('([^']+)'\)/);
                if (!match?.[1]) return null;

                const section = document.getElementById(match[1]);
                if (!section) return null;

                return { head, section, sectionId: match[1] };
            })
            .filter(Boolean);
    }

    function applyDefaultHiddenSections() {
        DEFAULT_HIDDEN_SECTION_IDS.forEach(sectionId => {
            const section = document.getElementById(sectionId);
            if (section) {
                section.style.display = 'none';
                localStorage.setItem(getSectionStorageKey(sectionId), 'hidden');
            }
        });
    }

    function forceHiddenSectionsWithDelay() {
        [0, 100, 500].forEach(delay => {
            setTimeout(() => {
                applyDefaultHiddenSections();
            }, delay);
        });
    }

    function restoreCollapsedSections() {
        getToggleSectionPairs().forEach(({ section, sectionId }) => {
            const stored = localStorage.getItem(getSectionStorageKey(sectionId));
            if (stored === 'hidden') {
                section.style.display = 'none';
            }
            if (stored === 'visible') {
                section.style.display = '';
            }
        });
    }

    function persistCollapsedSections() {
        getToggleSectionPairs().forEach(({ head, section, sectionId }) => {
            head.addEventListener('click', () => {
                setTimeout(() => {
                    const isHidden = window.getComputedStyle(section).display === 'none';
                    localStorage.setItem(getSectionStorageKey(sectionId), isHidden ? 'hidden' : 'visible');
                }, 0);
            });
        });
    }

    function rowHasBadge(tr, badgeName) {
        return [...tr.querySelectorAll('.badge')].some(badge => badge.textContent.trim() === badgeName);
    }

    function rowHasExpr(tr) {
        return rowHasBadge(tr, 'EXPR');
    }

    function rowHasStop(tr) {
        return rowHasBadge(tr, 'STOP');
    }

    function rowIsCancelled(tr) {
        const statusCell = tr.cells?.[8];
        const productionCell = tr.cells?.[6];
        const statusText = statusCell?.textContent?.trim() || '';
        const productionText = productionCell?.textContent?.trim() || '';

        return statusText === 'Zrušená' || (productionText && productionText !== '01-CPG');
    }

    function openVpLink(anchor) {
        const href = anchor?.getAttribute('href');
        if (!href) return;

        const absoluteHref = new URL(href, location.origin).href;
        const target = anchor.getAttribute('target') || '_blank';
        window.open(absoluteHref, target, 'noopener');
    }

    function bindSafeVpAnchor(anchor) {
        if (!anchor || anchor.dataset.fcSafeBound === '1') return;

        const href = anchor.getAttribute('href');
        if (!href || !href.includes('/vyrobne_prikazy/detail/index/')) return;

        anchor.href = new URL(href, location.origin).href;
        anchor.target = anchor.getAttribute('target') || '_blank';
        anchor.rel = 'noopener noreferrer';

        const openHandler = event => {
            if (event) {
                event.preventDefault();
                event.stopPropagation();
                if (typeof event.stopImmediatePropagation === 'function') {
                    event.stopImmediatePropagation();
                }
            }
            openVpLink(anchor);
            return false;
        };

        anchor.onclick = openHandler;
        anchor.onmousedown = event => {
            event.stopPropagation();
        };
        anchor.onmouseup = event => {
            event.stopPropagation();
        };
        anchor.dataset.fcSafeBound = '1';
    }

    function bindSafeVpLinks(root = document) {
        root.querySelectorAll('#industrial_vp_list a[href*="/vyrobne_prikazy/detail/index/"]').forEach(bindSafeVpAnchor);
        root.querySelectorAll('#queue_log a[href*="/vyrobne_prikazy/detail/index/"]').forEach(bindSafeVpAnchor);
    }

    function installSafeVpLinkHandler() {
        if (safeVpLinkHandlerInstalled) return;

        document.addEventListener(
            'click',
            event => {
                const anchor = event.target.closest(
                    '#industrial_vp_list a[href*="/vyrobne_prikazy/detail/index/"], #queue_log a[href*="/vyrobne_prikazy/detail/index/"]'
                );
                if (!anchor) return;

                event.preventDefault();
                event.stopPropagation();
                if (typeof event.stopImmediatePropagation === 'function') {
                    event.stopImmediatePropagation();
                }

                openVpLink(anchor);
            },
            true
        );

        safeVpLinkHandlerInstalled = true;
    }

    function getVpLinkData(tr) {
        const vpLink = tr.querySelector('a[href*="/vyrobne_prikazy/detail/index/"]');
        if (!vpLink) return null;

        const href = vpLink.getAttribute('href') || '';
        const match = href.match(/detail\/index\/(\d+)/);
        if (!match?.[1]) return null;

        return {
            id: match[1],
            href,
            absoluteHref: new URL(href, location.origin).href,
            target: vpLink.getAttribute('target') || '_blank'
        };
    }

    function replaceOrderColumnWithVpBadge(rows) {
        const headerWrapper = document.querySelector('#industrial_vp_list thead th:first-child .DataTables_sort_wrapper');
        if (headerWrapper && !headerWrapper.dataset.fcRenamed) {
            const sortIcon = headerWrapper.querySelector('.DataTables_sort_icon');
            headerWrapper.textContent = 'ID VP';
            if (sortIcon) headerWrapper.appendChild(sortIcon);
            headerWrapper.dataset.fcRenamed = '1';
        }

        rows.forEach(row => {
            const firstCell = row.cells?.[0];
            const secondCell = row.cells?.[1];
            const vpData = getVpLinkData(row);
            if (!firstCell || !vpData) return;

            if (firstCell.dataset.fcVpBadgeId !== vpData.id) {
                firstCell.textContent = '';

                const badgeLink = document.createElement('a');
                badgeLink.href = vpData.absoluteHref;
                badgeLink.target = vpData.target;
                badgeLink.rel = 'noopener noreferrer';
                badgeLink.className = 'fc-vp-badge-link';
                badgeLink.textContent = vpData.id;
                badgeLink.title = `Otvoriť VP ${vpData.id}`;

                firstCell.appendChild(badgeLink);
                firstCell.dataset.fcVpBadgeId = vpData.id;
                bindSafeVpAnchor(badgeLink);
            }

            if (secondCell && secondCell.dataset.fcVpNameCleaned !== vpData.id) {
                const mainVpLink = secondCell.querySelector(`a[href*="/vyrobne_prikazy/detail/index/${vpData.id}"]`);
                if (mainVpLink) {
                    const nodes = [...mainVpLink.childNodes];
                    const nameText = nodes
                        .map(node => node.textContent || '')
                        .join(' ')
                        .replace(vpData.id, '')
                        .replace(/\s+/g, ' ')
                        .trim();

                    mainVpLink.textContent = nameText || vpData.id;
                    bindSafeVpAnchor(mainVpLink);
                }
                secondCell.dataset.fcVpNameCleaned = vpData.id;
            }
        });
    }

    function applyRowHighlighting(rows) {
        rows.forEach(row => {
            row.classList.toggle(EXPR_ROW_CLASS, rowHasExpr(row));
            row.classList.toggle(STOP_ROW_CLASS, rowHasStop(row));
            row.classList.toggle(CANCELLED_ROW_CLASS, rowIsCancelled(row));
        });
    }

    function enhanceQueueRows() {
        const tbody = document.querySelector('#industrial_vp_list tbody');
        if (!tbody) return;

        const rows = [...tbody.querySelectorAll('tr')];
        if (!rows.length) return;

        replaceOrderColumnWithVpBadge(rows);
        applyRowHighlighting(rows);
        bindSafeVpLinks(tbody);

        const exprRows = rows.filter(rowHasExpr);
        if (!exprRows.length) return;

        const otherRows = rows.filter(row => !rowHasExpr(row));
        [...exprRows, ...otherRows].forEach(row => tbody.appendChild(row));
    }

    function scheduleMoveExprRowsToTop() {
        if (exprMoveScheduled) return;

        exprMoveScheduled = true;
        setTimeout(() => {
            exprMoveScheduled = false;
            enhanceQueueRows();
        }, 0);
    }

    function observeExprRows() {
        const tbody = document.querySelector('#industrial_vp_list tbody');
        if (!tbody) return;

        const observer = new MutationObserver(() => {
            scheduleMoveExprRowsToTop();
        });

        observer.observe(tbody, {
            childList: true,
            subtree: false
        });

        scheduleMoveExprRowsToTop();
    }

    function setTitleForVPDetail() {
        const strong = document.querySelector('strong.red');
        if (strong) {
            document.title = `VP ${strong.textContent.trim()}`;
        }
    }

    function addPrintLabelLink(root = document) {
        root.querySelectorAll('tr').forEach(tr => {
            const printer = tr.querySelector('a.action.silk.printer');
            if (!printer) return;

            if (tr.querySelector('a[data-print-label="1"]')) return;

            const vpLink = tr.querySelector('a[href*="/vyrobne_prikazy/detail/index/"]');
            if (!vpLink) return;

            const match = vpLink.getAttribute('href')?.match(/detail\/index\/(\d+)/);
            if (!match) return;

            const vpId = match[1];
            const labelLink = document.createElement('a');
            labelLink.href = `/vyrobne_prikazy/detail/printLabel/${vpId}`;
            labelLink.target = '_blank';
            labelLink.title = 'Vytačiť Štítok';
            labelLink.dataset.printLabel = '1';

            const img = document.createElement('img');
            img.src = '/assets/img/adminity/img/icons/04/16/39.png';
            img.alt = '';

            labelLink.appendChild(img);
            printer.after(labelLink);
        });
    }

    function observeTableChanges() {
        const observer = new MutationObserver(mutations => {
            mutations.forEach(mutation => {
                mutation.addedNodes.forEach(node => {
                    if (node.nodeType !== 1) return;
                    addPrintLabelLink(node);
                    bindSafeVpLinks(node);
                });
            });

            scheduleMoveExprRowsToTop();
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    function observeTitleInputs() {
        const infoDiv = document.getElementById('industrial_vp_list_info');
        if (!infoDiv) return;

        const observer = new MutationObserver(() => {
            refreshTitleFromDocument();
        });

        observer.observe(infoDiv, {
            childList: true,
            characterData: true,
            subtree: true
        });
    }

    async function fetchLatestQueueSnapshot() {
        try {
            const response = await fetch(location.href, {
                credentials: 'include',
                cache: 'no-store'
            });

            if (!response.ok) return null;

            const html = await response.text();
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            return readSnapshot(doc);
        } catch (error) {
            console.warn('[UserScript] Nepodarilo sa načítať snapshot fronty:', error);
            return null;
        }
    }

    function startSilentBackgroundWatcher() {
        setInterval(async () => {
            if (!document.hidden) return;

            const latestSnapshot = await fetchLatestQueueSnapshot();
            if (!latestSnapshot?.skratka) return;

            const previousTotal = Number(currentSnapshot?.totalRecords || 0);
            const latestTotal = Number(latestSnapshot.totalRecords || 0);

            currentSnapshot = latestSnapshot;
            setTitle(latestSnapshot);

            if (latestTotal > previousTotal) {
                applyFaviconBadge();
            }
        }, BACKGROUND_CHECK_INTERVAL);
    }

    function handleVisibilityChange() {
        document.addEventListener('visibilitychange', () => {
            if (!document.hidden) {
                clearFaviconBadge();
                refreshTitleFromDocument();
            }
        });
    }

    window.addEventListener('load', () => {
        const url = location.href;

        if (url.includes('/industrialQueue/detail/')) {
            injectStyles();
            applyDefaultHiddenSections();
            forceHiddenSectionsWithDelay();
            restoreCollapsedSections();
            persistCollapsedSections();
            refreshTitleFromDocument();
            observeTitleInputs();
            startSilentBackgroundWatcher();
            handleVisibilityChange();
            installSafeVpLinkHandler();
            bindSafeVpLinks();

            addPrintLabelLink();
            observeTableChanges();
            observeExprRows();
        }

        if (url.includes('/vyrobne_prikazy/detail/index/')) {
            setTitleForVPDetail();
        }
    });
})();
