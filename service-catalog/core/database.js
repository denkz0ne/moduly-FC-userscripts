(function () {
    'use strict';

    const MANIFEST_URL = 'https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/main/service-catalog/db/manifest.json';
    const CACHE_KEY = 'materialDetectorNext.database.cache.v1';
    const CHECK_KEY = 'materialDetectorNext.database.lastCheck.v1';
    const CACHE_TTL_MS = 6 * 60 * 60 * 1000;
    const SUPPORTED_SCHEMA_VERSION = 1;

    function isAllowedRawUrl(value) {
        try {
            const url = new URL(value);
            return url.protocol === 'https:'
                && url.hostname === 'raw.githubusercontent.com'
                && url.pathname.startsWith('/denkz0ne/moduly-FC-userscripts/main/service-catalog/db/');
        } catch (error) {
            return false;
        }
    }

    function validateDatabase(manifest, data) {
        if (!manifest || manifest.schemaVersion !== SUPPORTED_SCHEMA_VERSION) {
            throw new Error('Nepodporovaná verzia manifestu.');
        }
        if (!data || data.schemaVersion !== SUPPORTED_SCHEMA_VERSION || !Array.isArray(data.services)) {
            throw new Error('Databáza služieb nemá platnú štruktúru.');
        }
        if (!Number.isInteger(data.dataVersion) || data.dataVersion < 1) {
            throw new Error('Databáza nemá platné číslo verzie.');
        }
        if (manifest.servicesVersion !== data.dataVersion) {
            throw new Error('Verzia manifestu a databázy sa nezhoduje.');
        }

        const ids = new Set();
        data.services.forEach(service => {
            if (!service || !/^[a-z0-9][a-z0-9_/-]*$/i.test(String(service.id || ''))) {
                throw new Error('Záznam služby nemá platné ID.');
            }
            if (ids.has(service.id)) throw new Error('Duplicitné ID služby: ' + service.id);
            ids.add(service.id);
            if (!Array.isArray(service.fields) || !Array.isArray(service.internalCodes)) {
                throw new Error('Služba ' + service.id + ' nemá platné polia.');
            }
            if (service.materialAliases && (typeof service.materialAliases !== 'object' || Array.isArray(service.materialAliases))) {
                throw new Error('Služba ' + service.id + ' má neplatné aliasy.');
            }
        });
        return { valid: true, count: data.services.length };
    }

    function parseJson(text, label) {
        try {
            return JSON.parse(text);
        } catch (error) {
            throw new Error(label + ': neplatný JSON.');
        }
    }

    function requestText(url) {
        if (!isAllowedRawUrl(url)) return Promise.reject(new Error('URL databázy nie je povolená.'));
        if (typeof GM_xmlhttpRequest === 'function') {
            return new Promise((resolve, reject) => {
                GM_xmlhttpRequest({
                    method: 'GET',
                    url,
                    timeout: 12000,
                    headers: { Accept: 'application/json' },
                    onload(response) {
                        if (response.status < 200 || response.status >= 300) {
                            reject(new Error('HTTP ' + response.status));
                            return;
                        }
                        resolve(response.responseText || '');
                    },
                    onerror() { reject(new Error('Sieťová chyba pri sťahovaní databázy.')); },
                    ontimeout() { reject(new Error('Sťahovanie databázy vypršalo.')); }
                });
            });
        }
        return fetch(url, { cache: 'no-store' }).then(response => {
            if (!response.ok) throw new Error('HTTP ' + response.status);
            return response.text();
        });
    }

    function readCache() {
        try {
            const cache = JSON.parse(localStorage.getItem(CACHE_KEY) || 'null');
            if (!cache || !cache.manifest || !cache.database) return null;
            validateDatabase(cache.manifest, cache.database);
            return Object.assign({ source: 'cache' }, cache);
        } catch (error) {
            return null;
        }
    }

    function writeCache(manifest, database) {
        const cache = {
            manifest,
            database,
            cachedAt: new Date().toISOString()
        };
        localStorage.setItem(CACHE_KEY, JSON.stringify(cache));
        return Object.assign({ source: 'remote' }, cache);
    }

    async function fetchLatest() {
        const manifest = parseJson(await requestText(MANIFEST_URL), 'Manifest');
        if (!isAllowedRawUrl(manifest.servicesUrl)) throw new Error('Manifest odkazuje na nepovolenú DB URL.');
        const database = parseJson(await requestText(manifest.servicesUrl), 'Databáza služieb');
        validateDatabase(manifest, database);
        return writeCache(manifest, database);
    }

    async function load(options = {}) {
        const cached = readCache();
        const checkedAt = Number(localStorage.getItem(CHECK_KEY) || 0);
        const force = options.force === true;
        if (!force && cached && Date.now() - checkedAt < CACHE_TTL_MS) return cached;

        try {
            const latest = await fetchLatest();
            localStorage.setItem(CHECK_KEY, String(Date.now()));
            return latest;
        } catch (error) {
            if (cached) {
                cached.refreshError = error.message || String(error);
                return cached;
            }
            return {
                source: 'unavailable',
                database: { schemaVersion: SUPPORTED_SCHEMA_VERSION, dataVersion: 0, services: [] },
                error: error.message || String(error)
            };
        }
    }

    window.MaterialDetectorNextDatabase = {
        load,
        validateDatabase,
        refresh: () => load({ force: true }),
        manifestUrl: MANIFEST_URL,
        cacheKey: CACHE_KEY
    };
})();
