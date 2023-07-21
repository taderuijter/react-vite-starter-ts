import type { Meta, StoryObj } from "@storybook/react";
import { TextArea } from "./TextArea";
import "assets/styles/index.css";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "Inputs/TextArea",
  component: TextArea,
  tags: ["autodocs"],
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Default: Story = {
  args: {
    label: "TextArea input",
    required: false,
    name: "TextArea",
    id: "TextArea",
    disabled: false,
    onChange: (value) => {
      console.log(value);
    },
  },
};
