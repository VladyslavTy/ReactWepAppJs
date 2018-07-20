import React from 'react';

class ClientRow extends React.Component{

    render(){
        return (
            <tr>
                <td>
                    {this.props.data.id}
                </td>
                <td>
                    {this.props.data.firstname}
                </td>
                <td>
                    {this.props.data.lastname}
                </td>
                <td>
                    {this.props.data.phone}
                </td>
                <td>
                    {this.props.data.odate}
                </td>
            </tr>
        );
    }
}

export default ClientRow;