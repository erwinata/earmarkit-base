import { ICategory } from "interfaces/ICategory";
import { ITask } from "interfaces/ITask";

export type TaskActionTypes =
  | {
      type: "LOAD_TASKS";
      tasks: ITask[];
    }
  | {
      type: "LOAD_CATEGORIES";
      categories: ICategory[];
    }
  | {
      type: "ADD_TASK";
      task: ITask;
    }
  | {
      type: "DONE_TASK";
      task: ITask;
    };
