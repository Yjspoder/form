import React, { Component } from "react";

export default class PersonalInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      country: "",
      zip_code: "",
    };
  }

  render() {
    return (
      <form className="container">
        <div className="form-row">
          <div className="col">
            <label htmlFor="First name">First Name:</label>
            <input
              type="text"
              className="form-control"
              placeholder="enter first name"
            />
          </div>
          <div className="col">
            <label htmlFor="Last Name">Last Name:</label>
            <input
              type="text"
              className="form-control"
              placeholder="enter last name"
            />
          </div>
        </div>
        <div className="form-groupt mt-2">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            className="form-control"
            id="username"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div className="form-row mt-2">
          <div className="col-6">
            <label htmlFor="Country">Country:</label>
            <select class="selectpicker countrypicker"></select>
          </div>
          <div className="col">
            <label htmlFor="City">City:</label>
            <input
              type="text"
              className="form-control"
              placeholder="enter city"
            />
          </div>
          <div className="col">
            <label htmlFor="Zip">Zip-Code:</label>
            <input
              type="text"
              className="form-control"
              placeholder="enter zip code"
            />
          </div>
        </div>
        <div className="d-flex justify-content-between mt-4">
          <button type="submit" className="btn btn-primary">
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
