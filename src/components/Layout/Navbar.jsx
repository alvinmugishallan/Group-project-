import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Rocket, User } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();
  const { user } = useAuth();

  const toggleMenu = () => setIsOpen(!isOpen);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.container}`}>
        <Link to="/" className={styles.logo}>
          <Rocket className={styles.logoIcon} />
          <span>UCU Innovators Hub</span>
        </Link>

        {/* Desktop Menu */}
        <div className={styles.desktopMenu}>
          <Link to="/" className={`${styles.navLink} ${isActive('/') ? styles.active : ''}`}>Home</Link>
          <Link to="/explore" className={`${styles.navLink} ${isActive('/explore') ? styles.active : ''}`}>Explore</Link>

          {user ? (
            <Link to="/dashboard" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <User size={18} />
              <span>Dashboard</span>
            </Link>
          ) : (
            <div className={styles.authButtons}>
              <Link to="/login" className="btn btn-outline">Login</Link>
              <Link to="/register" className="btn btn-primary">Get Started</Link>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button className={styles.mobileToggle} onClick={toggleMenu}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={styles.mobileMenu}>
          <Link to="/" className={styles.mobileLink} onClick={toggleMenu}>Home</Link>
          <Link to="/explore" className={styles.mobileLink} onClick={toggleMenu}>Explore</Link>

          {user ? (
            <Link to="/dashboard" className="btn btn-primary" onClick={toggleMenu}>Dashboard</Link>
          ) : (
            <div className={styles.mobileAuth}>
              <Link to="/login" className="btn btn-outline" onClick={toggleMenu}>Login</Link>
              <Link to="/register" className="btn btn-primary" onClick={toggleMenu}>Get Started</Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
