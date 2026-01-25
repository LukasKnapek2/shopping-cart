import React from "react";
import { useState } from "react";
import styles from "./ProductCard.module.css";
import { Product, AddToCartHandler } from "../../types";

type ProductCardProps = {
  product: Product;
  onAddToCart: AddToCartHandler;
};

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  const [quantity, setQuantity] = useState<number | string>(1);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "") {
      setQuantity("");
    } else {
      const newQuantity = parseInt(value, 10);
      if (newQuantity >= 1) {
        setQuantity(newQuantity);
      }
    }
  };

  const incrementQuantity = () =>
    setQuantity((prevQuantity) => (Number(prevQuantity) || 0) + 1);
  const decrementQuantity = () =>
    setQuantity((prevQuantity) => Math.max(1, (Number(prevQuantity) || 0) - 1));

  const handleAddToCart = () => {
    const quantityToAdd = Number(quantity) >= 1 ? Number(quantity) : 1;
    onAddToCart(product, quantityToAdd);
  };

  return (
    <div className={styles.productCard}>
      <img src={product.image} alt={product.title} className={styles.productImage} />
      <h3>{product.title}</h3>
      <p>${product.price.toFixed(2)}</p>

      <div className={styles.controls}>
        <button onClick={decrementQuantity}>-</button>
        <input type="number" value={quantity} onChange={handleQuantityChange} />
        <button onClick={incrementQuantity}>+</button>
      </div>

      <button onClick={handleAddToCart}>Add To Cart</button>
    </div>
  );
};

export default ProductCard;
