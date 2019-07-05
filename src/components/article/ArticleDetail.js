import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { API_REQUEST_ARTICLE } from "../../constants/actionTypes";

function ArticleDetail(props) {
  const article = useSelector(state => state.article.article),
    dispatch = useDispatch();

  /**
   * Called only when article is mutated. If there is already an article inside redux store, then there is
   * no need to fetch it. This usually happens when the user is navigated through the <Home/> and not by directly
   * pasting the url.
   */
  useEffect(() => {
    if (!article.id) {
      dispatch({ type: "API_REQUEST_ARTICLE" });
    }
  }, [article]);

  return <p>{`${article.id} - ${article.title}`}</p>;
}
export default withRouter(ArticleDetail);
