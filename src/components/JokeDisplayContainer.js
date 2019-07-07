import React, { Component } from "react";
import { connect } from "react-redux";
import JokeDisplay from "./JokeDisplay";
import { fetchJoke } from "../actions/jokes";

export class JokeDisplayContainer extends Component {
  componentDidMount() {
    this.props.fetchJoke();
  }

  render() {
    return <JokeDisplay joke={this.props} />
  }
}

const mapStateToProps = state => {
  return {
    setup: state && state[0].setup,
    punchline: state && state[0].punchline
  }
};

export default connect(
  mapStateToProps,
  {
    fetchJoke
  }
)(JokeDisplayContainer);
