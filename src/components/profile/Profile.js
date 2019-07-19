import React, { useState } from "react";
import { Box, Form, FormField, Button } from "grommet";
import { Edit, Save } from "grommet-icons";

export default function Profile() {
  const [isEditMode, setIsEditMode] = useState(false),
    editButtonClicked = function() {
      isEditMode ? setIsEditMode(false) : setIsEditMode(true);
    };

  return (
    <Box width="80%" pad={{ top: "medium" }} alignSelf="center">
      <Box direction="row" justify="end" gap="small">
        {isEditMode ? (
          <Button
            icon={<Save />}
            fill="vertical"
            label="Save"
            onClick={() => {
              alert("saved");
              setIsEditMode(false);
            }}
          />
        ) : null}
        <Button
          icon={<Edit />}
          fill="vertical"
          label="Edit"
          onClick={editButtonClicked}
        />
      </Box>
      <Form>
        <FormField name="name" label="Name" required disabled={!isEditMode} />
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
    </Box>
  );
}
