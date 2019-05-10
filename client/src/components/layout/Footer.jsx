import React, { Component } from "react";
import ReactDOM from "react-dom";
// footer page
export default class Footer extends Component {
  render() {
    // this is the possible media buttons that a user can click on.... THIS WILL NOT WORK BECUASE I DO NOT HAVE A FACEBOOK PAGE AND STYFF FOR THE APP
    return (
      <div>
        <div className={this.props.theme}>
          <footer>
            <div className="footer-bottom">
              <div className="footer-social-media">
                <a className="social-media-footer" href="#">
                  <i className="fab fa-facebook-f" />
                </a>
                <a className="social-media-footer" href="#">
                  <i className="fab fa-instagram" />
                </a>
                <a className="social-media-footer" href="#">
                  <i className="fab fa-twitter" />
                </a>
                <a className="social-media-footer" href="#">
                  <i className="fab fa-github" />
                </a>
              </div>

              {/* display credits for some of the tech that is being used */}
              <div className="footer-credits">
                <p className="yt-credit">
                  API provided by:{" "}
                  <a
                    className="dashboard__link"
                    href="https://developers.google.com/youtube/"
                  >
                    {" "}
                    YouTube <i className="fab fa-youtube" />
                  </a>
                </p>
                <p className="musictree-credit">
                  Copyright &copy; 2019{" "}
                  <a
                    className="dashboard__link"
                    href="https://github.com/JHGarrett"
                  >
                    {" "}
                    John Garrett
                  </a>
                </p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}
