import React from "react";
import { Box } from "grommet";

export default function Header(props) {
  return (
    <Box
      direction="row"
      align="center"
      alignContent="between"
      justify="around"
      alignSelf="stretch"
    >
      {props.children}
    </Box>
  );
}
