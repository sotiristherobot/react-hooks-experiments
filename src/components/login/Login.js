import React, { useEffect, useRef } from "react";
import { Box, Form, FormField, TextInput } from "grommet/es6";

const Login = ({ isAuthed }) => {
  const usernameInputRef = useRef(null);

  useEffect(() => usernameInputRef.current.focus(), [usernameInputRef]);

  return (
    !isAuthed && (
      <Box width="40%" pad={{ top: "medium" }} alignSelf="center">
        <Form>
          <FormField label="Username">
            <TextInput placeholder="type username" ref={usernameInputRef} />
          </FormField>
          <FormField label="Password">
            <TextInput type="password" placeholder="type password" />
          </FormField>
        </Form>
      </Box>
    )
  );
};

export default React.memo(Login);
