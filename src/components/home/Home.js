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
      <Box>
        <Box
            width="60%"
            direction="column"
            alignSelf="center"
        >
          {
            !articles.loadingArticles && articles.map(article =>
                <Article key={article.id} title={article.title} content={article.content} image={article.image} />
            )
          }
        </Box>
      </Box>

  );
}
