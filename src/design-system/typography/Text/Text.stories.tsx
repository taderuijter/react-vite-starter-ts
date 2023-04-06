import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "design-system/typography/Text/Text";
import "assets/styles/index.css";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "Typography/Text",
  component: Text,
  tags: ["autodocs"],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Default: Story = {
  args: {
    children:
      "Introducing our versatile Text Component! This adaptable element allows you to effortlessly display and style text content within your application. Whether you need headings, paragraphs, or any other typographical element, our Text Component has got you covered. With an array of customizable options such as font size, color, and weight, this component ensures your text remains consistent and visually appealing throughout your project. Say goodbye to clunky and inconsistent typography, and say hello to a seamless text experience that enhances the overall look and feel of your application.",
  },
};
