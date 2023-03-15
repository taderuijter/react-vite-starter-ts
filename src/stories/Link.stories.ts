import type { Meta, StoryObj } from "@storybook/react";
import { InternalLink } from "../components/globals/Links";
import "../assets/styles/index.css";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "Navigation/Links",
  component: InternalLink,
  tags: ["autodocs"],
} satisfies Meta<typeof InternalLink>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Solid: Story = {
  args: {
    text: "Sample Link",
    type: "internal-link",
    styling: "solid",
    href: "#",
  },
};

export const Outline: Story = {
  args: {
    text: "Sample Link",
    type: "internal-link",
    styling: "outline",
    href: "#",
  },
};

export const Transparent: Story = {
  args: {
    text: "Sample Link",
    type: "internal-link",
    styling: "transparent",
    href: "#",
  },
};
