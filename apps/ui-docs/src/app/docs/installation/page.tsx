"use client";

import React from "react";
import { Badge } from "@yuva-devlab/ui";

export default function InstallationPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-2 border-b border-border pb-6">
        <Badge variant="secondary" className="text-xs">
          Guide
        </Badge>
        <h1 className="text-3xl font-extrabold tracking-tight text-foreground">
          Installation & Setup
        </h1>
        <p className="text-muted-foreground text-sm max-w-2xl">
          Complete guide to integrating DevLab UI and tokens into your Next.js
          or React applications.
        </p>
      </div>

      {/* Step 1 */}
      <section className="space-y-3">
        <h2 className="text-lg font-bold text-foreground">
          1. Install Dependencies
        </h2>
        <div className="border border-border bg-muted/40 rounded-lg p-4 font-mono text-xs">
          <code>pnpm add @yuva-devlab/ui @yuva-devlab/tokens</code>
        </div>
      </section>

      {/* Step 2 */}
      <section className="space-y-3">
        <h2 className="text-lg font-bold text-foreground">
          2. Configure globals.css
        </h2>
        <p className="text-xs text-muted-foreground">
          Import Tailwind CSS, the token preset, your brand theme, and component
          styles:
        </p>
        <div className="border border-border bg-muted/40 rounded-lg p-4 font-mono text-xs overflow-x-auto">
          <pre className="whitespace-pre">
            {`@import "tailwindcss";
@import "@yuva-devlab/tokens/preset.css";
@import "@yuva-devlab/tokens/themes/orchestrai.css";
@import "@yuva-devlab/ui/styles.css";

@custom-variant dark (&:where(.dark, .dark *));

@layer base {
  * {
    border-color: var(--border);
  }
  body {
    background-color: var(--background);
    color: var(--foreground);
    font-family: var(--font-sans);
  }
}`}
          </pre>
        </div>
      </section>

      {/* Step 3 */}
      <section className="space-y-3">
        <h2 className="text-lg font-bold text-foreground">
          3. Use Components with Full Type Safety
        </h2>
        <div className="border border-border bg-muted/40 rounded-lg p-4 font-mono text-xs overflow-x-auto">
          <pre className="whitespace-pre">
            {`import { Button, Input, Badge, Dialog } from "@yuva-devlab/ui";

export default function MyPage() {
  return (
    <div className="p-6 space-y-4">
      <Badge variant="success">Connected</Badge>
      <Input placeholder="Enter prompt..." />
      <Button variant="default">Deploy Agent</Button>
    </div>
  );
}`}
          </pre>
        </div>
      </section>
    </div>
  );
}
