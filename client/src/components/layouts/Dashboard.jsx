import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connenct } from 'react-redux';

import DashTop from './DashbordCompnents/Dashtop.jsx';
import DashTopUser from './DashboardComponents/DashTopUser.jsx';
import DashBottom from './DashboardComponents/DashBottom.jsx';

class DashBoard extends Component {
  componentDidMount() {
    // get json data
    let session =JSON.parse(sessionStorage.getItem('session'));
    this.props.auth.loggedIn ? this.props.handleShowDash() : null;
  }

  render() {

    console.log('from dashboard: ', this.props);
    const { loggedIn, creds } = this.props.auth;

    return (
      <div className={this.UNSAFE_componentWillMount.props.launch ? "hide-dash" : "dashboard"}>
        {loggedIn ?
          <DashTopUser
            retrieveSavedVideos={this.props.retrieveSavedVideos}
            /> :
            <dashTop />}
          <DashBottom />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  };
};

export default connenct(mapStateToProps)(DashBoard);