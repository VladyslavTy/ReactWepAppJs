import React from 'react';
import axios from 'axios';
import Link from "react-router-dom/es/Link";


class MyClientsTable extends React.Component{
    constructor(){
        super();
        this.state = {
            data: []
        }
    }

    componentDidMount(){
        axios.get('http://localhost:4000/clients')
            .then(r => {
                let data = r.data;
                this.setState({data})
            });
    }

    render(){
        let rows = this.state.data.map(client => {
            return <ClientRow
                key ={
                    client.id
                }
                data = {
                    client
                }

            />
        });

        return <div className="mainTable">
            <table className="table shadow" id="roomsTable">
                <thead className="thead-dark border border-dark">
                <tr>
                <th>#</th>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Phone</th>
                <th>Registration time</th>
                <th>
                </th>
                </tr>
                </thead>
                <tbody id="rooms" className="roomms">
                {rows}
                </tbody>
            </table>
        </div>
    }
}

const ClientRow = (props) => {
        return (
            <tr>
                <td>
                    {props.data.id}
                </td>
                <td>
                    {props.data.firstname}
                </td>
                <td>
                    {props.data.lastname}
                </td>
                <td>
                    {props.data.phone}
                </td>
                <td>
                    {props.data.odate}
                </td>
                <td>
                    <Link to={`/updateclient/${props.data._id}`}>
                        update
                    </Link>
                </td>
            </tr>
        );

}

export default MyClientsTable;