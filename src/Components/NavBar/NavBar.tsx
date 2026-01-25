import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = ({ cartItemsCount }: { cartItemsCount: number }) => {
  return (
    <header className={styles.header}>
      <nav className={styles.navBar}>
        <Link to="/" className={styles.brand}>
          Shop_Name
        </Link>
        <ul className={styles.navList}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
              }
            >
              Shop
            </NavLink>
          </li>
        </ul>
        <Link to="/cart" className={styles.cartLink}>
          🛒
          {cartItemsCount > 0 && (
            <span className={styles.cartBadge}>{cartItemsCount}</span>
          )}
        </Link>
      </nav>
    </header>
  );
};

export default NavBar;
