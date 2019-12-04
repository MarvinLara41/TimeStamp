import React, { Component } from "react";
import axios from "axios";
import API from "../../utils/API";
class PayStub extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: "",
      title: "",
      hoursWorked: "",
      payRate: "",
      payOut: "",
      date: "",
      results: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeFullName = this.handleChangeFullName.bind(this);
    this.handleChangeHoursWorked = this.handleChangeHoursWorked.bind(this);
    this.handleChangePayOut = this.handleChangePayOut.bind(this);
    this.handleChangePayRate = this.handleChangePayOut.bind(this);
    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
  }

  handleChangeFullName = e => {
    this.setState({ FullName: e.target.fullName });
  };

  handleChangeTitle = e => {
    this.setState({ Title: e.target.title });
  };

  handleChangeHoursWorked = e => {
    this.setState({ hoursWorked: e.target.hoursWorked });
  };

  handleChangePayRate = e => {
    this.setState({ payRate: e.target.payRate });
  };

  handleChangePayOut = e => {
    this.setState({ payOut: e.target.payOut });
  };

  handleChangeDate = e => {
    this.setState({ date: e.target.date });
  };

  async handleSubmit(e) {
    e.preventDefault();

    API.getPayStub(this.state, callback => {
      console.log(JSON.stringify(callback.data.value));
      alert(JSON.stringify(callback.data.value));
    });
  }

  render() {
    return (
      <div className="displyPay">
        <form className="table" onSubmit={this.handleSubmit}>
          <button className="btn11 btn btn-success">View my Check</button>
          <br />
          <p
            type="text"
            value={this.fullName}
            onChange={this.handleChangeFullName}
          ></p>
          <br />
          <p
            type="text"
            value={this.title}
            onChange={this.handleChangeTitle}
          ></p>
          <br />
          <p
            type="text"
            value={this.hoursWorked}
            onChange={this.handleChangeHoursWorked}
          >
            {" "}
          </p>
          <br />
          <p
            type="text"
            value={this.payRate}
            onChange={this.handleChangePayRate}
          ></p>
          <br />
          <p
            type="text"
            value={this.payOut}
            onChange={this.handleChangePayOut}
          ></p>
          <br />
          <p type="text" value={this.date} onChange={this.handleChangeDate}></p>
          <br />
        </form>
      </div>
    );
  }
}

export default PayStub;
