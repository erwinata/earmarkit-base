import { apiLogin } from "api/auth";
import Button from "components/atoms/Button";
import Form from "components/atoms/Form";
import Input from "components/atoms/Input";
import { localClearToken, localSaveToken } from "local/token";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { actionSetUser } from "redux/App/AppAction";

const Login: React.FC<any> = (props) => {
  const [isError, setIsErrror] = useState(false);

  const [inputState, setInputState] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const history = useHistory();

  const handle = {
    inputChange: (name: string, value: string) => {
      setIsErrror(false);
      setInputState({
        ...inputState,
        [name]: value,
      });
    },
    onSubmit: async () => {
      const response = await apiLogin(inputState.email, inputState.password);
      if (response.ok && response.data) {
        //simpan token ke localstorage
        localSaveToken(response.data.token);

        //set redux state user yg login saat ini
        dispatch(
          actionSetUser({
            name: response.data.user.name,
            email: response.data.user.email,
          })
        );

        //redirect ke home
        history.push("/home");
      } else {
        setIsErrror(true);
      }
    },
  };

  useEffect(() => {
    //clear semua jejak login dari user
    localClearToken();
    dispatch(actionSetUser(undefined!));
  }, []);

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div
        className="bg-white rounded px-6 py-6 shadow-2xl"
        style={{ width: 400 }}
      >
        <h1 className="py-2 text-center">Login</h1>
        {isError && (
          <div className="bg-red-600 text-white my-2">
            Kombinasi email dan password tidak cocok
          </div>
        )}
        <Form onSubmit={handle.onSubmit}>
          <div className="flex flex-col justify-center  space-y-2">
            <Input
              name="email"
              autoFocus
              value={inputState.email}
              onChange={handle.inputChange}
              placeholder="Email"
            />
            <Input
              name="password"
              value={inputState.password}
              onChange={handle.inputChange}
              type="password"
              placeholder="Password"
            />
            <Button color="primary" onClick={handle.onSubmit}>
              Login
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
