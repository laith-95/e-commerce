import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// components
import Home from "./pages/Home";
import Cart from "./pages/Cart";

class App extends Component {
  state = {
    products: [],
    cart: [],
  };

  componentDidMount() {
    const fetchData = async () => {
      try {
        let data = await fetch("https://fakestoreapi.com/products");
        data = await data.json();

        this.setState({
          products: data,
        });
      } catch (error) {
        console.log("fetch error = ", error);
      }
    };

    fetchData();
  }

  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="*">
              <h1>Error 404 !</h1>
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
