import React, { Component } from "react";
import "./style.css";

export default class LoanApps extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    //bind events
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    console.log(event);
  }

  render() {
    return (
      <div className="loan-submissions">
        <input type="text" onChange={this.handleInputChange} />
        <table className="loan-submission-table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Street</th>
              <th>City</th>
              <th>State</th>
              <th>Zip</th>
              <th>Phone Number</th>
              <th>Phone Number</th>
              <th>Phone Number</th>
              <th>Phone Number</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>{this.render}</tbody>
        </table>
      </div>
    );
  }
}
