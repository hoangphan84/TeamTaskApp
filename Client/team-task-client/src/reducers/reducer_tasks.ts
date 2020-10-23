export default (state = [], action: any) => {
  switch (action.type) {
    case "FETCH_TASKS_SUCCESS":
      return action.tasks;
  }
  return state;
};
