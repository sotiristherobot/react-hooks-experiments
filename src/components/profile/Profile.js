import React from "react";
import { Box, Form, FormField, Button } from "grommet";
import { Edit } from "grommet-icons";

export default function Profile() {
  return (
    <Box align="center">
      <Box width="60%" pad={{top: 'medium'}}>
        <Box direction="row" justify="end">
          <Button icon={<Edit/>} fill="vertical" label="Edit" onClick={() => {}} />
        </Box>
        <Form>
          <FormField name="name" label="Name" required />
          <FormField name="username" label="Username" required />
          <FormField name="email" label="Email" />
          <FormField name="phone" label="Phone" />
          <Button
            type="submit"
            primary
            label="Submit"
            fill={false}
          />
        </Form>
      </Box>
    </Box>
  );
}
