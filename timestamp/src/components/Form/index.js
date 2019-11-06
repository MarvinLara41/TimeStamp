import React, { Component } from 'react';
import "./index.css"
// import { Loader } from 'rsuite';
// import { Form,Button  } from 'semantic-ui-react'

// ***************************************
// need to alert wen an oput is missing

class Login extends Component {


    constructor (props){
        super (props)



        this.state = { 
            name: "",
            password: ""
         } 

    }


    handleUsernameChange = (event) => {
          this.setState({
              name : event.target.value
          })

    }

    handlePasswordChange = (event) => {
        this.setState({
            password : event.target.value
        })

    }



    handleSubmit = event => {
    
       
      






        alert (` Name: ${this.state.name} Password: ${this.state.password} `)
        event.preventDefault()
     
        
        
        this.setState({    //****************************** */
            name : '',     // clears the value of the input
            password:''    //***************************** */
        });

        
                
  

    }

    
    render() { 
        return ( 
       
<form className="main" onSubmit= {this.handleSubmit}  >
  <div className="field">
    <label>Email</label>
    <div className="field"><input type="text" placeholder="email" value ={this.state.name} onChange ={this.handleUsernameChange}  /></div>
  </div>

  <div className="field">
    <label>Password</label>
    <div className="field"><input type="text" placeholder="password" value ={this.state.password} onChange ={this.handlePasswordChange}/></div>
  </div>
  <button className="btn btn-secondary">Submit

  </button>
</form>
         );
    }
}
 
export default Login;