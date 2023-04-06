import type { Meta, StoryObj } from "@storybook/react";
import { Title } from "design-system/typography/Title/Title";
import "assets/styles/index.css";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "Typography/Title",
  component: Title,
  tags: ["autodocs"],
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const h1: Story = {
  args: {
    type: "h1",
    text: "Heading 1",
  },
};
export const h2: Story = {
  args: {
    type: "h2",
    text: "Heading 2",
  },
};
export const h3: Story = {
  args: {
    type: "h3",
    text: "Heading 3",
  },
};
export const h4: Story = {
  args: {
    type: "h4",
    text: "Heading 4",
  },
};
export const h5: Story = {
  args: {
    type: "h5",
    text: "Heading 5",
  },
};
export const h6: Story = {
  args: {
    type: "h6",
    text: "Heading 6",
  },
};
