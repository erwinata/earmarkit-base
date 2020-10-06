import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { appReducer, IAppState } from "./App/AppReducer";
import { ITaskState, taskReducer } from "./Task/TaskReducer";

export interface ICombinedState {
  app: IAppState;
  task: ITaskState;
}

export const rootReducer = combineReducers({
  app: appReducer,
  task: taskReducer,
});

const middleware = [thunk];

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
