import React from "react";
import { Box } from "grommet";
import { Like, Dislike } from "grommet-icons";

import styled from "styled-components";

export default function Article(props) {
  const StatusBar = styled.div`
    color: red;
    margin-top: auto;
    align-self: flex-start;
  `;

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
      <StatusBar>
        <Box
            direction="row"
            gap="small"
        >
          <Like />
          <Dislike/>
        </Box>
      </StatusBar>
    </Box>
  );
}
