import React, { Component } from 'react';

// import axios from "axios";

// import { Table } from 'react-bootstrap';

import "./index.css"



import { Inject,ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, EventSettingsModel } from "@syncfusion/ej2-react-schedule";





class Table1 extends Component {



    constructor(props) {

        super(props);

      this.state = {

        info:{

          EventSettingsModel:[{
            dataSource:[{


              EndTime: new Date(2019, 0, 11, 6, 30),
              StartTime: new Date(2019, 0, 11, 4, 4)

            }]



          }]
         
        }
 

        
      
    }


    }



 
  







  //   componentDidMount(){
  //     // Optionally the request above could also be done as
  //  axios.get('/user', {
  //    params: {
  //      ID: 12345
  //    }
  //  })
  //  .then(function (response) {
  //    console.log(response);
   
  //  //   this.setState({
  //  //     info:response
  //  //  })
   
  //  })
  // }




















   render() { 
        return ( 
 <>







<div className="table">


<h1 className ="head">Work</h1>



<ScheduleComponent currentView="Month" selectedDate={new Date(2019, 0, 11)}
eventSettings = {this.state.info.EventSettingsModel[0]} >
  <Inject services ={[Day, Week, WorkWeek, Month, Agenda]} />
</ScheduleComponent>



















{/* <Table  responsive>


  <table class="table">
  <thead class="thead-dark">
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
  </tbody>
</table>

</Table> */}

    









            </div>

            </>


         );
    }
}
 
export default Table1;