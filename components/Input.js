import styles from './Input.module.scss';


const Input = ({ value, label, onChange }) => (
  <div className={styles.inputWrapper}>
    <input
      className={styles.input}
      placeholder=' '
      value={value}
      onChange={onChange} />
    <label className={styles.label}>
      {label}
    </label>
    <div className={styles.inputBar} />
  </div>
);


export default Input;