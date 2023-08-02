import type { Meta, StoryObj } from "@storybook/react";
import { AvarageRating } from "./AvarageRating";
import "assets/styles/index.css";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "Reviews/AvarageRating",
  component: AvarageRating,
  tags: ["autodocs"],
} satisfies Meta<typeof AvarageRating>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Default: Story = {
  args: {
    title: "3.000 studenten geven deze cursus een",
    rating: 4,
    text: "van de",
  },
};
