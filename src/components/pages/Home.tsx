import { apiLoadCategories, apiLoadTasks } from "api/task";
import TaskBoard from "components/organisms/TaskBoard";
import { ITask } from "interfaces/ITask";
import { filter } from "lodash";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ICombinedState } from "redux/store";
import { actionLoadCategories, actionLoadTasks } from "redux/Task/TaskAction";

interface GlobalState {
  tasks: ITask[];
}

const Home: React.FC<any> = (props) => {
  const dispatch = useDispatch();

  const { tasks } = useSelector<ICombinedState, GlobalState>((state) => {
    return {
      tasks: state.task.tasks,
    };
  });

  const todoTasks = filter(tasks, { done: false });
  const doneTasks = filter(tasks, { done: true });

  const fetch = {
    all: async () => {
      Promise.all([fetch.tasks(), fetch.categories()]);
    },
    tasks: async () => {
      const response = await apiLoadTasks();
      if (response.ok && response.data) {
        dispatch(actionLoadTasks(response.data));
      } else {
        //bisa kasih pesan error di sini
      }
    },
    categories: async () => {
      const response = await apiLoadCategories();
      if (response.ok && response.data) {
        dispatch(actionLoadCategories(response.data));
      } else {
        //bisa kasih pesan error di sini
      }
    },
  };

  useEffect(() => {
    fetch.all();
  }, [dispatch]);

  return (
    <div className="flex justify-center pt-5 space-x-5">
      <TaskBoard name="Todo" tasks={todoTasks} />
      <TaskBoard name="Done" tasks={doneTasks} cannotBeAdded />
    </div>
  );
};

export default Home;
