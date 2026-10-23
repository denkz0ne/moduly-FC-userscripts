(function () {
    'use strict';
    const ROOT_ID = 'material-detector-next-preview';
    const STYLE_ID = 'material-detector-next-preview-style';
    let visible = false;
    function addStyles() {
        if (document.getElementById(STYLE_ID)) return;
        const style = document.createElement('style');
        style.id = STYLE_ID;
        style.textContent = [
            '#material-detector-next-preview{position:fixed;z-index:899;right:124px;top:94px;width:340px;max-width:calc(100vw - 150px);font:13px/1.4 Inter,system-ui,-apple-system,"Segoe UI",sans-serif;color:#182536}',
            '#material-detector-next-preview[hidden]{display:none!important}',
            '#material-detector-next-preview *{box-sizing:border-box}',
            '#material-detector-next-preview .mdn-card{background:#fff;border:1px solid #dbe3ee;border-radius:14px;box-shadow:0 12px 38px rgba(18,38,63,.2);overflow:hidden}',
            '#material-detector-next-preview .mdn-head{display:flex;justify-content:space-between;align-items:center;padding:11px 14px;background:#183b56;color:#fff}',
            '#material-detector-next-preview .mdn-brand{font-weight:750;letter-spacing:.02em}',
            '#material-detector-next-preview .mdn-mode{font-size:10px;font-weight:750;letter-spacing:.08em;padding:4px 7px;border-radius:999px;background:#d7f5e8;color:#12583b}',
            '#material-detector-next-preview .mdn-body{padding:12px 14px 14px}',
            '#material-detector-next-preview .mdn-service{font-size:12px;color:#536579;margin-bottom:9px}',
            '#material-detector-next-preview .mdn-zones{display:grid;grid-template-columns:1fr 1fr;gap:7px}',
            '#material-detector-next-preview .mdn-zone{min-height:50px;padding:8px 9px;background:#f4f7fb;border:1px solid #e5ebf3;border-radius:9px}',
            '#material-detector-next-preview .mdn-zone-label{display:block;margin-bottom:3px;color:#728197;font-size:9px;font-weight:800;letter-spacing:.09em;text-transform:uppercase}',
            '#material-detector-next-preview .mdn-zone-value{display:block;min-height:17px;color:#152a40;font-weight:650;overflow-wrap:anywhere}',
            '#material-detector-next-preview .mdn-foot{margin-top:9px;font-size:10px;color:#718096}',
            '#material-detector-next-preview .mdn-rename{margin-top:10px;padding:8px 9px;background:#fff9ed;border:1px solid #f2dfb5;border-radius:9px;font-size:11px}',
            '#material-detector-next-preview .mdn-rename summary{cursor:pointer;font-weight:750;color:#77521a}',
            '#material-detector-next-preview .mdn-rename-pattern{margin:6px 0;color:#715f43;overflow-wrap:anywhere}',
            '#material-detector-next-preview .mdn-rename-file{padding:5px 0;border-top:1px solid #f2e8d4;overflow-wrap:anywhere}',
            '#material-detector-next-preview .mdn-rename-file span{display:block;color:#718096}',
            '@media(max-width:700px){#material-detector-next-preview{right:8px;top:auto;bottom:12px;width:min(340px,calc(100vw - 16px))}}'
        ].join('');
        (document.head || document.documentElement).appendChild(style);
    }
    function ensureRoot() {
        let root = document.getElementById(ROOT_ID);
        if (root) return root;
        root = document.createElement('section');
        root.id = ROOT_ID;
        root.setAttribute('aria-label', 'Material Detector Next náhľad štítka');
        root.setAttribute('aria-hidden', String(!visible));
        root.hidden = !visible;
        root.style.display = visible ? 'block' : 'none';
        (document.body || document.documentElement).appendChild(root);
        return root;
    }
    function makeZone(label, value) {
        const cell = document.createElement('div');
        cell.className = 'mdn-zone';
        const title = document.createElement('span');
        title.className = 'mdn-zone-label';
        title.textContent = label;
        const text = document.createElement('span');
        text.className = 'mdn-zone-value';
        text.textContent = value || '—';
        cell.append(title, text);
        return cell;
    }
    function makeRenameDebug(debug) {
        if (!debug) return null;
        const details = document.createElement('details');
        details.className = 'mdn-rename';
        const summary = document.createElement('summary');
        summary.textContent = 'Rename script · iba debug (' + (debug.enabled ? 'nastavený ON' : 'vypnutý') + ')';
        details.appendChild(summary);
        const pattern = document.createElement('div');
        pattern.className = 'mdn-rename-pattern';
        pattern.textContent = 'Šablóna: ' + (debug.pattern || '—');
        details.appendChild(pattern);
        const files = debug.files || [];
        if (!files.length) {
            const empty = document.createElement('div');
            empty.textContent = 'Na stránke sa nenašli odkazy na súbory.';
            details.appendChild(empty);
        }
        files.forEach(file => {
            const row = document.createElement('div');
            row.className = 'mdn-rename-file';
            const source = document.createElement('span');
            source.textContent = 'Pôvodný názov: ' + file.originalName;
            const output = document.createElement('strong');
            output.textContent = 'Návrh názvu: ' + file.proposedName;
            row.append(source, output);
            details.appendChild(row);
        });
        return details;
    }
    function render(detection) {
        addStyles();
        const root = ensureRoot();
        const zones = detection && detection.zones || {};
        const service = detection && detection.service;
        const database = detection && detection.database;
        root.replaceChildren();
        const card = document.createElement('div');
        card.className = 'mdn-card';
        const head = document.createElement('div');
        head.className = 'mdn-head';
        const brand = document.createElement('span');
        brand.className = 'mdn-brand';
        brand.textContent = 'Material Detector Next';
        const mode = document.createElement('span');
        mode.className = 'mdn-mode';
        mode.textContent = 'NÁHĽAD';
        head.append(brand, mode);
        const body = document.createElement('div');
        body.className = 'mdn-body';
        const serviceLine = document.createElement('div');
        serviceLine.className = 'mdn-service';
        serviceLine.textContent = service
            ? service.name + ' · DB v' + (database && database.database && database.database.dataVersion || '?')
            : 'Služba nie je v katalógu';
        const grid = document.createElement('div');
        grid.className = 'mdn-zones';
        grid.append(
            makeZone('Ľavé pole', zones.left),
            makeZone('Pravé pole', zones.right),
            makeZone('Horné pole', zones.top),
            makeZone('Dolné pole', zones.bottom)
        );
        const foot = document.createElement('div');
        foot.className = 'mdn-foot';
        foot.textContent = detection && detection.result
            ? 'Detektor: ' + (detection.result.detector || service && service.id || '—') + ' · Výstup je iba náhľad.'
            : 'Náhľad je oddelený od pôvodného štítka. Otvor NEXT CFG na kontrolu návrhu.';
        body.append(serviceLine, grid);
        const renameDebug = makeRenameDebug(detection && detection.result && detection.result.renameDebug);
        if (renameDebug) body.appendChild(renameDebug);
        body.appendChild(foot);
        card.append(head, body);
        root.appendChild(card);
        return root;
    }
    function setVisible(nextVisible) {
        visible = !!nextVisible;
        const root = document.getElementById(ROOT_ID);
        if (root) {
            root.hidden = !visible;
            root.style.display = visible ? 'block' : 'none';
            root.setAttribute('aria-hidden', String(!visible));
        }
        return visible;
    }
    window.MaterialDetectorNextPreview = { render, setVisible, isVisible: () => visible };
})();
