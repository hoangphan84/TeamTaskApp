import { ITask } from './../types/task';
import { model, Schema } from 'mongoose';

const taskSchema: Schema = new Schema(
  {
    description: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    pickedBy: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

export default model<ITask>('Task', taskSchema);
