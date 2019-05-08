import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";

import { editUser, fetchUser } from "../../../actions/authenticate";

import EditProfile from "./EditProfile.jsx";
import SavedVideos from "./SavedVideos.jsx";
import AvatarSelection from "./AvatarSelection.jsx";
// allow the user if logged in to edit their profile via the edit button
class Profile extends Component {
  state = {
    avatar: false,
    editUser: {
      edit: false,
      editButton: "Edit Profile"
    }
  };

  componentDidMount() {
    if (!this.props.auth.loggedIn) {
      this.props.dispatch(
        fetchUser(this.props.userId.match.params.id, this.props.history)
      );
    }
  }

  componentDidUpdate() {
    // this.props.auth.loggedIn ? this.props.handleShowDash() : this.props.history.push('/');
    this.props.handleShowDash();
  }

  showAvatars() {
    !this.state.avatar
      ? this.setState({ avatar: true })
      : this.setState({ avatar: false });
  }

  handleEditProfile() {
    !this.state.editUser.edit
      ? this.setState({ editUser: { edit: true, editButton: "Cancel" } })
      : this.setState({
          editUser: { edit: false, editButton: "Edit Profile" }
        });
  }

  handleUpdateTheme(theme) {
    let req = {
      ...this.props.auth.creds,
      theme: theme
    };
    axios
      .post(`/routes/user/${this.props.auth.creds._id}/edit`, req)
      .then(results => {
        this.props.dispatch(editUser(results.data.response));
      });
  }

  render() {
    console.log("this is from profile: ", this.props);
    const { loggedIn, creds } = this.props.auth;
    const { edit, editButton } = this.state.editUser;
    // display user profile if they have logged in and already have an account
    return (
      <div className="profile-page-wrapper">
        <div className="profile-banner">
          <h1 className="twopercent-spacing">
            {loggedIn ? (
              <img className="profile-avatar-responsive" src={creds.img} />
            ) : null}
            Profile
          </h1>
        </div>
        {/* welcome banner */}
        <div className="welcome twopercent-spacing">
          <h2>Glad to have you back,</h2>
        </div>
        {/* allow them to edit their username to something else */}
        <div className="profile-username-edit twopercent-spacing">
          {loggedIn ? (
            <h2>
              {creds.displayName || creds.username}!{" "}
              {creds.location ? (
                <span className="profile-location">({creds.location})</span>
              ) : null}
            </h2>
          ) : null}
          <button
            id="edit-profile-toggle"
            className="button profile-button"
            onClick={() => this.handleEditProfile()}
          >
            {editButton}
          </button>
          {edit ? (
            <EditProfile
              state={this.state}
              handleEditProfile={this.handleEditProfile.bind(this)}
            />
          ) : null}
        </div>
        {/* allow them to change their avatar */}
        <div className="avatar-selection twopercent-spacing underline">
          <button
            id="edit-avatar-toggle"
            className="button profile-button"
            onClick={() => this.showAvatars()}
          >
            Change Avatar
          </button>
          {this.state.avatar && (
            <AvatarSelection
              state={this.state}
              showAvatars={this.showAvatars.bind(this)}
            />
          )}
        </div>
        {/* allow them to change the theme layout  */}
        {/* need to update this in sass files */}
        <div className="profile-themeselect twopercent-spacing">
          <h4 className="theme-title">Theme:</h4>
          <select
            className="theme-changer"
            value={this.props.auth.creds.theme || "theme-musictree"}
            onChange={e => this.handleUpdateTheme(e.target.value)}
          >
            <option value="theme-musictree">Music-Tree</option>
            <option value="theme-twilight">Twilight</option>
            <option value="theme-peacock">Peacock</option>
            <option value="theme-good-vibes">Good Vibes</option>
          </select>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default withRouter(connect(mapStateToProps)(Profile));
