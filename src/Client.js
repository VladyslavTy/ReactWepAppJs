import React from 'react';

class Client extends React.Component{
    render(){
        return <div>
            <tr className="client border border-gray">
                <td className="clientNumber"></td>
                <td className="clientfName"></td>
                <td className="clientsName"></td>
                <td className="clientPhone"></td>
                <td className="clientDate"></td>
                <td className="d-flex col-12">
                    <button type="button" className="btn btn-outline-info btn-sm col-12"
                            onClick="openEditForm(this)">Edit
                    </button>
                </td>
            </tr>
        </div>
    }
}

export default Client;