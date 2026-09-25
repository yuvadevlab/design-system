import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from "./skeleton";

const meta: Meta<typeof Skeleton> = {
  title: "Components/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "16px",
        width: "320px",
      }}
    >
      <Skeleton
        style={{ width: "48px", height: "48px", borderRadius: "9999px" }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          flex: 1,
        }}
      >
        <Skeleton
          style={{ height: "16px", width: "100%", borderRadius: "4px" }}
        />
        <Skeleton
          style={{ height: "12px", width: "70%", borderRadius: "4px" }}
        />
      </div>
    </div>
  ),
};

export const CardSkeleton: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        width: "320px",
        padding: "16px",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius)",
      }}
    >
      <Skeleton
        style={{
          height: "140px",
          width: "100%",
          borderRadius: "calc(var(--radius) - 4px)",
        }}
      />
      <Skeleton style={{ height: "20px", width: "60%", borderRadius: "4px" }} />
      <Skeleton style={{ height: "14px", width: "90%", borderRadius: "4px" }} />
      <Skeleton style={{ height: "14px", width: "80%", borderRadius: "4px" }} />
    </div>
  ),
};
