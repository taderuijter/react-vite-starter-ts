import type { Meta, StoryObj } from "@storybook/react";
import { SelectInput } from "./Select";
import "assets/styles/index.css";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "Inputs/Select",
  component: SelectInput,
  tags: ["autodocs"],
} satisfies Meta<typeof SelectInput>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Default: Story = {
  args: {
    label: "Select input",
    required: false,
    name: "select",
    id: "select",
    defaultValue: "Option 1",
    disabled: false,
    options: [
      { label: "Option 1", value: "Option 1" },
      { label: "Option 2", value: "Option 2" },
      { label: "Option 3", value: "Option 3" },
    ],
    onChange: (value) => {
      console.log(value);
    },
  },
};
