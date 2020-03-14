const TableHead = () => (
  <thead>
    <tr>
      <th>Country Name</th>
      <th>Capital</th>
      <th>Alpha2Code</th>
    </tr>
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
  </table>
);


export default Table;