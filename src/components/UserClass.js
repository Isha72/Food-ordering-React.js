import React, {useState} from "react";

  
class UserClass extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      userInfo: {
        name: "dummy name",
        loaction: "default loc",
        avatar_url: "dummy photo"
      }
    }
  } 


  async componentDidMount() {

    const data = await fetch("  https://api.github.com/users/Isha72");
    const json = await data.json();

    this.setState({
      userInfo: json,
    })
  }


  render(){
    const { name, location, avatar_url } = this.state.userInfo;
 
    return (
      <div>
      <h1>Name: {name}</h1>
      <h3>Location: {location}</h3>  
      <h4>Gmail: jainisha127@gamil.com</h4>
      <img src={avatar_url}></img>
    </div>
    );
  };
}

export default UserClass; 