import React, { Component } from "react";
import { connect } from "react-redux";
import { loginUser } from "../../../actions/authenticate";
//  allow the user to login with different options
class Login extends Component {
  handleSubmit(e) {
    e.preventDefault();
    const creds = {
      username: e.target.username.value,
      password: e.target.password.value
    };
    this.props.dispatch(loginUser(creds, this.props.userId.history));
  }

  renderAlert() {
    if (this.props.errorMessage) {
      window.addEventListener("click", function(event) {
        let flashMessage = document.getElementById("deleteErrorMessage");
        if (event.target != flashMessage) {
          flashMessage.style.display = "none";
        }
      });
      return (
        <div className="error-popover" id="deleteErrorMessage">
          <div className="popover-arrow" />
          <h3 className="popever-header">
            {/* <a className="popover-close" onClick={this.closeErrorMessage}/> */}
          </h3>
          <div className="popover-body">{this.props.errorMessage}</div>
        </div>
      );
    }
  }

  closeErrorMessage() {
    let modal = document.getElementById("deleteErrorMessage");
    modal.style.display = "none";
  }
  // allow them tp login with either username and password, facebook or google. 
  
  // not sure if i will have the facebook and google done by mvp
  render() {
    return (
      <div
        className={this.props.launch ? "page-wrapper nodash" : "page-wrapper"}
      >
        <div className="auth-card">
          <div>
            <h1>Glad to see you again!</h1>
            <div className="auth-buttons-wrapper">
              <form action="routes/auth/google" method="get">
                <button className="button google-button">
                  <span className="auth-icon">
                    <i className="fab fa-google-plus-g" />
                  </span>{" "}
                  Google
                </button>
              </form>
              <form action="routes/auth/facebook" method="get">
                <button className="button facebook-button">
                  <span className="auth-icon">
                    <i className="fab fa-facebook" />
                  </span>{" "}
                  Facebook
                </button>
              </form>
            </div>
            <div className="divider">
              <strong className="divider-title">Or</strong>
            </div>
          </div>
          <form className="auth-form" onSubmit={e => this.handleSubmit(e)}>
            <input
              className="auth-form__input"
              type="text"
              name="username"
              placeholder="username"
              required
            />
            <input
              className="auth-form__input"
              type="password"
              name="password"
              placeholder="password"
              required
            />
            <br />
            <br />
            {this.renderAlert()}
            <button className="button auth-submit">Log In</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    errorMessage: state.auth.error
  };
};

export default connect(mapStateToProps)(Login);
