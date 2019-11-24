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

        this.handleChange= this.handleChange.bind(this)
        this.handleSubmit =this.handleSubmit.bind(this)
    }

    handleChange = (e) => {
        this.setState({[e.target.subject]: e.target.value})
        this.setState({[e.target.email]: e.target.value})
        this.setState({[e.target.message]: e.target.value})
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
                    onChange= {this.handleChange}
                /> 
                <br />
                 <input 
                    type="text"
                    value= {this.email}
                    name="email"
                    placeholder="Email"
                    onChange= {this.handleChange}
                /> 
                <br />
                 <input 
                    type="text"
                    value={this.message}
                    name="message"
                    placeholder="Message"
                    onChange= {this.handleChange}
                /> 

                <button> Submit </button>
            </form>        
            </div>
        )
    }
}

 export default Email;