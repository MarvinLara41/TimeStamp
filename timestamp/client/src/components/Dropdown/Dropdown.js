import React, { Component } from 'react';
import "./Dropdown.css"



class Punch extends Component {

  constructor(){
    super()
    this.state = {

    }
  }



render() {
  const templates = [{ 'id': 1, 'value': 'Clock in' }, { 'id': 2, 'value': 'Break out' } , {"id" : 3 , 'value' : "Break in"}, {"id" : 4 , 'value' : "Lunch Out"}, {"id" : 5 , 'value' : "Lunch In"} , {"id" : 6 , 'value' : "Clock Out"}]
  return(
  <div className = "container">
    <select className="form-control">
      {
        templates.map(msgTemplate => {
          return (
            <option key={msgTemplate.id} value={msgTemplate.value}>
              {msgTemplate.value}
                        </option>
          )
        })
      }
    </select>
  </div>
  )
};


  }

export default Punch