import React from 'react';
import styles from './ProductCard.module.css';
import { useTheme } from '../context/ThemeContext';
import type { Product } from '../types/Product';

// Card component to show individual product information
const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const { theme } = useTheme(); // Get current theme from context

  // Logs product view action (can be replaced with navigation)
  const handleButtonClick = () => {
    console.log('Product viewed:', product.title);
    // TODO: Navigate to product detail view
  };

  return (
    <div className={`${styles.card} ${theme}`}>
      {/* Display product image */}
      <img 
        src={product.image} 
        alt={product.title} 
        className={styles.image}
      />
      
      {/* Product name */}
      <h3 className={styles.title}>{product.title}</h3>
      
      {/* Price formatted with 2 decimals */}
      <p className={styles.price}>${product.price.toFixed(2)}</p>
      
      {/* Shortened description */}
      <p className={styles.description}>
        {product.description.substring(0, 60)}...
      </p>
      
      {/* Button to trigger detail view */}
      <button 
        className={`${styles.button} ${theme}`}
        onClick={handleButtonClick}
      >
        View Details
      </button>
    </div>
  );
};

export default ProductCard;
