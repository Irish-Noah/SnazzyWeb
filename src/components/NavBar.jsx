import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';

function NavBar() {
  return (
    <nav className={styles.navbar}>
      <Link to="/SnazzyWeb/" className={styles.link}>Home</Link>
      <Link to="/SnazzyWeb/resume" className={styles.link}>Resume</Link>
    </nav>
  );
}

export default NavBar;
