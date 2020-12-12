import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/loan-application" component={Saved} />
        </Switch>
      </div>
  </Router>
  );
}

export default App;
