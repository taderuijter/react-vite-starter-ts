import type { Meta, StoryObj } from "@storybook/react";
import { Embed } from "./Embed";
import "assets/styles/index.css";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "Content/Embed",
  component: Embed,
  tags: ["autodocs"],
} satisfies Meta<typeof Embed>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Default: Story = {
  args: {
    style: "bg-slate-100 rounded-md",
    url: "https://www.youtube.com/embed/7e90gBu4pas",
    text: "This is a video",
  },
};
