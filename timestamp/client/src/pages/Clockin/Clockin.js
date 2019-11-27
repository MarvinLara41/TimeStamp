import React, { Component } from "react";

import Clock from "../../components/Clock/Clock";
import NavMain from "../../components/topNav/index";
import Recent from "../../components/RecentPunches/RecentPunches";

import "./clockin.css";

class Clockin extends Component {
  state = {
    time: new Date().toLocaleTimeString()
  };
  timeLock = () => {
    return this.state.time;
  };
  render() {
    return (
      <div className="wall">
        <div className="nav_top">
          <NavMain />
        </div>
        <div className="center1">
          <Clock />
          <Recent time={this.state.time} />
        </div>
      </div>
    );
  }
}

export default Clockin;
