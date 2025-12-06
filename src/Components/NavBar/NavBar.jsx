import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./NavBar.module.css";

const NavBar = ({ cartItemsCount }) => {
  return (
    <nav className={styles.navBar}>
      <ul className={styles.navList}>
        <li>
          <Link to="/" className={styles.navLink}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/shop" className={styles.navLink}>
            Shop
          </Link>
        </li>
        <li>
          <Link to="/cart" className={styles.navLink}>
            Cart ({cartItemsCount})
          </Link>
        </li>
      </ul>
    </nav>
  );
};

NavBar.propTypes = {
  cartItemsCount: PropTypes.number.isRequired,
};

export default NavBar;
