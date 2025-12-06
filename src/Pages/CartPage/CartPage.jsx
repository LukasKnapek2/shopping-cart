import React from "react";
import styles from "./CartPage.module.css";
import CartItem from "../../Components/CartItem/CartItem";

const CartPage = ({ onRemoveItem, onIncrease, onDecrease, cartItems }) => {
  return (
    <div className={styles.cartPage}>
      CartPage
      <div className={styles.cartItems}>
        {cartItems.map((item, index) => (
          <CartItem
            key={index}
            item={item}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onRemoveItem={onRemoveItem}
          />
        ))}
      </div>
    </div>
  );
};

export default CartPage;
