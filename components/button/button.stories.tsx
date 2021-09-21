/*
 * @Description: 
 * @Author: changqing
 * @Date: 2021-09-21 17:09:33
 * @LastEditTime: 2021-09-21 18:08:59
 * @LastEditors: changqing
 * @Usage: 
 */
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from ".";

export default {
  title: "通用/Button(按钮)",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button  {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  children: "按钮",
};