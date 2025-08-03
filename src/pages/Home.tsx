import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { useTheme } from '../context/ThemeContext';
import type { Product } from '../types/Product';
import styles from './Home.module.css';

// Main home page component
const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]); // Product list state
  const [loading, setLoading] = useState(true); // Loading indicator
  const [error, setError] = useState<string | null>(null); // Error message
  const { theme } = useTheme(); // Current theme from context

  // Fetch product data on mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) throw new Error('Failed to fetch products');
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Show loading message
  if (loading) return <div className={styles.loading}>Loading...</div>;

  // Show error message
  if (error) return <div className={styles.error}>{error}</div>;

  // Render product grid
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Our Products</h1>
      <div className={`${styles.productsGrid} ${theme}`}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
