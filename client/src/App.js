import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Welcome from "./components/Welcome";
import LoanForm from "./components/LoanForm";
import LoanApps from "./components/LoanApps";


function App() {
  return (
    <Router>
      <div className="app">
        <Nav />
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/loan-form" component={LoanForm} />
          <Route exact path="/loan-apps" component={LoanApps} />
        </Switch>
        <Footer />
      </div>
  </Router>
  );
}

export default App;
