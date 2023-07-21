import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@nomad/react-button";
import { Cookies } from "./Cookies";
import "assets/styles/index.css";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "Messages/Cookies",
  component: Cookies,
  decorators: [
    (Story) => (
      <div
        style={{
          position: "relative",
          minHeight: "600px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
        }}>
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof Cookies>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Default: Story = {
  args: {
    body: (
      <p className="text-sm">
        We use cookies to improve your experience on our website. These cookies
        help us understand how our visitors use our site, provide personalized
        content, and improve our services.
      </p>
    ),
    navigation: (
      <>
        <Button
          size="sm"
          style="text-white bg-black border-black hover:bg-slate-100 hover:text-black hover:border-slate-100 focus:ring-black rounded-full"
          type="button"
          onClick={() => {
            console.log("Accept this cookie");
          }}>
          Accept
        </Button>
        <Button
          size="sm"
          style="text-black bg-white border hover:bg-black hover:text-white focus:ring-black rounded-full hover:border-black"
          type="button"
          onClick={() => {
            console.log("Reject this cookie");
          }}>
          Reject
        </Button>
      </>
    ),
    toggle: true,
  },
};
