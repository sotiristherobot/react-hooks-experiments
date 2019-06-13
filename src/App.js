import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// components
import Home from "./components/home/Home";

// lazy load routes
const Profile = React.lazy(() => import("./components/profile/Profile"));

function App() {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/profile" component={Profile} />
      </Router>
    </Suspense>
  );
}

export default App;
