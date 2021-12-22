import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "./Components/HomeScreen";
import ProductScreen from "./Components/ProductScreen";
import CartScreen from "./Components/CartScreen";
import Navbar from "./Components/Navbar";
import { BackDrop } from "./Components/BackDrop";
import SideDrawer from "./Components/SideDrawer";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import CheckOutScreen from "./Components/CheckOutScreen";

function App() {
  const [sideToggle, setSideToggle] = useState(false);
  return (
    <Router>
      <Navbar
        click={() => {
          setSideToggle(true);
        }}
      />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <BackDrop show={sideToggle} click={() => setSideToggle(false)} />
      <main>
        <Switch>
          <Route exact path="/">
            <HomeScreen />
          </Route>
          <Route exact path="/product/:id">
            <ProductScreen />
          </Route>
          <Route exact path="/cart">
            <CartScreen />
          </Route>
          <Route exact path="/signin">
            <SignIn />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/checkout">
            <CheckOutScreen />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
