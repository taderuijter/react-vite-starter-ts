import type { Meta, StoryObj } from "@storybook/react";
import { PasswordInput } from "./Password";
import "assets/styles/index.css";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "Inputs/Password",
  component: PasswordInput,
  tags: ["autodocs"],
} satisfies Meta<typeof PasswordInput>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Default: Story = {
  args: {
    label: "Password",
    required: true,
    name: "password",
    id: "password",
    placeholder: "Enter your password",
    disabled: false,
    onChange: (value) => console.log(value),
  },
};
