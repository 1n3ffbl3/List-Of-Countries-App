import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router'

import styles from './Header.module.scss';


const NavItemIds = {
  ALL_COUNTRIES: 1,
  EU_COUNTRIES: 2,
  SEARCH: 3
};

const getNavItemId = path => {
  switch (path) {
    case '/':
      return NavItemIds.ALL_COUNTRIES;
    case '/eu':
      return NavItemIds.EU_COUNTRIES;
    case '/search':
      return NavItemIds.SEARCH;
    default:
      return null;
  }
};

const Header = () => {
  const router = useRouter();
  const initialNavItemId = getNavItemId(router.pathname);
  const [activeNavItemId, setActiveNavItemId] = useState(initialNavItemId);

  const toggleNavItem = id => {
    setActiveNavItemId(id);
  };
  
  return (
    <div className={styles.menuNavigationWrapper}>
      <button className={styles.navItemContainer} onClick={() => toggleNavItem(NavItemIds.ALL_COUNTRIES)}>
        <Link href="/" >
          <a className={activeNavItemId === NavItemIds.ALL_COUNTRIES ? styles.navItemActive : styles.navItem}>All Countries</a>
        </Link>
      </button>
      <button className={styles.navItemContainer} onClick={() => toggleNavItem(NavItemIds.EU_COUNTRIES)}>
        <Link href="/eu" >
          <a className={activeNavItemId === NavItemIds.EU_COUNTRIES ? styles.navItemActive : styles.navItem}>Eu Countries</a>
        </Link>
      </button>
      <button className={styles.navItemContainer} onClick={() => toggleNavItem(NavItemIds.SEARCH)}>
        <Link href="/search" >
          <a className={activeNavItemId === NavItemIds.SEARCH ? styles.navItemActive : styles.navItem}>Search</a>
        </Link>
      </button>
    </div>
  );
};


export default Header;