import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Header } from "./Header";

export default {
  title: "Example/Header",
  component: Header,

  // 컴포넌트 레벨에서 args를 선언할 수 있다.
  // args: {
  //   user: {},
  // }
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...LoggedIn.args, // 다른 컴포넌트의 args를 전개 연산자를 통해 선언할 수 있다.
};
