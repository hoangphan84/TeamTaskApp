interface ITask {
  _id: string;
  description: string;
  status: string;
  pickedBy?: string
  createdAt?: string;
  updatedAt?: string;
}

interface TaskProps {
  task: ITask;
}
