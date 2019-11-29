import React from "react";
import "./index.css";

function UserSide(props) {
  window.onload = function() {
    if (!window.location.hash) {
      window.location = window.location + "#loaded";
      window.location.reload();
    }
  };

  return (
    <div className="sideone">
      <img
        src="https://visualpharm.com/assets/691/Add%20User%20Male-595b40b65ba036ed117d3b1f.svg"
        width="300"
        height="300"
        alt="userPicture"
      />
      <div className="info_1">
        {props.firstName}
        <hr />
        {props.email}
      </div>
    </div>
  );
}
export default UserSide;
