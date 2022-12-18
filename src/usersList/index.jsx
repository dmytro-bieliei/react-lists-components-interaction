import React, { Component } from "react";
import UserCard from "./userCard";

class UsersList extends Component {
  state = {
    users: [
      { id: 1, firstName: "Anton", lastName: "Testenko" },
      { id: 2, firstName: "Evgen", lastName: "Divko" },
      { id: 3, firstName: "Semen", lastName: "Trotsenko" },
      { id: 4, firstName: "Denys", lastName: "Hart" },
      { id: 5, firstName: "Anton", lastName: "Madden" },
    ],
  };
  render() {
    const { users } = this.state;

    const usersCard = users.map((user) => (
      <li>
        <UserCard id={user.id} name={user.firstName} lastName={user.lastName} />
      </li>
    ));
    return <ul>{usersCard}</ul>;
  }
}

export default UsersList;
