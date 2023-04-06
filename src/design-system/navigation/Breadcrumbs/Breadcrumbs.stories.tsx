import type { Meta, StoryObj } from "@storybook/react";
import { Breadcrumbs } from "design-system/navigation/Breadcrumbs/Breadcrumbs";
import "assets/styles/index.css";
import { withRouter } from "storybook-addon-react-router-v6";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "Navigation/Breadcrumbs",
  component: Breadcrumbs,
  decorators: [withRouter],
  tags: ["autodocs"],
} satisfies Meta<typeof Breadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Default: Story = {
  args: {
    pages: [
      { id: "blog", name: "Blog", href: "/blog", current: false },
      {
        id: "blog-message",
        name: "Sample blog post",
        href: "/blog/sample-blog-post",
        current: true,
      },
    ],
  },
};
