import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "./Clock.css";

export class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString()
    };
  }
  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  tick() {
    this.setState({
      time: new Date().toLocaleTimeString()
    });
  }

  timeLock = () => {
    return this.state.time;
  };

  render() {
    const templates = [
      { id: 1, value: "Clock in" },
      { id: 2, value: "Break out" },
      { id: 3, value: "Break in" },
      { id: 4, value: "Lunch Out" },
      { id: 5, value: "Lunch In" },
      { id: 6, value: "Clock Out" }
    ];
    return (
      <div className="container">
        <div className="card text-center">
          <div className="card-header"></div>
          <div className="card-body">
            <h2 className="card-title">Time</h2>
            <div className="App-clock">{this.state.time}</div>
            <select className="form-control">
              {templates.map(msgTemplate => {
                return (
                  <option key={msgTemplate.id} value={msgTemplate.value}>
                    {msgTemplate.value}
                  </option>
                );
              })}
            </select>
            <div>
              <Button variant="success"></Button>
            </div>
          </div>
          <div className="card-footer text-muted"></div>
        </div>
      </div>
    );
  }
}
export default Clock;
