import type { Meta, StoryObj } from "@storybook/react";
import { InputField } from "design-system/inputs/InputField/InputField";
import "assets/styles/index.css";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "Inputs/InputField",
  component: InputField,
  tags: ["autodocs"],
} satisfies Meta<typeof InputField>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Text: Story = {
  args: {
    label: "Text",
    srOnly: false,
    required: false,
    type: "text",
    name: "text",
    id: "text",
    placeholder: "Enter a text",
    disabled: false,
    onChange: (value) => console.log(value),
  },
};

export const Number: Story = {
  args: {
    label: "Number",
    srOnly: false,
    required: false,
    type: "number",
    name: "number",
    id: "number",
    placeholder: "Enter a number",
    disabled: false,
    onChange: (value) => console.log(value),
  },
};

export const Email: Story = {
  args: {
    label: "E-mail",
    srOnly: false,
    required: false,
    type: "email",
    name: "email",
    id: "email",
    placeholder: "Enter a email",
    disabled: false,
    onChange: (value) => console.log(value),
  },
};

export const URL: Story = {
  args: {
    label: "URL",
    srOnly: false,
    required: false,
    type: "url",
    name: "url",
    id: "url",
    placeholder: "Enter a url",
    disabled: false,
    onChange: (value) => console.log(value),
  },
};

export const Telephone: Story = {
  args: {
    label: "Telephone",
    srOnly: false,
    required: false,
    type: "tel",
    name: "tel",
    id: "tel",
    placeholder: "Enter a telephone",
    disabled: false,
    onChange: (value) => console.log(value),
  },
};
