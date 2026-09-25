import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "./switch";

const meta: Meta<typeof Switch> = {
  title: "Components/Switch",
  component: Switch,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  render: () => {
    const [checked, setChecked] = useState(true);
    return (
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <Switch
          id="auto-retry"
          checked={checked}
          onCheckedChange={setChecked}
        />
        <label
          htmlFor="auto-retry"
          style={{ fontSize: "14px", fontWeight: 500, cursor: "pointer" }}
        >
          Enable Autonomous Self-Healing
        </label>
      </div>
    );
  },
};

export const Disabled: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <Switch disabled checked={true} />
        <span style={{ fontSize: "14px", opacity: 0.6 }}>
          Disabled (Checked)
        </span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <Switch disabled checked={false} />
        <span style={{ fontSize: "14px", opacity: 0.6 }}>
          Disabled (Unchecked)
        </span>
      </div>
    </div>
  ),
};
