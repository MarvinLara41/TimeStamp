import React, {Component } from 'react'

// import {Redirect} from "react-router-dom"

import API from "../../utils/API";

// import { Button, Form } from 'react-bootstrap';


import "./index.css"
// import { ca } from 'date-fns/locale';

class FormMain extends Component {
    
  constructor(props) {
    super(props)


    this.state = { 
        email: '',
        password: '',
        message: {}

     }

     this.handleEmailChange = this.handleEmailChange.bind(this)
     this.handlePasswordChange = this.handlePasswordChange.bind(this)
     this.submitForm = this.submitForm.bind(this)

  }
  
  handleEmailChange(e){
  this.setState({
    email: e.target.value
  })
}

handlePasswordChange(e){
  this.setState({
    password: e.target.value
  })
}




submitForm(e){
  e.preventDefault()

API.signIn(this.state, (callback) => {
  console.log(callback.data)
  this.setState({message:callback.data})


 

  localStorage.setItem("token", callback.data.token);
  

  if(callback.data.token && callback.data.message) {
    this.props.history.push('/dashbooard');
 console.log("hello")
  }



} )



// console.log(user);













}






    render() { 


        return ( 
<div className = "main">

<h1>Login</h1>

<div className="mx-auto">
           
           <form onSubmit= {this.submitForm} >
            <div>

              <div className="message">{this.state.message.message}</div>
            <label >email:</label>
            <input type="text" value ={this.state.email} onChange ={this.handleEmailChange} />
            <br />
            <label >password:</label>
            <input type="password" value ={this.state.password} 
            onChange ={this.handlePasswordChange} />
            </div>
            <br />
            <button type ="submit"className="btn btn-success" id="sudmit1">submit</button>
            </form>

            </div>



</div>


         );
    }
}
 
export default FormMain;