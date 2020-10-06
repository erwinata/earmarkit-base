import { ICategory } from "interfaces/ICategory";
import { ITask } from "interfaces/ITask";
import { Dispatch } from "react";
import { TaskActionTypes } from "./TaskActionTypes";
import { ITaskState } from "./TaskReducer";

export const actionLoadTasks = (tasks: ITask[]) => {
  return async (
    dispatch: Dispatch<TaskActionTypes>,
    getState: () => ITaskState
  ) => {
    dispatch({ type: "LOAD_TASKS", tasks: tasks });
  };
};

export const actionLoadCategories = (categories: ICategory[]) => {
  return async (
    dispatch: Dispatch<TaskActionTypes>,
    getState: () => ITaskState
  ) => {
    dispatch({ type: "LOAD_CATEGORIES", categories: categories });
  };
};

export const actionAddTask = (task: ITask) => {
  return async (
    dispatch: Dispatch<TaskActionTypes>,
    getState: () => ITaskState
  ) => {
    dispatch({ type: "ADD_TASK", task: task });
  };
};
export const actionDoneTask = (task: ITask) => {
  return async (
    dispatch: Dispatch<TaskActionTypes>,
    getState: () => ITaskState
  ) => {
    dispatch({ type: "DONE_TASK", task: task });
  };
};
