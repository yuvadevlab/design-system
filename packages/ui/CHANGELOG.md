# @yuva-devlab/ui

## 1.0.1

### Patch Changes

- 0bbe683: Add `cursor-pointer` and primary focus outline ring styles to interactive components (`Button`, `Tabs`, `Select`, `Checkbox`, `DropdownMenu`, `Breadcrumb`).

## 1.0.0

### Major Changes

- b622a41: Migrate to Tailwind CSS 4 and remove legacy Vanilla Extract:

  - `@yuva-devlab/ui`: Rebuilt component suite using Radix UI primitives, class-variance-authority (CVA), and Tailwind CSS 4 utilities compiled with tsup.
  - `@yuva-devlab/tokens`: Refactored into a pure CSS package providing Tailwind CSS 4 `@theme inline` preset and OKLCH application themes (FinAI, OrchestrAI).
  - `@yuva-devlab/cli`: Modernized component scaffolding templates to generate Tailwind + CVA components.
  - Removed deprecated `@yuva-devlab/primitives` and `@yuva-devlab/colors` packages.

### Minor Changes

- cb8e920: If adding the "use client"; banner is a new feature that enables compatibility with Next.js/RSC.

## 0.2.0

### Minor Changes

- 61f9888: Standardize form inputs & add semantic layout components.
  - Added new Divider component.
  - Added semantic layout components: Header, Footer, Main, Section, Nav, Aside,
    Article.
  - Standardized transitions and focus styles for Select, Checkbox, Radio,
    Switch, Input.

### Patch Changes

- Updated dependencies [61f9888]
  - @yuva-devlab/primitives@0.2.0

## 0.1.2

### Patch Changes

- 38c0267: Migrate CLI to ESM, replace StyleX with Vanilla Extract, and
  standardize documentation

  CLI now uses ES modules for better compatibility with modern tools like Chalk
  v5. Component templates have been updated to use Vanilla Extract instead of
  StyleX, matching the actual project implementation. All package READMEs now
  show consistent examples for npm, yarn, and pnpm.

  Breaking: CLI requires Node.js 18+ for ESM support

- Updated dependencies [38c0267]
  - @yuva-devlab/primitives@0.1.2
  - @yuva-devlab/colors@0.1.2
  - @yuva-devlab/tokens@0.1.2

## 0.1.1

### Patch Changes

- 2cc8dcf: Complete documentation rewrite with comprehensive examples and API
  reference
- Updated dependencies [2cc8dcf]
  - @yuva-devlab/primitives@0.1.1
  - @yuva-devlab/colors@0.1.1
  - @yuva-devlab/tokens@0.1.1

## 0.1.0

### Minor Changes

- 16c5cc8: Initial Alpha release of the complete Yuva Devlab UI Library
  ecosystem. Includes:
  - Headless Radix Primitives
  - Vanilla Extract Styling System
  - Comprehensive Design Tokens
  - Modern React Components
  - Scalable Monorepo Configuration
  - CLI tool for component scaffolding

### Patch Changes

- Updated dependencies [16c5cc8]
  - @yuva-devlab/tokens@0.1.0
  - @yuva-devlab/primitives@0.1.0
  - @yuva-devlab/colors@0.1.0
