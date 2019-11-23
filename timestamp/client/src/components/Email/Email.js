import React, { useState } from 'react';
import API from '../utils/API'
import axios from 'axios';

function Email () {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleClick = (e) => {
      e.preventDefault();

      if(e.target.id === "email"){
       setEmail({[e.target.email]: e.target.value})
      }else if (e.target.id === "message"){
       setMessage({[e.target.message]: e.target.value})
      }
    }
  
    
   const onSend= (e) => {
      e.preventDefault();

     API.sendEmail(this.state, (callback) => {
            console.log(callback.data)
            this.setState({message: callback.data});
            if(callback.data.success){
                console.log('message sent')
            }else{
              console.log("error sending email");
              
              
              }
            })
  }
  
  
  
        return(
        <div>
  
              <div className='sendEmail'>
                <h1>Send an Email Bitch</h1>
                  <form onSubmit={onSend}> 
                    <input 
                          id= "email"
                          type="Email"
                          placeholder="Email" 
                          value={email}
                          onChange={handleClick}
                    />
                  <br />
                    <input 
                          id='message'
                          type='message' 
                          placeholder='message' 
                          value={message}
                          onChange={handleClick} 
                    />
                  <br />
                    <button onClick={onSend}>Send Email</button>
                  </form>
              </div>
        </div>
      )
}
  export default Email;
  