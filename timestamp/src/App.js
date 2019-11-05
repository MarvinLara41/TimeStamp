import React from "react";

import SignIn from "../src/pages/singin/signIn";

import AboutPage from "../src/pages/aboutPage/about";

import ContactPage from "../src/pages/contactPage/contact";

import MainPage from "../src/pages/mainPage/dashboard";


import Nav from "../src/components/Nav/index";

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";






function App() {
  return (
    <Router>
       <Nav />

<Switch>
<Route path="/signin" component = {SignIn} />

<Route path="/about" component = {AboutPage} />

<Route path="/contact" component = {ContactPage} />

<Route path="/" exact component = {MainPage} />
</Switch>

    </Router>
  );
}

export default App;
