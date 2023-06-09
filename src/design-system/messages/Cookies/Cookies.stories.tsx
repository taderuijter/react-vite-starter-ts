import type { Meta, StoryObj } from "@storybook/react";
import { Cookies } from "design-system/messages/Cookies/Cookies";
import AppProvider from "store/AppProvider";
import { withRouter } from "storybook-addon-react-router-v6";
import "assets/styles/index.css";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "Messages/Cookies",
  component: Cookies,
  decorators: [
    (Story) => (
      <AppProvider>
        <Story />
      </AppProvider>
    ),
    withRouter,
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof Cookies>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Default: Story = {
  args: {},
};
