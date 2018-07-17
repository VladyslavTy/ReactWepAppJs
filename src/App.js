import React, { Component } from 'react';
import './App.css';
import { Router } from 'react-router';
import MyHeader from "./header";
import MyTable from "./MyTable";

class App extends Component {
  render() {
    return (
        <Router>
          <MyHeader/>
        </Router>
    );
  }
}

export default App;
