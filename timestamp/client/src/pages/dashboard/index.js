import React, {Component, ReactDOM } from 'react';

// import {Redirect} from 'react-router-dom';

import NavMain from "../../components/topNav/index";

import LogOutButton from "../../components/logoutbutton/index";

import Table1 from "../../components/table1/table";

// import SideNav from "../../components/sideNav/index";

import Card1 from "../../components/card1/index";

import Meetings from "../../components/meetings";

import API from "../../utils/API";

import { Card,  CardBody, CardImg,  CardSubtitle } from 'reactstrap';

// import Instagram from './FakeImages/instagram.png';

import "./index.css"
import { set } from 'date-fns';







class DashBoard extends Component {
    
constructor(props){

    super()


    this.state ={
        appointment:false,
        calender:false,
        userInfo:{}


    }

    this.clockIn = this.clockIn.bind(this) 
    this.appointment = this.appointment.bind(this) 
    this.calender = this.calender.bind(this) 
    this.payStubs = this.payStubs.bind(this) 
    this.insurance = this.insurance.bind(this) 

}



  componentDidMount(){
    // API.userInfo()
    API.userInfo((callback) => {
      console.log("hello",callback.data)
    })
  }



  clockIn () {

    this.setState({
      clockIn: true
    });

    console.log("clockIn")
}


appointment () {
  if(this.state.appointment === false){
    this.setState({
      appointment: true,
      calender: false
    });
  }

}

 

 calender () {

  if(this.state.calender === false){
  this.setState({
    calender: true,
    appointment: false

  });
  }
  console.log("calender")

};





   payStubs () {

    this.setState({
      showComponent: true,
    });
    console.log("payStubs")
}




 insurance () {
  this.setState({
    showComponent: true,
  });

  console.log("insurance")
}
























    render() { 





  
  



        return ( 

<div className="main1">

{/* <div className="justify-content-center"> */}

<div>
    <NavMain />

</div>

<div className ="logout">
<LogOutButton />
</div>


<div>
<div className="sidemain">


<div className="user_info1">
  kdsjknklfs
  </div>   


    <div className="cardmain">
 
    </div>
    <aside className="sidenav">
    <div className="sidenav__close-icon">
      <i className="fas fa-times sidenav__brand-close"></i>
    </div>
    <ul className="sidenav__list">
    <li  clockIn className="sidenav__list-item">clock-In</li>
      <li onClick={this.appointment} className="sidenav__list-item">Appointments</li>
      <li onClick={this.calender} className="sidenav__list-item">Calender</li>
      <li  payStubs  className="sidenav__list-item">PayStubs</li>
      <li  insurance className="sidenav__list-item">insurances</li>
    </ul>
  </aside>
</div>
</div>




{/* <div className="cen"> */}









               <div className="meeting">
  
               
  
               {this.state.appointment ? <Meetings /> : null}
               {this.state.calender ? <Table1 /> : null}


               
        

</div>              

{/* </div> */}


{/* </div> */}


</div>
         );
    }
}
 
export default DashBoard;