import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from "design-system/messages/Alert/Alert";
import "assets/styles/index.css";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "Messages/Alert",
  component: Alert,
  tags: ["autodocs"],
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Succes: Story = {
  args: {
    type: "success",
    title: "Success Confirmed!",
    description:
      "Congratulations! 🎉 Your action has been successfully completed. Thank you for your input, and we're thrilled to have you as part of our community. Keep up the great work!",
  },
};

export const Error: Story = {
  args: {
    type: "error",
    title: "Error Encountered!",
    description:
      "Oops! 😞 We encountered an error while processing your request. Please double-check your input and try again. If the issue persists, don't hesitate to contact our support team for assistance. We apologize for the inconvenience.",
  },
};

export const Warning: Story = {
  args: {
    type: "warning",
    title: "Proceed with Caution!",
    description:
      "Caution! Please be aware that the action you are about to perform may have unintended consequences. We recommend reviewing the details and confirming that this is the desired course of action. If you have any questions or concerns, please consult the documentation or contact our support team. Proceed with caution.",
  },
};

export const Info: Story = {
  args: {
    type: "info",
    title: "Important Information!",
    description:
      "Heads up! 📘 Here's some important information you should be aware of before proceeding. Familiarize yourself with the details and guidelines to ensure a smooth and hassle-free experience. If you need further clarification or have any questions, our support team is always ready to help. Stay informed and enjoy!",
  },
};
