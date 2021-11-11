import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class extends Component {
  render() {
    return (
      <div className="links">
        <div className="nav-link-wrapper">
          <NavLink exact to="/">
            Home
          </NavLink>
        </div>

        <div className="nav-link-wrapper">
          <NavLink to="/about">About</NavLink>
        </div>
      </div>
    );
  }
}
