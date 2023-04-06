import type { Meta, StoryObj } from "@storybook/react";
import { Password } from "design-system/inputs/Password/Password";
import "assets/styles/index.css";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "Inputs/Password",
  component: Password,
  tags: ["autodocs"],
} satisfies Meta<typeof Password>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Default: Story = {
  args: {
    label: "Password",
    srOnly: false,
    required: true,
    name: "password",
    id: "password",
    placeholder: "Enter your password",
    disabled: false,
    onChange: (value) => console.log(value),
  },
};
