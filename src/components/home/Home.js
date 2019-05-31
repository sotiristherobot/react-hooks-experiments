import React from "react";
import { Box, Heading } from "grommet";
import Header from "../header/Header";

export default function Home() {
  return (
    <Box direction="column" alignSelf="stretch">
      <Header>
        <Heading level={3} margin="none">
          Sotiris
        </Heading>
        <Heading level={3} margin="none">
          Content
        </Heading>
      </Header>
    </Box>
  );
}
