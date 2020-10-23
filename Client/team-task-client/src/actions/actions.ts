export const addTask = (description: string) => {
  return {
    type: "ADD_TASK",
    description,
  };
};

export const deleteTask = (id: string) => {
  return {
    type: "DELETE_TASK",
    id,
  };
};

export const updateTask = (task: ITask) => {
  return {
    type: "UPDATE_TASK",
    task,
  };
};

export const fetchTasks = () => {
  return { type: "FETCH_TASKS" };
};
