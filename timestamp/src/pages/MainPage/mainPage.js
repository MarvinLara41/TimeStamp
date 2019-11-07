import React from "react";
import SideNav from "../../components/Nav/index";

import TopNav from "../../components/TopNav/index";

// import PlaceHolder1 from "../../components/PlaceHolder/index";

import './index.css';

function MainPage() {
  return (
<div className="mainPage">

<div className ="topnav">
<TopNav />
</div>

<div className ="sidenav">
    <SideNav />
</div>


{/* <div className="placeholder">
<PlaceHolder1 />

</div> */}

</div>

  );
}

export default MainPage;
