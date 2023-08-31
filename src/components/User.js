import React, { useEffect } from "react";

const User = (props) => {
  return(
    <div className="user-card">
      <h1>{props.name}</h1>
      <h3>Location: Jaipur</h3>
      <h4>Gmail: jainisha127@gamil.com</h4>
    </div>
    );
};

export default User;