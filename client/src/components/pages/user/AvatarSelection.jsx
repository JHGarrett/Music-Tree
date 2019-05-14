import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { editUser } from "../../../actions/authenticate";


// allow the user to select an avatar for the profile. for the mvp it will be pre defined

// i would like to have the user be able to upload their own image. 
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
    console.log('avatar props: ', this.props);

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
            src="https://cdn0.iconfinder.com/data/icons/people-jobs-set-2/128/jobs-08-512.png"
          />
          <img
            onClick={e => this.handleAvatarClick(e)}
            className="avatars"
            src="https://image.flaticon.com/icons/svg/1046/1046374.svg"
          />
          <img
            onClick={e => this.handleAvatarClick(e)}
            className="avatars"
            src="https://store.playstation.com/store/api/chihiro/00_09_000/container/US/en/999/UP2477-CUSA06694_00-AV00000000000022/1520762915000/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000"
          />
          <img
            onClick={e => this.handleAvatarClick(e)}
            className="avatars"
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7694bdfd-5d4e-49fb-9231-a9c24c0a5d39/d8rw8hq-db1270d3-fb5d-4006-be6e-647b9c99c833.png/v1/fill/w_400,h_400,q_80,strp/grumpy_cat_avatar_by_micrerofurioso_d8rw8hq-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDAwIiwicGF0aCI6IlwvZlwvNzY5NGJkZmQtNWQ0ZS00OWZiLTkyMzEtYTljMjRjMGE1ZDM5XC9kOHJ3OGhxLWRiMTI3MGQzLWZiNWQtNDAwNi1iZTZlLTY0N2I5Yzk5YzgzMy5wbmciLCJ3aWR0aCI6Ijw9NDAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.OGCTJNOTcDohe4BFRV6cxO9hCwiztZ4rnkVQw71LRQo"
          />
          <img
            onClick={e => this.handleAvatarClick(e)}
            className="avatars"
            src="https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Penguin-512.png"
          />
          <img
            onClick={e => this.handleAvatarClick(e)}
            className="avatars"
            src="https://cdn4.iconfinder.com/data/icons/animals-137/128/walrus-flippers-marine-mammal-arctic-512.png"
          />
          <img
            onClick={e => this.handleAvatarClick(e)}
            className="avatars"
            src="https://cdn0.iconfinder.com/data/icons/people-jobs-set-2/128/jobs-08-512.png"
          />
          <img
            onClick={e => this.handleAvatarClick(e)}
            className="avatars"
            src="https://cdn0.iconfinder.com/data/icons/people-jobs-set-2/128/jobs-11-512.png"
          />
          <img
            onClick={e => this.handleAvatarClick(e)}
            className="avatars"
            src="https://cdn0.iconfinder.com/data/icons/people-jobs-set-2/128/jobs-06-512.png"
          />
          <img
            onClick={e => this.handleAvatarClick(e)}
            className="avatars"
            src="https://cdn0.iconfinder.com/data/icons/people-jobs-set-2/128/jobs-09-512.png"
          />
          <img
            onClick={e => this.handleAvatarClick(e)}
            className="avatars"
            src="https://cdn4.iconfinder.com/data/icons/animals-137/128/sloth-slow-wildlife-mammal-arboreal-512.png"
          />
          <img
            onClick={e => this.handleAvatarClick(e)}
            className="avatars"
            src="https://cdn4.iconfinder.com/data/icons/animals-137/128/penguin-flightless-bird-antarctica-animal-512.png"
          />
          <img
            onClick={e => this.handleAvatarClick(e)}
            className="avatars"
            src="https://cdn4.iconfinder.com/data/icons/animals-137/128/alpaca-llama-wool-livestock-mammal-512.png"
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
