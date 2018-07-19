import React, { Component } from 'react';
import './App.css';
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";

import MyHeader from "./Header/header";
import HomePage from "./Home/HomePage";
import MyClientsTable from "./Client/MyClientsTable";
import MyBookingsTable from "./Booking/MyBookingsTable";
import MyRoomsTable from "./Room/MyRoomsTable";
import BookingForm from "./Booking/BookingForm";

class App extends Component {
  render() {
    return (

        <div>
            <header>
                <MyHeader/>
            </header>
                <Route path="/main" component={HomePage}/>
                <Route path="/clients" component={MyClientsTable}/>
                <Route path="/bookings" component={MyBookingsTable}/>
                <Route path="/rooms" component={MyRoomsTable}/>
                <Route path="/bookingform" component={BookingForm}/>
        </div>
    );
  }
}

export default App;
