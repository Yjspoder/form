import React, { Component } from "react";
import "./App.css";
import EducationalQualification from "./EducationalQualification";
import Header from "./Header";
import PersonalInfo from "./PersonalInfo";
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
      <div className="align-content-around">
      <Header />
      <div className="container mt-4">
          {/* <Profile /> */}
          {/* <PersonalInfo /> */}
          <EducationalQualification />
      </div>
      </div>
    );
  }
}

export default App;
