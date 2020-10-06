import TaskCategoryContainer from "components/molecules/TaskCategoryContainer";
import { ICategory } from "interfaces/ICategory";
import { ITask } from "interfaces/ITask";
import { filter } from "lodash";
import React from "react";
import { useSelector } from "react-redux";
import { ICombinedState } from "redux/store";

interface Props {
  name: string;
  tasks: ITask[];
  cannotBeAdded?: boolean;
}

interface GlobalState {
  categories: ICategory[];
}

const TaskBoard: React.FC<Props> = (props) => {
  const { categories } = useSelector<ICombinedState, GlobalState>((state) => {
    return {
      categories: state.task.categories,
    };
  });

  return (
    <div
      className="rounded-lg bg-level-2 items-center py-4 px-5 flex flex-col space-y-2"
      style={{ minWidth: 320 }}
    >
      <h1 className="text-xl font-bold uppercase">{props.name}</h1>

      {props.tasks.length === 0 ? (
        <h1 className="text-muted opacity-50 text-2xl font-semibold py-6 text-center">
          No Tasks
        </h1>
      ) : (
        categories.map((item) => {
          const tasksWithinCategory = filter(props.tasks, {
            category: item.id,
          });
          if (tasksWithinCategory.length === 0) return null;
          else
            return (
              <TaskCategoryContainer
                category={item}
                tasks={tasksWithinCategory}
                cannotBeAdded={props.cannotBeAdded}
              />
            );
        })
      )}
    </div>
  );
};

export default TaskBoard;
