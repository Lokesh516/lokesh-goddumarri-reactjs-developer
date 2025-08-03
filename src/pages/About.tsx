import React from 'react';
import styles from './About.module.css';
import { useTheme } from '../context/ThemeContext';

// Displays information about the app and its features
const About: React.FC = () => {
  const { theme } = useTheme(); // Access current theme

  return (
    <div className={`${styles.container} ${theme}`}>
      <h1>About Us</h1>

      <p>
        Welcome to our themed application! This demo showcases a fully responsive 
        React application with three distinct themes.
      </p>

      <div className={styles.features}>
        <h2>Features:</h2>
        <ul>
          <li>Theme switching with persistence</li>
          <li>Responsive design</li>
          <li>Product listing from API</li>
          <li>Animated transitions</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
