import type { Meta, StoryObj } from "@storybook/react";
import { Stars } from "./Stars";
import "assets/styles/index.css";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "Reviews/Stars",
  component: Stars,
  tags: ["autodocs"],
} satisfies Meta<typeof Stars>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Default: Story = {
  args: {
    rating: 3,
    text: "out of",
  },
};
