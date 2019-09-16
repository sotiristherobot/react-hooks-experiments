import React, { Fragment, lazy, Suspense, useEffect } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

// components
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import { useDispatch, useSelector } from "react-redux";
import {
  API_REQUEST_USER,
  API_IS_USER_AUTHED,
  API_AUTH_USER
} from "./constants/actionTypes";
import Header from "./components/header/Header";
import ArticleDetail from "./components/article/ArticleDetail";
import LikedArticlesList from "./components/article/likedarticles/LikedArticlesList";
import { Box } from "grommet/es6";

// lazy load routes
const Profile = lazy(() => import("./components/profile/Profile"));

function App() {
  const user = useSelector(state => state.user),
    userIsAuthed = useSelector(state => state.userIsAuthed.userIsAuthorized),
    dispatch = useDispatch();

  /**
   * Before fetching the user details we are making sure that the user is authorized. The effect depends
   * on userIsAuthed selector to re-run
   */
  useEffect(() => {
    dispatch({ type: API_IS_USER_AUTHED });
    if (userIsAuthed) {
      dispatch({ type: API_REQUEST_USER });
      /* the else statement exists here only for demonstration purposes. If the user is not authorized yet, it
      forces authorization*/
    } else {
      dispatch({type: API_AUTH_USER});
    }
  }, [userIsAuthed]);

  return (
    <Router>
      <Box fill={true} direction="column" align="stretch">
        <Box width="40%" pad={{ top: "medium" }} alignSelf="center">
          <Route exact path="/login" render={() => <Login isAuthed={userIsAuthed}/>}/>
        </Box>
        {userIsAuthed? !user.loadingUser && user.user && (
          <Fragment>
            <Header isAuthed={userIsAuthed} user={user.user} />
            <Box width="80%" alignSelf="center" flex={{ grow: 0, shrink: 0 }}>
              <Route exact path="/" component={Home} />
              <Route exact path="/article/:id" component={ArticleDetail} />
              <Suspense fallback={<div>Loading.....</div>}>
                <Route path="/profile" component={Profile} />
                <Route path="/liked-articles" component={LikedArticlesList} />
              </Suspense>
            </Box>
            <Redirect to={{pathname: "/"}}/>}
          </Fragment>
        ): <Redirect to={{pathname: "/login"}}/>}
      </Box>
    </Router>
  );
}
export default App;
