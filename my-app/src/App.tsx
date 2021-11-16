import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CardDetail from "./components/card/detail";
import TopNav from "./components/topnav/topnav";
import WishListDetail from "./components/wishlist/detail";
import NotFound from "./components/error/NotFound"; 
import CardGrid from "./components/card/grid";
import WishlistContextProvider from "./wishlistContext";

function App() { 

  return (
    <Router>
      <WishlistContextProvider>

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
            <CardDetail />
          </Route>
          <Route exact path="/">
            <h1>Home</h1>
            <p>this is home route</p>
            <CardGrid />
          </Route>
          <Route component={NotFound} />
        </Switch>

        <p>Hello from app.tsx</p>
      </div>
      
      </WishlistContextProvider>

    </Router>
  );
}

export default App;
