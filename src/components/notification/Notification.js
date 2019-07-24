import React from "react";
import { Box, Layer, Text } from "grommet";

export default function Notification(props) {
  return (
    <Layer
      modal={false}
      position="bottom"
      margin={{ vertical: "medium", horizontal: "small" }}
      responsive={false}
      plain
    >
      <Box
        align="center"
        direction="row"
        gap="small"
        justify="between"
        round="medium"
        elevation="medium"
        pad={{ vertical: "xsmall", horizontal: "small" }}
        background="status-ok"
      >
        <Text>{props.text}</Text>
      </Box>
    </Layer>
  );
}
