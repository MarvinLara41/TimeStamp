import React, {Component} from 'react';

import {Link} from "react-router-dom";

// import API from "../../utils/API";

import "./index.css"

class LogOutButton extends Component {

        
    render() { 

    //  localStorage.removeItem("token");

        return ( 
<form>     
     


<button type="submit" class="btn btn-link btn-logout signout"><Link to="/"> signout</Link> </button>
</form>

         );
    }
}
 
export default LogOutButton;
