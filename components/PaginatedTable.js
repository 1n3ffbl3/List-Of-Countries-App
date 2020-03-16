import { Fragment, useState } from 'react';

import Table from '../components/Table';
import Modal from '../components/Modal';


const initialPageNumber = 1;

const getPage = (data, pageNumber, recordsPerPage) => {
  const startIndex = (pageNumber - 1) * recordsPerPage;
  return data.slice(startIndex, startIndex + recordsPerPage);
}

const PaginatedTable = ({ data, recordsPerPage = 20 }) => {
  const [pageNumber, setPageNumber] = useState(initialPageNumber);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalData, setModalData] = useState(null);

  const countries = data ? data : [];
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
  <Fragment>
    <Table countries={pagedCountries} onRowClicked={rowClicked}/>
    <button disabled={pageNumber === initialPageNumber} onClick={() => prevPageHandle()}>Previous page</button>
    <button disabled={pageNumber === lastPageNumber} onClick={() => nextPageHandle()}>Next page</button>
    {modalVisible && (
      <Modal countryDetails={modalData} closeModal={handleCloseModal}/>
    )}
  </Fragment>
)};


export default PaginatedTable;