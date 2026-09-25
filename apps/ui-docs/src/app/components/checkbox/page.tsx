"use client";

import React, { useState } from "react";
import { Checkbox, Switch } from "@yuva-devlab/ui";
import { ComponentView } from "../../../components/component-view";

export default function CheckboxDocPage() {
  const [checked, setChecked] = useState<boolean>(true);
  const [disabled, setDisabled] = useState(false);

  const preview = (
    <div className="flex flex-col items-center gap-6">
      <div className="flex items-center gap-2 text-xs bg-muted/40 p-3 rounded-lg border border-border">
        <Switch
          id="cb-disabled-setting"
          checked={disabled}
          onCheckedChange={setDisabled}
        />
        <label
          htmlFor="cb-disabled-setting"
          className="text-muted-foreground font-medium cursor-pointer text-xs"
        >
          Disabled State
        </label>
      </div>

      <div className="flex items-center gap-3">
        <Checkbox
          id="require-approval"
          checked={checked}
          onCheckedChange={(val) => setChecked(Boolean(val))}
          disabled={disabled}
        />
        <label
          htmlFor="require-approval"
          className="text-foreground text-sm font-semibold cursor-pointer"
        >
          Require Human Approval for Destructive Steps
        </label>
      </div>
    </div>
  );

  const codeSnippet = `import { Checkbox } from "@yuva-devlab/ui";

export function ApprovalCheckbox() {
  return (
    <div className="flex items-center gap-2.5">
      <Checkbox id="approval"${disabled ? " disabled" : ""} defaultChecked />
      <label htmlFor="approval">Require Human Approval</label>
    </div>
  );
}`;

  const propsList = [
    {
      name: "checked",
      type: "boolean | 'indeterminate'",
      default: "undefined",
      description: "Controlled checked or indeterminate state.",
    },
    {
      name: "onCheckedChange",
      type: "(checked: boolean | 'indeterminate') => void",
      default: "undefined",
      description: "Callback fired when checked state toggles.",
    },
    {
      name: "disabled",
      type: "boolean",
      default: "false",
      description: "Disables interaction.",
    },
  ];

  const cssClasses = [
    {
      name: ".dl-checkbox",
      description: "Square checkbox box with focus ring and border styling.",
    },
    {
      name: ".dl-checkbox[data-state='checked']",
      description:
        "Active state with var(--primary) fill and white check mark.",
    },
  ];

  return (
    <ComponentView
      title="Checkbox"
      description="Accessible binary selection checkbox control supporting checked, unchecked, and indeterminate states."
      category="Form Elements"
      preview={preview}
      codeSnippet={codeSnippet}
      propsList={propsList}
      cssClasses={cssClasses}
    />
  );
}
