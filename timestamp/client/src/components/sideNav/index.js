import React, {Component } from 'react';

// import API from "../../utils/API";


import { Card,  CardBody, CardImg,  CardSubtitle } from 'reactstrap';


import Instagram from './FakeImages/instagram.png';

import "./index.css"

class SideNav extends Component {
    constructor() {
        super();
        this.state = { 
              // customers: []
         }
    }



    // componentDidMount () {
    //     // API.getName()
    //     fetch("/login")
    //     .then(res => res.json())
    //     .then(customers => this.setState(({customers}), () => console.log("customers fetched...", customers)));
         

    
    // localStorage.getItem(key);
    // }
 


    render() { 
        return ( 
            
<div>


<div className="sidemain">




    <div className="cardmain">
      <Card >
        <CardImg src={Instagram} alt="Logo" className="picture" alt="Card image cap" />
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
      <li className="sidenav__list-item">Item One</li>
      <li className="sidenav__list-item">Item Two</li>
      <li className="sidenav__list-item">Item Two</li>
    </ul>
  </aside>








</div>

</div>
                

         );
    }
}
 
export default SideNav ;