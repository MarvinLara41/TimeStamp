import React from "react"
const Recent = props => {
    return(
        <div className = "container">
        <h5 className = "card-header">Recent Punches:</h5>
        <div className = "card text-center">
          <ul className="list-group list-group-flush">
              <li className="list-group-item">punch in - 8:00Am</li>
              <li className="list-group-item">lunch out - 1:00pm</li>
              <li className="list-group-item">lunch in - 2:00pm</li>
              <li className="list-group-item">punch out - 5:00pm</li>
              <li className="list-group-item">cdcc</li>
          </ul>
        </div>
        </div>

    )
}

export default Recent