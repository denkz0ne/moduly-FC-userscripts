# Repository instructions

These rules apply to the whole `moduly-FC-userscripts` repository. Follow them when editing, testing, releasing, or documenting userscripts. A direct instruction from the repository owner takes precedence.

## Git workflow: `main` only

- Always work directly on the local `main` branch and publish to `origin/main`.
- Never create, switch to, or use another branch or worktree for this repository. Do not route changes through a pull request.
- Before editing, inspect `git status --short --branch` and recent commits. Preserve unrelated changes and untracked files; never clean, reset, or stage them as part of another task.
- Before publishing, run `git fetch origin main`. Fast-forward local `main` when it is simply behind. If local and remote histories diverge, or a push is rejected, stop and report the problem; do not force-push or move the work to another branch.
- Stage only files belonging to the requested change. Review `git diff --cached` before committing.
- Use a short imperative commit subject that describes the change, for example `Fix TCMD area parsing` or `Add 49s material detector`.
- Push the reviewed commit to `origin main`. Do not amend published commits, force-push, or publish unrelated local work.
- For planned work, use one GitHub issue per affected installable userscript and link the issue in the commit or release notes. With this repository's main-only workflow, close the issue after the change is pushed; do not create a pull request.

## Files and userscript identity

- Installable Tampermonkey scripts live in the repository root and use the `.user.js` suffix.
- Shared implementation modules live in their relevant subdirectory, currently `detectors/`. A module is not an installable userscript unless it has its own userscript metadata and is intentionally distributed that way.
- Keep generated files, temporary test files, unrelated projects, and local-only notes out of published changes.
- Preserve each installed script's `@name`, `@namespace`, `@match`, grants, storage keys, and update identity unless the task explicitly calls for a migration. Changing these can make Tampermonkey treat a script as a different installation or change where it runs.
- Keep the existing encoding and line-ending convention of a file when editing it. Do not reformat an entire file for a small change.

## Required userscript header

Every installable `.user.js` must have a complete, valid metadata block at the top. Follow the style already used by neighboring scripts and include the applicable fields:

```js
// ==UserScript==
// @name         Human-readable script name
// @namespace    faxcopy-userscripts
// @author       mato e.
// @version      1.0
// @description  Short description of the script
// @updateURL    https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/main/Example.user.js
// @downloadURL  https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/main/Example.user.js
// @match        https://moduly.faxcopy.sk/path/where/it/runs/*
// @grant        none
// @require      https://raw.githubusercontent.com/denkz0ne/moduly-FC-userscripts/main/path/to/module.js
// @run-at       document-end
// ==/UserScript==
// FC Userscripts ecosystem: https://github.com/denkz0ne/moduly-FC-userscripts
```

- Include only the metadata that applies. Use the least-permissive `@grant` set and narrow `@match` patterns to the pages that need the script.
- Both update and download URLs must identify the same script file in this repository's `main` branch. For new or touched metadata, use the raw `main` URL form shown above. Existing working URL forms may be retained if they resolve to the same `main` file.
- Each `@require` must point to a real, intentionally maintained module or an explicitly documented, immutable dependency. Never point a new dependency at a feature branch, a personal fork, or a missing file.
- Keep metadata order and indentation consistent with nearby scripts. Ensure the closing `==/UserScript==` marker is present.

## Versioning and updates

- Increase `@version` for every published change that affects users, including bug fixes. Never publish a version equal to or lower than the installed version when an update is intended.
- Follow the script's existing version format and increment the version monotonically. Do not reset version numbers during refactors or filename changes.
- If the script mirrors its version in runtime code (for example `window.labelRegeneratorV2Version`), update both values together.
- If an update or download URL, filename, namespace, or script identity must change, treat it as a migration: document the reason and include a direct manual-reinstall link in the issue or release notes.
- Tampermonkey's update check uses the metadata version and URL. Before diagnosing “no update available,” compare the installed version with the `@version` served by the current `main` source. GitHub Raw can briefly serve cached content; if the `main` URL looks stale, verify the same file at the current `main` commit before changing metadata.
- Manual installation links should point to the script's raw file on `main`. Use an immutable commit URL only when a user needs a verified snapshot or GitHub's `main` Raw cache is stale; that snapshot does not replace the normal `main` update URL.

## Dependencies and load order

- Treat `@require` entries as runtime dependencies. Verify that every URL resolves, the target exists in the intended revision, and the script does not rely on an undeclared global or on accidental load timing.
- `@require` files execute in metadata order before the main userscript. Put providers before consumers and initialization/control-panel modules after the API and detector registrations they use.
- Avoid dependency cycles. A reusable module should not import its entry-point userscript. Comments inside a required JavaScript file are not a substitute for listing the dependency on the installable entry point.
- A cross-userscript global is not guaranteed to exist just because another userscript is installed. If an integration is optional, check for the global and keep a working fallback. If it is mandatory, make the dependency explicit and fail clearly when it is unavailable.
- The material detector entry point depends on `detectors/detector_api.js`, then its detector modules, and then `detectors/control_panel.js`. The API must exist before detectors call `registerDetector`; the control panel expects the API and may optionally use `FCUserscripts` from `FCActionPanel.user.js`.
- `labelRegeneratorV2.user.js` currently has a deliberate chain of immutable, commit-pinned historical layers followed by `labelInstantPrint.beta.js`. The historical layers contain working label rendering, the `L` shortcut, and subsequent fixes; they are not disposable duplicate imports. Do not remove, reorder, or replace them unless their functionality has first been consolidated into maintained modules and regression checks cover `L`, `K`, label readiness, popup printing, and the editor controls.
- When changing a dependency or its order, inspect the complete chain, test the provider/consumer contract, and update all affected entry points in the same change. Do not assume that a change to a required module needs no update to its userscript consumer.

## Code and testing

- Make the smallest focused change that fixes the issue. Preserve existing behavior and public globals unless the task requires a change.
- JavaScript uses browser APIs and may not be executable as a standalone Node program. At minimum, run `node --check` on all changed `.js` files; for a broad or dependency-sensitive change, run it on all repository JavaScript files.
- Test the affected behavior, not just syntax. Use small repeatable probes for parsers and dependency contracts. For detector changes, smoke-load modules in declared order and verify registrations. For shortcut changes, verify the key listener, page/typing guards, and the called print action.
- Verify every changed `@updateURL`, `@downloadURL`, and `@require` against the current `main` revision. Check HTTP status and, when caching is suspected, compare the served version/content with the immutable current-main commit URL.
- Run `git diff --check`, inspect the final diff, and confirm only intended files are staged before committing.
- State clearly what was verified. A syntax check or mocked module smoke test does not prove the script works on the live Moduly page or that a physical print completed; claim live behavior only after observing it.

## Adding a detector module

1. Add the implementation under `detectors/` and follow `detectors/detector_template.js` and the existing detector API contract.
2. Register through `window.MaterialDetectorAPI.registerDetector()`; do not duplicate shared parsing, normalization, alias, or storage logic that belongs in the API.
3. Add its raw `main` URL to `materialDetector.user.js` after `detector_api.js` and before `control_panel.js`.
4. Verify the module URL, registration, syntax, and representative product-code behavior before committing.
