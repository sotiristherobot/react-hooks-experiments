import React, { lazy, Suspense, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// components
import Home from "./components/home/Home";
import { useDispatch, useSelector } from "react-redux";
import { API_REQUEST_USER } from "./constants/actionTypes";
import Header from "./components/header/Header";
import ArticleDetail from "./components/article/ArticleDetail";
import LikedArticlesList from "./components/article/likedarticles/LikedArticlesList";
import { Box } from "grommet/es6";

// lazy load routes
const Profile = lazy(() => import("./components/profile/Profile"));

function App() {
  const user = useSelector(state => state.user),
    dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: API_REQUEST_USER });
  }, []);

  return (
    <Router>
      <Box fill={true} direction="column" align="stretch">
        {!user.loadingUser && user.user ? <Header user={user.user} /> : null}
        <Box height="90%" width="80%" alignSelf="center">
          <Route exact path="/" component={Home} />
          <Route exact path="/article/:id" component={ArticleDetail} />
          <Suspense fallback={<div>Loading.....</div>}>
            <Route path="/profile" component={Profile} />
            <Route path="/liked-articles" component={LikedArticlesList} />
          </Suspense>
        </Box>
      </Box>
    </Router>
  );
}
export default App;
