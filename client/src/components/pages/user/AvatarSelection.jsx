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
            src="https://image.flaticon.com/icons/svg/145/145842.svg"
          />
          <img
            onClick={e => this.handleAvatarClick(e)}
            className="avatars"
            src="https://image.flaticon.com/icons/svg/145/145843.svg"
          />
          <img
            onClick={e => this.handleAvatarClick(e)}
            className="avatars"
            src="https://image.flaticon.com/icons/svg/145/145847.svg"
          />
          <img
            onClick={e => this.handleAvatarClick(e)}
            className="avatars"
            src="https://image.flaticon.com/icons/svg/145/145848.svg"
          />
          <img
            onClick={e => this.handleAvatarClick(e)}
            className="avatars"
            src="https://image.flaticon.com/icons/svg/145/145849.svg"
          />
          <img
            onClick={e => this.handleAvatarClick(e)}
            className="avatars"
            src="https://image.flaticon.com/icons/svg/145/145850.svg"
          />
          <img
            onClick={e => this.handleAvatarClick(e)}
            className="avatars"
            src="https://image.flaticon.com/icons/svg/145/145846.svg"
          />
          <img
            onClick={e => this.handleAvatarClick(e)}
            className="avatars"
            src="https://image.flaticon.com/icons/svg/145/145844.svg"
          />
          <img
            onClick={e => this.handleAvatarClick(e)}
            className="avatars"
            src="https://image.flaticon.com/icons/svg/145/145845.svg"
          />
          <img
            onClick={e => this.handleAvatarClick(e)}
            className="avatars"
            src="https://image.flaticon.com/icons/svg/145/145867.svg"
          />
          <img
            onClick={e => this.handleAvatarClick(e)}
            className="avatars"
            src="https://image.flaticon.com/icons/svg/145/145852.svg"
          />
          <img
            onClick={e => this.handleAvatarClick(e)}
            className="avatars"
            src="https://image.flaticon.com/icons/svg/145/145859.svg"
          />
          <img
            onClick={e => this.handleAvatarClick(e)}
            className="avatars"
            src="https://image.flaticon.com/icons/svg/145/145862.svg"
          />
          <img
            onClick={e => this.handleAvatarClick(e)}
            className="avatars"
            src="https://image.flaticon.com/icons/svg/145/145866.svg"
          />
          <img
            onClick={e => this.handleAvatarClick(e)}
            className="avatars"
            src="https://image.flaticon.com/icons/svg/145/145864.svg"
          />
          <img
            onClick={e => this.handleAvatarClick(e)}
            className="avatars"
            src="https://www.flaticon.com/premium-icon/icons/svg/145/145857.svg"
          />
          <img
            onClick={e => this.handleAvatarClick(e)}
            className="avatars"
            src="https://image.flaticon.com/icons/svg/265/265674.svg"
          />
          <img
            onClick={e => this.handleAvatarClick(e)}
            className="avatars"
            src="https://image.flaticon.com/icons/svg/1651/1651586.svg"
          />
          <img
            onClick={e => this.handleAvatarClick(e)}
            className="avatars"
            src="https://image.flaticon.com/icons/svg/167/167750.svg"
          />
          <img
            onClick={e => this.handleAvatarClick(e)}
            className="avatars"
            src="https://image.flaticon.com/icons/svg/1651/1651607.svg"
          />
          <img
            onClick={e => this.handleAvatarClick(e)}
            className="avatars"
            src="https://image.flaticon.com/icons/svg/201/201565.svg"
          />
          <img
            onClick={e => this.handleAvatarClick(e)}
            className="avatars"
            src="https://image.flaticon.com/icons/svg/201/201612.svg"
          />
          <img
            onClick={e => this.handleAvatarClick(e)}
            className="avatars"
            src="https://image.flaticon.com/icons/svg/201/201608.svg"
          />
          <img
            onClick={e => this.handleAvatarClick(e)}
            className="avatars"
            src="https://image.flaticon.com/icons/svg/1046/1046374.svg"
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
