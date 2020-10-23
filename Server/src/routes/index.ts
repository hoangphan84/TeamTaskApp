import { Router } from 'express';
import {
  getTasks,
  addTask,
  updateTask,
  deleteTask,
} from '../controllers/tasks';

const router: Router = Router();

router.get('/tasks', getTasks);

router.post('/add', addTask);

router.put('/edit/:id', updateTask);

router.delete('/delete/:id', deleteTask);

export default router;
