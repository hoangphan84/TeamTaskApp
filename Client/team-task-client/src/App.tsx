import React, { useEffect } from "react";
import { connect } from "react-redux";
// import { hot } from "react-hot-loader";
import TaskItem from "./components/TaskItem";
import AddTask from "./components/AddTask";

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

  const handleAddTask = (e: React.FormEvent, description: string): void => {
    e.preventDefault();
    props.dispatch({ type: "ADD_TASK", description });
  };

  return (
    <main className="App">
      <h1>Tasks</h1>
      <AddTask saveTask={handleAddTask} />
      {props.tasks.map((task: ITask) => (
        <TaskItem
          key={task._id}
          updateTask={handleUpdateTask}
          deleteTask={handleDeleteTask}
          task={task}
        />
      ))}
    </main>
  );
};

const mapStateToProps = (state: any) => {
  return {
    tasks: state.tasks,
  };
};

export default connect(mapStateToProps)(App);
