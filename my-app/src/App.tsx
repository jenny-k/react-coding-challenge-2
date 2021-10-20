import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PetDetail from "./components/pet/detail";
import TopNav from "./components/topnav/topnav";
import WishListDetail from "./components/wishlist/detail";
import NotFound from "./components/error/NotFound";

function App() {
  return (
    <Router>
      <header>
        <TopNav />
      </header>

      <div className="main-content">
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/wishlist">
            <h1>WishList</h1>
            <WishListDetail />
          </Route>
          <Route path="/detail/:id">
            <h1>Pet Details</h1>
            <PetDetail />
          </Route>
          <Route exact path="/">
            <h1>Home</h1>
            <p>this is home route</p>
          </Route>
          <Route component={NotFound} />
        </Switch>

        <p>Hello from app.tsx</p>
      </div>
    </Router>
  );
}

export default App;
