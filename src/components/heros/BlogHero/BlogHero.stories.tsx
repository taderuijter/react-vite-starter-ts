import type { Meta, StoryObj } from "@storybook/react";
import { Link } from "react-router-dom";
import { withRouter } from "storybook-addon-react-router-v6";
import { BlogHero } from "./BlogHero";
import "assets/styles/index.css";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "Heros/BlogHero",
  component: BlogHero,
  decorators: [withRouter],
  tags: ["autodocs"],
} satisfies Meta<typeof BlogHero>;

export default meta;
type Story = StoryObj<typeof meta>;

const pages = [
  {
    id: "1",
    name: "Featured",
    href: "/featured",
    current: true,
  },
  {
    id: "2",
    name: "This is the blog title",
    href: "/featured/this-is-the-blog-title",
    current: false,
  },
];

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Default: Story = {
  args: {
    Link,
    pages: pages,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    thumbnail:
      "https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/blog-content/1/cover.png",
  },
};
