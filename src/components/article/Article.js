import React, { Fragment, useCallback, useState } from "react";
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
const ArticleHeading = React.memo(({ articleIndex, title }) => {
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
});

/**
 * Renders articles statusbar. It's wrapped with React.memo to avoid unecessary re-rerenders.
 * Now this component rererenders only when there is a change in it's props.
 * Here is an excellent article describing this:
 * https://dmitripavlutin.com/use-react-memo-wisely/
 */
const StatusBar = React.memo(({ isInLikedArticles, onLikeClick }) => {
  const StatusBarWrapper = styled.div`
    width: 100%;
    margin-top: auto;
    align-self: flex-start;
  `;
  return (
    <StatusBarWrapper>
      <Box direction="row" pad="small" gap="medium" justify="stretch">
        <Like
          size="medium"
          color={isInLikedArticles ? "blue" : null}
          onClick={onLikeClick}
        />
      </Box>
    </StatusBarWrapper>
  );
});

function Article(props) {
  const dispatch = useDispatch(),
    [liked, setLiked] = useState(false),
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

  /**
   * Click handler for when the like button is clicked on the status bar.
   * Wrapped in useCallback to memoize the function to depend only on when the liked state variable is changing.
   * This way the <StatusBar/> is not unecessarily re-render because of referential equality of objects in JavaScript.
   * Otherwise <StatusBar/> was rerendering when the notification message was disappearing.
   * @type {Function}
   */
  const onLikeClick = useCallback(() => {
    if (!isInLikedArticles) {
      dispatch({ type: ADD_LIKED_ARTICLE, payload: props });
      setLiked(true);
      setShowSuccessNotification({ show: true, text: "Liked succesfully" });
    } else if (isInLikedArticles) {
      dispatch({ type: DELETE_LIKED_ARTICLE, payload: props });
      setLiked(false);
    }
  }, [liked]);

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
        <StatusBar
          isInLikedArticles={isInLikedArticles}
          onLikeClick={onLikeClick}
        />
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
