# 🧩 devlab-shared

[![npm version (ui)](https://img.shields.io/npm/v/@yuva-devlab/ui.svg)](https://www.npmjs.com/package/@yuva-devlab/ui)
[![npm version (logger)](https://img.shields.io/npm/v/@yuva-devlab/logger.svg)](https://www.npmjs.com/package/@yuva-devlab/logger)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

A modular, scalable monorepo hosting shared packages, components, utilities, and development tooling for the **Yuva DevLab** ecosystem.

---

## 📦 Packages Overview

### 🚀 Public Packages (Published to npm)

| Package                                  | Version | Description                                                                                             |
| :--------------------------------------- | :------ | :------------------------------------------------------------------------------------------------------ |
| [`@yuva-devlab/ui`](packages/ui)         | `1.0.1` | Accessible, styled React component library powered by Radix UI, Tailwind CSS, and brand ConfigProvider. |
| [`@yuva-devlab/logger`](packages/logger) | `1.0.0` | Lightweight isomorphic logger and Express HTTP request logging middleware.                              |

### 🔒 Internal Packages (Private / Non-Publishable)

| Package                                                               | Description                                                          |
| :-------------------------------------------------------------------- | :------------------------------------------------------------------- |
| [`@yuva-devlab/cli`](packages/cli)                                    | Internal CLI tooling and scaffolding commands.                       |
| [`@yuva-devlab/eslint-config`](packages/config/eslint-config)         | Shared ESLint configurations (flat config, React, TypeScript, Node). |
| [`@yuva-devlab/prettier-config`](packages/config/prettier-config)     | Shared Prettier formatting configuration.                            |
| [`@yuva-devlab/typescript-config`](packages/config/typescript-config) | Shared TypeScript compiler configurations (`base.json`).             |

---

## 📁 Repository Structure

```bash
devlab-shared/
├── .changeset/         # Changesets release configuration & pending changesets
├── .husky/             # Git hooks configuration (pre-commit, commit-msg)
├── .vscode/            # Shared editor settings
├── packages/           # Monorepo packages
│   ├── ui/             # [PUBLIC] @yuva-devlab/ui (Components, Styles, Themes)
│   ├── logger/         # [PUBLIC] @yuva-devlab/logger
│   ├── cli/            # [INTERNAL] @yuva-devlab/cli
│   └── config/         # [INTERNAL] Shared dev configs
│       ├── eslint-config/
│       ├── prettier-config/
│       └── typescript-config/
├── eslint.config.js    # Root ESLint configuration
├── prettier.config.js  # Root Prettier configuration
├── package.json        # Root workspace configuration
├── pnpm-lock.yaml      # pnpm lockfile
├── pnpm-workspace.yaml # pnpm workspace definition
├── tsconfig.json       # Root TypeScript project references
└── turbo.json          # Turborepo task pipelines
```

---

## 🚀 Workspace Scripts

Commands are orchestrated with **Turborepo** with intelligent caching.

### Primary Workflows

| Command          | Description                                                              |
| :--------------- | :----------------------------------------------------------------------- |
| `pnpm build`     | Build all packages across the workspace                                  |
| `pnpm dev`       | Run development watch mode for packages                                  |
| `pnpm check`     | Quick validation: Lint + Typecheck + Test                                |
| `pnpm validate`  | Comprehensive validation: Format check + Lint + Typecheck + Build + Test |
| `pnpm fix`       | Automatically fix formatting and linting issues                          |
| `pnpm typecheck` | Run TypeScript compiler checks across all workspaces                     |
| `pnpm lint`      | Run ESLint checks                                                        |
| `pnpm format`    | Reformat all code using Prettier                                         |
| `pnpm clean`     | Remove all build outputs (`dist`), `.turbo`, and caches                  |

---

## 🏷️ Release & Changesets Workflow

This monorepo uses **Changesets** for automated semantic versioning and publishing to npm.

- Only **public packages** (`@yuva-devlab/ui`, `@yuva-devlab/logger`, `@yuva-devlab/tokens`) are published.
- Internal packages are marked with `"private": true`.

### Creating a Changeset

When making changes to public packages, create a changeset:

```bash
pnpm changeset
```

Select the affected public package (`@yuva-devlab/ui` or `@yuva-devlab/logger`), choose the bump type (`patch`, `minor`, `major`), and enter a release summary.

---

## 📜 License

MIT © Yuva DevLab
