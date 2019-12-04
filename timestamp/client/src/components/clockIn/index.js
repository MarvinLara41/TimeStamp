import React, { Component } from "react";
import axios from "axios";

import "./index.css";
import ClockTable from "../clocIn_table/index";
import API from "../../utils/API";

class ClockIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input1: "",
      request: []
    };

    this.submitForm = this.submitForm.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      input1: e.target.value
    });
  }

  submitForm(e) {
    e.preventDefault();

    API.postClocks(this.state.input1, callback => {
      console.log(callback);
    });
  }

  componentDidMount() {
    API.getClocks(callback => {
      this.setState({ request: callback.data });
      // console.log("the state1111", this.state);
    });
  }

  render() {
    return (
      <div className="main_1">
        <form onSubmit={this.submitForm}>
          <select
            value={this.state.input1}
            onChange={this.handleInputChange}
            name="clock101"
            className="clockmain1"
          >
            <option value="Breake">Breake</option>
            <option value="Lunch">Lunch</option>
            <option value="PunchIn" selected>
              PunchIn
            </option>
            <option value="PunchOut">PunchOut</option>
          </select>

          <hr />

          <button type="submit" className="button_main btn btn-success">
            Go
          </button>
        </form>
        <hr />

        <div className="clock_info">
          <ClockTable data1={this.state.request} />
        </div>
      </div>
    );
  }
}

export default ClockIn;
