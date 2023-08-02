import type { Meta, StoryObj } from "@storybook/react";
import { OpeningTime } from "./OpeningTime";
import "assets/styles/index.css";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "Actions/OpeningTime",
  component: OpeningTime,
  tags: ["autodocs"],
} satisfies Meta<typeof OpeningTime>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Open: Story = {
  args: {
    openHours: "8",
    closingHours: "17",
    open: "We are open",
    closed: "We are closed",
    style: "text-black",
  },
};

export const Closed: Story = {
  args: {
    openHours: "8",
    closingHours: "9",
    open: "We are open",
    closed: "We are closed",
  },
};

export const Styling: Story = {
  args: {
    openHours: "8",
    closingHours: "9",
    open: "We are open",
    closed: "We are closed",
    style: "text-purple-500",
  },
};
