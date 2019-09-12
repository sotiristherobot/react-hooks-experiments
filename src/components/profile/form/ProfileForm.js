import React from "react";
import { Button, Form, FormField } from "grommet/es6";

export default function ProfileForm({ isEditMode }) {
  return (
    <Form disabled={!isEditMode}>
      <FormField name="name" label="Name" required />
      <FormField
        name="username"
        label="Username"
        required
        disabled={!isEditMode}
      />
      <FormField name="email" label="Email" disabled={!isEditMode} />
      <FormField name="phone" label="Phone" disabled={!isEditMode} />
      <Button
        type="submit"
        primary
        label="Submit"
        fill={false}
        disabled={!isEditMode}
      />
    </Form>
  );
}
