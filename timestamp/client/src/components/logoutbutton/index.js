import React, {Component } from 'react';

import {Link} from "react-router-dom"
// import API from "../../utils/API";

import "./index.css"



class LogOutButton extends Component {
    constructor(props) {
        super(props);
         localStorage.removeItem("token")
    }
    render() { 
        return ( 

            <button  type="button" value="Button" className="signout">
               <Link to="/"> signout</Link> 
                
                </button>

         );
    }
}
 
export default LogOutButton;
