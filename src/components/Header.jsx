// src/components/Header.js
import React from 'react';
// Bootstrap CSS
import "../scss/styles.scss";
import * as bootstrap from "bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
// Custom CSS
import "../index.css"; 
// Assets
import logo from '../assets/Logo.svg';
import logoSmall from '../assets/HE-Logo.svg';
import logoMedium from '../assets/HighEnd-Logo.svg';


const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <a href="/">
          <img id='logo' src="" alt="" />
          <img className="logo-large" src={logo} alt="Logo"></img>
          <img className='logo-small' src={logoSmall} alt="Logo"></img>
          <img className='logo-medium' src={logoMedium}alt="Logo"></img>
        </a>
      </div>
      <div className="social-icons">
        {/* Need to Add Login Page <i className="bi bi-person-circle h1"></i> */}
        <a href="https://www.instagram.com/higherendeavors/" target="_blank">
          <i className="bi bi-instagram h1"></i>
        </a>
        <a href="https://www.facebook.com/higherendeavors" target="_blank">
          <i className="bi bi-facebook h1"></i>
        </a>
        <a href="https://x.com/higherendeavors" target="_blank">
          <i className="bi bi-twitter-x h1"></i>
        </a>
        <a href="https://www.youtube.com/higherendeavors" target="_blank">
          <i className="bi bi-youtube h1"></i>
        </a>
      </div>
    </header>
  );
};

export default Header;