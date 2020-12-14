import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/loanPalLogo.png";
import "./style.css";

export default class Nav extends Component {
  render() {
    return (
      <nav className="nav">
        <div className="navbar navbar-expand-lg navbar-light">
          <Link className="navbar-brand" to="/">
            <img className="nav-logo" src={Logo} alt="loanPal logo" />
          </Link>
          <div className="nav-bar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className={
                    window.location.pathname === "/loan-form"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  to="/loan-form"
                >
                  Apply Now
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={
                    window.location.pathname === "/loan-apps"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  to="/loan-apps"
                >
                  View Submissions
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
