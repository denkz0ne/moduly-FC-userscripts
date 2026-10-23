(function () {
    'use strict';

    const STORAGE_KEY = 'materialDetectorNext.proposals.v1';
    const api = window.MaterialDetectorNextAPI;

    function readAll() {
        try {
            const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
            return Array.isArray(parsed) ? parsed : [];
        } catch (error) {
            return [];
        }
    }

    function saveAll(items) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
        return items;
    }

    function normalizeCandidateValue(label, rawValue, universal) {
        const normalizedLabel = api.normalizeKey(label);
        const raw = api.clean(rawValue);
        if (!raw) return '';
        if (/sirka|width|breite/.test(normalizedLabel) && universal.widthCm != null) return universal.widthCm + ' cm';
        if (/vyska|height|hoehe/.test(normalizedLabel) && universal.heightCm != null) return universal.heightCm + ' cm';
        if (/rozmer|format|velkost|size|dimension/.test(normalizedLabel)) return api.parseSizeAlias(raw) || raw;
        if (/pocet|mnozstvo|quantity|qty|count|kusov|kusy|vytlack|naklad|menge|cantidad|anzahl|(?:^|\s)ks(?:\s|$)/.test(normalizedLabel)) {
            return universal.quantityCount == null ? raw : universal.quantity;
        }
        return raw;
    }

    function typeForLabel(label) {
        const normalized = api.normalizeKey(label);
        if (/rozmer|format|velkost|size|dimension|sirka|vyska|width|height|breite|hoehe/.test(normalized)) return 'dimension';
        if (/pocet|mnozstvo|quantity|qty|count|kusov|kusy|vytlack|naklad|menge|cantidad|anzahl|(?:^|\s)ks(?:\s|$)/.test(normalized)) return 'quantity';
        if (/material|mediu|foli|papier|platno/.test(normalized)) return 'material';
        return 'text';
    }

    function create(context, baseVersion = 0) {
        if (!context) return null;
        const proposalId = 'proposal-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 7);
        const universal = api.parseUniversalParameters(context.rawRows || []);
        const rawFields = (context.rawRows || []).map((row, index) => ({
            key: api.normalizeKey(row.label).replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '') || `field_${index + 1}`,
            label: row.label,
            rawValue: row.value,
            values: row.values || [row.value],
            normalizedValue: normalizeCandidateValue(row.label, row.value, universal),
            type: typeForLabel(row.label),
            includeNormalizedValue: false,
            aliasValue: '',
            source: 'VPZDParams'
        }));
        const proposal = {
            proposalId,
            serviceCandidate: {
                id: context.candidateCode || '',
                name: context.heading || context.candidateCode || 'Neznáma služba',
                detectorId: '',
                outputAlias: context.candidateCode || context.heading || ''
            },
            pageUrl: context.pageUrl,
            capturedAt: context.capturedAt || new Date().toISOString(),
            sourceType: 'moduly-vp-detail',
            baseServicesVersion: baseVersion,
            rawFields,
            confidence: context.candidateCode && rawFields.length >= 2 ? 'medium' : 'low',
            reviewStatus: 'pending',
            notes: ''
        };
        const all = readAll();
        all.unshift(proposal);
        saveAll(all.slice(0, 100));
        return proposal;
    }

    function update(proposalId, patch) {
        const all = readAll();
        const index = all.findIndex(item => item.proposalId === proposalId);
        if (index < 0) return null;
        all[index] = Object.assign({}, all[index], patch || {});
        saveAll(all);
        return all[index];
    }

    function remove(proposalId) {
        return saveAll(readAll().filter(item => item.proposalId !== proposalId));
    }

    function exportJson(proposal) {
        const payload = {
            proposalFormatVersion: 1,
            exportedAt: new Date().toISOString(),
            baseServicesVersion: proposal.baseServicesVersion,
            service: {
                id: proposal.serviceCandidate.id,
                name: proposal.serviceCandidate.name,
                detectorId: proposal.serviceCandidate.detectorId || '',
                outputAlias: proposal.serviceCandidate.outputAlias || proposal.serviceCandidate.name || proposal.serviceCandidate.id,
                internalCodes: proposal.serviceCandidate.id ? [proposal.serviceCandidate.id] : [],
                materialAliases: (proposal.rawFields || []).reduce((aliases, field) => {
                    const value = api.normalizeKey(field.normalizedValue || '');
                    const alias = String(field.aliasValue || '').trim();
                    if (field.type === 'material' && field.includeNormalizedValue && value && alias) aliases[value] = alias;
                    return aliases;
                }, {}),
                labelTemplate: { left: '{alias}', top: '', bottom: '' },
                fields: (proposal.rawFields || []).map(field => ({
                    key: field.key,
                    label: field.label,
                    sourceLabels: [field.label],
                    type: field.type || typeForLabel(field.label),
                    knownValues: field.includeNormalizedValue && field.normalizedValue ? [field.normalizedValue] : []
                }))
            },
            sourceType: proposal.sourceType,
            capturedAt: proposal.capturedAt
        };
        return new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json;charset=utf-8' });
    }

    window.MaterialDetectorNextProposals = { create, update, remove, readAll, exportJson };
})();
