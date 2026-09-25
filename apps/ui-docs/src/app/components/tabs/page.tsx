"use client";

import React from "react";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@yuva-devlab/ui";
import { ComponentView } from "../../../components/component-view";

export default function TabsDocPage() {
  const preview = (
    <div className="w-full max-w-md">
      <Tabs defaultValue="overview">
        <TabsList className="grid grid-cols-3 w-full">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="deployments">Deployments</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Agent Overview</CardTitle>
              <CardDescription className="text-xs">
                Real-time active clusters and execution metrics.
              </CardDescription>
            </CardHeader>
          </Card>
        </TabsContent>
        <TabsContent value="deployments">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Recent Deployments</CardTitle>
              <CardDescription className="text-xs">
                3 releases successfully committed to staging.
              </CardDescription>
            </CardHeader>
          </Card>
        </TabsContent>
        <TabsContent value="settings">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Security Policy</CardTitle>
              <CardDescription className="text-xs">
                Authentication keys and policy permissions.
              </CardDescription>
            </CardHeader>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );

  const codeSnippet = `import { Tabs, TabsList, TabsTrigger, TabsContent } from "@yuva-devlab/ui";

export function TabbedInterface() {
  return (
    <Tabs defaultValue="overview">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">Overview content...</TabsContent>
      <TabsContent value="settings">Settings content...</TabsContent>
    </Tabs>
  );
}`;

  const propsList = [
    {
      name: "defaultValue",
      type: "string",
      default: "undefined",
      description: "Default active tab value when uncontrolled.",
    },
    {
      name: "value",
      type: "string",
      default: "undefined",
      description: "Controlled active tab value.",
    },
    {
      name: "onValueChange",
      type: "(value: string) => void",
      default: "undefined",
      description: "Callback fired when active tab changes.",
    },
  ];

  const cssClasses = [
    {
      name: ".dl-tabs-list",
      description: "Segmented container with background pill and border.",
    },
    {
      name: ".dl-tabs-trigger",
      description: "Tab button with active shadow, elevation, and transition.",
    },
    {
      name: ".dl-tabs-content",
      description: "Content panel rendered when active tab is selected.",
    },
  ];

  return (
    <ComponentView
      title="Tabs"
      description="Segmented view controller organizing related sections into alternate tabbed views."
      category="Data Display & Layout"
      preview={preview}
      codeSnippet={codeSnippet}
      propsList={propsList}
      cssClasses={cssClasses}
    />
  );
}
