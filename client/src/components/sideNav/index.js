import React, { Component } from "react";
import API from "../../utils/API";
import { Card, CardBody, CardImg, CardSubtitle } from "reactstrap";
// import Instagram from "./FakeImages/instagram.png";
import "./index.css";
class SideNav extends Component {
  constructor() {
    super();
    this.state = {
      token: localStorage.getItem("token")
    };
  }

  componentDidMount() {
    //  const token = this.state.token
    // console.log("ndsbjkds", token)
    //  console.log(API.meeting())
  }

  render() {
    return (
      <div>
        <div className="sidemain">
          <div className="cardmain">
            <Card>
              {/* <CardImg src={Instagram} alt="Logo" className="picture" /> */}
              <CardBody>
                <CardSubtitle>
                  <ul />
                  User name can go here
                </CardSubtitle>
              </CardBody>
            </Card>
          </div>
          <aside className="sidenav">
            <div className="sidenav__close-icon">
              <i className="fas fa-times sidenav__brand-close"></i>
            </div>
            <ul className="sidenav__list">
              <li className="sidenav__list-item">clock-In</li>
              <li className="sidenav__list-item">Appointments</li>
              <li className="sidenav__list-item">Calender</li>
              <li className="sidenav__list-item">PayStubs</li>
              <li className="sidenav__list-item">insurances</li>
            </ul>
          </aside>
        </div>
      </div>
    );
  }
}

export default SideNav;
