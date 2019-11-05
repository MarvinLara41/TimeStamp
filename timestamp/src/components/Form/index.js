import React, { Component } from 'react';
import "./index.css"



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
       
                  // <div className="mx-auto">
                   <div className ="main">

                     <div className="login_text">
                       Sign || In
                     </div>

                     <div className="line"> </div>

                   <form onSubmit= {this.handleSubmit} >
                    <div>
                    <label >name:</label>
                    <br />
                    <input type="text" value ={this.state.name} onChange ={this.handleUsernameChange} />
                    <br />
                    <label >password:</label>
                    <br />
                    <input type="text" value ={this.state.password} 
                    onChange ={this.handlePasswordChange}/>
                    </div>
                    <br />
                    <button type ="submit"className="btn btn-success">submit</button>
                    </form>

                    </div>
 
     
           
           
         );
    }
}
 
export default Login;