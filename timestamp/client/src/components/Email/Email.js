import React, {Component} from "react";
import axios from 'axios';
import index from './index.css';

class Email extends Component {
    constructor (props){
        super(props)

        this.state= {
            subject: '',
            email: '',
            message: ''
        }

        this.handleChangeSubject= this.handleChangeSubject.bind(this)
        this.handleChangeEmail= this.handleChangeEmail.bind(this)
        this.handleChangeMessage= this.handleChangeMessage.bind(this)
        this.handleSubmit =this.handleSubmit.bind(this)
        this.handleAlert = this.handleAlert.bind(this)
    }

    handleChangeSubject = (e) => {
        this.setState({subject: e.target.value})
      
    }

     handleChangeEmail = (e) => {
        this.setState({email: e.target.value})
    }

     handleChangeMessage = (e) => {
        this.setState({message: e.target.value})
    }

    async handleSubmit(e){
            e.preventDefault()

            const { subject, email, message} =this.state
            const form = await axios.post('/api/email/email', {
                subject,
                email,
                message,
            })

                console.log(message);
                
    }

    handleAlert = (e) => {
         
        alert("Email has been sent.")
         
    }

    render(){
        return(
            <div> 
            <form className="form" onSubmit={this.handleSubmit}>
                <h1 className="header">Send an Email</h1>
                <input 
                    className="subject"
                    type="text"
                    value= {this.subject}
                    name="subject"
                    placeholder= "Subject"
                    onChange= {this.handleChangeSubject}
                /> 
                <br />
                 <input 
                    className="email"
                    type="text"
                    value= {this.email}
                    name="email"
                    placeholder="Email"
                    onChange= {this.handleChangeEmail}
                /> 
                <br />
                 <input 
                    className="message"
                    type="text"
                    value={this.message}
                    name="message"
                    placeholder="Message"
                    onChange= {this.handleChangeMessage}
                /> 
                <br />
                <button className="button" onClick={this.handleAlert}> Submit </button>
            </form>        
            </div>
        )
    }

    
}

 export default Email;