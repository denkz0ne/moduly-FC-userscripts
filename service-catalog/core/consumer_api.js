(function () {
    'use strict';

    const STORAGE_KEY = 'materialDetectorNext.publicState.v1';
    const EVENT_NAME = 'materialDetectorNext:updated';
    const DEFAULT_TTL_MS = 60 * 1000;

    function readState(options = {}) {
        try {
            const state = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
            if (!state || state.version !== 1) return null;
            const age = Date.now() - new Date(state.updatedAt || 0).getTime();
            const maxAge = Number(options.maxAgeMs || DEFAULT_TTL_MS);
            if (!Number.isFinite(age) || age < 0 || age > maxAge) return null;
            return state;
        } catch (error) {
            return null;
        }
    }

    function subscribe(listener) {
        if (typeof listener !== 'function') return function () {};
        const handler = event => listener(event.detail || readState());
        const storageHandler = event => {
            if (event.key === STORAGE_KEY) listener(readState());
        };
        window.addEventListener(EVENT_NAME, handler);
        window.addEventListener('storage', storageHandler);
        return function unsubscribe() {
            window.removeEventListener(EVENT_NAME, handler);
            window.removeEventListener('storage', storageHandler);
        };
    }

    window.MaterialDetectorNextClient = {
        stateKey: STORAGE_KEY,
        eventName: EVENT_NAME,
        getState: readState,
        subscribe
    };
})();
