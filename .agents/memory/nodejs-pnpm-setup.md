---
name: Node.js + pnpm version compatibility
description: pnpm 11 requires Node.js v22+; the default Replit Node module may be v20 which is incompatible.
---

## Rule
When the workflow fails with `Error [ERR_UNKNOWN_BUILTIN_MODULE]: No such built-in module: node:sqlite`, pnpm is too new for the installed Node.js version.

**How to apply:**
1. Call `installProgrammingLanguage({ language: "nodejs-22" })` via code_execution.
2. Then run `pnpm install` to restore the virtual store at `/home/node_modules/.pnpm/`.
3. Restart the workflow.

**Why:** pnpm 11.x uses `node:sqlite` which is only available in Node.js v22.13+. The global pnpm in Replit may get updated automatically, breaking Node.js v20 environments.
