import { Document } from 'mongoose';

export interface ITask extends Document {
  description: string;
  status: string;
  pickedBy: string;
}
