import React from  'react';
import {Button, ControlLabel, Form, FormControl, FormGroup} from "react-bootstrap";
import './UpdateClientForm.css';
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
        axios.patch(`http://localhost:4000/clients/${this.props.match.params.id}`,this.state)
            .then(r => r.json())
    };

    render(){
        return <div className="updateClientForm">
            <Form horizontal onSubmit={this.updateInfo} >
                <FormGroup controlId="formInlineName" >
                    <ControlLabel>First name</ControlLabel>{' '}
                    <FormControl type="text" placeholder={`${this.state.firstname}`} onChange={this.onChange} name="firstname"/>

                </FormGroup>
                <FormGroup controlId="formInlineName" className="form-group">
                    <ControlLabel>Last name</ControlLabel>{' '}
                    <FormControl type="text" placeholder={`${this.state.lastname}`} onChange={this.onChange} name="lastname" >

                    </FormControl>
                </FormGroup>
                <FormGroup controlId="formInlineName" className="form-group">
                    <ControlLabel>Phone</ControlLabel>{' '}
                    <FormControl type="text" placeholder={`${this.state.phone}`} onChange={this.onChange} name="phone"/>
                </FormGroup>
                <FormGroup controlId="formInlineName" className="form-group">
                    <Button type="submit" bsStyle="success">Update</Button>
                </FormGroup>
            </Form>
        </div>
    }
}

export default UpdateClientForm;