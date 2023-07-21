import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "components/actions/Button/Button";
import "assets/styles/index.css";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "Actions/Button",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Default: Story = {
  args: {
    children: "Sample Button",
    ariaLabel: "This is a sample button",
    type: "button",
    size: "sm",
    style:
      "text-black bg-white border hover:bg-black hover:text-white focus:ring-black rounded-full",
    onClick: () => console.log("Button Clicked"),
  },
};
