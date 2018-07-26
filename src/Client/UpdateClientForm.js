import React from  'react';
import {Button, ControlLabel, Form, FormControl, FormGroup} from "react-bootstrap";
import './UpdateClientForm.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import axios from "axios/index";

class UpdateClientForm extends React.Component{

    constructor(){
        super();
        this.state = {
                firstname: '',
                lastname: '',
                phone: ''
        }
    }

    componentDidMount(){
        axios.get(`http://localhost:4000/clients/${this.props.match.params.id}`)
            .then(r => {
                let data = r.data;
                this.setState(data)
            });
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    updateInfo = (e) => {
        e.preventDefault();
        axios.patch(`http://localhost:4000/clients/${this.props.match.params.id}`,this.state);
    };

    createSuccessNotification = () => {
        return NotificationManager.success('Update successful', 'Success!');
    };


    render(){

        return <div>
        <div className="updateClientForm">
            <Form onSubmit={this.updateInfo} >
                <FormGroup controlId="formInlineName" >
                    <ControlLabel>First name</ControlLabel>{' '}
                    <FormControl type="text" value={`${this.state.firstname}`} onChange={this.onChange} name="firstname"/>
                </FormGroup>
                <FormGroup controlId="formInlineName" className="form-group">
                    <ControlLabel>Last name</ControlLabel>{' '}
                    <FormControl type="text" value={`${this.state.lastname}`} onChange={this.onChange} name="lastname" >

                    </FormControl>
                </FormGroup>
                <FormGroup controlId="formInlineName" className="form-group">
                    <ControlLabel>Phone</ControlLabel>{' '}
                    <FormControl type="text" value={`${this.state.phone}`} onChange={this.onChange} name="phone"/>
                </FormGroup>
                <FormGroup controlId="formInlineName" className="form-group">
                    <Button type="submit" bsStyle="success" onClick={this.createSuccessNotification}>Update</Button>
                </FormGroup>
            </Form>
        </div>
            <NotificationContainer/>
        </div>
    }
}

export default UpdateClientForm;