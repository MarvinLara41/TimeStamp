import React, { Component } from "react";
import axios from "axios";
import "./index.css";

{/* <div class="nav_top"><nav class="navbar navbar-expand navbar-dark bg-dark"><a href="#home" class="navbar-brand">Time||Stamp</a></nav></div> */}
class Insurance extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      insuranceName: "",
      dependencies: "",
      insuranceId: "",
      phoneNumber: ""
    };

    this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
    this.handleChangeLastName = this.handleChangeLastName.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeInsuranceName = this.handleChangeInsuranceName.bind(this);
    this.handleChangeDependencies = this.handleChangeDependencies.bind(this);
    this.handleChangeInsuranceId = this.handleChangeInsuranceId.bind(this);
    this.handleChangePhoneNumber = this.handleChangePhoneNumber.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeFirstName = e => {
    this.setState({ subject: e.target.value });
  };

  handleChangeLastName = e => {
    this.setState({ subject: e.target.value });
  };

  handleChangeEmail = e => {
    this.setState({ subject: e.target.value });
  };

  handleChangeInsuranceName = e => {
    this.setState({ subject: e.target.value });
  };

  handleChangeDependencies = e => {
    this.setState({ subject: e.target.value });
  };

  handleChangeInsuranceId = e => {
    this.setState({ subject: e.target.value });
  };

  handleChangePhoneNumber = e => {
    this.setState({ subject: e.target.value });
  };

  async handleSubmit(e) {
    e.preventDefault();

    const {
      firstName,
      lastName,
      email,
      insuranceName,
      dependencies,
      insuranceId,
      phoneNumber
    } = this.state;
    const form = await axios.post("/api/insurance/insurance", {
      firstName,
      lastName,
      email,
      insuranceName,
      dependencies,
      insuranceId,
      phoneNumber
    });
  }

  render() {
    return (

     
      <div className = "table">
        <form onSubmit={this.handleSubmit}>
          <h1>Insurance Information</h1>
          <input
            type="text"
            value={this.firstName}
            name="First Name"
            placeholder="First Name"
            onChange={this.handleChangeFirstName}
          />

          <br />
          <input
            type="text"
            value={this.lastName}
            name="Last Name"
            placeholder="Last Name"
            onChange={this.handleChangeLastName}
          />

          <br />
          <input
            type="text"
            value={this.email}
            name="Last Name"
            placeholder="Last Name"
            onChange={this.handleChangeEmail}
          />

          <br />
          <input
            type="text"
            value={this.insuranceName}
            name="Insurance Name"
            placeholder="Insurance Name"
            onChange={this.insuranceName}
          />

          <br />
          <input
            type="text"
            value={this.dependencies}
            name="Dependencies"
            placeholder="Dependencies"
            onChange={this.dependencies}
          />

          <br />
          <input
            type="text"
            value={this.insuranceId}
            name="Insurance Id"
            placeholder="Insurance Id"
            onChange={this.insuranceId}
          />

          <br />
          <input
            type="text"
            value={this.phoneNumber}
            name="Phone Number"
            placeholder="Phone Number"
            onChange={this.phoneNumber}
          />

<button type="submit" className="btn btn-success" id="sudmit1">
              submit
            </button>
        </form>
      </div>
       
       
    );
  }
}


export default Insurance;

