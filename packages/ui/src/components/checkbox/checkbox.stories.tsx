import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  render: () => {
    const [checked, setChecked] = useState<boolean | "indeterminate">(true);
    return (
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <Checkbox
          id="terms"
          checked={checked}
          onCheckedChange={(val) => setChecked(val)}
        />
        <label
          htmlFor="terms"
          style={{ fontSize: "14px", fontWeight: 500, cursor: "pointer" }}
        >
          Enable automatic model checkpoints
        </label>
      </div>
    );
  },
};

export const Disabled: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <Checkbox disabled checked={true} id="d1" />
        <label htmlFor="d1" style={{ fontSize: "14px", opacity: 0.6 }}>
          Disabled (Checked)
        </label>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <Checkbox disabled checked={false} id="d2" />
        <label htmlFor="d2" style={{ fontSize: "14px", opacity: 0.6 }}>
          Disabled (Unchecked)
        </label>
      </div>
    </div>
  ),
};
