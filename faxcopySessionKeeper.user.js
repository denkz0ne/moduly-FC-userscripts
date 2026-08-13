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

    const KEEPALIVE_INTERVAL_MS = 4 * 60 * 1000;
    const ACTIVITY_DEBOUNCE_MS = 45 * 1000;
    const REQUEST_TIMEOUT_MS = 20 * 1000;
    const STATUS_ID = 'fc-session-keeper-status';

    let keepAliveTimer = 0;
    let lastActivityPingAt = 0;
    let lastSuccessfulPingAt = 0;

    function log(...args) {
        console.log('[FaxCopy Session Keeper]', ...args);
    }

    function createStatusBadge() {
        if (document.getElementById(STATUS_ID)) return document.getElementById(STATUS_ID);

        const badge = document.createElement('div');
        badge.id = STATUS_ID;
        badge.style.position = 'fixed';
        badge.style.right = '12px';
        badge.style.bottom = '12px';
        badge.style.zIndex = '2147483647';
        badge.style.padding = '6px 10px';
        badge.style.borderRadius = '999px';
        badge.style.background = 'rgba(15, 23, 42, 0.82)';
        badge.style.color = '#fff';
        badge.style.font = '12px/1.2 Arial, sans-serif';
        badge.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.22)';
        badge.style.pointerEvents = 'none';
        badge.style.transition = 'opacity 0.2s ease';
        badge.textContent = 'Relacia: startujem...';
        document.body.appendChild(badge);
        return badge;
    }

    function updateStatus(text, background) {
        const badge = createStatusBadge();
        badge.textContent = text;
        if (background) badge.style.background = background;
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
        updateStatus(`Relacia: obnovujem... (${reason})`, 'rgba(30, 64, 175, 0.88)');

        try {
            await pingSameOrigin();
            await pingSso();

            lastSuccessfulPingAt = Date.now();
            updateStatus(
                `Relacia: OK ${formatTime(lastSuccessfulPingAt)} (${reason})`,
                'rgba(22, 101, 52, 0.88)'
            );
            log('Keepalive OK', reason, new Date(lastSuccessfulPingAt).toISOString());
        } catch (error) {
            updateStatus('Relacia: problem, skusim znova', 'rgba(153, 27, 27, 0.9)');
            log('Keepalive failed', reason, error);
        }
    }

    function scheduleKeepAlive() {
        if (keepAliveTimer) {
            window.clearInterval(keepAliveTimer);
        }

        keepAliveTimer = window.setInterval(() => {
            runKeepAlive('interval');
        }, KEEPALIVE_INTERVAL_MS);
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

    function init() {
        createStatusBadge();
        updateStatus('Relacia: inicializacia...', 'rgba(15, 23, 42, 0.82)');
        scheduleKeepAlive();
        bindActivityListeners();
        runKeepAlive('start');
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init, { once: true });
    } else {
        init();
    }
})();
