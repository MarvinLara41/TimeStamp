import React from 'react';

import Login from "./pages/LoginPage/Login";


import DashBoard from "./pages/dashboard/index";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App(){

return(
  <Router>
    <div>
      <Switch>
      <Route exact  path="/" render = {props => <Login {...props} />}  />
    
      <Route exact  path="/dashboard" render = {props => <DashBoard {...props} />}  />

    
      </Switch>
    </div>
  </Router>
);

}

export default App;
