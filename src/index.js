import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers/index";
import { Grommet } from "grommet/es6";
import createSagaMiddleware from "redux-saga";
import { watchUser } from "./sagas/user.saga";

const sagaMiddleWare = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare));
sagaMiddleWare.run(watchUser);

ReactDOM.render(
  <Provider store={store}>
    <Grommet>
      <App />
    </Grommet>
  </Provider>,
  document.getElementById("root")
);
