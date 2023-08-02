import type { Meta, StoryObj } from "@storybook/react";
import { PhoneNumber } from "./Phonenumber";
import "assets/styles/index.css";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "Actions/PhoneNumber",
  component: PhoneNumber,
  tags: ["autodocs"],
} satisfies Meta<typeof PhoneNumber>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Default: Story = {
  args: {
    PhoneNumber: "010-34523948",
    style: "bg-slate-100 text-slate-800",
  },
};
