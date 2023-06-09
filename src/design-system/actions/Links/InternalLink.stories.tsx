import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";
import { InternalLink } from "design-system/actions/Links/Links";
import "assets/styles/index.css";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "Actions/InternalLink",
  decorators: [withRouter],
  component: InternalLink,
  tags: ["autodocs"],
} satisfies Meta<typeof InternalLink>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Solid: Story = {
  args: {
    styling: "solid",
    href: "/",
    text: "Sample Button",
  },
};

export const Outline: Story = {
  args: {
    styling: "outline",
    href: "/",
    text: "Sample Button",
  },
};

export const Transparent: Story = {
  args: {
    styling: "transparent",
    href: "/",
    text: "Sample Button",
  },
};

export const Link: Story = {
  args: {
    styling: "link",
    href: "/",
    text: "Sample Button",
  },
};
