import React, { Component } from "react";

// import {Redirect} from "react-router-dom"

import API from "../../utils/API";

// import { Button, Form } from 'react-bootstrap';

import "./index.css";
// import { response } from 'express';
// import { ca } from 'date-fns/locale';

class FormMain extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      message: {},
      loggedIn: null
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  handleEmailChange(e) {
    this.setState({
      email: e.target.value
    });
  }

  handlePasswordChange(e) {
    this.setState({
      password: e.target.value
    });
  }

  componentDidMount() {
    const local = localStorage.getItem("token");

    console.log(local);

    if (local) {
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
    }
  }

  submitForm(e) {
    e.preventDefault();

    API.signIn(this.state, callback => {
      console.log(callback.data);
      this.setState({ message: callback.data });
      localStorage.setItem("token", callback.data.token);

      if (callback.data.success) {
        this.setState({ loggedIn: true });
        console.log("dlfhois", this.state.loggedIn);
        // window.location.href = "/dashboard";
        window.location.assign("/dashboard");
      } else if (this.state.loggedIn) {
        console.log("true");
      }

      // devrobert@timestamp.com
    });
  }

  // devrobert@timestamp.com

  render() {
    return (
      <div className="main">
        <h1>Login</h1>

        <div className="mx-auto">
          <form onSubmit={this.submitForm}>
            <div>
              <div className="message">
                {this.state.message.message}
                <hr />
              </div>
              <label>email:</label>
              <input
                className="field"
                type="text"
                value={this.state.email}
                onChange={this.handleEmailChange}
                autoComplete="email"
              />

              <label>password:</label>
              <input
                className="field"
                type="password"
                value={this.state.password}
                onChange={this.handlePasswordChange}
                autoComplete="password"
              />
            </div>
            <br />
            <button type="submit" className="btn btn-success" id="sudmit1">
              submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default FormMain;
