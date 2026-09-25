"use client";

import React from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
  StatusBadge,
  Button,
} from "@yuva-devlab/ui";
import { ComponentView } from "../../../components/component-view";

const rows = [
  {
    id: "exec-98201",
    agent: "Code Synthesizer",
    role: "Fullstack Architect",
    model: "gemini-2.5-pro",
    status: "Completed",
    tokens: "14,820",
    latency: "3.4s",
  },
  {
    id: "exec-98202",
    agent: "Forensic Debugger",
    role: "Core Diagnostic",
    model: "claude-3-7-sonnet",
    status: "Active",
    tokens: "8,430",
    latency: "1.8s",
  },
  {
    id: "exec-98203",
    agent: "Policy Sentinel",
    role: "Security Guardrail",
    model: "gemini-2.5-flash",
    status: "Needs Approval",
    tokens: "1,250",
    latency: "0.6s",
  },
  {
    id: "exec-98204",
    agent: "Database Migrator",
    role: "Data Infrastructure",
    model: "claude-3-5-haiku",
    status: "Failed",
    tokens: "22,400",
    latency: "12.1s",
  },
  {
    id: "exec-98205",
    agent: "Telemetry Streamer",
    role: "Observability",
    model: "gemini-2.5-flash",
    status: "Offline",
    tokens: "0",
    latency: "—",
  },
];

export default function TableDocPage() {
  const preview = (
    <div className="w-full">
      <div className="border border-border/80 rounded-lg overflow-hidden bg-card shadow-sm">
        <Table>
          <TableCaption className="py-3">
            Autonomous Cluster Execution Fleet — Realtime Diagnostics
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-28 font-mono text-[11px]">
                Execution ID
              </TableHead>
              <TableHead>Agent</TableHead>
              <TableHead className="hidden md:table-cell">Role</TableHead>
              <TableHead className="hidden sm:table-cell font-mono text-[11px]">
                Engine Model
              </TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right font-mono text-[11px]">
                Tokens
              </TableHead>
              <TableHead className="text-right hidden sm:table-cell">
                Latency
              </TableHead>
              <TableHead className="text-right w-24">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((r) => (
              <TableRow key={r.id}>
                <TableCell className="font-mono text-xs text-primary font-medium">
                  {r.id}
                </TableCell>
                <TableCell className="font-medium text-xs whitespace-nowrap">
                  {r.agent}
                </TableCell>
                <TableCell className="text-muted-foreground text-xs hidden md:table-cell whitespace-nowrap">
                  {r.role}
                </TableCell>
                <TableCell className="font-mono text-[11px] text-muted-foreground hidden sm:table-cell whitespace-nowrap">
                  {r.model}
                </TableCell>
                <TableCell className="whitespace-nowrap">
                  <StatusBadge status={r.status} />
                </TableCell>
                <TableCell className="font-mono text-xs text-right whitespace-nowrap">
                  {r.tokens}
                </TableCell>
                <TableCell className="font-mono text-xs text-right text-muted-foreground hidden sm:table-cell whitespace-nowrap">
                  {r.latency}
                </TableCell>
                <TableCell className="text-right whitespace-nowrap">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-7 text-xs px-2.5"
                  >
                    Inspect
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );

  const codeSnippet = `import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
  StatusBadge,
  Button,
} from "@yuva-devlab/ui";

export function ExecutionTable() {
  return (
    <div className="border border-border rounded-lg overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="font-mono text-xs">ID</TableHead>
            <TableHead>Agent</TableHead>
            <TableHead className="hidden md:table-cell">Role</TableHead>
            <TableHead className="hidden sm:table-cell">Model</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Tokens</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-mono text-xs">exec-98201</TableCell>
            <TableCell className="font-medium">Code Synthesizer</TableCell>
            <TableCell className="hidden md:table-cell">Fullstack</TableCell>
            <TableCell className="hidden sm:table-cell">gemini-2.5-pro</TableCell>
            <TableCell><StatusBadge status="Completed" /></TableCell>
            <TableCell className="text-right font-mono text-xs">14,820</TableCell>
            <TableCell className="text-right">
              <Button variant="ghost" size="sm">Inspect</Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}`;

  const propsList = [
    {
      name: "Table",
      type: "React.HTMLAttributes<HTMLTableElement>",
      default: "—",
      description:
        "Root table element wrapped in a horizontally scrollable container (.dl-table-wrapper).",
    },
    {
      name: "TableHeader",
      type: "React.HTMLAttributes<HTMLTableSectionElement>",
      default: "—",
      description:
        "Table head element (thead) with bottom border and semantic header typography.",
    },
    {
      name: "TableRow",
      type: "React.HTMLAttributes<HTMLTableRowElement>",
      default: "—",
      description:
        "Table row (tr) with hover highlight transitions (.dl-table__row).",
    },
    {
      name: "TableCell",
      type: "React.TdHTMLAttributes<HTMLTableCellElement>",
      default: "—",
      description:
        "Standard table cell (td) with design token padding and alignment.",
    },
    {
      name: "TableHead",
      type: "React.ThHTMLAttributes<HTMLTableCellElement>",
      default: "—",
      description:
        "Header cell with muted typography and sort indicator slots.",
    },
    {
      name: "TableCaption",
      type: "React.HTMLAttributes<HTMLTableCaptionElement>",
      default: "—",
      description: "Descriptive caption element at the bottom of the table.",
    },
  ];

  const cssClasses = [
    {
      name: ".dl-table-wrapper",
      description:
        "Overflow container enabling smooth horizontal scrolling on mobile viewports.",
    },
    {
      name: ".dl-table",
      description:
        "Full-width table with border-collapse and tokenized font scaling.",
    },
    {
      name: ".dl-table__row",
      description: "Row with subtle bottom border and background hover state.",
    },
    {
      name: ".dl-table__cell",
      description:
        "Cell padding and typography aligned with data-dense enterprise dashboards.",
    },
  ];

  return (
    <ComponentView
      title="Table"
      description="Data table component with responsive horizontal scrolling wrapper, multi-device breakpoints, and pure CSS styling."
      category="Data Display & Layout"
      preview={preview}
      codeSnippet={codeSnippet}
      propsList={propsList}
      cssClasses={cssClasses}
    />
  );
}
