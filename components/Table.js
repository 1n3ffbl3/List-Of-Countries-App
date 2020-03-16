import styles from './Table.module.scss';


const TableHead = () => (
  <thead className={styles.countryTableHead}>
    <tr>
      <th>Country Name</th>
      <th>Capital</th>
      <th>Alpha2Code</th>
    </tr>
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
    <table className={styles.countryTable}>
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
    </table>
  );
}


export default Table;