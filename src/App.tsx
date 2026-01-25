import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import NavBar from "./Components/NavBar/NavBar";
import HomePage from "./Pages/HomePage/HomePage";
import ShopPage from "./Pages/ShopPage/ShopPage";
import CartPage from "./Pages/CartPage/CartPage";
import { CartItem } from "./types";

const App = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  console.log(cartItems);
  const handleAddToCart = (productToAdd:CartItem, quantity:number) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find(
        (item) => item.title === productToAdd.title
      );

      if (itemExists) {
        // If item exists, map over the items and update the quantity of the matching item
        return prevItems.map((item) =>
          item.title === productToAdd.title
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        // If item does not exist, add it to the cart with the given quantity
        return [...prevItems, { ...productToAdd, quantity: quantity }];
      }
    });
  };

  const handleRemoveItem = (itemToRemove:CartItem) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.title !== itemToRemove.title)
    );
  };

  const handleIncreaseQuantity = (itemToIncrease:CartItem) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.title === itemToIncrease.title
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const handleDecreaseQuantity = (itemToDecrease:CartItem) => {
    setCartItems(
      (prevItems) =>
        prevItems
          .map((item) =>
            item.title === itemToDecrease.title && item.quantity > 1
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0) // Optional: remove if quantity becomes 0
    );
  };

  return (
    <BrowserRouter>
      {/* NavBar is outside Routes so it stays visible on every page */}
      <NavBar cartItemsCount={cartItems.length} />

      <Routes>
        {/* When the path is "/", show HomePage */}
        <Route path="/" element={<HomePage />} />

        {/* When the path is "/shop", show ShopPage */}
        <Route
          path="/shop"
          element={<ShopPage onAddToCart={handleAddToCart} />}
        />

        {/* When the path is "/cart", show CartPage */}
        <Route
          path="/cart"
          element={
            <CartPage
              cartItems={cartItems}
              id={cartItems.id}
              onRemoveItem={handleRemoveItem}
              onIncrease={handleIncreaseQuantity}
              onDecrease={handleDecreaseQuantity}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
