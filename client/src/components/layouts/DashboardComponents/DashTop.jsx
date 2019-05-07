// if the user is not logged in/signed up this will encourage them to do so. 
import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class DashTop extends Component {
  render() {
    return (
      <div className="dashboard-top">
        <h2 className="dash-header">Having Fun?</h2>
        <p className="sign-up">
          <NavLink className="dashboard__link" to="/signup">
            Sign up
          </NavLink>{" "}
          These are some of the benefits:
        </p>
        <ul className="benefits-list">
          <li>- Profile Picture</li>
          <li>- Custom themes</li>
          <li>- Save your liked videos</li>
          <p className="bold">And much more!</p>
        </ul>
      </div>
    );
  }
}
