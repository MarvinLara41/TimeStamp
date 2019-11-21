import React from "react"
import Clock from "../Clock/Clock"
import Punch from "../Dropdown/Dropdown"
import { Button } from "react-bootstrap"


function Card(){
    return(
      
        <div className ="container">
        <div className="card text-center">
        <div className="card-header">
          
        </div>
        <div className="card-body">
          <h2 className="card-title">Time</h2>
         <h2><Clock /></h2>
          <div><Punch /></div>
        </div>
        <Button variant="success">Punch</Button>
        <div className="card-footer text-muted">
         
        </div>
      </div>
      </div>
   
     
    )
}

export default Card