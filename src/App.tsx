import { Routes, Route, Navigate, Link, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import { useTheme } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import styles from './App.module.css';

const App = () => {
  const { theme } = useTheme(); // Get current theme from context

  return (
    <AuthProvider> {/* Provides authentication to the app */}
      <div className={theme}> {/* Root wrapper with theme class */}
        <Routes>
          {/* Public route */}
          <Route path="/login" element={<Login />} />
          
          {/* Protected routes */}
          <Route element={<ProtectedRoute />}>
            <Route element={<LayoutWithHeader />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Route>
          </Route>

          {/* Redirect unknown routes */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </AuthProvider>
  );
};

// Layout component with header and optional sidebar
const LayoutWithHeader = () => {
  const { theme } = useTheme();

  return (
    <>
      <Header /> {/* Shared header */}
      <div className={styles.layoutContainer}>
        {/* Sidebar visible only in theme2 */}
        {theme === 'theme2' && (
          <aside className={styles.sidebar}>
            <nav className={styles.sidebarNav}>
              <Link to="/" className={styles.sidebarLink}>Home</Link>
              <Link to="/about" className={styles.sidebarLink}>About</Link>
              <Link to="/contact" className={styles.sidebarLink}>Contact</Link>
            </nav>
          </aside>
        )}
        {/* Main content area */}
        <main className={theme === 'theme2' ? styles.mainWithSidebar : styles.main}>
          <Outlet /> {/* Render active child route */}
        </main>
      </div>
    </>
  );
};

export default App;
