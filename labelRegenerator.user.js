// ==UserScript==
// @name         labelRegenerator
// @namespace    https://moduly.faxcopy.sk/
// @author       mato e.
// @version      1.3.7
// @description  Uprava print stitku a klavesa L pre otvorenie, tlac a zatvorenie stitku.
// @updateURL    https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/labelRegenerator.user.js
// @downloadURL  https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/labelRegenerator.user.js
// @match        https://moduly.faxcopy.sk/vyrobne_prikazy/detail/printLabel/*
// @match        https://moduly.faxcopy.sk/vyrobne_prikazy/detail/index/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
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

    ensureRobotoCondensedFont();

    window.TM_testoLeft = localStorage.getItem('TM_testoLeft') || '';
    window.TM_testoRight = localStorage.getItem('TM_testoRight') || '';
    window.TM_top = localStorage.getItem('TM_top') || '';

    window.addEventListener('unload', () => {
        if (!isPrintLabelPage()) return;
        localStorage.removeItem('TM_testoLeft');
        localStorage.removeItem('TM_testoRight');
        localStorage.removeItem('TM_top');
    });

    const predajnaText = document.querySelector('#predajna .rotate');
    if (predajnaText) predajnaText.style.fontSize = '27pt';

    const wrapper = document.querySelector('#data > div');
    if (wrapper) {
        const vpText = wrapper.querySelector('span');
        if (vpText && vpText.previousSibling && vpText.previousSibling.textContent.trim() === 'VP') {
            const newSpan = document.createElement('span');
            newSpan.innerHTML = 'VP: ' + vpText.textContent.trim();
            newSpan.style.color = '#ffffff';
            newSpan.style.background = '#000';
            newSpan.style.padding = '1px 4px';
            newSpan.style.margin = '2px 0';
            newSpan.style.borderRadius = '6px';
            newSpan.style.fontSize = '13pt';
            newSpan.style.display = 'inline-block';
            newSpan.style.verticalAlign = 'middle';

            wrapper.innerHTML = wrapper.innerHTML.replace(/VP.*<\/span>/, '');
            wrapper.prepend(newSpan);

            if (window.TM_top) {
                const topSpan = document.createElement('span');
                topSpan.className = 'badge fs11';
                topSpan.title = 'Darčekové balenie';
                topSpan.textContent = window.TM_top;
                topSpan.style.cssText = 'background:#000;color:#fff;padding:1px 5px;margin-left:6px;border-radius:6px;display:inline-block;vertical-align:middle;';
                wrapper.prepend(topSpan);
            }
        }
    }

    const clear = document.querySelector('#label .clear');
    if (clear) {
        const wrapper60 = document.createElement('div');
        wrapper60.style.display = 'flex';
        wrapper60.style.alignItems = 'center';
        wrapper60.style.width = '100%';
        wrapper60.style.marginBottom = '2mm';

        const testoLeft = document.createElement('div');
        const testoRight = document.createElement('div');
        testoLeft.textContent = window.TM_testoLeft || '';
        testoRight.textContent = window.TM_testoRight || '';

        const commonStyle = `
            color: #000;
            padding: 0;
            margin: 0;
            font-size: 22pt;
            display: inline-block;
            font-family: 'Roboto Condensed', Arial, sans-serif;
            font-weight: 400;
            transform: translateY(calc(-2mm)) scaleX(0.8);
            transform-origin: left center;
            white-space: nowrap;
        `;

        testoLeft.style.cssText = commonStyle;
        testoRight.style.cssText = commonStyle;
        testoRight.style.transformOrigin = 'right center';
        testoRight.style.marginLeft = 'auto';
        testoRight.style.textAlign = 'right';
        testoRight.style.width = '63mm';

        wrapper60.append(testoLeft, testoRight);
        clear.before(wrapper60);
    }

    const block = document.querySelector('#data > div');
    if (block) block.style.marginBottom = '1mm';

    const obj = document.querySelector('.obj');
    if (obj) obj.style.height = '16mm';

    const label = document.querySelector('#label');
    if (label) {
        label.style.height = '57mm';
        label.style.border = '0mm solid black';
    }

    const style = document.createElement('style');
    style.innerHTML = `
@media print {
    @page { margin: 0; }
    #label {
        page-break-inside: avoid !important;
        break-inside: avoid !important;
        overflow: hidden !important;
    }
}
`;
    document.head.appendChild(style);

    function markPrintReady() {
        if (!isPrintLabelPage()) return;
        window.__labelRegeneratorReady = false;
        const finalize = () => {
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    window.__labelRegeneratorReady = true;
                    window.dispatchEvent(new Event('labelRegeneratorReady'));
                });
            });
        };
        if (document.fonts && document.fonts.ready) {
            document.fonts.ready.then(() => setTimeout(finalize, 50)).catch(() => setTimeout(finalize, 120));
        } else {
            setTimeout(finalize, 120);
        }
    }

    function getVpNumber() {
        const strong = document.querySelector('strong.red');
        return strong ? strong.textContent.trim() : null;
    }

    function syncLabelValuesFromDetailPage() {
        if (isPrintLabelPage()) return;
        const leftBadge = document.querySelector('#shortcut-info-label');
        const rightBadge = document.querySelector('#shortcut-info-date');
        const topBadge = document.querySelector('#shortcut-info-top');
        const left = leftBadge ? (leftBadge.textContent || '').trim() : '';
        const right = rightBadge ? (rightBadge.textContent || '').trim() : '';
        const top = topBadge ? (topBadge.textContent || '').trim() : '';
        if (left) {
            localStorage.setItem('TM_testoLeft', left);
            window.TM_testoLeft = left;
        }
        if (right) {
            localStorage.setItem('TM_testoRight', right);
            window.TM_testoRight = right;
        }
        if (top) {
            localStorage.setItem('TM_top', top);
            window.TM_top = top;
        }
    }

    function triggerPrintWhenReady(printWindow) {
        const deadlineMs = 15000;
        const startedAt = Date.now();
        const timer = setInterval(() => {
            const timedOut = Date.now() - startedAt > deadlineMs;
            const ready = !!printWindow.__labelRegeneratorReady;
            const closed = printWindow.closed;
            if (closed) {
                clearInterval(timer);
                return;
            }
            if (ready || timedOut) {
                clearInterval(timer);
                printWindow.print();
                setTimeout(() => {
                    if (!printWindow.closed) printWindow.close();
                }, 1200);
            }
        }, 120);
    }

    function pressLAction() {
        if (!document.activeElement) return;
        if (['INPUT', 'SELECT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;
        const vpNumber = getVpNumber();
        if (!vpNumber) return;
        syncLabelValuesFromDetailPage();
        const url = `https://moduly.faxcopy.sk/vyrobne_prikazy/detail/printLabel/${vpNumber}`;
        const w = window.open(url, '_blank');
        if (!w) return;
        w.addEventListener('load', () => {
            triggerPrintWhenReady(w);
        }, { once: true });
    }

    window.addEventListener('keydown', e => {
        if (e.key.toLowerCase() === 'l' && !e.repeat) {
            pressLAction();
        }
    });

    markPrintReady();
})();