import React, { createContext, useState } from 'react';

const CartContext = createContext();
const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [originalPrices, setOriginalPrices] = useState({});

  const addToCart = ({ productId, productName, productPrice }) => {
    const existingItemIndex = cartItems.findIndex((item) => item.id === productId);
  
    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += 1;
      updatedCartItems[existingItemIndex].price *= updatedCartItems[existingItemIndex].quantity; 
      setCartItems(updatedCartItems);
    } else {
      const newCartItem = { id: productId, name: productName, quantity: 1, price:productPrice };
      setCartItems([...cartItems, newCartItem]);
      setOriginalPrices({ ...originalPrices, [productId]: productPrice });
    }
    alert('Додано в кошик');
  };
  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
  };
  const updateCartItemQuantity = (productId, newQuantity) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === productId) {
        const originalPrice = originalPrices[productId] || item.price;
        return { ...item, quantity: newQuantity, price: originalPrice * newQuantity };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };
  const clearCart = () => {
    if (cartItems.length === 0) {
      alert('Кошик пустий');
    } else {
      setCartItems([]);
      setOriginalPrices({});
      alert('Дякуємо за покупку!');
    }
  };
  return (
    <CartContext.Provider
      value={{
        cartItems,
        originalPrices,
        addToCart,
        removeFromCart,
        clearCart,
        updateCartItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
