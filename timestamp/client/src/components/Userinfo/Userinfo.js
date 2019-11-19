import React from "react"
const UserInfo = props => {
    return(
        <div className = "container">
            <div className="card">
            <h3 className="card-header">Your Info</h3>
                <div className="card-body">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Name:</li>
                    <li className="list-group-item">DOB:</li>
                    <li className="list-group-item">Occupation:</li>
                    <li className="list-group-item"></li>
                </ul>
                </div>
            </div>

        </div>
    )
}

export default UserInfo