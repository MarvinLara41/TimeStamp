import React, { Component } from "react";

import { Router } from "react-router-dom";

import "./index.css";

class MeetingDisplay extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data } = this.props;
    const names = data.map(usermain => {
      return (
        <>
          <ul>
            <div className="list11">
              <div key={usermain._id}>
                {usermain.user1} AND {usermain.user2}
                <hr />
              </div>
              <p>{usermain.event}</p>
              <hr />
              <div>{usermain.event_date}</div>
              <hr />
            </div>
          </ul>
        </>
      );
    });

    return (
      <div className="sideone">
        <ul>{names}</ul>
      </div>
    );
  }
}

export default MeetingDisplay;
