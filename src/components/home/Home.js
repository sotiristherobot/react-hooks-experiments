import React, { useEffect } from "react";
import { Box } from "grommet";
import { useDispatch, useSelector } from "react-redux";
import { API_REQUEST_ARTICLES } from "../../constants/actionTypes";
import Article from "../article/Article";

export default function Home() {
  const articles = useSelector(state => state.articles.articles),
    dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: API_REQUEST_ARTICLES });
  }, []);

  return (
    <Box
      direction="row"
      align="center"
      justify="around"
      alignSelf="stretch"
      margin="medium"
    >
      {
        !articles.loadingArticles && articles.map(article =>
            <Article key={article.id} title={article.title} content={article.content} image={article.image} />
        )
      }
    </Box>
  );
}
