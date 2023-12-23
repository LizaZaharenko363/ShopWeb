import React, { useEffect, useState, useContext } from 'react';
import Header from './Header.js';
import Footer from './footer.js';
import { useParams } from 'react-router-dom';
import { CartContext } from './CartContext';

import './App.css';



const Main = () => {
    const { id } = useParams();
    const [productData, setProductData] = useState({});
    const [comments, setComments] = useState([]);
    const backendURL = 'http://localhost:3000';
    const { addToCart } = useContext(CartContext);
    
    const handleAddToCart = (productId, productName, productPrice) => {
      addToCart({ productId, productName, productPrice});
    };
    
    useEffect(() => {
      fetch(`${backendURL}/products/${id}`)
        .then((response) => response.json())
        .then((data) => setProductData(data))
        .catch((error) => console.error('Error fetching product:', error));

      fetch(`${backendURL}/comments/${id}`)
        .then((response) => response.json())
        .then((data) => setComments(data))
        .catch((error) => console.error('Error fetching comments:', error));
    }, [id, backendURL]);

    const handleAddComment = async (event) => {
      event.preventDefault();
      const newComment = event.target.comment.value;
    
      try {
        const response = await fetch(`${backendURL}/comments`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            comment: newComment,
            product_id: id,
          }),
        });
    
        if (response.ok) {
          const data = await response.json();
          setComments([...comments, data]);
        } else {
          console.error('Failed to add comment');
        }
      } catch (error) {
        console.error('Error adding comment:', error);
      }
    
      event.target.comment.value = '';
    };

  return (
        <div className='product_page'>
            <div className='product_info'>
            <h2>{productData.product_name}</h2>
            <h3>Опис товару</h3>
            <p>{productData.description}</p>
            <p>{productData.price} грн</p>
            <button onClick={() => handleAddToCart(id, productData.product_name, productData.price)} 
            className="buy price_buy">До корзини</button>

            <h3>Коментарі</h3>
            <div style={{ maxHeight: '250px', overflowY: 'auto' }}>
            {comments.map((comment,index) => (
              <div class="comment" key={index}>
                <p>{comment.comment}</p>
              </div>
            ))}
          </div>
            <p>Додати коментар:</p>
            <form onSubmit={handleAddComment}>
              <div className='inline'>
                <input name="comment" />
                <button type="submit">Надіслати</button>
              </div>
            </form>
            </div>
            <div className='product_pic_div'>
            <img className="product_pic" src={require(`./img/product_${id}.png`)} alt="продукт" />
            </div> 
        </div>
  );
};


const Product = () => {
  return (
    <div className='container'>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Product;
