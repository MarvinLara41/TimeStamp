import React, {Component} from "react";
import axios from 'axios';

class PayStub extends Component {
    constructor (props){
        super(props)

        this.state= {
                userId: "",
                fullName: "",
                title:"",
                hoursWorked: [],
                payRate: [],
                payOut: [],
                date: "",
            
        }

        this.handleSubmit =this.handleSubmit.bind(this)
        this.handleChangeFullName=this.handleChangeFullName.bind(this)
        this.handleChangeHoursWorked=this.handleChangeHoursWorked.bind(this)
        this.handleChangePayOut=this.handleChangePayOut.bind(this)
        this.handleChangePayRate=this.handleChangePayOut.bind(this)
        this.handleChangeDate=this.handleChangeDate.bind(this)
        this.handleChangeTitle=this.handleChangeTitle.bind(this)
    }

     handleChangeFullName = (e) => {
        this.setState({FullName: e.target.value})
    }

     handleChangeTitle = (e) => {
        this.setState({Title: e.target.value})
    }

     handleChangeHoursWorked = (e) => {
        this.setState({hoursWorked: e.target.value}) 
    }

     handleChangePayRate = (e) => {
        this.setState({payRate: e.target.value}) 
    }

     handleChangePayOut = (e) => {
        this.setState({payOut: e.target.value}) 
    }

     handleChangeDate = (e) => {
        this.setState({date: e.target.value})
    }

    handleChangeUserId = (e) => {
        this.setState({userId: e.target.value})
    }


    async handleSubmit(e){
            e.preventDefault()

            const { fullName, title, hoursWorked, payRate, payOut, date} =this.state
            const form = await axios.post('/api/payStub/payStub', {
                fullName, 
                title, 
                hoursWorked, 
                payRate, 
                payOut, 
                date
            })

                console.log(this.state);
                
    }

    render(){
       
        return(
            
                <div className="displyPay">
                        <h2> Enter your Employee ID to view your most recent Pay Statement </h2>
                        <input 
                         type="text"
                         value={this.userId}
                         name="userId"
                         placeholder="Employee ID"
                         onChange= {this.handleChangeUserId}
                        />
                        <button onSubmit={this.handleSubmit}>Submit</button>
                    <br />
                    <ul>
                            <il value={this.fullName}>Full Name:{this.fullName}</il><br />
                            <il value={this.title}>Title: {this.title}</il><br />
                            <il value={this.hoursWorked}> Hours Worked: {this.hoursWorked}</il><br />
                            <il value={this.payRate}>Pay-Rate: {this.payRate}</il><br />
                            <il value={this.payOut}>Pay-Out: {this.payOut}</il><br />
                            <il value={this.date}>Date: {this.date}</il>
                    </ul>
                </div>
        )
    }
}

 export default PayStub;