"use client";

import React, { useState } from "react";
import { Terminal } from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogBody,
  DialogFooter,
  Button,
  Input,
} from "@yuva-devlab/ui";
import { ComponentView } from "../../../components/component-view";

export default function DialogDocPage() {
  const [open, setOpen] = useState(false);

  const preview = (
    <div className="flex flex-col items-center gap-4">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="default" className="gap-2">
            <Terminal className="size-4" />
            <span>Launch Execution Modal</span>
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Configure Execution Run</DialogTitle>
            <DialogDescription>
              Set runtime parameters before deploying agent to cluster.
            </DialogDescription>
          </DialogHeader>
          <DialogBody className="space-y-3 py-2">
            <div className="space-y-1">
              <label className="text-foreground text-xs font-semibold">
                Cluster Identifier
              </label>
              <Input defaultValue="us-east4-prod-a" />
            </div>
            <div className="space-y-1">
              <label className="text-foreground text-xs font-semibold">
                Max Step Budget
              </label>
              <Input type="number" defaultValue="25" />
            </div>
          </DialogBody>
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setOpen(false)}>Confirm Deployment</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );

  const codeSnippet = `import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogBody,
  DialogFooter,
  Button,
  Input,
} from "@yuva-devlab/ui";

export function ExecutionModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Configure Run</DialogTitle>
          <DialogDescription>Set parameters for execution.</DialogDescription>
        </DialogHeader>
        <DialogBody className="space-y-3">
          <Input placeholder="Cluster ID" />
        </DialogBody>
        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button>Submit</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}`;

  const propsList = [
    {
      name: "open",
      type: "boolean",
      default: "undefined",
      description: "Controlled open state of the modal dialog.",
    },
    {
      name: "onOpenChange",
      type: "(open: boolean) => void",
      default: "undefined",
      description: "Callback invoked when dialog open state changes.",
    },
    {
      name: "DialogBody",
      type: "React.Component",
      default: "—",
      description: "Scrollable, flexible body section for modal content.",
    },
    {
      name: "DialogFooter",
      type: "React.Component",
      default: "—",
      description:
        "Sticky action button container with responsive justification.",
    },
  ];

  const cssClasses = [
    {
      name: ".dl-dialog-overlay",
      description:
        "Backdrop overlay with glassmorphism blur and smooth opacity animation.",
    },
    {
      name: ".dl-dialog-content",
      description:
        "Modal card surface with automatic centering, elevation shadow, and responsive padding.",
    },
    {
      name: ".dl-dialog__header",
      description:
        "Header area with title and description, including native right padding for the close button.",
    },
    {
      name: ".dl-dialog__body",
      description: "Main content area supporting min-h-0 and auto-overflow.",
    },
    {
      name: ".dl-dialog__footer",
      description:
        "Footer action row aligned to the right on desktop, stacked on mobile.",
    },
  ];

  return (
    <ComponentView
      title="Dialog"
      description="Accessible modal dialog window built on Radix UI Dialog with pure CSS transitions and zero collision risk."
      category="Overlays & Feedback"
      preview={preview}
      codeSnippet={codeSnippet}
      propsList={propsList}
      cssClasses={cssClasses}
    />
  );
}
