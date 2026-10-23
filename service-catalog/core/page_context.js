(function () {
    'use strict';

    const ALLOWED_HOST = 'moduly.faxcopy.sk';
    const ALLOWED_PATH = /^\/vyrobne_prikazy\/detail\/index\/\d+\/?$/;
    const api = window.MaterialDetectorNextAPI;

    function allowedPage(locationObject = window.location) {
        return locationObject.hostname === ALLOWED_HOST && ALLOWED_PATH.test(locationObject.pathname);
    }

    function collectRawRows() {
        const root = document.querySelector('#zd-form-container #VPZDParams');
        if (!root) return [];
        return Array.from(root.querySelectorAll(':scope > div.flex')).map(row => {
            const cells = row.querySelectorAll(':scope > div');
            if (cells.length < 2) return null;
            const label = api.clean(cells[0].textContent || '');
            const chunks = Array.from(cells[1].querySelectorAll('.whitespace-pre-line'))
                .map(node => api.clean(node.textContent || ''))
                .filter(Boolean);
            const value = chunks.length ? chunks.join(' | ') : api.clean(cells[1].textContent || '');
            return label && value ? { label, value, values: chunks.length ? chunks : [value] } : null;
        }).filter(Boolean);
    }

    function findUnknownCode(context) {
        if (context.internalCode) return context.internalCode;
        const rows = Array.from(document.querySelectorAll("tr[title='ceny bez DPH'], tr"));
        for (const row of rows) {
            const text = api.clean(row.textContent || '');
            const match = text.match(/\b(\d{2,4}[a-z][a-z0-9]*(?:\/[a-z0-9]+)?)\b/i);
            if (match) return match[1].toLowerCase();
        }
        return '';
    }

    function collect() {
        if (!allowedPage()) return null;
        const context = api.collectPageContext();
        const rawRows = collectRawRows();
        return Object.assign({}, context, {
            vp: api.getCurrentVpFromUrl(),
            candidateCode: findUnknownCode(context),
            heading: api.clean(document.querySelector('h1, h2')?.textContent || ''),
            rawRows,
            rawParams: api.parseZdParams() || {},
            pageUrl: window.location.href,
            capturedAt: new Date().toISOString()
        });
    }

    window.MaterialDetectorNextPageContext = { allowedPage, collect, collectRawRows };
})();
