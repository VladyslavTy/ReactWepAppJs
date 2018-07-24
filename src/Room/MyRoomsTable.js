import React from 'react';
import RoomRow from "./RoomRow";
import axios from 'axios';

class MyRoomsTable extends React.Component {
    constructor(){
        super();
        this.state = {
           data: []
        }
    }

    componentDidMount(){
        axios.get('http://localhost:4000/rooms')
            .then(r => {
                let data = r.data;
                this.setState({data})
            });
    }

    render() {
        let rows = this.state.data.map(room => {
        return <RoomRow
            key ={
                room.id
    }
            data = {
                room
                    }
        />

    });
        return <div className="mainTable">
            <table className="table shadow" id="roomsTable">
                <thead className="thead-dark border border-dark">
                    <th>Number</th>
                    <th>Size</th>
                    <th>Category</th>
                </thead>
                <tbody id="rooms" className="roomms">
                {rows}
                </tbody>
            </table>
        </div>

    }
}
/*
const RoomRow = (props) => {
    return (
        <tr>
            <td>
                {props.data.number}
            </td>
            <td>
                {props.data.size}
            </td>
            <td>
                {props.data.category}
            </td>
        </tr>
    );
};*/

export default MyRoomsTable;