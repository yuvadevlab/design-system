import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./badge";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "secondary",
        "destructive",
        "success",
        "warning",
        "info",
        "outline",
      ],
      description: "Visual style variant of the badge",
    },
    children: {
      control: "text",
      description: "Text inside the badge",
    },
  },
  args: {
    children: "Status Badge",
    variant: "default",
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {};

export const AllVariants: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        gap: "8px",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="success">Active / Success</Badge>
      <Badge variant="warning">Pending / Warning</Badge>
      <Badge variant="info">Syncing / Info</Badge>
      <Badge variant="destructive">Error / Failed</Badge>
    </div>
  ),
};
