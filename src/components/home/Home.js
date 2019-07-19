import React, { useEffect } from "react";
import { Box, InfiniteScroll } from "grommet";
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
    <Box direction="row" wrap={true} fill={false} justify="center">
      {!articles.loadingArticles && (
        <InfiniteScroll step={50} items={articles}>
          {(article, index) => (
            <Article
              key={article.id}
              title={article.title}
              content={article.content}
              image={article.image}
              articleIndex={index}
            />
          )}
        </InfiniteScroll>
      )}
    </Box>
  );
}
