import React, { useContext, useEffect, useState } from 'react';
import Header from './Header.js';
import Footer from './footer.js';
import { CartContext } from './CartContext';

const CartComponent = () => {
  const { cartItems, updateCartItemQuantity, originalPrices, clearCart, removeFromCart } = useContext(CartContext);
  const [productData, setProductData] = useState([]);
  const backendURL = 'http://localhost:3000/products';

  useEffect(() => {
    fetch(`${backendURL}`)
      .then((response) => response.json())
      .then((data) => setProductData(data))
      .catch((error) => console.error('Error fetching product:', error));
  }, [backendURL]);

  const incrementQuantity = (productId, currentQuantity) => {
    updateCartItemQuantity(productId, currentQuantity + 1);
  };

  const decrementQuantity = (productId, currentQuantity) => {
    if (currentQuantity > 1) {
      updateCartItemQuantity(productId, currentQuantity - 1);
    }
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;

    cartItems.forEach((item) => {
      const originalPrice = originalPrices[item.id] || item.price;
      totalPrice += originalPrice * item.quantity;
    });

    return totalPrice;
  };

  return (
    <div className='container'>
      <Header />
      <div className='cart_page'>
        <h2>Кошик</h2>
        <div className='cart_container'>
            {cartItems.map((item, index) => (
            <div className="cart_item" key={index}>
                <span className='prod_title'>
                {item.name || 'Product Name Not Found'} 
                </span>
                
                <div class="container_flex">
                    <div className="quantity_controls">
                    <button onClick={() => decrementQuantity(item.id, item.quantity)}>-</button>
                    <span className='quantity'> Кількість: {item.quantity} </span>
                    <button onClick={() => incrementQuantity(item.id, item.quantity)}>+</button>
                    </div>
                    <span className='price'>{item.price} грн</span>
                    <button className='cancel' onClick={() => removeFromCart(item.id)}>Видалити</button>
                
                
                </div>
                
            </div>
            ))}
        </div>

        <div className='total_price'>
            Сума: {calculateTotalPrice()} грн
        </div>
        <button className='buy_cart'  onClick={() => clearCart()}>Замовити</button>
        <Footer />
      </div>
    </div>
  );
};

export default CartComponent;
