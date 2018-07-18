import React from 'react';

class MyRoomsTable extends React.Component {
    constructor(){
        super();
        this.state = {
           data: []
        }
    }

    componentDidMount(){
        fetch('http://localhost:3001/rooms')
            .then(r => r.json())
            .then(rooms => {
                rooms.forEach(room=>{
                    let joined = this.state.data.concat(room);
                    this.setState({
                        data: joined
                    })
                })
            })
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

const RoomRow = (props) => {
    return (
        <tr>
            <td>
                {props.data.id}
            </td>
            <td>
                {props.data.type}
            </td>
            <td>
                {props.data.category}
            </td>
        </tr>
    );
};

export default MyRoomsTable;