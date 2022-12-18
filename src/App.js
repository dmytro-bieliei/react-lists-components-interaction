import logo from "./logo.svg";
import "./App.css";
import React from "react";
import UsersList from "./usersList";

class App extends React.Component {
  render() {
    return (
      <>
        <UsersList />
      </>
    );
  }
}

export default App;
