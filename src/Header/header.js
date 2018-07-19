import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NavLink from "react-router-dom/es/NavLink";

class MyHeader extends React.Component{
    render(){
        return <div className="navbar navbar-expand">
            <span className="navbar-brand">Hotel</span>
            <div className="navbar-collapse">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink to="/bookings"  className="nav-link">Booking </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/rooms" className="nav-link">Rooms</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/clients"  className="nav-link">Clients
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    }
}

export default MyHeader;