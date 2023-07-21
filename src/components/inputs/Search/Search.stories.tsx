import type { Meta, StoryObj } from "@storybook/react";
import { SearchInput } from "./Search";
import "assets/styles/index.css";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "Inputs/Search",
  component: SearchInput,
  tags: ["autodocs"],
} satisfies Meta<typeof SearchInput>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Deafault: Story = {
  args: {
    name: "text",
    id: "text",
    placeholder: "Enter a text",
    disabled: false,
    onChange: (value) => console.log(value),
  },
};
