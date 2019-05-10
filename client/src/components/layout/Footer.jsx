import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Footer extends Component {
  render() {
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
