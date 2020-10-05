import React, { Component } from "react";

export default class PersonalInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      address: "",
      country: "",
      city: "",
      zip_code: "",
      general_error: "",
      first_name_error: null,
      last_name_error: null,
      email_error: null,
    };
  }

  handleChange = ({ target: { id, value } }) => {
    this.setState({
      [id]: value,
    });
  };

  handleNext = (
    general_error,
    first_name_error,
    last_name_error,
    email_error
  ) => {
    if (
      general_error == null &&
      email_error == null &&
      first_name_error == null &&
      last_name_error == null
    ) {
      console.log("state set.");
    }
  };

  handleError = (e) => {
    e.preventDefault();
    const {
      first_name,
      last_name,
      email,
      country,
      city,
      zip_code,
      general_error,
      first_name_error,
      last_name_error,
      email_error,
    } = this.state;

    !first_name || !last_name || !email || !country || !city || !zip_code
      ? this.setState({
          general_error: "All fields are must.",
        })
      : this.setState({ general_error: null });

    const letters = /^[A-Za-z]+$/;

    !first_name.match(letters)
      ? this.setState({
          first_name_error: "Please enter a valid first name.",
        })
      : this.setState({
          first_name_error: null,
        });

    !last_name.match(letters)
      ? this.setState({
          last_name_error: "Please enter a valid last name.",
        })
      : this.setState({
          last_name_error: null,
        });

    const emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    !email.match(emailFormat)
      ? this.setState({
          email_error: "Please enter a valid email.",
        })
      : this.setState({
          email_error: null,
        });

    this.handleNext(
      general_error,
      first_name_error,
      last_name_error,
      email_error
    );
  };

  render() {
    const {
      first_name,
      last_name,
      email,
      address,
      country,
      city,
      zip_code,
      general_error,
      first_name_error,
      last_name_error,
      email_error,
    } = this.state;

    return (
      <form className="container">
        <h1 className="h3 d-flex justify-content-center">
          Personal Information
        </h1>
        {general_error ? (
          <div className="alert alert-warning" role="alert">
            <strong className="d-flex justify-content-center">
              {general_error}
            </strong>
          </div>
        ) : (
          <></>
        )}

        <div className="form-row">
          <div className="col">
            <label htmlFor="First name">First Name:</label>
            <input
              type="text"
              id="first_name"
              className="form-control"
              placeholder="enter first name"
              onChange={this.handleChange}
              value={first_name}
            />
            {first_name_error ? (
              <div
                className="alert-danger mt-1 d-flex justify-content-center"
                role="alert"
              >
                {first_name_error}
              </div>
            ) : (
              <></>
            )}
          </div>
          <div className="col">
            <label htmlFor="Last Name">Last Name:</label>
            <input
              type="text"
              id="last_name"
              className="form-control"
              placeholder="enter last name"
              onChange={this.handleChange}
              value={last_name}
            />
            {last_name_error ? (
              <div
                className="alert-danger mt-1 d-flex justify-content-center"
                role="alert"
              >
                {last_name_error}
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="form-groupt mt-2">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="enter email"
            onChange={this.handleChange}
            value={email}
          />
          {email_error ? (
            <div
              className="alert-danger mt-1 d-flex justify-content-center"
              role="alert"
            >
              {email_error}
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className="form-group mt-2">
          <label htmlFor="Address">Address:</label>
          <textarea
            type="text"
            className="form-control"
            id="address"
            placeholder="enter address"
            onChange={this.handleChange}
            value={address}
          />
        </div>
        <div className="form-row mt-2">
          <div className="col-6">
            <label htmlFor="Country">Country:</label>
            <input
              type="text"
              className="form-control"
              id="country"
              placeholder="enter country"
              onChange={this.handleChange}
              value={country}
            />
          </div>
          <div className="col">
            <label htmlFor="City">City:</label>
            <input
              type="text"
              className="form-control"
              placeholder="enter city"
              id="city"
              onChange={this.handleChange}
              value={city}
            />
          </div>
          <div className="col">
            <label htmlFor="Zip">Zip-Code:</label>
            <input
              type="text"
              className="form-control"
              placeholder="enter zip code"
              id="zip_code"
              onChange={this.handleChange}
              value={zip_code}
            />
          </div>
        </div>
        <div className="d-flex justify-content-between mt-2">
          <button type="previous" className="btn btn-primary">
            Previous
          </button>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={this.handleError}
          >
            Next
          </button>
        </div>
      </form>
    );
  }
}
