import { IUser } from "interfaces/IUser";
import { Dispatch } from "react";
import { AppActionTypes } from "./AppActionTypes";
import { IAppState } from "./AppReducer";

export const actionSetUser = (user: IUser) => {
  return async (
    dispatch: Dispatch<AppActionTypes>,
    getState: () => IAppState
  ) => {
    dispatch({ type: "SET_USER", user: user });
  };
};
