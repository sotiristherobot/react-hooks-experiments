import React, { useEffect } from "react";
import { Box } from "grommet";
import { useDispatch } from "react-redux";
import { API_REQUEST_ARTICLES } from "../../constants/actionTypes";

export default function Home() {
  const dispatch = useDispatch();

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
      <p>Main Component to move here</p>
    </Box>
  );
}
