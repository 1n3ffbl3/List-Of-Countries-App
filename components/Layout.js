import Header from './Header';
import styles from './Layout.module.scss';

const Layout = ({ children }) => (
  <div className={styles.layoutWrapper}>
    <Header />
    {children}
  </div>
);


export default Layout;