import React from "react";
import { Box, Form, FormField, Button } from "grommet";

export default function Profile() {
  return (
    <Box
      align="center"
      alignContent="between"
      justify="around"
      alignSelf="stretch"
    >
      <Form>
        <FormField name="name" label="Name" />
        <FormField name="username" label="Username" />
        <Button type="submit" primary label="Submit" />
      </Form>
    </Box>
  );
}
