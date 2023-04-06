import type { Meta, StoryObj } from "@storybook/react";
import { Layout } from "design-system/layout/Layout/Layout";
import "assets/styles/index.css";
import { withRouter } from "storybook-addon-react-router-v6";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "Layout/Layout",
  decorators: [withRouter],
  component: Layout,
  tags: ["autodocs"],
} satisfies Meta<typeof Layout>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Default: Story = {
  args: {
    children: "This the layout component for the app.",
  },
};
