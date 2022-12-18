import React, { Component } from "react";

class UserCard extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    const { id, firstName, lastName } = this.props;
    const {} = this.state;

    return (
      <div>
        <p>{firstName}</p>
      </div>
    );
  }
}

export default UserCard;
