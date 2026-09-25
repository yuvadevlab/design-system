"use client";

import React, { useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectGroup,
  SelectLabel,
  SelectSeparator,
  Switch,
} from "@yuva-devlab/ui";
import { ComponentView } from "../../../components/component-view";

export default function SelectDocPage() {
  const [model, setModel] = useState("gemini-2.5-pro");
  const [disabled, setDisabled] = useState(false);

  const preview = (
    <div className="flex flex-col items-center gap-6 w-full max-w-xs">
      <div className="flex items-center gap-2 text-xs bg-muted/40 p-3 rounded-lg border border-border">
        <Switch
          id="select-disabled-toggle"
          checked={disabled}
          onCheckedChange={setDisabled}
        />
        <label
          htmlFor="select-disabled-toggle"
          className="text-muted-foreground font-medium cursor-pointer text-xs"
        >
          Disabled State
        </label>
      </div>

      <div className="w-full">
        <Select value={model} onValueChange={setModel} disabled={disabled}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select LLM model..." />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Google Gemini</SelectLabel>
              <SelectItem value="gemini-2.5-pro">Gemini 2.5 Pro</SelectItem>
              <SelectItem value="gemini-2.5-flash">Gemini 2.5 Flash</SelectItem>
            </SelectGroup>
            <SelectSeparator />
            <SelectGroup>
              <SelectLabel>Anthropic Claude</SelectLabel>
              <SelectItem value="claude-3-7-sonnet">
                Claude 3.7 Sonnet
              </SelectItem>
              <SelectItem value="claude-3-5-haiku">Claude 3.5 Haiku</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );

  const codeSnippet = `import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectGroup,
  SelectLabel,
  SelectSeparator,
} from "@yuva-devlab/ui";

export function ModelPicker() {
  return (
    <Select defaultValue="gemini-2.5-pro"${disabled ? " disabled" : ""}>
      <SelectTrigger className="w-50">
        <SelectValue placeholder="Select LLM..." />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Google Gemini</SelectLabel>
          <SelectItem value="gemini-2.5-pro">Gemini 2.5 Pro</SelectItem>
          <SelectItem value="gemini-2.5-flash">Gemini 2.5 Flash</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}`;

  const propsList = [
    {
      name: "value",
      type: "string",
      default: "undefined",
      description: "Controlled value of the selected item.",
    },
    {
      name: "onValueChange",
      type: "(value: string) => void",
      default: "undefined",
      description: "Callback fired when the selection changes.",
    },
    {
      name: "disabled",
      type: "boolean",
      default: "false",
      description: "Disables opening the select dropdown.",
    },
  ];

  const cssClasses = [
    {
      name: ".dl-select-trigger",
      description: "Trigger button with right chevron and focus ring styling.",
    },
    {
      name: ".dl-select-content",
      description:
        "Floating popover card with animations and shadow elevation.",
    },
    {
      name: ".dl-select-item",
      description:
        "Selectable option row with active check indicator and hover highlight.",
    },
    {
      name: ".dl-select-label",
      description: "Group title heading text inside the dropdown.",
    },
    {
      name: ".dl-select-separator",
      description: "Horizontal rule separating item groups.",
    },
  ];

  return (
    <ComponentView
      title="Select"
      description="Accessible custom dropdown selection menu built on Radix UI Select with pure scoped CSS."
      category="Form Elements"
      preview={preview}
      codeSnippet={codeSnippet}
      propsList={propsList}
      cssClasses={cssClasses}
    />
  );
}
