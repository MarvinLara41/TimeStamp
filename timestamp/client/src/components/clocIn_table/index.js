import React, { Component } from "react";

import "./index.css";

class ClockTable extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data } = this.props;

    console.log(data);

    return <></>;
  }
}
export default ClockTable;

// <div className="sideone">
// <div id="item-list">
//   <ul>
//     <li>
//       <a className="expand">
//         <div className="icon london"></div>
//         <h2>punchIn</h2>
//         <span>Lorem ipsum dolor sit amet</span>
//       </a>
//     </li>
//     <li>
//       <a className="expand">
//         <div className="icon london"></div>
//         <h2>punchout</h2>
//         <span>Lorem ipsum dolor sit amet</span>
//       </a>
//     </li>
//   </ul>
// </div>
// </div>
