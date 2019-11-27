import React, {Component} from "react";
import axios from 'axios';

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

    render(){
        return(
            <div> 
            <form onSubmit={this.handleSubmit}>
                <h1>Send an Email</h1>
                <input 
                    type="text"
                    value= {this.subject}
                    name="subject"
                    placeholder= "Subject"
                    onChange= {this.handleChangeSubject}
                /> 
                <br />
                 <input 
                    type="text"
                    value= {this.email}
                    name="email"
                    placeholder="Email"
                    onChange= {this.handleChangeEmail}
                /> 
                <br />
                 <input 
                    type="text"
                    value={this.message}
                    name="message"
                    placeholder="Message"
                    onChange= {this.handleChangeMessage}
                /> 

                <button> Submit </button>
            </form>        
            </div>
        )
    }
}

 export default Email;