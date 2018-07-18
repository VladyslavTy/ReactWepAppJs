import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MyRoomsTable from "../Room/MyRoomsTable";

class MyHeader extends React.Component{
    render(){
        return <div className="navbar navbar-expand">
            <span className="navbar-brand">Hotel</span>
            <Router><div className="navbar-collapse">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Booking </a>
                    </li>
                    <li className="nav-item">

                        <a className="nav-link" href="#">Rooms</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Clients
                          </a>
                    </li>
                </ul>
            </div>
            </Router>
        </div>
    }
}

export default MyHeader;