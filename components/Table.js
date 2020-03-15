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
        color: #ffffff;
        text-align: left;
        background: #060d44;
        padding: 5px;
        text-transform: uppercase;
      }
    `}
    </style>
  </thead>
);

const Table = ({ countries, onRowClicked }) => {
  if (!countries || countries.length === 0) {
    return (
      <table>
        <TableHead/>
        <tbody>
          <tr>
            <td>Table is empty</td>
          </tr>
        </tbody>
      </table>
    )
  }

  return(
    <table>
      <TableHead/>
      <tbody>
        {countries.map((country, idx) => (
          <tr key={idx} onClick={() => onRowClicked(country)}>
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

        table, th, td {
          border: none;
        }
        
      `}
      </style>
    </table>
  );
}


export default Table;