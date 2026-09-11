// ==UserScript==
// @name         FaxCopy Session Keeper
// @namespace    faxcopy-userscripts
// @version      1.1.0
// @description  Nenapadne pomaha oficialnemu FaxCopy SSO SDK obnovovat relaciu cez jeho vlastny activity flow.
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
    const TOAST_SELECTOR = '.fc-session-toast';
    const TOAST_VISIBLE_SELECTOR = '.fc-session-toast.fc-visible';
    const STAY_BUTTON_SELECTOR = '.fc-session-toast-btn-primary';
    const TRIGGER_COOLDOWN_MS = 65 * 1000;

    let timer = 0;
    let observer = null;
    let lastTriggerAt = 0;

    function log(...args) {
        if (DEBUG) {
            console.log('[FaxCopy Session Keeper]', ...args);
        }
    }

    function randomIntervalMs() {
        const range = RANDOM_INTERVAL_MAX_MS - RANDOM_INTERVAL_MIN_MS;
        return Math.round(RANDOM_INTERVAL_MIN_MS + Math.random() * range);
    }

    function seconds(ms) {
        return Math.round(ms / 1000);
    }

    function canTrigger() {
        return Date.now() - lastTriggerAt >= TRIGGER_COOLDOWN_MS;
    }

    function markTrigger() {
        lastTriggerAt = Date.now();
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
    }

    function scheduleNext(reason) {
        if (timer) {
            window.clearTimeout(timer);
        }

        const next = randomIntervalMs();
        log(`Dalsi nahodny activity signal za ${seconds(next)} s. predchadzajuci=${reason}`);

        timer = window.setTimeout(() => {
            nudgeOfficialSsoSdk('nahodny interval');
            scheduleNext('nahodny interval');
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

    function init() {
        log('Startujem na URL:', window.location.href);
        bindToastObserver();
        handlePossibleToast('start');
        scheduleNext('start');

        window.addEventListener('focus', () => nudgeOfficialSsoSdk('focus'));
        document.addEventListener('visibilitychange', () => {
            if (!document.hidden) {
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
