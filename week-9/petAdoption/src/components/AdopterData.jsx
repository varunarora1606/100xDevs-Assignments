import React, { Component } from "react";

export class AdopterData extends Component {
  render() {
    const { data, setTablePage } = this.props;
    console.log(data);
    return <div>
      <table style={{width:"100%"}}>
        <tr>
          <th>Pet Name</th>
          <th>Pet Type</th>
          <th>Breed</th>
          <th>Adopter Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
        {data.map(dataInfo => {
          return <tr>
            <td>{dataInfo.petName}</td>
            <td>{dataInfo.petType}</td>
            <td>{dataInfo.breed}</td>
            <td>{dataInfo.adopterName}</td>
            <td>{dataInfo.email}</td>
            <td>{dataInfo.phone}</td>
          </tr>
        })}
      </table>
      <button style={{cursor:'pointer'}} onClick={() => setTablePage(false)}>Go Back</button>
    </div>
  }
}

export default AdopterData;
