import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import Task, { TaskProps } from "../components/TaskItem";

export default {
  title: "Example/Task",
  component: Task,
  argTypes: {
    updateTask: { action: "Click complete" },
    deleteTask: { action: "Click delete" },
  },
} as Meta;

const Template: Story<TaskProps> = (args) => <Task {...args} />;

export const NewTask = Template.bind({});
NewTask.args = {
  task: {
    _id: "1234",
    description: "Sample new task",
    status: "new",
  },
};

export const CompletedTask = Template.bind({});
CompletedTask.args = {
  task: {
    _id: "1234",
    description: "Sample completed task",
    status: "completed",
  },
};
