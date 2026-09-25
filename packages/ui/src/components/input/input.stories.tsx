import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Search, Mail, Eye, Key } from "lucide-react";
import { Input } from "./input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    placeholder: {
      control: "text",
      description: "Placeholder text displayed when input is empty",
    },
    disabled: {
      control: "boolean",
      description: "Whether the input is non-interactive",
    },
    type: {
      control: "select",
      options: ["text", "password", "email", "number", "search"],
      description: "HTML input type",
    },
  },
  args: {
    placeholder: "Type something...",
    disabled: false,
    type: "text",
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  render: (args) => (
    <div style={{ width: "320px" }}>
      <Input {...args} />
    </div>
  ),
};

export const WithStartIcon: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        width: "320px",
      }}
    >
      <Input
        placeholder="Search agents, workspaces..."
        startIcon={
          <Search style={{ width: "16px", height: "16px", opacity: 0.6 }} />
        }
      />
      <Input
        type="email"
        placeholder="user@devlab.ai"
        startIcon={
          <Mail style={{ width: "16px", height: "16px", opacity: 0.6 }} />
        }
      />
    </div>
  ),
};

export const WithEndIcon: Story = {
  render: () => (
    <div style={{ width: "320px" }}>
      <Input
        type="password"
        placeholder="Enter secret key..."
        startIcon={
          <Key style={{ width: "16px", height: "16px", opacity: 0.6 }} />
        }
        endIcon={
          <button
            type="button"
            aria-label="Toggle password visibility"
            style={{
              background: "transparent",
              border: "none",
              padding: 0,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              opacity: 0.6,
            }}
          >
            <Eye style={{ width: "16px", height: "16px" }} />
          </button>
        }
      />
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div style={{ width: "320px" }}>
      <Input
        disabled
        placeholder="Disabled input field"
        value="System locked parameter"
      />
    </div>
  ),
};
