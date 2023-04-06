import type { Meta, StoryObj } from "@storybook/react";
import { Navbar } from "design-system/navigation/Navbar/Navbar";
import "assets/styles/index.css";
import { withRouter } from "storybook-addon-react-router-v6";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "Navigation/Navbar",
  component: Navbar,
  decorators: [withRouter],
  tags: ["autodocs"],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Default: Story = {
  args: {},
};
