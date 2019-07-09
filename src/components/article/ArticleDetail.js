import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { API_REQUEST_ARTICLE } from "../../constants/actionTypes";

function ArticleDetail(props) {
  const article = useSelector(state => state.article.article),
      savedArticle = useSelector(state => state.article.savedArticle),
      [activeArticle, setActiveArticle] = useState({}),
    dispatch = useDispatch();


  /**
   * Called only when article is mutated and the current savedArticle does not match the url id.
   * This was made to save one request to the backend, as when the request is succesfull we keep in redux store
   * the last article. Sometimes this will lead to a performance improvement if the user requests the same article and
   * navigates to the article detail page from the article list.
   */
  useEffect(() => {
    const {id: urlIdParam } = props.match.params;
    if (savedArticle.id !== urlIdParam) {
      dispatch({ type: API_REQUEST_ARTICLE, payload: {articleId: urlIdParam}});
      setActiveArticle(article)
    } else {
      setActiveArticle(savedArticle);
    }
  },[article]);

  return <p>{`${activeArticle.id} - ${activeArticle.title}`}</p>;
}
export default withRouter(ArticleDetail);
