import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ReactHookForm from "./examples/react-hook-form";

function App() {
  return (
    <Router>
      <Route path="/rhf" component={ReactHookForm} />
    </Router>
  );
}

export default App;
