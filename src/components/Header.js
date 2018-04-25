import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { startLogout } from "../actions/auth";

const Header = ({ startLogout }) => (
  <header>
    <h1>Expensify</h1>
    <NavLink exact to="/dashboard" activeClassName="is-active">
      Dashboard
    </NavLink>
    <NavLink to="/create" activeClassName="is-active">
      Create
    </NavLink>
    <NavLink to="/edit" activeClassName="is-active">
      Edit
    </NavLink>
    <button onClick={startLogout}>Logout</button>
  </header>
);

const mapDispatchToProps = dispatch => {
  return {
    startLogout: () => dispatch(startLogout())
  };
};

export default connect(undefined, mapDispatchToProps)(Header);
