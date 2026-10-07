# moduly-FC-userscripts

## Contributing userscripts

- Before changing a userscript, create a new GitHub Issue for that change. Use one issue per affected userscript.
- Work directly on `main`; this repository does not use feature branches or pull requests. Fetch `origin/main` before publishing and push the reviewed commit to `origin/main`.
- Link the issue from the commit or release notes and close it after the change is pushed.
- Preserve existing Tampermonkey identity and update metadata unless the issue explicitly tracks a migration. If an update path changes, include the manual reinstall URL in the issue or release notes.
- Keep unrelated projects, local notes, and generated files out of userscript changes.

## Development rules

See [AGENTS.md](AGENTS.md) for the complete repository workflow, userscript headers, versioning, dependency order, testing, and release rules. In particular, do not remove or reorder `labelRegeneratorV2`'s pinned historical dependencies without replacing and testing the features they provide, including the `L` print shortcut.
