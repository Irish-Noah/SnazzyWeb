import { Link, NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';

function NavBar() {
  return (
    <header className={styles.navWrapper}>
      <nav className={styles.navbar}>
        <div className={styles.brand}>
          <NavLink to="/SnazzyWeb/" className={styles.brandLink}>
            Noah
          </NavLink>
        </div>

        <div className={styles.links}>
          <NavLink to="/SnazzyWeb/" className={styles.link}>
            Home
          </NavLink>
          <NavLink to="/SnazzyWeb/resume" className={styles.link}>
            Resume
          </NavLink>
          <NavLink to="/SnazzyWeb/albums" className={styles.link}>
            Albums
          </NavLink>
          <NavLink to="/SnazzyWeb/vehicle-maintenance" className={styles.link}>
            Vehicle
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
