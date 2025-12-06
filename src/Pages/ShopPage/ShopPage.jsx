import React, { useState, useEffect } from "react";
import styles from "./ShopPage.module.css";
import ProductCard from "../../Components/ProductCard/ProductCard";

const ShopPage = ({ onAddToCart }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []); // Empty dependency array means this effect runs once on mount

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className={styles.shopPage}>
      <h1>Shop page</h1>
      <div className={styles.productList}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
            imageUrl={product.image} // The API uses 'image' not 'imageUrl'
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
