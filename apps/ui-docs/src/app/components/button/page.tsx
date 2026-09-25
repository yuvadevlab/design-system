"use client";

import React, { useState } from "react";
import { Sparkles } from "lucide-react";
import {
  Button,
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  Switch,
} from "@yuva-devlab/ui";
import { ComponentView } from "../../../components/component-view";

type ButtonVariant =
  "default" | "secondary" | "outline" | "ghost" | "destructive" | "link";
type ButtonSize = "default" | "sm" | "lg" | "icon";

export default function ButtonDocPage() {
  const [variant, setVariant] = useState<ButtonVariant>("default");
  const [size, setSize] = useState<ButtonSize>("default");
  const [disabled, setDisabled] = useState(false);

  const preview = (
    <div className="flex flex-col items-center gap-6">
      {/* Interactive Controls Bar */}
      <div className="flex flex-wrap items-center justify-center gap-4 text-xs bg-muted/40 p-3 rounded-lg border border-border">
        <div className="flex items-center gap-2">
          <span className="text-muted-foreground font-medium">Variant:</span>
          <Select
            value={variant}
            onValueChange={(val) => setVariant(val as ButtonVariant)}
          >
            <SelectTrigger className="h-8 w-32 text-xs">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="default">Default</SelectItem>
              <SelectItem value="secondary">Secondary</SelectItem>
              <SelectItem value="outline">Outline</SelectItem>
              <SelectItem value="ghost">Ghost</SelectItem>
              <SelectItem value="destructive">Destructive</SelectItem>
              <SelectItem value="link">Link</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-muted-foreground font-medium">Size:</span>
          <Select
            value={size}
            onValueChange={(val) => setSize(val as ButtonSize)}
          >
            <SelectTrigger className="h-8 w-32 text-xs">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="default">Medium</SelectItem>
              <SelectItem value="sm">Small</SelectItem>
              <SelectItem value="lg">Large</SelectItem>
              <SelectItem value="icon">Icon Only</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center gap-2">
          <Switch
            id="btn-disabled-toggle"
            checked={disabled}
            onCheckedChange={setDisabled}
          />
          <label
            htmlFor="btn-disabled-toggle"
            className="text-muted-foreground font-medium cursor-pointer text-xs"
          >
            Disabled
          </label>
        </div>
      </div>

      {/* Target Render */}
      <div className="flex items-center justify-center min-h-12.5">
        {size === "icon" ? (
          <Button
            variant={variant}
            size={size}
            disabled={disabled}
            aria-label="Sparkles Action"
          >
            <Sparkles className="size-4" />
          </Button>
        ) : (
          <Button
            variant={variant}
            size={size}
            disabled={disabled}
            className="gap-2"
          >
            <Sparkles className="size-4" />
            <span>Interactive Button</span>
          </Button>
        )}
      </div>
    </div>
  );

  const propList: string[] = [];
  if (variant !== "default") propList.push(`variant="${variant}"`);
  if (size !== "default") propList.push(`size="${size}"`);
  if (disabled) propList.push("disabled");
  const propsStr = propList.length > 0 ? " " + propList.join(" ") : "";

  const codeSnippet = `import { Button } from "@yuva-devlab/ui";
import { Sparkles } from "lucide-react";

export function ActionButton() {
  return (
    <Button${propsStr} className="gap-2">
      <Sparkles className="size-4" />
      <span>Interactive Button</span>
    </Button>
  );
}`;

  const propsList = [
    {
      name: "variant",
      type: '"default" | "destructive" | "outline" | "secondary" | "ghost" | "link"',
      default: '"default"',
      description:
        "Visual style variant mapped directly to scoped .dl-btn--* pure CSS rules.",
    },
    {
      name: "size",
      type: '"default" | "sm" | "lg" | "icon"',
      default: '"default"',
      description: "Dimensions and padding preset for the button element.",
    },
    {
      name: "asChild",
      type: "boolean",
      default: "false",
      description:
        "Delegates rendering to direct child element via Radix Slot (e.g. Next.js Link).",
    },
    {
      name: "disabled",
      type: "boolean",
      default: "false",
      description:
        "When true, disables user interaction and renders cursor: not-allowed.",
    },
  ];

  const cssClasses = [
    {
      name: ".dl-btn",
      description:
        "Base button container establishing focus ring, inline flex, and typography.",
    },
    {
      name: ".dl-btn--default",
      description:
        "Primary background (var(--primary)) and text (var(--primary-foreground)).",
    },
    {
      name: ".dl-btn--secondary",
      description:
        "Secondary background (var(--secondary)) and surface contrast.",
    },
    {
      name: ".dl-btn--outline",
      description:
        "Transparent background with 1px border using var(--border).",
    },
    {
      name: ".dl-btn--destructive",
      description:
        "Destructive error status background using var(--destructive).",
    },
    {
      name: ".dl-btn--ghost",
      description:
        "Transparent background, displaying surface hover background on hover.",
    },
  ];

  return (
    <ComponentView
      title="Button"
      description="Primary interactive trigger for forms, dialogs, and actions. Pure CSS with zero runtime Tailwind dependencies."
      category="Form Elements"
      preview={preview}
      codeSnippet={codeSnippet}
      propsList={propsList}
      cssClasses={cssClasses}
    />
  );
}
