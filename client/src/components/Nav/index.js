import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../../image/loanPalLogo.png"
import "./style.css";

export default class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {};
      }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light mb-2">
        <Link className="navbar-brand" to="/">
            <img className="nav-logo" src={Logo}/>
        </Link>
        <div className="nav-bar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className={window.location.pathname === "/loan-form" ? "nav-link active" : "nav-link"}
                to="/loan-form"
              >
                Apply Now
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={window.location.pathname === "/loan-apps" ? "nav-link active" : "nav-link"}
                to="/loan-apps"
              >
                See Submissions
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}