import React from "react";
import "./BookingForm.css"


class BookingForm extends React.Component{

    render(){
        return <div>
            <div className="booking-container">
                <div className="booking-form border">
                    <form className="form">

                        <div className="form-row">
                            <div className="form-group">
                                <label>First name</label>
                                <input type="text" className="form-control" id="firstname" placeholder="First name"/>
                            </div>
                            <div className="form-group">
                                <label>Last name</label>
                                <input type="text" className="form-control" id="lastname" placeholder="Last name"/>
                            </div>
                            <div className="form-group">
                                <label>Phone</label>
                                <input type="text" className="form-control" id="phone" placeholder="Phone"/>
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
                                <select className="custom-select" id="inputGroupRoom">
                                </select>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="startBooking" className="col-5">Start Booking Date</label>
                            <label htmlFor="finishBooking" className="col-5">Finish Booking Date</label>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <input type="date" className="form-control" id="startBooking"/>
                            </div>
                            <div className="form-group">
                                <input type="date" className="form-control" id="finishBooking"/>
                            </div>
                            <div className="form-group">
                                <button type="submit" onClick="registration();/**///createClient(); createBooking() "
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