// import libraries
import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";

// Import components
import { Modal } from "design-system/messages/Modal/Modal";
import { Icon } from "design-system/lables/Icon/Icon";
import { Button } from "design-system/actions/Button/Button";

// Import store
import AppProvider from "store/AppProvider";

// Import icons
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

// Import styles
import "assets/styles/index.css";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "Messages/Modal",
  component: Modal,
  decorators: [
    (Story) => (
      <AppProvider>
        <Story />
      </AppProvider>
    ),
    withRouter,
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Default: Story = {
  args: {
    icon: (
      <Icon
        icon={<MagnifyingGlassIcon className="h-4 w-4 text-blue-500" />}
        className="bg-blue-100"
      />
    ),
    title: "Important Information!",
    content:
      "Heads up! 📘 Here's some important information you should be aware of before proceeding. Familiarize yourself with the details and guidelines to ensure a smooth and hassle-free experience. If you need further clarification or have any questions, our support team is always ready to help. Stay informed and enjoy!",
    button: (
      <Button
        type="button"
        text="Accept"
        styling="solid"
        onClick={() => {
          console.log("BAMI");
        }}
      />
    ),
  },
};
