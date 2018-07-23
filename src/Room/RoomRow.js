import React from 'react';

class  RoomRow extends React.Component{

    render(){
        return (
            <tr>
                <td>
                    {this.props.data.number}
                </td>
                <td>
                    {this.props.data.size}
                </td>
                <td>
                    {this.props.data.category}
                </td>
            </tr>
        );
    }
}

export default RoomRow;