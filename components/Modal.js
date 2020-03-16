import styles from './Modal.module.scss';


const Modal = ({ countryDetails, closeModal })  => {
  return (
    <div className={styles.modalWrapper}>
      <h2>Additional Info</h2>
      <p>Country name : {countryDetails.name}</p>
      <p>Capital : {countryDetails.capital}</p>
      <p>Alpha2code : {countryDetails.alpha2Code}</p>
      <p>Region : {countryDetails.region} </p>
      <p>Population : {countryDetails.population} </p>
      <button className={styles.modalButton} onClick={closeModal}>x</button>
    </div>
  );
};

export default Modal;