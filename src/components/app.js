import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import About from "./about";
import Home from "./home";

import NewProduct from "./cars/newProduct";
import OldProduct from "./cars/oldProduct";
import ComingSoonProduct from "./cars/comingSoonProduct";

import NavigationContainer from "./navigation-container";

class App extends Component {
  render() {
    return (
      <div className="navigation-wrapper">
        <div className="header">
          <h1 className="small">Welcome To My Page</h1>
          <h2 className="small">Here You'll Find Everything You Need</h2>
        </div>

        <Router>
          <NavigationContainer />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/newProduct" component={NewProduct} />
            <Route exact path="/oldProduct" component={OldProduct} />
            <Route
              exact
              path="/comingSoonProduct"
              component={ComingSoonProduct}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}
export default App;
