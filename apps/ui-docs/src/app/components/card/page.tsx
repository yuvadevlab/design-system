"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Button,
  Badge,
} from "@yuva-devlab/ui";
import { ComponentView } from "../../../components/component-view";

export default function CardDocPage() {
  const preview = (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-base">Autonomous Fleet</CardTitle>
          <Badge variant="success">Online</Badge>
        </div>
        <CardDescription>Cluster Node: us-east4-agent-01</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-xs leading-relaxed">
          Cluster operating normally. 99.98% uptime maintained over the last 30
          days.
        </p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="ghost" size="sm">
          Dismiss
        </Button>
        <Button size="sm" className="gap-1.5">
          <span>Inspect Node</span>
          <ArrowRight className="size-3.5" />
        </Button>
      </CardFooter>
    </Card>
  );

  const codeSnippet = `import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Button,
  Badge,
} from "@yuva-devlab/ui";

export function OverviewCard() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Autonomous Fleet</CardTitle>
          <Badge variant="success">Online</Badge>
        </div>
        <CardDescription>Node: us-east4</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Cluster operating normally.</p>
      </CardContent>
      <CardFooter>
        <Button size="sm">Inspect Node</Button>
      </CardFooter>
    </Card>
  );
}`;

  const propsList = [
    {
      name: "Card",
      type: "React.HTMLAttributes<HTMLDivElement>",
      default: "—",
      description: "Outer card container with rounded corners and border.",
    },
    {
      name: "CardHeader",
      type: "React.HTMLAttributes<HTMLDivElement>",
      default: "—",
      description: "Header section organizing title, subtitle, and badges.",
    },
    {
      name: "CardContent",
      type: "React.HTMLAttributes<HTMLDivElement>",
      default: "—",
      description: "Primary body container for text, metrics, or forms.",
    },
    {
      name: "CardFooter",
      type: "React.HTMLAttributes<HTMLDivElement>",
      default: "—",
      description: "Bottom action bar for buttons and secondary links.",
    },
  ];

  const cssClasses = [
    {
      name: ".dl-card",
      description:
        "Base card surface with var(--card) background and var(--border) outline.",
    },
    {
      name: ".dl-card__header",
      description: "Card header padding and vertical spacing.",
    },
    { name: ".dl-card__title", description: "Bold semantic heading." },
    { name: ".dl-card__desc", description: "Subtle muted description text." },
    { name: ".dl-card__content", description: "Content area padding." },
    {
      name: ".dl-card__footer",
      description: "Footer action row with flex alignment.",
    },
  ];

  return (
    <ComponentView
      title="Card"
      description="Bordered surface component for organizing related content, metrics, or actions."
      category="Data Display & Layout"
      preview={preview}
      codeSnippet={codeSnippet}
      propsList={propsList}
      cssClasses={cssClasses}
    />
  );
}
