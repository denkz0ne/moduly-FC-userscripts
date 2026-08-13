// ==UserScript==
// @name         FaxCopy Session Keeper
// @namespace    faxcopy-userscripts
// @version      1.0.0
// @description  Udrziava relaciu na moduly.faxcopy.sk aktivnu pravidelnym keep-alive requestom a upozorni pri probleme.
// @updateURL    https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/faxcopySessionKeeper.user.js
// @downloadURL  https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/faxcopySessionKeeper.user.js
// @match        https://moduly.faxcopy.sk/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function () {
    'use strict';

    const KEEPALIVE_BASE_INTERVAL_MS = 4 * 60 * 1000;
    const KEEPALIVE_JITTER_MS = 75 * 1000;
    const ACTIVITY_DEBOUNCE_MS = 45 * 1000;
    const REQUEST_TIMEOUT_MS = 20 * 1000;
    const MODAL_SELECTORS = [
        '[role="dialog"]',
        '.ui-dialog',
        '.modal',
        '.modal-dialog',
        '.fixed.inset-0',
        '.popup',
        '.lightbox'
    ];

    let keepAliveTimer = 0;
    let lastActivityPingAt = 0;
    let lastSuccessfulPingAt = 0;
    let modalObserver = null;
    let modalPingCooldownUntil = 0;
    let lastScheduledIntervalMs = 0;

    function log(...args) {
        console.log('[FaxCopy Session Keeper]', ...args);
    }

    function updateStatus(text) {
        log(text);
    }

    function seconds(ms) {
        return Math.round(ms / 1000);
    }

    function formatTime(timestamp) {
        if (!timestamp) return 'nikdy';

        try {
            return new Date(timestamp).toLocaleTimeString('sk-SK', {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            });
        } catch (error) {
            return new Date(timestamp).toLocaleTimeString();
        }
    }

    async function fetchWithTimeout(resource, options = {}) {
        const controller = new AbortController();
        const timeoutId = window.setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

        try {
            return await fetch(resource, {
                ...options,
                signal: controller.signal
            });
        } finally {
            window.clearTimeout(timeoutId);
        }
    }

    async function pingSameOrigin() {
        const url = new URL('/landing/detail', window.location.origin);
        url.searchParams.set('tm_keepalive', String(Date.now()));

        const response = await fetchWithTimeout(url.toString(), {
            method: 'GET',
            credentials: 'include',
            cache: 'no-store',
            redirect: 'follow',
            headers: {
                'X-Requested-With': 'Tampermonkey'
            }
        });

        const finalUrl = response.url || '';
        const looksLoggedOut = response.redirected && /login|prihlasenie|sso/i.test(finalUrl);

        if (!response.ok || looksLoggedOut) {
            throw new Error(`Moduly keepalive zlyhal (${response.status || 'n/a'}) ${finalUrl}`);
        }
    }

    async function pingSso() {
        const url = `https://prihlasenie.faxcopy.sk/sdk/faxcopy-sso-session.css?tm_keepalive=${Date.now()}`;

        await fetch(url, {
            method: 'GET',
            mode: 'no-cors',
            credentials: 'include',
            cache: 'no-store'
        });
    }

    async function runKeepAlive(reason) {
        updateStatus(`Relacia: obnovujem... (${reason})`);

        try {
            await pingSameOrigin();
            await pingSso();

            lastSuccessfulPingAt = Date.now();
            updateStatus(`Relacia: OK ${formatTime(lastSuccessfulPingAt)} (${reason})`);
            log(
                `Session obnovena uspesne. dovod=${reason}, cas=${new Date(lastSuccessfulPingAt).toISOString()}`
            );
        } catch (error) {
            updateStatus('Relacia: problem, skusim znova');
            log('Keepalive failed', reason, error);
        }
    }

    function getNextIntervalMs() {
        const jitter = Math.floor((Math.random() * 2 - 1) * KEEPALIVE_JITTER_MS);
        return Math.max(90 * 1000, KEEPALIVE_BASE_INTERVAL_MS + jitter);
    }

    function scheduleKeepAlive() {
        if (keepAliveTimer) {
            window.clearTimeout(keepAliveTimer);
        }

        lastScheduledIntervalMs = getNextIntervalMs();
        log(`Dalsi keepalive naplanovany o ${seconds(lastScheduledIntervalMs)} s`);

        keepAliveTimer = window.setTimeout(async () => {
            await runKeepAlive('nahodny interval');
            scheduleKeepAlive();
        }, lastScheduledIntervalMs);
    }

    function pingOnUserActivity() {
        const now = Date.now();
        if (now - lastActivityPingAt < ACTIVITY_DEBOUNCE_MS) return;

        lastActivityPingAt = now;
        runKeepAlive('aktivita');
    }

    function bindActivityListeners() {
        ['click', 'keydown', 'mousemove'].forEach(eventName => {
            window.addEventListener(eventName, pingOnUserActivity, { passive: true });
        });

        document.addEventListener('visibilitychange', () => {
            if (!document.hidden) {
                runKeepAlive('navrat do tabu');
            }
        });

        window.addEventListener('focus', () => {
            runKeepAlive('focus');
        });

        window.addEventListener('online', () => {
            runKeepAlive('online');
        });
    }

    function isVisibleModal(node) {
        if (!(node instanceof Element)) return false;

        const modal = node.matches(MODAL_SELECTORS.join(','))
            ? node
            : node.querySelector(MODAL_SELECTORS.join(','));

        if (!modal) return false;

        const style = window.getComputedStyle(modal);
        return style.display !== 'none' && style.visibility !== 'hidden' && modal.getClientRects().length > 0;
    }

    function bindModalObserver() {
        if (modalObserver) return;

        modalObserver = new MutationObserver(mutations => {
            const now = Date.now();
            if (now < modalPingCooldownUntil) return;

            const modalAppeared = mutations.some(mutation => {
                return Array.from(mutation.addedNodes).some(isVisibleModal);
            });

            if (!modalAppeared) return;

            modalPingCooldownUntil = now + 20 * 1000;
            log('Detegovany modal, spustam okamzity keepalive');
            runKeepAlive('modal');
        });

        modalObserver.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    function init() {
        updateStatus('Relacia: inicializacia...');
        log('Script startuje na URL:', window.location.href);
        scheduleKeepAlive();
        bindActivityListeners();
        bindModalObserver();
        runKeepAlive('start');
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init, { once: true });
    } else {
        init();
    }
})();
