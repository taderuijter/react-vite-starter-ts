import type { Meta, StoryObj } from "@storybook/react";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { Bullets } from "./Bullets";
import "assets/styles/index.css";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "Content/Bullets",
  component: Bullets,
  tags: ["autodocs"],
} satisfies Meta<typeof Bullets>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Default: Story = {
  args: {
    icon: <CheckCircleIcon className="text-green-600 mt-[2px] h-5 w-5" />,
    row: true,
    list: [
      "This is a Bullets item",
      "This is another Bullets item",
      "This is a third Bullets item",
    ],
  },
};

export const Inline: Story = {
  args: {
    icon: <CheckCircleIcon className="text-green-600 mt-[2px] h-5 w-5" />,
    row: false,
    list: [
      "This is a Bullets item",
      "This is another Bullets item",
      "This is a third Bullets item",
    ],
  },
};
