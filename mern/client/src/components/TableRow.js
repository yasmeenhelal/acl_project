import React, { Component } from 'react';

export class TableRow extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.flight_from} </td>
        <td>{this.props.flight_to}</td>
        <td>{this.props.flightNum}</td>
        <td>{this.props.flight_date}</td>
        <td>{this.props.cabin}</td>
        <td>{this.props.noSeats}</td>
        <td>{this.props.depTime}</td>
        <td>{this.props.arrTime}</td>
        <td>{this.props.terminal}</td>
      </tr>
    )
  }
}

export default TableRow;
