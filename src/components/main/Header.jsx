import React from 'react';
import './../../styles/header.css';

const Header = () => {
  return (
    <>
      <header>
        <div className='logotype'>
          <img src="./logo.png" alt="" />
          <h1>NigthlyProject</h1>
        </div>
        <div>
          <a href='/' className='btn login-btn'>Войти</a>
        </div>
      </header>
    </>
  )
}

export default Header;
