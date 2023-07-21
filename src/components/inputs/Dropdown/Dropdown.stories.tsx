import type { Meta, StoryObj } from "@storybook/react";
import { DropdownInput } from "./Dropdown";
import "assets/styles/index.css";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "Inputs/Dropdown",
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
  component: DropdownInput,
  tags: ["autodocs"],
} satisfies Meta<typeof DropdownInput>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Default: Story = {
  args: {
    placeholder: "Search",
    search: true,
    options: [
      { value: "1", label: "Option 1" },
      { value: "2", label: "Option 2" },
      { value: "3", label: "Option 3" },
    ],
    onChange: () => {
      console.log("changed");
    },
  },
};
