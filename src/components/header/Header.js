import React from "react";
import { Box, Heading } from "grommet";

export default function Header(props) {
  return (
    <Box
      direction="row"
      align="center"
      alignContent="between"
      justify="around"
      alignSelf="stretch"
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
        <Heading level={3} margin="none">
          Avatar
        </Heading>
      </Box>
    </Box>
  );
}
