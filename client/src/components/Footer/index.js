import React, { Component } from "react";
import "./style.css";

export default class Footer extends Component {
  constructor(props) {
      super(props);
  }

  render() {
    return (
      <footer className="footer">
        <span className="copyright">© 2020 Copyright: Freedom Forever</span>
      </footer>
    )
  };
};