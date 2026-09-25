"use client";

import React from "react";
import { toast, Button } from "@yuva-devlab/ui";
import { ComponentView } from "../../../components/component-view";

export default function ToasterDocPage() {
  const preview = (
    <div className="flex flex-wrap items-center justify-center gap-3 py-6">
      <Button
        variant="default"
        onClick={() => toast("Autonomous workflow initialized.")}
      >
        Default Toast
      </Button>
      <Button
        variant="secondary"
        onClick={() =>
          toast.success("Model checkpoint successfully saved to registry.")
        }
      >
        Success Toast
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.warning("High token consumption detected (85% of quota).")
        }
      >
        Warning Toast
      </Button>
      <Button
        variant="destructive"
        onClick={() =>
          toast.error("Execution error: Sandbox process timeout exceeded.")
        }
      >
        Error Toast
      </Button>
      <Button
        variant="ghost"
        className="border border-border"
        onClick={() =>
          toast("Agent deployment failed", {
            description: "Cluster nodepool unschedulable due to quota",
            action: {
              label: "Retry",
              onClick: () => toast.info("Retrying cluster deployment..."),
            },
          })
        }
      >
        Toast with Action
      </Button>
    </div>
  );

  const codeSnippet = `import { Toaster, toast, Button } from "@yuva-devlab/ui";

// 1. Mount <Toaster /> once in your root layout:
export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}

// 2. Trigger notifications anywhere across your components:
export function WorkflowActions() {
  return (
    <div className="flex gap-2">
      <Button onClick={() => toast("Workflow started")}>
        Start
      </Button>

      <Button onClick={() => toast.success("Configuration saved!")}>
        Save
      </Button>

      <Button
        variant="destructive"
        onClick={() => toast.error("Deployment failed")}
      >
        Trigger Error
      </Button>
    </div>
  );
}`;

  const propsList = [
    {
      name: "position",
      type: '"top-left" | "top-right" | "bottom-left" | "bottom-right" | "top-center" | "bottom-center"',
      default: '"bottom-right"',
      description: "Screen viewport position where toast messages appear.",
    },
    {
      name: "richColors",
      type: "boolean",
      default: "false",
      description:
        "Whether to render vibrant semantic background colors for success/error/warning.",
    },
    {
      name: "expand",
      type: "boolean",
      default: "false",
      description:
        "Whether toasts should expand rather than stack when hovering.",
    },
    {
      name: "closeButton",
      type: "boolean",
      default: "false",
      description:
        "Whether to show an accessible dismiss button on each toast.",
    },
  ];

  const cssClasses = [
    {
      name: ".dl-toaster",
      description: "Root viewport container element managing toast stacking.",
    },
    {
      name: ".dl-toast",
      description:
        "Individual toast card with border, radius, shadow, and background tokens.",
    },
    {
      name: ".dl-toast__desc",
      description:
        "Subtitle explanatory text styled with muted foreground tokens.",
    },
    {
      name: ".dl-toast__action",
      description: "Primary action button inside the toast card.",
    },
    {
      name: ".dl-toast__cancel",
      description: "Secondary cancel button inside the toast card.",
    },
  ];

  return (
    <ComponentView
      title="Toaster / Toast"
      description="An opinionated, elegant toast notification system configured with design system tokens and customizable actions."
      category="Overlays & Feedback"
      preview={preview}
      codeSnippet={codeSnippet}
      propsList={propsList}
      cssClasses={cssClasses}
    />
  );
}
