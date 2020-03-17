import styles from './Input.module.scss';


const Input = ({ value, label, defaultValue, onChange }) => (
  <div className={styles.inputWrapper}>
    <input
      className={styles.input}
      placeholder=' '
      value={value}
      defaultValue={defaultValue}
      onChange={onChange} />
    <label className={styles.label}>
      {label}
    </label>
    <div className={styles.inputBar} />
  </div>
);


export default Input;