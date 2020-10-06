import Form from "components/atoms/Form";
import Input from "components/atoms/Input";
import React, { useState } from "react";
import * as Icon from "react-feather";
import { useHistory } from "react-router";

const SearchBar: React.FC<any> = (props) => {
  const [inputState, setInputState] = useState("");

  const history = useHistory();

  const handle = {
    inputChange: (name: string, value: string) => {
      setInputState(value);
    },
    onSubmit: () => {
      history.push(`/search/${inputState}`);
    },
  };

  return (
    <div>
      <div className="bg-white text-black px-4 py-2 rounded-full flex justify-between items-center space-x-2">
        <Icon.Search size={20} />
        <Form onSubmit={handle.onSubmit}>
          <Input
            onChange={handle.inputChange}
            name="search"
            value={inputState}
            noStyle
            placeholder="Search everything"
          />
        </Form>
      </div>
    </div>
  );
};

export default SearchBar;
