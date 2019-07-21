import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { Box, Heading } from "grommet";
import { Like } from "grommet-icons";
import { useDispatch } from "react-redux";
import {
  ADD_LIKED_ARTICLE
} from "../../constants/actionTypes";

import styled from "styled-components";

function Article(props) {
  const StatusBar = styled.div`
    width: 100%;
    margin-top: auto;
    align-self: flex-start;
  `;
  const [isLiked, setLiked] = useState(false),
    dispatch = useDispatch();

  const onLikeClick = () => {
    isLiked ? setLiked(false) : setLiked(true);
    dispatch({ type: ADD_LIKED_ARTICLE, payload: props });
  };

  /**
   * Navigates to the article detail page on article click.
   */
  const onArticleClick = () => {
    //TODO We need to dispatch an action to redux to get the selected article
    props.history.push(`/article/${props.articleIndex}`);
  };

  return (
    <Box
      align="center"
      animation="fadeIn"
      border="all"
      elevation="large"
      margin="small"
      width="medium"
      overflow="hidden"
    >
      <Box
        alignSelf="stretch"
        justify="center"
        background="#243959"
        align="center"
        gap="small"
        height="30px"
        direction="row"
      >
        <Heading level={4} margin="0">
          {props.articleIndex}
        </Heading>
        <Heading level={4} margin="0">
          {props.title}
        </Heading>
      </Box>
      <Box direction="column" pad="small" onClick={onArticleClick}>
        <p>{props.content}</p>
      </Box>
      <StatusBar>
        <Box direction="row" pad="small" gap="medium" justify="stretch">
          <Like
            size="medium"
            color={isLiked ? "blue" : null}
            onClick={onLikeClick}
          />
        </Box>
      </StatusBar>
    </Box>
  );
}
export default withRouter(Article);
