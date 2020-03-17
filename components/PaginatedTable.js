import { Fragment, useState } from 'react';

import Table from '../components/Table';
import Modal from '../components/Modal';
import styles from './PaginatedTable.module.scss';


const initialPageNumber = 1;

const getPage = (data, pageNumber, recordsPerPage) => {
  if (!data || data.length === 0) {
    return [];
  }
  const startIndex = (pageNumber - 1) * recordsPerPage;
  return data.slice(startIndex, startIndex + recordsPerPage);
}

const createTableOfSize = size => {
  return Array.from({ length: size }, (_, i) => i+1)
}

const getPageSelectors = (pageNumber, lastPageNumber) => {
  const maxPaginators = 3;
  const hasAtLeastThreePages = lastPageNumber - 3 >= 0

  if (pageNumber === initialPageNumber) {
    return hasAtLeastThreePages ? 
      createTableOfSize(lastPageNumber).splice(0, maxPaginators) : 
      createTableOfSize(lastPageNumber);
  } else if (pageNumber === lastPageNumber) {
    return hasAtLeastThreePages ? 
      createTableOfSize(lastPageNumber).splice(lastPageNumber - maxPaginators, maxPaginators) : 
      createTableOfSize(lastPageNumber);
  } else {
    // Get previous, current and next page numbers
    return createTableOfSize(lastPageNumber).splice(pageNumber - 2, maxPaginators);
  }
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

  const pageSelectors = getPageSelectors(pageNumber, lastPageNumber);

  return (
    <Fragment>
      <Table countries={pagedCountries} onRowClicked={rowClicked}/>
      <div className={styles.pagination}>
        <button disabled={pageNumber === initialPageNumber} onClick={() => prevPageHandle()}>&laquo;</button>
        {
          pageSelectors.map((activePage, index) => {
            return (
              <button className={(pageNumber === activePage ? styles.active : '')} onClick={() => setPageNumber(activePage)} key={index}>
                {activePage}
              </button>
            )
          })
        }
        <button disabled={pageNumber === lastPageNumber} onClick={() => nextPageHandle()}>&raquo;</button>
      </div>
      
      {modalVisible && (
        <Modal countryDetails={modalData} closeModal={handleCloseModal}/>
      )}
    </Fragment>
  );
};


export default PaginatedTable;