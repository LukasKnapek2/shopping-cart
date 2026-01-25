import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import NavBar from "./Components/NavBar/NavBar";
import HomePage from "./Pages/HomePage/HomePage";
import ShopPage from "./Pages/ShopPage/ShopPage";
import CartPage from "./Pages/CartPage/CartPage";
import { CartItem, Product } from "./types";

const App = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const handleAddToCart = (product: Product, quantity: number) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((item) => item.id === product.id);

      if (itemExists) {
        // If item exists, map over the items and update the quantity of the matching item
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        // If item does not exist, create a new CartItem from the Product
        const newItem: CartItem = {
          id: product.id,
          title: product.title,
          price: product.price,
          imageUrl: product.image, // Correctly map from 'image' to 'imageUrl'
          quantity: quantity,
        };
        return [...prevItems, newItem];
      }
    });
  };

  const handleRemoveItem = (itemToRemove: CartItem) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== itemToRemove.id)
    );
  };

  const handleIncreaseQuantity = (itemToIncrease: CartItem) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemToIncrease.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const handleDecreaseQuantity = (itemToDecrease: CartItem) => {
    setCartItems(
      (prevItems) =>
        prevItems
          .map((item) =>
            item.id === itemToDecrease.id && item.quantity > 1
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter(
            (item) =>
              !(item.id === itemToDecrease.id && item.quantity === 1) ||
              item.id !== itemToDecrease.id
          )
    );
  };

  return (
    <BrowserRouter>
      {/* NavBar is outside Routes so it stays visible on every page */}
      <NavBar cartItemsCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)} />

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
