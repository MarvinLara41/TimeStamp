import React, { Component } from "react";

import "./index.css";

class ClockIn extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="main_1">
        <select name="clock101" className="clockmain1">
          <option value="Breake">Breake</option>
          <option value="Lunch">Lunch</option>
          <option value="PunchIn" selected>
            PunchIn
          </option>
          <option value="PunchOut">PunchOut</option>
        </select>

        <hr />

        <button type="button" className="button_main btn btn-success">
          Go
        </button>

        <hr />

        <div className="clock_info">
          <table class="table">
            <thead class="thead-light">
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>

              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ClockIn;
