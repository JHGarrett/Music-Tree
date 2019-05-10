import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import DashTop from "./DashboardComponents/DashTop.jsx";
import DashTopUser from "./DashboardComponents/DashTopUser.jsx";
import DashBottom from "./DashboardComponents/DashBottom.jsx";

// this is the dashboard for the user to display dashtop and bottom if logged in
class Dashboard extends Component {
  componentDidMount() {
    let session = JSON.parse(sessionStorage.getItem("session")); // get JSON session data
    this.props.auth.loggedIn ? this.props.handleShowDash() : null;
  }

  render() {
    console.log('from dashboard: ', this.props);
    const { loggedIn, creds } = this.props.auth;

    return (
      <div className={this.props.launch ? "hide-dash" : "dashboard"}>
        {loggedIn ? (
          <DashTopUser retrieveSavedVideos={this.props.retrieveSavedVideos} />
        ) : (
          <DashTop />
        )}
        <DashBottom />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps)(Dashboard);
