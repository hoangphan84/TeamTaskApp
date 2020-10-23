import { call, put, takeEvery, all } from "redux-saga/effects";
import { getTasks, addTask, deleteTask, updateTask } from "../ApiService";

export function* fetchTasks() {
  try {
    const tasks = yield call(() =>
      getTasks()
        .then((res) => res.json())
        .then((data) => data.tasks)
    );
    yield put({ type: "FETCH_TASKS_SUCCESS", tasks });
  } catch (error) {
    console.log("FETCH_TASKS_FAILED:", error.message);
  }
}

function* watchFetchTasks() {
  yield takeEvery("FETCH_TASKS", fetchTasks);
}

type AddParams = { description: string; type: string };
export function* toAddTask({ description }: AddParams) {
  try {
    const tasks = yield call(() =>
      addTask(description)
        .then((res) => res.json())
        .then((data) => data.tasks)
    );
    yield put({ type: "FETCH_TASKS_SUCCESS", tasks });
  } catch (error) {
    console.log("ADD_TASK_ERROR:", error.message);
  }
}

function* watchAddTask() {
  yield takeEvery("ADD_TASK", toAddTask);
}

type DeleteParams = { id: string; type: string };
export function* toDeleteTask({ id }: DeleteParams) {
  try {
    const tasks = yield call(() =>
      deleteTask(id)
        .then((res) => res.json())
        .then((data) => data.tasks)
    );
    yield put({ type: "FETCH_TASKS_SUCCESS", tasks });
  } catch (error) {
    console.log("DELETE_TASK_ERROR:", error.message);
  }
}

function* watchDeleteTask() {
  yield takeEvery("DELETE_TASK", toDeleteTask);
}

type UpdateParams = { task: ITask; type: string };
export function* toUpdateTask({ task }: UpdateParams) {
  try {
    const tasks = yield call(() =>
      updateTask(task)
        .then((res) => res.json())
        .then((data) => data.tasks)
    );
    yield put({ type: "FETCH_TASKS_SUCCESS", tasks });
  } catch (error) {
    console.log("UPDATE_TASK_ERROR:", error.message);
  }
}

function* watchUpdateTask() {
  yield takeEvery("UPDATE_TASK", toUpdateTask);
}

export default function* rootSaga() {
  yield all([
    watchFetchTasks(),
    watchAddTask(),
    watchDeleteTask(),
    watchUpdateTask(),
  ]);
}
