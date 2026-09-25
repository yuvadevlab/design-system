"use client";

import React, { useState } from "react";
import {
  StatusBadge,
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@yuva-devlab/ui";
import { ComponentView } from "../../../components/component-view";

export default function StatusBadgeDocPage() {
  const [status, setStatus] = useState("Active");

  const preview = (
    <div className="flex flex-col items-center gap-6">
      <div className="flex items-center gap-2 text-xs bg-muted/40 p-3 rounded-lg border border-border">
        <span className="text-muted-foreground font-medium">
          Status Preset:
        </span>
        <Select value={status} onValueChange={setStatus}>
          <SelectTrigger className="h-8 w-40 text-xs">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Active">Active</SelectItem>
            <SelectItem value="Completed">Completed</SelectItem>
            <SelectItem value="In Progress">In Progress</SelectItem>
            <SelectItem value="Needs Approval">Needs Approval</SelectItem>
            <SelectItem value="Failed">Failed</SelectItem>
            <SelectItem value="Offline">Offline</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center justify-center min-h-10">
        <StatusBadge status={status} />
      </div>
    </div>
  );

  const codeSnippet = `import { StatusBadge } from "@yuva-devlab/ui";

export function AgentStatus() {
  return <StatusBadge status="${status}" />;
}`;

  const propsList = [
    {
      name: "status",
      type: "string",
      default: "—",
      description:
        "Status name string (automatically maps colors for Active, Completed, In Progress, Failed, etc.).",
    },
  ];

  const cssClasses = [
    {
      name: ".dl-status-badge",
      description: "Pill container with background tint and dot alignment.",
    },
    {
      name: ".dl-status-badge__dot",
      description: "Pulsing/solid colored status dot indicator.",
    },
    {
      name: ".dl-status-badge--success",
      description: "Green indicator for Active, Completed, Operational.",
    },
    {
      name: ".dl-status-badge--info",
      description: "Blue indicator for In Progress, Running.",
    },
    {
      name: ".dl-status-badge--warning",
      description: "Yellow/amber indicator for Needs Approval, Degraded.",
    },
    {
      name: ".dl-status-badge--destructive",
      description: "Red indicator for Failed.",
    },
  ];

  return (
    <ComponentView
      title="Status Badge"
      description="Visual status indicator pill with an integrated color dot and semantic mapping."
      category="Data Display & Layout"
      preview={preview}
      codeSnippet={codeSnippet}
      propsList={propsList}
      cssClasses={cssClasses}
    />
  );
}
