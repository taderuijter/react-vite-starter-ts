import type { Meta, StoryObj } from "@storybook/react";
import { Table } from "./Table";
import { tBody, tHead } from "./TableData";
import "assets/styles/index.css";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "Content/Table",
  component: Table,
  tags: ["autodocs"],
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Default: Story = {
  args: {
    search: true,
    tHead: tHead,
    tBody: tBody,
    resultText: "No results found",
  },
};
