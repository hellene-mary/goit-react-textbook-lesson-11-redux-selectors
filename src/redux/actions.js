import { nanoid } from "nanoid";

// екшон додавання таски
export const addTask = text => {
  return {
    type: "tasks/addTask",
    payload: {
      id: nanoid(),
      completed: false,
      text,
    },
  };
};
// екшон видалення таски
export const deleteTask = taskId => {
  return {
    type: "tasks/deleteTask",
    payload: { id: taskId },
  };
};
// екшон перемикання виконано/невиконано
export const toggleCompleted = taskId => {
  return {
    type: "tasks/toggleCompleted",
    payload: { id: taskId },
  };
};
// екшон зміна фільтра
export const setStatusFilter = value => {
  return {
    type: "filters/setStatusFilter",
    payload: value,
  };
};
