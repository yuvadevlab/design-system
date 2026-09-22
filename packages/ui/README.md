# 📦 @yuva-devlab/ui

[![npm version](https://img.shields.io/npm/v/@yuva-devlab/ui.svg)](https://www.npmjs.com/package/@yuva-devlab/ui)
[![npm downloads](https://img.shields.io/npm/dm/@yuva-devlab/ui.svg)](https://www.npmjs.com/package/@yuva-devlab/ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

> A production-ready, fully-typed React component library built with Vanilla
> Extract, featuring a natural design system and comprehensive accessibility
> support.

## Features

- 🎨 **Natural Design System** - Organic color palettes inspired by Material
  Design 3
- 🔒 **Type-Safe** - Full TypeScript support with comprehensive type definitions
- 🎭 **Zero-Runtime CSS** - Vanilla Extract compiles styles at build time
- ♿ **Accessible** - Built on Radix UI primitives with ARIA compliance
- 🧩 **Polymorphic** - Components support `as` prop for semantic flexibility
- 🎯 **Tree-Shakeable** - Import only what you need
- 📦 **Monorepo Architecture** - Clean separation of tokens, primitives, and
  components

## Installation

```bash
# npm
npm install @yuva-devlab/ui

# yarn
yarn add @yuva-devlab/ui

# pnpm
pnpm add @yuva-devlab/ui
```

### Peer Dependencies

```bash
# npm
npm install react@^19.2.0 react-dom@^19.2.0

# yarn
yarn add react@^19.2.0 react-dom@^19.2.0

# pnpm
pnpm add react@^19.2.0 react-dom@^19.2.0
```

## Quick Start

```tsx
import { Button, Input, Stack, Container } from "@yuva-devlab/ui";
import "@yuva-devlab/ui/styles.css";

function App() {
  return (
    <Container size="lg">
      <Stack gap="md">
        <Input label="Email" placeholder="you@example.com" type="email" />
        <Button variant="primary" size="md">
          Sign In
        </Button>
      </Stack>
    </Container>
  );
}
```

## Available Components

### Form Components

- **Button** - Primary, secondary, tertiary variants with loading states
- **Input** - Text input with label, error states, and helper text

### Typography

- **Typography** - Polymorphic text component supporting h1-h6, p, span, etc.

### Layout Components

- **Box** - Polymorphic container with spacing utilities
- **Flex** - Flexbox layout with alignment and gap props
- **Grid** - CSS Grid layout with responsive columns
- **Stack** - Vertical/horizontal stacking with consistent spacing
- **Container** - Responsive max-width wrapper (sm, md, lg, xl, 2xl)

### Coming Soon

- Select (Radix UI based)
- Switch (Radix UI based)
- Checkbox (Radix UI based)
- Radio (Radix UI based)
- InputNumber

## Component Examples

### Button

```tsx
import { Button } from "@yuva-devlab/ui";

// Variants
<Button variant="primary">Primary Action</Button>
<Button variant="secondary">Secondary Action</Button>
<Button variant="tertiary">Tertiary Action</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>

// States
<Button loading>Loading...</Button>
<Button disabled>Disabled</Button>

// Polymorphic
<Button as="a" href="/home">Link Button</Button>
```

### Layout System

```tsx
import { Container, Stack, Flex, Box } from "@yuva-devlab/ui";

<Container size="xl">
  <Stack gap="lg">
    <Flex align="center" justify="between">
      <Box p="md">Logo</Box>
      <Box>Navigation</Box>
    </Flex>

    <Grid cols={{ base: 1, md: 2, lg: 3 }} gap="md">
      <Box p="lg">Card 1</Box>
      <Box p="lg">Card 2</Box>
      <Box p="lg">Card 3</Box>
    </Grid>
  </Stack>
</Container>;
```

## Styling & Brand Theming

### 1. Global Styles Setup

Import the UI stylesheet in your root layout:

```tsx
import "@yuva-devlab/ui/styles.css";
```

Or import specific brand themes directly:

```css
@import "@yuva-devlab/ui/styles.css";
@import "@yuva-devlab/ui/themes/finai.css";
```

### 2. Brand & Theme Provider (`ConfigProvider`)

Wrap your application with `ConfigProvider` (or `ThemeProvider`) and pass your `brand`:

```tsx
import { ConfigProvider } from "@yuva-devlab/ui";

export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ConfigProvider brand="finai" defaultTheme="system">
      {children}
    </ConfigProvider>
  );
}
```

The provider sets the appropriate `data-brand` and `data-theme` attributes on `<html>`, instantly activating the scoped design tokens for that brand without loading or exposing styles of other brands!

---

## Development

```bash
# Install dependencies
pnpm install

# Build the library
pnpm --filter @yuva-devlab/ui build

# Run tests
pnpm --filter @yuva-devlab/ui test

# Type check
pnpm --filter @yuva-devlab/ui typecheck
```

## Documentation

- **Storybook**: Run `pnpm dev:docs` to view interactive component documentation
- **Playground**: Run `pnpm dev:playground` to test components in a live

## License

MIT © Yuva Devlab
