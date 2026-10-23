(function () {
    'use strict';

    const api = window.MaterialDetectorNextAPI;
    const DATE_SELECTOR = '#dodacia_lehota_label';

    function normalizeServiceCode(value) {
        return api.normalizeKey(value).replace(/\s+/g, '');
    }

    function findService(database, context) {
        const services = database && database.services || [];
        const code = normalizeServiceCode(context.internalCode || context.candidateCode);
        for (const service of services) {
            const exact = (service.internalCodes || []).some(item => normalizeServiceCode(item) === code);
            const patterns = service.internalCodePatterns || [];
            const patternMatch = patterns.some(pattern => {
                try { return new RegExp(pattern, 'i').test(code); } catch (error) { return false; }
            });
            if (code && (exact || patternMatch)) return service;
        }
        if (!code && api.detectUniversalSizeAlias(context)) {
            return services.find(service => service.id === 'common_size') || null;
        }
        return null;
    }

    function setActiveServiceAliases(service) {
        const aliases = service && service.materialAliases || {};
        api.setServiceAliasResolver(value => {
            const normalized = api.normalizeKey(value);
            for (const [key, alias] of Object.entries(aliases)) {
                const normalizedKey = api.normalizeKey(key);
                if (normalized === normalizedKey || normalized.includes(normalizedKey)) return alias;
            }
            return '';
        });
    }

    function detectorFor(service, context) {
        const byCode = api.findDetector(context.internalCode, context);
        if (byCode) return byCode;
        if (!service || !service.detectorId) return null;
        return api.getDetectors().find(detector => detector.id === service.detectorId) || null;
    }

    function genericServiceResult(service, context) {
        const params = {};
        const rawFields = {};
        (service.fields || []).forEach(field => {
            const sourceLabels = (field.sourceLabels || [field.label || field.key]).map(api.normalizeKey);
            const matches = (context.rawRows || []).filter(row => {
                const label = api.normalizeKey(row.label);
                return sourceLabels.some(source => label === source || label.includes(source) || source.includes(label));
            });
            const rawValue = matches.map(row => row.value).filter(Boolean).join(' | ');
            if (!rawValue) return;
            let normalizedValue = rawValue;
            if (field.type === 'dimension') normalizedValue = api.parseSizeAlias(rawValue) || rawValue;
            if (field.type === 'quantity') normalizedValue = (rawValue.match(/\d+/) || [rawValue])[0];
            rawFields[field.key] = rawValue;
            params[field.key] = normalizedValue;
            params[field.key + 'Raw'] = rawValue;
        });

        const sizeField = (service.fields || []).find(field => field.type === 'dimension' || /size|rozmer|format/i.test(field.key || ''));
        const sizeRaw = sizeField && rawFields[sizeField.key] || params.sizeRaw || rawFields.size || rawFields.rozmer || '';
        let sizeAlias = api.parseSizeAlias(sizeRaw) || params.size || '';
        const widthRaw = Object.entries(rawFields).find(([key]) => /sirka|width/i.test(key))?.[1] || '';
        const heightRaw = Object.entries(rawFields).find(([key]) => /vyska|height/i.test(key))?.[1] || '';
        if (!sizeAlias && widthRaw && heightRaw) {
            const width = (widthRaw.match(/[\d,.]+/) || [''])[0];
            const height = (heightRaw.match(/[\d,.]+/) || [''])[0];
            if (width && height) sizeAlias = api.parseSizeAlias(width + 'x' + height + ' ' + (/mm/i.test(widthRaw + heightRaw) ? 'mm' : 'cm'));
        }
        const size = api.stripSizeUnitSuffix(sizeAlias);
        const materialField = (service.fields || []).find(field => field.type === 'material' || /material|media/i.test(field.key || ''));
        const materialRaw = materialField && rawFields[materialField.key] || params.materialRaw || params.material || params.mediaTypeRaw || '';
        const alias = api.resolveMaterialAlias(materialRaw) || service.outputAlias || service.name || context.candidateCode || 'sluzba';
        const quantityField = (service.fields || []).find(field => field.type === 'quantity' || /quantity|pocet|mnozstvo/i.test(field.key || ''));
        const quantityRaw = quantityField && rawFields[quantityField.key] || params.quantityRaw || params.quantity || '';
        const quantity = quantityRaw ? quantityRaw + 'ks' : '1ks';
        const tokens = Object.assign({}, params, {
            alias,
            size,
            sizeAlias,
            quantity,
            vp: context.vp || '',
            code: context.internalCode || context.candidateCode || service.id,
            detector: service.id,
            productCode: context.internalCode || context.candidateCode || service.id,
            material: materialRaw,
            materialAlias: api.resolveMaterialAlias(materialRaw) || materialRaw
        });
        const template = service.labelTemplate || {};
        const left = api.renderTemplate(template.left || '{alias}', tokens) || alias;
        const top = api.renderTemplate(template.top || '', tokens);
        const bottom = api.renderTemplate(template.bottom || '', tokens);
        return {
            detector: service.id,
            left,
            top,
            bottom,
            rename: {
                enabled: false,
                pattern: template.rename || '{alias}_{size}_{quantity}_{vp} {original}.{ext}',
                alias,
                sizeAlias,
                quantity
            },
            state: {
                detector: service.id,
                productCode: context.internalCode || context.candidateCode || service.id,
                outputAlias: alias,
                sizeAlias,
                params: Object.assign({}, params, rawFields, { alias, materialAlias: tokens.materialAlias, quantity, sizeAlias })
            },
            debug: Object.assign({}, params, rawFields, { alias, materialAlias: tokens.materialAlias, quantity, sizeAlias })
        };
    }

    function detectDeliveryDate() {
        const element = document.querySelector(DATE_SELECTOR);
        if (!element) return '';
        const text = api.clean(element.textContent || element.value || '');
        const match = text.match(/(\d{1,2})\.\s*(\d{1,2})\./);
        if (!match) return '';
        return `${String(match[1]).padStart(2, '0')}. ${String(match[2]).padStart(2, '0')}.`;
    }

    function mergedParams(result) {
        return Object.assign({}, result.debug || {}, result.state && result.state.params || {});
    }

    function makeTokens(result, context) {
        const state = result.state || {};
        const rename = result.rename || {};
        const params = mergedParams(result);
        const sizeAlias = rename.sizeAlias || state.sizeAlias || params.sizeAlias || '';
        const quantityValue = rename.quantity || params.quantity || '1ks';
        const quantity = /ks$/i.test(String(quantityValue)) ? String(quantityValue) : `${quantityValue}ks`;
        const alias = rename.alias || state.outputAlias || result.left || params.alias || '';
        return Object.assign({}, params, {
            alias,
            left: result.left || '',
            right: detectDeliveryDate(),
            top: result.top || '',
            bottom: result.bottom || '',
            size: api.stripSizeUnitSuffix(sizeAlias),
            sizeAlias,
            quantity,
            quantityRaw: params.quantity || '',
            vp: context.vp || api.getCurrentVpFromUrl(),
            detector: result.detector || state.detector || '',
            code: state.productCode || context.internalCode || params.code || '',
            productCode: state.productCode || context.internalCode || '',
            internalCode: context.internalCode || context.candidateCode || '',
            outputAlias: state.outputAlias || alias
        });
    }

    function hasTemplate(value) {
        return api.normalizeTemplateBlocks(value).length > 0;
    }

    function applySettings(result, context) {
        const detectorId = result.detector || '';
        const settings = api.getDetectorSettings(detectorId);
        let tokens = makeTokens(result, context);
        if (hasTemplate(settings.leftTemplate)) result.left = api.renderTemplate(settings.leftTemplate, tokens) || result.left || '';
        if (hasTemplate(settings.topTemplate)) result.top = api.renderTemplate(settings.topTemplate, tokens);
        if (hasTemplate(settings.bottomTemplate)) result.bottom = api.renderTemplate(settings.bottomTemplate, tokens);
        if (result.rename) {
            result.rename = Object.assign({}, result.rename);
            if (typeof settings.renameEnabled === 'boolean') result.rename.enabled = settings.renameEnabled;
            if (hasTemplate(settings.renameTemplate)) result.rename.pattern = api.templateToPattern(settings.renameTemplate);
        }
        result.state = Object.assign({}, result.state || {});
        result.state.params = Object.assign({}, mergedParams(result), result.state.params || {});
        tokens = makeTokens(result, context);
        result.tokens = tokens;
        return result;
    }

    function buildRenameDebug(result) {
        const rename = result && result.rename || {};
        const pattern = rename.pattern || '{alias}_{size}_{quantity}_{vp} {original}.{ext}';
        const candidates = Array.from(document.querySelectorAll('a[href]')).filter(anchor => {
            const href = anchor.href || '';
            const text = api.normalizeKey(anchor.textContent || '');
            const cls = typeof anchor.className === 'string' ? anchor.className : '';
            return /\/data\/servicesForm\//i.test(href)
                || /\/vyrobne_prikazy\/detail\/downloadZip\//i.test(href)
                || /\/svg_editor\//i.test(href)
                || /\.[a-z0-9]{1,12}(\?|$)/i.test(href)
                || text.includes('stiahni')
                || text.includes('stiahnut')
                || cls.includes('block mt5');
        }).slice(0, 12);

        const files = candidates.map(anchor => {
            let original = 'subor';
            let ext = '';
            try {
                const url = new URL(anchor.href, location.href);
                const name = decodeURIComponent(url.pathname.split('/').pop() || 'subor');
                const dot = name.lastIndexOf('.');
                if (dot > 0) {
                    original = name.slice(0, dot);
                    ext = name.slice(dot + 1);
                } else {
                    original = name;
                }
            } catch (error) { /* Keep safe filename defaults for malformed hrefs. */ }

            const rawTokens = Object.assign({}, result && result.tokens || {}, {
                alias: rename.alias || result && result.state && result.state.outputAlias || result && result.left || 'material',
                size: api.stripSizeUnitSuffix(rename.sizeAlias || result && result.state && result.state.sizeAlias || ''),
                sizeAlias: rename.sizeAlias || result && result.state && result.state.sizeAlias || '',
                quantity: rename.quantity || result && result.tokens && result.tokens.quantity || '1ks',
                vp: result && result.tokens && result.tokens.vp || api.getCurrentVpFromUrl() || 'bezVP',
                detector: result && result.detector || '',
                code: result && result.state && result.state.productCode || '',
                original: original || 'subor',
                ext
            });
            const tokens = {};
            Object.entries(rawTokens).forEach(([key, value]) => {
                tokens[key] = key === 'original' || key === 'ext'
                    ? api.sanitizeToken(value)
                    : api.sanitizeSnakeToken(value);
            });
            let proposed = api.renderTemplate(pattern, tokens)
                .replace(/_+/g, '_')
                .replace(/\s+/g, ' ')
                .replace(/_\s/g, ' ')
                .replace(/\s+\./g, '.')
                .replace(/^[_\s]+|[_\s]+$/g, '');
            if (!tokens.ext) proposed = proposed.replace(/\.$/, '');
            return {
                href: anchor.href,
                originalName: (original + (ext ? '.' + ext : '')),
                proposedName: proposed || tokens.original || 'subor'
            };
        });

        return { enabled: rename.enabled === true, pattern, files };
    }

    function detect(databaseState, context) {
        if (!context) return null;
        const database = databaseState && databaseState.database || { services: [] };
        const service = findService(database, context);
        setActiveServiceAliases(service);

        const detector = detectorFor(service, context);
        let result = null;
        if (detector) {
            try {
                result = detector.detect(context, api);
                if (result) result.detector = result.detector || detector.id;
            } catch (error) {
                console.error('[materialDetectorNext] detekcia zlyhala', detector.id, error);
            }
        } else if (service) {
            result = genericServiceResult(service, context);
        }

        if (result) {
            result = applySettings(result, context);
            result.renameDebug = buildRenameDebug(result);
        }
        const right = detectDeliveryDate();
        const zones = {
            left: result && result.left || '',
            right,
            top: result && result.top || '',
            bottom: result && result.bottom || ''
        };
        const detection = {
            service,
            result,
            zones,
            context,
            database: databaseState || null,
            detectedAt: new Date().toISOString()
        };
        window.__materialDetectorNextState = detection;
        return detection;
    }

    window.MaterialDetectorNextExtraction = {
        detect,
        findService,
        detectDeliveryDate,
        makeTokens
    };
})();
