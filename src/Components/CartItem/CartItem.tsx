import React from "react";
import styles from "./CartItem.module.css";
import { CartItem as CartItemType } from "../../types";

type CartItemProps = {
  item: CartItemType;
  onIncrease: (itemToIncrease: CartItemType) => void;
  onDecrease: (itemToDecrease: CartItemType) => void;
  onRemoveItem: (itemToRemove: CartItemType) => void;
};

const CartItem = ({
  item,
  onIncrease,
  onDecrease,
  onRemoveItem,
}: CartItemProps) => {
  return (
    <div className={styles.cartItem}>
      <img className={styles.image} src={item.imageUrl} alt={item.title} />
      <div className={styles.productInfo}>
        <h3 className={styles.title}>{item.title}</h3>
        <p className={styles.price}>${item.price.toFixed(2)}</p>
      </div>
      <div className={styles.quantityControls}>
        <button onClick={() => onDecrease(item)} disabled={item.quantity <= 1}>
          -
        </button>
        <span>{item.quantity}</span>
        <button onClick={() => onIncrease(item)}>+</button>
      </div>
      <button onClick={() => onRemoveItem(item)} className={styles.removeButton}>
        Remove
      </button>
    </div>
  );
};

export default CartItem;
