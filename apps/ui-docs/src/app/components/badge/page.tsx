"use client";

import React, { useState } from "react";
import {
  Badge,
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@yuva-devlab/ui";
import { ComponentView } from "../../../components/component-view";

type BadgeVariant =
  | "default"
  | "secondary"
  | "destructive"
  | "success"
  | "warning"
  | "info"
  | "outline";

export default function BadgeDocPage() {
  const [variant, setVariant] = useState<BadgeVariant>("default");

  const preview = (
    <div className="flex flex-col items-center gap-6">
      <div className="flex items-center gap-2 text-xs bg-muted/40 p-3 rounded-lg border border-border">
        <span className="text-muted-foreground font-medium">Variant:</span>
        <Select
          value={variant}
          onValueChange={(val) => setVariant(val as BadgeVariant)}
        >
          <SelectTrigger className="h-8 w-36 text-xs">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="default">Default</SelectItem>
            <SelectItem value="secondary">Secondary</SelectItem>
            <SelectItem value="outline">Outline</SelectItem>
            <SelectItem value="success">Success</SelectItem>
            <SelectItem value="warning">Warning</SelectItem>
            <SelectItem value="info">Info</SelectItem>
            <SelectItem value="destructive">Destructive</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center justify-center min-h-10">
        <Badge variant={variant}>Interactive Badge</Badge>
      </div>
    </div>
  );

  const codeSnippet = `import { Badge } from "@yuva-devlab/ui";

export function StatusIndicator() {
  return <Badge variant="${variant}">Interactive Badge</Badge>;
}`;

  const propsList = [
    {
      name: "variant",
      type: '"default" | "secondary" | "destructive" | "success" | "warning" | "info" | "outline"',
      default: '"default"',
      description:
        "Visual style variant mapped to scoped .dl-badge--* pure CSS rules.",
    },
  ];

  const cssClasses = [
    {
      name: ".dl-badge",
      description:
        "Base badge styling with inline-flex, pill radius, font-semibold, and 1px border.",
    },
    {
      name: ".dl-badge--success",
      description:
        "Positive status tint using var(--success) background and text.",
    },
    {
      name: ".dl-badge--destructive",
      description: "Critical error status tint using var(--destructive).",
    },
    {
      name: ".dl-badge--warning",
      description: "Warning status tint using var(--warning).",
    },
    {
      name: ".dl-badge--info",
      description: "Information status tint using var(--info).",
    },
  ];

  return (
    <ComponentView
      title="Badge"
      description="Small semantic status pill indicator with curated design token styling."
      category="Data Display"
      preview={preview}
      codeSnippet={codeSnippet}
      propsList={propsList}
      cssClasses={cssClasses}
    />
  );
}
