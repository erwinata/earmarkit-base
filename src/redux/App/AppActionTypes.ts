import { IUser } from "interfaces/IUser";

export type AppActionTypes = {
  type: "SET_USER";
  user: IUser;
};
