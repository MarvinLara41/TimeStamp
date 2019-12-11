import React, { Component } from "react";

import "./index.css";

import {
  Inject,
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda
} from "@syncfusion/ej2-react-schedule";

// , EventSettingsModel

class Table1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      info: {
        EventSettingsModel: [
          {
            dataSource: [
              {
                EndTime: new Date(2019, 0, 11, 6, 30),
                StartTime: new Date(2019, 0, 11, 4, 4)
              }
            ]
          }
        ]
      }
    };
  }

  //   componentDidMount(){

  // }

  render() {
    return (
      <>
        <div className="table1">
          <ScheduleComponent
            currentView="Month"
            selectedDate={new Date(2019, 0, 11)}
            eventSettings={this.state.info.EventSettingsModel[0]}
          >
            <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
          </ScheduleComponent>
        </div>
      </>
    );
  }
}

export default Table1;
