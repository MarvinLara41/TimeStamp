import React from "react";

import {Link} from "react-router-dom"

import "./index.css"

const newStyle = {
  color:"black"
}




function Nav() {
  return (
    <nav className="navbar ">

      <ul className ="nav-links">

        <Link style={newStyle} to= "/about" >
        <li>About</li>
        </Link>

        <Link style={newStyle}  to ="/contact">
        <li >Contact</li>
        </Link>

        <Link style={newStyle}  to ="/" >
        <li>main</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
