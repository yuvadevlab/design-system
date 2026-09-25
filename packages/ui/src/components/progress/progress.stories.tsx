import type { Meta, StoryObj } from "@storybook/react";
import { Progress } from "./progress";

const meta: Meta<typeof Progress> = {
  title: "Components/Progress",
  component: Progress,
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: { type: "range", min: 0, max: 100, step: 1 },
      description: "Progress value percentage (0 to 100)",
    },
  },
  args: {
    value: 68,
  },
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  render: (args) => (
    <div
      style={{
        width: "320px",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: "12px",
          opacity: 0.8,
        }}
      >
        <span>Agent Synthesis Pipeline</span>
        <span>{args.value}%</span>
      </div>
      <Progress {...args} />
    </div>
  ),
};
