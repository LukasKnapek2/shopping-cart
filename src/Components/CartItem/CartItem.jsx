import React from "react";
import PropTypes from "prop-types";
import styles from "./CartItem.module.css";
const CartItem = ({ item, onIncrease, onDecrease, onRemoveItem }) => {
  return (
    <div className={styles.cartItem}>
      <img src={item.imageUrl} alt={item.title} />
      <h3>{item.title}</h3>
      <p>${item.price.toFixed(2)}</p>
      <p>Quantity: {item.quantity}</p>
      <button onClick={() => onIncrease(item)}>+</button>
      <button onClick={() => onDecrease(item)}>-</button>
      <button onClick={() => onRemoveItem(item)}>Remove</button>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
  onIncrease: PropTypes.func.isRequired,
  onDecrease: PropTypes.func.isRequired,
  onRemoveItem: PropTypes.func.isRequired,
};

export default CartItem;
