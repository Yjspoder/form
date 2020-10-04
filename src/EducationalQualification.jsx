import React, { Component } from "react";

export default class EducationalQualification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      school: "",
      college: "",
      post_graduation: "",
    };
  }

  render() {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="school">School:</label>
          <input
            type="text"
            className="form-control"
            id="school"
            aria-describedby="schoolHelp"
            placeholder="enter school education"
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
          />
        </div>
      </form>
    );
  }
}
