import App from "App";
import "css/custom.css";
import "css/main.css";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "redux/store";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      {/* <Test /> */}
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
