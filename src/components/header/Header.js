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
      direction="row"
      align="center"
      alignContent="between"
      justify="around"
      alignSelf="stretch"
      background={HeaderStyle.backgroundColor}
    >
      <Heading level={3} margin="none">
        Sotiris
      </Heading>
      <Box
        direction="row"
        align="center"
        alignContent="between"
        justify="around"
        alignSelf="stretch"
      >
        <Avatar url={photo} fullName={name} />
      </Box>
    </Box>
  );
}
