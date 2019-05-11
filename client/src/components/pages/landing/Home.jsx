import React, { Component } from "react";
import RectDOM from "react-dom";
import { Link, withRouter } from "react-router-dom";
// home page/landing page for the app.
class Home extends Component {
  handleSearchInput(e) {
    e.preventDefault();
const search = e.target.elements.search.value;
    this.props.history.push(`/search/${search}`);
  }
//  display small info about the app and allow the uwer to search for new stuff
  render() {
    console.log("from Home", this.props);
    return (
      <div
        className={this.props.launch ? "page-wrapper nodash" : "page-wrapper"}
      >
        <div className="landing-page-title">
          <h1>Discover new music!</h1>
        </div>
        <div className="searchbar-wrapper">
          <h2>Type in a song or Artist</h2>
          <form
            className="landing-searchbar"
            onSubmit={this.handleSearchInput.bind(this)}
          >
            <button type="submit" className="landing-search-icon">
              <i className="fas fa-seach" />
            </button>
            <input className="landing-search" name="search" />
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(Home);
