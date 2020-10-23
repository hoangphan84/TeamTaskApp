import { combineReducers } from 'redux';
import TaskReducers from './reducer_tasks';

const rootReducer = combineReducers({
  tasks: TaskReducers,
});

export default rootReducer;