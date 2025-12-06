import React from "react";
import styles from "./CartItem.module.css";
const CartItem = ({ id, item, onIncrease, onDecrease, onRemoveItem }) => {


  return (
    <div key={id} className={styles.cartItem}>
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

export default CartItem;
