/* Source-only audit. Run with: node --expose-internals tools/audit-fc-sources.cjs <baseline-commit>
 * Uses Acorn bundled with Node for this development tool; never ships in a userscript.
 * Does not execute audited JavaScript or access browser/profile data.
 */
'use strict';
const fs = require('node:fs');
const path = require('node:path');
const cp = require('node:child_process');
const crypto = require('node:crypto');
let acorn;
try { acorn = require('acorn'); }
catch { acorn = require('internal/deps/acorn/acorn/dist/acorn'); }
const root = path.resolve(__dirname, '..');
const git = (...args) => cp.execFileSync('git', args, { cwd: root, maxBuffer: 32 * 1024 * 1024 });
const baseline = git('rev-parse', process.argv[2] || 'HEAD').toString().trim();
const out = path.join(root, 'docs/fc-suite/audit');
fs.mkdirSync(path.join(out, 'files'), { recursive: true });
fs.mkdirSync(path.join(out, 'sources'), { recursive: true });
const hash = text => crypto.createHash('sha256').update(text).digest('hex');
const repo = 'https://github.com/denkz0ne/moduly-FC-userscripts';
const paths = git('ls-tree', '-r', '--name-only', baseline).toString().trim().split('\n')
    .filter(p => p.endsWith('.js') && !p.startsWith('Corel/') && !p.startsWith('tools/'));
const inputs = paths.map(file => ({ file, ref: baseline, source: git('show', `${baseline}:${file}`).toString('utf8') }));
const label = inputs.find(i => i.file === 'labelRegeneratorV2.user.js');
for (const match of label.source.matchAll(/^\/\/ @require\s+https:\/\/raw\.githubusercontent\.com\/denkz0ne\/moduly-FC-userscripts\/([a-f0-9]{40})\/(.+)$/gm)) {
    const ref = match[1], file = match[2].trim();
    const bytes = git('show', `${ref}:${file}`);
    fs.writeFileSync(path.join(out, 'sources', `label-${ref}.js.txt`), bytes);
    inputs.push({ file, ref, historical: true, source: bytes.toString('utf8') });
}
const imported = path.join(out, 'sources/image-viewer-1.2.js.txt');
if (fs.existsSync(imported)) inputs.push({ file: 'imported/image-viewer-1.2', ref: null, imported: true, source: fs.readFileSync(imported, 'utf8') });
function inspect(input) {
    const { source } = input;
    const tree = acorn.parse(source, { ecmaVersion: 'latest', sourceType: 'script', locations: true });
    const metadata = {};
    for (const m of source.matchAll(/^\/\/\s+@(\S+)\s+(.+)$/gm)) (metadata[m[1]] ||= []).push(m[2].trim());
    const result = { ...input, source: undefined, sha256: hash(source), lines: source.split('\n').length, metadata,
        functions: [], variables: [], calls: [], assignments: [] };
    const text = n => n ? source.slice(n.start, n.end) : '';
    function walk(node, parent, scope) {
        if (!node || typeof node.type !== 'string') return;
        let nextScope = scope;
        if (/Function/.test(node.type)) {
            const name = node.id?.name || (parent?.type === 'VariableDeclarator' ? text(parent.id) : '')
                || (parent?.type === 'Property' ? text(parent.key) : '')
                || (parent?.type === 'AssignmentExpression' ? text(parent.left) : '') || `<anonymous@${node.loc.start.line}>`;
            result.functions.push({ name, scope, line: node.loc.start.line, end: node.loc.end.line,
                parameters: node.params.map(text), async: !!node.async, generator: !!node.generator, sha256: hash(text(node)) });
            nextScope = scope ? `${scope}/${name}` : name;
        }
        if (node.type === 'VariableDeclarator') result.variables.push({ name: text(node.id), kind: parent.kind,
            scope, line: node.loc.start.line, initializer: text(node.init) });
        if (node.type === 'AssignmentExpression') result.assignments.push({ target: text(node.left),
            line: node.loc.start.line, scope, operator: node.operator, value: text(node.right).slice(0, 600) });
        if (node.type === 'CallExpression' || node.type === 'NewExpression') {
            const callee = text(node.callee);
            const categories = [];
            if (/Storage\.|indexedDB|\.transaction$|\.createObjectStore$|\bGM_(?:get|set|delete|list)Value/.test(callee)) categories.push('storage');
            if (/addEventListener|removeEventListener|dispatchEvent|CustomEvent|postMessage/.test(callee)) categories.push('events');
            if (/MutationObserver|ResizeObserver|IntersectionObserver|\.observe$|\.disconnect$|setTimeout|setInterval|clearTimeout|clearInterval|requestAnimationFrame|cancelAnimationFrame/.test(callee)) categories.push('lifecycle');
            if (/fetch$|GM_xmlhttpRequest|GM_download|GM_openInTab|XMLHttpRequest|\.open$|\.send$|\.print$|clipboard|createObjectURL|revokeObjectURL/.test(callee)) categories.push('io');
            if (/querySelector|querySelectorAll|getElementById|getElementsBy|\.closest$|\.matches$|document.evaluate/.test(callee)) categories.push('dom-read');
            if (/append|insertBefore|insertAdjacent|replaceChildren|\.remove$|\.setAttribute$|\.removeAttribute$/.test(callee)) categories.push('dom-write');
            if (/console\./.test(callee)) categories.push('logs');
            if (categories.length) result.calls.push({ callee, line: node.loc.start.line, scope, categories,
                arguments: node.arguments.map(a => text(a).slice(0, 600)) });
        }
        for (const [key, value] of Object.entries(node)) {
            if (key === 'loc') continue;
            if (Array.isArray(value)) value.forEach(v => walk(v, node, nextScope));
            else if (value && typeof value === 'object' && value.type) walk(value, node, nextScope);
        }
    }
    walk(tree, null, '');
    return result;
}
const records = inputs.map(inspect);
const legacy = records.find(r => r.file === 'materialDetector.user.js' && !r.historical);
const approved = (legacy.metadata.require || []).filter(url => /\/detector_(?!api)[^/]+\.js$/.test(url)).map(url => {
    const file = url.split('/main/')[1];
    const original = records.find(r => r.file === file && !r.historical);
    const candidate = records.find(r => r.file === file.replace('detectors/', 'service-catalog/detectors/') && !r.historical);
    const source = inputs.find(i => i.file === file && !i.historical).source;
    return { detectorId: source.match(/\bid:\s*['"]([^'"]+)/)?.[1], source: file, baseline,
        originalSha256: original.sha256, approval: 'approved-as-is-by-owner-2026-10-23',
        nextCandidate: candidate?.file || null, nextCandidateSha256: candidate?.sha256 || null,
        identicalSource: original.sha256 === candidate?.sha256, importState: 'planned-not-applied-to-runtime',
        acceptance: 'Preserve original match/detect results, aliases, size, quantity, zones and rename contract; generic fallback must not overwrite approved output.' };
});
const providerContract = ['materialDetector.user.js', 'detectors/detector_api.js', 'detectors/control_panel.js'].map(file => {
    const record = records.find(r => r.file === file && !r.historical);
    return { file, sha256: record.sha256 };
});
fs.writeFileSync(path.join(out, 'approved-legacy-detectors.json'), JSON.stringify({ schemaVersion: 1, baseline,
    approvalScope: 'Original detector modules plus original API/router/settings semantics; preserve declared order and actual registry behavior.',
    providerContract, declaredOrder: approved.map(a => a.detectorId),
    userSettingsProvenance: 'not-exported; original localStorage aliases/config must be imported before parity/cutover, not inferred from defaults',
    approved }, null, 2) + '\n');
const slug = r => (r.historical ? `historical-${r.ref}` : r.file.replace(/\//g, '--').replace(/\.js$/, ''));
const code = s => '`' + String(s).replace(/`/g, "'").replace(/\s+/g, ' ').slice(0, 300) + '`';
for (const r of records) {
    const link = line => r.ref ? `${repo}/blob/${r.ref}/${r.file}#L${line}` : '../sources/image-viewer-1.2.js.txt';
    const lines = [`# ${r.metadata.name?.[0] || r.file}`, '', `Zdroj: ${r.file}; referencia: ${r.ref || 'dodané používateľom, screenshot 2026-10-23'}.`,
        `SHA-256: \`${r.sha256}\`. Riadkov: ${r.lines}.`, '',
        'AST inventár: obsahuje aj vnorené/anonýmne funkcie a lokálne premenné. Zoznam premenných nie je zoznam editovateľných nastavení. Volania sú klasifikované podľa názvu; dynamické aliasy môžu vyžadovať ručné dohľadanie. Historické @require hlavičky v načítanom JS nie sú ďalším automaticky spusteným @require reťazcom.', '',
        '## Metadata', '', '```json', JSON.stringify(r.metadata, null, 2), '```', '', '## Funkcie a signatúry', ''];
    for (const f of r.functions) lines.push(`- [L${f.line}–${f.end}](${link(f.line)}) ${code(`${f.async ? 'async ' : ''}${f.name}(${f.parameters.join(', ')})`)}; scope ${code(f.scope || 'root')}.`);
    lines.push('', '## Premenné a pôvodné inicializátory', '', 'Dlhé inicializátory sú tu skrátené na 300 znakov; úplné znenie je v inventory.json a v zdroji.', '');
    for (const v of r.variables) lines.push(`- [L${v.line}](${link(v.line)}) ${code(`${v.kind} ${v.name} = ${v.initializer || '<bez inicializátora>'}`)}; scope ${code(v.scope || 'root')}.`);
    for (const category of ['storage', 'events', 'lifecycle', 'io', 'dom-read', 'dom-write', 'logs']) {
        lines.push('', `## ${category}`, '');
        const calls = r.calls.filter(c => c.categories.includes(category));
        if (!calls.length) lines.push('Žiadne priame volanie v tejto kategórii; prípadné volanie cez alias treba posúdiť v zdroji.');
        for (const c of calls) lines.push(`- [L${c.line}](${link(c.line)}) ${code(`${c.callee}(${c.arguments.join(', ')})`)}; scope ${code(c.scope || 'root')}.`);
    }
    lines.push('', '## Zápisy do globálov, DOM a ostatných vlastností', '');
    for (const a of r.assignments.filter(a => /window\.|prototype|document\.|innerHTML|outerHTML|textContent|\.style|\.className|\.id$/.test(a.target))) lines.push(`- [L${a.line}](${link(a.line)}) ${code(`${a.target} ${a.operator} ${a.value}`)}.`);
    fs.writeFileSync(path.join(out, 'files', `${slug(r)}.md`), lines.join('\n').trimEnd() + '\n');
}
const duplicateFunctions = new Map();
for (const r of records.filter(r => !r.historical)) for (const f of r.functions.filter(f => !f.name.startsWith('<') && f.end - f.line >= 3)) {
    const hits = duplicateFunctions.get(f.sha256) || [];
    hits.push({ file: r.file, name: f.name, line: f.line }); duplicateFunctions.set(f.sha256, hits);
}
const duplicates = [...duplicateFunctions.values()].filter(hits => new Set(hits.map(h => h.file)).size > 1);
fs.writeFileSync(path.join(out, 'inventory.json'), JSON.stringify({ schemaVersion: 1, baseline, parser: `Acorn ${acorn.version}`, records, identicalFunctionCandidates: duplicates }, null, 2) + '\n');
const index = ['# Index zdrojového auditu', '', `Baseline: ${baseline}. AST parser: Acorn ${acorn.version}.`, '',
    'Autoritatívny zoznam aktívnych inštalácií je v ../README.md. Pomocný modul alebo historická vrstva sa nepovažuje za zastaranú len preto, že nie je viditeľná v Tampermonkey zozname.', '',
    '| Zdroj | Verzia | Funkcie | Premenné | Evidované volania |', '|---|---|---:|---:|---:|'];
for (const r of records) index.push(`| [${r.historical ? 'historical ' + r.ref.slice(0, 7) : r.file}](files/${slug(r)}.md) | ${r.metadata.version?.[0] || 'modul'} | ${r.functions.length} | ${r.variables.length} | ${r.calls.length} |`);
index.push('', '## Kandidáti doslova rovnakých funkcií', '', 'Zhoda textu ešte nedokazuje rovnaký kontrakt, uzáver, kontext ani možnosť bezpečného zlúčenia.', '');
for (const group of duplicates) index.push('- ' + group.map(h => `${h.file}:${h.line} ${h.name}`).join(' ↔ '));
fs.writeFileSync(path.join(out, 'INDEX.md'), index.join('\n') + '\n');
console.log(JSON.stringify({ baseline, files: records.length, functions: records.reduce((n, r) => n + r.functions.length, 0), variables: records.reduce((n, r) => n + r.variables.length, 0), duplicateGroups: duplicates.length }));
