import React from "react";
import styled from "styled-components";
import { CompleteButton, DeleteButton } from "./ActionButton";

type Props = TaskProps & {
  updateTask: (task: ITask) => void;
  deleteTask: (_id: string) => void;
};

const TaskButton = styled.div`
  background-color: ${(props) => props.color || "gray"};
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  display: inline-block;
  line-height: 1;
  font-size: 30px;
  padding: 6px 8px;
  width: 100%;
`;

const TaskAction = styled.span`
  float: right;
  z-index: 10;
  display: flex;
`;

const TaskDescription = styled.span``;

const Task: React.FC<Props> = ({ task, updateTask, deleteTask }) => {
  return (
    <div className="Card">
      <TaskButton
        color={
          task.status === "completed"
            ? "#d69e11"
            : task.status === "picked"
            ? "blue"
            : ""
        }
      >
        <TaskDescription>{task.description}</TaskDescription>
        <TaskAction id="actionBtn">
          {task.status !== "completed" && (
            <CompleteButton
              onClick={() => {
                updateTask({ ...task, status: "completed", pickedBy: "Harry" });
              }}
            ></CompleteButton>
          )}
          <DeleteButton onClick={() => deleteTask(task._id)}></DeleteButton>
        </TaskAction>
      </TaskButton>
    </div>
  );
};

export default Task;
