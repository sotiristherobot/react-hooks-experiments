import React, { useState } from "react";
import { Box, Button } from "grommet";
import { Edit, Save } from "grommet-icons";
import ProfileForm from "./form/ProfileForm";

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
        <ProfileForm isEditMode={isEditMode}/>
    </Box>
  );
}
