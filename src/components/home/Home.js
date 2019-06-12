import React, { useEffect } from "react";
import { Box } from "grommet";
import { useSelector, useDispatch } from "react-redux";
import { API_REQUEST_USER } from "../../constants/actionTypes";
import Header from "../header/Header";

export default function Home() {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: API_REQUEST_USER });
  }, []);

  return (
    <Box direction="column" alignSelf="stretch">
      {!user.loadingUser && user.user ? <Header user={user.user} /> : ""}
    </Box>
  );
}
