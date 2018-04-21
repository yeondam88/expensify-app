import React, { Component } from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";

class LoginPage extends Component {
  state = {
    login: false
  };

  render() {
    return (
      <div>
        {this.state.login ? (
          <button onClick={this.props.startLogin}>Login</button>
        ) : (
          <button onClick={this.props.startLogin}>Logout</button>
        )}
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
