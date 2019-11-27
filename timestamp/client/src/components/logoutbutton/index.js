import React, { Component } from "react";

import { Link } from "react-router-dom";
// import API from "../../utils/API";

import "./index.css";

class LogOutButton extends Component {
  //  localStorage.removeItem("token")
  render() {
    return (
      <div type="button" value="Button" className="signout">
        <Link to="/"> signout</Link>
      </div>
    );
  }
}

export default LogOutButton;
