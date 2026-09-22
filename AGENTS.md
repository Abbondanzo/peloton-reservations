# AGENTS.md

Instructions for coding agents working in this repository. Follow them on every change.

Before you change frontend UI, the styled-components theme, routes, alert screens, data models, Firebase paths, or Realtime Database writes, read the matching playbook in `llms/` and follow it:

| Work                                                                                           | Playbook                               |
| ---------------------------------------------------------------------------------------------- | -------------------------------------- |
| Theme, component styling, routes, alert editor, alerts list, accessibility, data models, paths | [`llms/frontend.md`](llms/frontend.md) |
| Realtime Database writes                                                                       | [`llms/firebase.md`](llms/firebase.md) |

## Stack

- **Frontend**: React + TypeScript + Vite + styled-components
- **State**: Redux Toolkit + RTK Query for Peloton API
- **Backend**: Firebase (auth, realtime database), Node.js
- **Monorepo**: pnpm workspaces — `frontend/`, `backend/`, `shared/`, `translations/`
- **Routing**: React Router DOM with hash-based routing
- **PWA**: vite-plugin-pwa, service worker for push notifications

## Package manager

This repo uses **pnpm** (`pnpm@10.24.0`) with workspaces. Run commands from the repo root.

| Package      | Path                    |
| ------------ | ----------------------- |
| Frontend     | `frontend/`             |
| Backend      | `backend/`              |
| Shared types | `shared/`               |
| Translations | `backend/translations/` |

Install dependencies with `pnpm install`. Root scripts (`pnpm prettier`, `pnpm lint`, `pnpm typecheck`, `pnpm test`) fan out across the workspace. A single package is `pnpm --filter <package> <script>`.

## Checks

Run these from the repo root. CI runs format, lint, typecheck, and test on every PR, so a failure here is a failure there.

Commit check sequence, in order:

1. `pnpm prettier` — format the repo in place
2. `pnpm lint` — ESLint across the workspace
3. `pnpm typecheck` — type-check every package, test files included
4. `pnpm test` — Vitest across `shared`, `backend`, and `frontend`

| Command               | What it does                                       |
| --------------------- | -------------------------------------------------- |
| `pnpm prettier`       | Formats the repo in place                          |
| `pnpm prettier:check` | Verifies formatting without writing (what CI runs) |
| `pnpm lint`           | ESLint across the workspace                        |
| `pnpm typecheck`      | Type-checks every package, test files included     |
| `pnpm test`           | Vitest across `shared`, `backend` and `frontend`   |

**Always run `pnpm prettier` and `pnpm lint` before committing.** Both were left unenforced for a while and drifted; they are CI gates now.

Two things to know:

- `pnpm prettier` rewrites the **whole repo**, not just your changes. If it touches files unrelated to your work, leave those out of your commit.
- Nothing needs `shared` built first. Typecheck, lint and test all resolve `shared` from its source, so they work from a fresh clone. The only thing that produces `shared/build` is `pnpm --filter backend build`, which runs it as its first step because the compiled backend requires it at runtime. The frontend bundles `shared` from source and never needs it.

## Repo conventions

### Git and pull requests

Both commit messages and PR titles must use the same semantic prefix format: `[feat]`, `[fix]`, `[chore]`, `[refactor]`, `[docs]`, `[test]`, `[style]`

- Commit example: `[fix] Fix navbar overlapping sticky alert simulation day headers`
- PR title example: `[fix] Fix navbar overlapping sticky alert simulation day headers`

When running `gh pr create`, always include the prefix in the `--title` argument, e.g. `--title "[fix] Fix PWA pull-to-refresh spinner getting stuck"`.

### Backend versioning

Every PR that contains a backend change (any file under `backend/` or `shared/`) **must** include a version bump and changelog entry as part of the same PR. Do this before committing/pushing the rest of the changes:

1. Increment the patch version (`0.0.x → 0.0.x+1`) in **all three** of these files:
   - `backend/package.json` — `"version"` field
   - `backend/config.yaml` — `version:` field
   - `backend/CHANGELOG.md` — prepend a new `## 0.0.x` section describing the change

The changelog entry should be written in plain English, one bullet per logical change, describing _what changed behaviorally_ for the user (not a list of files touched, type names, or method names). Only include user-facing or behavioral changes — omit internal build fixes, type corrections, and refactors that don't affect runtime behavior.
