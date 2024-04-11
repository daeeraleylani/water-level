import React from 'react';

const WaterLevelTable = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Fecha</th>
          <th>Nivel de agua</th>
        </tr>
      </thead>
      <tbody>
        {data.map((record) => (
          <tr key={record.id}>
            <td>{record.date}</td>
            <td>{record.waterLevel}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default WaterLevelTable;
