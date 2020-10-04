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

  handleChange = ({ target: { id, value } }) => {
    this.setState({
      [id]: value
    })
  }
  render() {
    const { username, bio, photo, phone_number } = this.state;
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
            onChange={this.handleChange}
            value={username}
          />
        </div>
        <div className="form-group">
          <label htmlFor="bio">Bio:</label>
          <textarea
            type="text"
            className="form-control"
            id="bio"
            placeholder="enter Bio"
            onChange={this.handleChange}
            value={bio}
          />
        </div>
        <div className="form-group">
          <label htmlFor="photo">Photo:</label>
          <input
            type="file"
            className="form-control-file"
            id="photo"
            onChange={this.handleChange}
            value={photo}
          />
        </div>
        <div className="form-group">
          <label htmlFor="Phone Number">
            Phone Number:
          </label>
          <input
            className="form-control"
            type="tel"
            value={phone_number}
            id="phone_number"
            onChange={this.handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Next
        </button>
      </form>
    );
  }
}
