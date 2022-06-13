import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Button", // 타이틀은 사이드바의 폴더구조와도 연관이 있다.
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },

  // 파라미터를 사용하여 배경색을 설정할 수 있다.
  // parameters: {
  //   backgrounds: {
  //     values: [
  //       { name: "red", value: "#f00" },
  //       { name: "green", value: "#0f0" },
  //       { name: "blue", value: "#00f" },
  //     ],
  //   },
  // },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: "Button",
};

// 파라미터를 사용하여 특정 템플릿에만 배경을 설정할 수 있다.
// Primary.parameters = {
//   backgrounds: {
//     values: [
//       { name: "red", value: "#f00" },
//       { name: "green", value: "#0f0" },
//       { name: "blue", value: "#00f" },
//     ],
//   },
// };

// decorators를 통해 마크업을 스토리에 감쌀 수 있다.
Primary.decorators = [
  (Story) => (
    <div style={{ margin: "3em" }}>
      <Story />
    </div>
  ),
];

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button",
};
