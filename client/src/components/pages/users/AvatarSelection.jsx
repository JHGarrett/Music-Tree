import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { editUser } from "../../../actions/authenticate";

class AvatarSelection extends Component {
  componentDidMount() {
    let editBox = document.getElementById("edit-avatar-box");
    let editButton = document.getElementById("edit-avatar-toggle");

    window.onclick = event => {
      if (!editBox.contains(event.target) && event.target !== editButton) {
        this.props.showAvatars();
      }
    };
  }

  componentWillUnmount() {
    window.onclick = event => {
      null;
    };
  }

  handleAvatarClick(e) {
    e.preventDefault();
    const img = e.target.src;
    let req = {
      ...this.props.auth.creds,
      img: img
    };
    axios
      .post(`/routes/user/${this.props.auth.creds._id}/edit`, req)
      .then(results => {
        this.props.dispatch(editUser(results.data.response));
      });

    this.props.showAvatars();
  }

  render() {
    // console.log('avatar props: ', this.props);

    return (
      <div className="avatar-wrapper" id="edit-avatar-box">
        <h2>Avatar Selection</h2>
        <div className="avatar-library">
          <img
            onClick={e => this.handleAvatarClick(e)}
            className="avatars"
            src=""
/>
          <img
            onClick={e => this.handleAvatarClick(e)}
            className="avatars"
          />
          <img
            onClick={e => this.handleAvatarClick(e)}
            className="avatars"
          />
          <img
            onClick={e => this.handleAvatarClick(e)}
            className="avatars"
          />
          <img
            onClick={e => this.handleAvatarClick(e)}
            className="avatars"
          />
          <img
            onClick={e => this.handleAvatarClick(e)}
            className="avatars"
          />
          <img
            onClick={e => this.handleAvatarClick(e)}
            className="avatars"
          />
          <img
            onClick={e => this.handleAvatarClick(e)}
            className="avatars"
          />
          <img
            onClick={e => this.handleAvatarClick(e)}
            className="avatars"
          />
          <img
            onClick={e => this.handleAvatarClick(e)}
            className="avatars"
          />
          <img
            onClick={e => this.handleAvatarClick(e)}
            className="avatars"
          />
          <img
            onClick={e => this.handleAvatarClick(e)}
            className="avatars"
          />
          <img
            onClick={e => this.handleAvatarClick(e)}
            className="avatars"
          />
          <img
            onClick={e => this.handleAvatarClick(e)}
            className="avatars"
          />
          <img
            onClick={e => this.handleAvatarClick(e)}
            className="avatars"
          />
          <img
            onClick={e => this.handleAvatarClick(e)}
            className="avatars"
          />
          <img
            onClick={e => this.handleAvatarClick(e)}
            className="avatars"
          />
          <img
            onClick={e => this.handleAvatarClick(e)}
            className="avatars"
          />
          <img
            onClick={e => this.handleAvatarClick(e)}
            className="avatars"
          />
          <img
            onClick={e => this.handleAvatarClick(e)}
            className="avatars"
          />
          <img
            onClick={e => this.handleAvatarClick(e)}
            className="avatars"
          />
          <img
            onClick={e => this.handleAvatarClick(e)}
            className="avatars"
          />
          <img
            onClick={e => this.handleAvatarClick(e)}
            className="avatars"
          />
          <img
            onClick={e => this.handleAvatarClick(e)}
            className="avatars"
          />
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

export default withRouter(connect(mapStateToProps)(AvatarSelection));
