import Button from "components/atoms/Button";
import Form from "components/atoms/Form";
import Input from "components/atoms/Input";
import React, { useState } from "react";

interface Props {
  onSave: (title: string, description: string) => void;
}

const TaskCardItemNew: React.FC<Props> = (props) => {
  const [inputState, setInputState] = useState({
    title: "",
    description: "",
  });

  const handle = {
    onInputChange: (name: string, value: string) => {
      setInputState({ ...inputState, [name]: value });
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
      <Form
        onSubmit={() => props.onSave(inputState.title, inputState.description)}
      >
        <div className="flex-grow">
          <Input
            name="title"
            onChange={handle.onInputChange}
            value={inputState.title}
            autoFocus
            placeholder="Title"
            className="w-full"
            size="sm"
          />
          <Input
            name="description"
            onChange={handle.onInputChange}
            value={inputState.description}
            placeholder="Description"
            className="w-full"
            size="sm"
          />
        </div>

        <div className="flex justify-end mt-2">
          <Button size="sm" color="primary">
            Add Task
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default TaskCardItemNew;
