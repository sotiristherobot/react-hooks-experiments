import React from "react";
import { Grommet } from "grommet";
import { BrowserRouter as Router, Route } from "react-router-dom";

// components
import Home from "./components/home/Home";

function App() {
  return (
    <Grommet>
      <Router>
        <Route exact path="/" component={Home} />
      </Router>
    </Grommet>
  );
}

export default App;
