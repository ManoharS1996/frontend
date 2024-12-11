import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li style={styles.navItem}><Link to="/" style={styles.navLink}>Home</Link></li>
        <li style={styles.navItem}><Link to="/about" style={styles.navLink}>About</Link></li>
        <li style={styles.navItem}><Link to="/contact" style={styles.navLink}>Contact</Link></li>
      </ul>
    </nav>
  );
}

const styles = {
  navbar: {
    backgroundColor: '#333',
    padding: '1rem',
    textAlign: 'center',
  },
  navList: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
  },
  navItem: {
    display: 'inline',
    margin: '0 15px',
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '18px',
  },
};

export default Navbar;
