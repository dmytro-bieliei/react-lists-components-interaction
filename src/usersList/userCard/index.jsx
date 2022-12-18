import React, { Component } from "react";

class UserCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      test: 123
    };
  }
  render() {
    const { id, name, lastName } = this.props;
    const { test } = this.state;

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
