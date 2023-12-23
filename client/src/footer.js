import React from 'react';

import './App.css';

const Footer = () => {
    return (
      <div className='footer'>
        <p className='contacts'><b>Контакти</b>
          <br />
          +1 234 567 8901
          <br />
          meow@gmail.com
        </p>
        <p className='adress'>
          <b>Адреса</b>
          <br />
          Миколаїв, Соборна 666
        </p>
      </div>
    );
  };

export default Footer;