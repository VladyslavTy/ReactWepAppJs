import React from "react";

class MyBookingsTable extends React.Component{
    constructor(){
        super();
        this.state = {
            data: []
        }
    }

    componentDidMount(){
        fetch('http://localhost:3001/reservations')
            .then(r => r.json())
            .then(bookings => {
                bookings.forEach(booking =>{
                    let joined = this.state.data.concat(booking);
                    this.setState({
                        data: joined
                    })
                })
            })
    }

    render(){
        let rows = this.state.data.map(booking => {
            return <BookingRow
                key ={
                    booking.id
                }
                data = {
                    booking
                }
            />
        });

        return <div className="mainTable">
            <table className="table shadow" id="roomsTable">
                <thead className="thead-dark border border-dark">
                <th>
                    <button className="adder" onClick="openCreatingForm()">+</button>
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

const BookingRow = (props) => {
    return (
        <tr>
            <td>
                {props.data.id}
            </td>
            <td>
                {props.data.client.firstname}
            </td>
            <td>
                {props.data.client.secondname}
            </td>
            <td>
                {props.data.startBooking}
            </td>
            <td>
                {props.data.endBooking}
            </td>
            <td>
                <button type="button" className="btn btn-outline-danger btn-sm col-12" id="deleteBooking"
                        onClick="deleteBooking(this)">
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default MyBookingsTable;