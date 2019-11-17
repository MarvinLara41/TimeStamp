import React, {Component } from 'react';

import FormMain from "../../components/login"

import NavMain from "../../components/topNav/index"

import "./index.css"

class Login extends Component {
    state = {  }
    render() { 
        return ( 

<>
             <div className="nav_top">

                <NavMain/>

             </div>


            <div className="center1">

            <FormMain />

            </div>
</>
         );
    }
}
 
export default Login ;