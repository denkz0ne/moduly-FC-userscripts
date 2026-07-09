(function () {
    'use strict';

    const MODULE_VERSION = '0.1.0-beta';
    const FRAME_ID = 'lr-instant-print-frame';
    const TOAST_ID = 'lr-instant-print-toast';
    const READY_TIMEOUT_MS = 10000;
    const CLEANUP_AFTER_PRINT_MS = 2500;

    let activeJob = null;

    function isDetailPage() {
        return /\/vyrobne_prikazy\/detail\/index\//.test(location.pathname);
    }

    function isTypingTarget(target) {
        if (!target) return false;
        const tagName = target.tagName;
        return tagName === 'INPUT' || tagName === 'TEXTAREA' || tagName === 'SELECT' || target.isContentEditable;
    }

    function getVpNumber() {
        const strong = document.querySelector('strong.red');
        if (strong && strong.textContent.trim()) return strong.textContent.trim();

        const match = location.pathname.match(/\/detail\/index\/(\d+)/);
        return match ? match[1] : '';
    }

    function ensureToastStyle() {
        if (document.getElementById('lr-instant-print-toast-style')) return;

        const style = document.createElement('style');
        style.id = 'lr-instant-print-toast-style';
        style.textContent = `
            #${TOAST_ID} {
                position: fixed;
                right: 18px;
                bottom: 18px;
                z-index: 2147483647;
                min-width: 210px;
                max-width: 360px;
                box-sizing: border-box;
                border: 1px solid #bdbdbd;
                background: #111;
                color: #fff;
                padding: 10px 12px;
                font: 700 12px/1.35 Arial, sans-serif;
                box-shadow: 0 8px 24px rgba(0, 0, 0, 0.22);
                opacity: 0;
                transform: translateY(8px);
                transition: opacity 140ms ease, transform 140ms ease;
                pointer-events: none;
            }

            #${TOAST_ID}.is-visible {
                opacity: 1;
                transform: translateY(0);
            }

            #${TOAST_ID}.is-error {
                background: #8a1111;
            }
        `;
        document.head.appendChild(style);
    }

    function showToast(message, isError) {
        ensureToastStyle();
        let toast = document.getElementById(TOAST_ID);
        if (!toast) {
            toast = document.createElement('div');
            toast.id = TOAST_ID;
            document.body.appendChild(toast);
        }

        toast.textContent = message;
        toast.classList.toggle('is-error', Boolean(isError));
        toast.classList.add('is-visible');

        clearTimeout(toast._lrTimer);
        toast._lrTimer = setTimeout(() => {
            toast.classList.remove('is-visible');
        }, isError ? 4500 : 2200);
    }

    function persistPrintZone(zoneKey, aliases, value) {
        const normalized = value == null ? '' : String(value).trim();
        [zoneKey].concat(aliases || []).forEach((key) => {
            window[key] = normalized;
            if (normalized) {
                localStorage.setItem(key, normalized);
            } else {
                localStorage.removeItem(key);
            }
        });
    }

    function syncLabelValuesFromDetailPage() {
        const leftBadge = document.querySelector('#shortcut-info-label');
        const rightBadge = document.querySelector('#shortcut-info-date');
        const leftValue = leftBadge ? (leftBadge.textContent || '').trim() : localStorage.getItem('TM_testoLeft') || '';
        const rightValue = rightBadge ? (rightBadge.textContent || '').trim() : localStorage.getItem('TM_testoRight') || '';

        persistPrintZone('TM_testoLeft', ['testoleft'], leftValue);
        persistPrintZone('TM_testoRight', ['testoright'], rightValue);
    }

    function cleanupActiveJob() {
        if (!activeJob) return;
        clearInterval(activeJob.readyTimer);
        clearTimeout(activeJob.timeoutTimer);
        clearTimeout(activeJob.cleanupTimer);
        if (activeJob.frame && activeJob.frame.parentNode) {
            activeJob.frame.remove();
        }
        activeJob = null;
    }

    function createHiddenFrame(url) {
        const oldFrame = document.getElementById(FRAME_ID);
        if (oldFrame) oldFrame.remove();

        const frame = document.createElement('iframe');
        frame.id = FRAME_ID;
        frame.src = url;
        frame.setAttribute('aria-hidden', 'true');
        frame.style.position = 'fixed';
        frame.style.right = '0';
        frame.style.bottom = '0';
        frame.style.width = '1px';
        frame.style.height = '1px';
        frame.style.opacity = '0';
        frame.style.border = '0';
        frame.style.pointerEvents = 'none';
        frame.style.zIndex = '-1';
        document.body.appendChild(frame);
        return frame;
    }

    function tryPrintFrame(frame) {
        const printWindow = frame.contentWindow;
        if (!printWindow) throw new Error('Iframe nema contentWindow');

        printWindow.focus();
        printWindow.print();
        showToast('Stitok odoslany na tlac.', false);

        if (activeJob) {
            activeJob.cleanupTimer = setTimeout(cleanupActiveJob, CLEANUP_AFTER_PRINT_MS);
        }
    }

    function waitForFrameReadyAndPrint(frame) {
        const startedAt = Date.now();

        activeJob.readyTimer = setInterval(() => {
            if (!activeJob) return;

            try {
                const printWindow = frame.contentWindow;
                const ready = Boolean(printWindow && printWindow.__labelRegeneratorReady);
                const timedOut = Date.now() - startedAt > READY_TIMEOUT_MS;

                if (!ready && !timedOut) return;

                clearInterval(activeJob.readyTimer);
                activeJob.readyTimer = null;
                tryPrintFrame(frame);
            } catch (error) {
                cleanupActiveJob();
                showToast('Instant tlac zlyhala: iframe je blokovany.', true);
            }
        }, 120);

        activeJob.timeoutTimer = setTimeout(() => {
            if (!activeJob || !activeJob.readyTimer) return;
            clearInterval(activeJob.readyTimer);
            activeJob.readyTimer = null;
            try {
                tryPrintFrame(frame);
            } catch (error) {
                cleanupActiveJob();
                showToast('Instant tlac zlyhala.', true);
            }
        }, READY_TIMEOUT_MS + 800);
    }

    function startInstantPrint() {
        if (!isDetailPage()) return;

        const vpNumber = getVpNumber();
        if (!vpNumber) {
            showToast('Neviem najst cislo VP pre tlac stitku.', true);
            return;
        }

        cleanupActiveJob();
        syncLabelValuesFromDetailPage();

        const url = `https://moduly.faxcopy.sk/vyrobne_prikazy/detail/printLabel/${vpNumber}`;
        const frame = createHiddenFrame(url);
        activeJob = {
            frame,
            readyTimer: null,
            timeoutTimer: null,
            cleanupTimer: null
        };

        showToast('Posielam stitok na tlac...', false);
        waitForFrameReadyAndPrint(frame);
    }

    function bindInstantPrintShortcut() {
        if (!isDetailPage() || window.__labelInstantPrintBetaKBound) return;

        window.addEventListener('keydown', (event) => {
            if (event.key.toLowerCase() !== 'k') return;
            if (event.repeat || event.ctrlKey || event.metaKey || event.altKey || isTypingTarget(event.target)) return;

            event.preventDefault();
            event.stopImmediatePropagation();
            startInstantPrint();
        }, true);

        window.__labelInstantPrintBetaKBound = true;
    }

    window.labelInstantPrintBeta = {
        version: MODULE_VERSION,
        print: startInstantPrint,
        cleanup: cleanupActiveJob
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', bindInstantPrintShortcut);
    } else {
        bindInstantPrintShortcut();
    }
})();
