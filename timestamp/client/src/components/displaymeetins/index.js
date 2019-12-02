import React, { Component } from "react";

import "./index.css";

class MeetingDisplay extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data } = this.props;

    const names = data.map(usermain => {
      return (
        <div class="card text-center" key={usermain._id}>
          <div class="card-header">Apponintment</div>
          <div class="card-body">
            <h5 class="card-title">
              <div class="btn btn-primary">
                {usermain.user1} AND {usermain.user2}
              </div>
            </h5>

            <p class="card-text">{usermain.event}</p>
          </div>
          <div class="card-footer text-muted">{usermain.event_date}</div>
        </div>

        // <li className="lists" key={usermain._id}>
        //   {`users: ${usermain.user1}  ${usermain.user2} event${usermain.event} event ${usermain.date}`}
        //   <hr />
        // </li>
      );
    });

    console.log("THIS DISPLAY ALL MEETINGS", this.props);

    return (
      <div className="sideone">
        <ul>{names}</ul>
      </div>
    );
  }
}

export default MeetingDisplay;
