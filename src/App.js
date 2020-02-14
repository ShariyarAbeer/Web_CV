import React, { Component, Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./pages/home/home";
import Home from "./pages/home/home";

class App extends Component {
  render() {
    return (
      <div>
        <Home />
      </div>
    );
  }
}

export default App;
