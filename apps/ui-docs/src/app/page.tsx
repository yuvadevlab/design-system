import React from "react";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Palette,
  Terminal,
} from "lucide-react";
import {
  Button,
  Badge,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@yuva-devlab/ui";

export default function HomePage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="gap-1.5 py-1 text-xs">
            <Sparkles className="size-3 text-primary" />
            <span>Architecture v1.1.0 Released</span>
          </Badge>
          <Badge variant="outline" className="text-xs">
            Pure CSS • Zero Collision
          </Badge>
        </div>
        <h1 className="text-foreground text-4xl font-extrabold tracking-tight sm:text-5xl">
          DevLab UI Design System
        </h1>
        <p className="text-muted-foreground max-w-2xl text-base leading-relaxed sm:text-lg">
          Enterprise React UI primitives engineered with scoped{" "}
          <code className="text-primary font-mono text-sm">dl-*</code> CSS
          classes, multi-brand OKLCH theme tokens, and rich JSDoc documentation
          for flawless developer ergonomics.
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Button asChild size="lg" className="gap-2">
            <Link href="/components/button">
              <span>Explore Components</span>
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/docs/tokens">Inspect Design Tokens</Link>
          </Button>
          <Button asChild variant="ghost" size="lg">
            <a
              href="http://localhost:6006"
              target="_blank"
              rel="noopener noreferrer"
              className="gap-1.5"
            >
              <span>Open Storybook</span>
              <Terminal className="size-4 opacity-60" />
            </a>
          </Button>
        </div>
      </section>

      {/* Feature Pillar Cards */}
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <div className="bg-primary/10 text-primary mb-2 flex size-9 items-center justify-center rounded-lg">
              <ShieldCheck className="size-5" />
            </div>
            <CardTitle className="text-base">Zero Style Collisions</CardTitle>
            <CardDescription className="text-xs">
              Every component uses isolated, pure CSS classes mapped inside{" "}
              <code className="font-mono text-[11px]">
                @layer dl-components
              </code>{" "}
              so consuming apps never experience outline or flex collapses.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <div className="bg-primary/10 text-primary mb-2 flex size-9 items-center justify-center rounded-lg">
              <Palette className="size-5" />
            </div>
            <CardTitle className="text-base">Multi-Brand & OKLCH</CardTitle>
            <CardDescription className="text-xs">
              Switch seamlessly between OrchestrAI (Robotic Blue/Teal) and FinAI
              (Emerald Forest) with perceptual OKLCH color palettes and dark
              mode support.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <div className="bg-primary/10 text-primary mb-2 flex size-9 items-center justify-center rounded-lg">
              <Terminal className="size-5" />
            </div>
            <CardTitle className="text-base">Rich IntelliSense</CardTitle>
            <CardDescription className="text-xs">
              Every prop, variant, and component has comprehensive JSDoc
              annotations and copyable code examples directly in VS Code hover
              dialogs.
            </CardDescription>
          </CardHeader>
        </Card>
      </section>

      {/* Quickstart Installation Block */}
      <section className="space-y-4">
        <h2 className="text-foreground text-xl font-bold tracking-tight">
          Quick Installation
        </h2>
        <div className="border-border bg-muted/40 relative rounded-lg border p-4 font-mono text-xs">
          <div className="text-muted-foreground select-none pb-2 font-sans font-semibold uppercase tracking-wider text-[10px]">
            1. Install Packages
          </div>
          <code className="text-foreground">
            pnpm add @yuva-devlab/ui @yuva-devlab/tokens
          </code>
        </div>

        <div className="border-border bg-muted/40 relative rounded-lg border p-4 font-mono text-xs">
          <div className="text-muted-foreground select-none pb-2 font-sans font-semibold uppercase tracking-wider text-[10px]">
            2. Import Styles in globals.css
          </div>
          <pre className="text-foreground whitespace-pre">
            {`@import "tailwindcss";
@import "@yuva-devlab/tokens/preset.css";
@import "@yuva-devlab/tokens/themes/orchestrai.css";
@import "@yuva-devlab/ui/styles.css";`}
          </pre>
        </div>
      </section>
    </div>
  );
}
