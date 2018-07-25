import React from 'react';
import ClientRow from './ClientRow';
import axios from 'axios';


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

export default MyClientsTable;