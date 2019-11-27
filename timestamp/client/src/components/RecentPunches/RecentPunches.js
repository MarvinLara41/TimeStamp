import React, { Component } from "react";
import "./RecentPunches.css";

class Recent extends Component {
  constructor(props) {
    super(props); //since we are extending class Table so we have to use super in order to override Component class constructor
    this.state = {
      //state is by default an object
      info: [
        { action: "break in", time: this.props.time },
        { action: "lunch in", time: this.props.time },
        { action: "clock in", time: this.props.time },
        { action: "lunch out", time: this.props.time },
        { action: "break out", time: this.props.time }
      ]
    };
  }

  renderTableData() {
    return this.state.info.map((info, index) => {
      const { action, time } = info; //destructuring
      return (
        <tr key={action}>
          <td>{action}</td>
          <td>{time}</td>
        </tr>
      );
    });
    window.location.reload();
  }

  render() {
    //Whenever our class runs, render method will be called automatically, it may have already defined in the constructor behind the scene.
    return (
      <div>
        <h1 id="title">Recent Punches:</h1>
        <table id="punch">
          <tbody>{this.renderTableData()}</tbody>
        </table>
      </div>
    );
  }
}

export default Recent;
