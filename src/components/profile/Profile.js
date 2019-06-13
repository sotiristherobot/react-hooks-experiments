import React from "react";
import { Box, Form, FormField, Button } from "grommet";
import "./Profile.css";

export default function Profile() {
  return (
    <Box
        direction="row"
        align="center"
        justify="around"
        alignSelf="stretch"
    >
      <Form className="profileForm">
        <FormField name="name" label="Name" required />
        <FormField name="username" label="Username" required />
        <FormField name="email" label="Email" />
        <FormField name="phone" label="Phone" />
        <Button type="submit" primary label="Submit" fill={false} />
      </Form>
    </Box>
  );
}
