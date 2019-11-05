import React from "react";

import {Link} from "react-router-dom"


import ProfilePic from "./fake.jpeg";

import "./index.css"


function SideNav() {
    return (






<nav class="main-menu">
<div class= "picdiv">
<img src={ProfilePic} className="profile" alt="Smiley face">

</img>

<label>

    User name shoud be here

</label>

</div>
<ul>
<Link to ="/">
    <li>
        <a href="http://justinfarrow.com">
            <i class="fa fa-home fa-2x"></i>
            <span class="nav-text">
                Dashboard
            </span>
        </a>
      
    </li>
</Link>




    <li class="has-subnav">
        <a href="#">
            <i class="fa fa-laptop fa-2x"></i>
            <span class="nav-text">
                Stars Components
            </span>
        </a>
        
    </li>
    <li class="has-subnav">
        <a href="#">
           <i class="fa fa-list fa-2x"></i>
            <span class="nav-text">
                PayStubs
            </span>
        </a>
        
    </li>
    <li class="has-subnav">
        <a href="#">
           <i class="fa fa-folder-open fa-2x"></i>
            <span class="nav-text">
                Pages
            </span>
        </a>
       
    </li>
    <li>
        <a href="#">
            <i class="fa fa-bar-chart-o fa-2x"></i>
            <span class="nav-text">
                Graphs and Statistics
            </span>
        </a>
    </li>
    <li>
        <a href="#">
            <i class="fa fa-font fa-2x"></i>
            <span class="nav-text">
               Quotes
            </span>
        </a>
    </li>
    <li>
       <a href="#">
           <i class="fa fa-table fa-2x"></i>
            <span class="nav-text">
                Tables
            </span>
        </a>
    </li>
    <li>
       <a href="#">
            <i class="fa fa-map-marker fa-2x"></i>
            <span class="nav-text">
                Maps
            </span>
        </a>
    </li>
    <li>
        <a href="#">
           <i class="fa fa-info fa-2x"></i>
            <span class="nav-text">
                Documentation
            </span>
        </a>
    </li>
</ul>

<ul class="logout">
    <li>
       <a href="#">
             <i class="fa fa-power-off fa-2x"></i>
            <span class="nav-text">
                Logout
            </span>
        </a>
    </li>  
</ul>
</nav>






);
}

export default SideNav;
