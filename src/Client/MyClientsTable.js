import React from 'react';
import ClientRow from './ClientRow';

class MyClientsTable extends React.Component{
    constructor(){
        super();
        this.state = {
            data: []
        }
    }

    componentDidMount(){
        fetch('http://localhost:4000/clients')
            .then(r => r.json())
            .then(clients => {
                clients.forEach(client=>{
                    let joined = this.state.data.concat(client);
                    this.setState({
                        data: joined
                    })
                })
            })
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
                <th></th>
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