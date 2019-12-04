import React, { Component } from "react";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import "./index.css";

import MeetingDisplay from "../displaymeetins/index";

import API from "../../utils/API";

class Meetings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      event_date: new Date(),
      user1: "",
      user2: "",
      event: "",
      email: "",
      message: {},
      message_email: {},
      data_server: []
    };
    this.handledate = this.handledate.bind(this);
    this.user1 = this.user1.bind(this);
    this.user2 = this.user2.bind(this);
    this.email = this.email.bind(this);
    this.handleUserEvent = this.handleUserEvent.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  // handles the listening when typing
  handledate = date => {
    this.setState({
      event_date: date
    });
  };

  user1(e) {
    this.setState({ user1: e.target.value });
  }

  user2(e) {
    this.setState({ user2: e.target.value });
  }

  email(e) {
    this.setState({ email: e.target.value });
  }

  handleUserEvent(e) {
    this.setState({ event: e.target.value });
  }

  // send the post request to the api with the value in the state
  submitForm(e) {
    // get the states as a perameter and send an email when an apointment is made.
    API.sendEmail(this.state, callback => {
      this.setState({ message_email: callback.data });
    });

    e.preventDefault();

    API.meeting(this.state, callback => {
      console.log(callback.data);

      this.setState({ message: callback.data });
    });
  }

  componentDidMount() {
    API.getuserInfoMain(callback => {
      this.setState({ data_server: callback.data });
    });
  }

  render() {
    return (
      <div>
        <div className="meetings">
          <br />
          <div>
            <div>{this.state.message.message}</div>
            {/* <div>{this.state.message_email}</div> */}
            <form onSubmit={this.submitForm}>
              <br />
              <input
                className="field1 "
                type="text"
                placeholder="user1"
                value={this.state.user1}
                onChange={this.user1}
              />

              <input
                className="field1"
                type="text"
                placeholder="user2"
                value={this.state.user2}
                onChange={this.user2}
              />

              <input
                className="field1"
                placeholder="event"
                type="text"
                value={this.state.date1}
                onChange={this.handleUserEvent}
              />

              <input
                className="field1"
                placeholder="email"
                value={this.state.email}
                onChange={this.email}
              />
              <div>
                <hr />
                <DatePicker
                  className="field1 date11"
                  selected={this.state.event_date}
                  onChange={this.handledate}
                />
              </div>

              <br />

              <button type="submit" className="btn btn-success" id="sudmit1">
                submit
              </button>
            </form>
          </div>
        </div>

        <div className="side">
          <MeetingDisplay data={this.state.data_server} />
        </div>
      </div>
    );
  }
}

export default Meetings;
