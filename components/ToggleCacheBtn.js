import { useState, useEffect } from 'react';

import styles from './ToggleCacheBtn.module.scss';
import { LocalStorageKeys } from '../utils/enum';


const ToggleCacheBtn = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleBtnColor = isChecked ? styles.toggleBtn : styles.toggleBtnOff;

  useEffect(() => {
    const isCacheEnabled = localStorage.getItem(LocalStorageKeys.IS_CACHE_ENABLED);
    setIsChecked(isCacheEnabled === 'true');
  }, []);

  const handleCacheToggle = () => {
    localStorage.setItem(LocalStorageKeys.IS_CACHE_ENABLED, !isChecked);
    setIsChecked(!isChecked);
  };

  return(
    <div className={styles.toggleBtnContainer}>
      <button className={toggleBtnColor} type="button" onClick={handleCacheToggle}>
        {isChecked ? 'Caching on' : 'Caching off'}
      </button>
    </div>
  );
};

export default ToggleCacheBtn;