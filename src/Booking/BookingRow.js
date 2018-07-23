import React from 'react';

class BookingRow extends React.Component{

    onDelEvent() {
        this.props.onDelEvent(this.props.data);
    }

    render(){
        return (
            <tr>
                <td>
                    {this.props.data.id}
                </td>
                <td>
                    {this.props.data.firstname + ' ' + this.props.data.lastname}
                </td>
                <td>
                    {this.props.data.number}
                </td>
                <td>
                    {this.props.data.startbooking}
                </td>
                <td>
                    {this.props.data.finishbooking}
                </td>
                <td>
                    <button type="button" className="btn" id="deleteBooking"
                            onClick={this.onDelEvent.bind(this)} >
                        Delete
                    </button>
                </td>
            </tr>
        );
    }
}

export default BookingRow;