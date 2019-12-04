import React, { Component } from "react";
import axios from "axios";
import API from "../../utils/API";

import "./index.css";

class Insurance extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      insuranceName: "",
      dependecies: "",
      insuranceId: "",
      phoneNumber: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(e) {
    e.preventDefault();

    API.getInsurance(this.state, callback => {
      // console.log(JSON.stringify(callback.data.value))
      alert(JSON.stringify(callback.data.value));
    });
  }

  render() {
    return (
      <div className="display">
        <form className="table" onSubmit={this.handleSubmit}>
          <button className="btn11 btn btn-warning">
            {" "}
            View my Insurance Info
          </button>

          <br />
          <p type="text" value={this.firstName}>
            {" "}
          </p>
          <br />
          <p type="text" value={this.lastName}></p>
          <br />
          <p type="text" value={this.email}>
            {" "}
          </p>
          <br />
          <p type="text" value={this.insuranceName}></p>
          <br />
          <p type="text" value={this.dependcies}></p>
          <br />
          <p type="text" value={this.insuranceId}></p>
          <br />
          <p value={this.phoneNumber}></p>
        </form>
      </div>
    );
  }
}

export default Insurance;
