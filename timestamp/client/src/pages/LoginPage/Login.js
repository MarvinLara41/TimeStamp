import React, { Component } from "react";

import FormMain from "../../components/login";

import NavMain from "../../components/topNav/index";

import Logo from "../../components/topNav/Logo.png";

import { Navbar,Button } from 'react-bootstrap';

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
        <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/">
      <img
        alt="Logo"
        src={Logo}
        width="40"
        height="40"
        className="d-inline-block align-top"
      />
      Time||Stamp
    </Navbar.Brand>
  </Navbar>
        </div>

        

        <div className="center1">
          <FormMain />
        </div>
      </div>
    );
  }
}

export default Login;
