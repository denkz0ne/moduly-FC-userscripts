# Material detector modules

`materialDetector.user.js` is the core/router. It always detects the delivery date and writes the final `TM_*` variables for `labelRegenerator`.

Product-specific scraping lives in detector files. A detector is selected by the currently opened VP internal code, not by priority.

## Branch testing

This branch uses `@require` URLs pointing to:

`codex/materialdetector-core`

Disable the production `materialDetector` in Tampermonkey before testing this branch.

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

## Current modules

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