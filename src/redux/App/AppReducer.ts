import { IUser } from "interfaces/IUser";
import { AppActionTypes } from "./AppActionTypes";

export interface IAppState {
  user?: IUser;
}

const appReducerDefaultState: IAppState = {
  user: undefined,
};

export const appReducer = (
  state = appReducerDefaultState,
  action: AppActionTypes
): IAppState => {
  switch (action.type) {
    case "SET_USER": {
      return {
        ...state,
        user: action.user,
      };
    }
    default:
      return state;
  }
};
