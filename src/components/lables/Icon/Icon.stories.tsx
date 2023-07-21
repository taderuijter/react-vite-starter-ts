import type { Meta, StoryObj } from "@storybook/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { Icon } from "./Icon";
import "assets/styles/index.css";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "Labels/Icon",
  component: Icon,
  tags: ["autodocs"],
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Default: Story = {
  args: {
    children: <MagnifyingGlassIcon className="h-4 w-4 text-green-500" />,
    styling: "bg-green-100",
  },
};
