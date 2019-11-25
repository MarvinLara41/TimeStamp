import React, { Component } from 'react'

import { Button, InputGroup, FormControl } from 'react-bootstrap';



import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";

import "./index.css"

import API from "../../utils/API"


class Meetings extends Component {
    constructor(props) {
        super(props);

        this.state = {
            event_date: new Date(),
            user1: "",
            user2:"",
            event:"",
            message:{}


          }
          this.user1 = this.user1.bind(this)
          this.user2 = this.user2.bind(this)
          this.event = this.event.bind(this)
          this.submitForm = this.submitForm.bind(this)
    
    };





    handleChange = date => {
        this.setState({
          event_date: date
        });


        console.log(this.state.event_date)
      };






      user1(e){
        this.setState({
          user1: e.target.value
        })
      }


      
      user2(e){
        this.setState({
          user2: e.target.value
        })
      }




      event(e){
        this.setState({
          event: e.target.value
        })
      }
      

      


      submitForm(e){
        e.preventDefault()

API.meeting(this.state, (callback) => {
  console.log(callback.data)

  this.setState({message:callback.data})
  this.setState({
    user1: "",
    user2:"",
    event:""
  })

})

      }
      







    
    render() { 

        return (

<div>



<div className="meetings">
<br />
<div>
        <div>{this.state.message.message}</div>

<form onSubmit= {this.submitForm} >

<br />
<input className="field" type="text" placeholder="user1" value ={this.state.user1} onChange ={this.user1} />


<input className="field" type="text" placeholder="user2" value ={this.state.user2} onChange ={this.user2} />
 
  

<input className="field" placeholder="event" type="text" value ={this.state.event} onChange ={this.event} />
 
  




<div>
  <DatePicker
            selected={this.state.event_date}
            onChange={this.handleChange}
          />
</div>


  <br />

  <button type ="submit"className="btn btn-success" id="sudmit1">submit</button>


    </form>
</div>

</div>





<div className="side">

fdnls

</div>






</div>
        )

  
    
 
    }
}
 
export default Meetings;