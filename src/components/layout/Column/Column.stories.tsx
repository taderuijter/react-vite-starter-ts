import type { Meta, StoryObj } from "@storybook/react";
import { Column } from "./Column";
import "assets/styles/index.css";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "Layout/Column",
  component: Column,
  tags: ["autodocs"],
} satisfies Meta<typeof Column>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Left: Story = {
  args: {
    style: "bg-slate-100 py-8",
    position: "left",
    content: (
      <>
        <h2>This is my default hero header.</h2>
        <p className="text-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          blandit sapien quis aliquet condimentum. Donec fringilla eu nunc eu
          convallis. Donec fringilla quam magna, eget rutrum magna tempor sed.
          Nam nec leo id nisi ultrices pulvinar vitae quis risus.{" "}
        </p>
      </>
    ),
    image: (
      <img
        className="w-full mx-auto rounded-md"
        src="https://images.unsplash.com/photo-1689832870997-18b825b4b676?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3548&q=80"
        alt=""
      />
    ),
  },
};

export const Right: Story = {
  args: {
    style: "bg-slate-100 py-8",
    position: "right",
    content: (
      <>
        <h2>This is my default hero header.</h2>
        <p className="text-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          blandit sapien quis aliquet condimentum. Donec fringilla eu nunc eu
          convallis. Donec fringilla quam magna, eget rutrum magna tempor sed.
          Nam nec leo id nisi ultrices pulvinar vitae quis risus.{" "}
        </p>
      </>
    ),
    image: (
      <img
        className="w-full mx-auto rounded-md"
        src="https://images.unsplash.com/photo-1689832870997-18b825b4b676?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3548&q=80"
        alt=""
      />
    ),
  },
};
