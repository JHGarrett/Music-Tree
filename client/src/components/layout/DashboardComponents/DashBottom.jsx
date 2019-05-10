// this is the bottom section of the info dashboard. need to list my info and add social media buttons for future use.
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
// media links on the bottom of the dash
export default class DashBottom extends Component {
  render() {
    return (
      <div className="dashboard-bottom">
        <div className="dashboard-social-media">
          <a className="social-media" href="#">
            <i className="fab fa-facebook-f" />
          </a>
          <a className="social-media" href="#">
            <i className="fab fa-instagram" />
          </a>
          <a className="social-media" href="#">
            <i className="fab fa-twitter" />
          </a>
          <a className="social-media" href="#">
            <i className="fab fa-github" />
          </a>
        </div>

        <div className="dashboard-footer">
          <p>
            Copyright &copy; 2019<span> </span>
            <a
              className="dashboard__link"
              href="https://github.com/JHGarrett/Music-Tree"
            >
              John Garrett
            </a>
          </p>
        </div>
      </div>
    );
  }
}
