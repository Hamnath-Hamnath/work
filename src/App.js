import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles.css";
import Execution from "./component/Execution";
import Result from "./component/Result";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Execution />
        </Route>
        <Route path="/result">
          <Result />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
