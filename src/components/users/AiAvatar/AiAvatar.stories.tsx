import type { Meta, StoryObj } from "@storybook/react";
import { AiAvatar } from "./AiAvatar";
import "assets/styles/index.css";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "Users/AiAvatar",
  component: AiAvatar,
  tags: ["autodocs"],
} satisfies Meta<typeof AiAvatar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Default: Story = {
  args: {},
};
