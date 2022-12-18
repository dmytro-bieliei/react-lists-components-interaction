import React, { Component } from "react";

class UserCard extends Component {
  
  render() {
    const { id, name, lastName } = this.props;
    

    return (
      <div>
        <p>id: {id}</p>
        <p>{name}</p>
        <p>{lastName}</p>
      </div>
    );
  }
}

export default UserCard;
