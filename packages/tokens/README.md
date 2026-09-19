# 🎨 @yuva-devlab/tokens

[![npm version](https://img.shields.io/npm/v/@yuva-devlab/tokens.svg)](https://www.npmjs.com/package/@yuva-devlab/tokens)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

> Tailwind CSS 4 preset and design token theme bridge for the Yuva DevLab Design System.

## Features

- 🎨 **Tailwind CSS 4 Preset** - Native `@theme inline` mappings bridging tokens to Tailwind utilities
- 🌓 **Modern OKLCH Color Tokens** - Clean, perceptual contrast in light and dark modes
- 🚀 **Zero-Config Theming** - Drop-in theme presets for applications (FinAI, OrchestrAI)
- 🎯 **Pure CSS** - Zero runtime overhead and zero JS dependencies

## Installation

```bash
# npm
npm install @yuva-devlab/tokens

# yarn
yarn add @yuva-devlab/tokens

# pnpm
pnpm add @yuva-devlab/tokens
```

## Usage with Tailwind CSS 4

In your application's global CSS (e.g. `globals.css`):

```css
@import "tailwindcss";
@import "@yuva-devlab/tokens/preset.css";

/* Include your target app theme */
@import "@yuva-devlab/tokens/themes/finai.css";
/* or @import "@yuva-devlab/tokens/themes/orchestrai.css"; */
```

## Available Themes

- `@yuva-devlab/tokens/themes/finai.css`: Emerald & forest-green palette optimized for financial clarity and trust.
- `@yuva-devlab/tokens/themes/orchestrai.css`: Modern high-contrast tech palette for orchestration dashboards.

## License

MIT © Yuva Devlab
