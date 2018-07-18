import React, { Component } from 'react';
import './App.css';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'

import MyHeader from "./Header/header";
import MyBookingsTable from "./Booking/MyBookingsTable";

class App extends Component {
  render() {
    return (
        <div>
            <header>
                <MyHeader/>
            </header>
            <div>
                <MyBookingsTable/>
            </div>
        </div>
    );
  }
}

export default App;
