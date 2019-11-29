import React, { Component } from 'react';

import Login from "./pages/LoginPage/Login";

import DashBoard from "./pages/dashboard/index";

import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";


// import { withRouter } from 'react-router-dom';

// check to see if there is a token in local storage

let loggedin = false

const token = localStorage.getItem("token")

console.log(token)

if(token === "undefined"){
  loggedin = false
}
else if(token) {
  loggedin = true
}




class App extends Component{

constructor (props) {

  super(props)

  this.state = {

    token:loggedin

  }

}



// handleSuccessfulAuth(){

//   this.props.history.push("/dashboard")
// }




render() {
  console.log(this.state.token)
// check to see if the user is auth before allowin to see info

  const PrivateRoute =({component: Component, ...rest}) =>(
    <Route {...rest} render = {(props) =>(
      this.state.token === true 
      ? <Component {...props} />
      : <Redirect to = "/" />
    )} />
  
  )

  return(
    <Router>
      <div>
        <Switch>
        <Route exact  path="/"  component ={Login} />}  />
        <PrivateRoute exact  path="/dashboard" component={DashBoard}  />
        </Switch>
      </div>
    </Router>
  );
  






}


}

export default App;