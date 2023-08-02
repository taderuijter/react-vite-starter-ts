import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "components/actions/Button/Button";
import { DefaultHero } from "./DefaultHero";
import "assets/styles/index.css";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "Heros/DefaultHero",
  component: DefaultHero,
  tags: ["autodocs"],
} satisfies Meta<typeof DefaultHero>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Default: Story = {
  args: {
    bg: "bg-gradient-to-t from-slate-200 to-slate-100",
    content: (
      <>
        <h1>This is my default hero header.</h1>
        <p className="text-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          blandit sapien quis aliquet condimentum. Donec fringilla eu nunc eu
          convallis. Donec fringilla quam magna, eget rutrum magna tempor sed.
          Nam nec leo id nisi ultrices pulvinar vitae quis risus.{" "}
        </p>
        <div className="flex-row md:flex space-y-4 md:space-x-4 md:space-y-0">
          <Button
            style="w-full lg:w-auto px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 font-pj justif-center hover:bg-gray-600"
            type="button"
            onClick={() => {
              console.log("BAMI");
            }}>
            Contact us
          </Button>
          <Button
            style="w-full lg:w-auto bg-white px-4 py-4 mt-4 text-lg font-bold transition-all duration-200 bg-transparent border border-transparent sm:mt-0 font-pj justif-center rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 hover:bg-gray-200 focus:bg-gray-200"
            type="button"
            onClick={() => {
              console.log("BAMI");
            }}>
            Keep on reading
          </Button>
        </div>
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
