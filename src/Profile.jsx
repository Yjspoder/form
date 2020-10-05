import React, { Component } from "react";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      bio: "",
      photo: "",
      phone_number: "",
      general_error: null,
      username_error: null,
      bio_error: null,
      photo_error: null,
      phone_number_error: null,
    };
  }

  handleChange = ({ target: { id, value } }) => {
    this.setState({
      [id]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const {
      username,
      bio,
      photo,
      phone_number,
      username_error,
      bio_error,
      photo_error,
      phone_number_error,
    } = this.state;

    !username || !bio || !photo || !phone_number
      ? this.setState({
          general_error: "All fields are must.",
        })
      : this.setState({
          general_error: null,
        });

    username.length < 6
      ? this.setState({
          username_error: "Username should be atleast 6 characters.",
        })
      : this.setState({
          username_error: null,
        });

    bio.length < 150
      ? this.setState({
          bio_error: "Bio should be atleast 150 characters.",
        })
      : this.setState({
          bio_error: null,
        });

    phone_number.length < 10 ||
    !phone_number[0] == "6" ||
    !phone_number[0] == "7" ||
    !phone_number[0] == "8" ||
    !phone_number[0] == "9"
      ? this.setState({
          phone_number_error: "Please enter valid phone number.",
        })
      : this.setState({
          phone_number_error: null,
        });

    if (!username_error && !bio_error && !photo_error && !phone_number_error) {
      console.log("state set.");
    }
  };

  render() {
    const {
      username,
      bio,
      photo,
      phone_number,
      general_error,
      username_error,
      bio_error,
      photo_error,
      phone_number_error,
    } = this.state;
    return (
      <form className="container-md" onSubmit={this.handleSubmit}>
        <h1 className="h2 d-flex justify-content-center">Profile</h1>
        {general_error ? (
          <div className="alert alert-warning" role="alert">
            <strong className="d-flex justify-content-center">
              {general_error}
            </strong>
          </div>
        ) : (
          <></>
        )}

        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            className={
              username_error ? "form-control is-invalid" : "form-control"
            }
            id="username"
            aria-describedby="usernameHelp"
            placeholder="enter username"
            onChange={this.handleChange}
            value={username}
          />
          {username_error ? (
            <div
              className="alert-danger mt-1 d-flex justify-content-center"
              role="alert"
            >
              {username_error}
            </div>
          ) : (
            <></>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="bio">Bio:</label>
          <textarea
            type="text"
            className={bio_error ? "form-control is-invalid" : "form-control"}
            id="bio"
            placeholder="enter Bio"
            onChange={this.handleChange}
            value={bio}
          />
          {bio_error ? (
            <div
              className="alert-danger mt-1 d-flex justify-content-center"
              role="alert"
            >
              {bio_error}
            </div>
          ) : (
            <></>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="photo">Photo:</label>
          <input
            type="file"
            className={
              photo_error ? "form-control-file is-invalid" : "form-control-file"
            }
            id="photo"
            onChange={this.handleChange}
            value={photo}
          />
          {photo_error ? (
            <div
              className="alert-danger mt-1 d-flex justify-content-center"
              role="alert"
            >
              {photo_error}
            </div>
          ) : (
            <></>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="Phone Number">Phone Number:</label>
          <input
            className={
              phone_number_error ? "form-control is-invalid" : "form-control"
            }
            type="tel"
            value={phone_number}
            id="phone_number"
            onChange={this.handleChange}
          />
          {phone_number_error ? (
            <div
              className="alert-danger mt-1 d-flex justify-content-center"
              role="alert"
            >
              {phone_number_error}
            </div>
          ) : (
            <></>
          )}
        </div>

        <button type="submit" className="btn btn-primary">
          Next
        </button>
      </form>
    );
  }
}
