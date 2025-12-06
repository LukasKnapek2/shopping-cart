import React from "react";
import styles from "./ShopPage.module.css";
import ProductCard from "../../Components/ProductCard/ProductCard";
const ShopPage = ({ onAddToCart }) => {
  return (
    <div className={styles.shopPage}>
      <h1>Shop page</h1>
      <div className={styles.productList}>
        <ProductCard
          title="Sample Product"
          price={19.99}
          imageUrl="https://placehold.co/150"
          onAddToCart={onAddToCart}
        />
        {/* Add more ProductCard components as needed */}
      </div>
    </div>
  );
};

export default ShopPage;
