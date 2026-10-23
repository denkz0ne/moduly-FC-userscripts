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

    function findServiceProduct() {
        const productRoot = document.querySelector('#vpProducts');
        if (!productRoot) return null;
        // Service identity is intentionally read only from the product table.
        // Accept numeric, alphanumeric and slash-form codes without baking in
        // one service family (for example: 82/f, 49ban, 67spz).
        const codePrefix = /^\s*([a-z0-9]+(?:\s*\/\s*[a-z0-9]+)*)\s*[-–—]\s*(.*)$/i;
        for (const row of productRoot.querySelectorAll('tr')) {
            for (const cell of row.querySelectorAll('td, th')) {
                const text = api.clean(cell.textContent || '');
                const match = text.match(codePrefix);
                if (!match) continue;
                return {
                    code: match[1].replace(/\s+/g, '').toLowerCase(),
                    name: match[2].replace(/\s*\\+\s*\d+\s*$/, '').trim(),
                    rowText: api.clean(row.textContent || '')
                };
            }
        }
        return null;
    }

    function collect() {
        if (!allowedPage()) return null;
        const context = api.collectPageContext({ skipProductCode: true });
        const serviceProduct = findServiceProduct();
        const rawRows = collectRawRows();
        return Object.assign({}, context, {
            vp: api.getCurrentVpFromUrl(),
            internalCode: serviceProduct && serviceProduct.code || '',
            priceCode: '',
            candidateCode: serviceProduct && serviceProduct.code || '',
            serviceName: serviceProduct && serviceProduct.name || '',
            serviceProduct: serviceProduct,
            heading: serviceProduct && serviceProduct.name || '',
            rawRows,
            rawParams: api.parseZdParams() || {},
            pageUrl: window.location.href,
            capturedAt: new Date().toISOString()
        });
    }

    window.MaterialDetectorNextPageContext = { allowedPage, collect, collectRawRows };
})();
