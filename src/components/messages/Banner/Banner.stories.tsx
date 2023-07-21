import type { Meta, Story } from "@storybook/react";
import AppProvider from "store/AppProvider";
import { withRouter } from "storybook-addon-react-router-v6";
import { useContext } from "react";
import "assets/styles/index.css";
import { GlobalContext } from "store/GlobalContext";
import { Banner, BannerProps } from "./Banner";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta = {
  title: "Messages/Banner",
  component: Banner,
  decorators: [
    (Story) => (
      <AppProvider>
        <Story />
      </AppProvider>
    ),
    withRouter,
  ],
  tags: ["autodocs"],
};

export default meta;

const Template: Story<BannerProps> = (args) => {
  const { state, dispatch } = useContext(GlobalContext);

  const handleToggle = (value: boolean) => {
    dispatch({ type: "TOGGLE_BANNER", payload: value });
  };

  return <Banner {...args} toggle={state.banner} handleToggle={handleToggle} />;
};

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Default = Template.bind({});
Default.args = {
  children: "This is a success banner",
};
