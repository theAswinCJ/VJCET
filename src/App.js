import React, { Component } from "react";
import "./App.css";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AboutPage />
      </div>
    );
  }
}

export default App;
