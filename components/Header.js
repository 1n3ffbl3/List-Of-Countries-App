import Link from 'next/link';

import styles from './Header.module.scss';
import { LocalStorageKeys } from '../utils/enum';


const Header = () => {

  const handleCacheToggle = e => {
    const isEnabled = e.target.checked;
    localStorage.setItem(LocalStorageKeys.IS_CACHE_ENABLED, isEnabled);
  };
  
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.menu}>
        <div>List of Countries</div>
        <div>
          <Link href="/">
            <a className={styles.linkStyle}>Home</a>
          </Link>
          <Link href="/eu">
            <a className={styles.linkStyle}>Eu</a>
          </Link>
          <Link href="/search">
            <a className={styles.linkStyle}>Search</a>
          </Link>
        </div>
      </div>
      <div>
        <input type="checkbox" onChange={(e) => handleCacheToggle(e)} /> Caching
      </div>
    </div>
  );
};


export default Header;