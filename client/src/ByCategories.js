import React, { useEffect, useState } from 'react';
import Header from './Header.js';
import Footer from './footer.js';
import { Link } from 'react-router-dom'

import './App.css';

import { useParams } from 'react-router-dom';

function ByCategories() {
  const { id } = useParams();
  const [category, setCategory] = useState({});
  const [products, setProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const backendURL = 'http://localhost:3000/category';

  useEffect(() => {
    fetch(`${backendURL}/${id}`)
      .then((response) => response.json())
      .then((data) => setCategory(data[0]))
      .catch((error) => console.error('Error fetching category:', error));

    fetch(`${backendURL}/${id}/products`)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setSortedProducts([...data]); 
      })
      .catch((error) => console.error('Error fetching products:', error));
  }, [id, backendURL]);

  const sortByPriceAscending = () => {
    const sortedAscending = [...products].sort((a, b) => a.price - b.price);
    setSortedProducts(sortedAscending);
  };

  const sortByPriceDescending = () => {
    const sortedDescending = [...products].sort((a, b) => b.price - a.price);
    setSortedProducts(sortedDescending);
  };

  return (
    <div className='container'>
      <Header />
      <div>
        <h2>{category.category_name}</h2>
      
        <h3>Товари в цій категорії:</h3>
        
        <div>
          <button className="sort" onClick={sortByPriceAscending}>Спочатку дешевші</button>
          <button className="sort" onClick={sortByPriceDescending}>Спочатку дорожчі</button>
        </div>

          {sortedProducts.map((product,index) => (
            <div className='products_element' key={index}>
            <Link to={`/product/${product.product_id}`} className='category_link'>
                  <span className="category_name">{product.product_name}</span>
                          <br />
                          <img className="category_pic" 
                          src={require(`./img/product_${product.product_id}.png`)} alt="категорія" />
                  <div className='price_buy'>
                    <div className='inline'>{product.price} грн</div>
                    <div className='inline buy'>До товару</div>
                  </div>
            </Link>
            
            </div>
            
          ))}
        
      </div>
      <Footer />
    </div>
  );
}

export default ByCategories;
