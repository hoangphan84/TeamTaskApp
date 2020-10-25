import React, { useEffect } from "react";
import { connect } from "react-redux";
// import { hot } from "react-hot-loader";
import TaskItem from "./components/TaskItem";
import AddTask from "./components/AddTask";
import FlipMove from "react-flip-move";
import styled from "styled-components";

const App = (props: any) => {
  useEffect(() => {
    props.dispatch({ type: "FETCH_TASKS" });
  }, []);

  const handleUpdateTask = (task: ITask) => {
    props.dispatch({ type: "UPDATE_TASK", task });
  };

  const handleDeleteTask = (_id: string): void => {
    props.dispatch({ type: "DELETE_TASK", id: _id });
  };

  const handleAddTask = (description: string): void => {
    props.dispatch({ type: "ADD_TASK", description });
  };

  const Footer = styled.div`
    height: 4em;
  `;

  return (
    <main className="App">
      <h1>Team Tasks</h1>
      <AddTask saveTask={handleAddTask} />
      <FlipMove>
        {sortTasks(props.tasks).map((task: ITask) => (
          <TaskItem
            key={task._id}
            updateTask={handleUpdateTask}
            deleteTask={handleDeleteTask}
            task={task}
          />
        ))}
      </FlipMove>
    </main>
  );
};

const sortTasks = (tasks: ITask[]) => {
  const incompletedTasks = tasks
    .filter((task) => task.status !== "completed")
    .sort((a, b) => {
      const task1Created = a.createdAt;
      const task2Created = b.createdAt;
      if (task1Created && task2Created) {
        if (task1Created < task2Created) {
          return -1;
        }
        if (task1Created > task2Created) {
          return 1;
        }
      }
      return 0;
    });
  const completedtasks = tasks
    .filter((task) => task.status === "completed")
    .sort((a, b) => {
      const task1Updated = a.updatedAt;
      const task2Updated = b.updatedAt;
      if (task1Updated && task2Updated) {
        if (task1Updated < task2Updated) {
          return 1;
        }
        if (task1Updated > task2Updated) {
          return -1;
        }
      }
      return 0;
    });
  return incompletedTasks.concat(completedtasks);
};

const mapStateToProps = (state: any) => {
  return {
    tasks: state.tasks,
  };
};

export default connect(mapStateToProps)(App);
