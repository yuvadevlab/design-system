"use client";

import React, { useState } from "react";
import { Info, AlertCircle } from "lucide-react";
import {
  Alert,
  AlertTitle,
  AlertDescription,
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@yuva-devlab/ui";
import { ComponentView } from "../../../components/component-view";

type AlertVariant = "default" | "destructive";

export default function AlertDocPage() {
  const [variant, setVariant] = useState<AlertVariant>("default");

  const preview = (
    <div className="flex flex-col items-center gap-6 w-full max-w-md">
      <div className="flex items-center gap-2 text-xs bg-muted/40 p-3 rounded-lg border border-border">
        <span className="text-muted-foreground font-medium">Variant:</span>
        <Select
          value={variant}
          onValueChange={(val) => setVariant(val as AlertVariant)}
        >
          <SelectTrigger className="h-8 w-32 text-xs">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="default">Default</SelectItem>
            <SelectItem value="destructive">Destructive</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="w-full">
        {variant === "destructive" ? (
          <Alert variant="destructive">
            <AlertCircle className="size-4" />
            <AlertTitle>Critical Tool Step Failure</AlertTitle>
            <AlertDescription>
              Cluster agent execution terminated due to budget exhaustion.
            </AlertDescription>
          </Alert>
        ) : (
          <Alert variant="default">
            <Info className="size-4" />
            <AlertTitle>Cluster Synchronization Scheduled</AlertTitle>
            <AlertDescription>
              OrchestrAI model checkpoints will be committed at 00:00 UTC.
            </AlertDescription>
          </Alert>
        )}
      </div>
    </div>
  );

  const codeSnippet = `import { Alert, AlertTitle, AlertDescription } from "@yuva-devlab/ui";
import { ${variant === "destructive" ? "AlertCircle" : "Info"} } from "lucide-react";

export function NotificationBanner() {
  return (
    <Alert${variant !== "default" ? ` variant="${variant}"` : ""}>
      <${variant === "destructive" ? "AlertCircle" : "Info"} className="size-4" />
      <AlertTitle>${variant === "destructive" ? "Critical Failure" : "Scheduled Sync"}</AlertTitle>
      <AlertDescription>Notification message text goes here.</AlertDescription>
    </Alert>
  );
}`;

  const propsList = [
    {
      name: "variant",
      type: '"default" | "destructive"',
      default: '"default"',
      description:
        "Semantic visual presentation variant mapped to .dl-alert--* styles.",
    },
    {
      name: "AlertTitle",
      type: "React.Component",
      default: "—",
      description: "Bold title heading element inside the alert container.",
    },
    {
      name: "AlertDescription",
      type: "React.Component",
      default: "—",
      description:
        "Explanatory description text styled with subdued foreground color.",
    },
  ];

  const cssClasses = [
    {
      name: ".dl-alert",
      description:
        "Grid layout container with border, background, and icon slotting.",
    },
    {
      name: ".dl-alert--default",
      description: "Standard surface background and border.",
    },
    {
      name: ".dl-alert--destructive",
      description:
        "Destructive error styling using var(--destructive) border and text.",
    },
  ];

  return (
    <ComponentView
      title="Alert"
      description="Prominent callout banner for system notifications, operational warnings, and error messages."
      category="Overlays & Feedback"
      preview={preview}
      codeSnippet={codeSnippet}
      propsList={propsList}
      cssClasses={cssClasses}
    />
  );
}
