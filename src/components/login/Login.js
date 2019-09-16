import React, { useEffect, useRef } from "react";
import { Form, FormField, TextInput } from "grommet/es6";

const Login = ({ isAuthed }) => {
  const usernameInputRef = useRef(null);

  useEffect(() => usernameInputRef.current.focus(),[usernameInputRef]);

  return (
    !isAuthed && (
      <Form>
        <FormField label="Username">
          <TextInput placeholder="type username" ref={usernameInputRef} />
        </FormField>
          <FormField label="Password">
              <TextInput type="password" placeholder="type password"/>
          </FormField>
      </Form>
    )
  );
};

export default React.memo(Login);
