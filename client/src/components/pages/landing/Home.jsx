import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Link, withRouter } from "react-router-dom";

class Home extends Component {
  handleSearchInput(e) {
    e.preventDefault();
    const search = e.target.elements.search.value;
    this.props.history.push(`/search/${search}`);
  }

  render() {
    return (
      <div
        className={this.props.launch ? "page-wrapper nodash" : "page-wrapper"}
      >
        <div className="landing-page-title">
          <h1>Music-Tree is an Ad free youtube player.<br></br> It uses sever-side rendering and a custom DNS to stop them. </h1>
        </div>
        <div className="searchbar-wrapper">
          <h2>Please sign up to get access to custom themes, avatars, the ability to like and add videos to a playlist, and more! <br></br>Get Started with your favorite song/artist below!</h2>
          <form
            className="landing-searchbar"
            onSubmit={this.handleSearchInput.bind(this)}
          >
            <button type="submit" className="landing-search-icon">
              <i className="fas fa-search" />
            </button>
            <input className="landing-search" name="search" />
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(Home);
