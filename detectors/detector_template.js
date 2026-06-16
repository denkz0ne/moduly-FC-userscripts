/*
 * Material detector module template.
 *
 * How to use:
 * 1. Copy this file to detectors/detector_<internal_code>.js.
 * 2. Rename DETECTOR_ID and implement match().
 * 3. Build the returned aliases inside detect().
 * 4. Add one @require line in materialDetector.user.js.
 *
 * This template intentionally returns before registering anything, so it is safe
 * even if somebody accidentally loads it in Tampermonkey.
 */
(function () {
    'use strict';

    const TEMPLATE_ONLY = true;
    if (TEMPLATE_ONLY) return;

    const api = window.MaterialDetectorAPI;
    if (!api) return;

    const DETECTOR_ID = 'example_internal_code';

    api.registerDetector({
        id: DETECTOR_ID,

        match(internalCode, context) {
            const code = String(internalCode || '').toLowerCase();

            // Example exact match:
            // return code === '41tv';

            // Example prefix/regex match:
            // return /^48r(p)?\d{4,6}$/.test(code);

            return code === DETECTOR_ID;
        },

        detect(context) {
            // Common helpers from detector_api.js.
            const params = api.parseZdParams();
            const sizeAlias = api.detectUniversalSizeAlias();
            const quantity = '1ks';

            // Read product-specific values here. Keep aliases/rules in this file.
            // const paper = api.getParamValueByLabelContains(params, ['papier', 'material']);
            // const alias = api.sanitizeToken(paper);

            const left = '';
            const top = '';
            const bottom = '';
            const outputAlias = left || DETECTOR_ID;

            return {
                detector: DETECTOR_ID,

                // Label zones. materialDetector core writes these to TM_*.
                left,
                top,
                bottom,

                // Download rename metadata used by the core download hook.
                rename: {
                    alias: outputAlias,
                    sizeAlias,
                    quantity
                },

                // Debug/state object stored by the core for inspection and reuse.
                state: {
                    detector: DETECTOR_ID,
                    productCode: context.internalCode,
                    outputAlias,
                    sizeAlias,
                    topBadge: top,
                    bottomBadge: bottom,
                    params: {
                        sizeAlias,
                        quantity
                    }
                },

                debug: {
                    params
                }
            };
        }
    });
})();
