import React from 'react';
import {Button, ControlLabel, Form, FormControl, FormGroup} from "react-bootstrap";
import './NewBookingForm.css'
import './BookingForm.css'
import * as ReactDOM from "react-dom";
import axios from "axios/index";
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

class BookingForm extends React.Component{

    constructor(){
        super();
        this.state = {
            firstname: '',
            lastname: '',
            phone: '',
            number: '',
            startbooking: '',
            finishbooking: '',
            isValide: false
        }
    }

    onSubmit = (e) => {
        const { firstname, lastname, phone, number, startbooking, finishbooking } = this.state;
        e.preventDefault();
        this.validateForm();
        if(this.state.isValide){
            axios.post('http://localhost:4000/bookings', { firstname, lastname, number, startbooking, finishbooking});
            axios.post('http://localhost:4000/clients', { firstname, lastname, phone });
            this.createSuccessNotification()
        }
        else{
            this.createErrorNotification();
        }
    };

    createSuccessNotification = () => {
        return NotificationManager.success('Update successful', 'Success!');
    };

    createErrorNotification = () =>{
        return NotificationManager.error('Wrong data', 'Sorry!');
    };

    validateForm() {
        const clientName = ReactDOM.findDOMNode(this._clientName);
        const clientNameError = ReactDOM.findDOMNode(this._clientNameError);
        const clientLName = ReactDOM.findDOMNode(this._clientLName);
        const clientLNameError = ReactDOM.findDOMNode(this._clientLNameError);
        const clientPhone = ReactDOM.findDOMNode(this._clientPhone);
        const clientPhoneError = ReactDOM.findDOMNode(this._clientPhoneError);
        const roomNumber = ReactDOM.findDOMNode(this._roomNumber);
        const roomNumberError = ReactDOM.findDOMNode(this._roomNumberError);
        const bookingStartDate = ReactDOM.findDOMNode(this._bookingStartDate);
        const bookingStartDateError = ReactDOM.findDOMNode(this._bookingStartDateError);
        const bookingFinishDate = ReactDOM.findDOMNode(this._bookingFinishDate);
        const bookingFinishDateError = ReactDOM.findDOMNode(this._bookingFinishDateError);

        this.state.isValide= (this.validate(clientName, /^[A-Za-zА-Яа-я]+$/, clientNameError) &
        this.validate(clientLName, /^[A-Za-zА-Яа-я]+$/, clientLNameError) &
        this.validate(clientPhone, /\d{12}/,clientPhoneError) &
        this.validate(roomNumber, /\d/,roomNumberError) &
        this.validate(bookingStartDate,/\d{1}/,bookingStartDateError) &
        this.validate(bookingFinishDate,/\d{1}/, bookingFinishDateError));
    }

    validate(id, condition, errorField) {
        return (id.value.match(condition)) ? this.successMessage(id, errorField) : this.errorMessage(id, errorField);
    }

    errorMessage(id, errorField) {
        id.style.border = '2px solid red';
        id.value = "";
        errorField.innerText = `${id.name} is invalid`;
        return false;
    }

    successMessage(id, errorField) {
        id.style.border = '2px solid green';
        errorField.innerHTML = '';
        return true;
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    };

    render(){
        return <div className='newClientForm'>
            <Form onSubmit>
                <FormGroup >
                    <ControlLabel>First name</ControlLabel>{' '}
                    <FormControl type="text" onChange={this.onChange} name="firstname" placeholder="Enter your first name..." ref={(node) => { this._clientName = node}} />
                    <div className="firstnameValidField" ref={(node) => { this._clientNameError = node}}> </div>
                    <ControlLabel>Last name</ControlLabel>{' '}
                    <FormControl type="text" onChange={this.onChange} name="lastname" placeholder="Enter your last name..." ref={(node) => { this._clientLName = node}} />
                    <div className="lastnameValidField" ref={(node) => { this._clientLNameError = node}}></div>
                    <ControlLabel>Phone</ControlLabel>{' '}
                    <FormControl type="text" onChange={this.onChange} name="phone" placeholder="Enter your phone..." ref={(node) => { this._clientPhone = node}}/>
                    <div className="phoneValidField" ref={(node) => { this._clientPhoneError = node}}></div>
                </FormGroup>
                <FormGroup className='roomCharacteristics'>
                    <div className='roomCategoty'>
                    <ControlLabel>Category</ControlLabel>
                    <FormControl componentClass="select" onChange={this.onChange} >
                        <option value="Luxury">Luxury</option>
                        <option value="Standard">Standard</option>
                        <option value="Economy">Economy</option>
                    </FormControl>
                    </div>
                    <div className='roomSize'>
                    <ControlLabel>Size</ControlLabel>
                    <FormControl componentClass="select" >
                        <option value="SGL">SGL</option>
                        <option value="DBL">DBL</option>
                    </FormControl>
                    </div>
                    <div className='roomNumber'>
                    <ControlLabel>Room</ControlLabel>
                    <FormControl componentClass="select" name='number' onChange={this.onChange} ref={(node) => { this._roomNumber = node}}>
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
                    </FormControl>
                        <div className="lastnameValidField" ref={(node) => { this._roomNumberError = node}}></div>
                    </div>
                </FormGroup>
                <FormGroup>
                    <ControlLabel>First day of booking</ControlLabel >
                    <FormControl type="date" onChange={this.onChange} name="startbooking" ref={(node) => { this._bookingStartDate = node}}/>
                    <div className="phoneValidField" ref={(node) => { this._bookingStartDateError = node}}></div>
                    <ControlLabel>Last day of booking</ControlLabel>
                    <FormControl type="date" onChange={this.onChange} name="finishbooking" ref={(node) => { this._bookingFinishDate = node}}/>
                    <div className="phoneValidField" ref={(node) => { this._bookingFinishDateError = node}}></div>
                </FormGroup>
                <FormGroup controlId="formInlineName" className="form-group">
                    <Button type="submit" bsStyle="success" onClick={this.onSubmit}>Add</Button>
                </FormGroup>
            </Form>
            <NotificationContainer/>
        </div>
    }
}

export default BookingForm;