import React, { Component } from "react";

import "./index.css";

class ClockTable extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data1 } = this.props;
    const names = data1.map(usermain => {
      return (
        <div className="sideone">
          <ul id="list">
            <li className="in" key={usermain._id}>
              {usermain.punchOut}
              {usermain.date}
            </li>
          </ul>
        </div>
      );
    });

    return <h1>{names}</h1>;
  }
}
export default ClockTable;
