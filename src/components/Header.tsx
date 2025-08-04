import styles from './Header.module.css';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

// Renders the top navigation bar with theme and auth options
const Header = () => {
  const { theme, setTheme } = useTheme();           // Access current theme and updater
  const { currentUser, logout } = useAuth();        // Access auth state and logout function

  return (
    <header className={`${styles.header} ${theme}`}>
      <div className={styles.logo}>MyThemedApp</div> {/* Logo/branding */}

      {/* Navigation links shown unless dark theme is active */}
      {theme !== 'theme2' && (
        <nav className={styles.navLinks}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      )}

      <div className={styles.headerControls}>
        {/* Theme switcher */}
        <div className={styles.themeSelector}>
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value as 'theme1' | 'theme2' | 'theme3')}
            className={styles.select}
          >
            <option value="theme1">Theme 1</option>
            <option value="theme2">Theme 2</option>
            <option value="theme3">Theme 3</option>
          </select>
        </div>

        {/* Show logout button only if user is logged in */}
        {currentUser && (
          <button 
            onClick={logout} 
            className={`${styles.logoutButton} ${theme}`}
          >
            Logout
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
