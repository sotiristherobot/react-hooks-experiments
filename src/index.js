import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";

// const store = createStore();
{
  /*<Provider store={store}>*/
}
ReactDOM.render(<App />, document.getElementById("root"));
