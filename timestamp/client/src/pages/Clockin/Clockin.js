import React, {Component } from 'react';


import Card from "../../components/Card/Card"
import NavMain from "../../components/topNav/index"
import Recent from "../../components/RecentPunches/RecentPunches"
import Footer from "../../components/Footer/Footer"


import "./clockin.css"
import SideNav from '../../components/sideNav/index';

class Clockin extends Component {
    render() {
        return (
            <div className = "wall">
            <div className = "nav_top">
                <NavMain />
            </div>
            <div>
                <SideNav />
            </div>
            <div className = "center1">
                <Card />
                <Recent />
            </div>
            <div>                
                <Footer />
            </div>
            </div>
    
            
        )
    
}
}

export default Clockin