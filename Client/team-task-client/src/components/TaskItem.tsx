import React, { forwardRef } from "react";
import styled from "styled-components";
import { ActionButton } from "./ActionButton";

export interface TaskProps {
  task: ITask;
  updateTask: (task: ITask) => void;
  deleteTask: (_id: string) => void;
}

const TaskButton = styled.div`
  background-color: ${(props) => props.color || "#FFF"};
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 400;
  border: 0;
  border-radius: 3em;
  display: inline-block;
  line-height: 1;
  font-size: 20px;
  padding: 6px 8px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 5px 4px 8px 5px rgba(100, 100, 100, 0.1);
  color: ${(props) => (props.itemType === "completed" ? "darkgrey" : "black")};
`;

const TaskAction = styled.span`
  z-index: 10;
  display: flex;
`;

const TaskDescription = styled.span`
  padding-left: 1rem;
  text-decoration: ${(props) =>
    props.itemType === "completed" ? "line-through" : ""};
`;

const Spacer = styled.span`
  padding: 0 0.3rem;
`;

export const Task = forwardRef((props: TaskProps, ref: any) => {
  const { task, updateTask, deleteTask } = props;
  return (
    <div className="Card" ref={ref}>
      <TaskButton itemType={task.status}>
        <TaskDescription itemType={task.status}>
          {task.description}
        </TaskDescription>
        <TaskAction id="actionBtn">
          {task.status !== "completed" && (
            <ActionButton
              type="complete"
              onClick={() => {
                updateTask({
                  ...task,
                  status: "completed",
                  pickedBy: "Harry",
                });
              }}
            ></ActionButton>
          )}
          <Spacer></Spacer>
          <ActionButton
            type="delete"
            onClick={() => deleteTask(task._id)}
          ></ActionButton>
        </TaskAction>
      </TaskButton>
    </div>
  );
});

export default Task;
