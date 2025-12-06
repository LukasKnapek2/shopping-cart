import React from "react";
import PropTypes from "prop-types";
import styles from "./CartPage.module.css";
import CartItem from "../../Components/CartItem/CartItem";

const CartPage = ({ onRemoveItem, onIncrease, onDecrease, cartItems }) => {
  return (
    <div className={styles.cartPage}>
      CartPage
      <div className={styles.cartItems}>
        {cartItems.map((item, index) => (
          <CartItem
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

CartPage.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  onRemoveItem: PropTypes.func.isRequired,
  onIncrease: PropTypes.func.isRequired,
  onDecrease: PropTypes.func.isRequired,
};

export default CartPage;
