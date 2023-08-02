import type { Meta, StoryObj } from "@storybook/react";
import { Link } from "react-router-dom";
import { withRouter } from "storybook-addon-react-router-v6";
import { FeaturedHero } from "./FeaturedHero";
import "assets/styles/index.css";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "Heros/FeaturedHero",
  component: FeaturedHero,
  decorators: [withRouter],
  tags: ["autodocs"],
} satisfies Meta<typeof FeaturedHero>;

export default meta;
type Story = StoryObj<typeof meta>;

const featured = [
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    category: "Category",
    href: "/",
    thumbnail: "https://source.unsplash.com/random/300x300",
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    category: "Category",
    href: "/",
    thumbnail: "https://source.unsplash.com/random/300x300",
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    category: "Category",
    href: "/",
    thumbnail: "https://source.unsplash.com/random/300x300",
  },
];

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Default: Story = {
  args: {
    bg: "bg-slate-900",
    content: (
      <>
        <h1>This is my default hero header.</h1>
        <p className="text-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          blandit sapien quis aliquet condimentum. Donec fringilla eu nunc eu
          convallis. Donec fringilla quam magna, eget rutrum magna tempor sed.
          Nam nec leo id nisi ultrices pulvinar vitae quis risus.{" "}
        </p>
        <Link
          className="inline-block w-full lg:w-auto px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 font-pj justif-center hover:bg-gray-600"
          to="/">
          Contact us
        </Link>
      </>
    ),
    featured,
    Link,
  },
};
