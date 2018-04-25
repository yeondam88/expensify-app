import React, { Component } from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";

class LoginPage extends Component {
  render() {
    return (
      <div className="box-layout">
        <div className="box-layout__box">
          <h1 className="box-layout__title">Expensify App</h1>
          <p>It's time to get your expenses under control.</p>
          <button className="box-layout__btn" onClick={this.props.startLogin}>
            Login with Google
          </button>
        </div>
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
