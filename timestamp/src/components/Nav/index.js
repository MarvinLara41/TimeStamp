import React from "react";

import {Link} from "react-router-dom"

import { Button } from 'semantic-ui-react'

import "./index.css"




function Nav() {
  return (
    <nav className="navbar ">

      <ul className ="nav-links">

      <Button as={Link} to="/about">

        About
      </Button>

        <Button as={Link} to="/contact">
        Contact
        </Button>

        <Button as={Link} to="/" >
        main
        </Button>
      </ul>
    </nav>
  );
}

export default Nav;
