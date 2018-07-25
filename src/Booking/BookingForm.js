import React from "react";
import "./BookingForm.css"
import axios from 'axios';
import * as ReactDOM from "react-dom";

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
    };

    onSubmit = (e) => {
        const { firstname, lastname, phone, number, startbooking, finishbooking } = this.state;
        e.preventDefault();
        if (this.validateForm()) {
            axios.post('http://localhost:4000/bookings', { firstname, lastname, number, startbooking, finishbooking});
            axios.post('http://localhost:4000/clients', { firstname, lastname, phone });
        }
        else {
            console.log("Validate problem, bro");
        }
    };

    validateForm() {
        const clientName = ReactDOM.findDOMNode(this._clientName);
        const clientLName = ReactDOM.findDOMNode(this._clientLName);
        const clientPhone = ReactDOM.findDOMNode(this._clientPhone);
        const roomNumber = ReactDOM.findDOMNode(this._roomNumber);
        const bookingStartDate = ReactDOM.findDOMNode(this._bookingStartDate);
        const bookingFinishDate = ReactDOM.findDOMNode(this._bookingFinishDate);
        let allow = false;
        if(this.validate(clientName, /^[A-Za-zА-Яа-я]+$/) &&
            this.validate(clientLName, /^[A-Za-zА-Яа-я]+$/) &&
            this.validate(clientPhone, /\d{12}/) &&
            this.validate(roomNumber, /\d/) &&
            this.validate(bookingStartDate,/\d{1}/) &&
            this.validate(bookingFinishDate,/\d{1}/)){
            allow = true;
        }
        return allow;
    }

    validate(id, condition) {
        return (id.value.match(condition)) ? this.successMessage(id) : this.errorMessage(id);
    }

    errorMessage(id) {
        id.style.border = '2px solid red';
        id.value = "";
        id.placeholder = "Incorrect data";
        return false;
    }

    successMessage(id) {
        id.style.border = '2px solid green';
        return true;
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
                                     ref={(node) => { this._clientName = node}} value={firstname} onChange={this.onChange}/>
                            </div>
                            <div className="form-group">
                                <label>Last name</label>
                                <input type="text" className="form-control" name="lastname" placeholder="Last name"
                                       ref={(node) => { this._clientLName = node}} value={lastname} onChange={this.onChange}/>
                            </div>
                            <div className="form-group">
                                <label>Phone</label>
                                <input type="text" className="form-control" name="phone" placeholder="Phone"
                                       ref={(node) => { this._clientPhone = node}} value={phone} onChange={this.onChange}/>
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
                                <select className="custom-select" ref={(node) => { this._roomNumber = node}} name="number" value={number}  onChange={this.onChange}>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                    <option value="13">13</option>
                                    <option value="14">14</option>
                                    <option value="15">15</option>
                                    <option value="16">16</option>
                                    <option value="17">17</option>
                                    <option value="18">18</option>
                                    <option value="19">19</option>
                                    <option value="20">20</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="startBooking" className="col-5">Start Booking Date</label>
                            <label htmlFor="finishBooking" className="col-5">Finish Booking Date</label>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <input type="date" className="form-control" ref={(node) => { this._bookingStartDate = node}}
                                       name="startbooking" value={startbooking}  onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                                <input type="date" className="form-control" ref={(node) => { this._bookingFinishDate = node}}
                                       name="finishbooking"  value={finishbooking}  onChange={this.onChange}/>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-success" id="addButton"> Add </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    }
}

export default BookingForm;