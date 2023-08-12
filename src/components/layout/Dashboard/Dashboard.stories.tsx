import type { Meta, StoryObj } from "@storybook/react";
import { Dashboard } from "./Dashboard";
import "assets/styles/index.css";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "Layout/Dashboard",
  component: Dashboard,
  tags: ["autodocs"],
} satisfies Meta<typeof Dashboard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Default: Story = {
  args: {
    children: "This is a Dashboard component for content.",
  },
};
