import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "components/inputs/Button";
import "assets/styles/index.css";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "Inputs/Button",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Solid: Story = {
  args: {
    text: "Sample Button",
    type: "button",
    styling: "solid",
    onClick: () => console.log("Button Clicked"),
  },
};

export const Outline: Story = {
  args: {
    text: "Sample Button",
    type: "button",
    styling: "outline",
    onClick: () => console.log("Button Clicked"),
  },
};

export const Transparent: Story = {
  args: {
    text: "Sample Button",
    type: "button",
    styling: "transparent",
    onClick: () => console.log("Button Clicked"),
  },
};
