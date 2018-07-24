import React from "react";
import axios from 'axios';
import NavLink from "react-router-dom/es/NavLink";
import BookingRow from "./BookingRow";

class MyBookingsTable extends React.Component{
    constructor(){
        super();
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/bookings')
            .then(r => {
                let data = r.data;
                this.setState({data})
            });
    }

    bookingRowDel(booking){
        axios.delete('http://localhost:4000/bookings' + '/' + booking._id)
            .then(r => r.json());
    }

    render(){
        let rows = this.state.data.map(booking => {
            return <BookingRow
                key ={
                    booking._id
                }
                data = {
                    booking
                }
                onDelEvent={this.bookingRowDel.bind(this)}
            />
        });

        return <div className="mainTable">
            <table className="table shadow" id="roomsTable">
                <thead className="thead-dark border border-dark">
                <th>
                    <NavLink to="/bookingform"><button className="adder">+</button></NavLink>
                </th>
                <th>Name</th>
                <th>Room</th>
                <th>Start of Booking</th>
                <th>Finish of Booking</th>
                <th>Action</th>
                </thead>
                <tbody id="rooms" className="roomms">
                {rows}
                </tbody>
            </table>
        </div>
    }
}


export default MyBookingsTable;