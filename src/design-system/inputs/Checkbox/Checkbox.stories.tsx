import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "design-system/inputs/Checkbox/Checkbox";
import "assets/styles/index.css";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "Inputs/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Default: Story = {
  args: {
    label: "Sample Checkbox",
    required: false,
    srOnly: false,
    options: [
      { id: "1", value: "Option 1" },
      { id: "2", value: "Option 2" },
      { id: "3", value: "Option 3" },
    ],
    onChange: (value) => console.log(value),
  },
};
