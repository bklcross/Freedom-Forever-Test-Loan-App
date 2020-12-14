import React, { Component } from "react";
import "./style.css";

export default class Welcome extends Component {
  render() {
    return (
      <div className="banner">
        <h2 className="banner-header">GET APPROVED IN SECONDS!</h2>
        <p className="banner-details">
          Please fill out this credit application to apply for your new LoanPal
          loan
        </p>
      </div>
    );
  }
}
