import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import Profile from "./Profile";

class App extends Component {
  constructor() {
    super();
    this.state = {
      state_1: null,
      state_2: null,
      state_3: null,
    };
  }

  render() {
    return (
      <div>
      <Header />
      <div className="container">
        <Profile />
      </div>
      </div>
    );
  }
}

export default App;
