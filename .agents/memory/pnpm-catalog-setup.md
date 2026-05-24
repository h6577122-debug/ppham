---
name: pnpm workspace catalog setup for standalone package
description: When a package uses catalog: version specifiers but no pnpm-workspace.yaml exists, pnpm install fails.
---

## Rule
If `pnpm install` fails with `ERR_PNPM_CATALOG_ENTRY_NOT_FOUND_FOR_SPEC`, create `pnpm-workspace.yaml` at the workspace root with:
1. `packages: ["."]`
2. `onlyBuiltDependencies: [esbuild]`
3. `catalog:` section with all pinned versions

Also remove any missing catalog entries (e.g. `@replit/vite-plugin-cartographer`, `@workspace/api-client-react`) from `package.json`.

**Why:** When the Replit monorepo is simplified to a single artifact at the workspace root, the old `pnpm-workspace.yaml` with catalog: definitions gets removed, but package.json still references `catalog:` entries.

**Also:** pnpm 11 ignores the `pnpm` key in package.json — settings like `onlyBuiltDependencies` must go in `pnpm-workspace.yaml`, not `package.json`.
