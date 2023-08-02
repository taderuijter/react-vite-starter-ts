import type { Meta, StoryObj } from "@storybook/react";
import { Subtitle } from "./Subtitle";
import "assets/styles/index.css";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "Typography/Subtitle",
  component: Subtitle,
  tags: ["autodocs"],
} satisfies Meta<typeof Subtitle>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Default: Story = {
  args: {
    children: "This is a subtitle",
    style: "text-slate-400",
  },
};
