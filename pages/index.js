import fetch from 'isomorphic-unfetch';
import { useState } from 'react';

import Layout from '../components/Layout';
import Table from '../components/Table';
import Modal from '../components/Modal';

const initialPageNumber = 1;

const getPage = (data, pageNumber, recordsPerPage) => {
  const startIndex = (pageNumber - 1) * recordsPerPage;
  return data.slice(startIndex, startIndex + recordsPerPage);
}

const Index = props => {
  const [pageNumber, setPageNumber] = useState(initialPageNumber);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalData, setModalData] = useState(null);

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

  const rowClicked = country => {
    setModalData(country);
    setModalVisible(true);
  }

  const handleCloseModal = () => {
    setModalVisible(false);
  }

  return (
  <Layout>
    <h1>All Countries</h1>
    <Table countries={pagedCountries} onRowClicked={rowClicked}/>
    <button disabled={pageNumber === initialPageNumber} onClick={() => prevPageHandle()}>Previous page</button>
    <button disabled={pageNumber === lastPageNumber} onClick={() => nextPageHandle()}>Next page</button>
    {modalVisible && (
      <Modal countryDetails={modalData} closeModal={handleCloseModal}/>
    )}
  </Layout>
)};


Index.getInitialProps = async function() {
  const res = await fetch('https://restcountries.eu/rest/v2/all');
  const allCountries = await res.json();
  
  return {allCountries};
};


export default Index;