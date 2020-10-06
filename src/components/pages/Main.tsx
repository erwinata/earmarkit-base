import Navbar from "components/organisms/Navbar";
import { IUser } from "interfaces/IUser";
import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import Home from "./Home";
import NotFound from "./NotFound";
import Profile from "./Profile";
import ProfileDetail from "./ProfileDetail";
import Search from "./Search";
import Workspace from "./Workspace";

interface ReduxState {
  user?: IUser;
}

const Main: React.FC<any> = (props) => {
  const location = useLocation();

  return (
    <div>
      <Navbar />
      <Switch location={location}>
        <Route path="/" exact component={Home} />
        <Route path="/home" exact component={Home} />
        <Route path="/workspace" exact component={Workspace} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/profile/:id" exact component={ProfileDetail} />
        <Route path="/search/:query" exact component={Search} />
        <Route path="/" component={NotFound} />
      </Switch>
    </div>
  );
};

export default Main;
