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
import { useState } from 'react';

const App = () => {
  const { theme } = useTheme(); // Get current theme from context

  return (
    <AuthProvider> {/* Provides authentication context to the app */}
      <div className={theme}> {/* Root element with current theme class */}
        <Routes>
          {/* Public login route */}
          <Route path="/login" element={<Login />} />

          {/* Protected routes wrapper */}
          <Route element={<ProtectedRoute />}>
            {/* Layout with header and optional sidebar */}
            <Route element={<LayoutWithHeader />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Route>
          </Route>

          {/* Catch-all route redirects to Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </AuthProvider>
  );
};

// Layout component containing Header and optional sidebar for theme2
const LayoutWithHeader = () => {
  const { theme } = useTheme();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggles sidebar visibility (only for theme2)
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <>
      {/* Top navigation bar with hamburger toggle */}
      <Header toggleSidebar={toggleSidebar} />

      <div className={styles.layoutContainer}>
        {/* Sidebar shown only in theme2 when open */}
        {theme === 'theme2' && isSidebarOpen && (
          <aside className={styles.sidebar}>
            <nav className={styles.sidebarNav}>
              <Link to="/" className={styles.sidebarLink}>Home</Link>
              <Link to="/about" className={styles.sidebarLink}>About</Link>
              <Link to="/contact" className={styles.sidebarLink}>Contact</Link>
            </nav>
          </aside>
        )}

        {/* Main content area; adjusts layout based on sidebar state */}
        <main
          className={
            theme === 'theme2' && isSidebarOpen
              ? styles.mainWithSidebar
              : styles.main
          }
        >
          <Outlet /> {/* Renders matched child route */}
        </main>
      </div>
    </>
  );
};

export default App;
