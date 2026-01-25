import React from "react";
//import PropTypes from "prop-types";
import styles from "./CartPage.module.css";
import CartItem from "../../Components/CartItem/CartItem";
import { CartItem as CartItemType } from "../../types";
import { Link } from "react-router-dom";

type CartPageProps = {
  cartItems: CartItemType[];
  onRemoveItem: (itemToRemove: CartItemType) => void;
  onIncrease: (itemToIncrease: CartItemType) => void;
  onDecrease: (itemToDecrease: CartItemType) => void;
};
const CartPage = ({
  onRemoveItem,
  onIncrease,
  onDecrease,
  cartItems,
}: CartPageProps) => {
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className={styles.cartPage}>
      <h1>Shopping Cart</h1>
      <div className={styles.mainContent}>
        <div className={styles.cartItems}>
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <CartItem
                item={item}
                key={item.id}
                onIncrease={onIncrease}
                onDecrease={onDecrease}
                onRemoveItem={onRemoveItem}
              />
            ))
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>
        {cartItems.length > 0 && (
          <div className={styles.summary}>
            <h2>Order Summary</h2>
            <div className={styles.summaryRow}>
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className={styles.summaryRow}>
              <span>Shipping</span>
              <span>$5.00</span>
            </div>
            <div className={styles.summaryRow}>
              <strong>Total</strong>
              <strong>${(subtotal + 5).toFixed(2)}</strong>
            </div>
            <button className={styles.checkoutButton}>
              Proceed to Checkout
            </button>
            <Link to="/shop" className={styles.continueShopping}>
              Continue Shopping
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

/* CartPage.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  onRemoveItem: PropTypes.func.isRequired,
  onIncrease: PropTypes.func.isRequired,
  onDecrease: PropTypes.func.isRequired,
}; */

export default CartPage;
