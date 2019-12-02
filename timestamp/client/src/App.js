import React, { Component } from "react";

import Login from "./pages/LoginPage/Login";

import DashBoard from "./pages/dashboard/index";

import Email from "./components/Email/Email"

// import PayStub from "./components/payStub/PayStub"

import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";

// import Insurance from "./components/Insurance/Insurance";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

// check to see if there is a token in local storage

let loggedin = false;

const token = localStorage.getItem("token");

console.log(token);

if (token === "undefined") {
  loggedin = false;
} else if (token) {
  loggedin = true;
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      token: loggedin
    };
  }

  






}




export default App;
