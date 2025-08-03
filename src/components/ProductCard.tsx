import React from 'react';
import styles from './ProductCard.module.css';
import { useTheme } from '../context/ThemeContext';
import type { Product } from '../types/Product';

// Displays a single product card with image, title, price, and description
const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const { theme } = useTheme(); // Apply current theme styling

  // Handles click event for the 'View Details' button
  const handleButtonClick = () => {
    console.log('Product viewed:', product.title);
    // TODO: Implement navigation to product details page
  };

  return (
    <div className={styles.cardWrapper}>
      <div className={`${styles.card} ${theme}`}>
        {/* Product image */}
        <img 
          src={product.image} 
          alt={product.title} 
          className={styles.image}
        />

        {/* Product title */}
        <h3 className={styles.title}>{product.title}</h3>

        {/* Product price formatted to 2 decimal places */}
        <p className={styles.price}>${product.price.toFixed(2)}</p>

        {/* Shortened product description */}
        <p className={styles.description}>
          {product.description.substring(0, 60)}...
        </p>

        {/* Button to view more details */}
        <button 
          className={`${styles.button} ${theme}`}
          onClick={handleButtonClick}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
