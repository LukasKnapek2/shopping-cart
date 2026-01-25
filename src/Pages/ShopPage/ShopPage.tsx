import React, { useState, useEffect } from "react";
//import PropTypes from "prop-types";
import styles from "./ShopPage.module.css";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { CartItem } from "../../types";
import { Product } from "../../types";
type ShopPageProps = {
onAddToCart: (productToAdd: { title: string; price: number; imageUrl: string }, quantity: number) => void;
}

const ShopPage = ({ onAddToCart }: ShopPageProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
console.log(products)
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: Product[]= await response.json();
        setProducts(data);

      } catch (e) {
        if (e instanceof Error) {
        setError(e);
      }

      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []); // Empty dependency array means this effect runs once on mount

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

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

/* ShopPage.propTypes = {
  onAddToCart: PropTypes.func.isRequired,
};
 */
export default ShopPage;


