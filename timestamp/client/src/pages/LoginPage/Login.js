import React, { Component } from "react";

import FormMain from "../../components/login";

import NavMain from "../../components/topNav/index";

// devrobert@timestamp.com

import "./index.css";

class Login extends Component {
  state = {
    // token:localStorage.getItem("token")
  };
  render() {
    return (
      <div className="wall">
        <div className="nav_top">
          <NavMain />
        </div>

        <div className="center1">
          <FormMain />
        </div>
      </div>
    );
  }
}

export default Login;
