import React from "react";
import "./index.css";

function UserSide(props) {
  console.log(props);
  window.onload = function() {
    if (!window.location.hash) {
      window.location = window.location + "#loaded";
      window.location.reload();
    }
  };

  // do a if statement that will display picture if there is one

  if (!props.image) {
    // this.props.image =
    //   "https://visualpharm.com/assets/691/Add%20User%20Male-595b40b65ba036ed117d3b1f.svg";
  }

  return (
    <div className="sideone1">
      <img
        className="picture"
        // src="https://visualpharm.com/assets/691/Add%20User%20Male-595b40b65ba036ed117d3b1f.svg"
        src={props.image}
        width="300"
        height="300"
        alt="userPicture"
      />
      <div className="info_1">
        {props.firstName}
        <br />
        {props.email}
      </div>
    </div>
  );
}
export default UserSide;
