import styles from './Header.module.css';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

type HeaderProps = {
  toggleSidebar?: () => void;
};

const Header = ({ toggleSidebar }: HeaderProps) => {
  const { theme, setTheme } = useTheme();
  const { currentUser, logout } = useAuth();

  return (
    <header className={`${styles.header} ${theme}`}>
      <div className={styles.headerTop}>
        <div className={styles.logo}>MyThemedApp</div>

        {/* Show hamburger only for theme2 */}
        {theme === 'theme2' && toggleSidebar && (
          <button className={styles.hamburger} onClick={toggleSidebar}>
            ☰
          </button>
        )}
      </div>

      {/* Show nav links only for non-theme2 */}
      {theme !== 'theme2' && (
        <nav className={styles.navLinks}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      )}

      <div className={styles.headerControls}>
        {/* Theme selection dropdown */}
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

        {/* Show logout if user is logged in */}
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
