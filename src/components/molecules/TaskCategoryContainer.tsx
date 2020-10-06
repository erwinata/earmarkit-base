import { apiAddTask } from "api/task";
import { ICategory } from "interfaces/ICategory";
import { ITask } from "interfaces/ITask";
import React, { useState } from "react";
import * as Icon from "react-feather";
import { useDispatch } from "react-redux";
import { actionAddTask } from "redux/Task/TaskAction";
import TaskCardItem from "./TaskCardItem";
import TaskCardItemNew from "./TaskCardItemNew";

interface Props {
  category: ICategory;
  tasks: ITask[];
  cannotBeAdded?: boolean;
}

const TaskCategoryContainer: React.FC<Props> = (props) => {
  const [isAddingTask, setIsAddingTask] = useState(false);
  const dispatch = useDispatch();

  const handle = {
    onSave: async (title: string, description: string) => {
      const taskToBeSaved: ITask = {
        id: -1, //task sementara tidak punya id, karena nanti id akan diambil dri response, yang telah digenerate dari server
        title: title,
        description: description,
        category: props.category.id,
        dateCreated: "30 Apr 2020",
        done: false,
      };

      const response = await apiAddTask(taskToBeSaved);

      if (response.ok && response.data) {
        dispatch(actionAddTask(response.data.task));
        setIsAddingTask(false);
      } else {
        //misalnya tampilkan error
      }
    },
    onAdd: () => {
      setIsAddingTask(true);
    },
  };

  return (
    <div>
      <h1 className="flex space-x-2 items-center text-sm py-1 relative">
        {!props.cannotBeAdded && (
          <div className="absolute right-0 mr-2" onClick={handle.onAdd}>
            <Icon.Plus size={16} />
          </div>
        )}
        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
        <div className="font-semibold">{props.category.name}</div>
      </h1>
      <div className="flex flex-col space-y-3">
        {props.tasks.map((item) => {
          return <TaskCardItem data={item} />;
        })}

        {isAddingTask && <TaskCardItemNew onSave={handle.onSave} />}
      </div>
    </div>
  );
};

export default TaskCategoryContainer;
