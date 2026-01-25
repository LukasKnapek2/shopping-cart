import React from "react";
import { useState } from "react";
//import PropTypes from "prop-types";
import styles from "./ProductCard.module.css";
type ProductCardProps = {
  title: string;
  price: number;
  imageUrl: string;
  onAddToCart: (productToAdd: { title: string; price: number; imageUrl: string }, quantity: number) => void;
}

const ProductCard = ({ title, price, imageUrl, onAddToCart } : ProductCardProps) => {
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
    onAddToCart({ title, price, imageUrl }, quantityToAdd);
  };

  return (
    <div className={styles.productCard}>
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p>${price.toFixed(2)}</p>

      <div className={styles.controls}>
        <button onClick={decrementQuantity}>-</button>
        <input type="number" value={quantity} onChange={handleQuantityChange} />
        <button onClick={incrementQuantity}>+</button>
      </div>

      <button onClick={handleAddToCart}>Add To Cart</button>
    </div>
  );
};

/* ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  onAddToCart: PropTypes.func.isRequired,
}; */

export default ProductCard;
