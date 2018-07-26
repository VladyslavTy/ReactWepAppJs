import React, { Component } from 'react';
import './App.css';
import { Route} from "react-router-dom";

import MyHeader from "./Header/header";
import HomePage from "./Home/HomePage";
import MyClientsTable from "./Client/MyClientsTable";
import MyBookingsTable from "./Booking/MyBookingsTable";
import MyRoomsTable from "./Room/MyRoomsTable";
import BookingForm from "./Booking/BookingForm";
import UpdateClientForm from "./Client/UpdateClientForm";

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
            <Route path="/updateclient/:id" component={UpdateClientForm}/>
        </div>
    );
  }
}

export default App;
