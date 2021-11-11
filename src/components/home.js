import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="center-features-column">
          <ul className="column">
            <li className="column">
              <Link to="/newProduct">New Products</Link>
            </li>

            <li className="column">
              <Link to="/oldProduct">Old Products</Link>
            </li>

            <li className="column">
              <Link to="/comingSoonProduct">Coming Soon Products</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
