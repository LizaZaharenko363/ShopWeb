import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import logo from './logo.png';


import './App.css';

const Button = styled.button`
  background-color: #694293;
  color: #ffffff;
  border-radius: 4px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  padding: 20px;
  font-size: 17px;
  position:absolute;
  top:15px;
  right:15px;

  &:hover {
    background-color: #351656;
  }
`;

const Header = () => {
  return (
    <div className='header'>
        
        <div className='row_style'>
        <img className='logo' src={logo} alt='logo'/>
      <h1 className='site_name'>Worldwide</h1>
      <div className='button_container'>
      <Link to={`/cart`}>
      <Button>Кошик</Button>
      </Link>
      </div>
      </div>
      <div className='row_style' >
        <Link to={'/'} className='menu_choice'>Головна</Link>
        <Link to={'/about'} className='menu_choice'>Про Нас</Link>
        </div>
    </div>
  );
};

export default Header;