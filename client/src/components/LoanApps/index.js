import React, { Component } from "react";
import axios from "axios";
import { saveAs } from "file-saver";
import Papa from "papaparse";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
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

    // Bind events
    this.deleteSubmission = this.deleteSubmission.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleRadioChange = this.handleRadioChange.bind(this);
    this.generateCSVReport = this.generateCSVReport.bind(this);
    this.generatePDFReport = this.generatePDFReport.bind(this);
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

  generateCSVReport() {
    const { submissionData } = this.state;

    // Format data for CSV
    const csvData = submissionData.map(submission => ({
      "First Name": submission.first_name,
      "Last Name": submission.last_name,
      "Street": submission.street,
      "City": submission.city,
      "State": submission.state,
      "Zip Code": submission.zip_code,
      "Phone Number": submission.phone_number,
      "Date of Birth": submission.dob,
      "Last 4 Digits of SSN": submission.ssn,
      "Pre-Tax Annual Income": submission.pre_tax_income
    }));

    // Convert JSON to CSV
    const csv = Papa.unparse(csvData);

    // Create a blob from the CSV and trigger download
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "loan_report.csv");
  }

  async generatePDFReport() {
    const input = document.getElementById('loan-report');
    input.style.backgroundColor = "#292929fc";

    const pdf = new jsPDF('p', 'pt', 'a4');

    // Capture the HTML content and convert it to canvas
    await html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const imgWidth = pdf.internal.pageSize.getWidth();
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      // Add the image to the PDF
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
    });

    // Save the PDF
    pdf.save("loan_report.pdf");
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
                className="fas fa-trash-alt delete-submission"
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
          {/* ... (Your existing search bar and radio button code) ... */}
        </div>
        <div className="caption">Searched Submissions</div>
        <div id="loan-report">
          <table className="loan-submission-table table container">
            <thead>
              <tr>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Street</th>
                <th scope="col">City</th>
                <th scope="col">State</th>
                <th scope="col">Zip Code</th>
                <th scope="col">Phone Number</th>
                <th scope="col">Date of Birth</th>
                <th scope="col">Last 4 Digits of SSN</th>
                <th scope="col">Pre-Tax Annual Income</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>{this.renderSubmission()}</tbody>
          </table>
        </div>
        <button onClick={this.generateCSVReport} className="btn btn-primary btn-method">
          Generate CSV Report
        </button>
        <button onClick={this.generatePDFReport} className="btn btn-primary btn-method">
          Generate PDF Report
        </button>
      </div>
    );
  }
}
