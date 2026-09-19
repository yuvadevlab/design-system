---
"@yuva-devlab/ui": major
"@yuva-devlab/tokens": major
"@yuva-devlab/cli": minor
---

Migrate to Tailwind CSS 4 and remove legacy Vanilla Extract:

- `@yuva-devlab/ui`: Rebuilt component suite using Radix UI primitives, class-variance-authority (CVA), and Tailwind CSS 4 utilities compiled with tsup.
- `@yuva-devlab/tokens`: Refactored into a pure CSS package providing Tailwind CSS 4 `@theme inline` preset and OKLCH application themes (FinAI, OrchestrAI).
- `@yuva-devlab/cli`: Modernized component scaffolding templates to generate Tailwind + CVA components.
- Removed deprecated `@yuva-devlab/primitives` and `@yuva-devlab/colors` packages.
