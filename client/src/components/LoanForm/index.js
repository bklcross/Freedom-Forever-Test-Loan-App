import React, { Component } from "react";
import Banner from "../Banner";
import axios from "axios";
import "./style.css";

export default class LoanForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: "",
      last_name: "",
      street: "",
      city: "",
      state: "",
      zip_code: "",
      phone1: "",
      phone2: "",
      phone3: "",
      month: "",
      day: "",
      year: "",
      ssn: "",
      pre_tax_income: "",
      success: false,
    };

    //bind events
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleInputChange(event) {
    const formType = event.target.id;
    this.setState({
      [formType]: event.target.value,
    });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    const {
      first_name,
      last_name,
      street,
      city,
      state,
      zip_code,
      phone1,
      phone2,
      phone3,
      month,
      day,
      year,
      ssn,
      pre_tax_income,
    } = this.state;
    const formData = {
      first_name: first_name,
      last_name: last_name,
      street: street,
      city: city,
      state: state,
      zip_code: zip_code,
      phone_number: `(${phone1}) ${phone2}-${phone3}`,
      dob: `${month} ${day}, ${year}`,
      ssn: ssn,
      pre_tax_income: pre_tax_income,
    };
    axios.post("/api/loans", formData).then((res) => {
      console.log(res.data);
      if (res.data.success) {
        this.setState({
          success: true,
        });
      }
    });
  }

  renderSuccessMessage() {
    let result = null;
    if (this.state.success) {
      result = (
        <div className="success-message">
          Your application submission was a success!
        </div>
      );
    }

    return result;
  }

  disableForm() {
    let result = false;
    if (this.state.success) {
      result = true;
    }
    return result;
  }

  render() {
    return (
      <>
        <Banner />
        <form className="loan-form" onSubmit={this.handleFormSubmit}>
          <fieldset
            className="form-fields container"
            disabled={this.disableForm()}
          >
            <ul className="form-container col-lg-6">
              <li className="form-list-item">
                <label htmlFor="first_name">FIRST NAME</label>
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  placeholder="First Name"
                  onChange={this.handleInputChange}
                />
              </li>
              <li className="form-list-item">
                <label htmlFor="last_name">LAST NAME</label>
                <input
                  type="text"
                  id="last_name"
                  name="last_name"
                  placeholder="Last Name"
                  onChange={this.handleInputChange}
                />
              </li>
              <li className="form-list-item">
                <label htmlFor="street">STREET (No P.0. Boxes)</label>
                <input
                  type="text"
                  id="street"
                  name="street"
                  placeholder="Street"
                  onChange={this.handleInputChange}
                />
              </li>
              <li className="form-list-item">
                <label htmlFor="city">CITY</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  placeholder="City"
                  onChange={this.handleInputChange}
                />
              </li>
              <li className="form-list-item form-extended">
                <div className="form-sub-container">
                  <label htmlFor="state">STATE</label>
                  <select
                    type="text"
                    id="state"
                    name="state"
                    onChange={this.handleInputChange}
                  >
                    <option defaultValue="">Choose...</option>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="DC">District Of Columbia</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="HI">Hawaii</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="ME">Maine</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="MT">Montana</option>
                    <option value="NE">Nebraska</option>
                    <option value="NV">Nevada</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NY">New York</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UT">Utah</option>
                    <option value="VT">Vermont</option>
                    <option value="VA">Virginia</option>
                    <option value="WA">Washington</option>
                    <option value="WV">West Virginia</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WY">Wyoming</option>
                  </select>
                </div>
                <div className="form-sub-container">
                  <label className="form-zip-label" htmlFor="zip_code">
                    ZIP
                  </label>
                  <input
                    type="text"
                    id="zip_code"
                    name="zip_code"
                    placeholder="Zip"
                    onChange={this.handleInputChange}
                  />
                </div>
              </li>
            </ul>
            <ul className="form-container col-lg-6">
              <li className="form-list-item">
                <label>PHONE</label>
                <div className="form-phone-container">
                  <span>(</span>
                  <input
                    type="text"
                    id="phone1"
                    placeholder="999"
                    onChange={this.handleInputChange}
                  />
                  <span>)</span>
                  <input
                    type="text"
                    id="phone2"
                    placeholder="999"
                    onChange={this.handleInputChange}
                  />
                  <span>-</span>
                  <input
                    type="text"
                    id="phone3"
                    placeholder="9999"
                    onChange={this.handleInputChange}
                  />
                </div>
              </li>
              <li className="form-list-item">
                <label>DATE OF BIRTH</label>
                <div className="form-dob-container">
                  <select id="month" onChange={this.handleInputChange}>
                    <option defaultValue="Month">MONTH</option>
                    <option value="January">January</option>
                    <option value="February">February</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                    <option value="July">July</option>
                    <option value="August">August</option>
                    <option value="September">September</option>
                    <option value="October">October</option>
                    <option value="November">November</option>
                    <option value="December">December</option>
                  </select>
                  <select id="day" onChange={this.handleInputChange}>
                    <option defaultValue="Day">DAY</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                  </select>
                  <select id="year" onChange={this.handleInputChange}>
                    <option defaultValue="Year">Year</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                    <option value="2011">2011</option>
                    <option value="2010">2010</option>
                    <option value="2009">2009</option>
                    <option value="2008">2008</option>
                    <option value="2007">2007</option>
                    <option value="2006">2006</option>
                    <option value="2005">2005</option>
                    <option value="2004">2004</option>
                    <option value="2003">2003</option>
                    <option value="2002">2002</option>
                    <option value="2001">2001</option>
                    <option value="2000">2000</option>
                    <option value="1999">1999</option>
                    <option value="1998">1998</option>
                    <option value="1997">1997</option>
                    <option value="1996">1996</option>
                    <option value="1995">1995</option>
                    <option value="1994">1994</option>
                    <option value="1993">1993</option>
                    <option value="1992">1992</option>
                    <option value="1991">1991</option>
                    <option value="1990">1990</option>
                    <option value="1989">1989</option>
                    <option value="1988">1988</option>
                    <option value="1987">1987</option>
                    <option value="1986">1986</option>
                    <option value="1985">1985</option>
                    <option value="1984">1984</option>
                    <option value="1983">1983</option>
                    <option value="1982">1982</option>
                    <option value="1981">1981</option>
                    <option value="1980">1980</option>
                    <option value="1979">1979</option>
                    <option value="1978">1978</option>
                    <option value="1977">1977</option>
                    <option value="1976">1976</option>
                    <option value="1975">1975</option>
                    <option value="1974">1974</option>
                    <option value="1973">1973</option>
                    <option value="1972">1972</option>
                    <option value="1971">1971</option>
                    <option value="1970">1970</option>
                    <option value="1969">1969</option>
                    <option value="1968">1968</option>
                    <option value="1967">1967</option>
                    <option value="1966">1966</option>
                    <option value="1965">1965</option>
                    <option value="1964">1964</option>
                    <option value="1963">1963</option>
                    <option value="1962">1962</option>
                    <option value="1961">1961</option>
                    <option value="1960">1960</option>
                    <option value="1959">1959</option>
                    <option value="1958">1958</option>
                    <option value="1957">1957</option>
                    <option value="1956">1956</option>
                    <option value="1955">1955</option>
                    <option value="1954">1954</option>
                    <option value="1953">1953</option>
                    <option value="1952">1952</option>
                    <option value="1951">1951</option>
                    <option value="1950">1950</option>
                    <option value="1949">1949</option>
                    <option value="1948">1948</option>
                    <option value="1947">1947</option>
                    <option value="1946">1946</option>
                    <option value="1945">1945</option>
                    <option value="1944">1944</option>
                    <option value="1943">1943</option>
                    <option value="1942">1942</option>
                    <option value="1941">1941</option>
                    <option value="1940">1940</option>
                    <option value="1939">1939</option>
                    <option value="1938">1938</option>
                    <option value="1937">1937</option>
                    <option value="1936">1936</option>
                    <option value="1935">1935</option>
                    <option value="1934">1934</option>
                    <option value="1933">1933</option>
                    <option value="1932">1932</option>
                    <option value="1931">1931</option>
                    <option value="1930">1930</option>
                  </select>
                </div>
              </li>
              <li className="form-list-item">
                <label htmlFor="ssn">LAST 4 DIGITS OF SOCIAL SECURITY</label>
                <input
                  type="text"
                  id="ssn"
                  name="ssn"
                  onChange={this.handleInputChange}
                />
              </li>
              <li className="form-list-item">
                <label htmlFor="pre_tax_income">PRE-TAX ANNUAL INCOME</label>
                <input
                  type="text"
                  id="pre_tax_income"
                  name="pre_tax_income"
                  onChange={this.handleInputChange}
                />
              </li>
              <li className="form-list-item">
                <input
                  className="form-submit-btn"
                  type="submit"
                  value="Submit Application"
                />
                {this.renderSuccessMessage()}
              </li>
            </ul>
          </fieldset>
          <div className="disclaimer-container">
            <p className="disclaimer">
              LoanPal strives for compliance with all applicable state and
              federal regulations pertaining to mortgage lending, advertising,
              and marketing including but not limited to all federal regulations
              set forth in title 12 of the Code of Federal Regulations, and the
              guidelines promulgated and/or enforced by the U.S. Department of
              Housing and Urban Development, The Consumer Financial Protection
              Bureau, and the Federal Trade Commission. Supreme Lending is not
              affiliated with any government agency. All applications are
              subject to underwriting guidelines and approval. This does not
              constitute an offer to lend. Not all applicants will qualify for
              all loan products offered. All loan programs, terms and interest
              rates are subject to change without notice. All fees are subject
              to state and federal high cost thresholds. Not all products are
              available in all states. Other restrictions and limitations may
              apply.
            </p>
          </div>
        </form>
      </>
    );
  }
}
