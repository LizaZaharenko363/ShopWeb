import React, { useState, useEffect } from 'react';
import Header from './Header.js';
import Footer from './footer.js';
import { Link } from 'react-router-dom'

import './App.css';

const Main = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('http://localhost:3000/category');
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);
  return (
        <div className='main_page'>
      <div className='text'>
        <p>Ласкаво просимо до нашого інтернет-магазину активного відпочинку та туризму! 
            Знайдіть у нас все необхідне для захопливих пригод та незабутніх подорожей. 
            Величезний вибір якісного спорядження, туристичних аксесуарів та екіпіровки 
            для вашого комфорту та безпеки під час подорожей чекає на вас. Дозвольте собі 
            відкрити нові горизонти разом з нами – ми готові зробити ваші пригоди незабутніми!
        </p>
        </div>
        
            <h2>Категорії</h2>
            
            {categories.map((category, index) => (
                <div className='inlines' key={index}>
                <Link to={`/category/${index + 1}`} className='category_link'>
                    <span className="category_name">{category.category_name}</span>
                    <br />
                    <img className="category_pic" src={require(`./img/category_${index + 1}.png`)} alt="категорія" />
                </Link>
                </div>
            ))}
       
        </div>
  );
};



const HomePage = () => {
  return (
    <div className='container'>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default HomePage;
