import React from 'react';


class MyClientsTable extends React.Component{
    constructor(){
        super();
        this.state = {
            data: []
        }
    }

    componentDidMount(){
        fetch('http://localhost:3001/clients')
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
                <th>#</th>
                <th>Firstname</th>
                <th>Secondname</th>
                <th>Phone</th>
                <th>Registration time</th>
                <th></th>
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
                {props.data.secondname}
            </td>
            <td>
                {props.data.phone}
            </td>
            <td>
                {props.data.odate}
            </td>
        </tr>
    );
};

export default MyClientsTable;