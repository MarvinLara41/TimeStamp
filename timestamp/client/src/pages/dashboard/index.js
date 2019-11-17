import React, {Component } from 'react';

// import {Redirect} from 'react-router-dom';

import NavMain from "../../components/topNav/index"

import LogOutButton from "../../components/logoutbutton/index"

import Table1 from "../../components/table1/table"

import SideNav from "../../components/sideNav/index"


import "./index.css"


class DashBoard extends Component {
    
constructor(props){

    super()


    this.state ={
        user:undefined
    }



}


  componentDidMount(){

    


  }






  





    render() { 

        return ( 

<div className="main1">

<div>
    <NavMain />

</div>

<div className ="logout">
<LogOutButton />
</div>






               <div>
                   <SideNav />
               </div>


               <div className="table1main">
               <Table1 />
               </div>


</div>
         );
    }
}
 
export default DashBoard;