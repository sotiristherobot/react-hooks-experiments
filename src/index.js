import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import {Grommet} from "grommet/es6";

// const store = createStore();
{
  /*<Provider store={store}>*/
}
ReactDOM.render(<Grommet><App /></Grommet>, document.getElementById("root"));
