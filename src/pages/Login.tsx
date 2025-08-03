import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import styles from './Login.module.css';

const Login = () => {
  // State for form inputs and error message
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Access login function from auth context
  const { login } = useAuth();

  // Set theme and navigation
  const { setTheme } = useTheme();
  const navigate = useNavigate();

  // On component mount, enforce theme1 and apply corresponding body class
  useEffect(() => {
    setTheme('theme1');
    document.body.className = 'theme1';
  }, [setTheme]);

  // Handle login form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(email, password)) {
      navigate('/');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className={styles.loginWrapper}>
      <div className={styles.loginContainer}>
        <h2 className={styles.loginHeading}>Login</h2>

        {/* Display error message if any */}
        {error && <div className={styles.error}>{error}</div>}

        {/* Login form */}
        <form onSubmit={handleSubmit} className={styles.loginForm}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={styles.inputField}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className={styles.inputField}
          />

          <button type="submit" className={styles.loginButton}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
