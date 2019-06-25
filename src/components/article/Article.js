import React from "react";
import { Box } from "grommet";
import { Like, Dislike } from "grommet-icons";

import styled from "styled-components";

export default function Article(props) {
  const StatusBar = styled.div`
    color: red;
    width: 100%;
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
      width="medium"
      overflow="hidden"
    >
      <Box
        direction="column"
        pad="small"
      >
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      </Box>
      <StatusBar>
        <Box
            direction="row"
            pad="small"
            gap="medium"
            justify="stretch"
            background="red"
        >
          <Like />
          <Dislike/>
        </Box>
      </StatusBar>
    </Box>
  );
}
