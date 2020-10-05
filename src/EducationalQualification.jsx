import React, { Component } from "react";

export default class EducationalQualification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      school: "",
      college: "",
      post_graduation: "",
      general_error: null
    };
  }

  handleChange = ({ target: { id, value } }) => {
    this.setState({
      [id]: value,
    });
  };

  handleError = (e) => {
    e.preventDefault();
    const { school, college, post_graduation } = this.state;
    !school || !college || !post_graduation
      ? this.setState({
          general_error: "All fields are must.",
        })
      : console.log("state set.")
  };

  render() {
    const { school, college, post_graduation, general_error } = this.state;
    return (
      <form onSubmit={this.handleError}>
        <h1 className="h2 d-flex justify-content-center">
          Educational Qualification
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
        
        <div className="form-group">
          <label htmlFor="school">School:</label>
          <input
            type="text"
            className="form-control"
            id="school"
            aria-describedby="schoolHelp"
            placeholder="enter school education"
            onChange={this.handleChange}
            value={school}
          />
        </div>
        <div className="form-group">
          <label htmlFor="college">College:</label>
          <input
            type="text"
            className="form-control"
            id="college"
            aria-describedby="collegeHelp"
            placeholder="enter college education"
            onChange={this.handleChange}
            value={college}
          />
        </div>
        <div className="form-group">
          <label htmlFor="post graduation">Post Graduation:</label>
          <input
            type="text"
            className="form-control"
            id="post_graduation"
            aria-describedby="postGraduationHelp"
            placeholder="enter post graduation"
            onChange={this.handleChange}
            value={post_graduation}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Next
        </button>
      </form>
    );
  }
}
