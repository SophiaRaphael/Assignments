import React from 'react';
import DataRow from './DataRow'
import '../../css/style.sass';

const DataTable = ({data}) => {
  return (
    <table className='dataTable'>
      <thead>
        <tr>
          <th>Creation Date</th>
          <th>Last updated Date</th>
          <th>type</th>
          <th>Status</th>
          <th>Msg</th>
          <th>Deatiled Msg</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <DataRow data={item}/>
        ))}
      </tbody>
    </table>
  );
}

export default DataTable;
