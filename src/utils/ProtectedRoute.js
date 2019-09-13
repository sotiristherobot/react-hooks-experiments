import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function ProtectedRoute({ component: Component, isAuthed,  ...rest }) {
  return isAuthed? (
    <Route {...rest} render={props => <Component />} />
  ) : (
    <Redirect to={{pathname: "/login"}}/>
  );
}
