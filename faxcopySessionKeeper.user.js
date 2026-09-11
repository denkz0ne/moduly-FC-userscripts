// ==UserScript==
// @name         FaxCopy Session Keeper
// @namespace    faxcopy-userscripts
// @version      1.2.1
// @description  Nenapadne pomaha oficialnemu FaxCopy SSO SDK obnovovat relaciu a dava stav do tooltipu mena.
// @updateURL    https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/faxcopySessionKeeper.user.js
// @downloadURL  https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/faxcopySessionKeeper.user.js
// @match        https://moduly.faxcopy.sk/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function () {
    'use strict';

    const DEBUG = true;
    const RANDOM_INTERVAL_MIN_MS = 2.5 * 60 * 1000;
    const RANDOM_INTERVAL_MAX_MS = 5.5 * 60 * 1000;
    const STATUS_INTERVAL_MIN_MS = 58 * 1000;
    const STATUS_INTERVAL_MAX_MS = 86 * 1000;
    const STATUS_URL = '/sso/status';
    const TOAST_SELECTOR = '.fc-session-toast';
    const TOAST_VISIBLE_SELECTOR = '.fc-session-toast.fc-visible';
    const STAY_BUTTON_SELECTOR = '.fc-session-toast-btn-primary';
    const TRIGGER_COOLDOWN_MS = 65 * 1000;
    const REFRESH_DETECT_DELTA_SEC = 5 * 60;

    let activityTimer = 0;
    let statusTimer = 0;
    let countdownTimer = 0;
    let observer = null;
    let lastTriggerAt = 0;
    let expiresAt = null;
    let lastExpiresIn = null;
    let lastKeepAt = null;
    let lastStatusAt = null;
    let lastStatusError = '';
    let userLinkOriginalTitle = null;

    function log(...args) {
        if (DEBUG) {
            console.log('[FaxCopy Session Keeper]', ...args);
        }
    }

    function randomMs(min, max) {
        return Math.round(min + Math.random() * (max - min));
    }

    function seconds(ms) {
        return Math.round(ms / 1000);
    }

    function twoDigits(value) {
        return String(value).padStart(2, '0');
    }

    function formatClock(timestamp) {
        if (!timestamp) return '-';

        const date = new Date(timestamp);
        return `${twoDigits(date.getHours())}:${twoDigits(date.getMinutes())}:${twoDigits(date.getSeconds())}`;
    }

    function formatDuration(totalSeconds) {
        if (!Number.isFinite(totalSeconds)) return '--:--';

        const safeSeconds = Math.max(0, Math.round(totalSeconds));
        const minutes = Math.floor(safeSeconds / 60);
        const secondsPart = safeSeconds % 60;

        return `${minutes}:${twoDigits(secondsPart)}`;
    }

    function canTrigger() {
        return Date.now() - lastTriggerAt >= TRIGGER_COOLDOWN_MS;
    }

    function markTrigger() {
        lastTriggerAt = Date.now();
    }

    function getUserNameLink() {
        const userInfo = document.querySelector('.user-info');
        if (!userInfo) return null;

        return Array.from(userInfo.querySelectorAll('a[href]')).find(link => {
            return !link.classList.contains('menu-icon') && link.textContent.trim();
        }) || null;
    }

    function updateIndicator() {
        const link = getUserNameLink();
        if (!link) return;

        if (userLinkOriginalTitle === null) {
            userLinkOriginalTitle = link.getAttribute('title') || '';
        }

        const remaining = expiresAt ? Math.ceil((expiresAt - Date.now()) / 1000) : NaN;
        const age = lastStatusAt ? Math.round((Date.now() - lastStatusAt) / 1000) : null;
        const ageText = age === null ? '-' : `${age}s`;
        const keepText = lastKeepAt ? formatClock(lastKeepAt) : '-';

        link.title = [
            userLinkOriginalTitle,
            `SSO: ${formatDuration(remaining)}`,
            `Session konci približne za: ${formatDuration(remaining)}`,
            `Posledny status: ${formatClock(lastStatusAt)} (${ageText})`,
            `Posledne potvrdene predlzenie: ${keepText}`,
            lastStatusError ? `Posledna chyba: ${lastStatusError}` : 'Status OK'
        ].filter(Boolean).join('\n');
    }

    async function fetchStatus(reason) {
        try {
            const response = await fetch(STATUS_URL, {
                method: 'GET',
                credentials: 'same-origin',
                cache: 'no-store',
                headers: {
                    'Accept': 'application/json',
                    'X-Requested-With': 'XMLHttpRequest'
                }
            });

            if (!response.ok) {
                throw new Error(`status ${response.status}`);
            }

            const data = await response.json();
            const expiresIn = Number(data.expiresIn);

            lastStatusAt = Date.now();
            lastStatusError = '';

            if (data.valid && Number.isFinite(expiresIn)) {
                if (lastExpiresIn !== null && expiresIn - lastExpiresIn > REFRESH_DETECT_DELTA_SEC) {
                    lastKeepAt = Date.now();
                    log(`Potvrdene predlzenie session. expiresIn=${expiresIn}s, dovod=${reason}`);
                }

                lastExpiresIn = expiresIn;
                expiresAt = Date.now() + expiresIn * 1000;
                log(`Status OK. expiresIn=${expiresIn}s, dovod=${reason}`);
            } else {
                expiresAt = Date.now();
                lastStatusError = 'session invalid';
                log('Status hovori, ze session nie je validna', data);
            }
        } catch (error) {
            lastStatusError = error?.message || String(error);
            log('Status check zlyhal', reason, error);
        }

        updateIndicator();
    }

    function findVisibleToast() {
        return document.querySelector(TOAST_VISIBLE_SELECTOR);
    }

    function clickStaySignedIn(reason) {
        const toast = findVisibleToast();
        const button = toast ? toast.querySelector(STAY_BUTTON_SELECTOR) : null;

        if (!button || button.disabled) {
            return false;
        }

        markTrigger();
        log(`Vidim SSO toast, klikam oficialne tlacidlo. dovod=${reason}`);
        button.dispatchEvent(new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window
        }));

        setTimeout(() => fetchStatus(`po toast kliknuti: ${reason}`), 1600);

        return true;
    }

    function nudgeOfficialSsoSdk(reason) {
        if (!canTrigger()) {
            log(`Preskakujem, cooldown este bezi. dovod=${reason}`);
            return;
        }

        if (clickStaySignedIn(reason)) {
            return;
        }

        markTrigger();
        log(`Posielam nenapadny DOM activity signal pre oficialne SSO SDK. dovod=${reason}`);

        const target = document.body || document.documentElement || document;
        target.dispatchEvent(new MouseEvent('mousedown', {
            bubbles: true,
            cancelable: true,
            view: window,
            clientX: 1 + Math.floor(Math.random() * 4),
            clientY: 1 + Math.floor(Math.random() * 4)
        }));

        setTimeout(() => fetchStatus(`po activity signali: ${reason}`), 1800);
    }

    function scheduleActivity(reason) {
        if (activityTimer) {
            window.clearTimeout(activityTimer);
        }

        const next = randomMs(RANDOM_INTERVAL_MIN_MS, RANDOM_INTERVAL_MAX_MS);
        log(`Dalsi nahodny activity signal za ${seconds(next)} s. predchadzajuci=${reason}`);

        activityTimer = window.setTimeout(() => {
            nudgeOfficialSsoSdk('nahodny interval');
            scheduleActivity('nahodny interval');
        }, next);
    }

    function scheduleStatus(reason) {
        if (statusTimer) {
            window.clearTimeout(statusTimer);
        }

        const next = randomMs(STATUS_INTERVAL_MIN_MS, STATUS_INTERVAL_MAX_MS);
        log(`Dalsi status check za ${seconds(next)} s. predchadzajuci=${reason}`);

        statusTimer = window.setTimeout(async () => {
            await fetchStatus('nahodny status check');
            scheduleStatus('nahodny status check');
        }, next);
    }

    function handlePossibleToast(reason) {
        if (!findVisibleToast()) {
            return;
        }

        log(`Detegovany SSO toast. dovod=${reason}`);
        clickStaySignedIn(reason);
    }

    function bindToastObserver() {
        if (observer || !document.body) {
            return;
        }

        observer = new MutationObserver(mutations => {
            const hasToastChange = mutations.some(mutation => {
                if (mutation.type === 'attributes') {
                    return mutation.target instanceof Element && mutation.target.matches(TOAST_SELECTOR);
                }

                return Array.from(mutation.addedNodes).some(node => {
                    return node instanceof Element && (
                        node.matches(TOAST_SELECTOR) || Boolean(node.querySelector(TOAST_SELECTOR))
                    );
                });
            });

            if (hasToastChange) {
                handlePossibleToast('toast mutation');
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ['class', 'style']
        });
    }

    function bindCountdown() {
        if (countdownTimer) {
            window.clearInterval(countdownTimer);
        }

        countdownTimer = window.setInterval(updateIndicator, 1000);
    }

    function init() {
        log('Startujem na URL:', window.location.href);
        updateIndicator();
        bindCountdown();
        bindToastObserver();
        handlePossibleToast('start');
        fetchStatus('start');
        scheduleStatus('start');
        scheduleActivity('start');

        window.addEventListener('focus', () => {
            fetchStatus('focus');
            nudgeOfficialSsoSdk('focus');
        });

        document.addEventListener('visibilitychange', () => {
            if (!document.hidden) {
                fetchStatus('navrat do tabu');
                nudgeOfficialSsoSdk('navrat do tabu');
            }
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init, { once: true });
    } else {
        init();
    }
})();
