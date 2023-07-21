import type { Meta, StoryObj } from "@storybook/react";
import { RadioInput } from "./Radio";
import "assets/styles/index.css";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "Inputs/Radio",
  component: RadioInput,
  tags: ["autodocs"],
} satisfies Meta<typeof RadioInput>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Default: Story = {
  args: {
    label: "Radio Button",
    description: "This is a radio button",
    required: false,
    options: [
      { id: "1", value: "Option 1" },
      { id: "2", value: "Option 2" },
      { id: "3", value: "Option 3" },
    ],
    onChange: (value) => console.log(value),
  },
};
