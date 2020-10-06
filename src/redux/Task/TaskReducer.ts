import { ICategory } from "interfaces/ICategory";
import { ITask } from "interfaces/ITask";
import { findIndex } from "lodash";
import { TaskActionTypes } from "./TaskActionTypes";

export interface ITaskState {
  tasks: ITask[];
  categories: ICategory[];
}

const taskReducerDefaultState: ITaskState = {
  tasks: [],
  categories: [],
};

export const taskReducer = (
  state = taskReducerDefaultState,
  action: TaskActionTypes
): ITaskState => {
  switch (action.type) {
    case "LOAD_TASKS": {
      return {
        ...state,
        tasks: action.tasks,
      };
    }
    case "LOAD_CATEGORIES": {
      return {
        ...state,
        categories: action.categories,
      };
    }
    case "ADD_TASK": {
      return {
        ...state,
        tasks: [...state.tasks, action.task],
      };
    }
    case "DONE_TASK": {
      let resultTasks = state.tasks; //set result menjadi sesuai tasks yg ada di redux
      const indexTask = findIndex(state.tasks, { id: action.task.id }); //cari index task yang idnya sama
      if (indexTask !== -1) {
        //cek ketemu tasknya apa engga
        const taskDone = state.tasks[indexTask];
        taskDone.done = true;

        resultTasks = [
          ...state.tasks.slice(0, indexTask), //kita selipin task sebelum index
          taskDone, //lalu selipin task yang sudah diedit
          ...state.tasks.slice(indexTask + 1, state.tasks.length), //dan ditambah dengan task setelah index
        ];
      }

      return {
        ...state,
        tasks: resultTasks,
      };
    }
    default:
      return state;
  }
};
