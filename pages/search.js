import fetch from 'isomorphic-unfetch';
import { Fragment, useEffect, useState } from 'react';

import PaginatedTable from '../components/PaginatedTable';


const SearchCountry = () => {
  const [countryName, setCountryName] = useState(null);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const url = countryName ? `https://restcountries.eu/rest/v2/name/${countryName}` : 'https://restcountries.eu/rest/v2/all';
      const res = await fetch(url);
      const searchedCountries = await res.json();
      
      setCountries(searchedCountries);
    }
    
    fetchData();
  }, [countryName]);

  const handleSearchChange = e => {
    setCountryName(e.target.value);
  }

  return (
    <Fragment>
      <input onChange={(e) => handleSearchChange(e)} />
      <PaginatedTable data={countries}/>
    </Fragment>
  );
};


export default SearchCountry;