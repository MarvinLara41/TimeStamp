import React, { Component } from "react";

import { Navbar, Button } from "react-bootstrap";

import "./index.css";

import Logo from "./Logo.png";

class NavMain extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    window.location.href = "/";
  }

  render() {
    return (
      <Navbar bg="dark" variant="dark" className="top11">
        <Navbar.Brand href="/dashboard">
          <img
            alt="Logo"
            src={Logo}
            width="40"
            height="40"
            className="d-inline-block align-top"
          />
          Time||Stamp
        </Navbar.Brand>

        <Button
          type="submit"
          onClick={this.handleClick}
          className="logout1 btn btn-danger"
        >
          logout
        </Button>
      </Navbar>
    );
  }
}

export default NavMain;
