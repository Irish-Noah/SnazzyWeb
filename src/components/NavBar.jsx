import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';

function NavBar() {
  return (
    <nav className={styles.navbar}>
      <Link to="/SnazzyWeb/" className={styles.link}>Home</Link>
      <Link to="/SnazzyWeb/resume" className={styles.link}>Resume</Link>
      <Link to="/SnazzyWeb/albums" className={styles.link}>Album Tracker 2025</Link>
      <Link to="/SnazzWeb/vehicle-maintenance" className={styles.link}>BMW Maintenance History</Link>
    </nav>
  );
}

export default NavBar;
