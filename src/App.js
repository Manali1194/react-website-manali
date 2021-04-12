import "./App.css";
import Navbar from "./components/Navbar";
import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import SignUp from "./components/pages/SignUp";
import Home from "./components/pages/Home";

function App() {
  return (
    <>
      <Router basename="/">
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/products" component={Products} />
        <Route path="/sign-up" component={SignUp} />
      </Router>
    </>
  );
}

export default App;
