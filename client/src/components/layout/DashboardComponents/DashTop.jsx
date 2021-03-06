import React, { Component } from "react";
import { NavLink } from "react-router-dom";
// explain to the user why they should sign up and have full access to all the benefits
export default class DashTop extends Component {
  render() {
    return (
      <div className="dashboard-top">
        <h2 className="dash-header">Having Fun?</h2>
        <p className="sign-up">
          <NavLink className="dashboard__link" to="/signup">
            Why not sign up?
          </NavLink>{" "}
          Here are some of the benefits:
        </p>
        <ul className="benefits-list">
          <li>- Profile Picture</li>
          <li>- Custom themes</li>
          <li>- Save your liked videos</li>
          <p className="bold">And more!</p>
        </ul>
      </div>
    );
  }
}
