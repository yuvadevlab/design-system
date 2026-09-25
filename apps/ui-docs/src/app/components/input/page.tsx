"use client";

import React, { useState } from "react";
import { Search, Eye } from "lucide-react";
import { Input, Switch } from "@yuva-devlab/ui";
import { ComponentView } from "../../../components/component-view";

export default function InputDocPage() {
  const [withStartIcon, setWithStartIcon] = useState(true);
  const [withEndIcon, setWithEndIcon] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const preview = (
    <div className="flex flex-col items-center gap-6 w-full max-w-sm">
      {/* Interactive Controls Bar */}
      <div className="flex flex-wrap items-center justify-center gap-4 text-xs bg-muted/40 p-3 rounded-lg border border-border w-full">
        <div className="flex items-center gap-2">
          <Switch
            id="input-start-icon-toggle"
            checked={withStartIcon}
            onCheckedChange={setWithStartIcon}
          />
          <label
            htmlFor="input-start-icon-toggle"
            className="text-muted-foreground font-medium cursor-pointer text-xs"
          >
            Start Icon
          </label>
        </div>

        <div className="flex items-center gap-2">
          <Switch
            id="input-end-icon-toggle"
            checked={withEndIcon}
            onCheckedChange={setWithEndIcon}
          />
          <label
            htmlFor="input-end-icon-toggle"
            className="text-muted-foreground font-medium cursor-pointer text-xs"
          >
            End Icon
          </label>
        </div>

        <div className="flex items-center gap-2">
          <Switch
            id="input-disabled-toggle"
            checked={disabled}
            onCheckedChange={setDisabled}
          />
          <label
            htmlFor="input-disabled-toggle"
            className="text-muted-foreground font-medium cursor-pointer text-xs"
          >
            Disabled
          </label>
        </div>
      </div>

      <div className="w-full">
        <Input
          placeholder="Search agents, workspaces..."
          disabled={disabled}
          startIcon={
            withStartIcon ? <Search className="size-4 opacity-50" /> : undefined
          }
          endIcon={
            withEndIcon ? (
              <Eye className="size-4 opacity-50 cursor-pointer" />
            ) : undefined
          }
        />
      </div>
    </div>
  );

  const propLines = ['placeholder="Search agents, workspaces..."'];
  if (withStartIcon) {
    propLines.push('startIcon={<Search className="size-4" />}');
  }
  if (withEndIcon) {
    propLines.push('endIcon={<Eye className="size-4" />}');
  }
  if (disabled) {
    propLines.push("disabled");
  }

  const iconsUsed = [
    withStartIcon ? "Search" : null,
    withEndIcon ? "Eye" : null,
  ].filter(Boolean);

  const iconImportLine =
    iconsUsed.length > 0
      ? `import { ${iconsUsed.join(", ")} } from "lucide-react";\n`
      : "";

  const codeSnippet = `import { Input } from "@yuva-devlab/ui";
${iconImportLine}export function SearchBox() {
  return (
    <Input
      ${propLines.join("\n      ")}
    />
  );
}`.replace(/\n\n\n+/g, "\n\n");

  const propsList = [
    {
      name: "startIcon",
      type: "React.ReactNode",
      default: "undefined",
      description:
        "Leading decorative or interactive icon automatically padded inside .dl-input-wrapper.",
    },
    {
      name: "endIcon",
      type: "React.ReactNode",
      default: "undefined",
      description:
        "Trailing interactive action or icon element (e.g. password visibility toggle).",
    },
    {
      name: "disabled",
      type: "boolean",
      default: "false",
      description:
        "Disables user input and adds opacity reduction with not-allowed cursor.",
    },
    {
      name: "type",
      type: "string",
      default: '"text"',
      description:
        "Standard HTML input type (text, password, email, number, search).",
    },
  ];

  const cssClasses = [
    {
      name: ".dl-input",
      description:
        "Base input control establishing height, padding, border, and focus ring.",
    },
    {
      name: ".dl-input-wrapper",
      description:
        "Relative wrapper container for positioning startIcon and endIcon without layout shifts.",
    },
    {
      name: ".dl-input-icon--start",
      description:
        "Left-aligned absolute icon container with pointer-events pass-through.",
    },
    {
      name: ".dl-input-icon--end",
      description: "Right-aligned absolute icon container for action buttons.",
    },
  ];

  return (
    <ComponentView
      title="Input"
      description="Textual form input control styled with design system tokens and scoped CSS with zero collision risk."
      category="Form Elements"
      preview={preview}
      codeSnippet={codeSnippet}
      propsList={propsList}
      cssClasses={cssClasses}
    />
  );
}
