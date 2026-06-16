# Material detector modules

`materialDetector.user.js` is the core/router. It always detects the delivery date and writes the final `TM_*` variables for `labelRegenerator`.

Product-specific scraping lives in detector files. A detector is selected by the currently opened VP internal code, not by priority.

## Branch testing

This branch uses `@require` URLs pointing to:

`codex/materialdetector-core`

Disable the production `materialDetector` in Tampermonkey before testing this branch.

## Adding a detector

Yes: for a new product family you should only need a new detector file plus one `@require` line.

1. Copy `detectors/detector_template.js` to `detectors/detector_<internal_code>.js`.
2. Change `DETECTOR_ID` to a stable detector name, for example `84tv` or `48r_fotoobrazy`.
3. Implement `match(internalCode, context)` so it returns `true` only for the internal codes handled by that detector.
4. Implement `detect(context)` and build all aliases, badges, and returned texts inside that detector.
5. Add the new file to the userscript header in `materialDetector.user.js`:

```js
// @require      https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/codex/materialdetector-core/detectors/detector_<internal_code>.js
```

No change in `labelRegenerator.user.js` should be needed. It reads only the final `TM_testoLeft`, `TM_testoRight`, `TM_top`, and `TM_bottom` values written by the core.

A core/API change is needed only when the new detector needs a shared helper that should be reusable by multiple detectors.

## Detector contract

A detector registers itself through `window.MaterialDetectorAPI.registerDetector()`:

```js
api.registerDetector({
    id: 'example',
    match(internalCode, context, api) {
        return internalCode === 'example';
    },
    detect(context, api) {
        return {
            detector: 'example',
            left: 'text for TM_testoLeft',
            top: 'optional TM_top',
            bottom: 'optional TM_bottom',
            rename: {
                alias: 'download alias',
                sizeAlias: '30x20_cm',
                quantity: '1ks'
            },
            state: {
                detector: 'example',
                productCode: context.internalCode,
                outputAlias: 'download alias',
                sizeAlias: '30x20_cm',
                params: {}
            },
            debug: {}
        };
    }
});
```

Required behavior:

- `match()` chooses by the currently opened internal code.
- `detect()` owns all product-specific scraping rules and aliases.
- `left` becomes `TM_testoLeft`.
- `top` becomes `TM_top`.
- `bottom` becomes `TM_bottom`.
- `rename.alias`, `rename.sizeAlias`, and `rename.quantity` are used by the download rename hook.
- `state` is for inspection/reuse; keep `outputAlias`, `sizeAlias`, `topBadge`, `bottomBadge`, and `params` useful when possible.

## Current modules

- `detector_template.js`: safe copy-and-edit starting point for new detectors
- `detector_fotoobrazy.js`: fotoobrazy and HEXA fotoobrazy
  - `48rXXYY`, `48rXXXYYY`
  - `48rpXXYY`, `48rpXXXYYY`
  - `48fhXXYY`, `48fhXXXYYY`
  - `48xk`, `48x1`, `48x4`, `48x6`
- `detector_41tv.js`: `41tv`
- `detector_42fotoweb.js`: `42foto/web`, `48foto/web`
- `detector_common_size.js`: fallback only when no internal code is detected

## Core responsibilities

- collect page context
- identify currently opened internal code
- route to exactly one detector
- detect delivery date for every VP
- write `TM_testoLeft`, `TM_testoRight`, `TM_top`, `TM_bottom`
- keep per-tab state for download renaming

## API responsibilities

`detector_api.js` does not contain product detection rules. It only provides common services:

- text cleanup and normalization
- VP id lookup
- material alias config and helpers
- current internal-code extraction from product rows
- ZD parameter parsing
- generic size parsing for rename/fallback
- detector registration and routing helpers

`detector_common_size.js` is not a product detector. It is a final fallback for orders where no internal code is recognized but a usable size is present.
