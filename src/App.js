import React, { lazy, Suspense, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// components
import Home from "./components/home/Home";
import { useDispatch, useSelector } from "react-redux";
import { API_REQUEST_USER } from "./constants/actionTypes";
import Header from "./components/header/Header";

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
      {!user.loadingUser && user.user ? <Header user={user.user} /> : null}
      <Route exact path="/" component={Home} />
      <Suspense fallback={<div>Loading.....</div>}>
        <Route path="/profile" component={Profile} />
      </Suspense>
    </Router>
  );
}
export default App;
