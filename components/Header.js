import Link from 'next/link';

import styles from './Header.module.scss';


const Header = () => (
  <div>
    <h1>List of Countries</h1>
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
);


export default Header;