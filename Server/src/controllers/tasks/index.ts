import { Response, Request } from 'express';
import { ITask } from './../../types/task';
import Task from '../../models/task';

const getTasks = async (req: Request, res: Response): Promise<void> => {
  try {
    const tasks: ITask[] = await Task.find();
    res.status(200).json({ tasks });
  } catch (error) {
    throw error;
  }
};

const addTask = async (req: Request, res: Response): Promise<void> => {
  try {
    const body = req.body;

    const task: ITask = new Task({
      description: body.description,
      status: 'new',
    });

    const newTask: ITask = await task.save();
    const allTasks: ITask[] = await Task.find();

    res
      .status(201)
      .json({ message: 'Task added', task: newTask, tasks: allTasks });
  } catch (error) {
    throw error;
  }
};

const updateTask = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      params: { id },
      body,
    } = req;
    debugger
    const updateTask: ITask | null = await Task.findByIdAndUpdate(
      { _id: id },
      body
    );
    const allTasks: ITask[] = await Task.find();
    res.status(200).json({
      message: 'Task updated',
      task: updateTask,
      tasks: allTasks,
    });
  } catch (error) {
    throw error;
  }
};

const deleteTask = async (req: Request, res: Response): Promise<void> => {
  try {
    const deletedTask: ITask | null = await Task.findByIdAndRemove(
      req.params.id
    );
    const allTasks: ITask[] = await Task.find();
    res.status(200).json({
      message: 'Task deleted',
      task: deletedTask,
      tasks: allTasks,
    });
  } catch (error) {
    throw error;
  }
};

export { getTasks, addTask, updateTask, deleteTask };
