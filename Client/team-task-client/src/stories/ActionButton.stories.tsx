import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { ActionButton, ActionProps } from "../components/ActionButton";

export default {
  title: "Example/ActionButton",
  argTypes: {
    onClick: { action: "Button click" },
  },
} as Meta;

const Template: Story<ActionProps> = (args) => <ActionButton {...args} />;

export const Delete = Template.bind({});
Delete.args = { type: "delete" };

export const Complete = Template.bind({});
Complete.args = { type: "complete" };

export const Add = Template.bind({});
Add.args = { type: "add" };
