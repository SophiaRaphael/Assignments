import React from 'react';

const DataRow = ({data}) => {
  
  const renderDate = (miliseconds) =>{
    var date = new Date(miliseconds);
    return(date.toDateString())
  }

  return (
    <tr>
      <td>{renderDate(data.creationDate)}</td>
      <td>{renderDate(data.lastUpdate)}</td>
      <td>{data.type}</td>
      <td>{data.status}</td>
      <td>{data.message}</td>
      <td><button>View More</button></td>
    </tr>
  );
}

export default DataRow;
