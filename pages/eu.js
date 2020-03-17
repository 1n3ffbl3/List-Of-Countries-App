import fetch from 'isomorphic-unfetch';
import { Fragment } from 'react';

import PaginatedTable from '../components/PaginatedTable';


const EuCountries = ({ euCountries }) => (
  <Fragment>
    <h2>EU Countries</h2>
    <PaginatedTable data={euCountries}/>
  </Fragment>
);


EuCountries.getInitialProps = async function() {
  const res = await fetch('https://restcountries.eu/rest/v2/regionalbloc/eu?fields=name;capital;alpha2Code;region;population');
  const euCountries = await res.json();

  return {euCountries};
};


export default EuCountries;