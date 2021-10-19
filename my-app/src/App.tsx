import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "./images/logo.png";

function App() {
  return (
    <Router>
      <header>
        <div className="d-flex">
          <img src={logo} alt="Logo" className="logo" />
          <div className="app">
            <nav>
              <ul className="main-nav">
                <li>
                  <Link to="/">Pets Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/wishlist">Wishlist</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <div className="main-content">
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">this is about route</Route>
          <Route path="/wishlist">this is wishlist route</Route>
          <Route path="/">This is home route</Route>
        </Switch>
        <p>Hello from app.tsx</p>
      </div>
    </Router>
  );
}

export default App;
