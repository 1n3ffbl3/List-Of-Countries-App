import fetch from 'isomorphic-unfetch';
import { useState } from 'react';

import Layout from '../components/Layout';
import Table from '../components/Table';

const initialPageNumber = 1;

const getPage = (data, pageNumber, recordsPerPage) => {
  const startIndex = (pageNumber - 1) * recordsPerPage;
  return data.slice(startIndex, startIndex + recordsPerPage);
}

const Index = props => {
  const [pageNumber, setPageNumber] = useState(initialPageNumber);
  const recordsPerPage = 20;
  const countries = props.allCountries ? props.allCountries : [];
  const lastPageNumber = Math.ceil((countries.length-1)/recordsPerPage);

  let pagedCountries = getPage(countries, pageNumber, recordsPerPage);

  const prevPageHandle = () => {
    setPageNumber(pageNumber - 1);
  }

  const nextPageHandle = () => {
    setPageNumber(pageNumber + 1);
  }

  return (
  <Layout>
    <h1>All Countries</h1>
    <Table countries={pagedCountries} />
    <button disabled={pageNumber === initialPageNumber} onClick={() => prevPageHandle()}>Previous page</button>
    <button disabled={pageNumber === lastPageNumber} onClick={() => nextPageHandle()}>Next page</button>
  </Layout>
)};


Index.getInitialProps = async function() {
  const res = await fetch('https://restcountries.eu/rest/v2/all');
  const allCountries = await res.json();
  
  return {allCountries};
};


export default Index;