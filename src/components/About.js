import React from "react";
import UserClass from "./UserClass";
import User from "./User";
import UserContext from "../utils/UserContext";


// const About = () => {
//   return(
//     <div>
//       <h1>About</h1>
//       <h1>This is Isha Jain's Food Ordering App</h1>
//       <UserClass name={"Isha Jain (class)"} location={"Jaipur, Rajasthan"}/>
//     </div>
//   );
// };

class About extends React.Component{
  constructor(props){
    super(props);
  }

  render() { 
    return (
    <div>
      <h1>About</h1>
      <div>
        Logged in User
        <UserContext.Consumer>
        { ({loggedInUser}) => <h1 className="text-xl font-bold">{loggedInUser}</h1> }
        </UserContext.Consumer>
      </div>
      <h1>This is Isha Jain's Food Ordering App</h1>
      <UserClass name={"Isha Jain"} location={"Jaipur, Rajasthan"}/>
    </div>
  );
  }
}


export default About;