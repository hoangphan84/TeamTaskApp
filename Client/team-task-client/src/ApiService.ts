const baseUrl: string = "http://localhost:4000";

export const getTasks = (): Promise<Response> => {
  try {
    const tasks: Promise<Response> = fetch(baseUrl + "/tasks");
    return tasks;
  } catch (error) {
    throw new Error(error);
  }
};

export const addTask = (description: string): Promise<Response> => {
  try {
    const saveTask: Promise<Response> = fetch(baseUrl + "/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ description }),
    });
    return saveTask;
  } catch (error) {
    throw new Error(error);
  }
};

export const updateTask = (task: ITask): Promise<Response> => {
  try {
    const taskUpdate = {
      status: task.status,
      pickedBy: task.pickedBy,
    };
    const updatedTask: Promise<Response> = fetch(
      `${baseUrl}/edit/${task._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(taskUpdate),
      }
    );
    return updatedTask;
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteTask = (_id: string): Promise<Response> => {
  try {
    const deletedTask: Promise<Response> = fetch(`${baseUrl}/delete/${_id}`, {
      method: "DELETE",
    });
    return deletedTask;
  } catch (error) {
    throw new Error(error);
  }
};
