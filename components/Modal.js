import styles from './Modal.module.scss';
import Input from './Input';


const Modal = ({ countryDetails, closeModal })  => (
  <div className={styles.modalWrapper}>
    <h2 className={styles.modalHeader}>Additional Information</h2>
    <Input 
      disabled
      value={countryDetails.name}
      label='Country name' />
    <Input 
      disabled
      value={countryDetails.capital}
      label='Capital' />
    <Input 
      disabled
      value={countryDetails.alpha2Code}
      label='Alpha2code' />
    <Input 
      disabled
      value={countryDetails.region}
      label='Region' />
    <Input 
      disabled
      value={countryDetails.population}
      label='Population' />
    <button className={styles.modalButton} onClick={closeModal}>x</button>
  </div>
);

export default Modal;