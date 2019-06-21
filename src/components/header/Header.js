import React from "react";
import { Box, Heading } from "grommet";
import Avatar from "../avatar/Avatar";

const HeaderStyle = {
  backgroundColor: '#f44336'
};

export default function Header(props) {
  console.log(props);
  const { photo, name } = props.user;
  return (
      <Box
        align="center"
        background={HeaderStyle.backgroundColor}
      >
        <Box
          width="60%"
          direction="row"
          justify="between"
          align="center"
        >
        <Heading level={3} margin="none">Sotiris</Heading>
        <Avatar url={photo} fullName={name} />
        </Box>
      </Box>
  );
}
