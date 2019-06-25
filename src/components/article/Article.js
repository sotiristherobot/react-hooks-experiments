import React from "react";
import { Box } from "grommet";

export default function Article(props) {
  return (
    <Box
      align="center"
      animation="fadeIn"
      border="all"
      elevation="large"
      margin={{ top: "small", right: "small", bottom: "small", left: "none" }}
      pad="small"
      width="medium"
      overflow="hidden"
    >
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </Box>
  );
}
