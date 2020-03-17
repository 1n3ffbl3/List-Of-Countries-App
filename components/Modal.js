import styles from './Modal.module.scss';
import Input from './Input';


const Modal = ({ countryDetails, closeModal })  => (
  <div className={styles.modalWrapper}>
    <h2 className={styles.modalHeader}>Additional Information</h2>
    <Input 
      disabled
      defaultValue={countryDetails.name}
      label='Country name' />
    <Input 
      disabled
      defaultValue={countryDetails.capital}
      label='Capital' />
    <Input 
      disabled
      defaultValue={countryDetails.alpha2Code}
      label='Alpha2code' />
    <Input 
      disabled
      defaultValue={countryDetails.region}
      label='Region' />
    <Input 
      disabled
      defaultValue={countryDetails.population}
      label='Population' />
    <button className={styles.modalButton} onClick={closeModal}>x</button>
  </div>
);

export default Modal;