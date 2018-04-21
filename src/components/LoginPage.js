import React, { Component } from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";

class LoginPage extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.startLogin}>Login</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    startLogin: () => dispatch(startLogin())
  };
};

export default connect(undefined, mapDispatchToProps)(LoginPage);
