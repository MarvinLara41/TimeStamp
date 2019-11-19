import React from "react"
import Clock from "./Clock"


function Card(){
    return(
        <div className ="container">
        <div className="card text-center">
        <div className="card-header">
          
        </div>
        <div className="card-body">
          <h2 className="card-title">Time</h2>
         <h2><Clock /></h2>
          <a href="#" class="btn btn-success">Clock in</a>
        </div>
        <div className="card-footer text-muted">
         
        </div>
      </div>
      </div>
     
    )
}

export default Card