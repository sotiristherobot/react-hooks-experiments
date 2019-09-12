import React, { Fragment, useState } from "react";
import { withRouter } from "react-router-dom";
import { Box, Heading } from "grommet";
import { Like } from "grommet-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  ADD_LIKED_ARTICLE,
  DELETE_LIKED_ARTICLE
} from "../../constants/actionTypes";

import styled from "styled-components";
import Notification from "../notification/Notification";

/**
 * Renders articles header bar with the index and the title
 * @param {string} articleIndex
 * @param {string} title
 * @returns {*}
 * @constructor
 */
function ArticleHeading({ articleIndex, title }) {
  return (
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
        {articleIndex}
      </Heading>
      <Heading level={4} margin="0">
        {title}
      </Heading>
    </Box>
  );
}

function Article(props) {
  const StatusBar = styled.div`
    width: 100%;
    margin-top: auto;
    align-self: flex-start;
  `;
  const dispatch = useDispatch(),
    [, setLiked] = useState(false),
    [showSuccessNotification, setShowSuccessNotification] = useState({
      show: false,
      text: null
    }),
    //   /*TODo this should be removed. With a proper backend, this should be coming from backend as we need to let
    //     backend know that user liked an article. Also for performance reasons, it would be a good idea to
    //     use Reselect react library to memoize the selector results as this way will create a new selector per article
    //   */

    /**
     * Selector for liked articles. In case the article exists in likedArticles[] return true, so the
     * <Like/> button is shown as blue. Please read comment above.
     * @type {boolean} - true if article was found in liked article, false otherwise
     */
    isInLikedArticles = useSelector(state => {
      const { articleIndex } = props,
        articles = state.likedarticles.likedArticles.filter(
          value => value.articleIndex === articleIndex
        );
      return articles.length > 0;
    });

  const onLikeClick = () => {
    if (!isInLikedArticles) {
      dispatch({ type: ADD_LIKED_ARTICLE, payload: props });
      setLiked(true);
      setShowSuccessNotification({ show: true, text: "Liked succesfully" });
    } else if (isInLikedArticles) {
      dispatch({ type: DELETE_LIKED_ARTICLE, payload: props });
      setLiked(false);
    }
  };

  /**
   * Navigates to the article detail page on article click.
   */
  const onArticleClick = () => {
    //TODO We need to dispatch an action to redux to get the selected article
    props.history.push(`/article/${props.articleIndex}`);
  };

  return (
    <Fragment>
      <Box
        align="center"
        border="all"
        elevation="large"
        margin="small"
        width="medium"
        overflow="hidden"
      >
        <ArticleHeading articleIndex={props.articleIndex} title={props.title} />
        <Box direction="column" pad="small" onClick={onArticleClick}>
          <p>{props.content}</p>
        </Box>
        <StatusBar>
          <Box direction="row" pad="small" gap="medium" justify="stretch">
            <Like
              size="medium"
              color={isInLikedArticles ? "blue" : null}
              onClick={onLikeClick}
            />
          </Box>
        </StatusBar>
      </Box>
      {showSuccessNotification.show && (
        <Notification
          text={showSuccessNotification.text}
          setShowNotification={setShowSuccessNotification}
          timeLimit={3000}
        />
      )}
    </Fragment>
  );
}
export default withRouter(Article);
