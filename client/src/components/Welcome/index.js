import React, { Component } from "react";
import LoanImage from "../../images/home-loan.svg";
import "./style.css";

export default class Welcome extends Component {
  render() {
    return (
      <div className="welcome">
        <section className="introduction row">
          <div className="introduction-text-container col-12 col-lg-6">
            <h1 className="title">Welcome to LoanPal</h1>
            <p className="subtitle">
              The first step to financial wellness is taking control of your
              credit card debt. The LoanPal gives competitive interest rates and
              helps to consolidate your debt.
            </p>
            <a className="apply-link" href="/loan-form">
              <button className="apply-btn">Apply Now</button>
            </a>
          </div>
          <div className="introduction-img-container col-12 col-lg-6">
            <img
              className="introduction-img"
              src={LoanImage}
              alt="loan-hero-image"
            />
          </div>
        </section>
        <section className="benefits">
          <div className="container text-center">
            <h2 className="section-header">Benefits of LoanPal</h2>
            <div className="row mb-md-3">
              <div className="col-md-4 benefit-card">
                <i className="fa fa-fw fa-credit-card fa-4x mb-3"></i>
                <h5>Better Than Credit</h5>
                <p>
                  Lower rates than most credit cards and customizable loan
                  terms.
                </p>
              </div>
              <div className="col-md-4 benefit-card">
                <i className="fa fa-fw fa-check-circle fa-4x mb-3"></i>
                <h5>Simple and Easy</h5>
                <p>
                  A single, fixed, and affordable monthly payment to simplify
                  your life.
                </p>
              </div>
              <div className="col-md-4 benefit-card">
                <i className="fa fa-fw fa-chart-line fa-4x mb-3"></i>
                <h5>Credit Boost</h5>
                <p>
                  Paying off your credit cards can help increase your credit
                  score by 40+ points.<sup>††</sup>
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 benefit-card">
                <i className="fa fa-fw fa-comments-dollar fa-4x mb-3"></i>
                <h5>Personal Service</h5>
                <p>
                  Talk to the friendly and helpful people in our Tustin, CA
                  office.
                </p>
              </div>
              <div className="col-md-4 benefit-card">
                <i className="fa fa-fw fa-desktop fa-4x mb-3"></i>
                <h5>Fast Application</h5>
                <p>All it takes is a few minutes to check your rate online.</p>
              </div>
              <div className="col-md-4 benefit-card">
                <i className="fa fa-fw fa-thumbs-up fa-4x mb-3"></i>
                <h5>Focused on Credit Cards</h5>
                <p>
                  Our loans are specifically designed to help you eliminate
                  high-interest credit card debt.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
