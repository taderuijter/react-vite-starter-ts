import type { Meta, StoryObj } from "@storybook/react";
import { Navbar } from "components/navigation/Navbar/Navbar";
import "assets/styles/index.css";
import { withRouter } from "storybook-addon-react-router-v6";
import { Link } from "react-router-dom";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "Navigation/Navbar",
  component: Navbar,
  decorators: [withRouter],
  tags: ["autodocs"],
} as Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Default: Story = {
  args: {
    brand: (
      <span className="text-xl font-bold text-gray-900">React Boilerplate</span>
    ),
    navLinks: (
      <>
        <Link className="text-sm hover:text-slate-600" to="/">
          Home
        </Link>
        <Link className="text-sm hover:text-slate-600" to="/inputs">
          Inputs
        </Link>
        <Link className="text-sm hover:text-slate-600" to="/users">
          Users
        </Link>
      </>
    ),
    style: "py-4 bg-slate-100",
  },
};
