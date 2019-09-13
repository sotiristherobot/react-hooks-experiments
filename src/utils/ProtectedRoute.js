import React from "react";
import { Route } from "react-router-dom";

//ToDo Login logic should be implemented here.
const isAuthed = () => false;

export default function ProtectedRoute({ component: Component, ...rest }) {
  return isAuthed() ? (
    <Route {...rest} render={props => <Component />} />
  ) : (
    <p>Not authorized to view this route</p>
  );
}
