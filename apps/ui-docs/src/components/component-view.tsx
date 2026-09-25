"use client";

import React, { useState } from "react";
import { Copy, Check, Monitor, Tablet, Smartphone } from "lucide-react";
import { Button, Badge } from "@yuva-devlab/ui";

export interface PropDefinition {
  name: string;
  type: string;
  default?: string;
  description: string;
}

export interface ComponentViewProps {
  title: string;
  description: string;
  category: string;
  preview: React.ReactNode;
  codeSnippet: string;
  propsList: PropDefinition[];
  cssClasses?: { name: string; description: string }[];
}

export function ComponentView({
  title,
  description,
  category,
  preview,
  codeSnippet,
  propsList,
  cssClasses,
}: ComponentViewProps) {
  const [copied, setCopied] = useState(false);
  const [viewport, setViewport] = useState<"desktop" | "tablet" | "mobile">(
    "desktop",
  );

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const viewportWidth =
    viewport === "mobile"
      ? "max-w-sm"
      : viewport === "tablet"
        ? "max-w-xl"
        : "w-full";

  return (
    <div className="space-y-10">
      {/* Header Info */}
      <div className="space-y-2 border-b pb-6 border-border">
        <div className="flex items-center gap-2">
          <Badge
            variant="secondary"
            className="text-xs uppercase tracking-wider"
          >
            {category}
          </Badge>
          <Badge variant="outline" className="text-xs">
            Pure CSS Scoped
          </Badge>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-foreground">
          {title}
        </h1>
        <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl">
          {description}
        </p>
      </div>

      {/* Interactive Live Canvas */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-foreground">
            Interactive Preview
          </h3>
          <div className="flex items-center gap-1 border border-border rounded-lg p-0.5 bg-muted/30">
            <Button
              size="icon"
              variant={viewport === "desktop" ? "secondary" : "ghost"}
              onClick={() => setViewport("desktop")}
              className="size-7"
              aria-label="Desktop Viewport"
            >
              <Monitor className="size-3.5" />
            </Button>
            <Button
              size="icon"
              variant={viewport === "tablet" ? "secondary" : "ghost"}
              onClick={() => setViewport("tablet")}
              className="size-7"
              aria-label="Tablet Viewport"
            >
              <Tablet className="size-3.5" />
            </Button>
            <Button
              size="icon"
              variant={viewport === "mobile" ? "secondary" : "ghost"}
              onClick={() => setViewport("mobile")}
              className="size-7"
              aria-label="Mobile Viewport"
            >
              <Smartphone className="size-3.5" />
            </Button>
          </div>
        </div>

        {/* Canvas Display */}
        <div className="border border-border rounded-xl bg-card/60 p-8 flex items-center justify-center min-h-55 transition-all overflow-hidden shadow-xs">
          <div
            className={`${viewportWidth} transition-all duration-200 flex justify-center`}
          >
            {preview}
          </div>
        </div>
      </div>

      {/* Code Snippet */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-foreground">Usage Code</h3>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleCopy}
            className="h-7 gap-1.5 text-xs"
          >
            {copied ? (
              <Check className="size-3 text-success" />
            ) : (
              <Copy className="size-3" />
            )}
            <span>{copied ? "Copied" : "Copy Code"}</span>
          </Button>
        </div>
        <div className="border border-border bg-muted/40 rounded-lg p-4 overflow-x-auto font-mono text-xs">
          <pre className="text-foreground whitespace-pre">{codeSnippet}</pre>
        </div>
      </div>

      {/* API Reference Table */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold tracking-tight text-foreground">
          API Reference
        </h3>
        <div className="border border-border rounded-lg overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-muted/50 border-b border-border text-muted-foreground font-semibold">
              <tr>
                <th className="py-2.5 px-4">Prop</th>
                <th className="py-2.5 px-4">Type</th>
                <th className="py-2.5 px-4">Default</th>
                <th className="py-2.5 px-4">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {propsList.map((p) => (
                <tr key={p.name} className="hover:bg-muted/20">
                  <td className="py-3 px-4 font-mono font-semibold text-primary">
                    {p.name}
                  </td>
                  <td className="py-3 px-4 font-mono text-muted-foreground">
                    {p.type}
                  </td>
                  <td className="py-3 px-4 font-mono text-foreground">
                    {p.default ?? "—"}
                  </td>
                  <td className="py-3 px-4 text-muted-foreground">
                    {p.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Scoped CSS Classes */}
      {cssClasses && cssClasses.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-bold tracking-tight text-foreground">
            Scoped CSS Classes
          </h3>
          <div className="border border-border rounded-lg overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-muted/50 border-b border-border text-muted-foreground font-semibold">
                <tr>
                  <th className="py-2.5 px-4">Selector</th>
                  <th className="py-2.5 px-4">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {cssClasses.map((c) => (
                  <tr key={c.name} className="hover:bg-muted/20">
                    <td className="py-3 px-4 font-mono font-semibold text-foreground">
                      {c.name}
                    </td>
                    <td className="py-3 px-4 text-muted-foreground">
                      {c.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
