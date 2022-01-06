import React, { Component } from "react";
import axios from 'axios';

export default class HomePage extends Component {


  // This following section will display the table with the records of individuals.
  render() {
    return (
      <div>
        <h3>Record List</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>FROM</th>
              <th>TO</th>
              <th>FLIGHT NO.</th>
              <th>DATE</th>
              <th>CABIN</th>
              <th>AVAILABLE SEATS</th>
              <th>DEPARTURE TIME</th>
              <th>ARRIVAL</th>
              <th>TERMINAL</th>
            </tr>
          </thead>
          <tbody>{this.recordList()}</tbody>
        </table>
      </div>
    );
  }
}
