import React, { useEffect, Suspense } from "react";
import { Box } from "grommet";
import { useSelector, useDispatch } from "react-redux";
import { API_REQUEST_USER } from "../../constants/actionTypes";
import { useNoValue } from "../../utils/useNoValue";

const Header = React.lazy(() => import("../header/Header"));

export default function Home() {
  const user = useSelector(state => state.user),
    dispatch = useDispatch(),
    noValue = useNoValue(user);

  useEffect(() => {
    dispatch({ type: API_REQUEST_USER });
  }, []);

  return (
    <Box direction="column" alignSelf="stretch">
      <Suspense fallback={<div>Loading......</div>}>
        {!user.loadingUser && user.user ? <Header user={user.user} /> : null}
        {noValue}
      </Suspense>
    </Box>
  );
}
