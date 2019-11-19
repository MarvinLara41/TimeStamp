import React, { Component } from 'react';
import API from '../utils/API'


class Email extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        //this is needed for loging into the account
        signEmail: '',
        signMessage: ''
      };
  
      this.onTextboxChangeSignEmail = this.onTextboxChangeSignEmail.bind(this)
      this.onTextboxChangeSignMessage=this.onTextboxChangeSignMessage.bind(this)
  
  
      //onSignIn allows me to connect to backend to allow access to the account
      this.onSend = this.onSend.bind(this);
    }
  
   
   // ************ Theses are the events binded inside the constructor *************
    onTextboxChangeSignEmail(event){
      this.setState({
        signEmail: event.target.value
      });
  
    }
  
    onTextboxChangeSignMessage(event){
      this.setState({
        signMessage: event.target.value
      });
  
    }
  
  
    
    onSend(e){
      e.preventDefault()
      
        //grab state 
      const {
        signEmail,
        signMessage,
      }= this.state;
      //sign in connected to backend
        API.sendEmail(this.state, (callback) => {
            console.log(callback.data)
            this.setState({message: callback.data});
            if(callback.data.success){
                console.log('message sent')
            }else{
              console.log("error sending email");
              
              
              }
            }
          )
    }
  
  
   render() {
  
      const {
        signEmail,
        signMessage,
  
      } = this.state;
  
        return(
        <div>
  
              <div className='sendEmail'>
                <h1>Send an Email Bitch</h1>
                  <form onSubmit={this.onSend}> 
                    <input 
                          type="Email"
                          placeholder="Email" 
                          value={signEmail}
                          onChange={this.onTextboxChangeSignEmail}
                    />
                  <br />
                    <input 
                          type='message' 
                          placeholder='message' 
                          value={signMessage}
                          onChange={this.onTextboxChangeSignMessage} 
                    />
                  <br />
                    <button onClick={this.onSend}>Send Email</button>
                  </form>
              </div>
        </div>
      )
    }
}
  exports.signMessage = message;
  exports.signEmail = email;
  export default Email;
  