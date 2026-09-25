"use client";

import React, { useState } from "react";
import { Progress, Button } from "@yuva-devlab/ui";
import { ComponentView } from "../../../components/component-view";

export default function ProgressDocPage() {
  const [value, setValue] = useState(68);

  const preview = (
    <div className="flex flex-col items-center gap-6 w-full max-w-sm">
      <div className="flex items-center gap-2 text-xs bg-muted/40 p-3 rounded-lg border border-border">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setValue((v) => Math.max(0, v - 15))}
          className="h-7 text-xs"
        >
          -15%
        </Button>
        <span className="text-foreground font-mono font-semibold px-2">
          {value}%
        </span>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setValue((v) => Math.min(100, v + 15))}
          className="h-7 text-xs"
        >
          +15%
        </Button>
      </div>

      <div className="w-full space-y-2">
        <div className="flex justify-between text-xs text-muted-foreground font-medium">
          <span>Agent Training Step</span>
          <span>{value}%</span>
        </div>
        <Progress value={value} />
      </div>
    </div>
  );

  const codeSnippet = `import { Progress } from "@yuva-devlab/ui";

export function AgentProgressBar() {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-xs">
        <span>Processing</span>
        <span>${value}%</span>
      </div>
      <Progress value={${value}} />
    </div>
  );
}`;

  const propsList = [
    {
      name: "value",
      type: "number",
      default: "0",
      description: "Current completion percentage between 0 and 100.",
    },
    {
      name: "max",
      type: "number",
      default: "100",
      description: "Maximum progress value.",
    },
  ];

  const cssClasses = [
    {
      name: ".dl-progress",
      description:
        "Track container with rounded pill border and overflow clipping.",
    },
    {
      name: ".dl-progress__indicator",
      description:
        "Moving indicator bar transitioning smoothly across the track.",
    },
  ];

  return (
    <ComponentView
      title="Progress"
      description="Visual progress indicator bar displaying percentage completion of long-running operations."
      category="Overlays & Feedback"
      preview={preview}
      codeSnippet={codeSnippet}
      propsList={propsList}
      cssClasses={cssClasses}
    />
  );
}
