import React, { useEffect, useState } from "react";
import { Box } from "grommet";
import { useDispatch, useSelector } from "react-redux";
import { API_REQUEST_ARTICLES } from "../../constants/actionTypes";
import Article from "../article/Article";

export default function Home() {
  const articles = useSelector(state => state.articles.articles),
    dispatch = useDispatch(),
    [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch({ type: API_REQUEST_ARTICLES });
  }, []);

  useEffect(
    () => (articles.length > 0 ? setIsLoading(false) : setIsLoading(true)),
    [articles]
  );

  return (
    <Box direction="row" wrap={true} justify="center">
      {isLoading ? (
        <p>Loading articles...</p>
      ) : (
        articles.map((article, index) => (
          <Article
            key={article.id}
            title={article.title}
            content={article.content}
            image={article.image}
            articleIndex={index}
          />
        ))
      )}
    </Box>
  );
}
