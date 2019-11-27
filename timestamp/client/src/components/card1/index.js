import React, { Component } from "react";

import "./index.css";

class Card1 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div class="main-header">
          <div class="main-header__updates">Recent Items</div>
        </div>
      </>
    );
  }
}

export default Card1;
