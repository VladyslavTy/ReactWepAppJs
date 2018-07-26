import React from "react";
import axios from 'axios';
import NavLink from "react-router-dom/es/NavLink";
import {Button} from "react-bootstrap";

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
        this.remove(booking);
        axios.delete('http://localhost:4000/bookings' + '/' + booking._id);

    }

    remove = (element) => {
        let fdata = this.state.data.filter(e => e !== element);
        this.state.data = fdata;
        this.setState(this.state.data);
    };

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

const BookingRow = (props) =>{

    function onDelEvent() {
        props.onDelEvent(props.data);
    }

        return (
            <tr>
                <td>
                    {props.data.id}
                </td>
                <td>
                    {props.data.firstname + ' ' + props.data.lastname}
                </td>
                <td>
                    {props.data.number}
                </td>
                <td>
                    {props.data.startbooking}
                </td>
                <td>
                    {props.data.finishbooking}
                </td>
                <td>
                    <Button bsStyle="danger" className="deleteButton"
                            onClick={onDelEvent.bind(this)} >
                        Delete
                    </Button>
                </td>
            </tr>
        );
};

export default MyBookingsTable;