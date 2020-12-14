import React, { Component } from "react";
import axios from "axios";
import "./style.css";

export default class LoanApps extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: "first_name",
      searchType: "First Name",
      submissionData: [],
      userInput: "",
    };

    //bind events
    this.deleteSubmission = this.deleteSubmission.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleRadioChange = this.handleRadioChange.bind(this);
  }

  componentDidMount() {
    axios.get("/api/loans").then((res) => {
      this.setState({
        submissionData: res.data,
      });
    });
  }

  handleInputChange(event) {
    const searchParams = {
      searchValue: this.state.searchValue,
      userInput: event.target.value,
    };
    axios.post("/api/search-loan", searchParams).then((res) => {
      this.setState({
        submissionData: res.data,
        userInput: event.target.value,
      });
    });
  }

  handleRadioChange(event) {
    const searchParams = {
      searchValue: event.target.getAttribute("value"),
      userInput: this.state.userInput,
    };
    axios.post("/api/search-loan", searchParams).then((res) => {
      this.setState({
        submissionData: res.data,
        searchValue: event.target.getAttribute("value"),
        searchType: event.target.getAttribute("text"),
      });
    });
  }

  deleteSubmission(event) {
    axios
      .delete(`/api/delete-loan/${event.target.getAttribute("target")}`)
      .then((res) => {
        this.setState({
          submissionData: res.data,
        });
      });
  }

  renderSubmission() {
    let result = null;
    const submissions = this.state.submissionData;
    if (submissions.length > 0) {
      result = submissions.map((submission) => {
        return (
          <tr key={submission.id}>
            <td className="align-middle">{submission.first_name}</td>
            <td className="align-middle">{submission.last_name}</td>
            <td className="align-middle">{submission.street}</td>
            <td className="align-middle">{submission.city}</td>
            <td className="align-middle">{submission.state}</td>
            <td className="align-middle">{submission.zip_code}</td>
            <td className="align-middle">{submission.phone_number}</td>
            <td className="align-middle">{submission.dob}</td>
            <td className="align-middle">{submission.ssn}</td>
            <td className="align-middle">{submission.pre_tax_income}</td>
            <td className="align-middle">
              <i
                className="fas fa-trash-alt"
                target={submission.id}
                onClick={this.deleteSubmission}
              ></i>
            </td>
          </tr>
        );
      });
    }
    return result;
  }

  render() {
    return (
      <div className="loan-submissions">
        <div className="loan-search container">
          <div className="search-bar">
            <label htmlFor="search-bar">Search</label>
            <input
              id="search-bar"
              name="search-bar"
              type="text"
              placeholder={`Enter ${this.state.searchType}`}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="search-type-container">
            <label htmlFor="search-type">Filter</label>
            <span>First Name</span>
            <input
              type="radio"
              name="search-type"
              value="first_name"
              text="First Name"
              onChange={this.handleRadioChange}
            />
            <span>Last Name</span>
            <input
              type="radio"
              name="search-type"
              value="last_name"
              text="Last Name"
              onChange={this.handleRadioChange}
            />
            <span>Street</span>
            <input
              type="radio"
              name="search-type"
              value="street"
              text="Street"
              onChange={this.handleRadioChange}
            />
            <span>City</span>
            <input
              type="radio"
              name="search-type"
              value="city"
              text="City"
              onChange={this.handleRadioChange}
            />
            <span>State</span>
            <input
              type="radio"
              name="search-type"
              value="state"
              text="State"
              onChange={this.handleRadioChange}
            />
            <span>Zip</span>
            <input
              type="radio"
              name="search-type"
              value="zip"
              text="Zip"
              onChange={this.handleRadioChange}
            />
            <span>Phone Numeber</span>
            <input
              type="radio"
              name="search-type"
              value="phone_number"
              text="Phone Number"
              onChange={this.handleRadioChange}
            />
            <span>Date of Birth</span>
            <input
              type="radio"
              name="search-type"
              value="dob"
              text="Date of Birth"
              onChange={this.handleRadioChange}
            />
            <span>Last 4 Digits of SSN</span>
            <input
              type="radio"
              name="search-type"
              value="ssn"
              text="Last 4 Digits of SSN"
              onChange={this.handleRadioChange}
            />
            <span>Pre-Tax Annual Income</span>
            <input
              type="radio"
              name="search-type"
              value="pre_tax_income"
              text="Pre-Tax Annual Income"
              onChange={this.handleRadioChange}
            />
          </div>
        </div>
        <table className="loan-submission-table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Street</th>
              <th>City</th>
              <th>State</th>
              <th>Zip</th>
              <th>Date of Birth</th>
              <th>Last 4 Digits of SSN</th>
              <th>Pre-Tax Annual Income</th>
            </tr>
          </thead>
          <tbody>{this.renderSubmission()}</tbody>
        </table>
      </div>
    );
  }
}
