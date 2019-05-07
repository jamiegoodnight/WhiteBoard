import React, { Component } from "react";
import "./App.css";
import Dashboard from "./Dashboard";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Whiteboarding Sesh Signup</h1>
        </header>
        <Dashboard />
      </div>
    );
  }
}

export default App;
