import React from 'react';
import {Link} from "react-router-dom";

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
                <td>
                    <Link to={`/updateclient/${this.props.data._id}`}

                    >
                        update
                    </Link>
                </td>
            </tr>
        );
    }
}




export default ClientRow;