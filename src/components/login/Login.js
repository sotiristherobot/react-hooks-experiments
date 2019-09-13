import React from "react";

const Login = ({isAuthed}) => !isAuthed && <p>This is the login screen</p>;
export default React.memo(Login);