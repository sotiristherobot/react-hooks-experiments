import React, { useState, useEffect } from "react";
import { Box } from "grommet";
import { useSelector, useDispatch } from "react-redux";
import { API_CALL_REQUEST } from "../../constants/actionTypes";
import Header from "../header/Header";

export default function Home() {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: API_CALL_REQUEST });
  }, []);

  return (
    <Box direction="column" alignSelf="stretch">
      {!user.loadingUser && user.user ? <Header user={user.user} /> : ""}
    </Box>
  );
}
