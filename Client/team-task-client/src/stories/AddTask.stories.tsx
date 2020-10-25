import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import AddTask, { Props } from "../components/AddTask";

export default {
  title: "Example/AddTaskForm",
  component: AddTask,
  argTypes: {
    saveTask: { action: "Click add task" },
  },
} as Meta;

const Template: Story<Props> = (args) => <AddTask {...args} />;

export const AddNewTask = Template.bind({});
AddNewTask.args = {};
