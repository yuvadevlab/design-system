import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Sparkles, ArrowRight, Trash2 } from "lucide-react";
import { Button } from "./button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
      ],
      description: "Visual style variant of the button",
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "icon"],
      description: "Size dimensions of the button",
    },
    disabled: {
      control: "boolean",
      description: "Whether the button is non-interactive",
    },
    asChild: {
      table: { disable: true },
    },
    children: {
      control: "text",
      description: "Content inside the button",
    },
  },
  args: {
    children: "Button",
    variant: "default",
    size: "default",
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {};

export const AllVariants: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        gap: "12px",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <Button variant="default">Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        gap: "12px",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <Button size="sm">Small</Button>
      <Button size="default">Medium (Default)</Button>
      <Button size="lg">Large</Button>
      <Button size="icon" aria-label="Sparkles Action">
        <Sparkles style={{ width: "16px", height: "16px" }} />
      </Button>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        gap: "12px",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <Button
        variant="default"
        style={{ display: "inline-flex", gap: "8px", alignItems: "center" }}
      >
        <Sparkles style={{ width: "16px", height: "16px" }} />
        <span>Generate AI</span>
      </Button>
      <Button
        variant="outline"
        style={{ display: "inline-flex", gap: "8px", alignItems: "center" }}
      >
        <span>Next Step</span>
        <ArrowRight style={{ width: "16px", height: "16px" }} />
      </Button>
      <Button
        variant="destructive"
        style={{ display: "inline-flex", gap: "8px", alignItems: "center" }}
      >
        <Trash2 style={{ width: "16px", height: "16px" }} />
        <span>Delete Project</span>
      </Button>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        gap: "12px",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <Button disabled variant="default">
        Disabled Default
      </Button>
      <Button disabled variant="secondary">
        Disabled Secondary
      </Button>
      <Button disabled variant="outline">
        Disabled Outline
      </Button>
      <Button disabled variant="destructive">
        Disabled Destructive
      </Button>
    </div>
  ),
};
