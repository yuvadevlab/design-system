"use client";

import React, { useState } from "react";
import { Switch } from "@yuva-devlab/ui";
import { ComponentView } from "../../../components/component-view";

export default function SwitchDocPage() {
  const [checked, setChecked] = useState(true);
  const [disabled, setDisabled] = useState(false);

  const preview = (
    <div className="flex flex-col items-center gap-6">
      <div className="flex items-center gap-2 text-xs bg-muted/40 p-3 rounded-lg border border-border">
        <Switch
          id="switch-disabled-setting"
          checked={disabled}
          onCheckedChange={setDisabled}
        />
        <label
          htmlFor="switch-disabled-setting"
          className="text-muted-foreground font-medium cursor-pointer text-xs"
        >
          Disabled State
        </label>
      </div>

      <div className="flex items-center gap-3">
        <Switch
          id="autonomous-mode"
          checked={checked}
          onCheckedChange={setChecked}
          disabled={disabled}
        />
        <label
          htmlFor="autonomous-mode"
          className="text-foreground text-sm font-semibold cursor-pointer"
        >
          Autonomous Self-Healing
        </label>
      </div>
    </div>
  );

  const codeSnippet = `import { Switch } from "@yuva-devlab/ui";

export function SettingsToggle() {
  return (
    <div className="flex items-center gap-3">
      <Switch id="auto-mode"${disabled ? " disabled" : ""} defaultChecked />
      <label htmlFor="auto-mode">Autonomous Self-Healing</label>
    </div>
  );
}`;

  const propsList = [
    {
      name: "checked",
      type: "boolean",
      default: "undefined",
      description: "Controlled checked state of the switch toggle.",
    },
    {
      name: "onCheckedChange",
      type: "(checked: boolean) => void",
      default: "undefined",
      description: "Callback invoked when checked state transitions.",
    },
    {
      name: "disabled",
      type: "boolean",
      default: "false",
      description: "Disables interaction and reduces opacity.",
    },
  ];

  const cssClasses = [
    {
      name: ".dl-switch",
      description:
        "Pill track container with background transition and focus ring.",
    },
    {
      name: ".dl-switch__thumb",
      description: "Circular slider thumb translating across the pill track.",
    },
  ];

  return (
    <ComponentView
      title="Switch"
      description="Interactive toggle switch allowing users to alternate between binary on/off states."
      category="Form Elements"
      preview={preview}
      codeSnippet={codeSnippet}
      propsList={propsList}
      cssClasses={cssClasses}
    />
  );
}
