import React, { Component } from "react";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      bio: "",
      photo: "",
      phone_number: "",
    };
  }

  render() {
    return (
      <form className="container-md">
        <h1 className="h2 d-flex justify-content-center">Profile</h1>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            className="form-control"
            id="username"
            aria-describedby="usernameHelp"
            placeholder="enter username"
          />
        </div>
        <div className="form-group">
          <label htmlFor="bio">Bio:</label>
          <textarea
            type="text"
            className="form-control"
            id="bio"
            placeholder="enter Bio"
          />
        </div>
        <div className="form-group">
          <label htmlFor="photo">Photo:</label>
          <input
            type="file"
            className="form-control-file"
            id="exampleFormControlFile1"
          />
        </div>
        <div className="form-group">
          <label htmlFor="Phone Number">
            Phone Number:
          </label>
          <input
            className="form-control"
            type="tel"
            // value=""
            id="example-tel-input"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Next
        </button>
      </form>
    );
  }
}
