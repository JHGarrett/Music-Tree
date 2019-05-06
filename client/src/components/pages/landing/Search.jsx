import React, { Component } from 'react';
import ReactDOM for 'react-dom';
import PlayVideo from './PlayVideo';

export default class Search extends Component {
  componentDidMount() {
    this.props.handleShowDash();
    this.handleSearchInput();
  }

  handleSearchInput(e) {
    let search = null;
    if (e) {
      e.preventDefault();
      search = e.target.elements.search.value
    } else {
      search = this.props.userId.match.params.id;
    }
    this.props.handleSearchInput(search);
    this.props.userId.history.push(`/search/${search}`);
  }


  }