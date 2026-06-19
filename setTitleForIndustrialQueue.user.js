// ==UserScript==
// @name         setTitleForIndustrialQueue
// @namespace    http://tvoj-namespace.example
// @version      1.4.0
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

    let currentSnapshot = null;
    let faviconBadgeApplied = false;
    let exprMoveScheduled = false;

    const originalFavicon = (() => {
        const link = document.querySelector("link[rel*='icon']");
        return link
            ? {
                  href: link.href,
                  type: link.type || 'image/x-icon'
              }
            : null;
    })();

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

    function restoreCollapsedSections() {
        getToggleSectionPairs().forEach(({ section, sectionId }) => {
            const stored = localStorage.getItem(getSectionStorageKey(sectionId));
            if (stored === 'hidden') {
                section.style.display = 'none';
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

    function rowHasExpr(tr) {
        return [...tr.querySelectorAll('.badge')].some(badge => badge.textContent.trim() === 'EXPR');
    }

    function moveExprRowsToTop() {
        const tbody = document.querySelector('#industrial_vp_list tbody');
        if (!tbody) return;

        const rows = [...tbody.querySelectorAll('tr')];
        if (!rows.length) return;

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
            moveExprRowsToTop();
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
            restoreCollapsedSections();
            persistCollapsedSections();
            refreshTitleFromDocument();
            observeTitleInputs();
            startSilentBackgroundWatcher();
            handleVisibilityChange();

            addPrintLabelLink();
            observeTableChanges();
            observeExprRows();
        }

        if (url.includes('/vyrobne_prikazy/detail/index/')) {
            setTitleForVPDetail();
        }
    });
})();
