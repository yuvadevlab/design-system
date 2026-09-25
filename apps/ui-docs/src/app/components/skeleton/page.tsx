"use client";

import React from "react";
import { Skeleton } from "@yuva-devlab/ui";
import { ComponentView } from "../../../components/component-view";

export default function SkeletonDocPage() {
  const preview = (
    <div className="flex items-center gap-4 w-full max-w-sm">
      <Skeleton className="size-12 rounded-full shrink-0" />
      <div className="space-y-2 flex-1">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-3 w-3/4" />
      </div>
    </div>
  );

  const codeSnippet = `import { Skeleton } from "@yuva-devlab/ui";

export function LoadingCard() {
  return (
    <div className="flex items-center gap-4">
      <Skeleton className="size-12 rounded-full" />
      <div className="space-y-2 flex-1">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-3 w-3/4" />
      </div>
    </div>
  );
}`;

  const propsList = [
    {
      name: "className",
      type: "string",
      default: "undefined",
      description: "Utility classes for width, height, and border radius.",
    },
  ];

  const cssClasses = [
    {
      name: ".dl-skeleton",
      description:
        "Placeholder block with pulsing shimmer animation and muted background.",
    },
  ];

  return (
    <ComponentView
      title="Skeleton"
      description="Animated placeholder surface representing content while asynchronous data is loading."
      category="Overlays & Feedback"
      preview={preview}
      codeSnippet={codeSnippet}
      propsList={propsList}
      cssClasses={cssClasses}
    />
  );
}
