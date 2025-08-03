import React from 'react';
import styles from './Contact.module.css';
import { useTheme } from '../context/ThemeContext';

// Displays contact details of the company
const Contact: React.FC = () => {
  const { theme } = useTheme(); // Get current theme

  return (
    <div className={`${styles.container} ${theme}`}>
      <h1>Contact Us</h1>

      <div className={styles.contactInfo}>
        <p>
          <strong>Hipster Pte. Ltd.</strong><br />
          #01-04, 75 Ayer Rajah Crescent<br />
          139953, Singapore
        </p>
        <p>
          <strong>UEN:</strong> 201621408D<br />
          <strong>Phone:</strong> +65 82314107<br />
          <strong>Email:</strong> hr@hipster-inc.com
        </p>
      </div>

      <div className={styles.website}>
        Visit us at: <a href="https://www.hipster-inc.com">www.hipster-inc.com</a>
      </div>
    </div>
  );
};

export default Contact;
