import React from "react";
import "./BookingForm.css"
import axios from 'axios';

class BookingForm extends React.Component{

    constructor(){
        super();
        this.state = {
            firstname: '',
            lastname: '',
            phone: '',
            number: '',
            startbooking: '',
            finishbooking: ''
        };
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { firstname, lastname, phone,number, startbooking, finishbooking } = this.state;

        axios.post('http://localhost:4000/clients', { firstname, lastname, phone })
            .then(r => r.json());
        axios.post('http://localhost:4000/bookings', { firstname, lastname, number, startbooking, finishbooking})
            .then(r => r.json());
    }

    render(){
        const { firstname, lastname, phone, number, startbooking, finishbooking } = this.state;
        return <div>
            <div className="booking-container">
                <div className="booking-form border">
                    <form className="form" onSubmit={this.onSubmit}>
                        <div className="form-row">
                            <div className="form-group">
                                <label>First name</label>
                                <input type="text" className="form-control" name="firstname" placeholder="First name"
                                       value={firstname} onChange={this.onChange}/>
                            </div>
                            <div className="form-group">
                                <label>Last name</label>
                                <input type="text" className="form-control" name="lastname" placeholder="Last name"
                                       value={lastname} onChange={this.onChange}/>
                            </div>
                            <div className="form-group">
                                <label>Phone</label>
                                <input type="text" className="form-control" name="phone" placeholder="Phone"
                                       value={phone} onChange={this.onChange}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label>Category</label>
                                <select className="custom-select" id="inputGroupCategory" onClick="formRoomsGroup()">
                                    <option value="Luxury">Luxury</option>
                                    <option value="Standard">Standard</option>
                                    <option value="Economy">Economy</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Size</label>
                                <select className="custom-select" id="inputGroupSize" onClick="formRoomsGroup()">
                                    <option value="SGL">SGL</option>
                                    <option value="DBL">DBL</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Room</label>
                                <select className="custom-select" id="inputGroupRoom" name="number" value={number}  onChange={this.onChange}>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="startBooking" className="col-5">Start Booking Date</label>
                            <label htmlFor="finishBooking" className="col-5">Finish Booking Date</label>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <input type="date" className="form-control" id="startBooking"
                                       name="startbooking" value={startbooking}  onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                                <input type="date" className="form-control" id="finishBooking"
                                       name="finishbooking"  value={finishbooking}  onChange={this.onChange}/>
                            </div>
                            <div className="form-group">
                                <button type="submit"
                                        className="btn btn-success" id="addButton">Add
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    }
}

export default BookingForm;