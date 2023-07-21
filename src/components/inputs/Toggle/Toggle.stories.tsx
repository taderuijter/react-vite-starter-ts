import type { Meta, StoryObj } from "@storybook/react";
import { Toggle } from "./Toggle";
import "assets/styles/index.css";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "Inputs/Toggle",
  component: Toggle,
  tags: ["autodocs"],
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Default: Story = {
  args: {
    label: "Toggle input",
    srOnly: false,
    required: false,
    onChange: (value) => {
      console.log(value);
    },
  },
};
