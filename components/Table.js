const TableHead = () => (
  <thead>
    <tr>
      <th>Country Name</th>
      <th>Capital</th>
      <th>Alpha2Code</th>
    </tr>
    <style jsx>{`
      thead th {
        font-size : 17px;
        font-weight: bold;
        color: #fcc802;
        text-align: left;
        background: #060d44;
        padding: 5px;
        text-transform: uppercase;
        border-left: none;
      }
    `}
    </style>
  </thead>
);


const Table = props => (
  <table>
    <TableHead/>
    <tbody>
      {props.countries.map(country => (
        <tr>
          <td>{country.name}</td>
          <td>{country.capital}</td>
          <td>{country.alpha2Code}</td>
        </tr>
      ))}
    </tbody>
    <style jsx>{`
      table {
        font-family: Arial, Helvetica, sans-serif;
        text-align: left;
        width: 100%;
      }

      td {
        padding: 5px;
      }

      tr:nth-child(even) {
        background: #ebf4ef;
      }
      
    `}
    </style>
  </table>
);


export default Table;