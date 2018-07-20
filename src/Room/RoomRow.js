import React from 'react';

class  RoomRow extends React.Component{

    handleClick(obj) {

        console.log('Click happened ' + obj);
    }
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