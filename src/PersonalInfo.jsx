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
    };
  }

  handleChange = ({ target: { id, value } }) => {
    this.setState({
      [id]: value,
    });
  };

  render() {
    const { first_name, last_name, email, address, country, city, zip_code } = this.state;
    return (
      <form className="container">
        <h1 className="h3 d-flex justify-content-center">
          Personal Information
        </h1>
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
          <button type="submit" className="btn btn-primary">
            Next
          </button>
        </div>
      </form>
    );
  }
}
