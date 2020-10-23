import React, { useEffect, useState } from "react";
import TaskItem from "./components/TaskItem";
import AddTask from "./components/AddTask";
import { getTasks, addTask, updateTask, deleteTask } from "./ApiService";

const App = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = (): void => {
    getTasks()
      .then((res) => (res.status === 200 ? res.json() : null))
      .then(({ tasks }: ITask[] | any) => setTasks(tasks))
      .catch((err: Error) => console.log(err));
  };

  const handleUpdateTask = (task: ITask): void => {
    updateTask(task)
      .then((res) => {
        if (res.status !== 200) {
          throw new Error("Error! Task not updated");
        }
        return res.json();
      })
      .then((data) => setTasks(data.tasks))
      .catch((err) => console.log(err));
  };

  const handleDeleteTask = (_id: string): void => {
    deleteTask(_id)
      .then((res) => {
        if (res.status !== 200) {
          throw new Error("Error! Task not deleted");
        }
        return res.json();
      })
      .then((data) => setTasks(data.tasks))
      .catch((err) => console.log(err));
  };

  const handleSaveTask = (e: React.FormEvent, description: string): void => {
    e.preventDefault();
    addTask(description)
      .then((res) => {
        if (res.status !== 201) {
          throw new Error("Error! Todo not saved");
        }
        return res.json();
      })
      .then((data) => setTasks(data.tasks))
      .catch((err) => console.log(err));
  };

  return (
    <main className="App">
      <h1>Tasks</h1>
      <AddTask saveTask={handleSaveTask} />
      {tasks.map((task: ITask) => (
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

export default App;
