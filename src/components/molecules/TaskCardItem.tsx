import { apiDoneTask } from "api/task";
import Button from "components/atoms/Button";
import { ITask } from "interfaces/ITask";
import React from "react";
import * as Icon from "react-feather";
import { useDispatch } from "react-redux";
import { actionDoneTask } from "redux/Task/TaskAction";

interface Props {
  data: ITask;
}

const TaskCardItem: React.FC<Props> = (props) => {
  const dispatch = useDispatch();

  const handle = {
    onClickDone: async () => {
      const response = await apiDoneTask(props.data);
      if (response.ok) {
        dispatch(actionDoneTask(props.data));
      } else {
        //misalnya tampilkan error
      }
    },
  };

  return (
    <div
      className="flex flex-col rounded-lg bg-white px-2 py-2 relative"
      style={{
        width: 320,
        minHeight: 110,
      }}
    >
      {!props.data.done && (
        <div className="absolute right-0 mr-2" onClick={handle.onClickDone}>
          <Button color="success" size="xs">
            <Icon.Check size={12} />
          </Button>
        </div>
      )}

      <div className="flex-grow">
        <h1 className="text-xs text-muted">{props.data.dateCreated}</h1>
        <h1 className="text-sm font-semibold">{props.data.title}</h1>
        <p className="text-xs text-muted">{props.data.description}</p>
      </div>

      <div className="flex justify-between mt-2">
        <div className="flex items-center space-x-2">
          <Icon.User size={16} />
          <div className="text-xs">Lovina Merlin</div>
        </div>
        <div className="flex space-x-3">
          <div className="flex items-center space-x-2">
            <Icon.MessageCircle size={16} />
            <div className="text-xs">3</div>
          </div>
          <div className="flex items-center space-x-2">
            <Icon.Paperclip size={16} />
            <div className="text-xs">9</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCardItem;
