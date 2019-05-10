import React from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import axios from "axios";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Dashboard from "../components/layout/Dashboard";
import Home from "../components/pages/landing/Home";
import Search from "../components/pages/landing/Search";
import PlayVideo from "../components/pages/landing/PlayVideo";
import About from "../components/pages/moreinfo/About";
import Signup from "../components/pages/auth/Signup";
import Login from "../components/pages/auth/Login";
import Profile from "../components/pages/user/Profile";
import SavedVideos from "../components/pages/user/SavedVideos";
import Playlist from "../components/pages/user/Playlist";
import NotFound from "./NotFound";
import ScrollToTop from "./ScrollToTop";

// Seed Data
import { dummyUserData, dummySavedVideosData } from "../seedData/seedData";

class AppRoutes extends React.Component {
  state = {
    launch: true,
    videos: [],
    selectedVideo: null
  };

  // Show dashboard after moving form landing page
  handleShowDash = () =>
    this.state.launch ? this.setState({ launch: false }) : null;

  handleSearchInput = query => {
    // console.log('this is the search: ', query);
    axios
      .get(`routes/yt/search/${query}`)
      .then(results => {
        // console.log(results.data);
        let videos = results.data.data.items;
        this.setState({ videos: videos, selectedVideo: null });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <BrowserRouter>
        <ScrollToTop>
          <Navbar theme={this.props.auth.creds.theme || "theme-musictree"} />
          <div className={this.props.auth.creds.theme || "theme-musictree"}>
            <div className="main-page">
              <Dashboard
                launch={this.state.launch}
                handleShowDash={this.handleShowDash}
              />
              <Switch>
                <Route
                  exact
                  path="/"
                  component={() => (
                    <Home
                      launch={this.state.launch}
                      search={this.state.search}
                      handleSearchInput={this.handleSearchInput}
                    />
                  )}
                />
                <Route
                  path="/search/:id"
                  render={props => (
                    <Search
                      userId={props}
                      stateData={this.state}
                      handleSearchInput={this.handleSearchInput}
                      handleSelectedVideo={selectedVideo =>
                        this.setState({ selectedVideo })
                      }
                      handleShowDash={this.handleShowDash}
                    />
                  )}
                />
                <Route
                  exact
                  path="/user/:id"
                  render={props => (
                    <Profile
                      userId={props}
                      editUser={this.state.editUser}
                      handleShowDash={this.handleShowDash}
                    />
                  )}
                />
                <Route
                  exact
                  path="/user/:id/saved"
                  render={props => <SavedVideos userId={props} />}
                />
                <Route
                  exact
                  path="/user/:id/playlists"
                  render={() => <Playlist />}
                />
                <Route
                  path="/about"
                  component={props => <About launch={this.state.launch} />}
                />
                <Route path="/playvideo" component={PlayVideo} />
                <Route
                  path="/signup"
                  component={props => (
                    <Signup
                      userId={props}
                      launch={this.state.launch}
                      handleHideDash={this.handleHideDash}
                    />
                  )}
                />
                <Route
                  path="/login"
                  component={props => (
                    <Login
                      userId={props}
                      launch={this.state.launch}
                      handleHideDash={this.handleHideDash}
                    />
                  )}
                />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
          <Footer theme={this.props.auth.creds.theme || "theme-musictree"} />
        </ScrollToTop>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps)(AppRoutes);
