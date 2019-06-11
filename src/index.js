import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers/index";
import { Grommet } from "grommet/es6";

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <Grommet>
      <App />
    </Grommet>
  </Provider>,
  document.getElementById("root")
);
