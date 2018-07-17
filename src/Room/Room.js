import React from 'react';

class Room extends React.Component{
    render(){
        return <div>
            <tr className="room border border-gray" onClick="roomBooking(this)">
                <td className="roomNumber"></td>
                <td className="room-size"></td>
                <td className="room-category"></td>
            </tr>
        </div>
    }
}