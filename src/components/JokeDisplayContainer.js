import React, { Component } from "react";
import { connect } from "react-redux";
import JokeDisplay from "./JokeDisplay";
import { fetchJoke } from "../actions/jokes";

export class JokeDisplayContainer extends Component {
  componentDidMount() {
    this.props.fetchJoke();
  }

  render() {
    return <JokeDisplay />;
  }
}

const mapStateToProps = state => {
  return {
    // joke: state.joke
  }
};

export default connect(
  mapStateToProps,
  {
    fetchJoke
  }
)(JokeDisplayContainer);
