import fetch from 'isomorphic-unfetch';
import { Fragment } from 'react';

import PaginatedTable from '../components/PaginatedTable';


const Index = ({ allCountries }) => (
  <Fragment>
    <h1>All Countries</h1>
    <PaginatedTable data={allCountries}/>
  </Fragment>
);


Index.getInitialProps = async function() {
  const res = await fetch('https://restcountries.eu/rest/v2/all');
  const allCountries = await res.json();
  
  return {allCountries};
};


export default Index;