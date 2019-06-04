import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// components
import Home from "./components/home/Home";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
    </Router>
  );
}

export default App;
