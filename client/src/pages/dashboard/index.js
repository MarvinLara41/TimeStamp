import React, { Component } from "react";
import LogOutButton from "../../components/logoutbutton/index";
import Table1 from "../../components/table1/table";
import UserSide from "../../components/userInfoSidenav/index";
import ClockIn from "../../components/clockIn/index";
import Meetings from "../../components/meetings";
import ClockDisplay from "../../components/time";
import Insurance from "../../components/Insurance/Insurance";
import PayStub from "../../components/payStub/PayStub";
import API from "../../utils/API";
import "./index.css";

class DashBoard extends Component {
  constructor(props) {
    super();
    this.state = {
      clock: true,
      appointment: false,
      calender: false,
      insurance: false,
      payStubs: false,
      firstName: "",
      lastName: "",
      image: "",
      email: ""
    };
    this.clockIn = this.clockIn.bind(this);
    this.appointment = this.appointment.bind(this);
    this.calender = this.calender.bind(this);
    this.payStubs = this.payStubs.bind(this);
    this.insurance = this.insurance.bind(this);
  }

  componentDidMount() {
    API.userInfo(callback => {
      localStorage.setItem("userId", callback.data.data1[0].userId);
    });
    let token = localStorage.getItem("userId");
    if (token) {
      API.userInfoMain(callback => {
        this.setState({
          firstName: callback.data[0].firstName,
          lastName: callback.data[0].lastName,
          email: callback.data[0].email,
          image: callback.data[0].image
        });
        console.log("checling state", callback);
      });
    }
  }

  clockIn() {
    if (this.state.clock === true || this.state.clock === false) {
      this.setState({
        clock: true,
        appointment: false,
        calender: false,
        insurance: false,
        payStubs: false
      });
    }
    console.log("appointment");
  }

  appointment() {
    if (this.state.appointment === false) {
      this.setState({
        clock: false,
        appointment: true,
        calender: false,
        insurance: false,
        payStubs: false
      });
    }
    console.log("appointment");
  }

  calender() {
    if (this.state.calender === false) {
      this.setState({
        calender: true,
        clock: false,
        appointment: false,
        insurance: false,
        payStubs: false
      });
    }
    console.log("calender");
  }

  payStubs() {
    this.setState({
      insurance: false,
      calender: false,
      clock: false,
      appointment: false,
      payStubs: true
    });
  }

  insurance() {
    this.setState({
      insurance: true,
      calender: false,
      clock: false,
      appointment: false,
      payStubs: false
    });

    console.log("insurance");
  }

  render() {
    return (
      <div className="main1">
        <div className="logout">
          <LogOutButton />
        </div>

        <div>
          <div className="sidemain">
            <div className="user_info1">
              <div className="name_info">
                <UserSide
                  firstName={this.state.firstName}
                  email={this.state.email}
                  image={this.state.image}
                />
              </div>

              <div>
                <div className="clockdisplay">
                  <ClockDisplay />
                </div>
              </div>
            </div>

            <div className="cardmain"></div>
            <aside className="sidenav">
              <div className="sidenav__close-icon">
                <i className="fas fa-times sidenav__brand-close"></i>
              </div>
              <ul className="sidenav__list">
                <li onClick={this.clockIn} className="sidenav__list-item">
                  clock-In
                </li>
                <li onClick={this.appointment} className="sidenav__list-item">
                  Appointments
                </li>
                <li onClick={this.calender} className="sidenav__list-item">
                  Calender
                </li>
                <li onClick={this.payStubs} className="sidenav__list-item">
                  PayStubs
                </li>
                <li onClick={this.insurance} className="sidenav__list-item">
                  insurances
                </li>
              </ul>
            </aside>
          </div>
        </div>

        {/* render the page if the state is set to true */}

        <div className="meeting">
          {this.state.clock ? <ClockIn /> : null}
          {this.state.appointment ? <Meetings /> : null}
          {this.state.calender ? <Table1 /> : null}
          {this.state.insurance ? <Insurance /> : null}
          {this.state.payStubs ? <PayStub /> : null}
        </div>
      </div>
    );
  }
}

export default DashBoard;
