import { apiGetUser } from "api/auth";
import Login from "components/pages/Login";
import Main from "components/pages/Main";
import { IUser } from "interfaces/IUser";
import { localClearToken, localLoadToken } from "local/token";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import { actionSetUser } from "redux/App/AppAction";
import { ICombinedState } from "redux/store";

interface ReduxState {
  user?: IUser;
}

const App: React.FC<any> = (props) => {
  const [isReady, setIsReady] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const dispatch = useDispatch();

  const { user } = useSelector<ICombinedState, ReduxState>((state) => {
    return {
      user: state.app.user,
    };
  });

  const checkLogin = async () => {
    //jika kebetulan ada token di localstorage, coba cek dulu ke server
    const token = localLoadToken();
    if (token) {
      const response = await apiGetUser(token);
      //kalo oke, berarti set user di redux
      if (response.ok && response.data) {
        dispatch(actionSetUser(response.data.user));
        setIsAuthenticated(true);
      } else {
        //buang token kalo user login session ga ketemu di server
        localClearToken();
        setIsAuthenticated(false);
      }
    }

    setIsReady(true);
  };

  useEffect(() => {
    checkLogin();
  }, []);

  if (!isReady) return null;

  return (
    <div className="App bg-bg-1">
      <Switch>
        <Route exact path="/login" component={Login} />
        {user !== undefined ? (
          <Route path="/" component={Main} />
        ) : (
          <Redirect to={{ pathname: "/login" }} />
        )}
      </Switch>
    </div>
  );
};

export default App;
