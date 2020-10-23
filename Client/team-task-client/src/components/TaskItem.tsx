import React from "react";

type Props = TaskProps & {
  updateTask: (task: ITask) => void;
  deleteTask: (_id: string) => void;
};

const Task: React.FC<Props> = ({ task, updateTask, deleteTask }) => {
  const checkTask: string = task.status ? `line-through` : "";
  return (
    <div className="Card">
      <div className="Card--text">
        <h1 className={checkTask}>{task.description}</h1>
      </div>
      <div className="Card--button">
        <button
          onClick={() =>
            updateTask({ ...task, status: "completed", pickedBy: "Harry" })
          }
          className={
            task.status === "new" ? "hide-button" : "Card--button__done"
          }
        >
          Complete
        </button>
        <button
          onClick={() => updateTask({ ...task, pickedBy: "Harry" })}
          className={
            task.status === "new" ? "hide-button" : "Card--button__done"
          }
        >
          Pick
        </button>
        <button
          onClick={() => deleteTask(task._id)}
          className="Card--button__delete"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Task;
